import type { Locale } from "@/lib/locale";
import { isLocale } from "@/lib/locale";

const faqs = [
  {
    qEs: "¿Qué documentos necesito para mi declaración 1040?",
    aEs: "Generalmente W‑2, 1099, 1098, información de dependientes y recibos de gastos deducibles.",
    qEn: "What documents do I need for my 1040 return?",
    aEn: "Usually W‑2, 1099, 1098, dependent information and receipts for deductible expenses."
  },
  {
    qEs: "¿Cuánto tarda mi reembolso?",
    aEs: "El IRS suele enviar reembolsos en 2–3 semanas para declaraciones electrónicas, pero puede variar.",
    qEn: "How long does my refund take?",
    aEn: "The IRS usually issues refunds in 2–3 weeks for e‑filed returns, but timing may vary."
  }
];

export default function FAQPage({
  params
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "es";

  return (
    <div className="section space-y-6">
      <h1 className="text-2xl font-semibold">
        {locale === "es" ? "Preguntas frecuentes" : "Frequently asked questions"}
      </h1>
      <div className="space-y-4">
        {faqs.map((item) => (
          <div
            key={item.qEs}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
          >
            <p className="font-semibold text-sm text-slate-100">
              {locale === "es" ? item.qEs : item.qEn}
            </p>
            <p className="mt-2 text-sm text-slate-300">
              {locale === "es" ? item.aEs : item.aEn}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
