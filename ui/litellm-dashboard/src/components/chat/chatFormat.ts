const CHAT_DATE_TIME_OPTIONS: Intl.DateTimeFormatOptions = {
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
};

export function formatChatDate(value: string | number, language: string): string {
  return new Intl.DateTimeFormat(language, { month: "short", day: "numeric" }).format(new Date(value));
}

export function formatChatDateTime(value: string | number, language: string): string {
  return new Intl.DateTimeFormat(language, CHAT_DATE_TIME_OPTIONS).format(new Date(value));
}
