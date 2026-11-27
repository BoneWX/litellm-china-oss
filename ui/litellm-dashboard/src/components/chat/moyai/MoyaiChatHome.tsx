import type { ReactNode } from "react";
import { ArrowUpRight, Bug, Clock3, Code2, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Conversation } from "../types";
import { useTranslation } from "react-i18next";
import { conversationTitleForDisplay } from "../conversationTitles";
import "./moyai-chat.css";

const starters = [
  {
    key: "reviewCode",
    Icon: Code2,
  },
  { key: "fixBug", Icon: Bug },
  {
    key: "planFeature",
    Icon: ListChecks,
  },
] as const;

export default function MoyaiChatHome({
  children,
  imageMode,
  researchMode,
  draft,
  busy,
  conversations,
  onSelectConversation,
  onPrompt,
}: {
  children: ReactNode;
  imageMode: boolean;
  researchMode: boolean;
  draft: string;
  busy: boolean;
  conversations: Conversation[];
  onSelectConversation: (id: string) => void;
  onPrompt: (prompt: string) => void;
}) {
  const { t } = useTranslation();
  const recent = [...conversations].sort((a, b) => b.updatedAt - a.updatedAt).slice(0, 3);
  return (
    <section className="moyai-chat-home">
      <div className="moyai-chat-space-backdrop" aria-hidden="true" />
      <div className="moyai-chat-home-content">
        <header className="moyai-chat-home-header">
          <h1>
            {imageMode && t("chat.home.imageHeading")}
            {!imageMode && researchMode && (
              <>
                {t("chat.home.researchHeadingPrefix")}
                <span>{t("chat.home.researchHeadingAccent")}</span>
              </>
            )}
            {!imageMode && !researchMode && (
              <>
                {t("chat.home.workingHeadingPrefix")}
                <span>{t("chat.home.workingHeadingAccent")}</span>
              </>
            )}
          </h1>
        </header>
        {children}
        <section className="moyai-chat-home-recent" aria-labelledby="recent-chats-heading">
          <div className="moyai-chat-home-recent-header">
            <h2 id="recent-chats-heading">{t("chat.home.recentChats")}</h2>
          </div>
          {recent.length === 0 && (
            <p className="text-muted-foreground" role="status">
              {t("chat.home.noRecentChats")}
            </p>
          )}
          <ul>
            {recent.map((conversation) => (
              <li key={conversation.id}>
                <Button
                  variant="ghost"
                  className="moyai-chat-home-recent-link"
                  onClick={() => onSelectConversation(conversation.id)}
                >
                  <Clock3 className="size-3.5" />
                  <span>{conversationTitleForDisplay(conversation.title)}</span>
                  <ArrowUpRight className="size-3.5" />
                </Button>
              </li>
            ))}
          </ul>
        </section>
        {!imageMode && (
          <div
            className="moyai-chat-home-starters"
            role="group"
            aria-label={t("chat.home.startWithPrompt")}
            aria-hidden={Boolean(draft.trim())}
          >
            <p className="moyai-chat-home-starters-heading">{t("chat.home.startWithPrompt")}</p>
            {starters.map(({ key, Icon }) => (
              <Button
                key={key}
                variant="ghost"
                disabled={busy || Boolean(draft.trim())}
                onClick={() => onPrompt(t(`chat.home.starters.${key}.prompt`))}
              >
                <Icon />
                <span className="moyai-chat-home-starter-label">{t(`chat.home.starters.${key}.label`)}</span>
                <span className="moyai-chat-home-starter-detail">{t(`chat.home.starters.${key}.detail`)}</span>
                <ArrowUpRight className="moyai-chat-home-starter-arrow" />
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
