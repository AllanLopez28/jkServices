export type Locale = "es" | "en";

export const LOCALES: Locale[] = ["es", "en"];

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}
