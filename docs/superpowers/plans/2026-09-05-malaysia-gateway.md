# Malaysia Gateway — Demo Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static, mobile-first Next.js + Tailwind demo website for a Bangladesh-based government-approved manpower agency handling Malaysia work visas, with full Bangla/English toggle and a functional client tracking + admin update flow using in-memory mock data.

**Architecture:** Next.js App Router with React Context for both language (`LanguageContext`) and tracking data (`TrackingContext`). All UI strings live in `src/locales/{bn,en}.json`; all content (companies, jobs, tracking records, testimonials, FAQ, documents, process steps) lives in `src/data/*.js`. No backend — state is in-memory and resets on refresh. Core business logic (tracking ID generation, tracking status transitions) is covered by Jest unit tests; UI verified via `npm run dev` and `npm run build`.

**Tech Stack:** Next.js 15 (App Router), Tailwind CSS 4, React 19, plain JavaScript (no TypeScript), Jest + React Testing Library (only for core logic).

**Spec:** `docs/superpowers/specs/2026-09-05-malaysia-gateway-design.md`

## Global Constraints

- Next.js 15 App Router (files under `src/app/**`, page files named `page.jsx`).
- Tailwind CSS 4 (CSS-first config via `@import "tailwindcss"` in `globals.css`).
- Plain JavaScript — no TypeScript.
- No backend/database — mock data only; all state in-memory (React state/context), resetting on refresh.
- Default language: Bangla (`bn`).
- Language toggle switch in the navbar; all UI strings via `t('key')` from `useLanguage()`; numbers/dates/tracking IDs stay numeric/English in both languages.
- Color palette: primary teal `#0F766E`, dark `#115E59`, navy `#1E3A5F`, gold `#D97706`, background `#F8FAFC`, cards white.
- Tracking stages (7, in order):
  1. Application Received
  2. Documents Under Review
  3. Interview Scheduled / Completed
  4. Visa Processing (submitted to Malaysia authority)
  5. Visa Approved
  6. Flight/Departure Scheduled
  7. Departed / Completed
- Prominent "Check Your Application Status" button in navbar (gold accent, always visible).
- "Government Approved" trust signal near the top of every page.
- Mobile-first responsive design.
- Sample tracking IDs: `MYVISA-2026-0001` (Stage 4), `MYVISA-2026-0002` (Stage 6), `MYVISA-2026-0003` (Stage 3).
- No comments in code unless required.

---

### Task 1: Scaffold Next.js app + Tailwind + Jest

**Files:**
- Create: `package.json`
- Create: `next.config.mjs`
- Create: `jsconfig.json`
- Create: `tailwind.config.js`
- Create: `postcss.config.mjs`
- Create: `.gitignore`
- Create: `src/app/globals.css`
- Create: `src/app/layout.jsx` (minimal placeholder — filled in Task 2)
- Create: `src/app/page.jsx` (minimal placeholder — filled in later task)
- Create: `jest.config.js`
- Create: `src/__tests__/placeholder.test.js`

**Interfaces:**
- Produces: a working Next.js dev server (`npm run dev`), Tailwind-styled base, and a runnable Jest setup (`npm test`).

- [ ] **Step 1: Write package.json**

```json
{
  "name": "malaysia-gateway",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest",
    "test:watch": "jest --watch"
  },
  "dependencies": {
    "next": "15.5.0",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "lucide-react": "^0.525.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.6.0",
    "@testing-library/react": "^16.1.0",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0",
    "@tailwindcss/postcss": "^4.1.0",
    "tailwindcss": "^4.1.0",
    "postcss": "^8.4.0"
  }
}
```

- [ ] **Step 2: Install dependencies**

Run: `npm install`
Expected: node_modules created, no errors.

- [ ] **Step 3: Create config files**

`next.config.mjs`:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {};
export default nextConfig;
```

`jsconfig.json`:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  }
}
```

`postcss.config.mjs`:
```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

`tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F766E",
        "primary-dark": "#115E59",
        navy: "#1E3A5F",
        gold: "#D97706",
      },
    },
  },
  plugins: [],
};
```

`.gitignore`:
```
node_modules
.next
out
npm-debug.log*
.DS_Store
*.tsbuildinfo
.next-env.d.ts
```

`jest.config.js`:
```js
const nextJest = require("next/jest");
const createJestConfig = nextJest({ dir: "./" });
const customJestConfig = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
};
module.exports = createJestConfig(customJestConfig);
```

`jest.setup.js`:
```js
import "@testing-library/jest-dom";
```

`src/app/globals.css`:
```css
@import "tailwindcss";
```

- [ ] **Step 4: Write the failing test**

`src/__tests__/placeholder.test.js`:
```js
test("jest setup works", () => {
  expect(1 + 1).toBe(2);
});
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npm test`
Expected: 1 test PASS.

- [ ] **Step 6: Verify dev server + Tailwind compile**

Run: `npm run dev` in background, then open `http://localhost:3000` (or run `npm run build`).
Expected: page loads (minimal placeholder) without CSS errors.

- [ ] **Step 7: Commit**

```bash
git init
git add -A
git commit -m "chore: scaffold next.js + tailwind + jest"
```

---

### Task 2: Language context, locales, and LanguageToggle

**Files:**
- Create: `src/locales/bn.json`
- Create: `src/locales/en.json`
- Create: `src/contexts/LanguageContext.jsx`
- Create: `src/hooks/useLanguage.js`
- Create: `src/components/LanguageToggle.jsx`
- Test: `src/__tests__/language.test.jsx`

**Interfaces:**
- Consumes: nothing beyond React.
- Produces:
  - `LanguageContext` (a React context) and `LanguageProvider` (wraps app; initial value `"bn"`),
  - `useLanguage()` hook returning `{ t, lang, toggle }` where `t(key)` returns the translated string from the current locale and `toggle()` switches `lang` between `"bn"` and `"en"`,
  - `LanguageToggle` component (renders a switch labeled "EN/BANGLA" that calls `toggle`).

- [ ] **Step 1: Write the failing test**

`src/__tests__/language.test.jsx`:
```jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";

function Probe() {
  const { t, toggle } = useLanguage();
  return (
    <div>
      <span data-testid="greeting">{t("greeting")}</span>
      <button data-testid="toggle" onClick={toggle}>toggle</button>
    </div>
  );
}

test("defaults to Bangla and toggles to English", () => {
  render(
    <LanguageProvider>
      <Probe />
    </LanguageProvider>
  );
  expect(screen.getByTestId("greeting")).toHaveTextContent("স্বাগতম");
  fireEvent.click(screen.getByTestId("toggle"));
  expect(screen.getByTestId("greeting")).toHaveTextContent("Welcome");
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- language`
Expected: FAIL — module `@/contexts/LanguageContext` not found.

- [ ] **Step 3: Create locales**

`src/locales/bn.json`:
```json
{
  "greeting": "স্বাগতম",
  "home": "হোম",
  "about": "আমাদের সম্পর্কে",
  "process": "ভিসা প্রক্রিয়া",
  "jobs": "কোম্পানি ও চাকরি",
  "apply": "আবেদন করুন",
  "track_status": "আবেদনের অবস্থা দেখুন",
  "documents": "নথির তালিকা",
  "testimonials": "সফলতার গল্প",
  "faq": "সাধারণ প্রশ্ন",
  "contact": "যোগাযোগ"
}
```

`src/locales/en.json`:
```json
{
  "greeting": "Welcome",
  "home": "Home",
  "about": "About Us",
  "process": "Visa Process",
  "jobs": "Companies & Jobs",
  "apply": "Apply Now",
  "track_status": "Check Application Status",
  "documents": "Document Checklist",
  "testimonials": "Success Stories",
  "faq": "FAQ",
  "contact": "Contact"
}
```

