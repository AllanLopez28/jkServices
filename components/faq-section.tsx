"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import type { Locale } from "@/lib/locale";
import { copy } from "@/lib/design-copy";
export function FAQSection({ locale, extended = false }: { locale: Locale; extended?: boolean }) {
  const t = copy[locale];
  const [open, setOpen] = useState(0);
  const questions = [...t.questions];
  if (extended) questions.push(locale === "es"
    ? ["¿Qué documentos necesito para mi declaración 1040?", "Generalmente W-2, 1099, 1098, información de dependientes y recibos de gastos deducibles."]
    : ["What documents do I need for my 1040 return?", "Usually W-2, 1099, 1098, dependent information and receipts for deductible expenses."]);
  return <section className="faq section-pad" id="faq"><div><h2>{t.faq}</h2><Link className="text-link" href={`/${locale}/pricing`}>{t.pricing}<ArrowUpRight size={18} /></Link></div><div className="faq-list">{questions.map(([question, answer], i) => <div key={question} className={`faq-row ${open === i ? "is-open" : ""}`}><h3><button aria-expanded={open === i} aria-controls={`answer-${i}`} onClick={() => setOpen(open === i ? -1 : i)}>{question}{open === i ? <Minus size={20} /> : <Plus size={20} />}</button></h3><div id={`answer-${i}`} hidden={open !== i}><p>{answer}</p></div></div>)}</div></section>;
}
