import { CURRENCY_CODE, CURRENCY_SYMBOL, formatCurrency, formatCurrencyCompact } from "@/utils/currency";

export const USAGE_CURRENCY_CODE = CURRENCY_CODE;
export const USAGE_CURRENCY_SYMBOL = CURRENCY_SYMBOL;
export const formatUsageCurrency = formatCurrency;
export const formatUsageCurrencyCompact = formatCurrencyCompact;

export const usageCurrencyColumnLabel = `Spend (${USAGE_CURRENCY_CODE})`;
