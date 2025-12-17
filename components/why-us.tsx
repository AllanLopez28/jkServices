// components/why-us.tsx
import Image from "next/image";
import type { Locale } from "@/lib/locale";

export function WhyUs({ locale }: { locale: Locale }) {
  return (
    <section className="bg-[#F3F6FB]">
      <div className="section grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] items-center">
        {/* Imagen (rectángulo sencillo) */}
        <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl bg-slate-200">
          <Image
            src="/b2.png"
            alt={
              locale === "es"
                ? "Oficina de impuestos atendiendo a clientes"
                : "Tax office working with clients"
            }
            fill
            className="object-cover"
            priority={false}
          />
        </div>

        {/* Texto */}
        <div className="space-y-5">
          <h2 className="text-2xl md:text-3xl font-black text-brand-primaryDark text-center lg:text-left">
            {locale === "es"
              ? "Por qué nos eligen"
              : "Why clients choose us"}
          </h2>

          <p className="text-sm text-brand-muted font-medium leading-relaxed">
            {locale === "es"
              ? "En JK Service Agency combinamos experiencia local con un trato cercano en español e inglés. Revisamos cada caso con calma, explicando tus opciones y obligaciones para que tomes decisiones con confianza."
              : "At JK Service Agency we combine local New York experience with a friendly service in Spanish and English. We review each case carefully, explain your options and responsibilities, and help you make confident decisions."}
          </p>

          <div className="space-y-5">
            {/* Visión */}
            <div className="flex gap-4 items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-primary/30 text-brand-primary">
                {/* Icono tipo “visión” usando un simple ojo estilizado */}
                <span className="block h-4 w-6 rounded-full border border-current" />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-black text-brand-primaryDark">
                  {locale === "es" ? "Nuestra visión" : "Our vision"}
                </h3>
                <p className="mt-1 text-sm text-brand-muted font-medium">
                  {locale === "es"
                    ? "Ser la oficina de referencia en Brentwood para la comunidad hispana que busca claridad, cumplimiento y planeación fiscal a largo plazo."
                    : "To be the trusted office in Brentwood for the Hispanic community seeking clarity, compliance and long-term tax planning."}
                </p>
              </div>
            </div>

            {/* Misión */}
            <div className="flex gap-4 items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-primary/30 text-brand-primary">
                {/* Icono tipo “misión”: diana simple */}
                <div className="h-6 w-6 rounded-full border border-current flex items-center justify-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-current" />
                </div>
              </div>
              <div>
                <h3 className="text-sm md:text-base font-black text-brand-primaryDark">
                  {locale === "es" ? "Nuestra misión" : "Our mission"}
                </h3>
                <p className="mt-1 text-sm text-brand-muted font-medium">
                  {locale === "es"
                    ? "Acompañarte en cada temporada de impuestos, explicando en tu idioma, cuidando tus documentos y representándote cuando el IRS o el estado envían cartas."
                    : "To support you every tax season, explaining in your language, taking care of your documents and standing by you when the IRS or the State send notices."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
