import { CalendarIcon } from "@/components/icon";
import { notices } from "./data";

export default function NoticeSection() {
  return (
    <section
      id="notice"
      className="bg-linear-to-b from-[#edf9ff] to-white px-5 py-5 lg:px-10"
    >
      <div className="mx-auto grid max-w-325 gap-5 lg:grid-cols-[270px_1fr]">
        {/* Notice intro */}
        <div className="relative overflow-hidden rounded-2xl border border-[#cce4f3] bg-[#eefaff] p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="text-5xl text-red-600">📢</div>

            <div>
              <h2 className="text-[23px] font-extrabold leading-tight text-[#073968]">
                Government
                <br />
                <span>Notice</span>
              </h2>

              <p className="text-[17px] font-bold text-[#073968]">
                (সরকারি তথ্য)
              </p>
            </div>
          </div>

          <p className="relative z-10 mt-7 text-[14px] font-medium leading-6 text-[#143e66]">
            মালয়েশিয়া সরকার ও সংশ্লিষ্ট কর্তৃপক্ষের নির্দেশনা অনুযায়ী
            নিয়োগ সংক্রান্ত কর্মসূচির সময়সূচিতে পরিবর্তন হয়েছে:
          </p>

          <div className="pointer-events-none absolute -bottom-4 left-0 text-[75px] opacity-20">
            🏙️
          </div>
        </div>

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