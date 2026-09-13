"use client";
import { useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";

export default function LangSync() {
  const { lang } = useLanguage();
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}