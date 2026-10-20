"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { animate, motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";

/** Marks [data-animate] elements with [data-inview] once; CSS does the motion. */
export function InViewObserver() {
  const pathname = usePathname();
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) { entry.target.setAttribute("data-inview", ""); observer.unobserve(entry.target); }
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll("[data-animate]:not([data-inview])").forEach(el => observer.observe(el));
    document.documentElement.classList.add("motion-ready");
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}

/** Counts "500+" up from 0 the first time it scrolls into view. Non-numeric values render as-is. */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : null;
  const suffix = match ? match[2] : "";
  useEffect(() => {
    const el = ref.current;
    if (!el || target === null || reduced || inView) return;
    el.textContent = `0${suffix}`;
  }, [target, suffix, reduced, inView]);
  useEffect(() => {
    const el = ref.current;
    if (!el || target === null || reduced || !inView) return;
    const controls = animate(0, target, { duration: 1.6, ease: [0.23, 1, 0.32, 1], onUpdate: v => { el.textContent = `${Math.round(v)}${suffix}`; } });
    return () => controls.stop();
  }, [inView, target, suffix, reduced]);
  return <div ref={ref} className={className}>{value}</div>;
}

/** The photo band background drifts slower than the page; the copy stays still. */
export function BandParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const transform = useTransform(scrollYProgress, [0, 1], ["translateY(-6%) scale(1.12)", "translateY(6%) scale(1.12)"]);
  return <motion.div ref={ref} className="photo-band-image" style={reduced ? undefined : { transform }} />;
}
