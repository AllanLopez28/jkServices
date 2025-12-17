"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Locale } from "@/lib/locale";
import { isLocale } from "@/lib/locale";
import {
  FileText,
  IdCard,
  Briefcase,
  Building2,
  Receipt,
  BookOpen,
  Undo2,
  ArchiveRestore,
  ShieldCheck,
  Check,
  ArrowRight
} from "lucide-react";

type Category = "all" | "individual" | "business" | "compliance";

const filters: { id: Category; labelEs: string; labelEn: string }[] = [
  { id: "all", labelEs: "Todos", labelEn: "All" },
  { id: "individual", labelEs: "Individual", labelEn: "Individual" },
  { id: "business", labelEs: "Negocios", labelEn: "Business" },
  { id: "compliance", labelEs: "Cumplimiento", labelEn: "Compliance" }
];

const services = [
  {
    slug: "1040",
    category: "individual" as Category,
    icon: FileText,
    titleEs: "Impuestos individuales 1040",
    titleEn: "Individual Taxes 1040",
    subtitleEs: "Preparación profesional de declaraciones 1040.",
    subtitleEn: "Professional preparation of 1040 returns.",
    bulletsEs: ["W-2, 1099, 1098", "Créditos y deducciones", "Envío electrónico rápido"],
    bulletsEn: ["W-2, 1099, 1098", "Credits & deductions", "Fast e-file"]
  },
  {
    slug: "itin",
    category: "individual" as Category,
    icon: IdCard,
    titleEs: "ITIN (nuevo / renovación)",
    titleEn: "ITIN (new / renewal)",
    subtitleEs: "Acompañamiento para solicitud o renovación de ITIN.",
    subtitleEn: "Guidance for ITIN application/renewal.",
    bulletsEs: ["Checklist de documentos", "Formulario W-7", "Envío y seguimiento básico"],
    bulletsEn: ["Document checklist", "W-7 form", "Filing & tracking"]
  },
  {
    slug: "self-employed",
    category: "business" as Category,
    icon: Briefcase,
    titleEs: "Self-Employed / 1099",
    titleEn: "Self-Employed / 1099",
    subtitleEs: "Registro de ingresos y gastos como trabajador independiente.",
    subtitleEn: "Income/expense tracking & estimates.",
    bulletsEs: ["Schedule C", "Kilometraje y gastos", "Pagos estimados"],
    bulletsEn: ["Schedule C", "Mileage & expenses", "Estimated payments"]
  },
  {
    slug: "corporate",
    category: "business" as Category,
    icon: Building2,
    titleEs: "Business (LLC / Corp)",
    titleEn: "Business (LLC / Corp)",
    subtitleEs: "Apoyo fiscal para entidades registradas.",
    subtitleEn: "Entity tax support.",
    bulletsEs: ["EIN / EFIN", "Elección de entidad", "Declaraciones anuales"],
    bulletsEn: ["EIN / EFIN", "Entity elections", "Annual filings"]
  },
  {
    slug: "payroll",
    category: "business" as Category,
    icon: Receipt,
    titleEs: "Payroll",
    titleEn: "Payroll",
    subtitleEs: "Nómina y reportes de impuestos sobre sueldos.",
    subtitleEn: "Payroll and filings.",
    bulletsEs: ["W-2, 941", "Cálculo de retenciones"],
    bulletsEn: ["W-2, 941", "Withholding calculations"]
  },
  {
    slug: "sales-tax",
    category: "business" as Category,
    icon: Receipt,
    titleEs: "Sales Tax",
    titleEn: "Sales Tax",
    subtitleEs: "Declaraciones de impuesto sobre ventas.",
    subtitleEn: "Sales tax returns.",
    bulletsEs: ["Registros y reportes"],
    bulletsEn: ["Records & reports"]
  },
  {
    slug: "amendments",
    category: "compliance" as Category,
    icon: Undo2,
    titleEs: "Enmiendas de declaraciones",
    titleEn: "Amended returns",
    subtitleEs: "Corrección de declaraciones previas.",
    subtitleEn: "Corrections for prior returns.",
    bulletsEs: ["Errores en ingresos o dependientes", "Omisión de formularios"],
    bulletsEn: ["Income/dependent errors", "Missing forms"]
  },
  {
    slug: "back-taxes",
    category: "compliance" as Category,
    icon: ArchiveRestore,
    titleEs: "Back taxes y años sin declarar",
    titleEn: "Back taxes & unfiled years",
    subtitleEs: "Regularización de años pendientes.",
    subtitleEn: "Catch up on unfiled returns.",
    bulletsEs: ["Reconstrucción básica", "Plan por año"],
    bulletsEn: ["Basic reconstruction", "Year-by-year plan"]
  },
  {
    slug: "representation",
    category: "compliance" as Category,
    icon: ShieldCheck,
    titleEs: "Representación IRS / NYSDTF",
    titleEn: "IRS / NYSDTF representation",
    subtitleEs: "Apoyo ante cartas y ajustes de autoridades fiscales.",
    subtitleEn: "Support with tax notices and adjustments.",
    bulletsEs: ["Revisión de cartas", "Respuesta y documentación"],
    bulletsEn: ["Notice review", "Responses & documentation"]
  }
];

