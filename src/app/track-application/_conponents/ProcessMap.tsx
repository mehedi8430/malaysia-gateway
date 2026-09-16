import { PROCESS_STEPS, STATUS_GUIDE } from "@/lib/tracking";

export default function ProcessMap() {
  return (
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
            প্রতিটি আবেদন নথি, মেডিকেল ফলাফল, নিয়োগকর্তার সিদ্ধান্ত এবং সরকারি
            অনুমোদনের ওপর নির্ভর করে এগোয়।
          </p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            {STATUS_GUIDE.map(({ label, description, color }) => (
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
        {PROCESS_STEPS.map((step, index) => (
          <div
            key={step.name}
            className="group flex min-h-24 items-start gap-4 border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-[0_10px_25px_rgba(5,39,70,0.08)]"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#eef4f6] text-sm font-black text-[#06345e] transition group-hover:bg-[#e9b52f]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <h3 className="text-sm font-bold leading-6 text-[#102d4d]">
                {step.name}
              </h3>
              {step.fee ? (
                <p className="mt-1 text-xs font-bold text-amber-700">
                  প্রযোজ্য ফি: {step.fee}
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
  );
}