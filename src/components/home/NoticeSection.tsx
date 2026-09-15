import { CalendarIcon } from "@/components/icon";
import { notices } from "./data";
import NoticeIntro from "./NoticeIntro";

export default function NoticeSection() {
  return (
    <section
      id="notice"
      className="bg-linear-to-b from-[#edf9ff] to-white px-5 py-5 lg:px-10"
    >
      <div className="mx-auto grid gap-5 lg:grid-cols-[320px_1fr]">
        {/* Notice intro */}
        <NoticeIntro />

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
                <span className="whitespace-nowrap text-[14px]">
                  {notice.date}
                </span>
              </div>

              <p className="pt-1 text-[14px] font-semibold leading-5 text-[#163f66]">
                {notice.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
