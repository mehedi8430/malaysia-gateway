"use client";
import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { Language, LanguageContextValue } from "@/types";
import bnRaw from "@/locales/bn.json";
import enRaw from "@/locales/en.json";

const bn = bnRaw as Record<string, string>;
const en = enRaw as Record<string, string>;

const locales: Record<Language, Record<string, string>> = { bn, en };

const LanguageContext = createContext<LanguageContextValue>({
  lang: "bn",
  t: (key) => key,
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("bn");
  const dict = locales[lang];
  const t = (key: string) => dict[key] ?? key;
  const toggle = () => setLang((prev) => (prev === "bn" ? "en" : "bn"));
  return (
    <LanguageContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext };
export default LanguageContext;