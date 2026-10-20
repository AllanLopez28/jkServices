"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/locale";
export function LangSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  return <div className="language" aria-label={locale === "es" ? "Idioma" : "Language"}>
    {(["en", "es"] as const).map((language, i) => <span key={language}>
      {i > 0 && <span aria-hidden="true"> / </span>}
      <Link href={pathname.replace(/^\/(en|es)(?=\/|$)/, `/${language}`)} hrefLang={language} aria-label={language === "en" ? "English" : "Español"} aria-current={locale === language ? "true" : undefined} className={locale === language ? "selected" : ""}>{language.toUpperCase()}</Link>
    </span>)}
  </div>;
}
