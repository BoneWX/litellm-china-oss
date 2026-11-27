# LiteLLM China OSS

> 面向中国业务场景的 LiteLLM 社区衍生项目
>
> **本项目为非官方分支，与 Berri AI 和 LiteLLM 官方团队没有隶属、授权或背书关系。**

本项目基于 [BerriAI/litellm](https://github.com/BerriAI/litellm) 开发，当前版本为 `1.109.0`。定制方向包括中国法定节假日错峰计费、完整简体中文管理后台、人民币金额展示、OSS-only 构建以及预算计数正确性修复。

项目地址：[BoneWX/litellm-china-oss](https://github.com/BoneWX/litellm-china-oss)

## 当前版本

当前验证版本包含以下主要改动：

| 日期 | 模块 | 更新内容 |
| --- | --- | --- |
| 2026-11-27 | 管理后台 / 模型分析 | 移除 Beta“模型排行榜”入口、独立页面、`GET /model-insights` 和 `GET /model-insights/tasks`；用量页模型统计与每日模型用量汇总保持不变 |
| 2026-11-27 | 管理后台 / 智能体 | 移除 Beta“Lens”入口、独立页面、管理端代理、追踪读写 API、OTLP 发送和 Helm/Docker 连接配置 |
| 2026-11-27 | 管理后台 / UI API | 移除通知铃铛、Auto Router 公告和 `GET /get/latest_release_info` 在线版本检查 |
| 2026-11-27 | 管理后台 / 公开 API | 移除 LiteLLM Blog 动态入口、首页动态、`GET /public/litellm_blog_posts`，并停止访问外部 RSS |
| 2026-11-27 | 管理后台 / UI API | 移除工作区菜单中的 Moyai 入口、独立连接页及 `/moyai/connect/*` 快速连接接口 |
| 2026-11-27 | 聊天工作区 | 完成独立 Chat 页面的简体中文覆盖，包括对话、模型、MCP 集成、凭据、API Key、日志和用量 |
| 2026-11-17 | 管理后台 | 完成主要页面和复杂交互页面的简体中文覆盖 |
| 2026-11-17 | 前端构建 | Next.js 升级至 `16.4.6`，更新依赖锁定文件 |
| 2026-11-17 | 预算计数 | 修复并发冷启动时历史 Key 用量被重复累加、导致错误 `429` 的问题 |
| 2026-11-12 | 邮件设置 | 移除企业版邮件事件设置入口及不可用的企业 API 客户端 |
| 2026-11-12 | OSS 构建 | 继续移除企业目录、企业 Python 模块和企业运行时挂载 |

当前本地构建验证使用标签：

```text
litellm:v1.109.0-holiday-cny-20261117-coldseedfix
```

发布到镜像仓库前，应根据实际 Registry、发布日期和提交哈希使用不可变标签。

## 项目状态

本项目处于持续开发和验证阶段。节假日日历、费用计算、预算限制和管理后台功能会直接影响计费结果，正式环境上线前应完成以下工作：

- 使用实际模型价格和业务请求进行回归测试。
- 验证数据库备份、升级和回滚流程。
- 对认证、密钥管理、网络边界和日志脱敏进行安全评审。
- 审查新增代码、第三方依赖和资源的许可证。

本项目不保证与上游 LiteLLM 的功能、API 或发布节奏完全一致，也不代表 Berri AI 或 LiteLLM 官方提供商业支持、安全承诺或合规背书。

## 主要特性

### 管理后台完整中文化

- 管理后台支持 English 和简体中文切换。
- 首次访问根据浏览器语言选择初始语言。
- 用户语言选择会保存在浏览器中，刷新后继续生效。
- 中文化覆盖登录、导航、首页、API Key、预算、用户、团队、组织、访问组、模型、供应商、守护栏、工具、MCP、Skills、Agents、策略、工作流、记忆、遥测、费用追踪、路由设置、日志、提示词、标签、向量存储和 Playground 等主要页面。
- 覆盖 Playground 会话管理、模型选择、参数设置、附件、工具调用、推理内容、指标展示、Compliance UI 和 System One 等复杂交互。
- 管理后台金额统一以人民币符号和 `CNY` 代码展示。
- 独立聊天工作区的导航、提示词、输入框、消息操作、集成授权、日志、用量和错误提示均已支持简体中文。
- 用户生成或供应商返回的原始内容仍保持原语言，不会被自动翻译。

上游新增页面和新文案仍需要持续补译。发现遗漏时，可优先检查：

```text
ui/litellm-dashboard/src/i18n/locales/zh-CN/
```

### 移除 LiteLLM Blog 集成

本发行版移除了管理后台 Blog 下拉入口、首页“LiteLLM 新动态”和“最新动态”模块，以及公开接口 `GET /public/litellm_blog_posts`。

升级后：

- 该接口返回 `404`。
- 代理不再访问 `https://docs.litellm.ai/blog/rss.xml`。
- `LITELLM_BLOG_POSTS_URL` 和 `LITELLM_LOCAL_BLOG_POSTS` 不再生效。
- Python 包中不再包含 `litellm/blog_posts.json` 本地备份。

### 移除在线版本通知

本发行版移除了管理后台顶部通知铃铛、固定 Auto Router 公告，以及 `GET /get/latest_release_info` 在线版本检查接口。

升级后：

- 管理后台不再自动比较当前版本与 LiteLLM 最新发布版本。
- 代理不再为此功能访问 `docs.litellm.ai/release_notes/rss.xml` 或 GitHub Releases API。
- `GET /get/latest_release_info` 返回 `404`。
- `LITELLM_DISABLE_LATEST_RELEASE_CHECK` 不再生效。
- 该通知铃铛原本只展示版本更新和 Auto Router 公告，不承载预算、请求失败或团队告警；这些功能不受影响。

### 移除 Moyai 快速连接

本发行版移除了工作区菜单中的 Moyai 入口、独立 Moyai 页面、管理设置中的连接状态，以及 `POST /moyai/connect/start` 和 `POST /moyai/connect/exchange` 快速连接接口。

升级后：

- 两个 Moyai 快速连接接口返回 `404`。
- AI 网关、模型、虚拟密钥、预算、用量、聊天、智能体、MCP 和日志功能不受影响。
- 不再读取 `moyai_url` UI 设置，也不需要数据库迁移。
- 数据库中已有的 `moyai_url` 配置和此前创建的外部连接密钥不会自动删除。

### 移除 Beta 模型排行榜与 Lens

本发行版移除了管理后台侧边栏中的 Beta“模型排行榜”和“Lens”入口，以及对应的独立页面和后端接口。

升级后：

- `/ui/model-insights`、`/ui/lens`、`GET /model-insights` 和 `GET /model-insights/tasks` 不再可用。
- Lens 管理端代理、追踪读取/查询接口、内部消费日志导出和相关运行时中间件已移除。
- Claude Code 网关使用的 OTLP `POST /v1/traces`、`POST /v1/logs` 接收能力保留，不影响该网关。
- 用量页、模型调用、消费日志、计费、预算、认证、团队和用户管理不受影响。
- 每日模型用量汇总仍会正常写入，供现有用量统计和后续分析使用。
- 数据库中的 `LiteLLM_Lens*` 历史表和迁移记录暂不自动删除，已有数据会保留；本次升级不需要额外数据库迁移。
- 部署模板中的 Lens 连接环境变量、Ingress 路由、Docker tracing 示例、CI 分片和 Grafana 导出面板已移除。

### Key 用量与预算计数修复

本项目修复了一个会导致 Key 被错误拦截的预算计数问题。

问题表现为：

- 数据库中的真实消费约为 `724`。
- `429` 错误却显示当前消费约为 `1448`。
- 实际消费尚未达到 `max_budget`，Key 仍然持续收到 `Budget has been exceeded`。
- 单容器、单 worker、未配置 Redis 时同样可以触发。

根因位于冷启动预算计数器初始化路径。数据库读取暂时失败时，fallback 使用缓存中的历史消费进行加法。多个并发请求可能同时执行该 fallback，导致同一份历史消费被累加多次。

当前实现将 fallback 基线写入纳入 per-counter 锁，并使用一次性初始化语义：

- 历史消费只用于建立计数器基线。
- 基线只写入一次，不再通过增量加法重复累加。
- 请求产生的新费用仍按真实金额正常累加。
- Redis 模式使用 `SET NX` 保持跨进程初始化的一致性。
- 纯内存模式使用同一进程锁，适用于单 worker 部署。

升级到包含此修复的镜像后需要重建 LiteLLM 进程。进程内旧的错误计数器会在重启后清除。如果数据库中的 Key `spend` 字段本身已经被写错，仍需通过 Key Spend 重置功能修正持久化数据。

单 worker 可以继续使用纯内存状态。存在多个 worker、多个副本或严格全局预算控制时，仍建议配置 Redis。

### 中国节假日感知的分时计费

- 支持在 `off_peak_pricing` 中通过 `holiday_calendar: china` 启用中国节假日日历。
- 内置 2026 年中国法定节假日日期，覆盖元旦、春节、清明、劳动节、端午、中秋和国庆。
- 节假日日期按 `Asia/Shanghai` 时区计算，并按供应商本地自然日应用全天错峰价格。
- 支持通过 `holiday_dates` 添加额外日期，并与命名日历取并集。
- 支持通过 `weekday_timezone` 指定星期和节假日日期所使用的 IANA 时区。
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

- 从中国政府网正式通知中解析节假日日期。
- 仅接受 `https://*.gov.cn` 来源，并在拉取过程中校验重定向目标。
- 新日历先进入 `pending` 状态，管理员审核确认后才进入 `active` 状态并影响计费。
- 保存通知来源、内容哈希、确认人和确认时间，便于审计与复现。
- 支持配置版本号与乐观锁，避免多人同时修改时互相覆盖。
- 可记录节假日确认审计日志，并向其他实例广播配置变更。
- 提供年度补全任务，缺少下一年度数据时创建待审核项，不会自动猜测日期。

管理端接口：

```text
GET  /config/off_peak_holiday_calendars
POST /config/off_peak_holiday_calendars/{calendar_name}/refresh
POST /config/off_peak_holiday_calendars/{calendar_name}/{year}/confirm
```

读取接口面向管理员和只读管理员，写入及确认接口仅允许代理管理员调用。

### 企业版邮件事件设置清理

OSS 后台不再挂载企业版邮件事件设置组件，也不再暴露对应后端不存在的接口客户端。

本次清理包括：

- 移除 `EmailEventSettings` 企业邮件事件设置卡片。
- 移除 `/email/event_settings` 相关 GET、PATCH 和 reset 客户端方法。
- 移除仅用于企业邮件事件设置的 TypeScript 类型。
- 同步更新生成后的 API schema 和相关测试。

以下开源邮件配置仍然保留：

- SMTP 服务器配置。
- SMTP 发件人和认证信息。
- OSS 邮件告警配置。
- 预算和相关告警邮件配置。

### 中国网络环境构建优化

- Docker 构建支持国内可访问的容器镜像地址。
- 支持通过代理参数完成依赖下载。
- 支持 `UI_SOURCE_STAGE=ui-prebuilt` 使用已构建的静态 UI，避免重复执行前端构建。
- 保留上游多阶段构建、依赖锁定和镜像摘要校验机制。
- Dockerfile 已适配 Python 3.13 下的 Prisma Client Python 类型生成流程。
- 前端当前使用 Next.js `16.4.6` 和更新后的 lockfile。

## OSS-only 发行范围

本发行版只包含 MIT 许可的开源代码、本项目新增的中国本地化修改，以及这些代码所依赖的第三方公开组件。

为确保可以公开分发，本发行版已主动移除：

- 上游商业目录 `enterprise/`。
- `litellm-enterprise` Python 依赖及对应 workspace 配置。
- 构建后安装的 `litellm_enterprise` Python 模块。
- 各 Dockerfile 中的企业目录复制和运行时挂载。
- `litellm/proxy/enterprise` 兼容链接。
- 仅用于企业 UI 构建的 `docker/build_admin_ui.sh`。
- 企业版邮件事件设置 UI 和不可用的企业 API 客户端。

以下上游企业功能不属于本发行版的服务范围：

- 企业 SSO、企业认证扩展和企业管理路由。
- 企业项目管理、托管文件、托管向量存储及相关接口。
- 企业邮件事件管理、PagerDuty 等企业告警回调。
- 企业版 Secret Detection、Guardrail 和安全扩展。
- 其他依赖 `litellm_enterprise` 或企业许可证的功能。

设置 `LITELLM_LICENSE` 不会恢复这些功能，因为对应企业代码并未包含在镜像中。需要这些能力时，请使用 LiteLLM 官方产品或取得 Berri AI 的正式授权。

## 快速开始

获取本项目：

```bash
git clone https://github.com/BoneWX/litellm-china-oss.git
cd litellm-china-oss
```

准备环境变量：

```bash
cp .env.example .env
```

至少需要配置：

- PostgreSQL 数据库地址。
- `LITELLM_MASTER_KEY`。
- 代理管理员账号或认证方式。
- 模型供应商 API Key。
- 需要使用邮件告警时的 SMTP 配置。

不要将 `.env`、API Key、数据库密码或生产日志提交到仓库。

安装、数据库、认证和代理启动方式整体沿用上游 LiteLLM 文档：

- [LiteLLM 文档](https://docs.litellm.ai/)
- [LiteLLM Proxy 快速开始](https://docs.litellm.ai/docs/simple_proxy)

### Docker Compose

仓库提供基础 `docker-compose.yml`。实际部署时建议使用独立的 `config.yaml`、生产数据库密码和固定镜像标签。

```bash
docker compose up -d --build
```

镜像保持上游 `4000/tcp` 端口，并按上游方式配置数据库、主密钥、模型和认证。

### 构建镜像

完整构建：

```bash
COMMIT_SHA=$(git rev-parse --short HEAD)

docker build \
  -t "litellm:v1.109.0-china-${COMMIT_SHA}" \
  .
```

使用已生成的前端静态文件时：

```bash
test -d ui/litellm-dashboard/out

docker build \
  --build-arg UI_SOURCE_STAGE=ui-prebuilt \
  -t "litellm:v1.109.0-china-${COMMIT_SHA}" \
  .
```

如果 `ui/litellm-dashboard/out/` 不存在，需要先执行前端构建，或者移除 `UI_SOURCE_STAGE=ui-prebuilt` 让 Dockerfile 执行默认的 `ui-builder` 阶段。

### 发布镜像

发布前应使用不可变标签，并记录提交哈希：

```bash
git rev-parse HEAD

docker image inspect \
  "litellm:v1.109.0-china-${COMMIT_SHA}" \
  --format '{{.Id}} {{.Os}}/{{.Architecture}}'
```

不要只发布 `latest` 标签。建议同时保留版本、日期和短提交哈希，例如：

```text
litellm:v1.109.0-china-20261117-5a410421
```

## 测试

运行 Key 用量和冷启动计数相关测试：

```bash
python -m pytest \
  tests/unit/proxy/proxy_server/test_spend_counters.py \
  tests/unit/proxy/db/test_spend_counter_reseed.py
```

运行节假日、分时计费相关测试：

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

提交前建议执行仓库要求的完整检查：

```bash
make check
```

涉及计费、预算、认证、并发、数据持久化或安全边界的修改应单独评审，并保留修复前后的验证结果。

## 目录说明

本项目的主要定制位于：

```text
litellm/litellm_core_utils/llm_cost_calc/holiday_calendars.py
litellm/models/holiday_calendar.py
litellm/proxy/common_utils/china_holiday_notice.py
litellm/proxy/common_utils/holiday_calendar_manager.py
litellm/proxy/management_endpoints/holiday_calendar_endpoints.py
litellm/proxy/db/spend_counter_reseed.py
litellm/proxy/proxy_server.py

tests/unit/proxy/proxy_server/test_spend_counters.py
tests/unit/proxy/db/test_spend_counter_reseed.py

ui/litellm-dashboard/src/i18n/
ui/litellm-dashboard/src/i18n/locales/zh-CN/
ui/litellm-dashboard/src/components/LanguageToggle/
ui/litellm-dashboard/src/utils/currency.ts
ui/litellm-dashboard/src/app/(dashboard)/cost-tracking/_components/HolidayCalendarSettings.tsx
```

`README.upstream.md` 保留上游 README，便于比较和同步。其余代码来自上游 LiteLLM 或与之配套的第三方依赖。

## 与上游同步

建议保留两个远程仓库：

```text
origin   本项目自己的仓库
upstream BerriAI/litellm
```

本仓库为了保持公开历史干净，没有携带上游的完整提交历史，因此不能直接把 `upstream/main` 合并进来，否则可能重新引入企业目录和企业依赖。

同步时应先获取并审查上游差异：

```bash
git fetch upstream --prune
git diff d5ca88900c4ec558fdf9c7f9084484896221a366..upstream/main --stat
```

只选择与本项目相关的开源修改，在新的功能分支中重新应用，并排除以下路径：

```text
enterprise/
litellm/proxy/enterprise
```

定制功能或上游同步应放在独立分支中开发和验证：

```bash
git switch -c litellm_my_change main
git push -u origin litellm_my_change
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

- 独立仓库：[BoneWX/litellm-china-oss](https://github.com/BoneWX/litellm-china-oss)
- 维护者：BoneWX
- 主要方向：中国节假日日历、错峰计费、完整中文界面、人民币展示、OSS-only 构建以及预算计数正确性修复
- 发行形式：不包含 Berri AI 商业企业组件的 OSS-only 构建
- 修改内容：见 Git 提交历史和本文件“主要特性”章节

## 许可证

除上游明确标注为其他许可证的内容外，本项目采用 MIT 许可证。上游 `LICENSE` 当前说明：

- `enterprise/` 目录（如果存在）受该目录内单独的许可证约束。
- 其他内容采用 MIT 许可证。

本 OSS-only 发行版不包含 `enterprise/`。保留该说明是为了保存上游许可证原文和归属信息。

分发本项目时应保留：

- 原始 `LICENSE` 文件。
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

1. 从本项目最新 `main` 创建功能分支。
2. 保持修改范围清晰，避免提交日志、缓存、压缩包和本地配置。
3. 为行为变化补充测试。
4. 说明修改原因、影响范围和测试结果。
5. 确认新增代码和资源允许以 MIT 许可证发布。

涉及计费、预算、认证、并发、数据持久化或安全边界的修改应单独评审。

---

**English summary:** This is an unofficial, community-maintained LiteLLM derivative focused on China holiday-aware off-peak pricing, a complete Simplified Chinese admin dashboard, CNY display, OSS-only packaging, and spend-counter correctness. It is based on `BerriAI/litellm`, preserves upstream MIT attribution, and is not endorsed by Berri AI.
