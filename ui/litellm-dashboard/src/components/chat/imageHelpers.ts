import OpenAI from "openai";
import { v4 as uuid } from "uuid";
import i18n from "@/i18n/i18n";
import { getGatewayBaseUrl } from "@/components/networking";
import type { ChatImageAttachment } from "./types";

export const MAX_CHAT_IMAGE_BYTES = 10 * 1024 * 1024;
export const CHAT_IMAGE_ACCEPT = "image/png,image/jpeg,image/webp,image/gif";
const IMAGE_TYPES = new Set(CHAT_IMAGE_ACCEPT.split(","));
const DATA_IMAGE_PATTERN = /^data:image\/(png|jpeg|webp|gif);base64,[a-zA-Z0-9+/]/;

export function isChatImageUrl(url: string): boolean {
  if (DATA_IMAGE_PATTERN.test(url)) return true;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}

export async function readChatImage(file: File): Promise<ChatImageAttachment> {
  if (!IMAGE_TYPES.has(file.type)) throw new Error(i18n.t("chat.errors.chooseImage"));
  if (file.size === 0) throw new Error(i18n.t("chat.errors.imageEmpty", { name: file.name }));
  if (file.size > MAX_CHAT_IMAGE_BYTES) {
    throw new Error(i18n.t("chat.errors.imageTooLarge", { name: file.name }));
  }
  const url = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string" && DATA_IMAGE_PATTERN.test(reader.result)) resolve(reader.result);
      else reject(new Error(i18n.t("chat.errors.imageReadFailed", { name: file.name })));
    };
    reader.onerror = () => reject(new Error(i18n.t("chat.errors.imageReadFailed", { name: file.name })));
    reader.onabort = () => reject(new Error(i18n.t("chat.errors.imageReadCanceled", { name: file.name })));
    reader.readAsDataURL(file);
  });
  return { id: uuid(), name: file.name, url, mimeType: file.type };
}

export async function generateChatImages({
  prompt,
  model,
  accessToken,
  signal,
}: {
  prompt: string;
  model: string;
  accessToken: string;
  signal?: AbortSignal;
}): Promise<ChatImageAttachment[]> {
  const client = new OpenAI({ apiKey: accessToken, baseURL: getGatewayBaseUrl(), dangerouslyAllowBrowser: true });
  const response = await client.images.generate({ model, prompt }, { signal });
  const mimeType = `image/${response.output_format ?? "png"}`;
  const images = (response.data ?? []).flatMap((image, index): ChatImageAttachment[] => {
    const url = image.b64_json ? `data:${mimeType};base64,${image.b64_json}` : image.url;
    if (!url || !isChatImageUrl(url)) return [];
    return [{ id: uuid(), name: i18n.t("chat.errors.generatedImageName", { index: index + 1 }), url }];
  });
  if (!images.length) throw new Error(i18n.t("chat.errors.imageNotReturned"));
  return images;
}
