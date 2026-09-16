import HomeFooter from "@/components/home/HomeFooter";
import HomeHeader from "@/components/home/HomeHeader";

const COLLABORATORS = [
  ["নিবন্ধন ও যাচাই", "Bangladesh One Overseas Ltd.", "সরকার অনুমোদিত নিবন্ধন ও নথি যাচাই"],
  ["চাকরি প্রস্তুতি", "Bengal Human Resources Development", "মালয়েশিয়ায় কর্মী নির্বাচন ও প্রস্তুতি"],
  ["ভিসা প্রক্রিয়া", "General Trading Company", "ভিসা আবেদন ও প্রক্রিয়ায় সমন্বয়"],
  ["যাত্রা প্রস্তুতি", "Messrs United Gulf Services", "প্রস্থান-পূর্ব প্রস্তুতি ও ব্রিফিং"],
  ["মালয়েশিয়া সমন্বয়", "Anesha Air International", "নিয়োগকর্তা পক্ষের সঙ্গে সমন্বয়"],
  ["নিবন্ধন ও যাচাই", "At-Taqwa Overseas Ltd.", "নিবন্ধন ও কাগজপত্র যাচাইয়ে সহায়তা"],
  ["চাকরি প্রস্তুতি", "Earth-Smart Overseas Ltd.", "কর্মী নির্বাচন ও নিয়োগ প্রস্তুতি"],
  ["ভিসা প্রক্রিয়া", "Khan Jahan Ali Overseas", "ভিসা আবেদন প্রক্রিয়ায় সহায়তা"],
  ["যাত্রা প্রস্তুতি", "M/S Al-Shupto Overseas", "প্রস্থান-পূর্ব প্রস্তুতিতে সমন্বয়"],
  ["মালয়েশিয়া সমন্বয়", "Motherland Overseas Ltd.", "মালয়েশিয়া পক্ষের সঙ্গে যোগাযোগ"],
  ["নিবন্ধন ও যাচাই", "Rifa International", "সরকার অনুমোদিত নিবন্ধন প্রক্রিয়া"],
  ["চাকরি প্রস্তুতি", "Valley Trade International", "নিয়োগ ও কর্মী প্রস্তুতিতে সহায়তা"],
  ["ভিসা প্রক্রিয়া", "A-Plus International", "ভিসা নথিপত্র ও আবেদন সমন্বয়"],
  ["যাত্রা প্রস্তুতি", "Al-Hayat Overseas", "প্রস্থানের আগে প্রয়োজনীয় প্রস্তুতি"],
  ["মালয়েশিয়া সমন্বয়", "Bhaluka Overseas", "মালয়েশিয়া নিয়োগকর্তার সঙ্গে সমন্বয়"],
  ["নিবন্ধন ও যাচাই", "Brothers Trading & Contracting Ltd.", "নিবন্ধন ও নথি যাচাই সহায়তা"],
  ["চাকরি প্রস্তুতি", "Chandpur International", "কর্মী নির্বাচন ও প্রস্তুতির সমন্বয়"],
  ["ভিসা প্রক্রিয়া", "Country Employment Agency", "ভিসা প্রক্রিয়ায় প্রয়োজনীয় সহায়তা"],
  ["যাত্রা প্রস্তুতি", "Goodness Services Ltd.", "প্রস্থান-পূর্ব প্রস্তুতি ও নির্দেশনা"],
  ["মালয়েশিয়া সমন্বয়", "Jewel Rinku Enterprise", "মালয়েশিয়া পক্ষের সঙ্গে সমন্বয়"],
  ["নিবন্ধন ও যাচাই", "M/S Satkhira International", "সরকার অনুমোদিত নিবন্ধন সমন্বয়"],
  ["চাকরি প্রস্তুতি", "Mangrove Career Link", "নিয়োগ ও কর্মসংস্থান প্রস্তুতি"],
  ["ভিসা প্রক্রিয়া", "Neighbor Associates Ltd.", "ভিসা আবেদন প্রক্রিয়ায় সমন্বয়"],
  ["যাত্রা প্রস্তুতি", "Tania Trade International", "যাত্রা প্রস্তুতিতে প্রয়োজনীয় সহায়তা"],
  ["মালয়েশিয়া সমন্বয়", "The Anchor Care Global Migration", "মালয়েশিয়া অভিবাসন পক্ষের সঙ্গে সমন্বয়"],
];

