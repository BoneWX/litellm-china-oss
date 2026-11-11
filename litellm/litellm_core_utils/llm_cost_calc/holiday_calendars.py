"""Named holiday calendars for off-peak pricing.

The China dates come from the State Council's 2026 holiday schedule:
https://www.gov.cn/zhengce/zhengceku/202511/content_7047091.htm
"""

from collections.abc import Mapping
from dataclasses import dataclass
from threading import Lock
from types import MappingProxyType
from typing import Final


@dataclass(frozen=True, slots=True)
class HolidayCalendar:
    name: str
    timezone: str
    dates: frozenset[str]


_CHINA_2026_DATES: Final = frozenset(
    {
        "2026-01-01",
        "2026-01-02",
        "2026-01-03",
        "2026-02-15",
        "2026-02-16",
        "2026-02-17",
        "2026-02-18",
        "2026-02-19",
        "2026-02-20",
        "2026-02-21",
        "2026-02-22",
        "2026-02-23",
        "2026-04-04",
        "2026-04-05",
        "2026-04-06",
        "2026-05-01",
        "2026-05-02",
        "2026-05-03",
        "2026-05-04",
        "2026-05-05",
        "2026-06-19",
        "2026-06-20",
        "2026-06-21",
        "2026-09-25",
        "2026-09-26",
        "2026-09-27",
        "2026-10-01",
        "2026-10-02",
        "2026-10-03",
        "2026-10-04",
        "2026-10-05",
        "2026-10-06",
        "2026-10-07",
    }
)

CHINA_HOLIDAYS: Final = HolidayCalendar(
    name="china",
    timezone="Asia/Shanghai",
    dates=_CHINA_2026_DATES,
)

_HOLIDAY_CALENDARS: Final = MappingProxyType(
    {
        "china": CHINA_HOLIDAYS,
        "chinese": CHINA_HOLIDAYS,
        "cn": CHINA_HOLIDAYS,
    }
)

_CANONICAL_CALENDAR_NAMES: Final = MappingProxyType(
    {
        "china": "china",
        "chinese": "china",
        "cn": "china",
    }
)

_RUNTIME_CALENDARS: Mapping[str, HolidayCalendar] = MappingProxyType({})
_RUNTIME_CALENDARS_REVISION: int = -1
_RUNTIME_CALENDARS_LOCK: Final = Lock()


def get_holiday_calendar(value: object) -> HolidayCalendar | None:
    if not isinstance(value, str):
        return None
    normalized: Final = value.strip().lower()
    canonical: Final = _CANONICAL_CALENDAR_NAMES.get(normalized)
    if canonical is None:
        return None
    with _RUNTIME_CALENDARS_LOCK:
        return _RUNTIME_CALENDARS.get(canonical) or _HOLIDAY_CALENDARS.get(normalized)


def set_runtime_holiday_calendars(calendars: Mapping[str, HolidayCalendar], *, revision: int) -> bool:
    global _RUNTIME_CALENDARS, _RUNTIME_CALENDARS_REVISION  # rebind-ok: guarded immutable snapshot replacement
    with _RUNTIME_CALENDARS_LOCK:
        if revision < _RUNTIME_CALENDARS_REVISION:
            return False
        _RUNTIME_CALENDARS = MappingProxyType(dict(calendars))
        _RUNTIME_CALENDARS_REVISION = revision
        return True


def clear_runtime_holiday_calendars() -> None:
    global _RUNTIME_CALENDARS, _RUNTIME_CALENDARS_REVISION  # rebind-ok: test-only snapshot reset
    with _RUNTIME_CALENDARS_LOCK:
        _RUNTIME_CALENDARS = MappingProxyType({})
        _RUNTIME_CALENDARS_REVISION = -1


def validate_holiday_calendar(value: object) -> None:
    if value is None or value == "":
        return
    if get_holiday_calendar(value) is not None:
        return
    raise ValueError(
        f"Unknown off-peak holiday calendar {value!r}. Available calendars: china, chinese, cn"
    )
