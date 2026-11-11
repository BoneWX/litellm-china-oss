import httpx
import pytest

from litellm.proxy.common_utils.china_holiday_notice import (
    _get_official_notice_response,
    official_notice_links_from_search_payload,
    parse_china_holiday_notice,
)

NOTICE = """
<h1>国务院办公厅关于2026年部分节假日安排的通知</h1>
<p>发布日期： 2025年11月04日</p>
<p>一、元旦： 1月1日（周四）至3日（周六）放假调休，共3天。</p>
<p>二、春节： 2月15日（周日）至23日（周一）放假调休，共9天。</p>
<p>三、清明节： 4月4日（周六）至6日（周一）放假，共3天。</p>
<p>四、劳动节： 5月1日（周五）至5日（周二）放假调休，共5天。</p>
<p>五、端午节： 6月19日（周五）至21日（周日）放假，共3天。</p>
<p>六、中秋节： 9月25日（周五）至27日（周日）放假，共3天。</p>
<p>七、国庆节： 10月1日（周四）至7日（周三）放假调休，共7天。</p>
"""


def test_parse_china_holiday_notice_extracts_all_holiday_ranges() -> None:
    parsed = parse_china_holiday_notice(
        html_body=NOTICE,
        source_url="https://www.gov.cn/zhengce/example.htm",
        year=2026,
    )

    assert parsed.year == 2026
    assert parsed.published_date == "2025年11月04日"
    assert len(parsed.dates) == 33
    assert parsed.dates[0] == "2026-01-01"
    assert parsed.dates[-1] == "2026-10-07"
    assert len(parsed.source_hash) == 64


def test_parse_china_holiday_notice_rejects_non_government_source() -> None:
    with pytest.raises(ValueError, match="gov.cn"):
        parse_china_holiday_notice(
            html_body=NOTICE,
            source_url="https://example.com/holidays.htm",
            year=2026,
        )


def test_parse_china_holiday_notice_rejects_a_different_year() -> None:
    with pytest.raises(ValueError, match="target year"):
        parse_china_holiday_notice(
            html_body=NOTICE,
            source_url="https://www.gov.cn/zhengce/example.htm",
            year=2027,
        )


def test_parse_china_holiday_notice_accepts_a_combined_mid_autumn_and_national_day_section() -> None:
    combined_notice = NOTICE.replace(
        '<p>六、中秋节： 9月25日（周五）至27日（周日）放假，共3天。</p>\n'
        '<p>七、国庆节： 10月1日（周四）至7日（周三）放假调休，共7天。</p>',
        "<p>六、国庆节、中秋节： 10月1日（周四）至8日（周四）放假调休，共8天。</p>",
    )

    parsed = parse_china_holiday_notice(
        html_body=combined_notice,
        source_url="https://www.gov.cn/zhengce/example.htm",
        year=2026,
    )

    assert "2026-10-01" in parsed.dates
    assert "2026-10-08" in parsed.dates
    assert "2026-09-25" not in parsed.dates


def test_parse_china_holiday_notice_rejects_a_count_that_disagrees_with_the_range() -> None:
    invalid_notice = NOTICE.replace("1月1日（周四）至3日（周六）放假调休，共3天", "1月1日（周四）至3日（周六）放假调休，共4天")

    with pytest.raises(ValueError, match="declares 4 days"):
        parse_china_holiday_notice(
            html_body=invalid_notice,
            source_url="https://www.gov.cn/zhengce/example.htm",
            year=2026,
        )


def test_official_notice_links_require_the_exact_title_and_government_host() -> None:
    search_payload = {
        "searchVO": {
            "listVO": [
                {
                    "title": "国务院办公厅关于<em>2026</em>年部分节假日安排的通知",
                    "url": "https://www.gov.cn/zhengce/zhengceku/202511/content_7047091.htm",
                },
                {
                    "title": "2026年放假安排转载",
                    "url": "https://www.gov.cn/zhengce/zhengceku/202511/content_7047000.htm",
                },
                {
                    "title": "国务院办公厅关于2026年部分节假日安排的通知",
                    "url": "https://example.com/not-official",
                },
            ]
        }
    }

    assert official_notice_links_from_search_payload(payload=search_payload, year=2026) == (
        "https://www.gov.cn/zhengce/zhengceku/202511/content_7047091.htm",
    )


@pytest.mark.asyncio
async def test_official_notice_fetch_rejects_a_redirect_outside_govcn() -> None:
    async def redirect_to_non_government_host(request: httpx.Request) -> httpx.Response:
        return httpx.Response(
            status_code=302,
            headers={"location": "http://127.0.0.1/internal"},
            request=request,
        )

    transport = httpx.MockTransport(redirect_to_non_government_host)
    async with httpx.AsyncClient(transport=transport, follow_redirects=False) as client:
        with pytest.raises(ValueError, match="gov.cn"):
            await _get_official_notice_response(
                client=client,
                source_url="https://www.gov.cn/zhengce/example.htm",
            )
