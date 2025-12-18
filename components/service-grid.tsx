// components/service-grid.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Locale } from "@/lib/locale";
import { Button } from "@/components/ui/button";

export function ServiceGrid({ locale }: { locale: Locale }) {
  const t = (es: string, en: string) => (locale === "es" ? es : en);

  const cards = [
    { src: "/s1.png", altEs: "Impuestos individuales 1040", altEn: "Individual taxes 1040" },
    { src: "/s2.png", altEs: "Corporativos, payroll y sales tax", altEn: "Corporate, payroll & sales tax" },
    { src: "/s3.png", altEs: "Self-employed / 1099", altEn: "Self-employed / 1099" },
    { src: "/s4.png", altEs: "ITIN nuevo y renovación", altEn: "ITIN new & renewal" }
  ];

  return (
    <section className="relative w-full overflow-hidden">
      <Image
        src="/back2.png"
        alt="Services background"
        fill
        className="object-cover object-center"
        priority={false}
        quality={100}
        unoptimized={true} 
      />

      <div className="relative z-10">
        {/* Altura reducida significativamente */}
        <div className="section py-6 md:py-8">
          <div className="grid items-start gap-6 lg:grid-cols-[1fr_1.15fr]">
            {/* LEFT */}
            <div className="pt-1">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
               className="text-white font-black tracking-tight text-3xl md:text-4xl leading-[1.15] max-w-[460px]"

              >
                {t(
                  "Tu aliado de confianza en impuestos y claridad financiera",
                  "Your trusted partner in tax filing and financial clarity"
                )}
              </motion.h2>
            </div>

            {/* RIGHT: perfect 2x2 aligned grid */}
            <div className="ml-auto w-full">
              <div className="mx-auto w-full max-w-[480px]">
                <div className="grid grid-cols-2 gap-4 place-items-center">
                  {cards.map((c, idx) => (
                    <motion.div
                      key={c.src}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 0.4, delay: 0.05 + idx * 0.05 }}
                      whileHover={{
                        y: -4,
                        scale: 1.01,
                        boxShadow: "0 18px 35px rgba(0,0,0,0.25)"
                      }}
                      className={[
                        "relative overflow-hidden rounded-xl",
                        // ✅ Cards más pequeñas = perfect alignment
                        "w-[200px] h-[230px] md:w-[220px] md:h-[250px]",
                        // card frame (invisible, png is inside)
                       
                      ].join(" ")}
                    >
                      {/* Center the png without distortion */}
                      <div className="absolute inset-0 flex items-center justify-center p-2">
                        <Image
                          src={c.src}
                          alt={t(c.altEs, c.altEn)}
                          width={600}
                          height={600}
                          className="h-full w-full object-contain"
                          priority={false}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 flex justify-end">
                  <Link href={`/${locale}/services`}>
                    <Button size="sm" className="font-black text-sm">
                      {t("Ver todos los servicios", "See all services")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-black/0" />
    </section>
  );
}