import { useCallback, useEffect, useState } from "react";
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
const errorMessage = (error: unknown) => (error instanceof Error ? error.message : "Unable to load holiday calendar");

export const useHolidayCalendarConfig = ({ accessToken }: { accessToken: string | null }) => {
  const [document, setDocument] = useState<HolidayCalendarDocument | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const requestDocument = useCallback(async () => {
    if (!accessToken) throw new Error("Missing access token");
    return apiClient.get<HolidayCalendarDocument>(ENDPOINT, { accessToken });
  }, [accessToken]);

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
  }, [accessToken, requestDocument]);

  const refreshConfig = useCallback(
    async (year: number, sourceUrl: string) => {
      if (!accessToken) throw new Error("Missing access token");
      const nextDocument = await apiClient.post<HolidayCalendarDocument>(`${ENDPOINT}/china/refresh`, {
        accessToken,
        body: { year, source_url: sourceUrl },
      });
      setDocument(nextDocument);
      return nextDocument;
    },
    [accessToken],
  );

  const confirmVersion = useCallback(
    async (version: HolidayCalendarVersion) => {
      if (!accessToken || !document) throw new Error("Holiday calendar is not loaded");
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
    [accessToken, document],
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
  }, [accessToken, requestDocument]);

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
