from __future__ import annotations

import json
from typing import TYPE_CHECKING, Final

from fastapi import APIRouter, Depends, Header, HTTPException

from litellm._logging import verbose_proxy_logger
from litellm.models.holiday_calendar import (
    HolidayCalendarConfirmRequest,
    HolidayCalendarDocument,
    HolidayCalendarRefreshRequest,
)
from litellm.proxy._types import (
    CommonProxyErrors,
    LitellmTableNames,
    LitellmUserRoles,
    UserAPIKeyAuth,
)
from litellm.proxy.auth.user_api_key_auth import user_api_key_auth
from litellm.proxy.common_utils.china_holiday_notice import fetch_china_holiday_notice
from litellm.proxy.common_utils.config_sync_pubsub import publish_config_change_for_object_type
from litellm.proxy.common_utils.holiday_calendar_manager import (
    CHINA_CALENDAR_NAME,
    confirm_pending_holiday_calendar,
    load_holiday_calendar_document,
    refresh_runtime_holiday_calendars,
    store_pending_holiday_calendar,
)

router: Final = APIRouter()
_READ_ROLES: Final = frozenset(
    {
        LitellmUserRoles.PROXY_ADMIN.value,
        LitellmUserRoles.PROXY_ADMIN_VIEW_ONLY.value,
    }
)

if TYPE_CHECKING:
    from litellm.proxy.utils import PrismaClient


def _prisma_client() -> PrismaClient:
    from litellm.proxy.proxy_server import prisma_client

    if prisma_client is None:
        raise HTTPException(
            status_code=500,
            detail={"error": CommonProxyErrors.db_not_connected_error.value},
        )
    return prisma_client


def _require_admin(user_api_key_dict: UserAPIKeyAuth) -> None:
    if user_api_key_dict.user_role != LitellmUserRoles.PROXY_ADMIN.value:
        raise HTTPException(status_code=403, detail="Only proxy admins can change holiday calendars")


async def _emit_confirmation_audit_log(
    *,
    before_document: HolidayCalendarDocument,
    document: HolidayCalendarDocument,
    calendar_name: str,
    year: int,
    user_api_key_dict: UserAPIKeyAuth,
    litellm_changed_by: str | None,
) -> None:
    from litellm.proxy.management_helpers.audit_logs import (
        create_object_audit_log,
        is_audit_logging_enabled,
    )

    if not is_audit_logging_enabled():
        return

    state: Final = document.calendars[calendar_name]
    before_state: Final = before_document.calendars[calendar_name]
    before_versions: Final = [
        version.model_dump(mode="json") for version in before_state.versions if version.year == year
    ]
    after_versions: Final = [version.model_dump(mode="json") for version in state.versions if version.year == year]
    try:
        await create_object_audit_log(
            object_id=f"off_peak_holiday_calendars:{calendar_name}:{year}",
            action="updated",
            litellm_changed_by=litellm_changed_by,
            user_api_key_dict=user_api_key_dict,
            litellm_proxy_admin_name="proxy_admin",
            table_name=LitellmTableNames.CONFIG_TABLE_NAME,
            before_value=json.dumps(
                {
                    "calendar": calendar_name,
                    "year": year,
                    "revision": before_document.revision,
                    "versions": before_versions,
                }
            ),
            after_value=json.dumps(
                {
                    "calendar": calendar_name,
                    "year": year,
                    "revision": document.revision,
                    "versions": after_versions,
                }
            ),
        )
    except Exception as exc:  # noqa: BLE001  # audit must not roll back an applied calendar
        verbose_proxy_logger.warning("Unable to write holiday calendar confirmation audit log: %s", exc)


@router.get(
    "/config/off_peak_holiday_calendars",
    tags=["Cost Tracking"],
    response_model=HolidayCalendarDocument,
)
async def get_off_peak_holiday_calendars(
    user_api_key_dict: UserAPIKeyAuth = Depends(user_api_key_auth),
) -> HolidayCalendarDocument:
    if user_api_key_dict.user_role not in _READ_ROLES:
        raise HTTPException(status_code=403, detail="Only proxy admins can view holiday calendars")
    document: Final = await load_holiday_calendar_document(_prisma_client())
    refresh_runtime_holiday_calendars(document)
    return document


@router.post(
    "/config/off_peak_holiday_calendars/{calendar_name}/refresh",
    tags=["Cost Tracking"],
    response_model=HolidayCalendarDocument,
)
async def refresh_off_peak_holiday_calendar(
    calendar_name: str,
    request: HolidayCalendarRefreshRequest,
    user_api_key_dict: UserAPIKeyAuth = Depends(user_api_key_auth),
) -> HolidayCalendarDocument:
    _require_admin(user_api_key_dict)
    if calendar_name != CHINA_CALENDAR_NAME:
        raise HTTPException(status_code=404, detail=f"Unknown holiday calendar {calendar_name!r}")
    prisma_client: Final = _prisma_client()
    try:
        notice: Final = await fetch_china_holiday_notice(
            source_url=request.source_url,
            year=request.year,
        )
        document: Final = await store_pending_holiday_calendar(
            prisma_client=prisma_client,
            calendar_name=calendar_name,
            notice=notice,
        )
        await publish_config_change_for_object_type("off_peak_holiday_calendars")
        return document
    except HTTPException:
        raise
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    except Exception as exc:
        raise HTTPException(status_code=502, detail=f"Unable to load official holiday notice: {exc}") from exc


@router.post(
    "/config/off_peak_holiday_calendars/{calendar_name}/{year}/confirm",
    tags=["Cost Tracking"],
    response_model=HolidayCalendarDocument,
)
async def confirm_off_peak_holiday_calendar(
    calendar_name: str,
    year: int,
    request: HolidayCalendarConfirmRequest,
    user_api_key_dict: UserAPIKeyAuth = Depends(user_api_key_auth),
    litellm_changed_by: str | None = Header(
        None,
        description="Tracks an authorized admin acting on behalf of another user in the confirmation audit log",
    ),
) -> HolidayCalendarDocument:
    _require_admin(user_api_key_dict)
    if calendar_name != CHINA_CALENDAR_NAME:
        raise HTTPException(status_code=404, detail=f"Unknown holiday calendar {calendar_name!r}")
    try:
        prisma_client: Final = _prisma_client()
        before_document: Final = await load_holiday_calendar_document(prisma_client)
        document: Final = await confirm_pending_holiday_calendar(
            prisma_client=prisma_client,
            calendar_name=calendar_name,
            year=year,
            revision=request.revision,
            source_hash=request.source_hash,
            confirmed_by=user_api_key_dict.user_id or "proxy_admin",
        )
        await publish_config_change_for_object_type("off_peak_holiday_calendars")
        await _emit_confirmation_audit_log(
            before_document=before_document,
            document=document,
            calendar_name=calendar_name,
            year=year,
            user_api_key_dict=user_api_key_dict,
            litellm_changed_by=litellm_changed_by,
        )
        return document
    except HTTPException:
        raise
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
