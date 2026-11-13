"use client";

import { useState, type ReactNode } from "react";
import type { TFunction } from "i18next";
import { useTranslation } from "react-i18next";
import {
  ArrowDownToLine,
  ArrowUpFromLine,
  Brain,
  Clock,
  Coins,
  DatabaseZap,
  Gauge,
  RotateCw,
  Server,
  Shuffle,
  Timer,
} from "lucide-react";
import type { MessageType } from "@/components/chat_ui/types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from "@/components/ui/empty";
import { FieldDescription } from "@/components/ui/field";
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemTitle } from "@/components/ui/item";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { formatCost, formatSeconds, servedModel } from "./Conversation";
import { CopyIconButton, FallbackBadge, LongValue } from "./ModelName";

export type CodeSdk = "openai" | "azure";

function TraceRow({ title, description, children }: { title: string; description?: string; children?: ReactNode }) {
  return (
    <Item size="xs" className="flex-nowrap px-0 py-1.5">
      <ItemContent className="flex-none gap-0">
        <ItemTitle className="font-normal whitespace-nowrap text-muted-foreground">{title}</ItemTitle>
        {description && <ItemDescription className="whitespace-nowrap">{description}</ItemDescription>}
      </ItemContent>
      {children && <ItemActions className="min-w-0 flex-1 justify-end text-sm tabular-nums">{children}</ItemActions>}
    </Item>
  );
}

type StatValue = Readonly<{ label: string; icon: ReactNode; value: string | undefined }>;

function StatGrid({ stats }: { stats: readonly StatValue[] }) {
  const shown = stats.filter((stat): stat is StatValue & { value: string } => stat.value !== undefined);
  if (shown.length === 0) return null;
  return (
    <ItemGroup className="grid grid-cols-3 gap-x-4 gap-y-3 py-2 has-data-[size=sm]:gap-y-3">
      {shown.map((stat) => (
        <Item key={stat.label} size="sm" className="flex-col flex-nowrap items-start gap-0.5 p-0">
          <ItemDescription className="inline-flex items-center gap-1 whitespace-nowrap [&_svg]:size-3.5">
            {stat.icon}
            {stat.label}
          </ItemDescription>
          <ItemTitle className="tabular-nums">{stat.value}</ItemTitle>
        </Item>
      ))}
    </ItemGroup>
  );
}

function TraceSection({ value, title, children }: { value: string; title: string; children: ReactNode }) {
  return (
    <AccordionItem value={value} className="px-4">
      <AccordionTrigger className="py-3">{title}</AccordionTrigger>
      <AccordionContent className="pb-3 [&_p:not(:last-child)]:mb-0">
        <ItemGroup className="gap-0 pb-1 has-data-[size=xs]:gap-0">{children}</ItemGroup>
      </AccordionContent>
    </AccordionItem>
  );
}

function Muted({ children }: { children: ReactNode }) {
  return <p className="py-1.5 text-sm text-muted-foreground">{children}</p>;
}

const count = (value: number | undefined): string | undefined => (value === undefined ? undefined : String(value));
const millis = (value: number | undefined): string | undefined =>
  value === undefined ? undefined : `${Math.round(value)}ms`;

