"use client";

import { usePathname, useRouter } from "next/navigation";
import { LOCALES, type Locale } from "@/lib/locale";

export function LangSwitcher({ locale }: { locale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();

  const changeLocale = (next: Locale) => {
    if (next === locale) return;
    if (!pathname) return;

    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/") || "/");
  };

  return (
    <div className="flex items-center gap-2 text-xs font-medium">
      {LOCALES.map((item) => (
        <button
          key={item}
          onClick={() => changeLocale(item)}
          className={`rounded-full px-3 py-1 border text-xs ${
            item === locale
              ? "bg-brand.blue border-brand.blue text-white"
              : "border-slate-700 text-slate-300 hover:bg-slate-900"
          }`}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
