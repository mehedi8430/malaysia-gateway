# Malaysia Work Visa Agency — Demo Website Design Spec

## Overview
A static, frontend-only Next.js demo website for a Bangladesh-based government-approved manpower agency handling Malaysia work visas. Fully functional client progress tracking with mock data, Bangla/English language toggle, and mobile-first responsive design.

## Tech Stack
- **Next.js 15** (App Router) + **Tailwind CSS 4**
- No backend, no database — all data is in-memory React state + local mock data files
- No TypeScript (plain JS for speed, unless user prefers TS)

## Color Palette & Design System
- **Primary:** Deep teal `#0F766E` (government/trustworthy feel)
- **Primary dark:** `#115E59`
- **Secondary:** Navy `#1E3A5F`
- **Gold accent:** `#D97706` — for "Government Approved" badges and trust signals
- **Background:** `#F8FAFC` (light slate)
- **Cards:** White with subtle shadow
- **Status colors:** Green `#16A34A` (complete), Blue `#2563EB` (in-progress), Gray `#94A3B8` (pending)
- **Typography:** System fonts (Inter if available via Google Fonts)

## Project Structure

```
malaysia-gateway/
├── src/
│   ├── app/
│   │   ├── layout.jsx          # Root layout with Navbar + Footer + LanguageProvider
│   │   ├── page.jsx            # Home
│   │   ├── about/page.jsx
│   │   ├── process/page.jsx    # Visa Process
│   │   ├── jobs/page.jsx       # Partner Companies / Job Listings
│   │   ├── jobs/[id]/page.jsx  # Individual Job Detail
│   │   ├── apply/page.jsx      # Application Form
│   │   ├── track/page.jsx      # Client Progress Tracking
│   │   ├── admin/page.jsx      # Admin/Staff View
│   │   ├── documents/page.jsx  # Document Checklist
│   │   ├── testimonials/page.jsx
│   │   ├── faq/page.jsx
│   │   └── contact/page.jsx
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky nav with "Check Status" CTA + lang toggle
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── LanguageToggle.jsx
│   │   ├── TrustBadge.jsx       # "Government Approved" badge component
│   │   ├── ProgressStepper.jsx  # Visual stepper for tracking page
│   │   ├── JobCard.jsx
│   │   ├── TestimonialCard.jsx
│   │   ├── FAQAccordion.jsx
│   │   ├── WhatsAppButton.jsx   # Floating WhatsApp click-to-chat
│   │   └── ContactMap.jsx       # Google Maps embed placeholder
│   ├── contexts/
│   │   ├── LanguageContext.jsx   # Language state (bn/en) via React Context
│   │   └── TrackingContext.jsx   # Tracking data state shared between admin & client
│   ├── data/
│   │   ├── companies.js         # Mock partner companies
│   │   ├── jobs.js              # Mock job listings
│   │   ├── tracking.js          # Mock tracking records (3 sample IDs)
│   │   ├── testimonials.js      # Mock success stories
│   │   ├── faq.js               # Mock FAQ data
│   │   ├── documents.js         # Document checklist
│   │   └── process-steps.js     # Visa process timeline data
│   ├── locales/
│   │   ├── bn.json              # Bangla translations
│   │   └── en.json              # English translations
│   └── hooks/
│       ├── useLanguage.js       # Convenience hook for LanguageContext
│       └── useTracking.js       # Convenience hook for TrackingContext
├── public/
│   └── (placeholder images)
├── next.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

## Pages — Requirements Summary

### 1. Home (`/`)
- Hero with agency name, tagline, CTAs: "Apply Now" / "Check Application Status"
- Trust badge row: Government Approved badge, license placeholder, years experience
- Partner companies grid (logo placeholder + name)
- Brief visa process overview with link to full process page

### 2. About (`/about`)
- Agency background, mission statement
- Government license/certificate placeholder
- Optional team section

### 3. Visa Process (`/process`)
- 6-step visual timeline (Application → Document Submission → Interview → Visa Processing → Approval → Flight/Departure)
- Each step: icon, title, description, estimated duration
- Required documents list, fee structure placeholder

### 4. Partner Companies / Jobs (`/jobs`)
- Grid of company cards with sector, job type, salary range, vacancy count
- Click → `/jobs/[id]` detail page with description

### 5. Apply (`/apply`)
- Form: Name, Phone, NID/Passport, Age, Education, Experience, Preferred company/sector
- On submit: generates tracking ID `MYVISA-YYYY-XXXX` (YYYY=current year, XXXX=sequential)
- Shows tracking ID to user with "Track Your Application" link

### 6. Client Tracking (`/track`) — CORE FEATURE
- Input field: Tracking ID / Passport Number / Phone Number
- Visual stepper (vertical on mobile, horizontal on desktop) showing (7 stages):
  - Application Received
  - Documents Under Review
  - Interview Scheduled / Completed
  - Visa Processing (submitted to Malaysia authority)
  - Visa Approved
  - Flight/Departure Scheduled
  - Departed / Completed
- Each step: status icon, title, date, agency note
- Read-only for clients

### 7. Admin (`/admin`)
- Simple demo page: select client from dropdown → update stage from dropdown
- Immediate reflection in tracking context (in-memory)
- No auth needed

### 8. Documents (`/documents`)
- Printable checklist of required documents
- "Print" button

### 9. Testimonials (`/testimonials`)
- 4 placeholder cards: photo placeholder, name, company, quote

### 10. FAQ (`/faq`)
- 6 accordion Q&As about process, fees, timeline, fraud prevention

### 11. Contact (`/contact`)
- Phone, WhatsApp button, address, Google Maps embed placeholder

## Key Technical Details

### Language System
- React Context (`LanguageContext`) holds current lang (`bn` | `en`)
- `LanguageToggle.jsx` switch in navbar
- All UI strings in `locales/bn.json` and `locales/en.json`
- `useLanguage()` hook returns `{ t, lang, toggle }` where `t('key')` returns translated string

### Tracking System
- `TrackingContext` manages array of tracking records in memory
- Initialized with 3 sample records (IDs: `MYVISA-2026-0001`, `MYVISA-2026-0002`, `MYVISA-2026-0003`)
- Each record: `{ id, name, phone, passport, currentStage, stages: [{ status, date, note }], appliedDate }`
- Admin page reads/writes to same context → changes visible on tracking page

### Sample Tracking Data
- `MYVISA-2026-0001`: Karim Uddin — Stage 4 (Visa Processing), applied 2026-01-15
- `MYVISA-2026-0002`: Rashida Begum — Stage 6 (Flight Scheduled), applied 2025-11-20
- `MYVISA-2026-0003`: Mohammad Hasan — Stage 3 (Interview Scheduled), applied 2026-08-10

### Navbar
- Sticky, mobile hamburger menu
- Logo + agency name (left)
- Nav links: Home, About, Process, Jobs, Apply, Documents, FAQ, Contact
- **Prominent "Track Status" button** (gold/accent color, always visible)
- Language toggle switch (right)

### Responsive Strategy
- Mobile-first: single column, stacked layouts
- Tablet (768px+): 2-column grids
- Desktop (1024px+): full layouts, horizontal stepper, wider cards
- Stepper: vertical on mobile, horizontal on desktop

## What's NOT in scope
- No real authentication
- No real form submission or email
- No backend API
- No CMS
- No analytics
- No SEO beyond basic meta tags
