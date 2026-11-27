"use client";

import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Loader2, Trash2, Link } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "@/lib/toast";
import { deleteMCPOAuthUserCredential, listMCPUserCredentials, MCPUserCredentialListItem } from "../networking";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";

const MCP_CREDENTIALS_QUERY_KEY = "mcp-user-credentials";

interface Props {
  accessToken: string;
}

function relativeTime(isoString: string | null | undefined, t: TFunction): string {
  if (!isoString) return "";
  try {
    const date = new Date(isoString);
    const diffMs = Date.now() - date.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    if (diffSec < 60) return t("chat.credentials.justNow");
    const diffMin = Math.floor(diffSec / 60);
    if (diffMin < 60) return t("chat.credentials.minutesAgo", { count: diffMin });
    const diffHr = Math.floor(diffMin / 60);
    if (diffHr < 24) return t("chat.credentials.hoursAgo", { count: diffHr });
    return t("chat.credentials.daysAgo", { count: Math.floor(diffHr / 24) });
  } catch {
    return "";
  }
}

function expiryLabel(
  isoString: string | null | undefined,
  t: TFunction,
): {
  text: string;
  variant: "secondary" | "destructive" | "outline";
} {
  if (!isoString) return { text: t("chat.credentials.doesNotExpire"), variant: "secondary" };
  try {
    const exp = new Date(isoString);
    const diffMs = exp.getTime() - Date.now();
    if (diffMs <= 0) return { text: t("chat.credentials.expired"), variant: "destructive" };
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHr = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHr / 24);
    if (diffDay > 0) return { text: t("chat.credentials.expiresInDays", { count: diffDay }), variant: "outline" };
    if (diffHr > 0) return { text: t("chat.credentials.expiresInHours", { count: diffHr }), variant: "outline" };
    return { text: t("chat.credentials.expiresInMinutes", { count: diffMin }), variant: "outline" };
  } catch {
    return { text: "", variant: "outline" };
  }
}

const MCPCredentialsTab: React.FC<Props> = ({ accessToken }) => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const [revoking, setRevoking] = useState<Set<string>>(new Set());

  const { data: credentials = [], isLoading: loading } = useQuery({
    queryKey: [MCP_CREDENTIALS_QUERY_KEY, accessToken],
    queryFn: () => listMCPUserCredentials(accessToken),
    enabled: !!accessToken,
  });

  const handleRevoke = async (serverId: string) => {
    setRevoking((prev) => new Set(prev).add(serverId));
    try {
      await deleteMCPOAuthUserCredential(accessToken, serverId);
      queryClient.setQueryData<MCPUserCredentialListItem[]>([MCP_CREDENTIALS_QUERY_KEY, accessToken], (prev) =>
        (prev ?? []).filter((c) => c.server_id !== serverId),
      );
    } catch {
      toast.error(t("chat.credentials.revokeFailed"));
    } finally {
      setRevoking((prev) => {
        const n = new Set(prev);
        n.delete(serverId);
        return n;
      });
    }
  };

  const displayName = (c: MCPUserCredentialListItem) => c.alias || c.server_name || c.server_id;

  return (
    <div className="w-full">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-foreground mb-0.5">{t("chat.credentials.title")}</h2>
        <p className="text-sm text-muted-foreground m-0">{t("chat.credentials.description")}</p>
      </div>

      {loading ? (
        <div className="rounded-lg border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                  {t("chat.credentials.app")}
                </TableHead>
                <TableHead className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                  {t("chat.credentials.connected")}
                </TableHead>
                <TableHead className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                  {t("chat.credentials.status")}
                </TableHead>
                <TableHead className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground text-right">
                  {t("chat.credentials.actions")}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 3 }, (_, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Skeleton className="h-4 w-24" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-16" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-20" />
                  </TableCell>
                  <TableCell className="text-right">
                    <Skeleton className="h-4 w-8 ml-auto" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : credentials.length === 0 ? (
        <div className="text-center text-muted-foreground text-sm py-12 border border-dashed rounded-lg">
          <Link className="h-6 w-6 mb-3 mx-auto text-muted-foreground/50" />
          <p className="m-0">{t("chat.credentials.emptyTitle")}</p>
          <p className="m-0 mt-1 text-xs">{t("chat.credentials.emptyHint")}</p>
        </div>
      ) : (
        <div className="rounded-lg border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                  {t("chat.credentials.app")}
                </TableHead>
                <TableHead className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                  {t("chat.credentials.connected")}
                </TableHead>
                <TableHead className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                  {t("chat.credentials.status")}
                </TableHead>
                <TableHead className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground text-right">
                  {t("chat.credentials.actions")}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {credentials.map((cred) => {
                const isRevoking = revoking.has(cred.server_id);
                const exp = expiryLabel(cred.expires_at, t);
                return (
                  <TableRow key={cred.server_id}>
                    <TableCell className="text-sm font-medium">{displayName(cred)}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {relativeTime(cred.connected_at, t) || "\u2014"}
                    </TableCell>
                    <TableCell>
                      <Badge variant={exp.variant}>{exp.text}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <AlertDialog>
                        <AlertDialogTrigger
                          render={
                            <Button
                              variant="outline"
                              size="icon-sm"
                              disabled={isRevoking}
                              title={t("chat.credentials.revoke")}
                              className="text-muted-foreground hover:text-destructive hover:border-destructive/50"
                            >
                              {isRevoking ? (
                                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                              ) : (
                                <Trash2 className="h-3.5 w-3.5" />
                              )}
                            </Button>
                          }
                        />
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>{t("chat.credentials.revokeTitle")}</AlertDialogTitle>
                            <AlertDialogDescription>
                              {t("chat.credentials.revokeDescription", { name: displayName(cred) })}
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>{t("chat.credentials.cancel")}</AlertDialogCancel>
                            <AlertDialogAction variant="destructive" onClick={() => handleRevoke(cred.server_id)}>
                              {t("chat.credentials.revokeAction")}
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default MCPCredentialsTab;
