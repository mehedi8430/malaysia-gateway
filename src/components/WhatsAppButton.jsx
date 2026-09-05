"use client";
import React from "react";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function WhatsAppButton() {
  const { t } = useLanguage();
  return (
    <a
      href="https://wa.me/8801712345678"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-lg hover:opacity-90"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">{t("whatsapp_us")}</span>
    </a>
  );
}
