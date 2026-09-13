"use client";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import type { LanguageContextValue } from "@/types";

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext);
}