// app/layout.tsx
import "./globals.css";
import "./motion-design.css";
import "./interior.css";
import "./motion-enhancements.css";
import type { ReactNode } from "react";
import { DM_Sans, Manrope } from "next/font/google";

export const dynamic = "force-static";

// Montserrat con varios pesos, incluyendo Black (900) y Bold (700)
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
export const metadata = {
  title: "JK Service Agency — Clarity, at every step.",
  description: "Contabilidad e impuestos en Brentwood, Nueva York. Atención personal en español e inglés."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Flag motion before first paint so scroll-reveal pre-states never flash in. */}
        <script dangerouslySetInnerHTML={{ __html: `if(!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("motion-ready")` }} />
      </head>
      <body
        className={`${dmSans.variable} ${manrope.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
