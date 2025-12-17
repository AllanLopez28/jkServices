// app/[locale]/layout.tsx
import type { ReactNode } from "react";
import { isLocale, type Locale } from "@/lib/locale";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }];
}

export default function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "es";

  return (
    <>
      <Navbar locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </>
  );
}
