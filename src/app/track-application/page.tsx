import Link from "next/link";
import HomeFooter from "@/components/home/HomeFooter";
import HomeHeader from "@/components/home/HomeHeader";
import {
  ArrowRightIcon,
  CheckIcon,
  DocumentIcon,
  PhoneIcon,
} from "@/components/icon";

const PROCESS_STEPS = [
  ["অনলাইন নিবন্ধন", "৳৫০,০০০"],
  ["নথিপত্র জমা", ""],
  ["পাসপোর্ট ভেরিফিকেশন", ""],
  ["TTC ট্রেনিং", ""],
  ["মেডিকেল ফিটনেস", ""],
  ["BMET নিবন্ধন", ""],
  ["পুলিশ ক্লিয়ারেন্স", ""],
  ["কোম্পানি আবেদন (Malaysia)", "৳১,৫০,০০০"],
  ["ডকুমেন্টস সাবমিশন", ""],
  ["অফার লেটার", ""],
  ["এপ্লাইড ফর ভিসা", ""],
  ["ভিসা প্রোসেসিং", ""],
  ["ভিসা এরাইভাল", "৳৫,০০,০০০"],
  ["BIOMETRIC Finger Print Registration", ""],
  ["Ticketing", ""],
];

const STATUS_GUIDE = [
  ["সম্পন্ন", "সবুজ চিহ্নে দেখাবে", "bg-emerald-600"],
  ["চলমান", "অফিসে প্রক্রিয়াধীন", "bg-amber-500"],
  ["অপেক্ষমাণ", "পরবর্তী কাজ বাকি", "bg-slate-300"],
];

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function TrackApplicationPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const trackingId =
    typeof params.trackingId === "string" ? params.trackingId : "";
  const phone = typeof params.phone === "string" ? params.phone : "";
  const hasLookup = Boolean(trackingId && phone);

  return (
    <>
      <HomeHeader />
      <main>
        <section className="relative -mt-6 overflow-hidden bg-[#052b50] px-5 py-16 text-white sm:px-10 lg:px-20 lg:py-24">
          <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full border border-yellow-300/20 sm:h-96 sm:w-96" />
          <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <div className="mb-8 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
                <span className="h-px w-12 bg-yellow-300" />
                <span>আবেদন ট্র্যাকিং</span>
              </div>
              <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
                আপনার আবেদনের <span className="text-yellow-300">অগ্রগতি</span>{" "}
                জানুন।
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-200">
                আপনার ট্র্যাকিং আইডি এবং নিবন্ধিত মোবাইল নম্বর দিয়ে আবেদনের
                সর্বশেষ অবস্থা জানতে পারবেন।
              </p>
            </div>
            <div className="border-l border-yellow-300/60 pl-5 text-sm leading-7 text-slate-300">
              <strong className="text-white">নিরাপদ যাচাই</strong>
              <br />
              ট্র্যাকিং আইডির সঙ্গে মোবাইল নম্বর দেওয়া বাধ্যতামূলক।
            </div>
          </div>
        </section>

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
              <form
                action="/track-application"
                className="mt-7 grid gap-5 sm:grid-cols-2"
                method="get"
              >
                <label className="text-xs font-bold text-[#102d4d]">
                  ট্র্যাকিং আইডি
                  <input
                    className="mt-2 w-full border-b-2 border-slate-200 bg-transparent px-0 py-3 text-sm uppercase outline-none transition placeholder:text-slate-400 focus:border-cyan-700"
                    name="trackingId"
                    placeholder="MWVG-2026-0001"
                    required
                  />
                </label>
                <label className="text-xs font-bold text-[#102d4d]">
                  নিবন্ধিত মোবাইল নম্বর
                  <input
                    className="mt-2 w-full border-b-2 border-slate-200 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-700"
                    name="phone"
                    placeholder="০১XXXXXXXXX"
                    type="tel"
                    required
                  />
                </label>
                <button
                  className="inline-flex w-fit items-center justify-center gap-3 bg-[#e9b52f] px-6 py-3 text-sm font-bold text-[#052b50] transition hover:bg-[#052b50] hover:text-white sm:col-span-2"
                  type="submit"
                >
                  আবেদন দেখুন <ArrowRightIcon className="h-4 w-4" />
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
                নিরাপত্তার জন্য এই পেজে আপনি নিজে কোনো ধাপ সম্পন্ন করতে পারবেন
                না। অফিসের অনুমোদিত কর্মী আপনার নথি যাচাই করে স্ট্যাটাস আপডেট
                করবেন।
              </p>
            </div>
          </div>
        </section>

        {hasLookup && (
          <section className="mx-auto max-w-6xl px-5 pt-12 sm:px-10 lg:px-20 lg:pt-16">
            <div className="border border-emerald-200 bg-emerald-50/70 p-5 sm:p-7">
              <div className="flex flex-col justify-between gap-4 border-b border-emerald-200 pb-5 sm:flex-row sm:items-start">
                <div>
                  <div className="flex items-center gap-3 text-emerald-700">
                    <CheckIcon className="h-5 w-5" />
                    <p className="text-xs font-bold uppercase tracking-[0.18em]">
                      ডেমো ফলাফল
                    </p>
                  </div>
                  <h2 className="mt-3 text-2xl font-bold text-[#102d4d]">
                    আবেদনের অগ্রগতি
                  </h2>
                  <p className="mt-1 text-sm text-slate-600">
                    ট্র্যাকিং আইডি: <strong>{trackingId}</strong>
                  </p>
                </div>
                <span className="w-fit border border-emerald-300 bg-white px-3 py-2 text-xs font-bold text-emerald-700">
                  তথ্য পাওয়া গেছে
                </span>
              </div>
              <p className="mt-5 border-l-2 border-yellow-400 pl-3 text-xs leading-6 text-slate-600">
                এটি পরীক্ষার জন্য তৈরি নমুনা ডেটা। বাস্তব ক্লায়েন্ট স্ট্যাটাস
                Supabase সংযুক্ত হলে অফিস থেকে আপডেট হবে। এই উদাহরণে প্রথম ২টি
                ধাপ সম্পন্ন এবং ৩য় ধাপ চলমান।
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {PROCESS_STEPS.map(([name, fee], index) => {
                  const status =
                    index < 2 ? "সম্পন্ন" : index === 2 ? "চলমান" : "অপেক্ষমাণ";
                  const statusColor =
                    index < 2
                      ? "text-emerald-700"
                      : index === 2
                        ? "text-amber-700"
                        : "text-slate-500";
                  const markerColor =
                    index < 2
                      ? "bg-emerald-600"
                      : index === 2
                        ? "bg-amber-500"
                        : "bg-slate-300";

                  return (
                    <div
                      key={`result-${name}`}
                      className="flex items-start gap-3 border border-white bg-white p-4"
                    >
                      <span
                        className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${markerColor}`}
                      >
                        {index < 2 ? (
                          <CheckIcon className="h-4 w-4" />
                        ) : (
                          String(index + 1).padStart(2, "0")
                        )}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-sm font-bold leading-6 text-[#102d4d]">
                          {name}
                        </h3>
                        <p className={`mt-1 text-xs font-bold ${statusColor}`}>
                          {status}
                          {fee ? ` · ${fee}` : ""}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-10 lg:px-20 lg:py-24">
          <div className="flex flex-col justify-between gap-5 border-b border-slate-200 pb-7 lg:flex-row lg:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">
                প্রক্রিয়ার মানচিত্র
              </p>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#102d4d] sm:text-4xl">
                আপনার যাত্রার ১৫টি ধাপ
              </h2>
            </div>
            <div className="max-w-sm text-sm leading-6 text-slate-500">
              <p>
                প্রতিটি আবেদন নথি, মেডিকেল ফলাফল, নিয়োগকর্তার সিদ্ধান্ত এবং
                সরকারি অনুমোদনের ওপর নির্ভর করে এগোয়।
              </p>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                {STATUS_GUIDE.map(([label, description, color]) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 text-xs"
                  >
                    <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
                    {label}: {description}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS_STEPS.map(([name, fee], index) => (
              <div
                key={name}
                className="group flex min-h-24 items-start gap-4 border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-[0_10px_25px_rgba(5,39,70,0.08)]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#eef4f6] text-sm font-black text-[#06345e] transition group-hover:bg-[#e9b52f]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold leading-6 text-[#102d4d]">
                    {name}
                  </h3>
                  {fee ? (
                    <p className="mt-1 text-xs font-bold text-amber-700">
                      প্রযোজ্য ফি: {fee}
                    </p>
                  ) : (
                    <p className="mt-1 text-xs text-slate-400">
                      স্ট্যাটাস অফিস থেকে আপডেট হবে
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#f0f5f7] px-5 py-12 sm:px-10 lg:px-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">
                সরাসরি সহায়তা
              </p>
              <h2 className="mt-2 text-2xl font-bold text-[#102d4d]">
                অনলাইনে তথ্য না মিললে অফিসে যোগাযোগ করুন
              </h2>
            </div>
            <button className="text-white">
                <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 bg-[#06345e] px-5 py-3 text-sm font-bold transition hover:bg-[#0b528b]"
            >
              <PhoneIcon className="h-4 w-4" />
              যোগাযোগের ঠিকানা
            </Link>
            </button>
          </div>
        </section>
      </main>
      <HomeFooter />
    </>
  );
}
