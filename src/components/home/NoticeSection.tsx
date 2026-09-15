import Image from "next/image";
import { CalendarIcon } from "@/components/icon";
import { notices } from "./data";

const NOTICE_BG_IMAGE =
  "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80";

export default function NoticeSection() {
  return (
    <section
      id="notice"
      className="bg-linear-to-b from-[#edf9ff] to-white px-5 py-5 lg:px-10"
    >
      <div className="mx-auto grid max-w-325 gap-5 lg:grid-cols-[270px_1fr]">
        {/* Notice intro */}
        <article className="relative flex min-h-[300px] overflow-hidden rounded-2xl border border-[#cce4f3] bg-[#0071bd] shadow-sm">
          <div className="absolute inset-0">
            <Image
              src={NOTICE_BG_IMAGE}
              alt=""
              fill
              sizes="(min-width: 1024px) 270px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#004a86]/95 via-[#0076be]/70 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
          </div>

          <div className="relative z-10 flex flex-col justify-start p-6 text-white">
            <div className="flex items-start gap-3">
              <div className="text-5xl">📢</div>

              <div>
                <h2 className="text-[23px] font-extrabold leading-tight text-white">
                  Government
                  <br />
                  <span>Notice</span>
                </h2>

                <p className="text-[17px] font-bold text-yellow-300">
                  (সরকারি তথ্য)
                </p>
              </div>
            </div>

            <p className="mt-5 text-[14px] font-medium leading-6 text-white/90">
              মালয়েশিয়া সরকার ও সংশ্লিষ্ট কর্তৃপক্ষের নির্দেশনা অনুযায়ী
              নিয়োগ সংক্রান্ত কর্মসূচির সময়সূচিতে পরিবর্তন হয়েছে:
            </p>
          </div>
        </article>

        {/* Notice list */}
        <div className="rounded-2xl border border-[#cce4f3] bg-white px-4 py-3 shadow-sm">
          {notices.map((notice, index) => (
            <div
              key={notice.date}
              className={`grid grid-cols-1 items-start gap-2 py-2.5 sm:grid-cols-[170px_1fr] sm:gap-4 ${
                index !== notices.length - 1 ? "border-b border-[#d9e8f0]" : ""
              }`}
            >
              <div className="flex h-8.5 items-center gap-2 rounded-full bg-linear-to-r from-[#ffb719] to-[#ffd23f] font-bold text-[#092f58] shadow-sm">
                <span className="flex h-8.5 w-8.5 items-center justify-center rounded-xl bg-[#073d69] text-white">
                  <CalendarIcon className="h-4 w-4" />
                </span>
                <span className="whitespace-nowrap text-[13px]">
                  {notice.date}
                </span>
              </div>

              <p className="pt-1 text-[14px] font-medium leading-5 text-[#163f66]">
                {notice.text}
                {notice.small && (
                  <span className="ml-1 text-[10px] text-gray-500">
                    {notice.small}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}