"use client";

import { useTranslation } from "react-i18next";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import type { TelemetrySettings } from "@/app/(dashboard)/hooks/telemetry/useTelemetrySettings";
import { useTelemetrySettings } from "@/app/(dashboard)/hooks/telemetry/useTelemetrySettings";

export function TelemetryEnvNotice({ settings }: { settings: TelemetrySettings }) {
  const { t } = useTranslation();
  if (settings.environment_variables.length === 0) return null;
  return (
    <Alert>
      <AlertTitle>{t(settings.vetoed ? "telemetry.envDisabledTitle" : "telemetry.envSetTitle")}</AlertTitle>
      <AlertDescription>
        {t("telemetry.envNotice", {
          variables: settings.environment_variables.join(", "),
          action: t(settings.set_by_environment ? "telemetry.envOverride" : "telemetry.envStillEditable"),
        })}
      </AlertDescription>
    </Alert>
  );
}

export default function TelemetryEnvBanner() {
  const { data } = useTelemetrySettings();
  if (data === undefined) return null;
  return (
    <div className="px-4 pt-4 empty:hidden">
      <TelemetryEnvNotice settings={data} />
    </div>
  );
}
