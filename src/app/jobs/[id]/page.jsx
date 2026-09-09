"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import TrustBadge from "@/components/TrustBadge";
import { useLanguage } from "@/hooks/useLanguage";
import { JOBS } from "@/data/jobs";
import { COMPANIES } from "@/data/companies";

export default function JobDetailPage() {
  const { id } = useParams();
  const { t } = useLanguage();
  const job = JOBS.find((j) => j.id === id);
  if (!job) return <div className="p-10 text-center text-slate-500">{t("job_not_found")}</div>;
  const company = COMPANIES.find((c) => c.id === job.companyId) || {};
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <TrustBadge />
      <p className="mt-4 text-sm text-slate-500">{company.name} · {company.location}</p>
      <p className="mt-1 text-sm text-slate-500">{t("roc_number")}: {company.rocNo || t("roc_not_available")}</p>
      <h1 className="text-3xl font-black text-slate-800">{t(job.titleKey)}</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg bg-primary/10 p-3 text-center"><p className="text-xs text-slate-500">{t("salary")}</p><p className="font-bold">{job.salaryRange}</p></div>
        <div className="rounded-lg bg-primary/10 p-3 text-center"><p className="text-xs text-slate-500">{t("vacancies")}</p><p className="font-bold">{job.vacancies}</p></div>
        <div className="rounded-lg bg-primary/10 p-3 text-center"><p className="text-xs text-slate-500">{t("sector")}</p><p className="font-bold">{t(job.sectorKey)}</p></div>
      </div>
      <section className="mt-8">
        <h2 className="text-xl font-bold">{t("job_description")}</h2>
        <p className="mt-2 text-slate-600">{t("job_desc_" + job.id)}</p>
      </section>
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <Link href="/apply" className="rounded-full bg-gold px-6 py-3 text-center font-bold text-white hover:opacity-90">{t("apply")}</Link>
        <Link href="/track" className="rounded-full border-2 border-primary px-6 py-3 text-center font-bold text-primary">{t("track_status")}</Link>
      </div>
    </div>
  );
}