import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { copy } from "@/lib/design-copy";
import type { Locale } from "@/lib/locale";
import { ActionLink, Wordmark } from "./design";
export function Footer({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <>
    <section className="closing section-pad"><div className="closing-copy"><h2>{t.cta[0]}<br />{t.cta[1]}</h2><p>{t.ctaSub}</p><ActionLink light href={`/${locale}/contact`}>{t.contact}</ActionLink></div><div className="closing-object" aria-hidden="true"><span /><span /><span /><ArrowUpRight /></div></section>
    <footer className="footer section-pad"><div className="footer-top"><Wordmark locale={locale} /><p>{t.footer}</p><a className="to-top" href="#top" aria-label={t.top}><ArrowUpRight /></a></div><div className="footer-links"><span>© {new Date().getFullYear()} JK Service Agency</span><Link href={`/${locale}/policies`}>{t.privacy}</Link><span>{t.place}</span></div></footer>
  </>;
}
