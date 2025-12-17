import type { Locale } from "@/lib/locale";
import { isLocale } from "@/lib/locale";

export default function PoliciesPage({
  params
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "es";

  return (
    <div className="section space-y-6 text-sm text-slate-300">
      <h1 className="text-2xl font-semibold">
        {locale === "es" ? "Políticas y privacidad" : "Policies & privacy"}
      </h1>
      <p>
        {locale === "es"
          ? "Aquí podrás añadir tus políticas de privacidad, cookies, términos de uso y disclaimers relacionados con servicios de impuestos."
          : "Here you can add your privacy policy, cookies notice, terms of use and disclaimers related to tax services."}
      </p>
    </div>
  );
}
