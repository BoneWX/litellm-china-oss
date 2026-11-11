"use client";

import { formatNumberWithCommas, getSpendString } from "@/utils/dataUtils";
import { CURRENCY_SYMBOL } from "@/utils/currency";

interface MoneyCellProps {
  value: number | null | undefined;
  decimals?: number;
  emptyText?: string;
  showZero?: boolean;
  currencySymbol?: string;
}

const placeholderClassName = "block w-full whitespace-nowrap text-right tabular-nums text-muted-foreground";
const moneyClassName = "block w-full whitespace-nowrap text-right tabular-nums";

export function MoneyCell({
  value,
  decimals = 4,
  emptyText = "-",
  showZero = false,
  currencySymbol = CURRENCY_SYMBOL,
}: MoneyCellProps) {
  if (value === null || value === undefined || !Number.isFinite(value)) {
    return <span className={placeholderClassName}>{emptyText}</span>;
  }
  if (value === 0 && !showZero) {
    return <span className={placeholderClassName}>-</span>;
  }

  const formattedValue =
    value === 0
      ? `${currencySymbol}${formatNumberWithCommas(0, decimals, false, true)}`
      : getSpendString(value, decimals, currencySymbol);

  return (
    <span data-slot="money-cell" className={moneyClassName}>
      {formattedValue}
    </span>
  );
}
