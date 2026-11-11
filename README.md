# LiteLLM China Localization

> 面向中国业务场景的 LiteLLM 社区衍生项目。
>
> **这是一个非官方分支，与 Berri AI、LiteLLM 官方团队没有隶属或背书关系。**

本项目基于 [BerriAI/litellm](https://github.com/BerriAI/litellm) 开发，重点补充中国法定节假日调价、简体中文界面和人民币金额展示能力。项目的目标是为中国区的 LiteLLM 使用者提供一套可审查、可部署、可持续向上游同步的本地化实现。

本项目当前发布在 [BoneWX/litellm-china](https://github.com/BoneWX/litellm-china)，并将 [BerriAI/litellm](https://github.com/BerriAI/litellm) 配置为上游仓库，以便持续同步官方修复。

## 项目状态

本项目目前处于**开发验证阶段**。节假日日历、费用计算和后台管理功能会直接影响计费结果，请在正式环境使用前完成业务测试、安全评审和许可证审查。

本项目不提供以下保证：

- 不保证与上游 LiteLLM 的功能、API 或升级节奏完全一致。
- 不保证中国法定节假日数据永久准确，使用前应以中国政府网发布的正式通知为准。
- 不代表 Berri AI 或 LiteLLM 官方提供商业支持、安全承诺或合规背书。

## 主要特性

### 中国节假日感知的分时计费

- 支持在 `off_peak_pricing` 中通过 `holiday_calendar: china` 启用中国节假日日历。
- 内置 2026 年中国法定节假日日期，覆盖元旦、春节、清明、劳动节、端午、中秋和国庆。
- 节假日日期按 `Asia/Shanghai` 时区计算，并按供应商本地自然日应用全天错峰价格。
- 支持 `holiday_dates` 添加额外日期，与命名日历取并集。
- 支持通过 `weekday_timezone` 指定星期与节假日日期所使用的 IANA 时区。
- 对未知日历名称进行校验，避免静默使用错误价格。

示例配置：

```yaml
model_list:
  - model_name: china-off-peak-model
    litellm_params:
      model: openai/gpt-4.1
      api_key: os.environ/OPENAI_API_KEY
      model_info:
        off_peak_pricing:
          holiday_calendar: china
          weekday_timezone: Asia/Shanghai
          windows:
            - hours_utc: "16:30-00:30"
              weekdays: [1, 2, 3, 4, 5]
          input_cost_per_token: 0.0000005
          output_cost_per_token: 0.000002
```

未配置的价格字段会回退到标准价格。实际配置时请根据供应商价格和部署方式调整费率。

### 节假日日历审核与发布

- 从中国政府网的正式通知中解析节假日日期。
- 仅接受 `https://*.gov.cn` 来源，并在拉取过程中校验重定向目标。
- 新日历先进入 `pending` 状态，管理员审核确认后才进入 `active` 状态并影响计费。
- 保存通知来源、内容哈希、确认人和确认时间，便于审计与复现。
- 支持配置版本号与乐观锁，避免多人同时修改时互相覆盖。
- 可记录节假日确认审计日志，并向其他实例广播配置变更。
- 提供年度补全任务：缺少下一年度数据时创建待审核项，而不是自动猜测日期。

管理端接口：

```text
GET  /config/off_peak_holiday_calendars
POST /config/off_peak_holiday_calendars/{calendar_name}/refresh
POST /config/off_peak_holiday_calendars/{calendar_name}/{year}/confirm
```

读取接口面向管理员和只读管理员，写入及确认接口仅允许代理管理员调用。

### 简体中文与人民币界面

- 管理后台支持 English 和简体中文切换。
- 首次访问时根据浏览器语言选择初始语言。
- 用户选择保存在浏览器本地，刷新页面后继续生效。
- 登录页、导航栏、账户菜单、聊天页面和主要管理页面提供语言切换入口。
- 金额统一以人民币符号和 `CNY` 代码展示。

当前中文化覆盖主要流程，但上游新增页面或文案仍可能需要继续补译。

### 中国网络环境构建优化

- Docker 构建支持使用国内可访问的容器镜像地址。
- 支持传入已构建的静态 UI 产物，避免重复执行前端构建。
- 保留上游多阶段构建、依赖锁定和镜像摘要校验机制。

## 快速开始

获取本项目：

```bash
git clone https://github.com/BoneWX/litellm-china.git
cd litellm-china
```

安装、数据库、认证和代理启动方式沿用上游 LiteLLM 文档：

- [LiteLLM 文档](https://docs.litellm.ai/)
- [LiteLLM Proxy 快速开始](https://docs.litellm.ai/docs/simple_proxy)

部署前请根据实际环境设置数据库、主密钥、代理管理员账号和模型 API Key。不要将 `.env`、API Key、数据库密码或生产日志提交到仓库。

## 测试

运行与节假日、分时计费相关的后端测试：

```bash
python -m pytest \
  tests/unit/litellm_core_utils/llm_cost_calc/test_llm_cost_calc_utils.py \
  tests/unit/proxy/common_utils/test_china_holiday_notice.py \
  tests/unit/proxy/common_utils/test_holiday_calendar_manager.py
```

运行前端单元测试和类型检查：

```bash
cd ui/litellm-dashboard
npm ci
npm run test:unit
npm run typecheck
```

运行完整测试前，请先阅读上游项目对应版本的开发文档和依赖要求。

## 目录说明

本项目的主要定制位于：

```text
litellm/litellm_core_utils/llm_cost_calc/holiday_calendars.py
litellm/models/holiday_calendar.py
litellm/proxy/common_utils/china_holiday_notice.py
litellm/proxy/common_utils/holiday_calendar_manager.py
litellm/proxy/management_endpoints/holiday_calendar_endpoints.py

ui/litellm-dashboard/src/i18n/
ui/litellm-dashboard/src/components/LanguageToggle/
ui/litellm-dashboard/src/utils/currency.ts
ui/litellm-dashboard/src/app/(dashboard)/cost-tracking/_components/HolidayCalendarSettings.tsx
```

其余代码来自上游 LiteLLM 或与之配套的第三方依赖。

## 与上游同步

建议保留两个远程仓库：

```text
origin   本项目自己的仓库
upstream BerriAI/litellm
```

同步上游：

```bash
git fetch upstream --prune
git switch main
git merge --ff-only upstream/main
git push origin main
```

定制功能应放在独立分支中开发：

```bash
git fetch upstream
git switch -c feature/my-change upstream/main
git push -u origin feature/my-change
```

## 来源与归属

### 上游项目

- 项目：LiteLLM
- 仓库：[https://github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)
- 版权：Copyright (c) 2023 Berri AI
- 本项目基线版本：`1.109.0`
- 基线提交：`d5ca88900c4ec558fdf9c7f9084484896221a366`
- 原始开发 Fork：[BoneWX/litellm](https://github.com/BoneWX/litellm)

### 本项目修改

- 独立仓库：[BoneWX/litellm-china](https://github.com/BoneWX/litellm-china)
- 维护者：BoneWX
- 主要方向：中国节假日日历、错峰计费、中文界面、人民币展示及国内构建支持
- 修改内容：见 Git 提交历史和本文件“主要特性”章节

上游版权声明和 MIT 许可证保留在 [LICENSE](LICENSE) 中。本项目新增的修改同样以 MIT 许可证发布；其中涉及上游代码的部分继续受上游许可证约束。

## 许可证

除上游明确标注为其他许可证的目录外，本项目采用 MIT 许可证。上游 `LICENSE` 当前说明：

- `enterprise/` 目录（如果存在）受该目录内单独的许可证约束。
- 其他内容采用 MIT 许可证。

分发本项目时应保留：

- 原始 LICENSE 文件。
- `Copyright (c) 2023 Berri AI` 版权声明。
- 本项目对源代码所作修改的说明。
- 第三方依赖各自的许可证和 NOTICE 文件。

本文件不构成法律意见。发布到 PyPI、Docker Registry 或其他包平台前，应确认包名、品牌使用、镜像许可和所有依赖许可证。

## 商标与官方关系

LiteLLM 名称、Berri AI 名称、Logo 及相关商标归其各自权利人所有。本项目使用这些名称仅用于说明代码来源和兼容关系。

本项目不是 LiteLLM 官方发行版，也不应暗示 Berri AI 对本项目提供维护、认证、担保或商业支持。

## 安全问题

请勿在公开 Issue 中提交以下内容：

- API Key、数据库密码或主密钥。
- 生产日志和用户数据。
- 未修复的安全漏洞细节。

安全相关问题应优先通过维护者提供的私密渠道报告。若问题来自未修改的上游代码，也应同时评估是否需要报告给 [BerriAI/litellm](https://github.com/BerriAI/litellm)。

## 参与贡献

提交前请：

1. 从最新 `upstream/main` 创建功能分支。
2. 保持修改范围清晰，避免提交日志、缓存、压缩包和本地配置。
3. 为行为变化补充测试。
4. 说明修改原因、影响范围和测试结果。
5. 确认新增代码和资源允许以 MIT 许可证发布。

涉及计费、认证、数据持久化或安全边界的修改应单独评审。

---

**English summary:** This is an unofficial, community-maintained LiteLLM derivative focused on China holiday-aware off-peak pricing, a Simplified Chinese admin dashboard, and CNY display. It is based on `BerriAI/litellm`, preserves the upstream MIT license and attribution, and is not endorsed by Berri AI.
