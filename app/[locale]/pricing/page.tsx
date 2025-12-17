import type { Locale } from "@/lib/locale";
import { isLocale } from "@/lib/locale";

const rows = [
  ["1040 básico (W‑2)", "from $120"],
  ["Self‑employed / 1099", "from $220"],
  ["Corporativo (LLC / Corp)", "from $350"],
  ["Enmiendas / back taxes", "from $180"]
];

export default function PricingPage({
  params
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "es";

  return (
    <div className="section space-y-6">
      <h1 className="text-2xl font-semibold">
        {locale === "es" ? "Tarifas desde" : "Pricing from"}
      </h1>
      <p className="text-sm text-slate-300 max-w-2xl">
        {locale === "es"
          ? "Los precios pueden variar según la complejidad del caso. Siempre confirmamos el monto contigo antes de enviar la declaración."
          : "Prices may vary depending on case complexity. We always confirm the amount with you before filing."}
      </p>
      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40">
        <table className="min-w-full text-sm">
          <tbody>
            {rows.map(([label, price]) => (
              <tr key={label} className="border-b border-slate-800/60">
                <td className="px-4 py-3 text-slate-200">{label}</td>
                <td className="px-4 py-3 text-right text-slate-100 font-semibold">
                  {price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
