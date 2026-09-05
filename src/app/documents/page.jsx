"use client";
import React from "react";
import { Printer, FileText } from "lucide-react";
import TrustBadge from "@/components/TrustBadge";
import { useLanguage } from "@/hooks/useLanguage";
import { DOCUMENTS } from "@/data/documents";

export default function DocumentsPage() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <TrustBadge />
      <h1 className="mt-4 text-3xl font-black text-slate-800">{t("documents")}</h1>
      <p className="mt-2 text-slate-600">{t("documents_intro")}</p>
      <div className="mt-6 flex justify-end">
        <button onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-4 py-2 text-sm font-bold text-primary"><Printer className="h-4 w-4" /> {t("print")}</button>
      </div>
      <ul className="mt-4 divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
        {DOCUMENTS.map((d, i) => (
          <li key={d.id} className="flex items-center gap-3 p-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary"><FileText className="h-4 w-4" /></span>
            <span className="text-sm text-slate-700">{i + 1}. {t(d.key)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}