import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Sanitizes URLs to prevent XSS, javascript: URI injection, and open redirect/unsafe protocol attacks.
 * Only allows http:, https:, mailto:, tel:, and safe relative paths.
 */
export function sanitizeUrl(url?: string | null): string {
  if (!url || typeof url !== "string") return "";

  const trimmed = url.trim().replace(/[\u0000-\u001F\u007F-\u009F\s]/g, "");
  if (!trimmed) return "";

  // Allow safe relative paths and fragment anchors
  if (
    trimmed.startsWith("#") ||
    trimmed.startsWith("/") ||
    trimmed.startsWith("./") ||
    trimmed.startsWith("../")
  ) {
    return trimmed;
  }

  try {
    const parsed = new URL(trimmed);
    const protocol = parsed.protocol.toLowerCase();
    const safeProtocols = ["http:", "https:", "mailto:", "tel:"];

    if (safeProtocols.includes(protocol)) {
      return trimmed;
    }
  } catch {
    // If URL parsing fails and it's not a relative path, reject it
    return "";
  }

  return "";
}

/**
 * Safely serializes data into a JSON-LD string to prevent HTML entity script injection/breakouts.
 */
export function escapeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

/**
 * Sanitizes and trims user input strings, enforcing max character length and stripping control characters.
 */
export function sanitizeInput(text: string, maxLength = 1000): string {
  if (!text || typeof text !== "string") return "";
  return text
    .trim()
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .slice(0, maxLength);
}

