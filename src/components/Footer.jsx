"use client";
import React from "react";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-navy text-white mt-16">
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-bold mb-3">{t("agency_name")}</h3>
          <p className="text-sm text-slate-300 leading-relaxed">{t("footer_about")}</p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold px-3 py-1 text-xs font-semibold text-gold">
            {t("government_approved")}
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-3">{t("quick_links")}</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            {["/about", "/process", "/jobs", "/apply", "/track", "/contact"].map((href, i) => (
              <li key={href}><Link href={href} className="hover:text-white">{t(["about","process","jobs","apply","track_status","contact"][i])}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">{t("service_links")}</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link href="/documents" className="hover:text-white">{t("documents")}</Link></li>
            <li><Link href="/testimonials" className="hover:text-white">{t("testimonials")}</Link></li>
            <li><Link href="/faq" className="hover:text-white">{t("faq")}</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">{t("contact")}</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> {t("phone_placeholder")}</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> {t("address_placeholder")}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {t("agency_name")}. {t("copyright")}
      </div>
    </footer>
  );
}
