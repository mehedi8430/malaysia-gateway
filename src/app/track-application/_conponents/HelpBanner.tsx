import Link from "next/link";
import { PhoneIcon } from "@/components/icon";

export default function HelpBanner() {
  return (
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
  );
}