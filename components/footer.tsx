import type { Locale } from "@/lib/locale";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="section py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-muted font-medium">
        <p>
          © {new Date().getFullYear()} JK Service Agency.{" "}
          {locale === "es"
            ? "Todos los derechos reservados."
            : "All rights reserved."}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="/es/policies" className="hover:text-brand-primaryDark">
            {locale === "es" ? "Políticas y privacidad" : "Policies & privacy"}
          </a>
          <span className="text-slate-300">•</span>
          <p>Brentwood, NY</p>
        </div>
      </div>
    </footer>
  );
}
