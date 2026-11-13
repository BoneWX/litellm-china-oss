import apiKeysEn from "./locales/en/api-keys.json";
import authEn from "./locales/en/auth.json";
import commonEn from "./locales/en/common.json";
import homeEn from "./locales/en/home.json";
import modelsEn from "./locales/en/models.json";
import navigationEn from "./locales/en/navigation.json";
import playgroundDeepEn from "./locales/en/playground-deep.json";
import shellEn from "./locales/en/shell.json";
import usageLogEn from "./locales/en/usage-log.json";
import baseEn from "./locales/en.json";
import agentsZhCN from "./locales/zh-CN/agents.json";
import accessGroupsZhCN from "./locales/zh-CN/access-groups.json";
import apiKeysZhCN from "./locales/zh-CN/api-keys.json";
import authZhCN from "./locales/zh-CN/auth.json";
import budgetScheduleZhCN from "./locales/zh-CN/budget-schedule.json";
import budgetsZhCN from "./locales/zh-CN/budgets.json";
import commonZhCN from "./locales/zh-CN/common.json";
import deploymentHealthZhCN from "./locales/zh-CN/deployment-health.json";
import guardrailsZhCN from "./locales/zh-CN/guardrails.json";
import homeZhCN from "./locales/zh-CN/home.json";
import memoryZhCN from "./locales/zh-CN/memory.json";
import mcpZhCN from "./locales/zh-CN/mcp.json";
import modelsZhCN from "./locales/zh-CN/models.json";
import navigationZhCN from "./locales/zh-CN/navigation.json";
import organizationsZhCN from "./locales/zh-CN/organizations.json";
import policiesZhCN from "./locales/zh-CN/policies.json";
import playgroundZhCN from "./locales/zh-CN/playground.json";
import playgroundDeepZhCN from "./locales/zh-CN/playground-deep.json";
import shellZhCN from "./locales/zh-CN/shell.json";
import skillsZhCN from "./locales/zh-CN/skills.json";
import teamsZhCN from "./locales/zh-CN/teams.json";
import toolsZhCN from "./locales/zh-CN/tools.json";
import usageLogZhCN from "./locales/zh-CN/usage-log.json";
import usersZhCN from "./locales/zh-CN/users.json";
import workflowsZhCN from "./locales/zh-CN/workflows.json";

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
  ...playgroundDeepEn,
  ...shellEn,
  ...usageLogEn,
};

export const zhCNResources = {
  ...agentsZhCN,
  ...accessGroupsZhCN,
  ...apiKeysZhCN,
  ...authZhCN,
  ...budgetScheduleZhCN,
  ...budgetsZhCN,
  ...commonZhCN,
  ...deploymentHealthZhCN,
  ...guardrailsZhCN,
  ...homeZhCN,
  ...memoryZhCN,
  ...mcpZhCN,
  ...modelsZhCN,
  ...navigationZhCN,
  ...organizationsZhCN,
  ...policiesZhCN,
  ...playgroundDeepZhCN,
  ...playgroundZhCN,
  ...shellZhCN,
  ...skillsZhCN,
  ...teamsZhCN,
  ...toolsZhCN,
  ...usageLogZhCN,
  ...usersZhCN,
  ...workflowsZhCN,
};

export const languageDisplayNames: Record<SupportedLanguage, string> = {
  en: "English",
  "zh-CN": "简体中文",
};

export const isSupportedLanguage = (value: unknown): value is SupportedLanguage =>
  typeof value === "string" && supportedLanguages.includes(value as SupportedLanguage);

export const preferredLanguageFor = (languages: readonly string[]): SupportedLanguage =>
  languages.some((language) => language.toLowerCase().startsWith("zh")) ? "zh-CN" : "en";
