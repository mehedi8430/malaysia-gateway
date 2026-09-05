"use client";
import React from "react";
import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";
import TrustBadge from "@/components/TrustBadge";
import ContactMap from "@/components/ContactMap";
import { useLanguage } from "@/hooks/useLanguage";

export default function ContactPage() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <TrustBadge />
      <h1 className="mt-4 text-3xl font-black text-slate-800">{t("contact")}</h1>
      <p className="mt-2 text-slate-600">{t("contact_intro")}</p>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"><Phone className="h-5 w-5 text-primary" /><span>{t("phone_placeholder")}</span></div>
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"><Mail className="h-5 w-5 text-primary" /><span>{t("email_placeholder")}</span></div>
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"><MapPin className="h-5 w-5 text-primary" /><span>{t("address_placeholder")}</span></div>
          <a href="https://wa.me/8801712345678" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-bold text-white hover:opacity-90"><MessageCircle className="h-5 w-5" /> {t("whatsapp_us")}</a>
        </div>
        <ContactMap />
      </div>
    </div>
  );
}