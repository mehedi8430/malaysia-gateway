"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, LayoutDashboard } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import LanguageToggle from "@/components/LanguageToggle";

const LINKS = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "process", href: "/process" },
  { key: "jobs", href: "/jobs" },
  { key: "documents", href: "/documents" },
  { key: "testimonials", href: "/testimonials" },
  { key: "faq", href: "/faq" },
  { key: "contact", href: "/contact" },
];

export default function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded bg-primary text-white font-black text-lg">M</span>
          <span className="font-bold text-slate-800 leading-tight">
            <span className="block">{t("agency_name_short")}</span>
            <span className="block text-[11px] font-medium text-gold">{t("tagline_short")}</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-slate-600">
          {LINKS.map((l) => (
            <Link key={l.key} href={l.href} className="hover:text-primary">
              {t(l.key)}
            </Link>
          ))}
          <Link href="/admin" className="flex items-center gap-1 hover:text-primary">
            <LayoutDashboard className="h-4 w-4" /> {t("admin")}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <Link
            href="/track"
            className="hidden sm:inline-flex items-center rounded-full bg-gold px-4 py-2 text-sm font-bold text-white"
          >
            {t("track_status")}
          </Link>
          <button className="lg:hidden p-2" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-slate-200 bg-white px-4 py-3 flex flex-col gap-3 text-sm font-medium text-slate-700">
          {LINKS.map((l) => (
            <Link key={l.key} href={l.href} onClick={() => setOpen(false)} className="hover:text-primary">
              {t(l.key)}
            </Link>
          ))}
          <Link href="/admin" onClick={() => setOpen(false)} className="hover:text-primary">
            {t("admin")}
          </Link>
          <Link href="/track" onClick={() => setOpen(false)} className="rounded-full bg-gold px-4 py-2 text-center font-bold text-white">
            {t("track_status")}
          </Link>
        </nav>
      )}
    </header>
  );
}
