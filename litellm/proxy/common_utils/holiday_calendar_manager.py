from __future__ import annotations

from datetime import datetime, timezone
from typing import TYPE_CHECKING, Final
from zoneinfo import ZoneInfo

from litellm._logging import verbose_proxy_logger
from litellm.litellm_core_utils.llm_cost_calc.holiday_calendars import (
    CHINA_HOLIDAYS,
    HolidayCalendar,
    set_runtime_holiday_calendars,
)
from litellm.models.holiday_calendar import (
    HOLIDAY_CALENDAR_CONFIG_KEY,
    HolidayCalendarDocument,
    HolidayCalendarState,
    HolidayCalendarVersion,
)
from litellm.proxy.common_utils.china_holiday_notice import (
    ParsedChinaHolidayNotice,
    find_and_fetch_china_holiday_notice,
)
from litellm.repositories.config_repository import ConfigRepository

if TYPE_CHECKING:
    from litellm.proxy.utils import PrismaClient

CHINA_CALENDAR_NAME: Final = "china"
CHINA_NOTICE_SOURCE: Final = "https://www.gov.cn/zhengce/zhengceku/202511/content_7047091.htm"


def _builtin_state() -> HolidayCalendarState:
    return HolidayCalendarState(
        timezone=CHINA_HOLIDAYS.timezone,
        versions=(
            HolidayCalendarVersion(
                year=2026,
                status="active",
                dates=tuple(sorted(CHINA_HOLIDAYS.dates)),
                source_url=CHINA_NOTICE_SOURCE,
            ),
        ),
    )


def _empty_document() -> HolidayCalendarDocument:
    return HolidayCalendarDocument(
        revision=0,
        calendars={CHINA_CALENDAR_NAME: _builtin_state()},
    )


def _with_calendar(
    document: HolidayCalendarDocument,
    calendar_name: str,
    state: HolidayCalendarState,
) -> HolidayCalendarDocument:
    return document.model_copy(
        update={
            "revision": document.revision + 1,
            "calendars": {**document.calendars, calendar_name: state},
        }
    )


def _with_version(
    state: HolidayCalendarState,
    version: HolidayCalendarVersion,
) -> HolidayCalendarState:
    versions: Final = tuple(
        existing
        for existing in state.versions
        if not (
            existing.year == version.year
            and (
                existing.status == version.status
                or (version.status == "pending" and existing.status == "needs_source")
            )
        )
    )
    return state.model_copy(update={"versions": (*versions, version)})


async def load_holiday_calendar_document(prisma_client: PrismaClient) -> HolidayCalendarDocument:
    stored: Final = await ConfigRepository(prisma_client).get_param(HOLIDAY_CALENDAR_CONFIG_KEY)
    if stored is None:
        return _empty_document()
    document: Final = HolidayCalendarDocument.model_validate(stored.param_value)
    china: Final = document.calendars.get(CHINA_CALENDAR_NAME)
    if china is None:
        china = _builtin_state()
    elif china.version_for_year(2026, "active") is None:
        china = _with_version(china, _builtin_state().versions[0])
    return document.model_copy(
        update={"calendars": {**document.calendars, CHINA_CALENDAR_NAME: china}}
    )


def refresh_runtime_holiday_calendars(document: HolidayCalendarDocument) -> None:
    calendars: Final[dict[str, HolidayCalendar]] = {}
    for name, state in document.calendars.items():
        dates: Final = frozenset(
            holiday_date
            for version in state.versions
            if version.status == "active"
            for holiday_date in version.dates
        )
        if dates:
            calendars[name] = HolidayCalendar(
                name=name,
                timezone=state.timezone,
                dates=dates,
            )
    set_runtime_holiday_calendars(calendars, revision=document.revision)


async def sync_runtime_holiday_calendars(prisma_client: PrismaClient) -> None:
    refresh_runtime_holiday_calendars(await load_holiday_calendar_document(prisma_client))


