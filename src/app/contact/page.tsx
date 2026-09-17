import HomeFooter from "@/components/home/HomeFooter";
import HomeHeader from "@/components/home/HomeHeader";
import OfficeMap from "@/components/home/OfficeMap";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icon";

const CONTACT_CHANNELS = [
  {
    label: "ফোনে কথা বলুন",
    value: "+৮৮০ ১৪০৮-০৯০৬২৪",
    detail: "সকাল ৯:০০ – সন্ধ্যা ৬:০০",
    href: "tel:+8801408090624",
    icon: PhoneIcon,
  },
  {
    label: "ইমেইল পাঠান",
    value: "info@malaysiaworkvisa.com",
    detail: "সাধারণত ১ কর্মদিবসে উত্তর দিই",
    href: "mailto:info@malaysiaworkvisa.com",
    icon: MailIcon,
  },
];

export default function ContactPage() {
  return (
    <>
      <HomeHeader />
      <main>
        <section className="relative -mt-6 overflow-hidden bg-[#052b50] px-5 py-20 text-white sm:px-10 lg:px-20 lg:py-24">
          <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full border border-yellow-300/20 sm:h-96 sm:w-96" />
          <div className="pointer-events-none absolute bottom-0 right-1/4 h-32 w-32 rounded-full border border-white/10" />
          <div className="relative mx-auto max-w-6xl">
            <div className="mb-10 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
              <span className="h-px w-12 bg-yellow-300" />
              <span>যোগাযোগ করুন</span>
            </div>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
              <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
                আপনার পরবর্তী <span className="text-yellow-300">পদক্ষেপ</span>{" "}
                এখান থেকেই।
              </h1>
              <p className="max-w-md border-l border-yellow-300/60 pl-5 text-base leading-8 text-slate-200">
                কাজের সুযোগ, ভিসা প্রক্রিয়া বা প্রয়োজনীয় নথি নিয়ে জানতে
                আমাদের পরামর্শক দলের সঙ্গে সরাসরি কথা বলুন।
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white px-5 sm:px-10 lg:px-20">
          <div className="mx-auto grid max-w-6xl sm:grid-cols-2">
            {CONTACT_CHANNELS.map(
              ({ label, value, detail, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-4 border-b border-slate-200 py-6 transition hover:bg-slate-50 sm:border-r sm:px-6 sm:py-7 first:sm:pl-0 last:border-r-0"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#e9b52f] text-[#052b50] transition group-hover:bg-[#052b50] group-hover:text-yellow-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-cyan-700">
                      {label}
                    </span>
                    <strong className="mt-1 block text-sm text-[#102d4d] sm:text-base">
                      {value}
                    </strong>
                    <small className="mt-1 block text-xs text-slate-500">
                      {detail}
                    </small>
                  </span>
                </a>
              ),
            )}
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-20 lg:py-24">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">
              আপনার প্রশ্ন লিখুন
            </p>
            <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-[#102d4d] sm:text-4xl">
              সঠিক তথ্য দিয়ে সিদ্ধান্ত নিন
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500">
              আপনার প্রাথমিক তথ্য পাঠান। আমাদের দল আপনার প্রয়োজন বুঝে পরবর্তী
              ধাপ এবং প্রয়োজনীয় নথি সম্পর্কে জানাবে।
            </p>

            <form
              className="mt-9 grid gap-5 sm:grid-cols-2"
              action="mailto:info@malaysiaworkvisa.com"
              method="post"
              encType="text/plain"
            >
              <label className="text-xs font-bold text-[#102d4d]">
                আপনার নাম
                <input
                  className="mt-2 w-full border-b border-slate-300 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-700"
                  name="name"
                  placeholder="পুরো নাম লিখুন"
                  required
                />
              </label>
              <label className="text-xs font-bold text-[#102d4d]">
                মোবাইল নম্বর
                <input
                  className="mt-2 w-full border-b border-slate-300 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-700"
                  name="phone"
                  placeholder="০১XXXXXXXXX"
                  type="tel"
                  required
                />
              </label>
              <label className="text-xs font-bold text-[#102d4d] sm:col-span-2">
                আপনার আগ্রহের ক্ষেত্র
                <select
                  className="mt-2 w-full border-b border-slate-300 bg-transparent px-0 py-3 text-sm text-slate-600 outline-none transition focus:border-cyan-700"
                  name="interest"
                  defaultValue=""
                >
                  <option value="" disabled>
                    একটি বিষয় বেছে নিন
                  </option>
                  <option>চাকরির সুযোগ</option>
                  <option>ভিসা প্রক্রিয়া</option>
                  <option>মেডিকেল ও প্রশিক্ষণ</option>
                  <option>নথি যাচাই</option>
                </select>
              </label>
              <label className="text-xs font-bold text-[#102d4d] sm:col-span-2">
                আপনার বার্তা
                <textarea
                  className="mt-2 min-h-28 w-full resize-y border-b border-slate-300 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-700"
                  name="message"
                  placeholder="আপনার প্রশ্ন সংক্ষেপে লিখুন"
                />
              </label>
              <button
                className="inline-flex w-fit items-center gap-3 bg-[#e9b52f] px-6 py-3 text-sm font-bold text-[#052b50] transition hover:bg-[#052b50] hover:text-white sm:col-span-2"
                type="submit"
              >
                বার্তা পাঠান <span aria-hidden="true">→</span>
              </button>
            </form>
            <p className="mt-4 text-[11px] leading-5 text-slate-400">
              আপনার তথ্য শুধুমাত্র যোগাযোগের উদ্দেশ্যে ব্যবহার করা হবে।
            </p>
          </div>

          <aside className="space-y-5">
            <div className="border-t-4 border-yellow-400 bg-[#f0f5f7] p-7">
              <div className="flex items-start gap-4">
                <MapPinIcon className="mt-1 h-5 w-5 shrink-0 text-cyan-700" />
                <div>
                  <h2 className="text-xl font-bold text-[#102d4d]">
                    আমাদের অফিস
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    ২৪/২৫ দিলখুসা, মতিঝিল,
                    <br />
                    ঢাকা (সুন্দরবন কুরিয়ার সার্ভিস)
                  </p>
                  <a
                    className="mt-4 inline-block text-xs font-bold text-cyan-700 underline decoration-slate-300 underline-offset-4"
                    href="https://www.google.com/maps/search/?api=1&query=24/25+Dilkhusa,+Motijheel,+Dhaka,+Bangladesh"
                  >
                    ম্যাপে পথ দেখুন →
                  </a>
                </div>
              </div>
              <div className="mt-7 border-t border-slate-300 pt-5 text-sm leading-7 text-slate-500">
                <strong className="text-[#102d4d]">অফিস সময়</strong>
                <br />
                শনিবার – বৃহস্পতিবার, সকাল ৯:০০ – সন্ধ্যা ৬:০০
                <br />
                <span className="text-xs text-slate-400">শুক্রবার বন্ধ</span>
              </div>
            </div>
            <OfficeMap />
          </aside>
        </section>
      </main>
      <HomeFooter />
    </>
  );
}
