import hashlib
import html
import json
import re
from dataclasses import dataclass
from datetime import date, timedelta
from typing import Final
from urllib.parse import urljoin, urlparse

import httpx

_HOLIDAY_NAMES: Final = ("元旦", "春节", "清明节", "劳动节", "端午节", "中秋节", "国庆节")
_SECTION_PATTERN: Final = re.compile(
    r"([一二三四五六七])、([^：:]{1,20})[：:](.*?)(?=(?:[一二三四五六七]、[^：:]{1,20}[：:])|$)"
)
_RANGE_PATTERN: Final = re.compile(
    r"(\d{1,2})月(\d{1,2})日(?:（[^）]*）)?至(?:(\d{1,2})月)?(\d{1,2})日"
)
_DATE_PATTERN: Final = re.compile(r"(\d{1,2})月(\d{1,2})日")
_COUNT_PATTERN: Final = re.compile(r"共(\d+)天")
_POLICY_SEARCH_URL: Final = "https://sousuo.www.gov.cn/search-gov/data"


@dataclass(frozen=True, slots=True)
class ParsedChinaHolidayNotice:
    year: int
    dates: tuple[str, ...]
    source_url: str
    source_hash: str
    published_date: str | None


def _official_url(source_url: str) -> str:
    parsed: Final = urlparse(source_url)
    hostname: Final = parsed.hostname
    if parsed.scheme != "https" or hostname is None or not (hostname == "gov.cn" or hostname.endswith(".gov.cn")):
        raise ValueError("Holiday notice source must be an HTTPS gov.cn URL")
    return source_url


async def _get_official_notice_response(
    *, client: httpx.AsyncClient, source_url: str
) -> httpx.Response:
    current_url: Final = _official_url(source_url)
    redirect_url: str = current_url
    for _ in range(5):
        response: Final = await client.get(redirect_url)
        if response.status_code not in (301, 302, 303, 307, 308):
            response.raise_for_status()
            return response
        location: Final = response.headers.get("location")
        if not location:
            raise ValueError("Official holiday notice redirect is missing its destination")
        redirect_url = _official_url(urljoin(str(response.url), location))
    raise ValueError("Official holiday notice redirected too many times")


def _date_range(year: int, month: int, start_day: int, end_month: int | None, end_day: int) -> tuple[date, ...]:
    start: Final = date(year, month, start_day)
    end: Final = date(year, end_month or month, end_day)
    if end < start:
        raise ValueError("Holiday date range cannot run backwards")
    return tuple(start + timedelta(days=offset) for offset in range((end - start).days + 1))


def _section_dates(section: str, year: int) -> tuple[date, ...]:
    range_match: Final = _RANGE_PATTERN.search(section)
    if range_match is not None:
        month, start_day, end_month, end_day = range_match.groups()
        dates: Final = _date_range(
            year=year,
            month=int(month),
            start_day=int(start_day),
            end_month=int(end_month) if end_month is not None else None,
            end_day=int(end_day),
        )
    else:
        date_matches: Final = tuple(_DATE_PATTERN.finditer(section))
        if not date_matches:
            return ()
        month, day = date_matches[0].groups()
        start: Final = date(year, int(month), int(day))
        count_match: Final = _COUNT_PATTERN.search(section)
        dates = (
            (start,)
            if count_match is None
            else tuple(start + timedelta(days=offset) for offset in range(int(count_match.group(1))))
        )
    count_match: Final = _COUNT_PATTERN.search(section)
    if count_match is not None and int(count_match.group(1)) != len(dates):
        raise ValueError(
            f"Holiday section declares {count_match.group(1)} days but its date range contains {len(dates)}"
        )
    return dates


