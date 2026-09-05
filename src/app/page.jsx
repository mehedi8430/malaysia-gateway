"use client";
import React from "react";
import Link from "next/link";
import { Users, Award } from "lucide-react";
import Hero from "@/components/Hero";
import TrustBadge from "@/components/TrustBadge";
import { useLanguage } from "@/hooks/useLanguage";
import { COMPANIES } from "@/data/companies";

export default function Home() {
  const { t } = useLanguage();
  return (
    <div>
      <Hero />
      <section className="mx-auto max-w-7xl px-4 py-6 flex flex-wrap items-center gap-4">
        <TrustBadge />
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Award className="h-5 w-5 text-gold" /> {t("years_experience")}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="text-2xl font-bold text-slate-800">{t("partner_companies")}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPANIES.map((c) => (
            <div key={c.id} className="rounded-xl border border-slate-200 bg-white p-4 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                <Users className="h-6 w-6" />
              </span>
              <div>
                <p className="font-semibold text-slate-800">{c.name}</p>
                <p className="text-xs text-slate-500">{t(c.sectorKey)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/jobs" className="inline-block rounded-full border-2 border-primary px-6 py-2.5 font-semibold text-primary hover:bg-primary hover:text-white">
            {t("view_all_jobs")}
          </Link>
        </div>
      </section>
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-800">{t("why_choose_us")}</h2>
          <p className="mt-3 max-w-2xl mx-auto text-slate-600">{t("why_choose_us_desc")}</p>
        </div>
      </section>
    </div>
  );
}