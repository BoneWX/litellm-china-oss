import React from "react";
import { CircleHelp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Providers, provider_map } from "@/components/provider_info_helpers";
import { Logo } from "@/components/molecules/logo/Logo";
import { Field, FieldLabel, FieldTitle } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import { CURRENCY_SYMBOL } from "@/utils/currency";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { MarginConfig } from "./types";

interface AddMarginFormProps {
  marginConfig: MarginConfig;
  selectedProvider: string | undefined;
  marginType: "percentage" | "fixed";
  percentageValue: string;
  fixedAmountValue: string;
  onProviderChange: (provider: string | undefined) => void;
  onMarginTypeChange: (type: "percentage" | "fixed") => void;
  onPercentageChange: (value: string) => void;
  onFixedAmountChange: (value: string) => void;
  onAddProvider: () => void;
}

interface ProviderOption {
  value: string;
  label: string;
  providerEnum: string | null;
}

const globalOption = (label: string): ProviderOption => ({
  value: "global",
  label,
  providerEnum: null,
});

const buildProviderOptions = (marginConfig: MarginConfig, globalLabel: string): ProviderOption[] => [
  globalOption(globalLabel),
  ...Object.entries(Providers).flatMap(([providerEnum, providerDisplayName]) => {
    const providerValue = provider_map[providerEnum as keyof typeof provider_map];
    if (providerValue && marginConfig[providerValue]) {
      return [];
    }
    return [{ value: providerEnum, label: providerDisplayName, providerEnum }];
  }),
];

const labelWithHint = (label: string, hint: string): React.ReactNode => (
  <>
    {label}
    <Tooltip>
      <TooltipTrigger render={<CircleHelp className="size-3.5 shrink-0 cursor-help text-muted-foreground" />} />
      <TooltipContent>{hint}</TooltipContent>
    </Tooltip>
  </>
);

const AddMarginForm: React.FC<AddMarginFormProps> = ({
  marginConfig,
  selectedProvider,
  marginType,
  percentageValue,
  fixedAmountValue,
  onProviderChange,
  onMarginTypeChange,
  onPercentageChange,
  onFixedAmountChange,
  onAddProvider,
}) => {
  const { t } = useTranslation();
  const providerOptions = buildProviderOptions(marginConfig, t("costTracking.tables.global"));
  const selectedOption = providerOptions.find((option) => option.value === selectedProvider) ?? null;

  return (
    <TooltipProvider>
      <div className="space-y-6">
        <Field>
          <FieldLabel htmlFor="margin-provider">
            {labelWithHint(t("costTracking.addMargin.provider"), t("costTracking.addMargin.providerHint"))}
          </FieldLabel>
          <Combobox
            items={providerOptions}
            value={selectedOption}
            onValueChange={(option: ProviderOption | null) => onProviderChange(option?.value)}
            itemToStringLabel={(option: ProviderOption) => option.label}
            isItemEqualToValue={(option: ProviderOption, selected: ProviderOption) => option.value === selected.value}
          >
            <ComboboxInput
              id="margin-provider"
              placeholder={t("costTracking.addMargin.selectProvider")}
              className="w-full"
            />
            <ComboboxContent>
              <ComboboxEmpty>{t("costTracking.addMargin.noMatchingProviders")}</ComboboxEmpty>
              <ComboboxList>
                {(option: ProviderOption) => (
                  <ComboboxItem key={option.value} value={option}>
                    <span className="flex items-center space-x-2">
                      {option.providerEnum !== null && (
                        <Logo provider={option.providerEnum} label={option.label} className="w-5 h-5" />
                      )}
                      <span className={option.providerEnum === null ? "font-medium" : undefined}>{option.label}</span>
                    </span>
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </Field>

        <Field>
          <FieldTitle>
            {labelWithHint(t("costTracking.addMargin.marginType"), t("costTracking.addMargin.marginTypeHint"))}
          </FieldTitle>
          <RadioGroup
            value={marginType}
            onValueChange={(value: unknown) => onMarginTypeChange(value as "percentage" | "fixed")}
            className="w-full"
          >
            <FieldLabel className="font-normal">
              <RadioGroupItem value="percentage" />
              {t("costTracking.addMargin.percentageBased")}
            </FieldLabel>
            <FieldLabel className="font-normal">
              <RadioGroupItem value="fixed" />
              {t("costTracking.addMargin.fixedAmount")}
            </FieldLabel>
          </RadioGroup>
        </Field>

        {marginType === "percentage" && (
          <Field>
            <FieldLabel htmlFor="margin-percentage">
              {labelWithHint(t("costTracking.addMargin.marginPercentage"), t("costTracking.addMargin.marginHint"))}
            </FieldLabel>
            <div className="flex items-center gap-2">
              <Input
                id="margin-percentage"
                placeholder="10"
                value={percentageValue}
                onChange={(event) => onPercentageChange(event.target.value)}
                className="rounded-lg flex-1"
              />
              <span className="text-muted-foreground">%</span>
            </div>
          </Field>
        )}

        {marginType === "fixed" && (
          <Field>
            <FieldLabel htmlFor="margin-fixed-amount">
              {labelWithHint(t("costTracking.addMargin.fixedMarginAmount"), t("costTracking.addMargin.fixedHint"))}
            </FieldLabel>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">{CURRENCY_SYMBOL}</span>
              <Input
                id="margin-fixed-amount"
                placeholder="0.001"
                value={fixedAmountValue}
                onChange={(event) => onFixedAmountChange(event.target.value)}
                className="rounded-lg flex-1"
              />
            </div>
          </Field>
        )}

        <div className="flex items-center justify-end space-x-3 pt-6 border-t border-border">
          <Button
            type="submit"
            onClick={onAddProvider}
            disabled={
              !selectedProvider ||
              (marginType === "percentage" && !percentageValue) ||
              (marginType === "fixed" && !fixedAmountValue)
            }
          >
            {t("costTracking.addMargin.submit")}
          </Button>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default AddMarginForm;
