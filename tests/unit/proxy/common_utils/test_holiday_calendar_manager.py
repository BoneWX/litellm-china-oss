from __future__ import annotations

from collections.abc import Iterator, Sequence

import pytest

from litellm.litellm_core_utils.llm_cost_calc.holiday_calendars import (
    CHINA_HOLIDAYS,
    clear_runtime_holiday_calendars,
    get_holiday_calendar,
)
from litellm.models.holiday_calendar import (
    HOLIDAY_CALENDAR_CONFIG_KEY,
    HolidayCalendarDocument,
    HolidayCalendarState,
    HolidayCalendarVersion,
)
from litellm.proxy.common_utils import holiday_calendar_manager
from litellm.repositories.config_repository import ConfigParam, ConfigRepository


@pytest.fixture(autouse=True)
def reset_runtime_holiday_calendars() -> Iterator[None]:
    clear_runtime_holiday_calendars()
    yield
    clear_runtime_holiday_calendars()


def _document(
    *versions: HolidayCalendarVersion, revision: int = 1
) -> HolidayCalendarDocument:
    return HolidayCalendarDocument(
        revision=revision,
        calendars={
            "china": HolidayCalendarState(
                timezone="Asia/Shanghai",
                versions=versions,
            )
        },
    )


def _stored_param(document: HolidayCalendarDocument) -> ConfigParam:
    return ConfigParam(HOLIDAY_CALENDAR_CONFIG_KEY, document.model_dump(mode="json"))


@pytest.mark.asyncio
async def test_load_document_restores_builtin_active_dates_when_only_an_archived_year_exists(
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    archived = HolidayCalendarVersion(
        year=2026,
        status="archived",
        dates=("2026-01-01",),
    )
    stored = _document(archived, revision=7)

    async def get_param(self: ConfigRepository, param_name: str) -> ConfigParam | None:
        assert param_name == HOLIDAY_CALENDAR_CONFIG_KEY
        return _stored_param(stored)

    monkeypatch.setattr(ConfigRepository, "get_param", get_param)

    document = await holiday_calendar_manager.load_holiday_calendar_document(object())
    active = document.calendars["china"].version_for_year(2026, "active")

    assert document.revision == 7
    assert active is not None
    assert active.dates == tuple(sorted(CHINA_HOLIDAYS.dates))
    assert document.calendars["china"].version_for_year(2026, "archived") == archived


@pytest.mark.asyncio
async def test_confirm_replaces_the_same_year_active_version_and_persists_with_cas(
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    old_active = HolidayCalendarVersion(
        year=2027,
        status="active",
        dates=("2027-01-01",),
        source_hash="old",
    )
    pending = HolidayCalendarVersion(
        year=2027,
        status="pending",
        dates=("2027-12-31",),
        source_url="https://www.gov.cn/2027-notice",
        source_hash="new",
    )
    stored = _document(old_active, pending, revision=4)
    writes: list[tuple[str, object, int]] = []

    async def get_param(self: ConfigRepository, param_name: str) -> ConfigParam | None:
        return _stored_param(stored)

    async def set_param_if_revision(
        self: ConfigRepository, param_name: str, param_value: object, revision: int
    ) -> bool:
        writes.append((param_name, param_value, revision))
        return True

    monkeypatch.setattr(ConfigRepository, "get_param", get_param)
    monkeypatch.setattr(
        ConfigRepository, "set_param_if_revision", set_param_if_revision
    )

    confirmed = await holiday_calendar_manager.confirm_pending_holiday_calendar(
        prisma_client=object(),
        calendar_name="china",
        year=2027,
        revision=4,
        source_hash="new",
        confirmed_by="admin@example.com",
    )

    versions: Sequence[HolidayCalendarVersion] = confirmed.calendars["china"].versions
    assert writes[0][0] == HOLIDAY_CALENDAR_CONFIG_KEY
    assert writes[0][2] == 4
    assert confirmed.revision == 5
    assert confirmed.calendars["china"].version_for_year(2027, "pending") is None
    active = confirmed.calendars["china"].version_for_year(2027, "active")
    assert active is not None
    assert active.confirmed_by == "admin@example.com"
    assert active.dates == ("2027-12-31",)
    assert [version.status for version in versions if version.year == 2027] == [
        "archived",
        "active",
    ]


def test_runtime_refresh_only_publishes_active_dates() -> None:
    clear_runtime_holiday_calendars()
    try:
        document = _document(
            HolidayCalendarVersion(year=2026, status="archived", dates=("2026-10-01",)),
            HolidayCalendarVersion(year=2027, status="active", dates=("2027-10-01",)),
            HolidayCalendarVersion(year=2028, status="pending", dates=("2028-10-01",)),
        )

        holiday_calendar_manager.refresh_runtime_holiday_calendars(document)
        calendar = get_holiday_calendar("china")

        assert calendar is not None
        assert calendar.dates == frozenset({"2027-10-01"})
    finally:
        clear_runtime_holiday_calendars()
