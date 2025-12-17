import type { Locale } from "@/lib/locale";
import { isLocale } from "@/lib/locale";
import { Hero } from "@/components/hero";
import { ServiceGrid } from "@/components/service-grid";
import { WhyUs } from "@/components/why-us";


export default function Home({
  params
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "es";

  return (
    <>
      <Hero locale={locale} />
      <ServiceGrid locale={locale} />
      <WhyUs locale={locale} />
  <section className="section grid gap-8 lg:grid-cols-2">

        <h2 className="text-xl font-semibold">
      {locale === "es" ? "Ubicacion" : "Location"}
    </h2>
      

  {/* MAPA */}
  <div className="rounded-2xl overflow-hidden border border-slate-800">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50352.272603582096!2d-121.7601792145986!3d37.93003241802109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808ff999f087c8cd%3A0x7e19835b56d29a02!2sBrentwood%2C%20California%2094513%2C%20EE.%20UU.!5e0!3m2!1ses-419!2ssv!4v1764797703904!5m2!1ses-419!2ssv"
      width="100%"
      height="350"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

</section>

    </>
  );
}
