import type { ParseKeys } from "i18next";
import type { ReactNode } from "react";
import { Trans } from "react-i18next";
import i18n from "@/i18n/i18n";
import { formatExpiryDate, getDaysUntilExpiration } from "@/utils/licenseUtils";

const LICENSE_EXPIRY_PREFIX = "license_expiry:";
const SALES_EMAIL = "sales@berri.ai";

export interface DeploymentWarningContent {
  title: string;
  fix?: ReactNode;
  docsUrl?: string;
}

interface StaticWarning {
  titleKey: ParseKeys;
  docsUrl: string;
}

const STATIC_CONTENT: Readonly<Record<string, StaticWarning>> = {
  env_credential_login: {
    titleKey: "deploymentHealth.warnings.envCredentialLogin.title",
    docsUrl: "https://docs.litellm.ai/docs/proxy/ui",
  },
  no_redis: {
    titleKey: "deploymentHealth.warnings.noRedis.title",
    docsUrl: "https://docs.litellm.ai/docs/proxy/redis_requirements",
  },
  detailed_debug: {
    titleKey: "deploymentHealth.warnings.detailedDebug.title",
    docsUrl: "https://docs.litellm.ai/docs/proxy/prod",
  },
};

const codeComponents = {
  code: <code />,
};

const renderStaticFix = (warningId: string): ReactNode => {
  switch (warningId) {
    case "env_credential_login":
      return <Trans i18nKey="deploymentHealth.warnings.envCredentialLogin.fix" components={codeComponents} />;
    case "no_redis":
      return <Trans i18nKey="deploymentHealth.warnings.noRedis.fix" components={codeComponents} />;
    case "detailed_debug":
      return <Trans i18nKey="deploymentHealth.warnings.detailedDebug.fix" components={codeComponents} />;
    default:
      return undefined;
  }
};

const licenseExpiryContent = (expirationDate: string, now: Date): DeploymentWarningContent => {
  const days = getDaysUntilExpiration(expirationDate, now) ?? 0;
  const formattedDate = formatExpiryDate(expirationDate);
  const salesLink = <a href={`mailto:${SALES_EMAIL}`}>{SALES_EMAIL}</a>;

  if (days < 0) {
    return {
      title: i18n.t("deploymentHealth.warnings.license.expiredTitle", { date: formattedDate }),
      fix: <Trans i18nKey="deploymentHealth.warnings.license.expiredFix" components={{ sales: salesLink }} />,
      docsUrl: "https://docs.litellm.ai/docs/enterprise",
    };
  }

  const countdown =
    days === 0
      ? i18n.t("deploymentHealth.warnings.license.expiresToday")
      : i18n.t("deploymentHealth.warnings.license.expiresIn", { count: days });

  return {
    title: i18n.t("deploymentHealth.warnings.license.expiringTitle", {
      countdown,
      date: formattedDate,
    }),
    fix: <Trans i18nKey="deploymentHealth.warnings.license.renewFix" components={{ sales: salesLink }} />,
    docsUrl: "https://docs.litellm.ai/docs/enterprise",
  };
};

export const deploymentWarningContent = (warningId: string, now: Date = new Date()): DeploymentWarningContent => {
  if (warningId.startsWith(LICENSE_EXPIRY_PREFIX)) {
    return licenseExpiryContent(warningId.slice(LICENSE_EXPIRY_PREFIX.length), now);
  }

  const staticContent = STATIC_CONTENT[warningId];
  if (!staticContent) {
    return { title: warningId };
  }

  return {
    title: i18n.t(staticContent.titleKey),
    fix: renderStaticFix(warningId),
    docsUrl: staticContent.docsUrl,
  };
};