function Routing({ message }: { message: MessageType }) {
  const { t } = useTranslation();
  const trace = message.trace;
  const served = servedModel(message);
  const fellBack = (trace?.attemptedFallbacks ?? 0) > 0;
  const reported = Boolean(trace?.callId || trace?.modelGroup || trace?.providerModel);
  return (
    <TraceSection value="routing" title={t("playgroundDeep.inspector.routing")}>
      {trace?.requestedModel && (
        <TraceRow title={t("playgroundDeep.inspector.requested")}>
          <LongValue
            value={trace.requestedModel}
            detail={t("playgroundDeep.conversation.requestedModel")}
            copyLabel={t("playgroundDeep.conversation.copyModelName")}
            className="text-xs"
          />
        </TraceRow>
      )}
      {served && (
        <TraceRow title={t("playgroundDeep.inspector.servedBy")}>
          {fellBack && <FallbackBadge />}
          <LongValue
            value={served}
            detail={t("playgroundDeep.conversation.servedBy")}
            copyLabel={t("playgroundDeep.conversation.copyModelName")}
            className="text-xs"
          />
        </TraceRow>
      )}
      {trace?.providerModel && (
        <TraceRow title={t("playgroundDeep.inspector.providerModel")}>
          <LongValue
            value={trace.providerModel}
            detail={
              trace.deploymentId
                ? t("playgroundDeep.inspector.deploymentId", { id: trace.deploymentId })
                : t("playgroundDeep.inspector.modelSentToProvider")
            }
            copyLabel={t("playgroundDeep.inspector.providerModel")}
            className="text-xs"
            align="end"
          />
        </TraceRow>
      )}
      {trace?.apiBase && (
        <TraceRow title={t("playgroundDeep.inspector.apiBase")}>
          <LongValue
            value={trace.apiBase}
            detail={t("playgroundDeep.inspector.providerEndpoint")}
            copyLabel={t("playgroundDeep.inspector.apiBase")}
            className="text-xs"
            align="end"
          />
        </TraceRow>
      )}
      {trace?.callId && (
        <TraceRow title={t("playgroundDeep.inspector.callId")}>
          <span className="min-w-0 truncate font-mono text-xs">{trace.callId}</span>
          <CopyIconButton value={trace.callId} label={t("playgroundDeep.inspector.callId")} />
        </TraceRow>
      )}
      {trace?.responseId && (
        <TraceRow title={t("playgroundDeep.inspector.responseId")}>
          <span className="min-w-0 truncate font-mono text-xs">{trace.responseId}</span>
          <CopyIconButton value={trace.responseId} label={t("playgroundDeep.settings.responseId")} />
        </TraceRow>
      )}
      <StatGrid
        stats={[
          {
            label: t("playgroundDeep.inspector.fallbacks"),
            icon: <Shuffle />,
            value: count(trace?.attemptedFallbacks),
          },
          { label: t("playgroundDeep.inspector.retries"), icon: <RotateCw />, value: count(trace?.attemptedRetries) },
          { label: t("playgroundDeep.inspector.overhead"), icon: <Gauge />, value: millis(trace?.overheadMs) },
        ]}
      />
      {!reported && <Muted>{t("playgroundDeep.inspector.routingUnavailable")}</Muted>}
    </TraceSection>
  );
}

const noneRan = (t: TFunction, policies: readonly string[] | undefined): string | null => {
  if (policies === undefined) return t("playgroundDeep.inspector.noGuardrailsRan");
  return policies.length === 0 ? t("playgroundDeep.inspector.noGuardrailsOrPoliciesRan") : null;
};

function Guardrails({ message }: { message: MessageType }) {
  const { t } = useTranslation();
  const guardrails = message.trace?.appliedGuardrails;
  const policies = message.trace?.appliedPolicies;
  if (guardrails === undefined) {
    return (
      <TraceSection value="guardrails" title={t("playgroundDeep.inspector.guardrailsAndPolicies")}>
        <Muted>{t("playgroundDeep.inspector.noGuardrailData")}</Muted>
      </TraceSection>
    );
  }
  const emptyNote = guardrails.length === 0 ? noneRan(t, policies) : null;
  return (
    <TraceSection value="guardrails" title={t("playgroundDeep.inspector.guardrailsAndPolicies")}>
      {guardrails.map((name) => (
        <TraceRow key={`g-${name}`} title={name} description={t("playgroundDeep.inspector.guardrail")}>
          <Badge variant="secondary">{t("playgroundDeep.inspector.ran")}</Badge>
        </TraceRow>
      ))}
      {policies?.map((name) => (
        <TraceRow key={`p-${name}`} title={name} description={t("playgroundDeep.inspector.policy")}>
          <Badge variant="secondary">{t("playgroundDeep.inspector.ran")}</Badge>
        </TraceRow>
      ))}
      {emptyNote && <Muted>{emptyNote}</Muted>}
      {policies === undefined && <Muted>{t("playgroundDeep.inspector.policiesProxyOnly")}</Muted>}
    </TraceSection>
  );
}

