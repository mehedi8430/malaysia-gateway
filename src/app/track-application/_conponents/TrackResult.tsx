import { CheckIcon } from "@/components/icon";
import { PROCESS_STEPS, type LookupSuccess } from "@/lib/tracking";

const STATUS_STYLE: Record<
  LookupSuccess["steps"][number],
  { statusColor: string; markerColor: string }
> = {
  সম্পন্ন: { statusColor: "text-emerald-700", markerColor: "bg-emerald-600" },
  চলমান: { statusColor: "text-amber-700", markerColor: "bg-amber-500" },
  অপেক্ষমাণ: { statusColor: "text-slate-500", markerColor: "bg-slate-300" },
};

export default function TrackResult({ state }: { state: LookupSuccess }) {
  return (
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
              ট্র্যাকিং আইডি: <strong>{state.trackingId}</strong>
            </p>
          </div>
          <span className="w-fit border border-emerald-300 bg-white px-3 py-2 text-xs font-bold text-emerald-700">
            তথ্য পাওয়া গেছে
          </span>
        </div>
        <p className="mt-5 border-l-2 border-yellow-400 pl-3 text-xs leading-6 text-slate-600">
          এটি পরীক্ষার জন্য তৈরি নমুনা ডেটা। বাস্তব ক্লায়েন্ট স্ট্যাটাস Supabase
          সংযুক্ত হলে অফিস থেকে আপডেট হবে। এই উদাহরণে প্রথম ২টি ধাপ সম্পন্ন এবং ৩য়
          ধাপ চলমান।
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((step, index) => {
            const status = state.steps[index];
            const { statusColor, markerColor } = STATUS_STYLE[status];

            return (
              <div
                key={`result-${step.name}`}
                className="flex items-start gap-3 border border-white bg-white p-4"
              >
                <span
                  className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${markerColor}`}
                >
                  {status === "সম্পন্ন" ? (
                    <CheckIcon className="h-4 w-4" />
                  ) : (
                    String(index + 1).padStart(2, "0")
                  )}
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold leading-6 text-[#102d4d]">
                    {step.name}
                  </h3>
                  <p className={`mt-1 text-xs font-bold ${statusColor}`}>
                    {status}
                    {step.fee ? ` · ${step.fee}` : ""}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}