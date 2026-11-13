"use client";

import WorkflowRuns from "./WorkflowRuns";
import { DeprecationBanner } from "@/components/DeprecationBanner";
import { AdminOnlyNotice } from "@/components/shared/AdminOnlyNotice";
import useAuthorized from "@/app/(dashboard)/hooks/useAuthorized";
import useCan from "@/app/(dashboard)/hooks/useCan";
import { useTranslation } from "react-i18next";

export default function Workflows() {
  const { t } = useTranslation();
  const { accessToken } = useAuthorized();
  const canViewWorkflowRuns = useCan("viewWorkflowRuns");

  if (!canViewWorkflowRuns) {
    return <AdminOnlyNotice pageTitle={t("workflows.header.title")} />;
  }

  return (
    <>
      <DeprecationBanner featureName={t("navigation.items.workflows")} />
      <WorkflowRuns accessToken={accessToken} />
    </>
  );
}
