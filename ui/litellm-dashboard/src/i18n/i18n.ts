import i18n, { type InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";

import { enResources, zhCNResources } from "./resources";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: { translation: typeof enResources };
  }
}

const options: InitOptions = {
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  resources: {
    en: { translation: enResources },
    "zh-CN": { translation: zhCNResources },
  },
  initAsync: false,
};

void i18n.use(initReactI18next).init(options);

export default i18n;
