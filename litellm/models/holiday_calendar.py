from datetime import date, datetime
from typing import Final, Literal

from pydantic import ConfigDict, Field, field_validator, model_validator

from litellm.types.llms.base import LiteLLMBaseModel

HOLIDAY_CALENDAR_CONFIG_KEY: Final = "off_peak_holiday_calendars"
HolidayCalendarStatus = Literal["pending", "active", "archived", "needs_source"]


class HolidayCalendarVersion(LiteLLMBaseModel):
    model_config = ConfigDict(frozen=True)

    year: int = Field(ge=2000, le=2100)
    status: HolidayCalendarStatus
    dates: tuple[str, ...] = ()
    source_url: str | None = None
    source_hash: str | None = None
    published_date: str | None = None
    confirmed_by: str | None = None
    confirmed_at: datetime | None = None
    error: str | None = None

    @field_validator("dates")
    @classmethod
    def _validate_dates(cls, values: tuple[str, ...]) -> tuple[str, ...]:
        parsed: list[date] = []
        for value in values:
            try:
                parsed.append(date.fromisoformat(value))
            except ValueError as exc:
                raise ValueError(f"Invalid holiday date {value!r}") from exc
        return tuple(value.isoformat() for value in sorted(set(parsed)))

    @model_validator(mode="after")
    def _active_requires_dates(self) -> "HolidayCalendarVersion":
        if self.status == "active" and not self.dates:
            raise ValueError("active holiday calendar versions require at least one date")
        return self


class HolidayCalendarState(LiteLLMBaseModel):
    model_config = ConfigDict(frozen=True)

    timezone: str
    versions: tuple[HolidayCalendarVersion, ...] = ()

    @model_validator(mode="after")
    def _one_active_version_per_year(self) -> "HolidayCalendarState":
        active_years: Final = tuple(version.year for version in self.versions if version.status == "active")
        if len(active_years) != len(set(active_years)):
            raise ValueError("a holiday calendar can only have one active version per year")
        return self

    def version_for_year(
        self, year: int, status: HolidayCalendarStatus | None = None
    ) -> HolidayCalendarVersion | None:
        return next(
            (
                version
                for version in self.versions
                if version.year == year and (status is None or version.status == status)
            ),
            None,
        )


class HolidayCalendarDocument(LiteLLMBaseModel):
    model_config = ConfigDict(frozen=True)

    revision: int = Field(default=0, ge=0)
    calendars: dict[str, HolidayCalendarState] = Field(default_factory=dict)


class HolidayCalendarRefreshRequest(LiteLLMBaseModel):
    model_config = ConfigDict(frozen=True)

    year: int = Field(ge=2000, le=2100)
    source_url: str


class HolidayCalendarConfirmRequest(LiteLLMBaseModel):
    model_config = ConfigDict(frozen=True)

    revision: int = Field(ge=0)
    source_hash: str
