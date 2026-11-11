import { z } from "zod";

import { useStoredValue, storageKey } from "@/lib/storage";

import { supportedLanguages, type SupportedLanguage } from "./resources";

export const languageStorageKey = storageKey<SupportedLanguage>(
  "local",
  "litellm_ui_language",
  z.enum(supportedLanguages),
  "en",
);

export const useLanguagePreference = () => useStoredValue(languageStorageKey);
