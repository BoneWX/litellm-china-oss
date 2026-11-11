"use client";

import type { ReactNode } from "react";
import type { TFunction } from "i18next";
import { Info } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";

import { DataTableMultiSortHeader, DataTableSortHeader, type DataTableSortField } from "@/components/shared/DataTable";
import {
  inheritedBudgetGates,
  keyOwnerBudgetSource,
  teamMemberBudgetGate,
  type TeamMemberBudgetSource,
} from "@/components/shared/InheritedBudgetHint";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  DateCell,
  ENTITY_CELL_TITLE_CLASSES,
  IdCell,
  IdentityCell,
  ModelsCell,
  MoneyCell,
  SpendBudgetCell,
  StatusBadge,
  UserPopoverCell,
  type StatusTone,
} from "@/components/shared/table_cells";
import { orgDetailHref, teamDetailHref } from "@/utils/entityLinks";

import { KeyResponse, Team } from "../key_team_helpers/key_list";
import { Organization } from "../networking";
import { KEY_RATE_LIMIT_SORT_FIELDS } from "../key_team_helpers/key_sorting";
import i18n from "@/i18n/i18n";

interface KeyStatus {
  tone: StatusTone;
  label: string;
  tooltip?: string;
}

const SPEND_BUDGET_SORT_FIELDS: DataTableSortField[] = [
  { id: "spend", label: "Spend" },
  { id: "max_budget", label: "Budget" },
];

export const KEY_TABLE_SORT_FIELDS: readonly string[] = [
  "key_alias",
  "token",
  "created_at",
  "updated_at",
  ...SPEND_BUDGET_SORT_FIELDS.map((field) => field.id),
  "expires",
  "last_active",
  "budget_reset_at",
  "total_spend",
  ...KEY_RATE_LIMIT_SORT_FIELDS.map((field) => field.id),
];

const getKeyStatus = (key: KeyResponse, t: TFunction): KeyStatus => {
  if (key.deleted_at) {
    return {
      tone: "neutral",
      label: t("apiKeys.status.deleted"),
      tooltip: t("apiKeys.status.deletedTooltip", {
        date: new Date(key.deleted_at).toLocaleString(),
        by: key.deleted_by ? t("apiKeys.status.deletedBy", { user: key.deleted_by }) : "",
      }),
    };
  }
  if (key.blocked === true) {
    const isScimBlocked = (key.metadata as Record<string, unknown> | null | undefined)?.scim_blocked === true;
    return {
      tone: "error",
      label: t("apiKeys.status.blocked"),
      tooltip: isScimBlocked ? t("apiKeys.status.scimBlockedTooltip") : t("apiKeys.status.blockedTooltip"),
    };
  }
  const expiresAt = key.expires ? Date.parse(key.expires) : Number.NaN;
  if (!Number.isNaN(expiresAt) && expiresAt < Date.now()) {
    return { tone: "warning", label: t("apiKeys.status.expired"), tooltip: t("apiKeys.status.expiredTooltip") };
  }
  return {
    tone: "success",
    label: t("apiKeys.status.active"),
    tooltip: t("apiKeys.status.activeTooltip"),
  };
};

const InfoHeader = ({ label, tooltip }: { label: ReactNode; tooltip: string }) => (
  <span className="flex items-center gap-1">
    {label}
    <HoverCard>
      <HoverCardTrigger render={<Info className="size-3 text-muted-foreground cursor-help" />} />
      <HoverCardContent className="w-auto">{tooltip}</HoverCardContent>
    </HoverCard>
  </span>
);

interface KeyTableColumnsDeps {
  allTeams: Team[];
  organizations: Organization[];
  teamMemberBudgets: Readonly<Record<string, TeamMemberBudgetSource>>;
  onSelectKey: (key: KeyResponse) => void;
  applyUserBudgetToTeamKeys: boolean;
  t?: TFunction;
}

