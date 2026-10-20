import { isLocale } from "@/lib/locale";
import { Hero } from "@/components/hero";
import { ServiceGrid } from "@/components/service-grid";
import { Introduction, PhotoBand, AboutSection, ProcessSection, LocationSection } from "@/components/home-sections";
import { FAQSection } from "@/components/faq-section";
export default function Home({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "es";
  return <><Hero locale={locale} /><Introduction locale={locale} /><ServiceGrid locale={locale} /><PhotoBand locale={locale} /><AboutSection locale={locale} /><ProcessSection locale={locale} /><FAQSection locale={locale} /><LocationSection locale={locale} /></>;
}
