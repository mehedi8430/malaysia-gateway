"use client";
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";

export default function LanguageToggle() {
  const { lang, toggle } = useLanguage();
  const isBangla = lang === "bn";
  return (
    <button
      onClick={toggle}
      aria-label="Toggle language"
      className="flex items-center gap-1 rounded-full border border-primary px-2 py-1 text-xs font-semibold text-primary"
    >
      <span className={isBangla ? "text-gold" : "text-slate-400"}>বাং</span>
      <span className="h-4 w-0.5 bg-primary/30" />
      <span className={!isBangla ? "text-gold" : "text-slate-400"}>EN</span>
    </button>
  );
}
