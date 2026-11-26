"use client";

import { Plus } from "lucide-react";
import useAuthorized from "@/app/(dashboard)/hooks/useAuthorized";
import { Button } from "@/components/ui/button";
import { Page } from "@/components/shared/Page";
import { PageHeader, PageHeaderControls, PageHeaderTitle } from "@/components/shared/PageHeader";
import { uiHref } from "@/utils/uiHref";
import { LiteAdminHome } from "@/components/liteadmin/LiteAdmin";
import { Leaderboard, useBreakdown } from "@/app/(dashboard)/usage/_components/components/overview/BreakdownChart";
import { Panel } from "@/app/(dashboard)/usage/_components/components/overview/Primitives";
import UsageStatStrip from "@/app/(dashboard)/usage/_components/components/overview/UsageStatStrip";
import { HOME_USAGE_DAYS, useHomeUsage } from "./useHomeUsage";
import { useTranslation } from "react-i18next";

const LEADERBOARD = { metric: "tokens", dimension: "model_groups" } as const;

export default function HomePage() {
  const { t } = useTranslation();
  const { isViewOnly } = useAuthorized();
  const usage = useHomeUsage();
  const { series, ranking } = useBreakdown(usage.results, LEADERBOARD, 8);

  return (
    <Page>
      <PageHeader>
        <PageHeaderTitle>{t("home.title")}</PageHeaderTitle>
        {!isViewOnly && (
          <PageHeaderControls>
            <Button render={<a href={uiHref("api-keys?create=true")} />}>
              <Plus />
              {t("home.createVirtualKey")}
            </Button>
          </PageHeaderControls>
        )}
      </PageHeader>

      <LiteAdminHome />

      <section aria-label={t("home.usageSectionLabel", { days: HOME_USAGE_DAYS })}>
        {usage.failed ? (
          <div className="flex items-center justify-between gap-2 rounded-xl border bg-card px-4 py-3 text-sm">
            <span className="text-destructive">{t("home.usageLoadFailed")}</span>
            <Button variant="outline" size="sm" onClick={usage.retry}>
              {t("home.retry")}
            </Button>
          </div>
        ) : (
          <UsageStatStrip
            results={usage.results}
            totals={usage.totals}
            loading={usage.loading}
            requestCountsPending={usage.requestCountsPending}
            budget={usage.budget}
          />
        )}
      </section>

      <Panel
        title={t("home.leaderboard")}
        subtitle={t("home.leaderboardSubtitle", { days: HOME_USAGE_DAYS })}
        testId="home-leaderboard"
      >
        <Leaderboard
          ranking={ranking}
          series={series}
          metric={LEADERBOARD.metric}
          dimension={LEADERBOARD.dimension}
          columns={2}
          limit={10}
        />
      </Panel>
    </Page>
  );
}
