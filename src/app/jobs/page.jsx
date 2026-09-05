"use client";
import React from "react";
import TrustBadge from "@/components/TrustBadge";
import JobCard from "@/components/JobCard";
import { useLanguage } from "@/hooks/useLanguage";
import { JOBS } from "@/data/jobs";

export default function JobsPage() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <TrustBadge />
      <h1 className="mt-4 text-3xl font-black text-slate-800">{t("jobs")}</h1>
      <p className="mt-2 text-slate-600">{t("jobs_intro")}</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {JOBS.map((job) => <JobCard key={job.id} job={job} />)}
      </div>
    </div>
  );
}