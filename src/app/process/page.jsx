"use client";
import React from "react";
import Link from "next/link";
import { FileText, Clock, CreditCard, CheckCircle2 } from "lucide-react";
import TrustBadge from "@/components/TrustBadge";
import { useLanguage } from "@/hooks/useLanguage";
import { PROCESS_STEPS } from "@/data/process-steps";

export default function ProcessPage() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <TrustBadge />
      <h1 className="mt-4 text-3xl font-black text-slate-800">{t("process")}</h1>
      <p className="mt-2 text-slate-600">{t("process_intro")}</p>

      <ol className="mt-10 space-y-0">
        {PROCESS_STEPS.map((step, i) => (
          <li key={step.key} className="relative flex gap-4 pb-8 last:pb-0">
            {i < PROCESS_STEPS.length - 1 && (
              <span className="absolute left-5 top-12 h-[calc(100%-3rem)] w-0.5 bg-slate-200" />
            )}
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold">
              {i + 1}
            </span>
            <div className="pt-1">
              <h3 className="font-semibold text-slate-800">{t(step.key)}</h3>
              <p className="mt-1 text-sm text-slate-600">{t("process_step_desc_" + (i + 1))}</p>
              <p className="mt-1 inline-flex items-center gap-1 text-xs text-slate-500">
                <Clock className="h-3.5 w-3.5" /> {t(step.durationKey)}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <section className="mt-12 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <FileText className="h-7 w-7 text-primary" />
          <h3 className="mt-3 font-bold">{t("required_docs")}</h3>
          <p className="mt-1 text-sm text-slate-600">{t("required_docs_desc")}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <Clock className="h-7 w-7 text-primary" />
          <h3 className="mt-3 font-bold">{t("timeline")}</h3>
          <p className="mt-1 text-sm text-slate-600">{t("timeline_desc")}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <CreditCard className="h-7 w-7 text-primary" />
          <h3 className="mt-3 font-bold">{t("fees")}</h3>
          <p className="mt-1 text-sm text-slate-600">{t("fees_desc")}</p>
        </div>
      </section>

      <div className="mt-10 text-center">
        <Link href="/apply" className="rounded-full bg-gold px-6 py-3 font-bold text-white hover:opacity-90">
          {t("apply")}
        </Link>
      </div>
    </div>
  );
}
