"use client";

import {
  BellOff,
  ChevronDown,
  ChevronRight,
  CircleAlert,
  Clock,
  ExternalLink,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";
import { Trans, useTranslation } from "react-i18next";
import {
  type DeploymentWarning,
  useDeploymentHealthAccess,
  useDeploymentWarnings,
  useUpdateDeploymentWarningIgnore,
} from "@/app/(dashboard)/hooks/deploymentWarnings/useDeploymentWarnings";
import { Alert, AlertDescription, AlertTitle } from "@/components/shared/Alert";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { cn } from "@/lib/cva.config";
import { Skeleton } from "@/components/ui/skeleton";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { activeWarnings, type DeploymentHealthHandle } from "./DeploymentHealth";
import { deploymentWarningContent } from "./DeploymentWarningContent";
import i18n from "@/i18n/i18n";

const DAY_SECONDS = 24 * 60 * 60;

const SNOOZE_OPTIONS = [
  { days: 1, seconds: DAY_SECONDS },
  { days: 7, seconds: 7 * DAY_SECONDS },
  { days: 30, seconds: 30 * DAY_SECONDS },
] as const;

const SEVERITY_GROUPS = [
  { severity: "critical", labelKey: "deploymentHealth.panel.severity.critical" },
  { severity: "warning", labelKey: "deploymentHealth.panel.severity.warnings" },
] as const;

const localDateFormat = (options: Intl.DateTimeFormatOptions): Intl.DateTimeFormat =>
  new Intl.DateTimeFormat(i18n.resolvedLanguage ?? undefined, options);
const formatLocalMinute = (iso: string): string =>
  localDateFormat({ dateStyle: "medium", timeStyle: "short" }).format(new Date(iso));
const formatLocalDay = (iso: string): string => localDateFormat({ dateStyle: "medium" }).format(new Date(iso));
const formatFullUtc = (iso: string): string =>
  new Intl.DateTimeFormat(i18n.resolvedLanguage ?? undefined, {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "UTC",
  }).format(new Date(iso));

interface ItemPermissions {
  canManage: boolean;
  ignoreAvailable: boolean;
}

type IgnoreState = NonNullable<DeploymentWarning["ignore"]>;

const SnoozeMenu = ({ warningId, title }: { warningId: string; title: string }) => {
  const { t } = useTranslation();
  const update = useUpdateDeploymentWarningIgnore();
  const ignore = (snoozeSeconds?: number) =>
    update.mutate({ warningId, update: { ignored: true, snooze_seconds: snoozeSeconds } });
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="outline"
            size="sm"
            className="h-7 text-[13px]"
            disabled={update.isPending}
            aria-label={t("deploymentHealth.panel.snoozeAria", { title })}
          />
        }
      >
        {t("deploymentHealth.panel.snooze")}
        <ChevronDown data-icon="inline-end" aria-hidden />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-48 [&_[data-slot=dropdown-menu-item]]:whitespace-nowrap">
        {SNOOZE_OPTIONS.map(({ days, seconds }) => (
          <DropdownMenuItem key={seconds} onClick={() => ignore(seconds)}>
            <Clock aria-hidden />
            {t("deploymentHealth.panel.snoozeDays", { count: days })}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => ignore()}>
          <BellOff aria-hidden />
          {t("deploymentHealth.panel.ignoreForever")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const RestoreButton = ({ warningId, title }: { warningId: string; title: string }) => {
  const { t } = useTranslation();
  const update = useUpdateDeploymentWarningIgnore();
  return (
    <Button
      variant="outline"
      size="sm"
      className="h-7 text-[13px]"
      disabled={update.isPending}
      aria-label={t("deploymentHealth.panel.restoreAria", { title })}
      onClick={() => update.mutate({ warningId, update: { ignored: false } })}
    >
      {t("deploymentHealth.panel.restore")}
    </Button>
  );
};

const ItemAction = ({
  warning,
  title,
  canManage,
  ignoreAvailable,
}: ItemPermissions & { warning: DeploymentWarning; title: string }) => {
  if (!canManage || !ignoreAvailable) return null;
  if (!warning.ignore) return <SnoozeMenu warningId={warning.id} title={title} />;
  return warning.ignore.source === "admin" ? <RestoreButton warningId={warning.id} title={title} /> : null;
};

const IgnoreMeta = ({ ignore }: { ignore: IgnoreState }) => {
  const { t } = useTranslation();
  if (ignore.source === "env_var") {
    return (
      <Trans
        i18nKey="deploymentHealth.panel.ignoreMeta.byEnvVar"
        values={{ name: ignore.env_var }}
        components={{ code: <code className="font-mono wrap-anywhere" /> }}
      />
    );
  }
  if (ignore.ignored_until) {
    return (
      <span>
        <SimpleTooltip content={formatFullUtc(ignore.ignored_until)}>
          <span className="underline decoration-dotted underline-offset-3">
            {t("deploymentHealth.panel.ignoreMeta.until", { time: formatLocalMinute(ignore.ignored_until) })}
          </span>
        </SimpleTooltip>{" "}
        · {t("deploymentHealth.panel.ignoreMeta.by", { name: ignore.ignored_by })}
      </span>
    );
  }
  return (
    <span>
      {t("deploymentHealth.panel.ignoreMeta.since", {
        time: formatLocalDay(ignore.ignored_at),
        name: ignore.ignored_by,
      })}
    </span>
  );
};

const IgnoreStatus = ({ ignore }: { ignore: IgnoreState }) => {
  const { t } = useTranslation();
  const snoozed = ignore.source === "admin" && Boolean(ignore.ignored_until);
  const Icon = snoozed ? Clock : BellOff;
  return (
    <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[12px] leading-4 text-muted-foreground">
      <Badge variant="outline" className="gap-1 bg-muted text-muted-foreground">
        <Icon aria-hidden />
        {snoozed ? t("deploymentHealth.panel.status.snoozed") : t("deploymentHealth.panel.status.ignored")}
      </Badge>
      <IgnoreMeta ignore={ignore} />
    </div>
  );
};

const WarningItem = ({ warning, ...permissions }: ItemPermissions & { warning: DeploymentWarning }) => {
  const { t } = useTranslation();
  const content = deploymentWarningContent(warning.id);
  const critical = warning.severity === "critical";
  const SeverityIcon = critical ? CircleAlert : TriangleAlert;
  return (
    <Alert
      variant={critical ? "error" : "warning"}
      role="article"
      aria-label={content.title}
      data-ignored={warning.ignore ? "" : undefined}
      className="gap-x-2 border-warning/25 *:[svg]:text-warning data-[variant=error]:*:[svg]:text-destructive bg-warning/6 p-3 text-[13px] leading-5 text-foreground *:data-[slot=alert-description]:text-muted-foreground data-[variant=error]:border-destructive/35 data-[variant=error]:bg-destructive/10 data-ignored:border-warning/20 data-ignored:bg-warning/4 data-ignored:data-[variant=error]:border-destructive/20 data-ignored:data-[variant=error]:bg-destructive/4"
    >
      <SeverityIcon aria-hidden />
      <AlertTitle>{content.title}</AlertTitle>
      <AlertDescription className="flex flex-col [&_a]:no-underline [&_a]:hover:underline [&_p:not(:last-child)]:mb-0 text-[13px] leading-5 text-pretty [&_code]:font-mono [&_code]:text-[12px] [&_code]:wrap-anywhere [&_code]:text-foreground">
        {content.fix ? <p className="mt-0.5">{content.fix}</p> : null}
        {warning.ignore ? <IgnoreStatus ignore={warning.ignore} /> : null}
        <div className="mt-2 flex items-center gap-2">
          {content.docsUrl ? (
            <a
              href={content.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "link" }),
                "h-auto gap-1 p-0 text-[13px] leading-5 font-medium text-foreground no-underline hover:underline",
              )}
            >
              {t("deploymentHealth.panel.readDocs")}
              <ExternalLink className="size-3.5 text-muted-foreground" aria-hidden />
            </a>
          ) : null}
          <span className="flex-1" />
          <ItemAction warning={warning} title={content.title} {...permissions} />
        </div>
      </AlertDescription>
    </Alert>
  );
};

const GroupTrigger = ({ label, count }: { label: string; count: number }) => (
  <CollapsibleTrigger className="flex h-8 w-fit items-center gap-1.5 rounded-sm font-semibold outline-none focus-visible:ring-3 focus-visible:ring-ring/50 data-[panel-open]:[&>svg]:rotate-90">
    <ChevronRight className="size-3.5 text-muted-foreground transition-transform" aria-hidden />
    {label} <span className="font-normal text-muted-foreground">{count}</span>
  </CollapsibleTrigger>
);

const WarningGroup = ({
  label,
  warnings,
  defaultOpen,
  permissions,
}: {
  label: string;
  warnings: readonly DeploymentWarning[];
  defaultOpen: boolean;
  permissions: ItemPermissions;
}) => (
  <Collapsible defaultOpen={defaultOpen} render={<section aria-label={label} />} className="flex flex-col gap-2">
    <GroupTrigger label={label} count={warnings.length} />
    <CollapsibleContent className="flex flex-col gap-2">
      {warnings.map((warning) => (
        <WarningItem key={warning.id} warning={warning} {...permissions} />
      ))}
    </CollapsibleContent>
  </Collapsible>
);

const PanelSkeleton = () => (
  <div className="flex flex-col gap-2" aria-hidden>
    {[0, 1].map((row) => (
      <div key={row} className="flex gap-2 rounded-lg border border-border p-3">
        <Skeleton className="size-4 rounded-full" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-3 w-2/3" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-5/6" />
        </div>
      </div>
    ))}
  </div>
);

const NoActiveWarnings = ({ hasIgnored }: { hasIgnored: boolean }) => {
  const { t } = useTranslation();
  return (
    <Empty className="gap-2 p-0 py-6">
      <EmptyHeader>
        <EmptyMedia
          variant="icon"
          className="border border-border bg-transparent text-muted-foreground [&_svg:not([class*='size-'])]:size-4"
        >
          <ShieldCheck aria-hidden />
        </EmptyMedia>
        <EmptyTitle className="text-[15px] leading-[22px] font-semibold tracking-normal">
          {t("deploymentHealth.panel.noActive")}
        </EmptyTitle>
        <EmptyDescription className="text-[13px] leading-5">
          {hasIgnored ? t("deploymentHealth.panel.ignoredListed") : t("deploymentHealth.panel.emptyHint")}
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
};

const PanelBody = () => {
  const { t } = useTranslation();
  const { canManage } = useDeploymentHealthAccess();
  const { data, isError } = useDeploymentWarnings({ refetchOnOpen: true });
  if (!data) {
    return (
      <div className="flex flex-col gap-2 px-4 pb-4 text-[13px] leading-5">
        {isError ? (
          <p className="text-destructive">{t("deploymentHealth.panel.loadFailed")}</p>
        ) : (
          <>
            <span className="sr-only">{t("deploymentHealth.panel.loading")}</span>
            <PanelSkeleton />
          </>
        )}
      </div>
    );
  }

  const permissions = { canManage, ignoreAvailable: data.ignore_available };
  const active = activeWarnings(data.warnings);
  const ignored = data.warnings.filter((warning) => warning.ignore);

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-4 pb-4 text-[13px] leading-5">
      {active.length === 0 ? <NoActiveWarnings hasIgnored={ignored.length > 0} /> : null}
      {SEVERITY_GROUPS.map(({ severity, labelKey }) => {
        const group = active.filter((warning) => warning.severity === severity);
        return group.length === 0 ? null : (
          <WarningGroup key={severity} label={t(labelKey)} warnings={group} defaultOpen permissions={permissions} />
        );
      })}
      {ignored.length > 0 ? (
        <WarningGroup
          label={t("deploymentHealth.panel.ignoredAndSnoozed")}
          warnings={ignored}
          defaultOpen={false}
          permissions={permissions}
        />
      ) : null}
    </div>
  );
};

export const DeploymentHealthPanel = ({ handle }: { handle: DeploymentHealthHandle }) => {
  const { t } = useTranslation();
  return (
    <Sheet handle={handle}>
      <SheetContent side="right" className="gap-0 data-[side=right]:sm:max-w-md">
        <SheetHeader className="gap-0.5 pr-12">
          <SheetTitle className="text-[15px] leading-[22px] font-semibold">
            {t("deploymentHealth.panel.title")}
          </SheetTitle>
          <SheetDescription className="text-[13px] leading-5">
            {t("deploymentHealth.panel.description")}
          </SheetDescription>
        </SheetHeader>
        <PanelBody />
      </SheetContent>
    </Sheet>
  );
};