export default function AboutUsPage() {
  return (
    <>
      <HomeHeader />
      <main>
        <section className="relative -mt-6 overflow-hidden bg-[#052b50] px-5 py-20 text-white sm:px-10 lg:px-20 lg:py-28">
          <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full border border-yellow-300/20 sm:h-96 sm:w-96" />
          <div className="pointer-events-none absolute right-14 top-24 h-44 w-44 rounded-full border border-white/10" />
          <div className="relative mx-auto max-w-6xl">
            <div className="mb-12 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
              <span className="h-px w-12 bg-yellow-300" />
              <span>আমাদের পরিচয়</span>
            </div>
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <p className="mb-5 text-sm font-medium tracking-wide text-slate-300">MALAYSIA WORK VISA GATEWAY</p>
                <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
                  শুধু একটি চাকরি নয়, <span className="text-yellow-300">একটি নতুন শুরু</span>
                </h1>
              </div>
              <p className="max-w-xl border-l border-yellow-300/60 pl-5 text-base leading-8 text-slate-200">
                মালয়েশিয়ায় কাজের প্রস্তুতি, যাচাই ও যাত্রার প্রতিটি গুরুত্বপূর্ণ ধাপে সঠিক তথ্য এবং বাস্তব সহায়তা দেওয়াই আমাদের কাজ।
              </p>
            </div>
            <div className="mt-16 grid max-w-3xl grid-cols-3 border-y border-white/15 py-5">
              <div className="border-r border-white/15 pr-4"><strong className="block text-2xl text-yellow-300">২৫</strong><span className="mt-1 block text-[11px] text-slate-300">সেবা সহযোগী</span></div>
              <div className="border-r border-white/15 px-4"><strong className="block text-2xl text-yellow-300">১৫</strong><span className="mt-1 block text-[11px] text-slate-300">প্রক্রিয়ার ধাপ</span></div>
              <div className="pl-4"><strong className="block text-2xl text-yellow-300">১:১</strong><span className="mt-1 block text-[11px] text-slate-300">ব্যক্তিগত সহায়তা</span></div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-20 lg:py-24">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">কেন আমাদের সঙ্গে</p>
            <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#102d4d] sm:text-4xl">
              একটি নির্ভরযোগ্য প্রক্রিয়া, একাধিক দক্ষ সহায়তা
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-slate-500">
              বিদেশে কাজের সিদ্ধান্ত একটি পরিবারের জন্য গুরুত্বপূর্ণ। তাই আমরা প্রতিটি প্রার্থীকে শুধু একটি ফাইল হিসেবে দেখি না। আপনার কাগজপত্র, দক্ষতা ও প্রত্যাশা বুঝে প্রয়োজনীয় সেবা সমন্বয় করে আপনাকে প্রস্তুত করি।
            </p>
            <p className="mt-4 max-w-2xl text-[15px] leading-8 text-slate-500">
              আমাদের অফিসে নিবন্ধন ও যাচাইয়ের কাজ সম্পন্ন হয়। সহযোগী সেবা প্রতিষ্ঠানের মাধ্যমে প্রয়োজনীয় মেডিকেল, প্রশিক্ষণ, নথি ও যাত্রা প্রস্তুতির তথ্য দেওয়া হয়।
            </p>
          </div>
          <aside className="relative overflow-hidden border-t-4 border-yellow-400 bg-white p-7 shadow-[0_18px_45px_rgba(5,39,70,0.1)]">
            <span className="pointer-events-none absolute -right-3 -top-8 text-[130px] font-black leading-none text-slate-100">“</span>
            <h2 className="text-xl font-bold text-[#102d4d]">আমাদের অঙ্গীকার</h2>
            <p className="relative mt-4 text-sm leading-7 text-slate-500">
              প্রতিশ্রুতি দেওয়ার আগে সঠিক তথ্য। প্রতিটি ধাপে দায়িত্বশীল পরামর্শ। আপনার নথি, সময় ও গোপনীয়তার প্রতি পূর্ণ সম্মান।
            </p>
            <div className="mt-6 border-t border-slate-200 pt-5">
              <strong className="text-3xl text-[#06345e]">২৫</strong>
              <span className="ml-3 text-sm text-slate-500">সেবা সহযোগী নেটওয়ার্ক</span>
            </div>
          </aside>
        </section>

        <section className="bg-[#eef4f6] px-5 py-16 sm:px-10 lg:px-20 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col justify-between gap-6 border-b border-slate-300 pb-8 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">সহযোগী সেবা নেটওয়ার্ক</p>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#102d4d] sm:text-4xl">ভিসা প্রস্তুতির প্রতিটি প্রয়োজনের পাশে</h2>
              </div>
              <span className="text-sm font-semibold text-[#06345e]">০১ — ২৫ / নেটওয়ার্ক</span>
            </div>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-500">নিচের প্রতিষ্ঠানগুলো আমাদের সমন্বিত সেবা নেটওয়ার্কের অংশ। নির্দিষ্ট সেবা ও প্রাপ্যতা প্রার্থীর প্রক্রিয়া অনুযায়ী নিশ্চিত করা হয়।</p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {COLLABORATORS.map(([category, name, service], index) => (
                <article key={name} className="group border border-slate-200 border-t-2 border-t-transparent bg-white p-5 transition hover:-translate-y-1 hover:border-yellow-400 hover:border-t-yellow-400 hover:shadow-[0_14px_30px_rgba(5,39,70,0.1)]">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#e8b52f] text-xs font-black text-[#06345e]">{String(index + 1).padStart(2, "0")}</span>
                    <span className="pt-1 text-[10px] font-bold uppercase tracking-wider text-cyan-700">{category}</span>
                  </div>
                  <h3 className="mt-5 min-h-12 text-sm font-bold leading-6 text-[#102d4d]">{name}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{service}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 border-l-2 border-yellow-400 pl-4 text-xs leading-6 text-slate-500">সেবা গ্রহণের আগে সংশ্লিষ্ট প্রতিষ্ঠানের নাম, ঠিকানা, মূল্য ও অ্যাপয়েন্টমেন্ট আমাদের অফিস থেকে যাচাই করে নিন।</p>
          </div>
        </section>
      </main>
      <HomeFooter />
    </>
  );
}