async def store_pending_holiday_calendar(
    *, prisma_client: PrismaClient, calendar_name: str, notice: ParsedChinaHolidayNotice
) -> HolidayCalendarDocument:
    document: Final = await load_holiday_calendar_document(prisma_client)
    state: Final = document.calendars.get(calendar_name)
    if state is None:
        raise ValueError(f"Unknown holiday calendar {calendar_name!r}")
    pending: Final = HolidayCalendarVersion(
        year=notice.year,
        status="pending",
        dates=notice.dates,
        source_url=notice.source_url,
        source_hash=notice.source_hash,
        published_date=notice.published_date,
    )
    updated: Final = _with_calendar(document, calendar_name, _with_version(state, pending))
    saved: Final = await ConfigRepository(prisma_client, use_writer=True).set_param_if_revision(
        HOLIDAY_CALENDAR_CONFIG_KEY,
        updated.model_dump(mode="json"),
        document.revision,
    )
    if not saved:
        raise ValueError("Holiday calendar changed while loading the notice. Refresh and try again")
    return updated


async def confirm_pending_holiday_calendar(
    *,
    prisma_client: PrismaClient,
    calendar_name: str,
    year: int,
    revision: int,
    source_hash: str,
    confirmed_by: str,
) -> HolidayCalendarDocument:
    document: Final = await load_holiday_calendar_document(prisma_client)
    state: Final = document.calendars.get(calendar_name)
    pending: Final = state.version_for_year(year, "pending") if state is not None else None
    needs_source: Final = state.version_for_year(year, "needs_source") if state is not None else None
    candidate: Final = pending or needs_source
    if state is None or candidate is None:
        raise ValueError(f"No holiday calendar version exists for {calendar_name} {year}")
    if candidate.source_hash != source_hash:
        raise ValueError("Pending holiday calendar changed. Refresh and review it again")
    active_without_target: Final = tuple(
        version.model_copy(update={"status": "archived"})
        if version.year == year and version.status == "active"
        else version
        for version in state.versions
        if (version.year, version.status) != (year, "pending")
        and (version.year, version.status) != (year, "needs_source")
    )
    active: Final = candidate.model_copy(
        update={
            "status": "active",
            "confirmed_by": confirmed_by,
            "confirmed_at": datetime.now(timezone.utc),
        }
    )
    updated_state: Final = state.model_copy(update={"versions": (*active_without_target, active)})
    updated: Final = _with_calendar(document, calendar_name, updated_state)
    saved: Final = await ConfigRepository(prisma_client, use_writer=True).set_param_if_revision(
        HOLIDAY_CALENDAR_CONFIG_KEY,
        updated.model_dump(mode="json"),
        revision,
    )
    if not saved:
        raise ValueError("Holiday calendar changed before confirmation. Refresh and try again")
    refresh_runtime_holiday_calendars(updated)
    return updated


async def ensure_next_year_pending(*, prisma_client: PrismaClient, year: int) -> HolidayCalendarDocument:
    document: Final = await load_holiday_calendar_document(prisma_client)
    state: Final = document.calendars[CHINA_CALENDAR_NAME]
    if any(
        version.year == year and version.status in ("active", "pending", "needs_source")
        for version in state.versions
    ):
        return document
    pending: Final = HolidayCalendarVersion(
        year=year,
        status="needs_source",
        error="Official notice URL has not been loaded",
    )
    updated: Final = _with_calendar(document, CHINA_CALENDAR_NAME, _with_version(state, pending))
    saved: Final = await ConfigRepository(prisma_client, use_writer=True).set_param_if_revision(
        HOLIDAY_CALENDAR_CONFIG_KEY,
        updated.model_dump(mode="json"),
        document.revision,
    )
    if not saved:
        return await load_holiday_calendar_document(prisma_client)
    return updated


async def ensure_holiday_calendar_coverage(prisma_client: PrismaClient) -> None:
    now: Final = datetime.now(ZoneInfo(CHINA_HOLIDAYS.timezone))
    years: Final = (now.year,) if now.month < 12 else (now.year, now.year + 1)
    for year in years:
        document: Final = await load_holiday_calendar_document(prisma_client)
        state: Final = document.calendars[CHINA_CALENDAR_NAME]
        if any(
            version.year == year and version.status in ("active", "pending")
            for version in state.versions
        ):
            continue
        try:
            notice: Final = await find_and_fetch_china_holiday_notice(year=year)
            await store_pending_holiday_calendar(
                prisma_client=prisma_client,
                calendar_name=CHINA_CALENDAR_NAME,
                notice=notice,
            )
        except Exception as exc:
            verbose_proxy_logger.warning("Unable to fetch the %s China holiday notice: %s", year, exc)
            await ensure_next_year_pending(prisma_client=prisma_client, year=year)
