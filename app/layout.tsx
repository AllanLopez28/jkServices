// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import { Montserrat } from "next/font/google";

export const dynamic = "force-static";

// Montserrat con varios pesos, incluyendo Black (900) y Bold (700)
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-montserrat"
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} font-sans bg-brand-background text-brand-text`}
      >
        {children}
      </body>
    </html>
  );
}
