"use client";

import Link from "next/link";
import { useState } from "react";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/icon";
import { Logo } from "../Logo";

const NAV_ITEMS: [string, string][] = [
  ["Home", "/"],
  ["About Us", "/about-us"],
  ["Job Category", "/#jobs"],
  ["Process", "/#process"],
  ["Notice", "/#notice"],
  ["Contact", "/#contact"],
];

export default function HomeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 drop-shadow-lg">
      {/* 
        Applied clip-path polygon to achieve the angled bottom-right edge shape matching the image:
        polygon(0 0, 100% 0, 100% calc(100% - 16px), 0 100%)
      */}
      <div className="bg-[#06345e] pb-3 [clip-path:polygon(0_0,100%_0,100%_calc(100%-16px),0_100%)]">
        <div className="mx-auto flex h-19.5 items-center justify-between px-5 lg:px-10">
          <Link href="#home" className="shrink-0" onClick={() => setMenuOpen(false)}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-5 xl:gap-7 lg:flex">
            {NAV_ITEMS.map(([label, href]) => (
              <span key={label} className="py-7 text-white transition-colors">
                <Link
                  href={href}
                  className="group relative text-[14px] font-medium"
                >
                  {label}
                  <span className="absolute inset-x-0 -bottom-1.5 h-0.5 scale-x-0 bg-yellow-400 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </span>
            ))}
          </nav>

          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-linear-to-r from-yellow-300 to-yellow-500 px-6 py-3 text-sm font-bold text-[#092c51] shadow-md transition hover:scale-105 md:flex"
          >
            <PhoneIcon className="h-4 w-4" />
            Contact Us
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-lg p-2 text-white transition hover:opacity-80 lg:hidden"
          >
            {menuOpen ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/10 bg-[#06345e] px-5 pb-6 pt-6 lg:hidden -mt-6">
          <ul>
            {NAV_ITEMS.map(([label, href]) => (
              <li key={label} className="text-white transition-colors">
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="group relative block py-3 text-[15px] font-medium"
                >
                  {label}
                  <span className="absolute inset-x-0 bottom-2 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-yellow-300 to-yellow-500 px-6 py-2.5 text-sm font-bold text-[#092c51] shadow-md"
          >
            <PhoneIcon className="h-4 w-4" />
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}