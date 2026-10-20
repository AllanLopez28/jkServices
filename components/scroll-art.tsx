"use client";

import { useRef, type ReactNode } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion, useInView } from "framer-motion";
import { ArrowUpRight, Check, FileCheck2, ShieldCheck } from "lucide-react";
import type { Locale } from "@/lib/locale";
import { Reveal } from "./reveal";

/** Only the decorative layer moves: the accompanying copy stays still. */
export function ParallaxPhoto({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const transform = useTransform(scrollYProgress, [0, 1], [
    "translateY(-3%) scale(1.12)", "translateY(3%) scale(1.06)",
  ]);
  return <div ref={ref} className="photo-motion-frame">
    <motion.div className="photo-band-image" style={{ transform: reduced ? "none" : transform }} />
    {children}
  </div>;
}

export function ClosingArt() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const transform = useTransform(scrollYProgress, [0, 1], [
    "rotate(-25deg) scale(0.92)", "rotate(20deg) scale(1)",
  ]);
  return <motion.div ref={ref} className="closing-object" aria-hidden="true"
    style={{ transform: reduced ? "none" : transform }}>
    <span /><span /><span /><ArrowUpRight />
  </motion.div>;
}

export function EditorialScene({ locale }: { locale: Locale }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const photoTransform = useTransform(scrollYProgress, [0, 1], [
    "translateY(-3%) scale(1.12)", "translateY(3%) scale(1.06)",
  ]);
  const badgeTransform = useTransform(scrollYProgress, [0, 1], [
    "translateY(20px) rotate(-6deg)", "translateY(-20px) rotate(3deg)",
  ]);
  const es = locale === "es";
  return <section ref={ref} className="editorial-section section-pad">
    <div className="editorial-visual">
      <motion.div className="editorial-photo" style={{ transform: reduced ? "none" : photoTransform }}>
        <Image src="/accounting-editorial.png" alt={es
          ? "Documentos, carpeta azul y calculadora sobre un escritorio iluminado."
          : "Documents, a blue folder and a calculator on a sunlit desk."}
          fill sizes="(max-width: 800px) 100vw, 55vw" />
      </motion.div>
      <motion.div className="editorial-stamp" aria-hidden="true"
        style={{ transform: reduced ? "none" : badgeTransform }}>
        <ShieldCheck size={30} /><span>JK.<small>{es ? "Cada detalle cuenta" : "Every detail matters"}</small></span>
      </motion.div>
    </div>
    <div className="editorial-copy">
      <Reveal><p className="section-note">{es ? "Un poco de orden. Mucha tranquilidad." : "A little order. A lot of peace of mind."}</p>
        <h2>{es ? "Todo empieza con claridad." : "It all starts with clarity."}</h2>
        <p className="editorial-description">{es
          ? "Detrás de cada documento hay una historia. Nos tomamos el tiempo de entender la tuya y darle a cada detalle la atención que merece."
          : "Behind every document is a story. We take the time to understand yours and give every detail the attention it deserves."}</p>
      </Reveal>
      <div className="editorial-notes">
        {[es ? "Tus documentos, en orden." : "Your documents, in order.",
          es ? "Tus opciones, más claras." : "Your options, made clear.",
          es ? "Tu próxima etapa, acompañada." : "Your next step, supported."].map((line, i) =>
          <Reveal key={line} delay={i * 0.05} className="editorial-note">
            <span className="editorial-note-number">0{i + 1}</span><p>{line}</p><Check size={18} />
          </Reveal>)}
      </div>
    </div>
  </section>;
}

/** Three lightweight, independently layered illustrations for the process. */
export function ProcessArt({ step }: { step: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.3 });
  return <div ref={ref} data-assembled={visible || undefined} className={`process-illustration process-illustration-${step}`} aria-hidden="true">
    <span className="process-orbit" />
    {step === 0 ? <>
      <div className="art-chat art-chat-back"><span /><span /></div>
      <div className="art-chat art-chat-front"><span /><span /><span className="chat-dots"><i /><i /><i /></span></div>
    </> : step === 1 ? <>
      <div className="art-document art-document-back" />
      <div className="art-document art-document-front"><FileCheck2 size={32} /><span /><span /><span /><b>JK.</b></div>
      <div className="art-lens"><Check size={24} /></div>
    </> : <>
      <div className="art-shield-back" />
      <div className="art-shield"><ShieldCheck size={92} strokeWidth={1} /></div>
      <span className="art-spark spark-one">+</span><span className="art-spark spark-two">+</span>
    </>}
    <span className="process-art-index">0{step + 1}</span>
  </div>;
}
