"use client";

import React from "react";
import Link from "next/link";
import { Info } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const DEPRECATION_DISCUSSION_URL = "https://github.com/BerriAI/litellm/discussions/32090";

interface DeprecationBannerProps {
  featureName: string;
}

export const DeprecationBanner: React.FC<DeprecationBannerProps> = ({ featureName }) => {
  const { t } = useTranslation();
  return (
    <Alert className="mb-4">
      <Info />
      <AlertTitle>{t("shell.deprecation.title", { feature: featureName })}</AlertTitle>
      <AlertDescription>
        {t("shell.deprecation.descriptionPrefix", { feature: featureName })}
        <Link href={DEPRECATION_DISCUSSION_URL} target="_blank" rel="noopener noreferrer">
          {t("shell.deprecation.discussion")}
        </Link>
        {t("shell.deprecation.descriptionSuffix")}
      </AlertDescription>
    </Alert>
  );
};
