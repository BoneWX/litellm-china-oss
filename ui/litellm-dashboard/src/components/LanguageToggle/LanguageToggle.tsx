"use client";

import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { useLanguagePreference } from "@/i18n/languageStorage";
import { languageDisplayNames, type SupportedLanguage } from "@/i18n/resources";
import { cn } from "@/lib/cva.config";

interface LanguageToggleProps {
  className?: string;
  compact?: boolean;
}

const nextLanguage = (language: SupportedLanguage): SupportedLanguage => (language === "en" ? "zh-CN" : "en");

export default function LanguageToggle({ className, compact = false }: LanguageToggleProps) {
  const { t } = useTranslation();
  const [language, setLanguage] = useLanguagePreference();
  const next = nextLanguage(language);
  const label = next === "zh-CN" ? t("common.language.switchToChinese") : t("common.language.switchToEnglish");

  return (
    <Button
      type="button"
      variant="ghost"
      size={compact ? "icon-sm" : "sm"}
      className={cn("gap-1.5 text-muted-foreground", className)}
      aria-label={label}
      title={label}
      onClick={() => setLanguage(next)}
    >
      <Languages />
      {!compact && <span>{languageDisplayNames[language]}</span>}
    </Button>
  );
}
