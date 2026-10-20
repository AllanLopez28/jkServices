import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/locale";
export function Wordmark({ locale }: { locale: Locale }) {
  return <Link className="wordmark" href={`/${locale}`} aria-label="JK Service Agency">
    <span className="monogram">JK<span>.</span></span>
    <span className="brand-text">Service Agency<small>Accounting &amp; tax services</small></span>
  </Link>;
}
export function ActionLink({ children, href, light = false }: { children: ReactNode; href: string; light?: boolean }) {
  return <Link href={href} className={`button ${light ? "button-light" : ""}`}><span>{children}</span><span className="button-arrow"><ArrowUpRight size={20} aria-hidden="true" /></span></Link>;
}