export const getKeyTableColumns = ({
  allTeams,
  organizations,
  teamMemberBudgets,
  onSelectKey,
  applyUserBudgetToTeamKeys,
  t = i18n.t.bind(i18n) as TFunction,
}: KeyTableColumnsDeps): ColumnDef<KeyResponse>[] => [
  {
    id: "key_alias",
    accessorKey: "key_alias",
    meta: {
      title: t("apiKeys.table.key"),
      renderSkeleton: () => (
        <div className="flex flex-col gap-1 py-1">
          <Skeleton className="h-4 w-32" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-5 w-16 rounded-full" />
          </div>
        </div>
      ),
    },
    header: ({ column }) => (
      <DataTableSortHeader column={column} title={t("apiKeys.table.key")} variant="header-cycle" />
    ),
    size: 260,
    enableSorting: true,
    cell: ({ row }) => {
      const status = getKeyStatus(row.original, t);
      return (
        <IdentityCell
          title={row.original.key_alias || "-"}
          subtitle={row.original.key_name}
          badge={
            <StatusBadge
              tone={status.tone}
              label={status.label}
              tooltip={status.tooltip}
              dataTestId={`key-status-${row.original.token_id}`}
            />
          }
          onClick={() => onSelectKey(row.original)}
        />
      );
    },
  },
  {
    id: "token",
    accessorKey: "token",
    meta: { title: t("apiKeys.table.keyId") },
    header: ({ column }) => (
      <DataTableSortHeader column={column} title={t("apiKeys.table.keyId")} variant="header-cycle" />
    ),
    size: 120,
    enableSorting: true,
    cell: (info) => <IdCell value={info.getValue() as string | null} onClick={() => onSelectKey(info.row.original)} />,
  },
  {
    id: "team_alias",
    accessorKey: "team_id",
    meta: { title: t("apiKeys.table.team") },
    header: t("apiKeys.table.team"),
    size: 120,
    enableSorting: false,
    cell: (info) => {
      const teamId = info.getValue() as string | null;
      if (!teamId) return "-";
      const team = allTeams.find((t) => t.team_id === teamId);
      return (
        <IdentityCell
          title={team?.team_alias || teamId}
          titleClassName={ENTITY_CELL_TITLE_CLASSES}
          href={teamDetailHref(teamId)}
        />
      );
    },
  },
  {
    id: "organization_alias",
    accessorKey: "org_id",
    meta: { title: t("apiKeys.table.organization") },
    header: t("apiKeys.table.organization"),
    size: 140,
    enableSorting: false,
    cell: (info) => {
      const orgId = info.getValue() as string | null;
      if (!orgId) return "-";
      const org = organizations.find((o) => o.organization_id === orgId);
      return (
        <IdentityCell
          title={org?.organization_alias || orgId}
          titleClassName={ENTITY_CELL_TITLE_CLASSES}
          href={orgDetailHref(orgId)}
        />
      );
    },
  },
  {
    id: "user",
    accessorKey: "user",
    meta: { title: t("apiKeys.table.user") },
    header: () => <InfoHeader label={t("apiKeys.table.user")} tooltip={t("apiKeys.table.userHint")} />,
    size: 160,
    enableSorting: false,
    cell: ({ row }) => {
      const key = row.original;
      return (
        <UserPopoverCell
          userAlias={key.user?.user_alias ?? null}
          userEmail={key.user?.user_email ?? key.user_email ?? null}
          userId={key.user_id ?? null}
          width={160}
        />
      );
    },
  },
  {
    id: "created_at",
    accessorKey: "created_at",
    meta: { title: t("apiKeys.table.createdAt") },
    header: ({ column }) => (
      <DataTableSortHeader column={column} title={t("apiKeys.table.createdAt")} variant="header-cycle" />
    ),
    size: 120,
    enableSorting: true,
    cell: (info) => <DateCell value={info.getValue() as string | null} precision="date" />,
  },
  {
    id: "created_by",
    accessorKey: "created_by",
    meta: { title: t("apiKeys.table.createdBy") },
    header: t("apiKeys.table.createdBy"),
    size: 160,
    enableSorting: false,
    cell: (info) => {
      const userId = info.getValue() as string | null;
      if (!userId) return "-";
      const createdByUser = info.row.original.created_by_user;
      return (
        <UserPopoverCell
          userAlias={createdByUser?.user_alias ?? null}
          userEmail={createdByUser?.user_email ?? null}
          userId={userId}
          width={160}
        />
      );
    },
  },
  {
    id: "updated_at",
    accessorKey: "updated_at",
    meta: { title: t("apiKeys.table.updatedAt") },
    header: ({ column }) => (
      <DataTableSortHeader column={column} title={t("apiKeys.table.updatedAt")} variant="header-cycle" />
    ),
    size: 120,
    enableSorting: true,
    cell: (info) => <DateCell value={info.getValue() as string | null} precision="date" fallback="Never" />,
  },
  {
    id: "last_active",
    accessorKey: "last_active",
    meta: { title: t("apiKeys.table.lastActive") },
    header: ({ column }) => (
      <InfoHeader
        label={<DataTableSortHeader column={column} title={t("apiKeys.table.lastActive")} />}
        tooltip={t("apiKeys.table.lastActiveHint")}
      />
    ),
    size: 130,
    enableSorting: true,
    sortDescFirst: false,
    cell: (info) => (
      <DateCell value={info.getValue() as string | null} precision="date" fallback={t("common.status.unknown")} />
    ),
  },
  {
    id: "expires",
    accessorKey: "expires",
    meta: { title: t("apiKeys.table.expires") },
    header: ({ column }) => <DataTableSortHeader column={column} title={t("apiKeys.table.expires")} />,
    size: 120,
    enableSorting: true,
    sortDescFirst: false,
    cell: (info) => (
      <DateCell value={info.getValue() as string | null} precision="date" fallback={t("apiKeys.table.never")} />
    ),
  },
  {
    id: "spend",
    accessorKey: "spend",
    meta: { title: t("apiKeys.table.spend"), skeleton: "meter", numeric: true },
    header: ({ table }) => <DataTableMultiSortHeader table={table} fields={SPEND_BUDGET_SORT_FIELDS} />,
    size: 240,
    enableSorting: true,
    cell: ({ row }) => {
      const team = allTeams.find((t) => t.team_id === row.original.team_id);
      const orgId = row.original.organization_id || row.original.org_id || team?.organization_id;
      const organization = organizations.find((o) => o.organization_id === orgId);
      const memberGate =
        row.original.max_budget == null
          ? teamMemberBudgetGate(
              teamMemberBudgets[row.original.team_id ?? ""],
              row.original.user_id,
              row.original.user?.user_email,
            )
          : null;
      return (
        <SpendBudgetCell
          spend={row.original.spend}
          maxBudget={row.original.max_budget}
          teamMemberGate={memberGate}
          inheritedGates={
            row.original.max_budget == null
              ? inheritedBudgetGates(
                  team,
                  organization,
                  keyOwnerBudgetSource(row.original, applyUserBudgetToTeamKeys),
                  memberGate,
                )
              : []
          }
        />
      );
    },
  },
  {
    id: "total_spend",
    accessorKey: "total_spend",
    meta: { title: t("apiKeys.table.lifetimeSpend") },
    header: ({ column }) => (
      <InfoHeader
        label={<DataTableSortHeader column={column} title={t("apiKeys.table.lifetimeSpend")} />}
        tooltip={t("apiKeys.table.lifetimeSpendHint")}
      />
    ),
    size: 130,
    enableSorting: true,
    sortDescFirst: true,
    cell: (info) => <MoneyCell value={info.getValue() as number | null | undefined} showZero />,
  },
  {
    id: "budget_reset_at",
    accessorKey: "budget_reset_at",
    meta: { title: t("apiKeys.table.budgetReset") },
    header: ({ column }) => <DataTableSortHeader column={column} title={t("apiKeys.table.budgetReset")} />,
    size: 130,
    enableSorting: true,
    sortDescFirst: false,
    cell: (info) => <DateCell value={info.getValue() as string | null} fallback={t("apiKeys.table.never")} />,
  },
  {
    id: "models",
    accessorKey: "models",
    meta: { title: t("apiKeys.table.models"), skeleton: "chips" },
    header: t("apiKeys.table.models"),
    size: 220,
    enableSorting: false,
    cell: (info) => (
      <ModelsCell
        models={info.getValue() as string[] | null | undefined}
        allowedRoutes={info.row.original.allowed_routes}
        keyType={info.row.original.key_type}
      />
    ),
  },
  {
    id: "rate_limits",
    meta: { title: t("apiKeys.table.rateLimits") },
    header: ({ table }) => <DataTableMultiSortHeader table={table} fields={KEY_RATE_LIMIT_SORT_FIELDS} />,
    size: 140,
    enableSorting: false,
    cell: ({ row }) => {
      const key = row.original;
      return (
        <div className="text-xs">
          <div>TPM: {key.tpm_limit !== null ? key.tpm_limit : t("apiKeys.table.unlimited")}</div>
          <div>RPM: {key.rpm_limit !== null ? key.rpm_limit : t("apiKeys.table.unlimited")}</div>
        </div>
      );
    },
  },
];

export const KEY_TABLE_HIDDEN_COLUMNS: Record<string, boolean> = {
  token: false,
  organization_alias: false,
  created_by: false,
  updated_at: false,
  expires: false,
  rate_limits: false,
};
