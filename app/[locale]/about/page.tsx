import type { Locale } from "@/lib/locale";
import { isLocale } from "@/lib/locale";

export default function AboutPage({
  params
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "es";

  return (
    <div className="section space-y-6">
      <h1 className="text-2xl font-semibold">
        {locale === "es" ? "Quiénes somos" : "About us"}
      </h1>
      <p className="text-sm text-slate-300 max-w-2xl">
        {locale === "es"
          ? "Somos una oficina de preparación de impuestos bilingüe con base en Brentwood, NY, acreditada ante el IRS y enfocada en la comunidad hispana."
          : "We are a bilingual tax preparation office based in Brentwood, NY, registered with the IRS and focused on the Hispanic community."}
      </p>
    </div>
  );
}
