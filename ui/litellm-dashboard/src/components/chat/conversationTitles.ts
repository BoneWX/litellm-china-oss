import i18n from "@/i18n/i18n";

export const DEFAULT_CONVERSATION_TITLE = "New conversation";
export const DEFAULT_IMAGE_CONVERSATION_TITLE = "Image conversation";

export function conversationTitleForDisplay(title: string): string {
  if (title === DEFAULT_CONVERSATION_TITLE) return i18n.t("chat.conversation.defaultTitle");
  if (title === DEFAULT_IMAGE_CONVERSATION_TITLE) return i18n.t("chat.conversation.imageTitle");
  return title;
}