def parse_china_holiday_notice(*, html_body: str, source_url: str, year: int) -> ParsedChinaHolidayNotice:
    normalized_url: Final = _official_url(source_url)
    text: Final = re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", html_body)))
    if f"{year}年部分节假日安排的通知" not in text:
        raise ValueError(f"Official notice does not match target year {year}")

    all_dates: list[date] = []
    covered_holidays: set[str] = set()
    for section_match in _SECTION_PATTERN.finditer(text):
        _, heading, section = section_match.groups()
        holiday_names: Final = tuple(name for name in _HOLIDAY_NAMES if name in heading)
        if not holiday_names:
            continue
        duplicates: Final = covered_holidays.intersection(holiday_names)
        if duplicates:
            raise ValueError(f"Official notice repeats holiday section: {', '.join(sorted(duplicates))}")
        section_dates: Final = _section_dates(section, year)
        if not section_dates:
            raise ValueError(f"Official notice has no dates for {', '.join(holiday_names)}")
        covered_holidays.update(holiday_names)
        all_dates.extend(section_dates)
    missing_holidays: Final = tuple(name for name in _HOLIDAY_NAMES if name not in covered_holidays)
    if missing_holidays:
        raise ValueError(f"Official notice is missing holiday sections: {', '.join(missing_holidays)}")

    published_match: Final = re.search(r"发布日期[：:]\s*(\d{4}年\d{1,2}月\d{1,2}日)", text)
    return ParsedChinaHolidayNotice(
        year=year,
        dates=tuple(value.isoformat() for value in sorted(set(all_dates))),
        source_url=normalized_url,
        source_hash=hashlib.sha256(html_body.encode("utf-8")).hexdigest(),
        published_date=published_match.group(1) if published_match is not None else None,
    )


async def fetch_china_holiday_notice(*, source_url: str, year: int) -> ParsedChinaHolidayNotice:
    normalized_url: Final = _official_url(source_url)
    async with httpx.AsyncClient(follow_redirects=False, timeout=20.0) as client:
        response: Final = await _get_official_notice_response(client=client, source_url=normalized_url)
        if len(response.content) > 5_000_000:
            raise ValueError("Official holiday notice is unexpectedly large")
        return parse_china_holiday_notice(html_body=response.text, source_url=str(response.url), year=year)


def official_notice_links_from_search_payload(*, payload: object, year: int) -> tuple[str, ...]:
    expected_title: Final = f"国务院办公厅关于{year}年部分节假日安排的通知"
    links: set[str] = set()
    pending: list[object] = [payload]
    while pending:
        current: Final = pending.pop()
        if isinstance(current, dict):
            title: Final = current.get("title")
            source_url: Final = current.get("url")
            if isinstance(title, str) and isinstance(source_url, str):
                plain_title: Final = re.sub(r"\s+", "", html.unescape(re.sub(r"<[^>]+>", "", title)))
                if plain_title == expected_title:
                    try:
                        links.add(_official_url(source_url))
                    except ValueError:
                        continue
            pending.extend(current.values())
        elif isinstance(current, list):
            pending.extend(current)
    return tuple(sorted(links))


async def find_and_fetch_china_holiday_notice(*, year: int) -> ParsedChinaHolidayNotice:
    async with httpx.AsyncClient(follow_redirects=False, timeout=20.0) as client:
        search_response: Final = await client.get(
            _POLICY_SEARCH_URL,
            params={
                "q": f"国务院办公厅关于{year}年部分节假日安排的通知",
                "t": "zhengcelibrary",
                "sort": "score",
                "sortType": 1,
                "searchfield": "title:content:summary",
                "p": 1,
                "n": 10,
                "type": "gwyzcwjk",
            },
            headers={"User-Agent": "Mozilla/5.0", "Accept-Language": "zh-CN,zh;q=0.9"},
        )
        search_response.raise_for_status()
        search_payload: Final = json.loads(search_response.text)
        for source_url in official_notice_links_from_search_payload(payload=search_payload, year=year)[:8]:
            try:
                notice_response: Final = await _get_official_notice_response(client=client, source_url=source_url)
                if len(notice_response.content) > 5_000_000:
                    continue
                return parse_china_holiday_notice(
                    html_body=notice_response.text,
                    source_url=str(notice_response.url),
                    year=year,
                )
            except (httpx.HTTPError, ValueError):
                continue
    raise ValueError(f"Unable to find the official {year} holiday notice")
