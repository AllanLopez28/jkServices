import { isLocale } from "@/lib/locale";
import { FAQSection } from "@/components/faq-section";
export default function FAQPage({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "es";
  return <><div className="interior-hero"><p className="section-note">JK Service Agency</p><h1>{locale === "es" ? "Tus preguntas. Respuestas claras." : "Your questions. Clear answers."}</h1><p>{locale === "es" ? "El primer paso para avanzar con confianza es entender tus opciones." : "Understanding your options is the first step toward moving forward with confidence."}</p></div><FAQSection locale={locale} extended /></>;
}
