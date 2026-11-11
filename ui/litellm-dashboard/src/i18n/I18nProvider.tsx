"use client";

import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";

import i18n from "./i18n";
import { languageStorageKey, useLanguagePreference } from "./languageStorage";
import { preferredLanguageFor } from "./resources";
import { getLocalStorageItem } from "@/utils/localStorageUtils";

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useLanguagePreference();

  useEffect(() => {
    if (getLocalStorageItem(languageStorageKey.name) !== null) return;
    const preferredLanguage = preferredLanguageFor(navigator.languages ?? [navigator.language]);
    if (preferredLanguage !== language) setLanguage(preferredLanguage);
  }, [language, setLanguage]);

  useEffect(() => {
    document.documentElement.lang = language;
    if (i18n.resolvedLanguage !== language) {
      void i18n.changeLanguage(language);
    }
  }, [language]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
