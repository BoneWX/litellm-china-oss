import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { DeprecationBanner } from "./DeprecationBanner";
import i18n from "@/i18n/i18n";

afterEach(async () => {
  await i18n.changeLanguage("en");
});

describe("DeprecationBanner", () => {
  it("names the deprecated feature", () => {
    render(<DeprecationBanner featureName="Workflows" />);

    expect(screen.getByRole("alert")).toHaveTextContent("Workflows");
  });

  it("links to the deprecation discussion in a new tab without leaking the opener", () => {
    render(<DeprecationBanner featureName="Workflows" />);

    const link = screen.getByRole("link", { name: "deprecation discussion" });
    expect(link).toHaveAttribute("href", "https://github.com/BerriAI/litellm/discussions/32090");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders Chinese copy while preserving the feature name", async () => {
    await i18n.changeLanguage("zh-CN");
    render(<DeprecationBanner featureName="工作流运行" />);

    expect(screen.getByRole("alert")).toHaveTextContent("工作流运行已弃用");
    expect(screen.getByRole("link", { name: "弃用讨论" })).toBeInTheDocument();
  });
});
