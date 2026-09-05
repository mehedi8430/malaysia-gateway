"use client";
import React from "react";
import Link from "next/link";
import { Building2, Wallet, Users } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { COMPANIES } from "@/data/companies";

export default function JobCard({ job }) {
  const { t } = useLanguage();
  const company = COMPANIES.find((c) => c.id === job.companyId) || {};
  return (
    <Link href={`/jobs/${job.id}`} className="block rounded-xl border border-slate-200 bg-white p-5 hover:border-primary hover:shadow transition">
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Building2 className="h-4 w-4" /> {company.name}
      </div>
      <h3 className="mt-2 font-bold text-slate-800">{t(job.titleKey)}</h3>
      <p className="text-xs text-slate-500">{t(job.sectorKey)}</p>
      <div className="mt-4 space-y-1.5 text-sm">
        <p className="flex items-center gap-2 text-slate-600"><Wallet className="h-4 w-4 text-primary" /> {job.salaryRange}</p>
        <p className="flex items-center gap-2 text-slate-600"><Users className="h-4 w-4 text-primary" /> {t("vacancies")}: {job.vacancies}</p>
      </div>
    </Link>
  );
}