"use client";
import React from "react";
import TrustBadge from "@/components/TrustBadge";
import TestimonialCard from "@/components/TestimonialCard";
import { useLanguage } from "@/hooks/useLanguage";
import { TESTIMONIALS } from "@/data/testimonials";

export default function TestimonialsPage() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <TrustBadge />
      <h1 className="mt-4 text-3xl font-black text-slate-800">{t("testimonials")}</h1>
      <p className="mt-2 text-slate-600">{t("testimonials_intro")}</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {TESTIMONIALS.map((tm) => <TestimonialCard key={tm.id} testimonial={tm} />)}
      </div>
    </div>
  );
}