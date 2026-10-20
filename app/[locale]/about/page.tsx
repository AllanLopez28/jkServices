import { isLocale } from "@/lib/locale";
import { AboutSection, PhotoBand, ProcessSection } from "@/components/home-sections";
export default function AboutPage({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "es";
  return <><div className="interior-hero"><p className="section-note">JK Service Agency</p><h1>{locale === "es" ? "Un equipo de tu lado." : "A team in your corner."}</h1><p>{locale === "es" ? "Contabilidad e impuestos con un trato personal. En tu comunidad y en tu idioma." : "Accounting and taxes, with a personal touch. In your community and in your language."}</p></div><PhotoBand locale={locale} /><AboutSection locale={locale} /><ProcessSection locale={locale} /></>;
}
