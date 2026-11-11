import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import i18n from "@/i18n/i18n";
import I18nProvider from "@/i18n/I18nProvider";
import { languageStorageKey } from "@/i18n/languageStorage";

import LanguageToggle from "./LanguageToggle";

describe("LanguageToggle", () => {
  beforeEach(async () => {
    localStorage.removeItem(languageStorageKey.name);
    await i18n.changeLanguage("en");
  });

  afterEach(async () => {
    localStorage.removeItem(languageStorageKey.name);
    await i18n.changeLanguage("en");
  });

  it("switches to Chinese, persists the preference and updates the document language", async () => {
    render(
      <I18nProvider>
        <LanguageToggle />
      </I18nProvider>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Switch to Chinese" }));

    await waitFor(() => expect(i18n.resolvedLanguage).toBe("zh-CN"));
    expect(document.documentElement.lang).toBe("zh-CN");
    expect(localStorage.getItem(languageStorageKey.name)).toBe(JSON.stringify("zh-CN"));
    expect(screen.getByRole("button", { name: "切换为英文" })).toBeInTheDocument();
  });
});
