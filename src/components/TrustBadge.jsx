import React from "react";
import { ShieldCheck } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function TrustBadge() {
  const { t } = useLanguage();
  return (
    <div className="inline-flex items-center gap-2 rounded-full border-2 border-gold bg-gold/10 px-3 py-1.5 text-sm font-semibold text-gold">
      <ShieldCheck className="h-5 w-5" />
      <span>{t("government_approved")}</span>
      <span className="text-slate-500 font-normal">· {t("license_placeholder")}</span>
    </div>
  );
}
