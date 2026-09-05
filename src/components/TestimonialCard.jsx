"use client";
import React from "react";
import { Star, User } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function TestimonialCard({ testimonial }) {
  const { t } = useLanguage();
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex gap-1 text-gold">
        {Array.from({ length: testimonial.stars }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold" />)}
      </div>
      <p className="mt-3 text-slate-600 italic">“{t(testimonial.quoteKey)}”</p>
      <div className="mt-4 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-400"><User className="h-6 w-6" /></span>
        <div>
          <p className="font-bold text-slate-800">{t(testimonial.nameKey)}</p>
          <p className="text-xs text-slate-500">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
}