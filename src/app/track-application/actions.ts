"use server";

import { buildDemoLookup, type LookupState } from "@/lib/tracking";

const BENGALI_DIGITS = "০১২৩৪৫৬৭৮৯";
const ARABIC_DIGITS = "٠١٢٣٤٥٦٧٨٩";

function normalizeDigits(value: string): string {
  return value
    .replace(/[০-৯]/g, (digit) => String(BENGALI_DIGITS.indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String(ARABIC_DIGITS.indexOf(digit)));
}

export async function lookupApplication(
  _prevState: LookupState | null,
  formData: FormData,
): Promise<LookupState> {
  const trackingId = normalizeDigits(
    String(formData.get("trackingId") ?? "").trim(),
  );
  const phone = normalizeDigits(String(formData.get("phone") ?? "").trim());

  if (!trackingId || !phone) {
    return { error: "ট্র্যাকিং আইডি এবং নিবন্ধিত মোবাইল নম্বর দুটোই দিন।" };
  }

  return buildDemoLookup(trackingId, phone);
}