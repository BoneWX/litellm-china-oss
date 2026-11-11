import React from "react";
import { ChartColumnStacked } from "lucide-react";
import { BarChart, CustomTooltip } from "@/components/shared/charts";
import { MetricWithMetadata } from "@/components/UsagePage/types";
import { Panel } from "../../overview/Primitives";
import { useTranslation } from "react-i18next";

interface EndpointUsageBarChartProps {
  endpointData?: Record<string, MetricWithMetadata>;
}

const SUCCESS_COLOR = "#2b3fd6";
const FAILED_COLOR = "#ef4444";
const COLORS = [SUCCESS_COLOR, FAILED_COLOR] as const;

const valueFormatter = (value: number) => value.toLocaleString();

const EndpointUsageBarChart: React.FC<EndpointUsageBarChartProps> = ({ endpointData }) => {
  const { t } = useTranslation();
  const categories = React.useMemo(() => [t("usagePage.chart.successful"), t("usagePage.chart.failed")] as const, [t]);

  // Transform endpoint data into chart format
  const chartData = React.useMemo(() => {
    const rows: Array<Record<string, string | number>> = Object.entries(endpointData || {}).map(([endpoint, data]) => ({
      endpoint,
      [categories[0]]: data.metrics.successful_requests,
      [categories[1]]: data.metrics.failed_requests,
    }));
    return rows;
  }, [categories, endpointData]);

  const totals = React.useMemo(
    () =>
      chartData.reduce<Record<string, number>>((totals, row) => {
        categories.forEach((category) => {
          totals[category] = (totals[category] ?? 0) + Number(row[category] ?? 0);
        });
        return totals;
      }, {}),
    [categories, chartData],
  );

  return (
    <Panel
      icon={ChartColumnStacked}
      title={t("usagePage.panels.successVsFailed")}
      action={
        <div className="flex shrink-0 items-center gap-3 text-xs text-muted-foreground">
          {categories.map((category, i) => (
            <span key={category} className="flex items-center gap-1.5">
              <span aria-hidden="true" className="size-2 rounded-[2px]" style={{ backgroundColor: COLORS[i] }} />
              <span>{category}</span>
              <span className="tabular-nums text-foreground">{(totals[category] ?? 0).toLocaleString()}</span>
            </span>
          ))}
        </div>
      }
    >
      <BarChart
        className="h-64"
        data={chartData}
        index="endpoint"
        categories={categories}
        colors={COLORS}
        valueFormatter={valueFormatter}
        customTooltip={CustomTooltip}
        showLegend={false}
        stack={true}
        maxBarSize={48}
        yAxisWidth={56}
      />
    </Panel>
  );
};

export default EndpointUsageBarChart;
