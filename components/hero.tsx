// components/hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Locale } from "@/lib/locale";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

function WhatsAppIconSmall() {
  return (
    <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-black text-white">
      W
    </span>
  );
}

export function Hero({ locale }: { locale: Locale }) {
  const t = (es: string, en: string) => (locale === "es" ? es : en);

  const stats = [
    {
      number: "500+",
      labelEs: "Declaraciones presentadas",
      labelEn: "Returns filed",
    },
    {
      number: "5+",
      labelEs: "Años de experiencia",
      labelEn: "Years of experience",
    },
    {
      number: t("Enero–Abril", "January–April"),
      labelEs: "Temporada de impuestos",
      labelEn: "Tax season",
    },
  ];

  return (
    <section className="w-full bg-white">
      {/* BANNER */}
      <div className="relative w-full overflow-hidden">
        {/* Imagen de fondo */}
        <Image
          src="/banner.png"
          alt="JK Service Agency Banner"
          fill
          priority
          className="object-cover object-center"
          quality={100}
          unoptimized={true}
        />

        {/* Overlay suave para contraste */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/92 via-white/60 to-transparent" />

        {/* Contenido encima (izquierda) */}
        <div className="relative z-10">
          <div className="mx-auto max-w-6xl px-4">
            {/* ✅ Banner más corto */}
            <div className="flex min-h-[380px] items-center md:min-h-[430px] lg:min-h-[480px]">

              <div className="max-w-[26rem] sm:max-w-lg md:max-w-xl">
                <motion.h1
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className={[
                    "text-[clamp(1.95rem,6.2vw,3.75rem)]",
                    "leading-[1.06] md:leading-[1.05]",
                    "tracking-tight",
                    "font-black text-brand-primaryDark",
                    "break-words",
                    "text-balance",
                  ].join(" ")}
                >
                  {t(
                    "Impuestos en manos de personas que sí se preocupan",
                    "Taxes handled by people who care"
                  )}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
                  className={[
                    "mt-8 md:mt-4",
                    "font-medium leading-relaxed text-brand-muted",
                    "text-[0.95rem] md:text-base",
                    "max-w-prose",
                  ].join(" ")}
                >
                  {locale === "es" ? (
                    <>
                      Te explicamos cada paso {" "}
                      <br className="block md:hidden" />
                      y cuidamos tu caso {" "}
                      <br className="block md:hidden" />
                      como si fuera nuestro.
                    </>
                  ) : (
                    <>
                      We explain every step clearly {" "}
                      <br className="block md:hidden" />
                       and take care of your case {" "}
                      <br className="block md:hidden" />
                      like it’s our own.
                    </>
                  )}
                </motion.p>



                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
                  className="mt-6 flex flex-wrap items-center gap-3"
                >
                  <Link href={`/${locale}/services`}>
                    <Button size="lg" className="font-black">
                      {t("Ver servicios", "Learn more")}
                    </Button>
                  </Link>

                  <a href="tel:+16315550123">
                    <Button variant="outline" size="lg" className="font-bold">
                      <Phone className="mr-2 h-4 w-4" />
                      {t("Llámanos", "Call")}
                    </Button>
                  </a>

                  <a
                    href="https://wa.me/16315550123"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="outline" size="lg" className="font-bold">
                      <WhatsAppIconSmall />
                      <span className="ml-2">{t("WhatsApp", "WhatsApp")}</span>
                    </Button>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ SECCIÓN DE ESTADÍSTICAS */}
      <div className="bg-brand-primary">
        <div className="mx-auto max-w-6xl px-4 py-5">
          {/* gap más pequeño en móvil */}
          <div className="grid gap-2 md:gap-3 md:grid-cols-3">
            {stats.map((s, index) => (
              <motion.div
                key={s.number + index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.45,
                  delay: 0.10 + index * 0.10,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -3,
                  scale: 1.01,
                }}
                className={[
                  "cursor-pointer text-center",
                  "rounded-xl",
                  "px-4 py-4 md:px-6 md:py-5",
                  "bg-white/10 border border-white/10",
                  "shadow-[inset_0_1px_0_rgba(255,255,255,0.18),_0_10px_20px_rgba(2,6,23,0.12)]",
                  "transition-all",
                ].join(" ")}
              >
                <p className="text-2xl md:text-3xl font-black text-white leading-none">
                  {s.number}
                </p>
                <p className="mt-1.5 md:mt-2 text-[11px] md:text-xs font-semibold text-white/80 tracking-wide">
                  {locale === "es" ? s.labelEs : s.labelEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
