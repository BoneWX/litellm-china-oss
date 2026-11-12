import apiKeysEn from "./locales/en/api-keys.json";
import authEn from "./locales/en/auth.json";
import commonEn from "./locales/en/common.json";
import homeEn from "./locales/en/home.json";
import modelsEn from "./locales/en/models.json";
import navigationEn from "./locales/en/navigation.json";
import shellEn from "./locales/en/shell.json";
import usageLogEn from "./locales/en/usage-log.json";
import baseEn from "./locales/en.json";
import apiKeysZhCN from "./locales/zh-CN/api-keys.json";
import authZhCN from "./locales/zh-CN/auth.json";
import commonZhCN from "./locales/zh-CN/common.json";
import homeZhCN from "./locales/zh-CN/home.json";
import modelsZhCN from "./locales/zh-CN/models.json";
import navigationZhCN from "./locales/zh-CN/navigation.json";
import policiesZhCN from "./locales/zh-CN/policies.json";
import shellZhCN from "./locales/zh-CN/shell.json";
import usageLogZhCN from "./locales/zh-CN/usage-log.json";

export const supportedLanguages = ["en", "zh-CN"] as const;

export type SupportedLanguage = (typeof supportedLanguages)[number];

export const enResources = {
  ...baseEn,
  ...apiKeysEn,
  ...authEn,
  ...commonEn,
  ...homeEn,
  ...modelsEn,
  ...navigationEn,
  ...shellEn,
  ...usageLogEn,
};

export const zhCNResources = {
  ...apiKeysZhCN,
  ...authZhCN,
  ...commonZhCN,
  ...homeZhCN,
  ...modelsZhCN,
  ...navigationZhCN,
  ...policiesZhCN,
  ...shellZhCN,
  ...usageLogZhCN,
};

export const languageDisplayNames: Record<SupportedLanguage, string> = {
  en: "English",
  "zh-CN": "简体中文",
};

export const isSupportedLanguage = (value: unknown): value is SupportedLanguage =>
  typeof value === "string" && supportedLanguages.includes(value as SupportedLanguage);

export const preferredLanguageFor = (languages: readonly string[]): SupportedLanguage =>
  languages.some((language) => language.toLowerCase().startsWith("zh")) ? "zh-CN" : "en";
