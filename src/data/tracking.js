import { TRACKING_STAGES } from "@/data/process-steps";

function buildStages() {
  return TRACKING_STAGES.map((key) => ({
    id: key,
    status: "pending",
    date: null,
    note: "",
  }));
}

function seedRecord(id, name, phone, passport, companyId, currentStage, appliedDate, notes) {
  const stages = buildStages();
  for (let i = 0; i <= currentStage; i++) {
    stages[i].status = i < currentStage ? "done" : "in-progress";
    stages[i].date = appliedDate;
    if (notes[i]) stages[i].note = notes[i];
  }
  return { id, name, phone, passport, companyId, currentStage, appliedDate, stages };
}

export const initialRecords = [
  seedRecord("MYVISA-2026-0001", "Karim Uddin", "01711111111", "A1234567", "c1", 3, "2026-01-15", { 1: "Medical report received", 3: "Submitted to Malaysia authority" }),
  seedRecord("MYVISA-2026-0002", "Rashida Begum", "01722222222", "B7654321", "c2", 5, "2025-11-20", { 5: "Flight booked for 2026-10-01" }),
  seedRecord("MYVISA-2026-0003", "Mohammad Hasan", "01733333333", "C9876543", "c3", 2, "2026-08-10", { 2: "Waiting for medical report" }),
];
