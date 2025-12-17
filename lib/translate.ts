"use client";

import { useEffect, useState } from "react";
import type { Locale } from "./locale";

/**
 * Very small helper that keeps Spanish as the source language
 * and automatically translates to English using an external API
 * when needed. In case of error it falls back to the original text.
 *
 * NOTE: This runs only in the browser (client component).
 */
export function useAutoTranslation(source: string, locale: Locale) {
  const [text, setText] = useState(source);

  useEffect(() => {
    if (locale === "es") {
      setText(source);
      return;
    }

    let cancelled = false;

    async function translate() {
      try {
        const res = await fetch("https://libretranslate.de/translate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            q: source,
            source: "es",
            target: locale,
            format: "text"
          })
        });

        if (!res.ok) throw new Error("Failed to translate");

        const data = await res.json();
        if (!cancelled) {
          setText(data.translatedText ?? source);
        }
      } catch (error) {
        console.error("Translation error", error);
        if (!cancelled) setText(source);
      }
    }

    translate();

    return () => {
      cancelled = true;
    };
  }, [source, locale]);

  return text;
}
