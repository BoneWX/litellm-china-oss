import React, { useId } from "react";
import { useTranslation } from "react-i18next";
import { ConfigOwnedBadge } from "./ConfigOwned";
import { Switch } from "@/components/ui/switch";
import { routerFieldDescription, routerFieldLabel } from "./routerFieldText";

interface TagFilteringToggleProps {
  enabled: boolean;
  routerFieldsMetadata: { [key: string]: any };
  onToggle: (enabled: boolean) => void;
  ownedByConfig?: boolean;
}

const TagFilteringToggle: React.FC<TagFilteringToggleProps> = ({
  enabled,
  routerFieldsMetadata,
  onToggle,
  ownedByConfig = false,
}) => {
  const { t } = useTranslation();
  const toggleId = useId();

  return (
    <div className="space-y-3 max-w-3xl">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <label htmlFor={toggleId} className="text-xs font-medium text-foreground uppercase tracking-wide">
            {routerFieldLabel("enable_tag_filtering", routerFieldsMetadata["enable_tag_filtering"], t)}
          </label>
          {ownedByConfig && <ConfigOwnedBadge />}
          <p className="text-xs text-muted-foreground mt-0.5">
            {routerFieldDescription("enable_tag_filtering", routerFieldsMetadata["enable_tag_filtering"], t)}
            {routerFieldsMetadata["enable_tag_filtering"]?.link && (
              <>
                {" "}
                <a
                  href={routerFieldsMetadata["enable_tag_filtering"].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-info hover:text-info/80 underline"
                >
                  {t("routerSettings.tagFiltering.learnMore")}
                </a>
              </>
            )}
          </p>
        </div>
        <Switch
          id={toggleId}
          checked={enabled}
          onCheckedChange={onToggle}
          disabled={ownedByConfig}
          title={ownedByConfig ? t("routerSettings.configOwned.hint") : undefined}
          className="ml-4"
        />
      </div>
    </div>
  );
};

export default TagFilteringToggle;