export default function ServicesPage({
  params
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "es";
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const t = (es: string, en: string) => (locale === "es" ? es : en);

  const filteredServices = useMemo(
    () =>
      activeFilter === "all"
        ? services
        : services.filter((s) => s.category === activeFilter),
    [activeFilter]
  );

  return (
    <div className="bg-brand-primaryLight min-h-[70vh]">
      <div className="section space-y-8">
        {/* Encabezado */}
        <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2 max-w-xl">
            <h1 className="text-3xl md:text-4xl font-black text-brand-primaryDark">
              {t("Nuestros servicios", "Our services")}
            </h1>
            <p className="text-sm text-brand-muted font-medium">
              {t(
                "Elige una categoría o explora todos los servicios de impuestos y contabilidad.",
                "Choose a category or explore all tax and accounting services."
              )}
            </p>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                whileTap={{ scale: 0.96 }}
                className={`rounded-full px-4 py-2 text-xs font-bold border transition-colors ${
                  activeFilter === filter.id
                    ? "bg-brand-primary text-white border-brand-primary shadow-sm"
                    : "bg-white text-brand-primaryDark border-slate-200 hover:bg-brand-primaryLight/80"
                }`}
              >
                {t(filter.labelEs, filter.labelEn)}
              </motion.button>
            ))}
          </div>
        </header>

        {/* Grid de servicios */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredServices.map((service) => {
              const Icon = service.icon;
              const bullets =
                locale === "es" ? service.bulletsEs : service.bulletsEn;

              return (
                <motion.article
                  key={service.slug}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 18px 35px rgba(15, 23, 42, 0.18)"
                  }}
                  className="group relative flex flex-col rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-white to-[#F3F7FF] px-6 py-6 shadow-sm overflow-hidden"
                >
                  {/* Glow suave al hover */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_55%)]" />

                  <div className="relative flex flex-col gap-4">
                    {/* Icono y título */}
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-primaryLight text-brand-primary border border-brand-primary/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="text-base md:text-lg font-black text-brand-primaryDark">
                          {t(service.titleEs, service.titleEn)}
                        </h2>
                        <p className="text-sm text-brand-muted font-medium mt-0.5">
                          {t(service.subtitleEs, service.subtitleEn)}
                        </p>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="mt-1 space-y-1.5 text-xs text-brand-muted font-medium">
                      {bullets.map((item) => (
                        <li key={item} className="flex gap-2 items-start">
                          <Check className="mt-[2px] h-3.5 w-3.5 text-brand-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn more (por ahora solo placeholder, luego lo conectamos a páginas detalle) */}
                    <div className="mt-3">
                      <button
                        type="button"
                        className="inline-flex items-center gap-1 text-xs font-bold text-brand-primary hover:text-brand-primaryDark"
                      >
                        {t("Ver más", "Learn more")}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
