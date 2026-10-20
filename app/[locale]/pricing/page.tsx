import { isLocale } from "@/lib/locale";
import { ActionLink } from "@/components/design";
const rows = [
  { es: "1040 básico (W-2)", en: "Basic 1040 (W-2)", price: 120 },
  { es: "Trabajo independiente / 1099", en: "Self-employed / 1099", price: 220 },
  { es: "Corporativo (LLC / Corp)", en: "Corporate (LLC / Corp)", price: 350 },
  { es: "Enmiendas / años pendientes", en: "Amendments / back taxes", price: 180 }
];
export default function PricingPage({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "es";
  const es = locale === "es";
  return <><div className="interior-hero"><p className="section-note">{es ? "Nuestras tarifas" : "Our pricing"}</p><h1>{es ? "Claridad desde el inicio." : "Clear from the start."}</h1><p>{es ? "Los precios pueden variar según la complejidad del caso. Siempre confirmamos el monto contigo antes de enviar la declaración." : "Prices may vary depending on case complexity. We always confirm the amount with you before filing."}</p></div><section className="interior-content"><div className="pricing-list stagger" data-animate>{rows.map(row => <article key={row.price} className="price-row"><h2>{row[locale]}</h2><div className="price-value"><small>{es ? "desde" : "from"}</small>${row.price}</div></article>)}</div><ActionLink href={`/${locale}/contact`}>{es ? "Hablemos de tu caso" : "Let’s discuss your needs"}</ActionLink></section></>;
}
