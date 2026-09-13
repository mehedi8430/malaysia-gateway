import type en from "@/locales/en.json";

export type Language = "bn" | "en";
export type TranslationKey = keyof typeof en;

export type StageStatus = "pending" | "done" | "in-progress";

export interface Company {
  id: string;
  name: string;
  sectorKey: string;
  location: string;
  rocNo: string | null;
  totalPax: number;
}

export interface Job {
  id: string;
  companyId: string;
  titleKey: string;
  sectorKey: string;
  salaryRange: string;
  vacancies: number;
}

export interface Testimonial {
  id: string;
  nameKey: string;
  company: string;
  quoteKey: string;
  stars: number;
}

export interface FAQItem {
  id: string;
  qKey: string;
  aKey: string;
}

export interface DocumentItem {
  id: string;
  key: string;
}

export interface ProcessStep {
  key: string;
  durationKey: string;
}

export interface TrackingStage {
  id: string;
  status: StageStatus;
  date: string | null;
  note: string;
}

export interface TrackingRecord {
  id: string;
  name: string;
  phone: string;
  passport: string;
  companyId: string;
  currentStage: number;
  appliedDate: string;
  stages: TrackingStage[];
}

export type NewTrackingRecord = Pick<TrackingRecord, "name" | "phone" | "passport" | "companyId">;

export interface LanguageContextValue {
  lang: Language;
  t: (key: string) => string;
  toggle: () => void;
}

export interface TrackingContextValue {
  records: TrackingRecord[];
  lookup: (query: string) => TrackingRecord | null;
  addRecord: (data: NewTrackingRecord) => TrackingRecord;
  updateStage: (recordId: string, newStageIndex: number) => void;
}
