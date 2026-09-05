"use client";
import React, { useState } from "react";
import { RefreshCcw } from "lucide-react";
import TrustBadge from "@/components/TrustBadge";
import { useLanguage } from "@/hooks/useLanguage";
import { useTracking } from "@/hooks/useTracking";
import { TRACKING_STAGES } from "@/data/process-steps";

export default function AdminPage() {
  const { t } = useLanguage();
  const { records, updateStage } = useTracking();
  const [selectedId, setSelectedId] = useState("");
  const [targetStage, setTargetStage] = useState("");

  const selected = records.find((r) => r.id === selectedId) || null;
  const [msg, setMsg] = useState("");

  const doUpdate = () => {
    if (!selected || targetStage === "") return;
    updateStage(selected.id, Number(targetStage));
    setMsg(t("updated"));
    setTimeout(() => setMsg(""), 2500);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <div className="flex items-center gap-2">
        <TrustBadge />
        <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-600">{t("demo_only")}</span>
      </div>
      <h1 className="mt-4 text-3xl font-black text-slate-800">{t("admin_panel")}</h1>
      <p className="mt-2 text-slate-600">{t("admin_intro")}</p>

      <div className="mt-8 grid gap-4">
        <label className="block">
          <span className="mb-1 block text-sm font-medium">{t("select_client")}</span>
          <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2">
            <option value="">{t("select")}</option>
            {records.map((r) => <option key={r.id} value={r.id}>{r.id} — {r.name}</option>)}
          </select>
        </label>

        {selected && (
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">{t("current_stage")}: <strong className="text-slate-800">{t(TRACKING_STAGES[selected.currentStage])}</strong></p>
            <label className="mt-4 block">
              <span className="mb-1 block text-sm font-medium">{t("update_to_stage")}</span>
              <select value={targetStage} onChange={(e) => setTargetStage(e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2">
                <option value="">{t("select")}</option>
                {TRACKING_STAGES.map((s, i) => <option key={s} value={i}>{i + 1}. {t(s)}</option>)}
              </select>
            </label>
            <button onClick={doUpdate} className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-white hover:opacity-90">
              <RefreshCcw className="h-4 w-4" /> {t("update")}
            </button>
            {msg && <p className="mt-3 text-sm font-semibold text-green-600">{msg}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
