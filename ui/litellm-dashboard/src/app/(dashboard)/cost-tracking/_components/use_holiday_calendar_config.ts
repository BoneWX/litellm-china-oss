import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { apiClient } from "@/components/networking";

export type HolidayCalendarStatus = "pending" | "active" | "archived" | "needs_source";

export interface HolidayCalendarVersion {
  year: number;
  status: HolidayCalendarStatus;
  dates: string[];
  source_url: string | null;
  source_hash: string | null;
  published_date: string | null;
  confirmed_by: string | null;
  confirmed_at: string | null;
  error: string | null;
}

export interface HolidayCalendarState {
  timezone: string;
  versions: HolidayCalendarVersion[];
}

export interface HolidayCalendarDocument {
  revision: number;
  calendars: Record<string, HolidayCalendarState>;
}

const ENDPOINT = "/config/off_peak_holiday_calendars";

export const useHolidayCalendarConfig = ({ accessToken }: { accessToken: string | null }) => {
  const { t } = useTranslation();
  const [document, setDocument] = useState<HolidayCalendarDocument | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const errorMessage = useCallback(
    (fetchError: unknown) =>
      fetchError instanceof Error ? fetchError.message : t("costTracking.holiday.loadConfigFailed"),
    [t],
  );

  const requestDocument = useCallback(async () => {
    if (!accessToken) throw new Error(t("costTracking.holiday.missingToken"));
    return apiClient.get<HolidayCalendarDocument>(ENDPOINT, { accessToken });
  }, [accessToken, t]);

  const fetchConfig = useCallback(async () => {
    if (!accessToken) return;
    setIsLoading(true);
    setError(null);
    try {
      setDocument(await requestDocument());
    } catch (fetchError) {
      setError(errorMessage(fetchError));
    } finally {
      setIsLoading(false);
    }
  }, [accessToken, errorMessage, requestDocument]);

  const refreshConfig = useCallback(
    async (year: number, sourceUrl: string) => {
      if (!accessToken) throw new Error(t("costTracking.holiday.missingToken"));
      const nextDocument = await apiClient.post<HolidayCalendarDocument>(`${ENDPOINT}/china/refresh`, {
        accessToken,
        body: { year, source_url: sourceUrl },
      });
      setDocument(nextDocument);
      return nextDocument;
    },
    [accessToken, t],
  );

  const confirmVersion = useCallback(
    async (version: HolidayCalendarVersion) => {
      if (!accessToken || !document) throw new Error(t("costTracking.holiday.notLoaded"));
      const nextDocument = await apiClient.post<HolidayCalendarDocument>(`${ENDPOINT}/china/${version.year}/confirm`, {
        accessToken,
        body: {
          revision: document.revision,
          source_hash: version.source_hash,
        },
      });
      setDocument(nextDocument);
      return nextDocument;
    },
    [accessToken, document, t],
  );

  useEffect(() => {
    if (!accessToken) return;
    let cancelled = false;
    requestDocument()
      .then((nextDocument) => {
        if (cancelled) return;
        setDocument(nextDocument);
        setError(null);
      })
      .catch((fetchError: unknown) => {
        if (!cancelled) setError(errorMessage(fetchError));
      });
    return () => {
      cancelled = true;
    };
  }, [accessToken, errorMessage, requestDocument]);

  const isInitialLoading = Boolean(accessToken) && document === null && error === null;

  return {
    document,
    error,
    isLoading: isLoading || isInitialLoading,
    fetchConfig,
    refreshConfig,
    confirmVersion,
  };
};
