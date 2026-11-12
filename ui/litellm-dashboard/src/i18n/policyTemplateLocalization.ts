export interface PolicyTemplateDisplaySource {
  readonly id?: string | null;
  readonly title?: string | null;
  readonly description?: string | null;
}

interface PolicyTemplateTranslation {
  readonly title: string;
  readonly description: string;
}

const ZH_CN_TEMPLATES: Readonly<Record<string, PolicyTemplateTranslation>> = {
  "advanced-au-pii-protection": {
    title: "高级 PII 保护（澳大利亚）",
    description: "保护澳大利亚特有的身份标识、国际员工数据、财务信息、凭据、受保护群体信息以及行业敏感数据。",
  },
  "baseline-pii-protection": {
    title: "基础 PII 保护",
    description: "用于内部工具和测试的基础 PII 保护，仅覆盖凭据和高风险标识，适合非敏感的内部场景。",
  },
  "nsfw-content-filter-australia": {
    title: "NSFW 内容过滤（澳大利亚）",
    description:
      "基于英语和澳大利亚特有俚语，拦截脏话、色情内容、NSFW 请求、自残内容及危害儿童安全的内容，并防护性招揽、露骨内容、澳大利亚俚语脏话、自残和涉及未成年人的内容。",
  },
  "nsfw-content-filter-basic": {
    title: "NSFW 内容过滤（基础版）",
    description:
      "提供仅支持英语的基础 NSFW 过滤，拦截脏话、色情内容、歧视性称呼、性招揽、露骨请求、自残内容及危害儿童安全的内容，适合大多数需要内容审核的应用。",
  },
  "nsfw-content-filter-all-regions": {
    title: "NSFW 内容过滤（所有地区）",
    description:
      "提供全面的多语言 NSFW 内容过滤，可拦截英语、西班牙语、法语、德语和澳大利亚英语中的脏话、色情内容、不当请求、自残内容及危害儿童安全的内容，适合全球应用。",
  },
  "gdpr-eu-pii-protection": {
    title: "GDPR 第 32 条，欧盟 PII 保护",
    description:
      "依据 GDPR 第 32 条保护欧盟个人数据，可遮蔽法国国家身份号码（NIR/INSEE）、欧盟 IBAN、法国电话号码、欧盟增值税号、欧盟护照号码和电子邮件地址，适合处理欧盟公民数据并需要满足 GDPR 合规要求的应用。",
  },
  "eu-ai-act-article5": {
    title: "欧盟《人工智能法案》第 5 条，禁止性做法",
    description:
      "全面覆盖欧盟《人工智能法案》第 5 条中的禁止性 AI 做法，每种语言（英语和法语）包含 5 个专用子护栏，分别针对潜意识操纵（5.1a）、利用脆弱性（5.1b）、社会评分（5.1c）、工作场所或教育场景中的情绪识别（5.1f），以及生物特征分类和预测性画像（5.1d/g/h）。采用标识词和上下文词的条件匹配。",
  },
  "mcp-security-unregistered-server-block": {
    title: "MCP 安全，拦截未注册服务器",
    description: "拦截引用未在本 LiteLLM 网关注册的 MCP 服务器的请求，防止通过未注册 MCP 端点进行未经授权的工具访问。",
  },
  "airline-passenger-data-protection-uae": {
    title: "航空乘客数据保护（阿联酋）",
    description:
      "保护航空乘客 PII，包括 PNR/订座编号、多国护照号码、常旅客（Skywards）号码、支付卡、IBAN、阿联酋身份证、阿联酋电话号码和电子邮件地址，适用于运营全球航线的阿联酋航空公司。",
  },
  "aviation-operations-security": {
    title: "航空运营安全",
    description:
      "防止 AI 泄露航班运营数据，包括航班号、机组排班、登机口分配和飞机尾号，阻止生成航空安全漏洞或绕过程序相关内容，并防止输出未经授权的航空公司声明或虚假事件报告。",
  },
  "uae-regulatory-compliance": {
    title: "阿联酋法规合规",
    description:
      "符合阿联酋 2021 年第 45 号联邦法令（数据保护）和 2015 年第 2 号联邦法令（反歧视）的合规要求，保护阿联酋身份证号码和阿联酋电话号码，并确保对王室称谓和宗教内容政策等事项保持文化敏感性。",
  },
  "competitor-mention-detection": {
    title: "竞品提及检测",
    description:
      "自动检测并阻止 AI 推荐或宣传竞品品牌，通过 LLM 发现主要竞争对手，再监控输入和输出中的竞品提及、推荐和对比，避免业务流失。",
  },
  "pdpa-singapore": {
    title: "新加坡 PDPA，个人数据保护",
    description:
      "符合新加坡《个人数据保护法》（PDPA），覆盖个人标识收集（第 13 条同意）、敏感数据画像（咨询指南）、谢绝来电登记册违规（第 IX 部分）、跨境数据传输（第 26 条）以及缺少人工监督的自动画像（模型 AI 治理框架）等义务。还包括针对 NRIC/FIN、新加坡电话号码、邮政编码、护照、UEN 和银行账号的 PII 检测，并采用零成本的关键词检测。",
  },
  "mas-ai-risk-management": {
    title: "新加坡 MAS，金融机构 AI 风险管理",
    description:
      "对接新加坡金融管理局（MAS）面向金融机构的 AI 风险管理要求，覆盖金融决策中的公平性与偏差、AI 模型的透明度和可解释性、重大行动的人工监督、金融客户数据治理以及抵御对抗性攻击的模型安全。依据 MAS《人工智能风险管理指南》，并与 2018 年 FEAT 原则及 Project MindForge 保持一致，采用零成本的关键词检测。",
  },
  "claims-agent-safety": {
    title: "理赔智能体聊天机器人安全",
    description:
      "为医疗理赔智能体聊天机器人提供全面安全护栏，拦截欺诈指导（夸大、伪造材料）、未经授权的 PHI 披露、事前授权套利（代码操纵、虚假陈述医疗必要性）、系统覆盖注入（提示注入、角色冒充）以及理赔场景中的医疗建议（诊断、治疗建议）。已基于 243 个测试用例评估，5 类场景的精确率和召回率均为 100%。",
  },
  "canadian-pii-protection": {
    title: "加拿大 PII 保护（PIPEDA）",
    description:
      "依据 PIPEDA、安大略省 FIPPA 及省级隐私法规保护加拿大个人标识，遮蔽社会保险号码（SIN）、安大略省健康保险计划（OHIP）号码、安大略省驾照号码、加拿大护照号码、IRCC 移民文件、加拿大银行账户路由信息、邮政编码、电子邮件地址、电话号码以及多伦多大学机构标识（学生/员工编号、UTORid、TCard）。",
  },
  "airline-off-topic-restriction": {
    title: "航空主题限制",
    description:
      "将航空公司聊天机器人限制为仅回答航空相关主题，通过关键词检测拦截新闻、体育、编程、政治、娱乐、金融、食谱、作业和常识等无关问题，不额外调用 LLM。",
  },
  "topic-filtering": {
    title: "主题过滤",
    description:
      "将 AI 回复限制为仅涉及批准的主题，拦截新闻、政治、娱乐和常识等无关请求，适合需要专注于特定领域的聊天机器人。",
  },
  "prompt-injection-protection": {
    title: "提示注入防护",
    description:
      "检测并拦截提示注入攻击、SQL 注入尝试、代码注入和越狱尝试，防护试图覆盖系统指令或提取敏感信息的对抗性输入。",
  },
};

