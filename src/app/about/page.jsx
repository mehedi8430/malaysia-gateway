"use client";
import React from "react";
import { Award, ShieldCheck, Users } from "lucide-react";
import TrustBadge from "@/components/TrustBadge";
import { useLanguage } from "@/hooks/useLanguage";

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <TrustBadge />
      <h1 className="mt-4 text-3xl font-black text-slate-800">{t("about")}</h1>
      <p className="mt-4 text-slate-600 leading-relaxed">{t("about_mission")}</p>

      <div className="mt-6 flex items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-white p-16 text-center text-slate-400">
        <span className="text-sm">{t("license_cert_placeholder")}</span>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-center">
          <ShieldCheck className="mx-auto h-8 w-8 text-gold" />
          <h3 className="mt-3 font-bold">{t("gov_approved_heading")}</h3>
          <p className="mt-1 text-sm text-slate-600">{t("gov_approved_desc")}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-center">
          <Award className="mx-auto h-8 w-8 text-gold" />
          <h3 className="mt-3 font-bold">{t("experience_heading")}</h3>
          <p className="mt-1 text-sm text-slate-600">{t("experience_desc")}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-center">
          <Users className="mx-auto h-8 w-8 text-gold" />
          <h3 className="mt-3 font-bold">{t("team_heading")}</h3>
          <p className="mt-1 text-sm text-slate-600">{t("team_desc")}</p>
        </div>
      </div>
    </div>
  );
}
