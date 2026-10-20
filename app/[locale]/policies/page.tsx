import { isLocale } from "@/lib/locale";
export default function PoliciesPage({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "es";
  return <><div className="interior-hero"><p className="section-note">JK Service Agency</p><h1>{locale === "es" ? "Políticas y privacidad" : "Policies & privacy"}</h1></div><section className="interior-content"><p className="policy-copy">{locale === "es" ? "Las políticas de privacidad, cookies y términos de uso están pendientes de publicación." : "The privacy policy, cookie notice and terms of use are pending publication."}</p></section></>;
}
