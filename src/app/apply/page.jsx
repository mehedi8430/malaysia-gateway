"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import TrustBadge from "@/components/TrustBadge";
import { useLanguage } from "@/hooks/useLanguage";
import { useTracking } from "@/hooks/useTracking";
import { COMPANIES } from "@/data/companies";

const field = "w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:border-primary";

export default function ApplyPage() {
  const { t } = useLanguage();
  const { addRecord } = useTracking();
  const [form, setForm] = useState({ name: "", phone: "", passport: "", age: "", education: "", experience: "", companyId: "" });
  const [trackingId, setTrackingId] = useState(null);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const rec = addRecord({ name: form.name, phone: form.phone, passport: form.passport, companyId: form.companyId });
    setTrackingId(rec.id);
  };

  if (trackingId) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16 text-center">
        <CheckCircle2 className="mx-auto h-16 w-16 text-green-600" />
        <h1 className="mt-4 text-2xl font-black text-slate-800">{t("application_submitted")}</h1>
        <p className="mt-2 text-slate-600">{t("tracking_id_label")}</p>
        <div className="mt-4 inline-block rounded-xl bg-primary/10 px-8 py-4 text-2xl font-black text-primary">{trackingId}</div>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
          <Link href="/track" className="rounded-full bg-gold px-6 py-3 font-bold text-white">{t("track_status")}</Link>
          <button onClick={() => { setForm({ name: "", phone: "", passport: "", age: "", education: "", experience: "", companyId: "" }); setTrackingId(null); }} className="rounded-full border-2 border-primary px-6 py-3 font-bold text-primary">{t("submit_another")}</button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <TrustBadge />
      <h1 className="mt-4 text-3xl font-black text-slate-800">{t("apply")}</h1>
      <p className="mt-2 text-slate-600">{t("apply_intro")}</p>
      <form onSubmit={submit} className="mt-8 grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-2"><span className="mb-1 block text-sm font-medium">{t("name")}</span><input className={field} value={form.name} onChange={set("name")} required /></label>
        <label className="block"><span className="mb-1 block text-sm font-medium">{t("phone")}</span><input className={field} value={form.phone} onChange={set("phone")} required /></label>
        <label className="block"><span className="mb-1 block text-sm font-medium">{t("nid_passport")}</span><input className={field} value={form.passport} onChange={set("passport")} required /></label>
        <label className="block"><span className="mb-1 block text-sm font-medium">{t("age")}</span><input type="number" className={field} value={form.age} onChange={set("age")} /></label>
        <label className="block"><span className="mb-1 block text-sm font-medium">{t("education")}</span><select className={field} value={form.education} onChange={set("education")}><option value="">{t("select")}</option><option value="hsc">{t("edu_hsc")}</option><option value="degree">{t("edu_degree")}</option><option value="diploma">{t("edu_diploma")}</option></select></label>
        <label className="block sm:col-span-2"><span className="mb-1 block text-sm font-medium">{t("experience")}</span><textarea className={field} value={form.experience} onChange={set("experience")} rows={3} /></label>
        <label className="block sm:col-span-2"><span className="mb-1 block text-sm font-medium">{t("preferred_company")}</span><select className={field} value={form.companyId} onChange={set("companyId")} required><option value="">{t("select")}</option>{COMPANIES.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}</select></label>
        <div className="sm:col-span-2">
          <button type="submit" className="w-full rounded-full bg-gold px-6 py-3 font-bold text-white hover:opacity-90">{t("submit")}</button>
        </div>
      </form>
    </div>
  );
}