const ZH_CN_TAGS: Readonly<Record<string, string>> = {
  Australia: "澳大利亚",
  Aviation: "航空",
  "Brand Protection": "品牌保护",
  Canada: "加拿大",
  Claims: "理赔",
  "Content Safety": "内容安全",
  EU: "欧盟",
  FIPPA: "FIPPA 隐私法",
  "Financial Services": "金融服务",
  Healthcare: "医疗健康",
  "Injection Protection": "注入防护",
  PIPEDA: "PIPEDA 隐私法",
  "PII Protection": "PII 保护",
  Regulatory: "法规合规",
  Security: "安全",
  Singapore: "新加坡",
  "Topic Control": "主题控制",
  "Topic Restriction": "主题限制",
  UAE: "阿联酋",
};

const ZH_CN_COMPLEXITY: Readonly<Record<string, string>> = {
  High: "高",
  Low: "低",
  Medium: "中",
};

const isChineseLanguage = (language?: string): boolean => language?.toLowerCase().startsWith("zh") ?? false;

export const localizePolicyTemplate = (
  template: PolicyTemplateDisplaySource,
  language?: string,
): PolicyTemplateTranslation => {
  const translation = isChineseLanguage(language) && template.id ? ZH_CN_TEMPLATES[template.id] : undefined;
  return {
    title: translation?.title ?? template.title ?? "",
    description: translation?.description ?? template.description ?? "",
  };
};

export const localizePolicyTemplateTag = (tag: string, language?: string): string =>
  isChineseLanguage(language) ? ZH_CN_TAGS[tag] ?? tag : tag;

export const localizePolicyTemplateComplexity = (complexity: string, language?: string): string =>
  isChineseLanguage(language) ? ZH_CN_COMPLEXITY[complexity] ?? complexity : complexity;
