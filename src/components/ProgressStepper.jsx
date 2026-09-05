"use client";
import React from "react";
import { Check, Circle, Loader2 } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function ProgressStepper({ record }) {
  const { t } = useLanguage();
  return (
    <div className="mt-6">
      <div className="hidden md:flex items-start justify-between">
        {record.stages.map((stage, i) => (
          <div key={stage.id} className="flex-1 text-center">
            <StageIcon status={stage.status} />
            <p className={`mt-2 text-xs font-semibold px-1 ${stage.status === "pending" ? "text-slate-400" : "text-slate-700"}`}>{t(stage.id)}</p>
            <p className="text-[10px] text-slate-400">{stage.date || "-"}</p>
            {stage.note && <p className="text-[10px] text-gold italic mt-1 px-2">{stage.note}</p>}
          </div>
        ))}
      </div>

      <div className="md:hidden">
        {record.stages.map((stage, i) => (
          <div key={stage.id} className="relative flex gap-4 pb-6 last:pb-0">
            {i < record.stages.length - 1 && <span className="absolute left-4 top-10 h-[calc(100%-2.5rem)] w-0.5 bg-slate-200" />}
            <StageIcon status={stage.status} />
            <div className="pt-0.5">
              <p className={`font-semibold ${stage.status === "pending" ? "text-slate-400" : "text-slate-800"}`}>{t(stage.id)}</p>
              <p className="text-xs text-slate-500">{stage.date || "-"}</p>
              {stage.note && <p className="text-xs text-gold italic mt-1">{stage.note}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StageIcon({ status }) {
  if (status === "done") return <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white shrink-0"><Check className="h-4 w-4" /></span>;
  if (status === "in-progress") return <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white shrink-0"><Loader2 className="h-4 w-4 animate-spin" /></span>;
  return <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-400 shrink-0"><Circle className="h-4 w-4" /></span>;
}
