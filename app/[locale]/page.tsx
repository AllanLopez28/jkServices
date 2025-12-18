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
      
      {/* Sección de Ubicación */}
      <section className="w-full px-8">
        <div className="grid gap-8 lg:grid-cols-2 bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl overflow-hidden shadow-xl">
          
          {/* Información de Contacto */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
              {locale === "es" ? "Encuéntranos" : "Find Us"}
            </h2>
            
            <div className="space-y-4">
              {/* Dirección */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <strong className="text-blue-900 block mb-1">
                    {locale === "es" ? "Dirección" : "Address"}
                  </strong>
                  <p className="text-slate-600">Brentwood, NY 11717</p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <strong className="text-blue-900 block mb-1">
                    {locale === "es" ? "Teléfono" : "Phone"}
                  </strong>
                  <p className="text-slate-600">(631) 123-4567</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <strong className="text-blue-900 block mb-1">Email</strong>
                  <p className="text-slate-600">info@ejemplo.com</p>
                </div>
              </div>

              {/* Horario */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <strong className="text-blue-900 block mb-1">
                    {locale === "es" ? "Horario" : "Hours"}
                  </strong>
                  <p className="text-slate-600">
                    {locale === "es" ? "Lun - Vie: 9:00 - 18:00" : "Mon - Fri: 9:00 AM - 6:00 PM"}
                  </p>
                </div>
              </div>
            </div>

            {/* Botón */}
            <button className="mt-8 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold py-4 px-8 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              {locale === "es" ? "Cómo llegar" : "Get Directions"}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          {/* Mapa */}
          <div className="h-full min-h-[400px] lg:min-h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48337.80165875638!2d-73.25219799999999!3d40.78153854999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8319349a7a5e1%3A0xfc8ed3b854bd231a!2sBrentwood%2C%20Nueva%20York%2C%20EE.%20UU.!5e0!3m2!1ses-419!2ssv!4v1766096198219!5m2!1ses-419!2ssv"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}