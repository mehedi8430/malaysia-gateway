"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function FAQAccordion({ items }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={item.id} className="rounded-xl border border-slate-200 bg-white">
          <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-3 p-4 text-left font-semibold text-slate-800">
            <span>{t(item.qKey)}</span>
            <ChevronDown className={`h-5 w-5 shrink-0 transition-transform text-primary ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && <p className="px-4 pb-4 text-sm text-slate-600">{t(item.aKey)}</p>}
        </div>
      ))}
    </div>
  );
}