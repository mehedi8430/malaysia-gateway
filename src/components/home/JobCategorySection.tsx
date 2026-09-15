import Image from "next/image";
import { jobCategories } from "./data";
import { MalaysiaFlag } from "./MalaysiaFlag";

export default function JobCategorySection() {
  return (
    <section
      id="jobs"
      className="relative overflow-hidden bg-linear-to-b from-white to-[#fff8e9] px-5 py-5 lg:px-10"
    >
      <div className="mx-auto">
        <div className="mb-5 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <div className="flex gap-4">
              <MalaysiaFlag className="size-18 rounded-full" />

              <div className="space-y-1">
                <h2 className="text-[35px] font-extrabold leading-none text-[#073968] sm:text-[43px]">
                  Malaysia <span className="text-[#ef7115]">Job Category</span>
                </h2>
                <p className="text-[15px] font-semibold text-[#0b528b]">
                  আপনার দক্ষতা অনুযায়ী বেছে নিন আপনার পছন্দের কাজ
                </p>
              </div>
            </div>
          </div>

          <div className="hidden rotate-[-3deg] text-right font-serif text-[21px] font-bold italic text-[#063b6b] md:block">
            More Jobs
            <br />
            <span className="text-[#0b6b9f]">More Opportunities</span>
            <div className="ml-10 text-[#e33b2d]">↗────────</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
          {jobCategories.map((job) => (
            <div
              key={job.title}
              className="group overflow-hidden rounded-xl border-2 border-[#e2e8ed] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-[95px] overflow-hidden">
                <Image
                  src={job.image}
                  alt={job.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 130px"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
              </div>

              <div className="flex min-h-[62px] items-center gap-2 px-2 py-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0a477a] text-lg text-white">
                  {job.icon}
                </div>

                <div className="leading-tight">
                  <h3 className="text-[12px] font-extrabold text-[#143e66]">
                    {job.title}
                  </h3>
                  <p className="mt-0.5 text-[10px] font-semibold text-[#345878]">
                    ({job.bangla})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
