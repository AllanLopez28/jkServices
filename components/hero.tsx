"use client";
import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import type { Locale } from "@/lib/locale";
import { copy } from "@/lib/design-copy";
import { ActionLink } from "./design";
export function Hero({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: root, offset: ["start start", "end start"] });
  const folderY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const folderRotate = useTransform(scrollYProgress, [0, 1], [-7, 1]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateY = useSpring(mouseX, { stiffness: 100, damping: 18 });
  const rotateX = useSpring(mouseY, { stiffness: 100, damping: 18 });
  return <section ref={root} className="hero" id="home">
    <div className="hero-copy">
      <p className="hero-intro">{t.intro}</p>
      <h1>{t.hero.map(line => <span className="line-mask" key={line}><span>{line}</span></span>)}</h1>
      <p className="hero-description">{t.heroSub}</p>
      <ActionLink href="#services">{t.explore}</ActionLink>
    </div>
    <div className="scene" aria-label={t.paperTitle} onPointerMove={event => {
      if (reduced || event.pointerType !== "mouse") return;
      const rect = event.currentTarget.getBoundingClientRect();
      mouseX.set((event.clientX - rect.left - rect.width / 2) / 40);
      mouseY.set(-(event.clientY - rect.top - rect.height / 2) / 45);
    }} onPointerLeave={() => { mouseX.set(0); mouseY.set(0); }}>
      <div className="scene-orbit orbit-one" /><div className="scene-orbit orbit-two" />
      <motion.div className="scene-inner" style={reduced ? {} : { rotateX, rotateY }}>
        <motion.div className="folder-stack" style={reduced ? {} : { y: folderY, rotate: folderRotate }}>
          <div className="folder-back"><span>JK</span></div><div className="paper paper-back" />
          <div className="paper paper-main">
            <div className="paper-head"><span className="paper-logo">JK.</span><span>{t.languages}</span></div>
            <p>{t.paperSub}</p><strong>{t.paperTitle}</strong>
            <div className="paper-checks">{t.paper.map(item => <div key={item}><span className="check-ring"><Check size={14} /></span><span>{item}</span></div>)}</div>
            <div className="paper-sign">JK Service Agency<span><ShieldCheck size={20} /></span></div>
          </div>
          <div className="folder-front"><span>Accounting<br />&amp; tax services</span><ArrowUpRight size={36} /></div>
        </motion.div>
        <motion.div className="scene-tag" animate={reduced ? {} : { y: [0, -9, 0] }} transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}>
          <span className="tag-check"><Check size={19} /></span><div><strong>{t.review}</strong><span>{t.reviewSub}</span></div>
        </motion.div>
      </motion.div>
      <div className="scene-caption"><span className="dot" />{t.languages}<span className="scene-caption-line" />{t.place}</div>
    </div>
    <div className="hero-bottom"><span>{t.place}<span className="hero-languages"> / {t.languages}</span></span><a href="#intro">{t.scroll}<span className="scroll-circle"><ArrowDown size={16} /></span></a></div>
  </section>;
}
