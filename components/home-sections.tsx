import Link from "next/link";
import { ArrowUpRight, Check, Clock, FileText, Globe, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { copy } from "@/lib/design-copy";
import type { Locale } from "@/lib/locale";
import { Reveal } from "./reveal";
import { ActionLink } from "./design";
import { BandParallax, CountUp } from "./motion";
export function Introduction({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <section className="intro section-pad" id="intro">
    <div className="intro-top"><Reveal><p className="section-note">{t.trust}</p><h2>{t.statement[0]}<br />{t.statement[1]}</h2></Reveal><Reveal delay={0.1}><p className="intro-description">{t.statementBody}</p><Link className="text-link" href={`/${locale}/about`}>{t.nav[1]}<ArrowUpRight size={19} /></Link></Reveal></div>
    <div className="stats">{["500+", "5+", locale === "es" ? "Ene—Abr" : "Jan—Apr"].map((value, i) => <Reveal key={value} delay={i * 0.08}><CountUp className={`stat-value ${i === 2 ? "stat-season" : ""}`} value={value} /><p>{t.stats[i]}</p></Reveal>)}</div>
  </section>;
}
export function PhotoBand({ locale }: { locale: Locale }) {
  return <section className="photo-band"><BandParallax /><div className="photo-band-copy" data-animate><span className="photo-mark">JK.</span><p className="lift">{locale === "es" ? "Detrás de cada número,\nhay una persona." : "Behind every number,\nthere’s a person."}</p><span>{copy[locale].languages}</span></div></section>;
}
export function AboutSection({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <section className="about section-pad" id="about"><div className="about-heading"><Reveal><p className="section-note">{t.aboutSub}</p><h2>{t.aboutTitle[0]}<br />{t.aboutTitle[1]}</h2><div className="about-symbol" aria-hidden="true" data-animate><div /><div /><span>JK.</span></div></Reveal></div>
    <div className="about-content"><Reveal><p className="about-lead">{t.aboutBody}</p></Reveal><Reveal className="belief"><span className="belief-icon"><Globe size={26} /></span><div><h3>{t.vision}</h3><p>{t.visionBody}</p></div></Reveal><Reveal className="belief"><span className="belief-icon"><ShieldCheck size={26} /></span><div><h3>{t.mission}</h3><p>{t.missionBody}</p></div></Reveal></div>
  </section>;
}
export function ProcessSection({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const icons = [MessageCircle, FileText, Check];
  return <section className="process section-pad"><Reveal className="section-heading"><h2>{t.process}</h2><p>{t.processSub}</p></Reveal><div className="process-grid" data-animate>{t.steps.map(([title, description], i) => { const Icon = icons[i]; return <Reveal key={title} className="process-step" delay={i * 0.08}><div className="step-art"><Icon /></div><h3>{title}</h3><p>{description}</p></Reveal>; })}</div></section>;
}
export function LocationSection({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <section className="location section-pad" id="contact"><Reveal className="section-heading"><div><p className="section-note">{t.locationSub}</p><h2>{t.location}</h2></div><p>{t.languages}<br />{t.place}</p></Reveal>
    <div className="location-grid"><div className="map-panel" data-animate><iframe title={t.place} src="https://maps.google.com/maps?q=Brentwood%20NY%2011717&t=&z=13&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><div className="map-label"><MapPin size={19} /><span>{t.mapNote}</span></div></div>
      <div className="location-info"><div className="address"><MapPin /><div><h3>{t.area}</h3><p>{t.confirm}</p><a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Brentwood%2C+NY+11717" target="_blank" rel="noreferrer">{t.directions}<ArrowUpRight size={18} /></a></div></div><div className="hours"><Clock /><div><h3>{t.hours}</h3><p>{t.time}</p></div></div><div className="contact-block"><h3>{t.contactDetails}</h3><p>{locale === "es" ? "Conversemos sobre el apoyo que necesitás." : "Let’s talk about the support you need."}</p><ActionLink href={`/${locale}/contact`}>{t.contact}</ActionLink></div></div>
    </div>
  </section>;
}
