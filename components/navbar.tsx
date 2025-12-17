"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LangSwitcher } from "./lang-switcher";
import type { Locale } from "@/lib/locale";
import { Phone } from "lucide-react";

const navItems = [
  { href: "", labelEs: "Inicio", labelEn: "Home" },
  { href: "/services", labelEs: "Servicios", labelEn: "Services" },
  { href: "/about", labelEs: "Quiénes somos", labelEn: "About" },
  { href: "/pricing", labelEs: "Tarifas", labelEn: "Pricing" },
  { href: "/faq", labelEs: "Preguntas", labelEn: "FAQ" },
  { href: "/contact", labelEs: "Contacto", labelEn: "Contact" }
];

export function Navbar({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const basePath = `/${locale}`;

  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="section py-4 flex items-center justify-between gap-6">
        <Link href={basePath} className="flex items-center gap-3">
          <div className="relative h-10 w-10">
            <Image
              src="/logo-jk.png"
              alt="JK Service Agency"
              fill
              className="object-contain"
            />
          </div>
          <div className="leading-tight">
            <p className="text-[10px] tracking-[0.25em] uppercase text-brand-muted font-bold">
              ACCOUNTING &amp; TAX SERVICES
            </p>
            <p className="text-sm font-black text-brand-primaryDark">
              JK Service Agency
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-xs text-brand-muted font-semibold">
          {navItems.map((item) => {
            const href = `${basePath}${item.href}`;
            const active = pathname === href;
            const label = locale === "es" ? item.labelEs : item.labelEn;
            return (
              <Link
                key={href}
                href={href}
                className={
                  "transition-colors " +
                  (active
                    ? "text-brand-primary font-black"
                    : "hover:text-brand-primaryDark")
                }
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+16315550123"
            className="hidden sm:inline-flex items-center gap-2 rounded-2xl border border-brand-primary/30 bg-brand-primaryLight px-3 py-2 text-xs font-bold text-brand-primaryDark hover:bg-brand-primary/10"
          >
            <Phone className="h-4 w-4" />
            <span>(631) 555-0123</span>
          </a>
          <LangSwitcher locale={locale} />
        </div>
      </div>
    </header>
  );
}
