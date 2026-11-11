import { useTerminology } from "@/contexts/TerminologyContext";
import { BarChart3, Bot, Building2, Globe, LineChart, ShoppingCart, Tags, User, Users } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { hasCapability, type Capability } from "@/utils/capabilities";
import { all_admin_roles } from "@/utils/roles";
import { useTranslation } from "react-i18next";
export type UsageOption =
  | "global"
  | "my-usage"
  | "organization"
  | "team"
  | "customer"
  | "tag"
  | "agent"
  | "user"
  | "user-agent-activity";
export interface UsageViewSelectProps {
  value: UsageOption;
  onChange: (value: UsageOption) => void;
  userRole: string | null;
  canViewTagUsage?: boolean;
  isOrgAdmin?: boolean;
  title?: string;
  description?: string;
  "data-id"?: string;
}
interface OptionConfig {
  value: UsageOption;
  label: string;
  description: string;
  icon: React.ReactNode;
  capability?: Capability;
  adminOnly?: boolean;
  showForAdmin?: string;
  showForNonAdmin?: string;
  descriptionForAdmin?: string;
  descriptionForNonAdmin?: string;
  badgeText?: string;
}
const OPTIONS: OptionConfig[] = [
  {
    value: "global",
    label: "Global Usage",
    showForAdmin: "Global Usage",
    showForNonAdmin: "Your Usage",
    description: "View usage across all resources",
    descriptionForAdmin: "View usage across all resources",
    descriptionForNonAdmin: "View your usage",
    icon: <Globe className="size-4" />,
  },
  {
    value: "my-usage",
    label: "Your Usage",
    description: "View your own usage",
    icon: <User className="size-4" />,
    adminOnly: true,
  },
  {
    value: "organization",
    label: "Organization Usage",
    description: "View usage across all organizations",
    icon: <Building2 className="size-4" />,
    capability: "viewOrganizationUsage",
  },
  {
    value: "team",
    label: "Team Usage",
    description: "View usage by team",
    icon: <Users className="size-4" />,
  },
  {
    value: "customer",
    label: "Customer Usage",
    description: "View usage by customer accounts",
    icon: <ShoppingCart className="size-4" />,
    adminOnly: true,
  },
  {
    value: "tag",
    label: "Tag Usage",
    description: "View usage grouped by tags",
    icon: <Tags className="size-4" />,
    adminOnly: true,
  },
  {
    value: "agent",
    label: "Agent Usage (A2A)",
    description: "View usage by AI agents",
    icon: <Bot className="size-4" />,
    capability: "viewAgentUsage",
  },
  {
    value: "user",
    label: "User Usage",
    description: "View usage by individual users",
    icon: <User className="size-4" />,
    adminOnly: true,
  },
  {
    value: "user-agent-activity",
    label: "User Agent Activity",
    description: "View detailed user agent activity logs",
    icon: <LineChart className="size-4" />,
    adminOnly: true,
  },
];
const visibleOptions = (userRole: string | null, canViewTagUsage: boolean, isOrgAdmin: boolean): OptionConfig[] => {
  const isAdmin = all_admin_roles.includes(userRole ?? "");
  return OPTIONS.filter((option) => {
    if (option.capability) {
      return hasCapability(userRole, option.capability, isOrgAdmin);
    }
    if (option.value === "tag" && canViewTagUsage) {
      return true;
    }
    return !(option.adminOnly && !isAdmin);
  });
};

