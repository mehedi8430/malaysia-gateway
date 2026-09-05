"use client";
import React from "react";
import TrustBadge from "@/components/TrustBadge";
import FAQAccordion from "@/components/FAQAccordion";
import { useLanguage } from "@/hooks/useLanguage";
import { FAQ_ITEMS } from "@/data/faq";

export default function FAQPage() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <TrustBadge />
      <h1 className="mt-4 text-3xl font-black text-slate-800">{t("faq")}</h1>
      <div className="mt-8"><FAQAccordion items={FAQ_ITEMS} /></div>
    </div>
  );
}