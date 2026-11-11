import React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../../../../tests/test-utils";
import HolidayCalendarSettings from "./HolidayCalendarSettings";
import type { HolidayCalendarVersion } from "./use_holiday_calendar_config";

const { mockRefreshConfig, mockConfirmVersion, mockDocument } = vi.hoisted(() => ({
  mockRefreshConfig: vi.fn(),
  mockConfirmVersion: vi.fn(),
  mockDocument: {
    revision: 2,
    calendars: {
      china: {
        timezone: "Asia/Shanghai",
        versions: [
          {
            year: 2026,
            status: "active",
            dates: ["2026-10-01", "2026-10-02"],
            source_url: "https://www.gov.cn/example",
            source_hash: "active-hash",
            published_date: null,
            confirmed_by: "admin",
            confirmed_at: "2026-11-09T00:00:00Z",
            error: null,
          },
          {
            year: 2027,
            status: "pending",
            dates: ["2027-01-01", "2027-01-02"],
            source_url: "https://www.gov.cn/2027-example",
            source_hash: "pending-hash",
            published_date: null,
            confirmed_by: null,
            confirmed_at: null,
            error: null,
          },
        ],
      },
    },
  },
}));

vi.mock("./use_holiday_calendar_config", () => ({
  useHolidayCalendarConfig: () => ({
    document: mockDocument,
    error: null,
    isLoading: false,
    fetchConfig: vi.fn(),
    refreshConfig: mockRefreshConfig,
    confirmVersion: mockConfirmVersion,
  }),
}));

describe("HolidayCalendarSettings", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("shows active and pending dates", () => {
    renderWithProviders(<HolidayCalendarSettings accessToken="token" canEdit />);

    expect(screen.getByText("2026")).toBeInTheDocument();
    expect(screen.getByText("2027")).toBeInTheDocument();
    expect(screen.getByText("2027-01-01")).toBeInTheDocument();
    expect(screen.getByText("Confirm and activate")).toBeInTheDocument();
  });

  it("loads an official notice URL for review", async () => {
    const user = userEvent.setup();
    mockRefreshConfig.mockResolvedValue(mockDocument);
    renderWithProviders(<HolidayCalendarSettings accessToken="token" canEdit />);

    await user.click(screen.getByRole("button", { name: /load official notice/i }));
    await user.clear(screen.getByLabelText(/official notice url/i));
    await user.type(screen.getByLabelText(/official notice url/i), "https://www.gov.cn/new-notice");
    await user.click(screen.getByRole("button", { name: /load for review/i }));

    await waitFor(() =>
      expect(mockRefreshConfig).toHaveBeenCalledWith(expect.any(Number), "https://www.gov.cn/new-notice"),
    );
  });

  it("confirms a pending version", async () => {
    const user = userEvent.setup();
    mockConfirmVersion.mockResolvedValue(mockDocument);
    renderWithProviders(<HolidayCalendarSettings accessToken="token" canEdit />);

    await user.click(screen.getByRole("button", { name: "Confirm and activate" }));

    await waitFor(() => expect(mockConfirmVersion).toHaveBeenCalledWith(mockDocument.calendars.china.versions[1]));
  });

  it("opens review for a year whose official notice still needs to be loaded", async () => {
    const user = userEvent.setup();
    const originalLength = mockDocument.calendars.china.versions.length;
    const needsSourceVersion: HolidayCalendarVersion = {
      year: 2028,
      status: "needs_source",
      dates: [],
      source_url: null,
      source_hash: null,
      published_date: null,
      confirmed_by: null,
      confirmed_at: null,
      error: "Official notice URL has not been loaded",
    };
    mockDocument.calendars.china.versions.push(needsSourceVersion);
    try {
      renderWithProviders(<HolidayCalendarSettings accessToken="token" canEdit />);

      const loadButtons = screen.getAllByRole("button", { name: /load official notice/i });
      await user.click(loadButtons.at(-1)!);

      expect(screen.getByLabelText(/calendar year/i)).toHaveValue("2028");
    } finally {
      mockDocument.calendars.china.versions.splice(originalLength);
    }
  });
});
