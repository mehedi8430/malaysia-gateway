export default function TrackHero() {
  return (
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
            আপনার ট্র্যাকিং আইডি এবং নিবন্ধিত মোবাইল নম্বর দিয়ে আবেদনের সর্বশেষ
            অবস্থা জানতে পারবেন।
          </p>
        </div>
        <div className="border-l border-yellow-300/60 pl-5 text-sm leading-7 text-slate-300">
          <strong className="text-white">নিরাপদ যাচাই</strong>
          <br />
          ট্র্যাকিং আইডির সঙ্গে মোবাইল নম্বর দেওয়া বাধ্যতামূলক।
        </div>
      </div>
    </section>
  );
}