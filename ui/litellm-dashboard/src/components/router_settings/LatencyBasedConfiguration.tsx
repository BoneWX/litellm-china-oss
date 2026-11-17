import React from "react";
import { useTranslation } from "react-i18next";
import { ConfigOwnedBadge } from "./ConfigOwned";
import { Input } from "@/components/ui/input";

interface routingStrategyArgs {
  ttl?: number;
  lowest_latency_buffer?: number;
}

const defaultLowestLatencyArgs: routingStrategyArgs = {
  ttl: 3600,
  lowest_latency_buffer: 0,
};

interface LatencyBasedConfigurationProps {
  routingStrategyArgs: { [key: string]: any };
  ownedByConfig?: boolean;
}

const LatencyBasedConfiguration: React.FC<LatencyBasedConfigurationProps> = ({
  routingStrategyArgs,
  ownedByConfig = false,
}) => {
  const { t } = useTranslation();
  const paramText = (param: string) => {
    if (param === "ttl") {
      return {
        label: t("routerSettings.latencyConfiguration.params.ttl.label"),
        description: t("routerSettings.latencyConfiguration.params.ttl.description"),
      };
    }
    if (param === "lowest_latency_buffer") {
      return {
        label: t("routerSettings.latencyConfiguration.params.lowestLatencyBuffer.label"),
        description: t("routerSettings.latencyConfiguration.params.lowestLatencyBuffer.description"),
      };
    }
    return { label: param.replace(/_/g, " "), description: "" };
  };

  return (
    <>
      <div className="space-y-6">
        <div className="max-w-3xl">
          <h3 className="text-sm font-medium text-foreground">
            {t("routerSettings.latencyConfiguration.title")}
            {ownedByConfig && <ConfigOwnedBadge />}
          </h3>
          <p className="text-xs text-muted-foreground mt-1">{t("routerSettings.latencyConfiguration.description")}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {Object.entries(routingStrategyArgs || defaultLowestLatencyArgs).map(([param, value]) => (
            <div key={param} className="space-y-2">
              <label className="block">
                <span className="text-xs font-medium text-foreground uppercase tracking-wide">
                  {paramText(param).label}
                </span>
                <p className="text-xs text-muted-foreground mt-0.5 mb-2">{paramText(param).description}</p>
                <Input
                  name={param}
                  defaultValue={typeof value === "object" ? JSON.stringify(value, null, 2) : value?.toString()}
                  disabled={ownedByConfig}
                  title={ownedByConfig ? t("routerSettings.configOwned.hint") : undefined}
                  className="font-mono text-sm w-full"
                />
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border" />
    </>
  );
};

export default LatencyBasedConfiguration;
