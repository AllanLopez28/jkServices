"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, useScroll, useReducedMotion } from "framer-motion";
import { LangSwitcher } from "./lang-switcher";
import { Wordmark } from "./design";
import { copy } from "@/lib/design-copy";
import type { Locale } from "@/lib/locale";

export function Navbar({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const { scrollYProgress } = useScroll();
  const reducedMotion = useReducedMotion();
  const paths = ["services", "about", "pricing", "faq"];
  useEffect(() => { setOpen(false); document.documentElement.lang = locale; }, [pathname, locale]);
  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); }
    }
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  return <>
    <a className="skip-link" href="#main">{locale === "es" ? "Saltar al contenido" : "Skip to content"}</a>
    {!reducedMotion && <motion.div className="reading-progress" style={{ scaleX: scrollYProgress }} />}
    <header className="header" id="top">
      <Wordmark locale={locale} />
      <nav className="desktop-nav" aria-label={locale === "es" ? "Navegación principal" : "Main navigation"}>
        {paths.map((path, i) => <Link key={path} href={`/${locale}/${path}`} aria-current={pathname === `/${locale}/${path}` ? "page" : undefined}>{t.nav[i]}</Link>)}
      </nav>
      <div className="header-actions">
        <LangSwitcher locale={locale} />
        <Link href={`/${locale}/contact`} className="header-contact">{t.contact}<ArrowUpRight size={17} /></Link>
        <button ref={toggle} className="menu-toggle" aria-label={open ? (locale === "es" ? "Cerrar menú" : "Close menu") : (locale === "es" ? "Abrir menú" : "Open menu")} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav id="mobile-menu" className="mobile-menu" aria-label={locale === "es" ? "Navegación móvil" : "Mobile navigation"}>
        {paths.map((path, i) => <Link key={path} href={`/${locale}/${path}`} onClick={() => setOpen(false)}>{t.nav[i]}<ArrowUpRight /></Link>)}
        <Link href={`/${locale}/contact`} onClick={() => setOpen(false)}>{t.contact}<ArrowUpRight /></Link>
      </nav>}
    </header>
  </>;
}
