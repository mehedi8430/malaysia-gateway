"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import TrustBadge from "@/components/TrustBadge";
import ProgressStepper from "@/components/ProgressStepper";
import { useLanguage } from "@/hooks/useLanguage";
import { useTracking } from "@/hooks/useTracking";

export default function TrackPage() {
  const { t } = useLanguage();
  const { lookup } = useTracking();
  const [query, setQuery] = useState("");
  const [record, setRecord] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const rec = lookup(query);
    setRecord(rec);
    setNotFound(!rec);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <TrustBadge />
      <h1 className="mt-4 text-3xl font-black text-slate-800">{t("track_status")}</h1>
      <p className="mt-2 text-slate-600">{t("track_intro")}</p>

      <form onSubmit={submit} className="mt-6 flex flex-col sm:flex-row gap-3">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t("track_placeholder")} className="flex-1 rounded-full border border-slate-300 px-5 py-3 focus:outline-none focus:border-primary" />
        <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-white hover:opacity-90"><Search className="h-4 w-4" /> {t("track_now")}</button>
      </form>

      {notFound && <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{t("not_found")}</p>}

      {record && (
        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <p className="text-xs text-slate-500">{t("client_name")}</p>
              <p className="font-bold text-slate-800">{record.name}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-500">{t("tracking_id_label")}</p>
              <p className="font-bold text-primary">{record.id}</p>
            </div>
          </div>
          <ProgressStepper record={record} />
          <div className="mt-6 border-t border-slate-100 pt-4 text-center text-sm text-slate-500">
            {t("contact_office_for_update")}
          </div>
        </div>
      )}
    </div>
  );
}
