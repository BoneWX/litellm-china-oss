import React from "react";
import { useTranslation } from "react-i18next";
import { ConfigOwnedBadge } from "./ConfigOwned";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { routerFieldDescription, routerFieldLabel, routingStrategyDescription } from "./routerFieldText";

interface RoutingStrategySelectorProps {
  selectedStrategy: string | null;
  availableStrategies: string[];
  routingStrategyDescriptions: { [key: string]: string };
  routerFieldsMetadata: { [key: string]: any };
  onStrategyChange: (strategy: string) => void;
  ownedByConfig?: boolean;
}

const RoutingStrategySelector: React.FC<RoutingStrategySelectorProps> = ({
  selectedStrategy,
  availableStrategies,
  routingStrategyDescriptions,
  routerFieldsMetadata,
  onStrategyChange,
  ownedByConfig = false,
}) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-2 max-w-3xl">
      <div>
        <label className="text-xs font-medium text-foreground uppercase tracking-wide">
          {routerFieldLabel("routing_strategy", routerFieldsMetadata["routing_strategy"], t)}
        </label>
        {ownedByConfig && <ConfigOwnedBadge />}
        <p className="text-xs text-muted-foreground mt-0.5 mb-2">
          {routerFieldDescription("routing_strategy", routerFieldsMetadata["routing_strategy"], t)}
        </p>
      </div>
      <div className="routing-strategy-select max-w-3xl">
        <Select
          value={selectedStrategy}
          onValueChange={(strategy: string | null) => strategy && onStrategyChange(strategy)}
          disabled={ownedByConfig}
        >
          <SelectTrigger
            className="w-full"
            aria-label={ownedByConfig ? t("routerSettings.configOwned.hint") : undefined}
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {availableStrategies.map((strategy) => (
              <SelectItem key={strategy} value={strategy}>
                <div className="flex flex-col gap-0.5 py-1">
                  <span className="font-mono text-sm font-medium">{strategy}</span>
                  {routingStrategyDescriptions[strategy] && (
                    <span className="text-xs font-normal text-muted-foreground">
                      {routingStrategyDescription(strategy, routingStrategyDescriptions[strategy], t)}
                    </span>
                  )}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default RoutingStrategySelector;
