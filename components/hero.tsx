// components/hero.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Locale } from "@/lib/locale";
import { useAutoTranslation } from "@/lib/translate";
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
  const titleEs = "Agencia de servicios de impuestos en Brentwood, NY";
  const subtitleEs =
    "Preparamos tus impuestos en español e inglés. Acreditados por el IRS";

  const title = useAutoTranslation(titleEs, locale);
  const subtitle = useAutoTranslation(subtitleEs, locale);

  return (
    <section className="bg-[#020617] text-white">
      {/* HERO PRINCIPAL */}
      <div className="section pt-16 pb-12 grid gap-10 lg:grid-cols-2 items-center">
        {/* Columna izquierda: texto */}
        <div className="space-y-6">
          <p className="text-[11px] tracking-[0.3em] uppercase text-slate-400 font-bold">
            IRS PTIN • EFIN
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
            {title}
          </h1>

          <p className="text-sm md:text-base text-slate-300 max-w-xl font-medium">
            {subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="tel:+16315550123">
              <Button size="lg">
                <Phone className="mr-2 h-4 w-4" />
                {locale === "es" ? "Llámanos ahora" : "Call us now"}
              </Button>
            </a>
            <a
              href="https://wa.me/16315550123"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="outline" size="lg">
                <WhatsAppIconSmall />
                <span className="ml-2 font-bold">
                  {locale === "es"
                    ? "Escríbenos por WhatsApp"
                    : "Message on WhatsApp"}
                </span>
              </Button>
            </a>
          </div>
        </div>

        {/* Columna derecha: imagen tipo mockup */}
        <div className="relative h-64 md:h-80 lg:h-96">
          {/* La imagen ya viene con la forma recortada,
              así que solo usamos un cuadro normal */}
          <Image
            src="/b1.png"
            alt="Oficina de impuestos"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* BARRA DE STATS */}
      <div className="bg-brand-primary">
        <div className="section grid gap-2 md:grid-cols-3">
          {[
            {
              number: "500+",
              labelEs: "Declaraciones presentadas",
              labelEn: "Returns filed"
            },
            {
              number: "5+",
              labelEs: "Años de experiencia",
              labelEn: "Years of experience"
            },
            {
              number: locale === "es" ? "Enero–Abril" : "January–April",
              labelEs: "Temporada de impuestos",
              labelEn: "Tax season"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.1 + index * 0.15,
                ease: "easeOut"
              }}
              whileHover={{
                scale: 1.03,
                y: -4,
                boxShadow: "0 8px 18px rgba(0,0,0,0.20)"
              }}
              className="rounded-2xl bg-brand-primaryDark/40 border border-white/10 px-6 py-6 text-center cursor-pointer transition-all"
            >
              <p className="text-2xl font-black text-white">{item.number}</p>
              <p className="mt-1 text-xs text-slate-200 font-semibold">
                {locale === "es" ? item.labelEs : item.labelEn}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
