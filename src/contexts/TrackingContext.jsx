"use client";
import React, { createContext, useContext, useRef, useState } from "react";
import { TRACKING_STAGES } from "@/data/process-steps";
import { initialRecords } from "@/data/tracking";

const TrackingContext = createContext({
  records: [],
  lookup: () => null,
  addRecord: () => ({}),
  updateStage: () => ({}),
});

export function TrackingProvider({ children }) {
  const [records, setRecords] = useState(initialRecords);
  const recordsRef = useRef(initialRecords);

  const commit = (updater) => {
    const next = updater(recordsRef.current);
    recordsRef.current = next;
    setRecords(next);
  };

  const buildStages = () =>
    TRACKING_STAGES.map((key) => ({ id: key, status: "pending", date: null, note: "" }));

  const lookup = (query) => {
    if (!query) return null;
    const q = String(query).trim().toLowerCase();
    return (
      recordsRef.current.find(
        (r) =>
          r.id.toLowerCase() === q ||
          r.phone.toLowerCase() === q ||
          r.passport.toLowerCase() === q
      ) || null
    );
  };

  const addRecord = (data) => {
    const id = `MYVISA-2026-${String(recordsRef.current.length + 1).padStart(4, "0")}`;
    const today = new Date().toISOString().slice(0, 10);
    const stages = buildStages();
    stages[0] = { ...stages[0], status: "in-progress", date: today };
    const record = {
      id,
      name: data.name,
      phone: data.phone,
      passport: data.passport,
      companyId: data.companyId,
      currentStage: 0,
      appliedDate: today,
      stages,
    };
    commit((prev) => [...prev, record]);
    return record;
  };

  const updateStage = (recordId, newStageIndex) => {
    const idx = Math.max(0, Math.min(newStageIndex, TRACKING_STAGES.length - 1));
    commit((prev) =>
      prev.map((r) => {
        if (r.id !== recordId) return r;
        const today = new Date().toISOString().slice(0, 10);
        const stages = TRACKING_STAGES.map((key, i) => {
          let status = "pending";
          if (i < idx) status = "done";
          else if (i === idx) status = idx < TRACKING_STAGES.length - 1 ? "in-progress" : "done";
          const prevStage = r.stages[i] || {};
          return {
            id: key,
            status,
            date: prevStage.date || (i <= idx ? today : null),
            note: prevStage.note || "",
          };
        });
        return { ...r, currentStage: idx, stages };
      })
    );
  };

  return (
    <TrackingContext.Provider value={{ records, lookup, addRecord, updateStage }}>
      {children}
    </TrackingContext.Provider>
  );
}

export { TrackingContext };
export default TrackingContext;
