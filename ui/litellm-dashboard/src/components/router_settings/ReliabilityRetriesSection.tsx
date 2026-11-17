import React from "react";
import { useTranslation } from "react-i18next";
import { ConfigOwnedBadge, RouterSettingsSource, isOwnedByConfig } from "./ConfigOwned";
import { Input } from "@/components/ui/input";
import { routerFieldDescription, routerFieldLabel } from "./routerFieldText";

interface ReliabilityRetriesSectionProps {
  routerSettings: { [key: string]: any };
  routerFieldsMetadata: { [key: string]: any };
  routerSettingsSource?: RouterSettingsSource;
}

const ReliabilityRetriesSection: React.FC<ReliabilityRetriesSectionProps> = ({
  routerSettings,
  routerFieldsMetadata,
  routerSettingsSource = {},
}) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      <div className="max-w-3xl">
        <h3 className="text-sm font-medium text-foreground">{t("routerSettings.reliability.title")}</h3>
        <p className="text-xs text-muted-foreground mt-1">{t("routerSettings.reliability.description")}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {Object.entries(routerSettings)
          .filter(
            ([param]) =>
              param != "fallbacks" &&
              param != "context_window_fallbacks" &&
              param != "routing_strategy_args" &&
              param != "routing_strategy" &&
              param != "enable_tag_filtering" &&
              param != "retry_policy" &&
              param != "model_group_retry_policy" &&
              param != "routing_groups",
          )
          .map(([param, value]) => {
            const metadata = routerFieldsMetadata[param];
            const label = routerFieldLabel(param, metadata, t);
            return (
              <div key={param} className="space-y-2">
                <label className="block">
                  <span className="text-xs font-medium text-foreground uppercase tracking-wide">
                    {label}
                    {!metadata && <code className="ml-2 font-mono text-[10px] normal-case opacity-70">{param}</code>}
                  </span>
                  {isOwnedByConfig(routerSettingsSource, param) && <ConfigOwnedBadge />}
                  <p className="text-xs text-muted-foreground mt-0.5 mb-2">
                    {routerFieldDescription(param, metadata, t)}
                  </p>
                  <Input
                    name={param}
                    aria-label={`${label} (${param})`}
                    defaultValue={
                      value === null || value === undefined || value === "null"
                        ? ""
                        : typeof value === "object"
                          ? JSON.stringify(value, null, 2)
                          : value?.toString() || ""
                    }
                    placeholder="—"
                    disabled={isOwnedByConfig(routerSettingsSource, param)}
                    title={
                      isOwnedByConfig(routerSettingsSource, param) ? t("routerSettings.configOwned.hint") : undefined
                    }
                    className="font-mono text-sm w-full"
                  />
                </label>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ReliabilityRetriesSection;
