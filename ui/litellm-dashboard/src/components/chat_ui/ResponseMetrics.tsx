import React from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowDownToLine,
  ArrowUpFromLine,
  Clock,
  Database,
  DatabaseBackup,
  DollarSign,
  Hash,
  History,
  Lightbulb,
  Wrench,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { CURRENCY_SYMBOL } from "@/utils/currency";

export interface TokenUsage {
  completionTokens?: number;
  promptTokens?: number;
  totalTokens?: number;
  reasoningTokens?: number;
  cacheReadTokens?: number;
  cacheCreationTokens?: number;
  cost?: number;
  servedFromResponseCache?: boolean;
}

interface ResponseMetricsProps {
  timeToFirstToken?: number;
  totalLatency?: number;
  usage?: TokenUsage;
  toolName?: string;
}

interface MetricItemProps {
  label: string;
  tooltip: string;
  icon: React.ReactNode;
  value: string;
}

function MetricItem({ label, tooltip, icon, value }: MetricItemProps) {
  return (
    <Tooltip>
      <TooltipTrigger render={<div className="flex items-center gap-1" aria-label={`${label}: ${value}`} />}>
        {icon}
        <span>
          {label}: {value}
        </span>
      </TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  );
}

function ResponseCacheIndicator() {
  const { t } = useTranslation();
  return (
    <MetricItem
      label={t("playgroundDeep.responseMetrics.responseCache")}
      tooltip={t("playgroundDeep.responseMetrics.responseCacheHelp")}
      icon={<History className="size-3" aria-hidden="true" />}
      value={t("playgroundDeep.responseMetrics.hit")}
    />
  );
}

function PromptCacheChips({ usage }: { usage?: TokenUsage }) {
  const { t } = useTranslation();
  if (usage?.servedFromResponseCache) {
    return <ResponseCacheIndicator />;
  }

  const readTokens = usage?.cacheReadTokens ?? 0;
  const creationTokens = usage?.cacheCreationTokens ?? 0;

  return (
    <>
      {readTokens > 0 && (
        <MetricItem
          label={t("playgroundDeep.responseMetrics.cacheRead")}
          tooltip={t("playgroundDeep.responseMetrics.cacheReadHelp")}
          icon={<Database className="size-3" aria-hidden="true" />}
          value={String(readTokens)}
        />
      )}

      {creationTokens > 0 && (
        <MetricItem
          label={t("playgroundDeep.responseMetrics.cacheWrite")}
          tooltip={t("playgroundDeep.responseMetrics.cacheWriteHelp")}
          icon={<DatabaseBackup className="size-3" aria-hidden="true" />}
          value={String(creationTokens)}
        />
      )}
    </>
  );
}

const ResponseMetrics: React.FC<ResponseMetricsProps> = ({ timeToFirstToken, totalLatency, usage, toolName }) => {
  const { t } = useTranslation();
  if (!timeToFirstToken && !totalLatency && !usage) return null;

  return (
    <div className="response-metrics mt-2 flex flex-wrap gap-3 border-t border-border pt-2 text-xs text-muted-foreground">
      {timeToFirstToken !== undefined && (
        <MetricItem
          label={t("playgroundDeep.responseMetrics.ttft")}
          tooltip={t("playgroundDeep.responseMetrics.ttftHelp")}
          icon={<Clock className="size-3" aria-hidden="true" />}
          value={`${(timeToFirstToken / 1000).toFixed(2)}s`}
        />
      )}

      {totalLatency !== undefined && (
        <MetricItem
          label={t("playgroundDeep.responseMetrics.totalLatency")}
          tooltip={t("playgroundDeep.responseMetrics.totalLatencyHelp")}
          icon={<Clock className="size-3" aria-hidden="true" />}
          value={`${(totalLatency / 1000).toFixed(2)}s`}
        />
      )}

      {usage?.promptTokens !== undefined && (
        <MetricItem
          label={t("playgroundDeep.responseMetrics.input")}
          tooltip={t("playgroundDeep.responseMetrics.promptTokens")}
          icon={<ArrowDownToLine className="size-3" aria-hidden="true" />}
          value={String(usage.promptTokens)}
        />
      )}

      <PromptCacheChips usage={usage} />

      {usage?.completionTokens !== undefined && (
        <MetricItem
          label={t("playgroundDeep.responseMetrics.output")}
          tooltip={t("playgroundDeep.responseMetrics.completionTokens")}
          icon={<ArrowUpFromLine className="size-3" aria-hidden="true" />}
          value={String(usage.completionTokens)}
        />
      )}

      {usage?.reasoningTokens !== undefined && (
        <MetricItem
          label={t("playgroundDeep.responseMetrics.reasoning")}
          tooltip={t("playgroundDeep.responseMetrics.reasoningTokens")}
          icon={<Lightbulb className="size-3" aria-hidden="true" />}
          value={String(usage.reasoningTokens)}
        />
      )}

      {usage?.totalTokens !== undefined && (
        <MetricItem
          label={t("playgroundDeep.responseMetrics.total")}
          tooltip={t("playgroundDeep.responseMetrics.totalTokens")}
          icon={<Hash className="size-3" aria-hidden="true" />}
          value={String(usage.totalTokens)}
        />
      )}

      {typeof usage?.cost === "number" && Number.isFinite(usage.cost) && (
        <MetricItem
          label={t("playgroundDeep.responseMetrics.cost")}
          tooltip={t("playgroundDeep.responseMetrics.cost")}
          icon={<DollarSign className="size-3" aria-hidden="true" />}
          value={`${CURRENCY_SYMBOL}${usage.cost.toFixed(6)}`}
        />
      )}

      {toolName && (
        <MetricItem
          label={t("playgroundDeep.responseMetrics.tool")}
          tooltip={t("playgroundDeep.responseMetrics.toolUsed")}
          icon={<Wrench className="size-3" aria-hidden="true" />}
          value={toolName}
        />
      )}
    </div>
  );
};

export default ResponseMetrics;
