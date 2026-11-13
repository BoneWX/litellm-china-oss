import CopyButton from "@/components/shared/CopyButton";
import { useTranslation } from "react-i18next";
import { buildCurlCommand, type CurlCommandInput } from "./lib/curlCommand";

interface CurlPreviewProps extends CurlCommandInput {
  errorCount?: number;
}

export default function CurlPreview({ errorCount = 0, ...input }: CurlPreviewProps) {
  const { t } = useTranslation();
  const command = buildCurlCommand(input);
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex items-center justify-between gap-2 border-b px-3 py-2 text-sm">
        <span className="font-medium">{t("playgroundDeep.decisions.curlRequest")}</span>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          {errorCount > 0 ? (
            <span role="alert" className="text-destructive">
              {errorCount === 1
                ? t("playgroundDeep.decisions.fixIssueBeforeCopying", { count: errorCount })
                : t("playgroundDeep.decisions.fixIssuesBeforeCopying", { count: errorCount })}
            </span>
          ) : (
            <>
              <span>{t("playgroundDeep.decisions.replaceApiKey")}</span>
              <CopyButton value={command} label={t("playgroundDeep.decisions.copyCurl")} variant="action" />
            </>
          )}
        </div>
      </div>
      <pre
        aria-label={t("playgroundDeep.decisions.curlRequest")}
        className="m-0 min-h-0 flex-1 overflow-auto whitespace-pre-wrap wrap-anywhere px-3 py-3 font-mono text-xs leading-5"
      >
        {command}
      </pre>
    </div>
  );
}
