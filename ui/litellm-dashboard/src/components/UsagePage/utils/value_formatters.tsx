import { USAGE_CURRENCY_SYMBOL } from "@/components/UsagePage/currency";

export function valueFormatter(number: number) {
  if (number >= 1_000_000_000) {
    return (number / 1_000_000_000).toFixed(2) + "B";
  }
  if (number >= 1_000_000) {
    return (number / 1_000_000).toFixed(2) + "M";
  }
  if (number >= 1000) {
    return number / 1000 + "k";
  }
  return number.toString();
}

export function averageResponseTimeMs(totalResponseTimeMs: number, timedRequests: number): number | null {
  if (timedRequests <= 0) return null;
  return totalResponseTimeMs / timedRequests;
}

export function formatResponseTime(ms: number | null | undefined) {
  if (ms == null) return "-";
  if (ms < 1000) return `${Math.round(ms)}ms`;
  return `${(ms / 1000).toFixed(2)}s`;
}

export function valueFormatterSpend(number: number) {
  if (number === 0) return `${USAGE_CURRENCY_SYMBOL}0`;
  if (number >= 1_000_000_000) {
    return USAGE_CURRENCY_SYMBOL + parseFloat((number / 1_000_000_000).toFixed(2)) + "B";
  }
  if (number >= 1_000_000) {
    return USAGE_CURRENCY_SYMBOL + parseFloat((number / 1_000_000).toFixed(2)) + "M";
  }
  if (number >= 1000) {
    return USAGE_CURRENCY_SYMBOL + number / 1000 + "k";
  }
  return USAGE_CURRENCY_SYMBOL + number;
}
