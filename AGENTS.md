<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project: Malaysia Work Visa Gateway

## What this is

A production website for a government-approved Bangladeshi manpower agency ("Malaysia Work Visa Gateway") that sends workers to Malaysia. It has public marketing pages, a client application-tracking page, and an admin dashboard where agency staff update each client's progress through a fixed 15-step visa process. All actual paperwork/registration happens externally at the agency's office — this app only tracks and displays status.

## Tech stack

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Backend/DB:** Self-hosted Supabase (Postgres + Auth + Storage), deployed via Coolify
- **ORM:** Prisma, pointed at the self-hosted Supabase Postgres connection string
- **Auth:** Supabase Auth (email + password) — admin/staff login only, no client accounts
- **Hosting:** Hostinger VPS running Coolify, hosting both Supabase and the Next.js app on one server
- Commands: `npm run dev` / `npm run build` / `npm run lint` (update if scripts differ)

## Data model (core entities)

- **Client** — id, tracking_id (unique, public-facing, e.g. `MWVG-2026-0001`), full_name, phone, passport_number, job_category, photo_url, overall_status, created_at
- **ProcessStep** — master list of the 15 fixed steps (seeded once): step_number, name_bn, name_en, has_fee, fee_amount
- **ClientStepStatus** — join table: client_id, step_id, status (Pending / In Progress / Completed), completed_at, internal_note
- **AdminUser** — id, email, role (Admin/Staff)

## The 15 process steps (fixed, do not reorder)

1. অনলাইন নিবন্ধন — fee: ৳50,000
2. নথিপত্র জমা
3. পাসপোর্ট ভেরিফিকেশন
4. TTC ট্রেনিং
5. মেডিকেল ফিটনেস
6. BMET নিবন্ধন
7. পুলিশ ক্লিয়ারেন্স
8. কোম্পানি আবেদন (Malaysia) — fee: ৳1,50,000
9. ডকুমেন্টস সাবমিশন
10. অফার লেটার
11. এপ্লাইড ফর ভিসা
12. ভিসা প্রোসেসিং
13. ভিসা এরাইভাল — fee: ৳5,00,000
14. BIOMETRIC Finger Print Registration
15. Ticketing

Estimated total duration shown to client: ~2 months (generic text, not per-step estimates).

## Important business rules

- The client tracking page IS allowed to show which steps have a fee and the exact amount (steps 1, 8, 13). This was previously restricted — that rule was reversed, so fee amounts are public on the tracking page.
- The client tracking page is **read-only**. Clients cannot mark steps complete or confirm payment themselves — only admin/staff can update step status, from the admin dashboard.
- Tracking ID lookup should also ask for phone number as a light privacy check, so tracking IDs alone can't be scraped/guessed.
- All actual visa-process work happens externally at the agency office; this app never integrates with any government/visa API — it's a status-tracking layer only.

## Pages

**Public:** Home, About Us, Job Category (+ detail pages), Process, Notice, Contact, Track Application (tracking ID + phone lookup → visual stepper of all 15 steps with fees shown where applicable)
**Admin (auth-gated):** Dashboard overview, Client list (search/filter), Add client (auto-generates tracking ID), Client detail (update each step's status + internal notes), Edit client info

## Design direction

Reference brief: navy/deep-blue as dominant color, gold/amber accent used sparingly (CTAs, highlights). Tone: trustworthy, calm, credible — not salesy — since clients are trusting the agency with a major life decision. Avoid generic templated patterns (identical rounded cards everywhere, numbered markers on non-sequential content, all-caps eyebrow labels). Mobile-first: design and test small screens first.

## Conventions

- Components organized by feature (e.g. `components/home/`, `components/admin/`, `components/tracking/`)
- Bangla is the default UI language; keep any future English toggle in mind but not required for v1
- Keep `fee_amount` and other DB fields readable directly from `ProcessStep`/`ClientStepStatus` — no separate "public" vs "private" schema needed now that fees are client-visible

## Not in scope for v1 (don't build unless asked)

Client login/self-service accounts, SMS/WhatsApp notifications, multi-staff roles/permissions, document upload, payment/installment tracking beyond showing the amount, analytics dashboard, multi-branch support.
