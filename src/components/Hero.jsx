"use client";
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="bg-gradient-to-br from-primary-dark to-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
        <h1 className="max-w-3xl text-3xl sm:text-5xl font-black leading-tight">
          {t("hero_title")}
        </h1>
        <p className="mt-4 max-w-2xl text-slate-100 text-base sm:text-lg">
          {t("hero_subtitle")}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link href="/apply" className="rounded-full bg-gold px-6 py-3 text-center font-bold text-white hover:opacity-90">
            {t("apply")}
          </Link>
          <Link href="/track" className="rounded-full bg-white px-6 py-3 text-center font-bold text-primary hover:opacity-90">
            {t("track_status")}
          </Link>
        </div>
      </div>
    </section>
  );
}