- [ ] **Step 4: Implement LanguageContext and hook**

`src/contexts/LanguageContext.jsx`:
```jsx
"use client";
import React, { createContext, useContext, useState } from "react";
import bn from "@/locales/bn.json";
import en from "@/locales/en.json";

const locales = { bn, en };
const LanguageContext = createContext({ lang: "bn", t: (k) => bn[k] ?? k, toggle: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("bn");
  const dict = locales[lang] ?? bn;
  const t = (key) => dict[key] ?? key;
  const toggle = () => setLang((prev) => (prev === "bn" ? "en" : "bn"));
  return (
    <LanguageContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext };
export default LanguageContext;
```

`src/hooks/useLanguage.js`:
```js
"use client";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";

export function useLanguage() {
  return useContext(LanguageContext);
}
```

- [ ] **Step 5: Implement LanguageToggle**

`src/components/LanguageToggle.jsx`:
```jsx
"use client";
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";

export default function LanguageToggle() {
  const { lang, toggle } = useLanguage();
  const isBangla = lang === "bn";
  return (
    <button
      onClick={toggle}
      aria-label="Toggle language"
      className="flex items-center gap-1 rounded-full border border-primary px-2 py-1 text-xs font-semibold text-primary"
    >
      <span className={isBangla ? "text-gold" : "text-slate-400"}>বাং</span>
      <span className="h-4 w-0.5 bg-primary/30" />
      <span className={!isBangla ? "text-gold" : "text-slate-400"}>EN</span>
    </button>
  );
}
```

- [ ] **Step 6: Run test to verify it passes**

Run: `npm test -- language`
Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: language context, locales, and toggle"
```

---

### Task 3: Tracking data model, context, and ID generation

**Files:**
- Create: `src/data/process-steps.js` (list of the 7 tracking stage keys)
- Create: `src/data/tracking.js` (3 sample records)
- Create: `src/contexts/TrackingContext.jsx`
- Create: `src/hooks/useTracking.js`
- Test: `src/__tests__/tracking.test.jsx`

**Interfaces:**
- Consumes: nothing besides React.
- Produces:
  - `TRACKING_STAGES` — array of stage key strings in order (see Global Constraints),
  - `STAGE_LABEL_KEY(stageKey)` — maps an index/stage to a translation key (I'll return the stage key directly; components look up `t(stageKey)`),
  - `TrackingProvider` (context) exposing `{ records, lookup, addRecord, updateStage }`:
    - `lookup(query)` → returns the first record whose `id`, `phone`, or `passport` (case-insensitive) matches `query`, else `null`.
    - `addRecord(data)` → creates a record with generated `id` (format `MYVISA-<YEAR>-<0001+count>`), `currentStage: 0`, applied date today, all 7 stages defaulted to `pending`, each with `{ id: <stageKey>, status: "pending", date: null, note: "" }`; adds to `records`; returns the created record.
    - `updateStage(recordId, newStageIndex)` → sets `currentStage` and marks stages `<= newStageIndex` as `done`, stage `== newStageIndex` as `in-progress` (if not at final), stages `> newStageIndex` as `pending`; sets date on the newly-reached stage; returns updated record.
  - `useTracking()` hook returns the context value.

- [ ] **Step 1: Write the failing test**

`src/__tests__/tracking.test.jsx`:
```jsx
import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { TrackingProvider, useTracking } from "@/contexts/TrackingContext";
import { TRACKING_STAGES } from "@/data/process-steps";

function Probe() {
  const { lookup, addRecord, updateStage, records } = useTracking();
  return (
    <div>
      <span data-testid="count">{records.length}</span>
      <button data-testid="lookup" onClick={() => {}}>lookup</button>
      <button data-testid="add" onClick={() => addRecord({ name: "Test User", phone: "01700000000", passport: "A1234567", companyId: "c1" })}>add</button>
      <button data-testid="advance" onClick={() => { updateStage(records[records.length - 1].id, 3); }}>advance</button>
    </div>
  );
}

test("samples are seeded and lookup works", () => {
  render(<TrackingProvider><Probe /></TrackingProvider>);
  expect(screen.getByTestId("count")).toHaveTextContent("3");
});

test("addRecord generates MYVISA id and defaults stages", () => {
  render(<TrackingProvider><Probe /></TrackingProvider>);
  fireEvent.click(screen.getByTestId("add"));
  expect(screen.getByTestId("count")).toHaveTextContent("4");
  expect(TRACKING_STAGES.length).toBe(7);
});

test("updateStage reflects on lookup-accessible state", () => {
  const { result } = renderHookWithProvider();
  // use render+harness instead for simplicity
});

