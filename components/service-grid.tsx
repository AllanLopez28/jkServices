// components/service-grid.tsx
"use client";

import type { Locale } from "@/lib/locale";
import { useAutoTranslation } from "@/lib/translate";
import Link from "next/link";
import {
  FileText,
  IdCard,
  Briefcase,
  Building2,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const servicesBase = [
  {
    icon: FileText,
    titleEs: "Impuestos individuales 1040",
    descriptionEs:
      "Preparación profesional de tu declaración 1040 con créditos, dependientes y reembolsos."
  },
  {
    icon: IdCard,
    titleEs: "ITIN nuevo y renovación",
    descriptionEs:
      "Te ayudamos a solicitar o renovar tu ITIN con lista clara de documentos y plazos."
  },
  {
    icon: Briefcase,
    titleEs: "Self-employed / 1099",
    descriptionEs:
      "Declaraciones para trabajo por cuenta propia: Uber, DoorDash, limpieza, construcción y más."
  },
  {
    icon: Building2,
    titleEs: "Corporativos, payroll y sales tax",
    descriptionEs:
      "Apoyo para LLC/Corp, nómina de empleados y reporte de impuesto sobre ventas en NY."
  }
];

export function ServiceGrid({ locale }: { locale: Locale }) {
  return (
    <section className="bg-brand-primaryLight">
      <div className="section flex flex-col gap-10">
        {/* Título centrado */}
        <div className="text-center space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-muted font-bold">
            {locale === "es" ? "Nuestros servicios" : "Our services"}
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-brand-primaryDark">
            {locale === "es"
              ? "Servicios de impuestos y contabilidad"
              : "Tax and accounting services"}
          </h2>
        </div>

        {/* Grid de 4 servicios fijos (sin links individuales) */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {servicesBase.map((service, index) => {
            const title = useAutoTranslation(service.titleEs, locale);
            const description = useAutoTranslation(
              service.descriptionEs,
              locale
            );
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center rounded-2xl bg-white shadow-sm border border-slate-200 px-6 py-10 gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-primary/40 text-brand-primary mb-2">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-sm md:text-base font-black text-brand-primaryDark">
                  {title}
                </h3>

                <p className="text-xs md:text-sm text-brand-muted font-medium">
                  {description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Botón central → página con todos los servicios */}
        <div className="flex justify-center pt-2">
          <Link href={`/${locale}/services`}>
            <Button
              size="lg"
              // Added "text-black" here to force the font color
              className="min-w-[230px] justify-center font-black text-sm text-black"
            >
              {locale === "es"
                ? "Ver todos los servicios"
                : "See all services"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}