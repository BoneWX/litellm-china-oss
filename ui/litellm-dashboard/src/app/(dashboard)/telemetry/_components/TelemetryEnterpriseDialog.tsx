"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";

export function TelemetryEnterpriseDialog({
  open,
  onOpenChange,
  premiumUser,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  premiumUser: boolean;
}) {
  const { t } = useTranslation();
  return (
    <Dialog open={open} onOpenChange={(next) => onOpenChange(next)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {t(premiumUser ? "telemetry.enterpriseContactTitle" : "telemetry.enterpriseOnlyTitle")}
          </DialogTitle>
          <DialogDescription>
            {t(premiumUser ? "telemetry.enterpriseContactDescription" : "telemetry.enterpriseOnlyDescription")}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton />
      </DialogContent>
    </Dialog>
  );
}