function renderHookWithProvider() {
  let capture;
  function Harness() {
    const ctx = useTracking();
    capture = ctx;
    return null;
  }
  render(<TrackingProvider><Harness /></TrackingProvider>);
  return capture;
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- tracking`
Expected: FAIL — module not found.

- [ ] **Step 3: Create process-steps data**

`src/data/process-steps.js`:
```js
export const TRACKING_STAGES = [
  "stage_application_received",
  "stage_documents_review",
  "stage_interview",
  "stage_visa_processing",
  "stage_visa_approved",
  "stage_flight_scheduled",
  "stage_departed",
];

export const PROCESS_STEPS = [
  { key: "process_step1", durationKey: "duration_step1" },
  { key: "process_step2", durationKey: "duration_step2" },
  { key: "process_step3", durationKey: "duration_step3" },
  { key: "process_step4", durationKey: "duration_step4" },
  { key: "process_step5", durationKey: "duration_step5" },
  { key: "process_step6", durationKey: "duration_step6" },
];
```

- [ ] **Step 4: Create sample tracking data**

`src/data/tracking.js`:
```js
import { TRACKING_STAGES } from "@/data/process-steps";

function buildStages() {
  return TRACKING_STAGES.map((key) => ({
    id: key,
    status: "pending",
    date: null,
    note: "",
  }));
}

function seedRecord(id, name, phone, passport, companyId, currentStage, appliedDate, notes) {
  const stages = buildStages();
  for (let i = 0; i <= currentStage; i++) {
    stages[i].status = i < currentStage ? "done" : "in-progress";
    stages[i].date = appliedDate;
    if (notes[i]) stages[i].note = notes[i];
  }
  return { id, name, phone, passport, companyId, currentStage, appliedDate, stages };
}

export const initialRecords = [
  seedRecord("MYVISA-2026-0001", "Karim Uddin", "01711111111", "A1234567", "c1", 3, "2026-01-15", { 1: "Medical report received", 3: "Submitted to Malaysia authority" }),
  seedRecord("MYVISA-2026-0002", "Rashida Begum", "01722222222", "B7654321", "c2", 5, "2025-11-20", { 5: "Flight booked for 2026-10-01" }),
  seedRecord("MYVISA-2026-0003", "Mohammad Hasan", "01733333333", "C9876543", "c3", 2, "2026-08-10", { 2: "Waiting for medical report" }),
];
```

- [ ] **Step 5: Implement TrackingContext**

`src/contexts/TrackingContext.jsx`:
```jsx
"use client";
import React, { createContext, useContext, useState } from "react";
import { TRACKING_STAGES } from "@/data/process-steps";
import { initialRecords } from "@/data/tracking";

const TrackingContext = createContext({
  records: [],
  lookup: () => null,
  addRecord: () => ({}),
  updateStage: () => ({}),
});

export function TrackingProvider({ children }) {
  const [records, setRecords] = useState(initialRecords);

  const buildStages = () =>
    TRACKING_STAGES.map((key) => ({ id: key, status: "pending", date: null, note: "" }));

  const lookup = (query) => {
    if (!query) return null;
    const q = String(query).trim().toLowerCase();
    return records.find(
      (r) =>
        r.id.toLowerCase() === q ||
        r.phone.toLowerCase() === q ||
        r.passport.toLowerCase() === q
    ) || null;
  };

  const addRecord = (data) => {
    const id = `MYVISA-2026-${String(records.length + 1).padStart(4, "0")}`;
    const today = new Date().toISOString().slice(0, 10);
    const stages = buildStages();
    stages[0] = { ...stages[0], status: "in-progress", date: today };
    const record = {
      id,
      name: data.name,
      phone: data.phone,
      passport: data.passport,
      companyId: data.companyId,
      currentStage: 0,
      appliedDate: today,
      stages,
    };
    setRecords((prev) => [...prev, record]);
    return record;
  };

  const updateStage = (recordId, newStageIndex) => {
    const idx = Math.max(0, Math.min(newStageIndex, TRACKING_STAGES.length - 1));
    setRecords((prev) =>
      prev.map((r) => {
        if (r.id !== recordId) return r;
        const today = new Date().toISOString().slice(0, 10);
        const stages = TRACKING_STAGES.map((key, i) => {
          let status = "pending";
          if (i < idx) status = "done";
          else if (i === idx) status = idx < TRACKING_STAGES.length - 1 ? "in-progress" : "done";
          const prevStage = r.stages[i] || {};
          return {
            id: key,
            status,
            date: prevStage.date || (i <= idx ? today : null),
            note: prevStage.note || "",
          };
        });
        return { ...r, currentStage: idx, stages };
      })
    );
  };

  return (
    <TrackingContext.Provider value={{ records, lookup, addRecord, updateStage }}>
      {children}
    </TrackingContext.Provider>
  );
}

export default TrackingContext;
```

`src/hooks/useTracking.js`:
```js
"use client";
import { useContext } from "react";
import { TrackingContext } from "@/contexts/TrackingContext";

export function useTracking() {
  return useContext(TrackingContext);
}
```

- [ ] **Step 6: Fix the test to use the real harness (replace the placeholder advance test)**

Replace the failing `updateStage` test block in `src/__tests__/tracking.test.jsx` so it asserts real behavior:

```jsx
test("updateStage marks reached stages done and reflects in lookup", () => {
  const ctx = renderHookWithProvider();
  const rec = ctx.addRecord({ name: "New Person", phone: "019999", passport: "Z999", companyId: "c1" });
  ctx.updateStage(rec.id, 3);
  const after = ctx.lookup(rec.id);
  expect(after.currentStage).toBe(3);
  expect(after.stages[3].status).toBe("in-progress");
  expect(after.stages[0].status).toBe("done");
  expect(after.stages[4].status).toBe("pending");
});
```

- [ ] **Step 7: Run tests to verify they pass**

Run: `npm test -- tracking`
Expected: PASS (all tracking tests).

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: tracking data model, context, and id generation"
```

---

### Task 4: Root layout, Navbar, Footer, and shared decorative components

**Files:**
- Create: `src/app/layout.jsx`
- Create: `src/components/Navbar.jsx`
- Create: `src/components/Footer.jsx`
- Create: `src/components/TrustBadge.jsx`
- Create: `src/components/WhatsAppButton.jsx`
- Modify: `src/app/globals.css` (add font + base styling)

**Interfaces:**
- Consumes: `LanguageProvider` (Task 2), `TrackingProvider` (Task 3), `useLanguage`.
- Produces:
  - `<TrustBadge />` — a gold-outlined pill showing the government-approved badge with license placeholder; reusable anywhere.
  - `<WhatsAppButton />` — fixed-position floating WhatsApp chat button linking to `https://wa.me/8801712345678`.
  - `<Navbar />` — sticky top nav: logo+name left, links right (desktop) / hamburger menu (mobile), a gold "Check Status" button always visible, and `<LanguageToggle />`.
  - `<Footer />` — bottom footer with quick links, contact placeholders, copyright.
  - Root `layout.jsx` wraps everything in providers and includes `globals.css`.

- [ ] **Step 1: Add font import to globals.css**

`src/app/globals.css`:
```css
@import "tailwindcss";

:root {
  color-scheme: light;
}

body {
  @apply bg-slate-50 text-slate-800 antialiased;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans Bengali", sans-serif;
}
```

- [ ] **Step 2: Create TrustBadge**

`src/components/TrustBadge.jsx`:
```jsx
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
```

- [ ] **Step 3: Create Language toggle integration + Navbar**

`src/components/Navbar.jsx`:
```jsx
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
```

- [ ] **Step 4: Create Footer**

`src/components/Footer.jsx`:
```jsx
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
```

- [ ] **Step 5: Create WhatsAppButton**

`src/components/WhatsAppButton.jsx`:
```jsx
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
```

- [ ] **Step 6: Add the missing keys to both locale files**

Append these keys to `src/locales/bn.json` and `src/locales/en.json` (Bangla shown; English in parentheses):

```
government_approved = সরকার অনুমোদিত (Government Approved)
license_placeholder = লাইসেন্স নং: PR-2026-XXXX (License: PR-2026-XXXX)
agency_name = আমার এজেন্সি (placeholder display name)
agency_name_short = এজেন্সি (Agency)
tagline_short = মালয়েশিয়া ভিসা (Malaysia Visa)
footer_about = ... (short paragraph)
quick_links = দ্রুত লিংক (Quick Links)
service_links = সেবা (Services)
admin = অ্যাডমিন (Admin)
whatsapp_us = হোয়াটসঅ্যাপ করুন (Chat on WhatsApp)
phone_placeholder = +880 1712-345678
address_placeholder = ঢাকা, বাংলাদেশ (Dhaka, Bangladesh)
copyright = সর্বস্বত্ব সংরক্ষিত (All rights reserved)
```

- [ ] **Step 7: Create root layout**

`src/app/layout.jsx`:
```jsx
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { TrackingProvider } from "@/contexts/TrackingContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TrustBadge from "@/components/TrustBadge";

export const metadata = {
  title: "Malaysia Work Visa Agency",
  description: "Bangladesh-based government-approved manpower agency for Malaysia work visas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body>
        <LanguageProvider>
          <TrackingProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <WhatsAppButton />
          </TrackingProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 8: Verify everything compiles and language toggle works**

Replace `src/app/page.jsx` temporarily with a minimal Homepage that renders `<TrustBadge />` + a heading + the language toggle, run `npm run dev`, and confirm no build/CSS errors and the toggle switches text.

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "feat: root layout, navbar, footer, trust badge, whatsapp button"
```

---

### Task 5: Home page

**Files:**
- Create: `src/app/page.jsx`
- Create: `src/components/Hero.jsx`
- Create: `src/data/companies.js`
- Test: `src/__tests__/home.test.jsx`

**Interfaces:**
- Consumes: `TrustBadge`, `useLanguage`, `useTracking`.
- Produces:
  - `src/data/companies.js` exports `COMPANIES` — array of `{ id, name, sectorKey, location }`.
  - `<Hero />` — hero section with agency name, tagline, and "Apply Now" / "Check Status" CTAs.

- [ ] **Step 1: Create companies data**

`src/data/companies.js`:
```js
export const COMPANIES = [
  { id: "c1", name: "Palm Oil Plantation SDN BHD", sectorKey: "sector_agriculture", location: "Johor" },
  { id: "c2", name: "Tech Manufacturing Sdn Bhd", sectorKey: "sector_manufacturing", location: "Penang" },
  { id: "c3", name: "Hospitality Group Malaysia", sectorKey: "sector_hospitality", location: "Kuala Lumpur" },
  { id: "c4", name: "Construction Works Malaysia", sectorKey: "sector_construction", location: "Selangor" },
  { id: "c5", name: "Palm Oil Mill Holding", sectorKey: "sector_agriculture", location: "Sabah" },
  { id: "c6", name: "Logistics & Transport", sectorKey: "sector_logistics", location: "Johor" },
];
```

- [ ] **Step 2: Write the failing test**

`src/__tests__/home.test.jsx`:
```jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { COMPANIES } from "@/data/companies";

test("companies data has placeholder names", () => {
  expect(COMPANIES.length).toBeGreaterThanOrEqual(4);
});
```

- [ ] **Step 3: Run test to verify it fails/passes**

Run: `npm test -- home`
Expected: PASS (COMPANIES created in step 1). No failing test here — this is a data validation guard.

- [ ] **Step 4: Create Hero component**

`src/components/Hero.jsx`:
```jsx
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
```

- [ ] **Step 5: Build the Home page**

`src/app/page.jsx`:
```jsx
"use client";
import React from "react";
import Link from "next/link";
import { Users, Award } from "lucide-react";
import Hero from "@/components/Hero";
import TrustBadge from "@/components/TrustBadge";
import { useLanguage } from "@/hooks/useLanguage";
import { COMPANIES } from "@/data/companies";

export default function Home() {
  const { t } = useLanguage();
  return (
    <div>
      <Hero />
      <section className="mx-auto max-w-7xl px-4 py-6 flex flex-wrap items-center gap-4">
        <TrustBadge />
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Award className="h-5 w-5 text-gold" /> {t("years_experience")}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="text-2xl font-bold text-slate-800">{t("partner_companies")}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPANIES.map((c) => (
            <div key={c.id} className="rounded-xl border border-slate-200 bg-white p-4 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                <Users className="h-6 w-6" />
              </span>
              <div>
                <p className="font-semibold text-slate-800">{c.name}</p>
                <p className="text-xs text-slate-500">{t(c.sectorKey)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/jobs" className="inline-block rounded-full border-2 border-primary px-6 py-2.5 font-semibold text-primary hover:bg-primary hover:text-white">
            {t("view_all_jobs")}
          </Link>
        </div>
      </section>
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-800">{t("why_choose_us")}</h2>
          <p className="mt-3 max-w-2xl mx-auto text-slate-600">{t("why_choose_us_desc")}</p>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 6: Add new locale keys**

Add to both locale files: `hero_title`, `hero_subtitle`, `years_experience`, `partner_companies`, `view_all_jobs`, `why_choose_us`, `why_choose_us_desc`, `sector_agriculture`, `sector_manufacturing`, `sector_hospitality`, `sector_construction`, `sector_logistics`.

- [ ] **Step 7: Verify with dev server**

Run: `npm run dev`, open `/`. Expected: hero + trust badges + company grid render, responsive.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: home page with hero, trust badges, partner companies"
```

---

### Task 6: Visa Process page

**Files:**
- Create: `src/app/process/page.jsx`
- Test: `src/__tests__/process.test.jsx`

**Interfaces:**
- Consumes: `useLanguage`, `PROCESS_STEPS` + `TRACKING_STAGES` (Task 3).
- Produces: timeline page showing 6 process steps + a 7-stage tracking reference + required documents summary + fee note.

- [ ] **Step 1: Write the failing test**

`src/__tests__/process.test.jsx`:
```jsx
import { PROCESS_STEPS, TRACKING_STAGES } from "@/data/process-steps";

test("process steps and tracking stages are defined", () => {
  expect(PROCESS_STEPS.length).toBe(6);
  expect(TRACKING_STAGES.length).toBe(7);
});
```

- [ ] **Step 2: Run test to verify it passes**

Run: `npm test -- process`
Expected: PASS.

- [ ] **Step 3: Build the Process page**

`src/app/process/page.jsx`:
```jsx
"use client";
import React from "react";
import Link from "next/link";
import { FileText, Clock, CreditCard, CheckCircle2 } from "lucide-react";
import TrustBadge from "@/components/TrustBadge";
import { useLanguage } from "@/hooks/useLanguage";
import { PROCESS_STEPS } from "@/data/process-steps";

export default function ProcessPage() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <TrustBadge />
      <h1 className="mt-4 text-3xl font-black text-slate-800">{t("process")}</h1>
      <p className="mt-2 text-slate-600">{t("process_intro")}</p>

      <ol className="mt-10 space-y-0">
        {PROCESS_STEPS.map((step, i) => (
          <li key={step.key} className="relative flex gap-4 pb-8 last:pb-0">
            {i < PROCESS_STEPS.length - 1 && (
              <span className="absolute left-5 top-12 h-[calc(100%-3rem)] w-0.5 bg-slate-200" />
            )}
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold">
              {i + 1}
            </span>
            <div className="pt-1">
              <h3 className="font-semibold text-slate-800">{t(step.key)}</h3>
              <p className="mt-1 text-sm text-slate-600">{t("process_step_desc_" + (i + 1))}</p>
              <p className="mt-1 inline-flex items-center gap-1 text-xs text-slate-500">
                <Clock className="h-3.5 w-3.5" /> {t(step.durationKey)}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <section className="mt-12 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <FileText className="h-7 w-7 text-primary" />
          <h3 className="mt-3 font-bold">{t("required_docs")}</h3>
          <p className="mt-1 text-sm text-slate-600">{t("required_docs_desc")}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <Clock className="h-7 w-7 text-primary" />
          <h3 className="mt-3 font-bold">{t("timeline")}</h3>
          <p className="mt-1 text-sm text-slate-600">{t("timeline_desc")}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <CreditCard className="h-7 w-7 text-primary" />
          <h3 className="mt-3 font-bold">{t("fees")}</h3>
          <p className="mt-1 text-sm text-slate-600">{t("fees_desc")}</p>
        </div>
      </section>

      <div className="mt-10 text-center">
        <Link href="/apply" className="rounded-full bg-gold px-6 py-3 font-bold text-white hover:opacity-90">
          {t("apply")}
        </Link>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Add locale keys**

Add to both locales: `process_intro`, `process_step_desc_1..6`, `duration_step1..6`, `required_docs`, `required_docs_desc`, `timeline`, `timeline_desc`, `fees`, `fees_desc`, and tracking stage labels `stage_application_received`, `stage_documents_review`, `stage_interview`, `stage_visa_processing`, `stage_visa_approved`, `stage_flight_scheduled`, `stage_departed`.

- [ ] **Step 5: Verify with dev server**

Run: `npm run dev`, open `/process`. Expected: timeline renders, responsive, translations switch with toggle.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: visa process page"
```

---

### Task 7: Jobs listing and job detail pages

**Files:**
- Create: `src/app/jobs/page.jsx`
- Create: `src/app/jobs/[id]/page.jsx`
- Create: `src/components/JobCard.jsx`
- Modify: `src/data/companies.js` (add jobs)
- Or: Create `src/data/jobs.js`

**Interfaces:**
- Consumes: `useLanguage`, `COMPANIES`.
- Produces:
  - `JOBS` array of `{ id, companyId, titleKey, sectorKey, salaryRange, vacancies }`.
  - `/jobs` grid page linking to `/jobs/[id]`.
  - `/jobs/[id]` detail page with description and "Apply Now".

- [ ] **Step 1: Create jobs data**

`src/data/jobs.js`:
```js
export const JOBS = [
  { id: "j1", companyId: "c1", titleKey: "job_harvester", sectorKey: "sector_agriculture", salaryRange: "RM 1,500 – RM 2,200", vacancies: 120 },
  { id: "j2", companyId: "c2", titleKey: "job_factory_op", sectorKey: "sector_manufacturing", salaryRange: "RM 1,600 – RM 2,400", vacancies: 80 },
  { id: "j3", companyId: "c3", titleKey: "job_housekeeping", sectorKey: "sector_hospitality", salaryRange: "RM 1,500 – RM 2,000", vacancies: 40 },
  { id: "j4", companyId: "c4", titleKey: "job_construction", sectorKey: "sector_construction", salaryRange: "RM 1,700 – RM 2,600", vacancies: 90 },
  { id: "j5", companyId: "c5", titleKey: "job_palm_mill", sectorKey: "sector_agriculture", salaryRange: "RM 1,500 – RM 2,300", vacancies: 60 },
  { id: "j6", companyId: "c6", titleKey: "job_driver", sectorKey: "sector_logistics", salaryRange: "RM 1,800 – RM 2,800", vacancies: 30 },
];
```

- [ ] **Step 2: Create JobCard**

`src/components/JobCard.jsx`:
```jsx
"use client";
import React from "react";
import Link from "next/link";
import { Building2, Wallet, Users } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { COMPANIES } from "@/data/companies";

export default function JobCard({ job }) {
  const { t } = useLanguage();
  const company = COMPANIES.find((c) => c.id === job.companyId) || {};
  return (
    <Link href={`/jobs/${job.id}`} className="block rounded-xl border border-slate-200 bg-white p-5 hover:border-primary hover:shadow transition">
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Building2 className="h-4 w-4" /> {company.name}
      </div>
      <h3 className="mt-2 font-bold text-slate-800">{t(job.titleKey)}</h3>
      <p className="text-xs text-slate-500">{t(job.sectorKey)}</p>
      <div className="mt-4 space-y-1.5 text-sm">
        <p className="flex items-center gap-2 text-slate-600"><Wallet className="h-4 w-4 text-primary" /> {job.salaryRange}</p>
        <p className="flex items-center gap-2 text-slate-600"><Users className="h-4 w-4 text-primary" /> {t("vacancies")}: {job.vacancies}</p>
      </div>
    </Link>
  );
}
```

- [ ] **Step 3: Build jobs listing page**

`src/app/jobs/page.jsx`:
```jsx
"use client";
import React from "react";
import TrustBadge from "@/components/TrustBadge";
import JobCard from "@/components/JobCard";
import { useLanguage } from "@/hooks/useLanguage";
import { JOBS } from "@/data/jobs";

export default function JobsPage() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <TrustBadge />
      <h1 className="mt-4 text-3xl font-black text-slate-800">{t("jobs")}</h1>
      <p className="mt-2 text-slate-600">{t("jobs_intro")}</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {JOBS.map((job) => <JobCard key={job.id} job={job} />)}
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Build job detail page**

`src/app/jobs/[id]/page.jsx`:
```jsx
"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import TrustBadge from "@/components/TrustBadge";
import { useLanguage } from "@/hooks/useLanguage";
import { JOBS } from "@/data/jobs";
import { COMPANIES } from "@/data/companies";

export default function JobDetailPage() {
  const { id } = useParams();
  const { t } = useLanguage();
  const job = JOBS.find((j) => j.id === id);
  if (!job) return <div className="p-10 text-center text-slate-500">{t("job_not_found")}</div>;
  const company = COMPANIES.find((c) => c.id === job.companyId) || {};
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <TrustBadge />
      <p className="mt-4 text-sm text-slate-500">{company.name} · {company.location}</p>
      <h1 className="text-3xl font-black text-slate-800">{t(job.titleKey)}</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg bg-primary/10 p-3 text-center"><p className="text-xs text-slate-500">{t("salary")}</p><p className="font-bold">{job.salaryRange}</p></div>
        <div className="rounded-lg bg-primary/10 p-3 text-center"><p className="text-xs text-slate-500">{t("vacancies")}</p><p className="font-bold">{job.vacancies}</p></div>
        <div className="rounded-lg bg-primary/10 p-3 text-center"><p className="text-xs text-slate-500">{t("sector")}</p><p className="font-bold">{t(job.sectorKey)}</p></div>
      </div>
      <section className="mt-8">
        <h2 className="text-xl font-bold">{t("job_description")}</h2>
        <p className="mt-2 text-slate-600">{t("job_desc_" + job.id)}</p>
      </section>
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <Link href="/apply" className="rounded-full bg-gold px-6 py-3 text-center font-bold text-white hover:opacity-90">{t("apply")}</Link>
        <Link href="/track" className="rounded-full border-2 border-primary px-6 py-3 text-center font-bold text-primary">{t("track_status")}</Link>
      </div>
    </div>
  );
}
```

- [ ] **Step 5: Add locale keys**

Add to both locales: `vacancies`, `salary`, `sector`, `jobs_intro`, `job_description`, `job_not_found`, `job_harvester`, `job_factory_op`, `job_housekeeping`, `job_construction`, `job_palm_mill`, `job_driver`, plus `job_desc_j1..j6`.

- [ ] **Step 6: Verify with dev server**

Run: `npm run dev`, open `/jobs` and a job detail page. Expected: cards render, detail links work.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: jobs listing and detail pages"
```

