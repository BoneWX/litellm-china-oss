export const CURRENCY_CODE = "CNY";
export const CURRENCY_SYMBOL = "￥";

export const formatCurrency = (value: number, digits = 2): string =>
  `${CURRENCY_SYMBOL}${value.toLocaleString("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  })}`;

export const formatCurrencyCompact = (value: number): string => {
  if (value === 0) return `${CURRENCY_SYMBOL}0`;
  if (Math.abs(value) < 100) return `${CURRENCY_SYMBOL}${value.toFixed(2)}`;
  if (Math.abs(value) < 1000) return `${CURRENCY_SYMBOL}${value.toFixed(0)}`;
  return `${CURRENCY_SYMBOL}${Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value)}`;
};
