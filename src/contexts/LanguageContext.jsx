"use client";
import React, { createContext, useContext, useState } from "react";
import bn from "@/locales/bn.json";
import en from "@/locales/en.json";

const locales = { bn, en };
const LanguageContext = createContext({ lang: "bn", t: (k) => bn[k] ?? k, toggle: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("bn");
  const dict = locales[lang] ?? bn;
  const t = (key) => dict[key] ?? key;
  const toggle = () => setLang((prev) => (prev === "bn" ? "en" : "bn"));
  return (
    <LanguageContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext };
export default LanguageContext;
