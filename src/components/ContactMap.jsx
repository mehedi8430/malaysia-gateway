"use client";
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";

export default function ContactMap() {
  const { t } = useLanguage();
  return (
    <div className="rounded-xl overflow-hidden border border-slate-200">
      <div className="flex h-64 items-center justify-center bg-slate-100">
        <p className="px-6 text-center text-sm text-slate-500">{t("map_placeholder")}</p>
      </div>
    </div>
  );
}