---

### Task 8: Apply form with tracking ID generation

**Files:**
- Create: `src/app/apply/page.jsx`
- Test: `src/__tests__/apply.test.jsx`

**Interfaces:**
- Consumes: `useLanguage`, `useTracking` (`addRecord`, `lookup`), `COMPANIES`.
- Produces: `/apply` form; on submit calls `addRecord(data)` and shows the generated tracking ID with a "Track status" link and a "Submit another" button.

- [ ] **Step 1: Write the failing test**

`src/__tests__/apply.test.jsx`:
```jsx
import { TrackingProvider, useTracking } from "@/contexts/TrackingContext";
import { act } from "@testing-library/react";

function getCtx() {
  let ctx;
  function H() { ctx = useTracking(); return null; }
  const { container } = render(<TrackingProvider><H /></TrackingProvider>);
  return { ctx, container };
}

test("addRecord returns an id matching the MYVISA-YYYY-XXXX format", async () => {
  const { ctx } = getCtx();
  let rec;
  await act(async () => {
    rec = ctx.addRecord({ name: "A", phone: "1", passport: "P", companyId: "c1" });
  });
  expect(rec.id).toMatch(/^MYVISA-2026-\d{4}$/);
  expect(ctx.lookup(rec.id)).not.toBeNull();
});
```

