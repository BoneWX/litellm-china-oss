"use client";

import React, { useState } from "react";
import { Loader2, RefreshCw, KeyRound, Copy, Check } from "lucide-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CURRENCY_SYMBOL } from "@/utils/currency";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  NUMERIC_CELL_CLASS,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/cva.config";
import { toast } from "@/lib/toast";
import { keyListCall, regenerateKeyCall } from "../networking";
import { KeyResponse } from "../key_team_helpers/key_list";
import { formatExpiresUtc, isKeyExpired, calculateExpiryPreviewFromDuration } from "@/utils/keyExpiryUtils";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";

const KEYS_QUERY_KEY = "chat-user-keys";

const DURATION_RE = /^(\d+(s|m|h|d|w|mo))?$/;

interface Props {
  accessToken: string;
  userId: string;
  premiumUser: boolean;
}

function maskKey(keyName: string | undefined): string {
  if (!keyName) return "sk-...";
  if (keyName.length <= 10) return keyName;
  return keyName.slice(0, 7) + "..." + keyName.slice(-4);
}

function relativeTime(isoString: string | null | undefined, t: TFunction): string {
  if (!isoString) return "";
  try {
    const date = new Date(isoString);
    const diffMs = Date.now() - date.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    if (diffSec < 60) return t("chat.keys.justNow");
    const diffMin = Math.floor(diffSec / 60);
    if (diffMin < 60) return t("chat.keys.minutesAgo", { count: diffMin });
    const diffHr = Math.floor(diffMin / 60);
    if (diffHr < 24) return t("chat.keys.hoursAgo", { count: diffHr });
    return t("chat.keys.daysAgo", { count: Math.floor(diffHr / 24) });
  } catch {
    return "";
  }
}

interface FormState {
  key_alias: string;
  max_budget: string;
  tpm_limit: string;
  rpm_limit: string;
  duration: string;
  grace_period: string;
}

