import React, { useState } from "react";
import { CalendarDays, ExternalLink, RefreshCw } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/lib/toast";
import { HolidayCalendarVersion, useHolidayCalendarConfig } from "./use_holiday_calendar_config";

interface HolidayCalendarSettingsProps {
  accessToken: string | null;
  canEdit: boolean;
}

const statusLabel: Record<HolidayCalendarVersion["status"], string> = {
  active: "Active",
  pending: "Pending confirmation",
  needs_source: "Official notice required",
  archived: "Archived",
};

const HolidayCalendarSettings: React.FC<HolidayCalendarSettingsProps> = ({ accessToken, canEdit }) => {
  const { document, error, isLoading, refreshConfig, confirmVersion } = useHolidayCalendarConfig({
    accessToken,
  });
  const [isRefreshOpen, setIsRefreshOpen] = useState(false);
  const [yearOverride, setYearOverride] = useState<string | null>(null);
  const [sourceUrl, setSourceUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const china = document?.calendars.china;
  const activeVersions = china?.versions.filter((version) => version.status === "active") ?? [];
  const pendingVersions = china?.versions.filter((version) => version.status === "pending") ?? [];
  const needsSource = china?.versions.filter((version) => version.status === "needs_source") ?? [];
  const waitingYear = needsSource.at(-1)?.year;
  const latestCoveredYear = Math.max(
    new Date().getFullYear() - 1,
    ...(china?.versions.map((version) => version.year) ?? []),
  );
  const defaultReviewYear = waitingYear ?? latestCoveredYear + 1;
  const year = yearOverride ?? String(defaultReviewYear);

  const openRefreshDialog = (targetYear: number = defaultReviewYear) => {
    setYearOverride(String(targetYear));
    setIsRefreshOpen(true);
  };

  const handleRefresh = async () => {
    setIsSubmitting(true);
    try {
      await refreshConfig(Number(year), sourceUrl.trim());
      toast.success("Official notice loaded into pending review");
      setIsRefreshOpen(false);
    } catch (refreshError) {
      toast.fromError(refreshError instanceof Error ? refreshError.message : "Unable to load holiday notice");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConfirm = async (version: HolidayCalendarVersion) => {
    setIsSubmitting(true);
    try {
      await confirmVersion(version);
      toast.success(`${version.year} holiday calendar is now active`);
    } catch (confirmError) {
      toast.fromError(confirmError instanceof Error ? confirmError.message : "Unable to confirm holiday calendar");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!accessToken) return null;

  return (
    <div className="p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <CalendarDays className="size-4 text-muted-foreground" />
            <p className="font-medium text-foreground">China holiday calendar</p>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Review the official notice and confirm the dates before they affect off-peak billing.
          </p>
        </div>
        {canEdit && (
          <Button onClick={() => openRefreshDialog()}>
            <RefreshCw className="mr-2 size-4" />
            Load official notice
          </Button>
        )}
      </div>

      {error && (
        <Alert variant="destructive" className="mt-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {isLoading && <p className="mt-4 text-sm text-muted-foreground">Loading calendar…</p>}

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <section className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <p className="font-medium">Active calendar</p>
            <Badge variant="secondary">{china?.timezone ?? "Asia/Shanghai"}</Badge>
          </div>
          <div className="mt-3 space-y-3">
            {activeVersions.length === 0 && (
              <p className="text-sm text-muted-foreground">No database-confirmed calendar. Built-in data is used.</p>
            )}
            {activeVersions.map((version) => (
              <div key={version.year} className="rounded-md bg-muted/40 p-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-medium">{version.year}</span>
                  <span className="text-xs text-muted-foreground">{version.dates.length} days</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {version.dates.map((holidayDate) => (
                    <Badge key={holidayDate} variant="outline">
                      {holidayDate}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-lg border p-4">
          <p className="font-medium">Pending review</p>
          <div className="mt-3 space-y-3">
            {pendingVersions.length === 0 && needsSource.length === 0 && (
              <p className="text-sm text-muted-foreground">No holiday calendar is waiting for review.</p>
            )}
            {needsSource.map((version) => (
              <div key={`${version.year}-needs-source`} className="rounded-md border border-dashed p-3">
                <p className="font-medium">{version.year} official notice required</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  The annual task created this review item. Load the official gov.cn notice to continue.
                </p>
                {canEdit && (
                  <Button className="mt-3" onClick={() => openRefreshDialog(version.year)} size="sm" variant="outline">
                    Load official notice
                  </Button>
                )}
              </div>
            ))}
            {pendingVersions.map((version) => (
              <div key={version.year} className="rounded-md border p-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="font-medium">{version.year}</p>
                    <p className="text-xs text-muted-foreground">
                      {statusLabel[version.status]} · {version.dates.length} days
                    </p>
                  </div>
                  {version.source_url && (
                    <a
                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                      href={version.source_url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Official notice
                      <ExternalLink className="size-3" />
                    </a>
                  )}
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {version.dates.map((holidayDate) => (
                    <Badge key={holidayDate} variant="outline">
                      {holidayDate}
                    </Badge>
                  ))}
                </div>
                {canEdit && (
                  <Button
                    className="mt-3"
                    disabled={isSubmitting || version.dates.length === 0 || !version.source_hash}
                    onClick={() => void handleConfirm(version)}
                    size="sm"
                  >
                    Confirm and activate
                  </Button>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      <Dialog open={isRefreshOpen} onOpenChange={setIsRefreshOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Load official holiday notice</DialogTitle>
            <DialogDescription>
              Enter the HTTPS gov.cn URL for the State Council annual holiday notice. Dates are loaded as pending and do
              not affect billing until confirmed.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="holiday-calendar-year">Calendar year</Label>
              <Input
                id="holiday-calendar-year"
                inputMode="numeric"
                onChange={(event) => setYearOverride(event.target.value)}
                value={year}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="holiday-calendar-source">Official notice URL</Label>
              <Input
                id="holiday-calendar-source"
                onChange={(event) => setSourceUrl(event.target.value)}
                placeholder="https://www.gov.cn/..."
                value={sourceUrl}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsRefreshOpen(false)}>
              Cancel
            </Button>
            <Button disabled={isSubmitting || !sourceUrl.trim() || !year} onClick={() => void handleRefresh()}>
              {isSubmitting ? "Loading…" : "Load for review"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HolidayCalendarSettings;