const VIEW_TRANSLATION_KEYS = {
  global: {
    label: "usagePage.views.global",
    yourLabel: "usagePage.views.your",
    description: "usagePage.views.descriptionGlobal",
    yourDescription: "usagePage.views.descriptionYour",
  },
  "my-usage": {
    label: "usagePage.views.your",
    description: "usagePage.views.descriptionYour",
  },
  organization: {
    label: "usagePage.views.organization",
    description: "usagePage.views.descriptionOrganization",
  },
  team: {
    label: "usagePage.views.team",
    description: "usagePage.views.descriptionTeam",
  },
  customer: {
    label: "usagePage.views.customer",
    description: "usagePage.views.descriptionCustomer",
  },
  tag: {
    label: "usagePage.views.tag",
    description: "usagePage.views.descriptionTag",
  },
  agent: {
    label: "usagePage.views.agent",
    description: "usagePage.views.descriptionAgent",
  },
  user: {
    label: "usagePage.views.user",
    description: "usagePage.views.descriptionUser",
  },
  "user-agent-activity": {
    label: "usagePage.views.userAgentActivity",
    description: "usagePage.views.descriptionUserAgent",
  },
} as const;

export const USAGE_OPTIONS: readonly UsageOption[] = OPTIONS.map((option) => option.value);

export const allowedUsageOptions = (
  userRole: string | null,
  canViewTagUsage: boolean,
  isOrgAdmin: boolean,
): readonly UsageOption[] => visibleOptions(userRole, canViewTagUsage, isOrgAdmin).map((option) => option.value);

export const UsageViewSelect: React.FC<UsageViewSelectProps> = ({
  value,
  onChange,
  userRole,
  canViewTagUsage = false,
  isOrgAdmin = false,
  title,
  description,
  "data-id": dataId,
}) => {
  const { t } = useTranslation();
  const term = useTerminology();
  const isAdmin = all_admin_roles.includes(userRole ?? "");
  const resolvedTitle = title ?? t("usagePage.views.title");
  const resolvedDescription = description ?? t("usagePage.views.description");
  const getFilteredOptions = () => {
    return visibleOptions(userRole, canViewTagUsage, isOrgAdmin).map((option) => {
      const translation = VIEW_TRANSLATION_KEYS[option.value];
      let label = t(translation.label);
      let desc = t(translation.description);
      if (option.showForAdmin && option.showForNonAdmin) {
        label = isAdmin ? t(VIEW_TRANSLATION_KEYS.global.label) : t(VIEW_TRANSLATION_KEYS.global.yourLabel);
      }
      if (option.descriptionForAdmin && option.descriptionForNonAdmin) {
        desc = isAdmin ? t(VIEW_TRANSLATION_KEYS.global.description) : t(VIEW_TRANSLATION_KEYS.global.yourDescription);
      }
      return {
        value: option.value,
        label,
        description: term(desc),
        icon: option.icon,
        badgeText: option.badgeText,
      };
    });
  };
  const filteredOptions = getFilteredOptions();
  const selectedOption = filteredOptions.find((option) => option.value === value);
  return (
    <div className="flex items-center gap-3" data-id={dataId}>
      <h1 className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
        <BarChart3 aria-hidden="true" className="size-4" strokeWidth={2} />
        {resolvedTitle}
      </h1>
      <Select
        value={value}
        onValueChange={(next: UsageOption | null) => {
          if (next) onChange(next);
        }}
      >
        <SelectTrigger aria-label={resolvedDescription} className="h-8 w-52">
          <SelectValue>
            {selectedOption && (
              <span className="flex items-center gap-2">
                {selectedOption.icon}
                <span className="text-sm">{selectedOption.label}</span>
              </span>
            )}
          </SelectValue>
        </SelectTrigger>
        {/* Sized to its content rather than the narrow trigger, so descriptions never clip. */}
        <SelectContent align="start" className="w-auto min-w-72 p-1">
          {filteredOptions.map((option) => (
            <SelectItem key={option.value} value={option.value} className="rounded-md py-2 pr-8 pl-2">
              <span className="flex items-start gap-2.5">
                <span className="mt-0.5 shrink-0 text-muted-foreground">{option.icon}</span>
                <span className="min-w-0">
                  <span className="block text-sm leading-5 text-foreground">{option.label}</span>
                  <span className="block text-xs leading-4 text-muted-foreground">{option.description}</span>
                </span>
                {option.badgeText && <Badge>{option.badgeText}</Badge>}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
