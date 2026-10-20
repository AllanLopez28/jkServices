"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, FileText } from "lucide-react";
import type { Locale } from "@/lib/locale";
import { copy, featuredServices } from "@/lib/design-copy";
import { Reveal } from "./reveal";
export function ServiceGrid({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const services = featuredServices[locale];
  const service = services[active];
  return <section className="services section-pad" id="services">
    <Reveal className="section-heading"><h2>{t.services}</h2><p>{t.servicesSub}</p></Reveal>
    <div className="service-layout">
      <div className="service-list"><p className="service-list-label">{t.serviceLabel}</p>
        {services.map((item, i) => <button key={item.code} className={`service-option ${active === i ? "active" : ""}`} onClick={() => setActive(i)} aria-expanded={active === i} aria-controls="service-detail"><span><strong>{item.title}</strong><small>{item.short}</small></span><span className="service-option-arrow"><ArrowUpRight size={23} /></span></button>)}
        <Link href={`/${locale}/services`} className="text-link all-services">{t.allServices}<ArrowRight size={19} /></Link>
      </div>
      <div className="service-detail" id="service-detail" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}><motion.div key={active} initial={{ opacity: 0, y: reduced ? 0 : 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
          <div className={`service-art art-${active}`} aria-hidden="true"><div className="service-orbit" /><div className="service-sheet"><div className="service-sheet-top"><span>JK.</span><FileText size={23} /></div><span className="service-code">{service.code}</span><div className="sheet-rule" /><p>{service.short}</p><div className="sheet-fields"><span /><span /><span /></div><span className="service-seal"><Check size={25} /></span></div><span className="service-art-caption">JK Service Agency</span></div>
          <div className="service-detail-copy"><h3>{service.title}</h3><p>{service.body}</p><div className="service-tags">{service.tags.map(tag => <span key={tag}><Check size={14} />{tag}</span>)}</div><Link href={`/${locale}/contact`} className="text-link">{t.serviceAction}<ArrowUpRight size={19} /></Link></div>
        </motion.div></AnimatePresence>
      </div>
    </div>
  </section>;
}