const KeysPanel: React.FC<Props> = ({ accessToken, userId, premiumUser }) => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const [rotateTarget, setRotateTarget] = useState<KeyResponse | null>(null);
  const [regeneratedKey, setRegeneratedKey] = useState<string | null>(null);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState<FormState>({
    key_alias: "",
    max_budget: "",
    tpm_limit: "",
    rpm_limit: "",
    duration: "",
    grace_period: "",
  });
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const { data, isLoading } = useQuery({
    queryKey: [KEYS_QUERY_KEY, accessToken, userId],
    queryFn: async () => {
      const resp = await keyListCall(accessToken, null, null, null, userId, null, 1, 100, null, null, null, null);
      return (resp?.keys ?? []) as KeyResponse[];
    },
    enabled: !!accessToken,
  });

  const keys = data ?? [];

  const openRotateModal = (key: KeyResponse) => {
    setRotateTarget(key);
    setRegeneratedKey(null);
    setCopied(false);
    setFormErrors({});
    setFormState({
      key_alias: key.key_alias ?? "",
      max_budget: key.max_budget != null ? String(key.max_budget) : "",
      tpm_limit: key.tpm_limit != null ? String(key.tpm_limit) : "",
      rpm_limit: key.rpm_limit != null ? String(key.rpm_limit) : "",
      duration: key.duration ?? "",
      grace_period: "",
    });
  };

  const validate = (): boolean => {
    const errors: Partial<Record<keyof FormState, string>> = {};
    const keyExpired = rotateTarget ? isKeyExpired(rotateTarget.expires) : false;

    if (formState.duration && !DURATION_RE.test(formState.duration)) {
      errors.duration = t("chat.keys.durationError");
    }
    if (keyExpired && !formState.duration) {
      errors.duration = t("chat.keys.expiredNeedsExpiry");
    }
    if (formState.grace_period && !DURATION_RE.test(formState.grace_period)) {
      errors.grace_period = t("chat.keys.graceError");
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleRegenerate = async () => {
    if (!rotateTarget || !validate()) return;
    setIsRegenerating(true);
    try {
      const payload: Record<string, unknown> = {};
      if (formState.key_alias) payload.key_alias = formState.key_alias;
      if (formState.max_budget) payload.max_budget = parseFloat(formState.max_budget);
      if (formState.tpm_limit) payload.tpm_limit = parseInt(formState.tpm_limit, 10);
      if (formState.rpm_limit) payload.rpm_limit = parseInt(formState.rpm_limit, 10);
      if (formState.duration) payload.duration = formState.duration;
      if (formState.grace_period) payload.grace_period = formState.grace_period;

      const response = await regenerateKeyCall(accessToken, rotateTarget.token || rotateTarget.token_id, payload);
      setRegeneratedKey(response.key);
      toast.success(t("chat.keys.rotated"));
      queryClient.invalidateQueries({ queryKey: [KEYS_QUERY_KEY] });
    } catch {
      toast.error(t("chat.keys.rotateFailed"));
    } finally {
      setIsRegenerating(false);
    }
  };

  const closeModal = () => {
    setRotateTarget(null);
    setRegeneratedKey(null);
    setCopied(false);
    setFormErrors({});
  };

  const keyIsExpired = rotateTarget ? isKeyExpired(rotateTarget.expires) : false;
  const newExpiryTime =
    formState.duration && DURATION_RE.test(formState.duration)
      ? calculateExpiryPreviewFromDuration(formState.duration)
      : null;

  const updateField = (field: keyof FormState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) setFormErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <div className="w-full">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-foreground mb-0.5">{t("chat.keys.title")}</h2>
        <p className="text-sm text-muted-foreground m-0">
          {t("chat.keys.description")}
          {premiumUser && t("chat.keys.rotateDescription")}
        </p>
      </div>

      {isLoading ? (
        <div className="rounded-lg border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="text-xs font-semibold uppercase tracking-wide">
                  {t("chat.keys.columns.key")}
                </TableHead>
                <TableHead className={cn("text-xs font-semibold uppercase tracking-wide", NUMERIC_CELL_CLASS)}>
                  {t("chat.keys.columns.spend")}
                </TableHead>
                <TableHead className="text-xs font-semibold uppercase tracking-wide">
                  {t("chat.keys.columns.expires")}
                </TableHead>
                <TableHead className="text-xs font-semibold uppercase tracking-wide">
                  {t("chat.keys.columns.created")}
                </TableHead>
                {premiumUser && (
                  <TableHead className="text-xs font-semibold uppercase tracking-wide text-right w-[80px]" />
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              {[...Array(5)].map((_, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Skeleton className="h-4 w-32" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-16" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-20" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-24" />
                  </TableCell>
                  {premiumUser && (
                    <TableCell className="text-right">
                      <Skeleton className="h-4 w-16 ml-auto" />
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : keys.length === 0 ? (
        <div className="text-center text-muted-foreground text-sm py-12 border border-dashed rounded-lg">
          <KeyRound className="h-6 w-6 mb-3 mx-auto text-muted-foreground/50" />
          {t("chat.keys.empty")}
        </div>
      ) : (
        <div className="rounded-lg border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="text-xs font-semibold uppercase tracking-wide">
                  {t("chat.keys.columns.key")}
                </TableHead>
                <TableHead className={cn("text-xs font-semibold uppercase tracking-wide", NUMERIC_CELL_CLASS)}>
                  {t("chat.keys.columns.spend")}
                </TableHead>
                <TableHead className="text-xs font-semibold uppercase tracking-wide">
                  {t("chat.keys.columns.expires")}
                </TableHead>
                <TableHead className="text-xs font-semibold uppercase tracking-wide">
                  {t("chat.keys.columns.created")}
                </TableHead>
                {premiumUser && (
                  <TableHead className="text-xs font-semibold uppercase tracking-wide text-right w-[80px]" />
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              {keys.map((record) => {
                const expired = isKeyExpired(record.expires);
                return (
                  <TableRow key={record.token}>
                    <TableCell>
                      <span className="font-mono text-[13px]">{maskKey(record.key_name)}</span>
                      {record.key_alias && <div className="text-xs text-muted-foreground">{record.key_alias}</div>}
                    </TableCell>
                    <TableCell className={cn("text-[13px]", NUMERIC_CELL_CLASS)}>
                      {CURRENCY_SYMBOL}
                      {record.spend?.toFixed(2) ?? "0.00"}
                      {record.max_budget != null && record.max_budget > 0 && (
                        <span className="text-muted-foreground">
                          {" "}
                          / {CURRENCY_SYMBOL}
                          {record.max_budget.toFixed(2)}
                        </span>
                      )}
                    </TableCell>
                    <TableCell>
                      {!record.expires ? (
                        <span className="text-muted-foreground text-[13px]">{t("chat.keys.never")}</span>
                      ) : (
                        <Badge variant={expired ? "destructive" : "outline"}>
                          {expired ? t("chat.keys.expired") : formatExpiresUtc(record.expires)}
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-muted-foreground text-[13px]">
                      {relativeTime(record.created_at, t)}
                    </TableCell>
                    {premiumUser && (
                      <TableCell className="text-right">
                        <Button
                          variant="outline"
                          size="xs"
                          onClick={() => openRotateModal(record)}
                          title={t("chat.keys.rotateKey")}
                        >
                          <RefreshCw className="h-3 w-3" />
                          {t("chat.keys.rotate")}
                        </Button>
                      </TableCell>
                    )}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      )}

      <Dialog open={!!rotateTarget} onOpenChange={(v) => !v && closeModal()}>
        <DialogContent className="sm:max-w-[520px]">
          <DialogHeader>
            <DialogTitle>{t("chat.keys.rotateTitle")}</DialogTitle>
          </DialogHeader>

          {regeneratedKey ? (
            <div>
              <div className="rounded-lg border border-warning/20 bg-warning/10 px-3 py-2 text-sm text-warning mb-4">
                {t("chat.keys.saveKeyWarning")}
              </div>
              <div className="text-xs text-muted-foreground mb-1">{t("chat.keys.newKey")}</div>
              <div className="bg-muted border rounded-md px-4 py-3 font-mono text-sm break-all text-foreground">
                {regeneratedKey}
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4 mt-1">
              <div className="flex flex-col gap-1.5">
                <Label>{t("chat.keys.keyAlias")}</Label>
                <Input value={formState.key_alias} disabled />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="flex flex-col gap-1.5">
                  <Label>{t("chat.keys.maxBudget")}</Label>
                  <Input
                    type="number"
                    step="0.01"
                    value={formState.max_budget}
                    onChange={(e) => updateField("max_budget", e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label>{t("chat.keys.tpmLimit")}</Label>
                  <Input
                    type="number"
                    value={formState.tpm_limit}
                    onChange={(e) => updateField("tpm_limit", e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label>{t("chat.keys.rpmLimit")}</Label>
                  <Input
                    type="number"
                    value={formState.rpm_limit}
                    onChange={(e) => updateField("rpm_limit", e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <Label>{t("chat.keys.expireKey")}</Label>
                  <Input
                    placeholder={t("chat.keys.expirePlaceholder")}
                    value={formState.duration}
                    onChange={(e) => updateField("duration", e.target.value)}
                  />
                  {formErrors.duration && <p className="text-xs text-destructive">{formErrors.duration}</p>}
                  <p className={`text-xs ${keyIsExpired ? "text-destructive" : "text-muted-foreground"}`}>
                    {t("chat.keys.current")}:{" "}
                    {rotateTarget?.expires ? formatExpiresUtc(rotateTarget.expires) : t("chat.keys.never")}
                    {keyIsExpired && t("chat.keys.expiredSuffix")}
                  </p>
                  {newExpiryTime && (
                    <p className="text-xs text-success">
                      {t("chat.keys.newExpiry")}: {newExpiryTime}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label>{t("chat.keys.gracePeriod")}</Label>
                  <Input
                    placeholder={t("chat.keys.gracePlaceholder")}
                    value={formState.grace_period}
                    onChange={(e) => updateField("grace_period", e.target.value)}
                  />
                  {formErrors.grace_period && <p className="text-xs text-destructive">{formErrors.grace_period}</p>}
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            {regeneratedKey ? (
              <>
                <Button variant="outline" onClick={closeModal}>
                  {t("chat.keys.close")}
                </Button>
                <CopyToClipboard text={regeneratedKey} onCopy={() => setCopied(true)}>
                  <Button>
                    {copied ? <Check className="h-4 w-4 mr-1.5" /> : <Copy className="h-4 w-4 mr-1.5" />}
                    {copied ? t("chat.keys.copied") : t("chat.keys.copyKey")}
                  </Button>
                </CopyToClipboard>
              </>
            ) : (
              <>
                <Button variant="outline" onClick={closeModal}>
                  {t("chat.keys.cancel")}
                </Button>
                <Button onClick={handleRegenerate} disabled={isRegenerating}>
                  {isRegenerating ? (
                    <Loader2 className="h-4 w-4 animate-spin mr-1.5" />
                  ) : (
                    <RefreshCw className="h-4 w-4 mr-1.5" />
                  )}
                  {t("chat.keys.rotate")}
                </Button>
              </>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default KeysPanel;
