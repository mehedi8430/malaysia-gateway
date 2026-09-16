export type ProcessStep = {
  name: string;
  fee: string;
};

export type StepStatus = "সম্পন্ন" | "চলমান" | "অপেক্ষমাণ";

export type LookupSuccess = {
  trackingId: string;
  phone: string;
  steps: StepStatus[];
};

export type LookupState = LookupSuccess | { error: string };

export const PROCESS_STEPS: ProcessStep[] = [
  { name: "অনলাইন নিবন্ধন", fee: "৳৫০,০০০" },
  { name: "নথিপত্র জমা", fee: "" },
  { name: "পাসপোর্ট ভেরিফিকেশন", fee: "" },
  { name: "TTC ট্রেনিং", fee: "" },
  { name: "মেডিকেল ফিটনেস", fee: "" },
  { name: "BMET নিবন্ধন", fee: "" },
  { name: "পুলিশ ক্লিয়ারেন্স", fee: "" },
  { name: "কোম্পানি আবেদন (Malaysia)", fee: "৳১,৫০,০০০" },
  { name: "ডকুমেন্টস সাবমিশন", fee: "" },
  { name: "অফার লেটার", fee: "" },
  { name: "এপ্লাইড ফর ভিসা", fee: "" },
  { name: "ভিসা প্রোসেসিং", fee: "" },
  { name: "ভিসা এরাইভাল", fee: "৳৫,০০,০০০" },
  { name: "BIOMETRIC Finger Print Registration", fee: "" },
  { name: "Ticketing", fee: "" },
];

export const STATUS_GUIDE = [
  { label: "সম্পন্ন", description: "সবুজ চিহ্নে দেখাবে", color: "bg-emerald-600" },
  { label: "চলমান", description: "অফিসে প্রক্রিয়াধীন", color: "bg-amber-500" },
  { label: "অপেক্ষমাণ", description: "পরবর্তী কাজ বাকি", color: "bg-slate-300" },
];

export function buildDemoLookup(
  trackingId: string,
  phone: string,
): LookupSuccess {
  return {
    trackingId,
    phone,
    steps: PROCESS_STEPS.map((_, index) =>
      index < 2 ? "সম্পন্ন" : index === 2 ? "চলমান" : "অপেক্ষমাণ",
    ),
  };
}