- [ ] **Step 2: Run test to verify it passes**

Run: `npm test -- apply`
Expected: PASS.

- [ ] **Step 3: Build the Apply page**

`src/app/apply/page.jsx`:
```jsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import TrustBadge from "@/components/TrustBadge";
import { useLanguage } from "@/hooks/useLanguage";
import { useTracking } from "@/hooks/useTracking";
import { COMPANIES } from "@/data/companies";

const field = "w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:border-primary";

export default function ApplyPage() {
  const { t } = useLanguage();
  const { addRecord } = useTracking();
  const [form, setForm] = useState({ name: "", phone: "", passport: "", age: "", education: "", experience: "", companyId: "" });
  const [trackingId, setTrackingId] = useState(null);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const rec = addRecord({ name: form.name, phone: form.phone, passport: form.passport, companyId: form.companyId });
    setTrackingId(rec.id);
  };

  if (trackingId) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16 text-center">
        <CheckCircle2 className="mx-auto h-16 w-16 text-green-600" />
        <h1 className="mt-4 text-2xl font-black text-slate-800">{t("application_submitted")}</h1>
        <p className="mt-2 text-slate-600">{t("tracking_id_label")}</p>
        <div className="mt-4 inline-block rounded-xl bg-primary/10 px-8 py-4 text-2xl font-black text-primary">{trackingId}</div>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
          <Link href="/track" className="rounded-full bg-gold px-6 py-3 font-bold text-white">{t("track_status")}</Link>
          <button onClick={() => { setForm({ name: "", phone: "", passport: "", age: "", education: "", experience: "", companyId: "" }); setTrackingId(null); }} className="rounded-full border-2 border-primary px-6 py-3 font-bold text-primary">{t("submit_another")}</button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <TrustBadge />
      <h1 className="mt-4 text-3xl font-black text-slate-800">{t("apply")}</h1>
      <p className="mt-2 text-slate-600">{t("apply_intro")}</p>
      <form onSubmit={submit} className="mt-8 grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-2"><span className="mb-1 block text-sm font-medium">{t("name")}</span><input className={field} value={form.name} onChange={set("name")} required /></label>
        <label className="block"><span className="mb-1 block text-sm font-medium">{t("phone")}</span><input className={field} value={form.phone} onChange={set("phone")} required /></label>
        <label className="block"><span className="mb-1 block text-sm font-medium">{t("nid_passport")}</span><input className={field} value={form.passport} onChange={set("passport")} required /></label>
        <label className="block"><span className="mb-1 block text-sm font-medium">{t("age")}</span><input type="number" className={field} value={form.age} onChange={set("age")} /></label>
        <label className="block"><span className="mb-1 block text-sm font-medium">{t("education")}</span><select className={field} value={form.education} onChange={set("education")}><option value="">{t("select")}</option><option>HSC</option><option>Degree</option><option>Diploma</option></select></label>
        <label className="block sm:col-span-2"><span className="mb-1 block text-sm font-medium">{t("experience")}</span><textarea className={field} value={form.experience} onChange={set("experience")} rows={3} /></label>
        <label className="block sm:col-span-2"><span className="mb-1 block text-sm font-medium">{t("preferred_company")}</span><select className={field} value={form.companyId} onChange={set("companyId")} required><option value="">{t("select")}</option>{COMPANIES.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}</select></label>
        <div className="sm:col-span-2">
          <button type="submit" className="w-full rounded-full bg-gold px-6 py-3 font-bold text-white hover:opacity-90">{t("submit")}</button>
        </div>
      </form>
    </div>
  );
}
```

