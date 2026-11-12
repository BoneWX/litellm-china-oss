import { describe, expect, it } from "vitest";

import {
  localizePolicyTemplate,
  localizePolicyTemplateComplexity,
  localizePolicyTemplateTag,
} from "./policyTemplateLocalization";

const template = {
  id: "advanced-au-pii-protection",
  title: "Advanced PII Protection (Australia)",
  description: "English catalog description",
};

describe("policy template localization", () => {
  it("localizes a known catalog template only for Chinese", () => {
    expect(localizePolicyTemplate(template, "zh-CN")).toEqual({
      title: "高级 PII 保护（澳大利亚）",
      description: "保护澳大利亚特有的身份标识、国际员工数据、财务信息、凭据、受保护群体信息以及行业敏感数据。",
    });
    expect(localizePolicyTemplate(template, "en")).toEqual({
      title: template.title,
      description: template.description,
    });
  });

  it("falls back to backend content for unknown templates", () => {
    expect(
      localizePolicyTemplate(
        { id: "future-template", title: "Future Template", description: "Future description" },
        "zh-Hans",
      ),
    ).toEqual({ title: "Future Template", description: "Future description" });
  });

  it("localizes templates from older backend catalogs", () => {
    expect(
      localizePolicyTemplate(
        {
          id: "prompt-injection-protection",
          title: "Prompt Injection Protection",
          description: "English description",
        },
        "zh-CN",
      ).title,
    ).toBe("提示注入防护");
  });

  it("localizes known tags and complexity while preserving unknown values", () => {
    expect(localizePolicyTemplateTag("PII Protection", "zh-CN")).toBe("PII 保护");
    expect(localizePolicyTemplateTag("Injection Protection", "zh-CN")).toBe("注入防护");
    expect(localizePolicyTemplateTag("Future Category", "zh-CN")).toBe("Future Category");
    expect(localizePolicyTemplateTag("PII Protection", "en")).toBe("PII Protection");
    expect(localizePolicyTemplateComplexity("High", "zh-CN")).toBe("高");
    expect(localizePolicyTemplateComplexity("Custom", "zh-CN")).toBe("Custom");
    expect(localizePolicyTemplateComplexity("High", "en")).toBe("High");
  });
});