function SpeedAndCost({ message }: { message: MessageType }) {
  const { t } = useTranslation();
  const usage = message.usage;
  const cost = usage?.cost ?? message.trace?.cost;
  return (
    <TraceSection value="performance" title={t("playgroundDeep.inspector.speedAndCost")}>
      <StatGrid
        stats={[
          {
            label: t("playgroundDeep.inspector.firstToken"),
            icon: <Timer />,
            value: message.timeToFirstToken === undefined ? undefined : formatSeconds(message.timeToFirstToken),
          },
          {
            label: t("playgroundDeep.inspector.total"),
            icon: <Clock />,
            value: message.totalLatency === undefined ? undefined : formatSeconds(message.totalLatency),
          },
          {
            label: t("playgroundDeep.inspector.cost"),
            icon: <Coins />,
            value: cost === undefined ? undefined : formatCost(cost),
          },
          {
            label: t("playgroundDeep.inspector.tokensIn"),
            icon: <ArrowDownToLine />,
            value: count(usage?.promptTokens),
          },
          {
            label: t("playgroundDeep.inspector.tokensOut"),
            icon: <ArrowUpFromLine />,
            value: count(usage?.completionTokens),
          },
          { label: t("playgroundDeep.inspector.cached"), icon: <DatabaseZap />, value: count(usage?.cacheReadTokens) },
          { label: t("playgroundDeep.inspector.reasoning"), icon: <Brain />, value: count(usage?.reasoningTokens) },
          {
            label: t("playgroundDeep.inspector.gatewayTime"),
            icon: <Server />,
            value: millis(message.trace?.responseMs),
          },
        ]}
      />
    </TraceSection>
  );
}

function NothingYet() {
  const { t } = useTranslation();
  return (
    <Empty className="flex-1">
      <EmptyHeader>
        <EmptyTitle className="text-sm">{t("playgroundDeep.inspector.nothingTitle")}</EmptyTitle>
        <EmptyDescription>{t("playgroundDeep.inspector.nothingDescription")}</EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}

function Trace({ message }: { message: MessageType | null }) {
  if (!message) return <NothingYet />;
  return (
    <Accordion multiple defaultValue={["routing", "guardrails", "performance"]}>
      <Routing message={message} />
      <Guardrails message={message} />
      <SpeedAndCost message={message} />
    </Accordion>
  );
}

function CodeTab({ code }: { code: (sdk: CodeSdk) => string }) {
  const { t } = useTranslation();
  const [sdk, setSdk] = useState<CodeSdk>("openai");
  const snippet = code(sdk);
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 px-4 pt-3">
        <ToggleGroup
          value={[sdk]}
          onValueChange={(value) => value[0] && setSdk(value[0] as CodeSdk)}
          variant="outline"
          size="sm"
          spacing={0}
          aria-label="SDK"
        >
          <ToggleGroupItem value="openai" className="h-7 px-2 text-xs">
            {t("playgroundDeep.inspector.openAiSdk")}
          </ToggleGroupItem>
          <ToggleGroupItem value="azure" className="h-7 px-2 text-xs">
            {t("playgroundDeep.inspector.azureSdk")}
          </ToggleGroupItem>
        </ToggleGroup>
        <span className="ml-auto">
          <CopyIconButton value={snippet} label={t("playgroundDeep.inspector.copyCode")} />
        </span>
      </div>
      <FieldDescription className="px-4 pt-2 text-xs">{t("playgroundDeep.inspector.codeHint")}</FieldDescription>
      <ScrollArea className="w-full">
        <pre className="px-4 py-3 font-mono text-xs leading-5 whitespace-pre text-foreground">{snippet}</pre>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

export function InspectorPanel({ message, code }: { message: MessageType | null; code: (sdk: CodeSdk) => string }) {
  const { t } = useTranslation();
  return (
    <Tabs defaultValue="trace" className="min-h-0 flex-1 gap-0">
      <div className="flex h-12 shrink-0 items-center border-b border-border px-4">
        <TabsList className="w-full">
          <TabsTrigger value="trace">{t("playgroundDeep.inspector.trace")}</TabsTrigger>
          <TabsTrigger value="code">{t("playgroundDeep.inspector.code")}</TabsTrigger>
        </TabsList>
      </div>
      <ScrollArea className="min-h-0 flex-1">
        <TabsContent value="trace" className="flex min-h-96 flex-col">
          <Trace message={message} />
        </TabsContent>
        <TabsContent value="code">
          <CodeTab code={code} />
        </TabsContent>
      </ScrollArea>
    </Tabs>
  );
}
