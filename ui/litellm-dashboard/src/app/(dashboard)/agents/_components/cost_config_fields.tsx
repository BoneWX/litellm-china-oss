import React from "react";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { AGENT_FORM_CONFIG } from "./agent_config";
import { AgentFormField, labelWithHint } from "./AgentFormKit";

export const COST_FIELD_NAMES: readonly string[] = AGENT_FORM_CONFIG.cost.fields.map((field) => field.name);

const CostConfigFields: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      {AGENT_FORM_CONFIG.cost.fields.map((field) => {
        const label = t(field.labelKey);
        const tooltip = field.tooltipKey ? t(field.tooltipKey) : undefined;
        return (
          <AgentFormField key={field.name} name={field.name} label={tooltip ? labelWithHint(label, tooltip) : label}>
            {({ value, onChange, ref, ...control }) => (
              <Input
                {...control}
                ref={ref}
                type="number"
                step="0.000001"
                placeholder={field.placeholder}
                value={typeof value === "string" || typeof value === "number" ? value : ""}
                onChange={onChange}
              />
            )}
          </AgentFormField>
        );
      })}
    </>
  );
};

export default CostConfigFields;