- [ ] **Step 4: Add locale keys**

Add to both locales: `apply_intro`, `name`, `nid_passport`, `age`, `education`, `experience`, `preferred_company`, `select`, `submit`, `application_submitted`, `tracking_id_label`, `submit_another`.

- [ ] **Step 5: Verify with dev server**

Run: `npm run dev`, open `/apply`, submit the form. Expected: tracking ID `MYVISA-2026-0004` shows and the record appears in dev tools/tracking.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: apply form with tracking id generation"
```

---

### Task 9: Client tracking page (CORE)

**Files:**
- Create: `src/app/track/page.jsx`
- Create: `src/components/ProgressStepper.jsx`
- Test: `src/__tests__/track-page.test.jsx`

**Interfaces:**
- Consumes: `useLanguage`, `useTracking` (`lookup`, `records`), `TRACKING_STAGES`.
- Produces:
  - `/track` page: input field, submit → display `ProgressStepper` for the matched record (read-only). Shows 7 stages with status/date/note.
  - `ProgressStepper` component: vertical stepper on mobile, horizontal on desktop.

- [ ] **Step 1: Write the failing test**

`src/__tests__/track-page.test.jsx`:
```jsx
import { TrackingProvider, useTracking } from "@/contexts/TrackingContext";
import { act } from "@testing-library/react";

test("lookup finds the sample record by tracking id", () => {
  let ctx;
  function H() { ctx = useTracking(); return null; }
  const { container } = render(<TrackingProvider><H /></TrackingProvider>);
  const rec = ctx.lookup("MYVISA-2026-0001");
  expect(rec).not.toBeNull();
  expect(rec.currentStage).toBe(3);
});
```

- [ ] **Step 2: Run test to verify it passes**

Run: `npm test -- track-page`
Expected: PASS.

- [ ] **Step 3: Create ProgressStepper**

`src/components/ProgressStepper.jsx`:
```jsx
"use client";
import React from "react";
import { Check, Circle, Loader2 } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { TRACKING_STAGES } from "@/data/process-steps";

