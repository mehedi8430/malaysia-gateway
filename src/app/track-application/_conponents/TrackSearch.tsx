"use client";

import Link from "next/link";
import { useActionState } from "react";
import { ArrowRightIcon, CheckIcon, DocumentIcon } from "@/components/icon";
import { lookupApplication } from "@/app/track-application/actions";
import type { LookupState, LookupSuccess } from "@/lib/tracking";
import TrackResult from "./TrackResult";

const FIELD_CLASSES =
  "mt-2 w-full border-b-2 border-slate-200 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-700";

export default function TrackSearch({
  initialState,
}: {
  initialState: LookupState | null;
}) {
  const [state, formAction, pending] = useActionState(
    lookupApplication,
    initialState,
  );

  const result: LookupSuccess | null =
    state && "steps" in state ? state : null;
  const error = state && "error" in state ? state.error : null;

  return (
    <>
      <section className="relative mx-auto -mt-8 max-w-6xl px-5 sm:px-10 lg:px-20">
        <div className="grid gap-8 bg-white p-6 shadow-[0_18px_50px_rgba(5,39,70,0.14)] sm:p-9 lg:grid-cols-[1fr_0.72fr] lg:p-12">
          <div>
            <div className="flex items-center gap-3 text-cyan-700">
              <DocumentIcon className="h-5 w-5" />
              <p className="text-xs font-bold uppercase tracking-[0.18em]">
                তথ্য দিন
              </p>
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#102d4d] sm:text-3xl">
              আবেদন খুঁজে দেখুন
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-7 text-slate-500">
              আপনার রসিদ বা নিবন্ধন কাগজে থাকা আইডি ব্যবহার করুন। উদাহরণ:
              MWVG-2026-0001
            </p>
            <form action={formAction} className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="text-xs font-bold text-[#102d4d]">
                ট্র্যাকিং আইডি
                <input
                  className={FIELD_CLASSES}
                  name="trackingId"
                  placeholder="MWVG-2026-0001"
                  required
                />
              </label>
              <label className="text-xs font-bold text-[#102d4d]">
                নিবন্ধিত মোবাইল নম্বর
                <input
                  className={FIELD_CLASSES}
                  name="phone"
                  placeholder="০১XXXXXXXXX"
                  type="tel"
                  required
                />
              </label>
              <button
                className="inline-flex w-fit items-center justify-center gap-3 bg-[#e9b52f] px-6 py-3 text-sm font-bold text-[#052b50] transition hover:bg-[#052b50] hover:text-white disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
                disabled={pending}
                type="submit"
              >
                {pending ? "খোঁজা হচ্ছে..." : "আবেদন দেখুন"}
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </form>
          </div>
          <div className="border-t border-slate-200 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">
              প্রয়োজনীয় তথ্য
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
              <li className="flex gap-3">
                <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                রসিদ বা নিবন্ধন কাগজ থেকে সঠিক আইডি লিখুন
              </li>
              <li className="flex gap-3">
                <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                নিবন্ধনের সময় দেওয়া মোবাইল নম্বর ব্যবহার করুন
              </li>
              <li className="flex gap-3">
                <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                তথ্য না মিললে অফিসে সরাসরি যোগাযোগ করুন
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 text-xs font-bold text-cyan-700 underline decoration-slate-300 underline-offset-4"
            >
              সহায়তা প্রয়োজন? যোগাযোগ করুন{" "}
              <ArrowRightIcon className="h-3 w-3" />
            </Link>
            <p className="mt-6 border-l-2 border-yellow-400 pl-3 text-xs leading-6 text-slate-500">
              নিরাপত্তার জন্য এই পেজে আপনি নিজে কোনো ধাপ সম্পন্ন করতে পারবেন না।
              অফিসের অনুমোদিত কর্মী আপনার নথি যাচাই করে স্ট্যাটাস আপডেট করবেন।
            </p>
          </div>
        </div>
      </section>

      {result && <TrackResult state={result} />}
      {error && (
        <div className="mx-auto mt-8 max-w-6xl px-5 sm:px-10 lg:px-20">
          <p className="border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-700">
            {error}
          </p>
        </div>
      )}
    </>
  );
}