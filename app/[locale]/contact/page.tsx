import type { Locale } from "@/lib/locale";
import { isLocale } from "@/lib/locale";
import { Phone } from "lucide-react";

export default function ContactPage({
  params
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "es";

  return (
    <div className="section space-y-6">
      <h1 className="text-2xl font-semibold">
        {locale === "es" ? "Contacto" : "Contact"}
      </h1>
      <p className="text-sm text-slate-300 max-w-2xl">
        {locale === "es"
          ? "Por ahora agendamos todas las citas por teléfono o WhatsApp."
          : "For now we book all appointments by phone or WhatsApp."}
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4 text-sm text-slate-300">
          <p className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <a href="tel:+16315550123" className="hover:text-slate-100">
              (631) 555‑0123
            </a>
          </p>
          <p>
            WhatsApp:{" "}
            <a
              href="https://wa.me/16315550123"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-100"
            >
              +1 (631) 555‑0123
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:info@example.com" className="hover:text-slate-100">
              info@example.com
            </a>
          </p>
          <p>
            123 2nd Ave, Brentwood, NY 11717
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
          <p className="text-xs text-slate-400 mb-2">
            {locale === "es"
              ? "Mapa (puedes reemplazar este iframe por el de tu ubicación real)."
              : "Map (you can replace this iframe with your real location)."}
          </p>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-900">
            <iframe
              title="Brentwood NY"
              src="https://maps.google.com/maps?q=Brentwood%20NY&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