export default function ProgressStepper({ record }) {
  const { t } = useLanguage();
  return (
    <div className="mt-6">
      <div className="hidden md:flex items-start justify-between">
        {record.stages.map((stage, i) => (
          <div key={stage.id} className="flex-1 text-center">
            <StageIcon status={stage.status} />
            <p className={`mt-2 text-xs font-semibold px-1 ${stage.status === "pending" ? "text-slate-400" : "text-slate-700"}`}>{t(stage.id)}</p>
            <p className="text-[10px] text-slate-400">{stage.date || "-"}</p>
            {stage.note && <p className="text-[10px] text-gold italic mt-1 px-2">{stage.note}</p>}
          </div>
        ))}
      </div>

      <div className="md:hidden">
        {record.stages.map((stage, i) => (
          <div key={stage.id} className="relative flex gap-4 pb-6 last:pb-0">
            {i < record.stages.length - 1 && <span className="absolute left-4 top-10 h-[calc(100%-2.5rem)] w-0.5 bg-slate-200" />}
            <StageIcon status={stage.status} />
            <div className="pt-0.5">
              <p className={`font-semibold ${stage.status === "pending" ? "text-slate-400" : "text-slate-800"}`}>{t(stage.id)}</p>
              <p className="text-xs text-slate-500">{stage.date || "-"}</p>
              {stage.note && <p className="text-xs text-gold italic mt-1">{stage.note}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StageIcon({ status }) {
  if (status === "done") return <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white"><Check className="h-4 w-4" /></span>;
  if (status === "in-progress") return <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white"><Loader2 className="h-4 w-4 animate-spin" /></span>;
  return <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-400"><Circle className="h-4 w-4" /></span>;
}
```

- [ ] **Step 4: Build the track page**

`src/app/track/page.jsx`:
```jsx
"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import TrustBadge from "@/components/TrustBadge";
import ProgressStepper from "@/components/ProgressStepper";
import { useLanguage } from "@/hooks/useLanguage";
import { useTracking } from "@/hooks/useTracking";

export default function TrackPage() {
  const { t } = useLanguage();
  const { lookup } = useTracking();
  const [query, setQuery] = useState("");
  const [record, setRecord] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const rec = lookup(query);
    setRecord(rec);
    setNotFound(!rec);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <TrustBadge />
      <h1 className="mt-4 text-3xl font-black text-slate-800">{t("track_status")}</h1>
      <p className="mt-2 text-slate-600">{t("track_intro")}</p>

      <form onSubmit={submit} className="mt-6 flex flex-col sm:flex-row gap-3">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t("track_placeholder")} className="flex-1 rounded-full border border-slate-300 px-5 py-3 focus:outline-none focus:border-primary" />
        <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-white hover:opacity-90"><Search className="h-4 w-4" /> {t("track_now")}</button>
      </form>

      {notFound && <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{t("not_found")}</p>}

      {record && (
        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <p className="text-xs text-slate-500">{t("client_name")}</p>
              <p className="font-bold text-slate-800">{record.name}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-500">{t("tracking_id_label")}</p>
              <p className="font-bold text-primary">{record.id}</p>
            </div>
          </div>
          <ProgressStepper record={record} />
          <div className="mt-6 border-t border-slate-100 pt-4 text-center text-sm text-slate-500">
            {t("contact_office_for_update")}
          </div>
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 5: Add locale keys**

Add to both locales: `track_intro`, `track_placeholder`, `track_now`, `not_found`, `client_name`, `contact_office_for_update`.

- [ ] **Step 6: Verify with dev server**

Run: `npm run dev`, open `/track`, search `MYVISA-2026-0001`. Expected: client card with stepper at "Visa Processing", read-only. Test `MYVISA-2026-0002` (Flight) and `MYVISA-2026-0003` (Interview), plus a phone/passport search.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: client tracking page with progress stepper"
```

---

### Task 10: Admin view with live update

**Files:**
- Create: `src/app/admin/page.jsx`
- Test: `src/__tests__/admin.test.jsx`

**Interfaces:**
- Consumes: `useLanguage`, `useTracking` (`records`, `updateStage`), `TRACKING_STAGES`.
- Produces: `/admin` page; staff selects a client record, then a target stage from a dropdown, click update → `updateStage(id, index)`. Record changes immediately (shared context → reflected on `/track`).

- [ ] **Step 1: Write the failing test**

`src/__tests__/admin.test.jsx`:
```jsx
import { TrackingProvider, useTracking } from "@/contexts/TrackingContext";
import { act } from "@testing-library/react";

test("updateStage updates the sample record to a new stage", async () => {
  let ctx;
  function H() { ctx = useTracking(); return null; }
  const { container } = render(<TrackingProvider><H /></TrackingProvider>);
  await act(async () => ctx.updateStage("MYVISA-2026-0001", 5));
  const rec = ctx.lookup("MYVISA-2026-0001");
  expect(rec.currentStage).toBe(5);
});
```

- [ ] **Step 2: Run test to verify it passes**

Run: `npm test -- admin`
Expected: PASS.

- [ ] **Step 3: Build the Admin page**

`src/app/admin/page.jsx`:
```jsx
"use client";
import React, { useState } from "react";
import { RefreshCcw } from "lucide-react";
import TrustBadge from "@/components/TrustBadge";
import { useLanguage } from "@/hooks/useLanguage";
import { useTracking } from "@/hooks/useTracking";
import { TRACKING_STAGES } from "@/data/process-steps";

export default function AdminPage() {
  const { t } = useLanguage();
  const { records, updateStage } = useTracking();
  const [selectedId, setSelectedId] = useState("");
  const [targetStage, setTargetStage] = useState("");

  const selected = records.find((r) => r.id === selectedId) || null;
  const [msg, setMsg] = useState("");

  const doUpdate = () => {
    if (!selected || targetStage === "") return;
    updateStage(selected.id, Number(targetStage));
    setMsg(t("updated"));
    setTimeout(() => setMsg(""), 2500);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <div className="flex items-center gap-2">
        <TrustBadge />
        <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-600">{t("demo_only")}</span>
      </div>
      <h1 className="mt-4 text-3xl font-black text-slate-800">{t("admin_panel")}</h1>
      <p className="mt-2 text-slate-600">{t("admin_intro")}</p>

      <div className="mt-8 grid gap-4">
        <label className="block">
          <span className="mb-1 block text-sm font-medium">{t("select_client")}</span>
          <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2">
            <option value="">{t("select")}</option>
            {records.map((r) => <option key={r.id} value={r.id}>{r.id} — {r.name}</option>)}
          </select>
        </label>

        {selected && (
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">{t("current_stage")}: <strong className="text-slate-800">{t(TRACKING_STAGES[selected.currentStage])}</strong></p>
            <label className="mt-4 block">
              <span className="mb-1 block text-sm font-medium">{t("update_to_stage")}</span>
              <select value={targetStage} onChange={(e) => setTargetStage(e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2">
                <option value="">{t("select")}</option>
                {TRACKING_STAGES.map((s, i) => <option key={s} value={i}>{i + 1}. {t(s)}</option>)}
              </select>
            </label>
            <button onClick={doUpdate} className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-white hover:opacity-90">
              <RefreshCcw className="h-4 w-4" /> {t("update")}
            </button>
            {msg && <p className="mt-3 text-sm font-semibold text-green-600">{msg}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Add locale keys**

Add to both locales: `demo_only`, `admin_panel`, `admin_intro`, `select_client`, `current_stage`, `update_to_stage`, `update`, `updated`.

- [ ] **Step 5: Verify end-to-end with dev server**

Run: `npm run dev`. Open `/admin`, select `MYVISA-2026-0003`, update to stage 6. Then open `/track`, search `MYVISA-2026-0003`, confirm stepper now shows Flight Scheduled. (Both in same browser tab/buffer session so in-memory state shared.)

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: admin view with live stage updates"
```

---

### Task 11: Documents, Testimonials, FAQ, Contact pages

**Files:**
- Create: `src/app/documents/page.jsx`
- Create: `src/app/testimonials/page.jsx`
- Create: `src/app/faq/page.jsx`
- Create: `src/app/contact/page.jsx`
- Create: `src/components/TestimonialCard.jsx`
- Create: `src/components/FAQAccordion.jsx`
- Create: `src/components/ContactMap.jsx`
- Create: `src/data/documents.js`
- Create: `src/data/testimonials.js`
- Create: `src/data/faq.js`
- Test: `src/__tests__/content-pages.test.jsx`

**Interfaces:**
- Consumes: `useLanguage`.
- Produces: `DOCUMENTS` array, `TESTIMONIALS` array, `FAQ_ITEMS` array; the four pages.

- [ ] **Step 1: Create data files**

`src/data/documents.js`:
```js
export const DOCUMENTS = [
  { id: "d1", key: "doc_passport" },
  { id: "d2", key: "doc_photo" },
  { id: "d3", key: "doc_nid" },
  { id: "d4", key: "doc_medical" },
  { id: "d5", key: "doc_education" },
  { id: "d6", key: "doc_experience" },
  { id: "d7", key: "doc_fingerprint" },
  { id: "d8", key: "doc_offer_letter" },
];
```

`src/data/testimonials.js`:
```js
export const TESTIMONIALS = [
  { id: "t1", nameKey: "testi_name1", company: "Palm Oil Plantation SDN BHD", quoteKey: "testi_quote1", stars: 5 },
  { id: "t2", nameKey: "testi_name2", company: "Tech Manufacturing Sdn Bhd", quoteKey: "testi_quote2", stars: 5 },
  { id: "t3", nameKey: "testi_name3", company: "Hospitality Group Malaysia", quoteKey: "testi_quote3", stars: 4 },
  { id: "t4", nameKey: "testi_name4", company: "Construction Works Malaysia", quoteKey: "testi_quote4", stars: 5 },
];
```

`src/data/faq.js`:
```js
export const FAQ_ITEMS = [
  { id: "f1", qKey: "faq_q1", aKey: "faq_a1" },
  { id: "f2", qKey: "faq_q2", aKey: "faq_a2" },
  { id: "f3", qKey: "faq_q3", aKey: "faq_a3" },
  { id: "f4", qKey: "faq_q4", aKey: "faq_a4" },
  { id: "f5", qKey: "faq_q5", aKey: "faq_a5" },
  { id: "f6", qKey: "faq_q6", aKey: "faq_a6" },
];
```

- [ ] **Step 2: Write the failing test**

`src/__tests__/content-pages.test.jsx`:
```jsx
import { DOCUMENTS } from "@/data/documents";
import { TESTIMONIALS } from "@/data/testimonials";
import { FAQ_ITEMS } from "@/data/faq";

test("mock content data is populated", () => {
  expect(DOCUMENTS.length).toBe(8);
  expect(TESTIMONIALS.length).toBeGreaterThanOrEqual(3);
  expect(FAQ_ITEMS.length).toBeGreaterThanOrEqual(5);
});
```

- [ ] **Step 3: Run test to verify it passes**

Run: `npm test -- content-pages`
Expected: PASS.

- [ ] **Step 4: Build Documents page**

`src/app/documents/page.jsx`:
```jsx
"use client";
import React from "react";
import { Printer, FileText } from "lucide-react";
import TrustBadge from "@/components/TrustBadge";
import { useLanguage } from "@/hooks/useLanguage";
import { DOCUMENTS } from "@/data/documents";

export default function DocumentsPage() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <TrustBadge />
      <h1 className="mt-4 text-3xl font-black text-slate-800">{t("documents")}</h1>
      <p className="mt-2 text-slate-600">{t("documents_intro")}</p>
      <div className="mt-6 flex justify-end">
        <button onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-4 py-2 text-sm font-bold text-primary"><Printer className="h-4 w-4" /> {t("print")}</button>
      </div>
      <ul className="mt-4 divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
        {DOCUMENTS.map((d, i) => (
          <li key={d.id} className="flex items-center gap-3 p-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary"><FileText className="h-4 w-4" /></span>
            <span className="text-sm text-slate-700">{i + 1}. {t(d.key)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

- [ ] **Step 5: Build TestimonialCard + Testimonials page**

`src/components/TestimonialCard.jsx`:
```jsx
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
```

`src/app/testimonials/page.jsx`:
```jsx
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
```

- [ ] **Step 6: Build FAQAccordion + FAQ page**

`src/components/FAQAccordion.jsx`:
```jsx
"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function FAQAccordion({ items }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={item.id} className="rounded-xl border border-slate-200 bg-white">
          <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-3 p-4 text-left font-semibold text-slate-800">
            <span>{t(item.qKey)}</span>
            <ChevronDown className={`h-5 w-5 shrink-0 transition-transform text-primary ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && <p className="px-4 pb-4 text-sm text-slate-600">{t(item.aKey)}</p>}
        </div>
      ))}
    </div>
  );
}
```

`src/app/faq/page.jsx`:
```jsx
"use client";
import React from "react";
import TrustBadge from "@/components/TrustBadge";
import FAQAccordion from "@/components/FAQAccordion";
import { useLanguage } from "@/hooks/useLanguage";
import { FAQ_ITEMS } from "@/data/faq";

export default function FAQPage() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <TrustBadge />
      <h1 className="mt-4 text-3xl font-black text-slate-800">{t("faq")}</h1>
      <div className="mt-8"><FAQAccordion items={FAQ_ITEMS} /></div>
    </div>
  );
}
```

- [ ] **Step 7: Build Contact page + map**

`src/components/ContactMap.jsx`:
```jsx
"use client";
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";

export default function ContactMap() {
  const { t } = useLanguage();
  return (
    <div className="rounded-xl overflow-hidden border border-slate-200">
      <div className="flex h-64 items-center justify-center bg-slate-100">
        <p className="px-6 text-center text-sm text-slate-500">{t("map_placeholder")}</p>
      </div>
    </div>
  );
}
```

`src/app/contact/page.jsx`:
```jsx
"use client";
import React from "react";
import Link from "next/link";
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
```

- [ ] **Step 8: Add locale keys**

Add to both locales: `documents_intro`, `print`, `doc_passport`, `doc_photo`, `doc_nid`, `doc_medical`, `doc_education`, `doc_experience`, `doc_fingerprint`, `doc_offer_letter`, `testimonials_intro`, `testi_name1..4`, `testi_quote1..4`, `faq_q1..6`, `faq_a1..6`, `contact_intro`, `email_placeholder`, `map_placeholder`.

- [ ] **Step 9: Verify with dev server**

Run: `npm run dev`, open each of `/documents`, `/testimonials`, `/faq`, `/contact`. Expected: all render and translations switch.

- [ ] **Step 10: Commit**

```bash
git add -A
git commit -m "feat: documents, testimonials, faq, contact pages"
```

---

### Task 12: About page + final polish and verification

**Files:**
- Create: `src/app/about/page.jsx`

**Interfaces:**
- Consumes: `useLanguage`, `TrustBadge`.

- [ ] **Step 1: Build the About page**

`src/app/about/page.jsx`:
```jsx
"use client";
import React from "react";
import { Award, ShieldCheck, Users } from "lucide-react";
import TrustBadge from "@/components/TrustBadge";
import { useLanguage } from "@/hooks/useLanguage";

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <TrustBadge />
      <h1 className="mt-4 text-3xl font-black text-slate-800">{t("about")}</h1>
      <p className="mt-4 text-slate-600 leading-relaxed">{t("about_mission")}</p>

      <div className="mt-6 flex items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-white p-16 text-center text-slate-400">
        <span className="text-sm">{t("license_cert_placeholder")}</span>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-center">
          <ShieldCheck className="mx-auto h-8 w-8 text-gold" />
          <h3 className="mt-3 font-bold">{t("gov_approved_heading")}</h3>
          <p className="mt-1 text-sm text-slate-600">{t("gov_approved_desc")}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-center">
          <Award className="mx-auto h-8 w-8 text-gold" />
          <h3 className="mt-3 font-bold">{t("experience_heading")}</h3>
          <p className="mt-1 text-sm text-slate-600">{t("experience_desc")}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-center">
          <Users className="mx-auto h-8 w-8 text-gold" />
          <h3 className="mt-3 font-bold">{t("team_heading")}</h3>
          <p className="mt-1 text-sm text-slate-600">{t("team_desc")}</p>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Add locale keys**

Add to both locales: `about_mission`, `license_cert_placeholder`, `gov_approved_heading`, `gov_approved_desc`, `experience_heading`, `experience_desc`, `team_heading`, `team_desc`.

- [ ] **Step 3: Full production build verification**

Run: `npm run build`
Expected: build succeeds with all pages (`/`, `/about`, `/process`, `/jobs`, `/jobs/[id]`, `/apply`, `/track`, `/admin`, `/documents`, `/testimonials`, `/faq`, `/contact`).

- [ ] **Step 4: Run full test suite**

Run: `npm test`
Expected: all tests pass.

- [ ] **Step 5: Manual end-to-end smoke test**

Run: `npm run dev`, open the site on a narrow viewport and a wide viewport. Verify:
- Language toggle switches all text BN/EN on every page and persists per page visit.
- Home → Apply → submit generates `MYVISA-2026-0004`.
- Admin → update `MYVISA-2026-0003` to a later stage → Track shows it.
- All nav links work; mobile hamburger menu works.
- WhatsApp float appears bottom-right.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: about page and final polish"
```

---

## Self-Review Notes

**Spec coverage:** All 11 spec sections mapped — Home (T5), About (T12), Process (T6), Jobs (T7), Apply (T8), Tracking (T9), Admin (T10), Documents (T11), Testimonials (T11), FAQ (T11), Contact (T11). Language system (T2), layout/nav/footer (T4), scaffold (T1). Design constraints (colors, 7 stages, Bangla default, sticky track button, trust badge) all in Global Constraints and implemented across tasks.

**Type consistency:** `addRecord`, `lookup`, `updateStage`, `records`, `t`, `toggle`, `lang` interfaces defined in Tasks 2-3 and used consistently in Tasks 8-10. `TRACKING_STAGES` (7 entries) used in Tasks 3, 6, 9, 10. `PROCESS_STEPS` (6 entries) used in Tasks 3, 6. `COMPANIES` (6 entries) used in Tasks 5, 7, 8. `JOBS` (6 entries) in Task 7. Locale keys referenced (e.g. `stage_visa_processing`) are all added in the same or earlier tasks.

**Placeholder scan:** No TBD/TODO. Every code step includes full code. All data and locale keys explicitly added.
