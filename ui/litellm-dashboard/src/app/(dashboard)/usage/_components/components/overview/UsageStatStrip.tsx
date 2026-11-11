"use client";

import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import type { DailyData } from "@/components/UsagePage/types";
import { cn } from "@/lib/cva.config";
import { Popover, PopoverContent, PopoverTitle, PopoverTrigger } from "@/components/ui/popover";
import { dailyTotals, formatCompact, formatCny, formatLatency, type OverviewTotals } from "./overviewData";
import { PANEL_INSET_X, Sparkline, Stat } from "./Primitives";

const BRAND = "#2b3fd6";

interface UsageStatStripProps {
  results: readonly DailyData[];
  totals: OverviewTotals;
  loading: boolean;
  requestCountsPending: boolean;
  budget: number | null;
}

/** Spend, requests, tokens and averages for a range, each with a daily sparkline. */
export default function UsageStatStrip({
  results,
  totals,
  loading,
  requestCountsPending,
  budget,
}: UsageStatStripProps) {
  const { t } = useTranslation();
  const daily = useMemo(() => dailyTotals(results), [results]);
  return (
    <div className="grid grid-cols-1 overflow-hidden rounded-xl border bg-card sm:grid-cols-2 lg:grid-cols-4 lg:divide-x">
      <StatCell trend={<Sparkline data={daily} dataKey="spend" color={BRAND} className="h-14" />}>
        <Stat
          label={t("usagePage.stats.spend")}
          value={formatCny(totals.spend)}
          pending={loading}
          hint={budget ? t("usagePage.stats.budgetHint", { budget: formatCny(budget) }) : t("usagePage.stats.noBudget")}
        />
      </StatCell>
      <StatCell trend={<Sparkline data={daily} dataKey="requests" color={BRAND} className="h-14" />}>
        <Stat
          label={t("usagePage.stats.totalRequests")}
          value={totals.requests.toLocaleString()}
          pending={requestCountsPending}
        />
        {!requestCountsPending && (
          <div className="mt-0.5 flex gap-3 text-xs leading-4 text-muted-foreground">
            <span>
              <span className="text-success tabular-nums">{totals.successful.toLocaleString()}</span>{" "}
              {t("usagePage.stats.ok")}
            </span>
            <span>
              <span className={totals.failed > 0 ? "text-destructive tabular-nums" : "tabular-nums"}>
                {totals.failed.toLocaleString()}
              </span>{" "}
              {t("usagePage.stats.failed")}
            </span>
          </div>
        )}
      </StatCell>
      <StatCell trend={<Sparkline data={daily} dataKey="tokens" color={BRAND} className="h-14" />}>
        <Stat
          label={t("usagePage.stats.totalTokens")}
          value={loading ? null : formatCompact(totals.tokens)}
          exact={t("usagePage.stats.tokensExact", { count: totals.tokens.toLocaleString() })}
          pending={loading}
          hint={
            loading ? undefined : t("usagePage.stats.cacheReadHint", { value: formatCompact(totals.cacheReadTokens) })
          }
        />
        {!loading && (
          <Popover>
            <PopoverTrigger className="mt-1 text-xs font-medium text-primary underline-offset-4 hover:underline">
              {t("usagePage.stats.viewTokenBreakdown")}
            </PopoverTrigger>
            <PopoverContent side="right" align="start" className="w-80 gap-3">
              <PopoverTitle>{t("usagePage.stats.tokenTitle")}</PopoverTitle>
              <dl className="space-y-2 text-sm tabular-nums">
                <div className="flex justify-between gap-4">
                  <dt>{t("usagePage.stats.inputTokens")}</dt>
                  <dd>{totals.inputTokens.toLocaleString()}</dd>
                </div>
                <div className="flex justify-between gap-4 pl-3 text-xs text-muted-foreground">
                  <dt>{t("usagePage.stats.cacheReads")}</dt>
                  <dd>{totals.cacheReadTokens.toLocaleString()}</dd>
                </div>
                <div className="flex justify-between gap-4 pl-3 text-xs text-muted-foreground">
                  <dt>{t("usagePage.stats.cacheWrites")}</dt>
                  <dd>{totals.cacheWriteTokens.toLocaleString()}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>{t("usagePage.stats.outputTokens")}</dt>
                  <dd>{totals.outputTokens.toLocaleString()}</dd>
                </div>
                <div className="flex justify-between gap-4 border-t pt-2 font-medium">
                  <dt>{t("usagePage.stats.totalTokensLower")}</dt>
                  <dd>{totals.tokens.toLocaleString()}</dd>
                </div>
              </dl>
              <p className="text-xs leading-5 text-muted-foreground">{t("usagePage.stats.tokenNote")}</p>
              <p className="text-xs leading-5 text-muted-foreground">{t("usagePage.stats.clientTokenNote")}</p>
            </PopoverContent>
          </Popover>
        )}
      </StatCell>
      <StatCell>
        <div className="grid gap-3">
          <Stat
            label={t("usagePage.stats.avgCostPerRequest")}
            value={formatCny(totals.avgCostPerRequest, 4)}
            pending={loading}
          />
          <Stat
            label={t("usagePage.stats.avgLatency")}
            value={totals.avgLatencyMs === null ? "—" : formatLatency(totals.avgLatencyMs)}
            pending={loading}
            hint={
              totals.successRate === null
                ? undefined
                : t("usagePage.stats.successRate", { rate: totals.successRate.toFixed(1) })
            }
          />
        </div>
      </StatCell>
    </div>
  );
}

function StatCell({ children, trend }: { children: React.ReactNode; trend?: React.ReactNode }) {
  return (
    <div
      className={cn(
        "flex min-w-0 flex-col justify-between gap-3 border-b py-4 last:border-b-0 lg:border-b-0",
        PANEL_INSET_X,
      )}
    >
      <div className="min-w-0">{children}</div>
      {trend}
    </div>
  );
}
