import Image from "next/image";
import { jobCategories } from "./data";
import { MalaysiaFlag } from "./MalaysiaFlag";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["700"],
});

export default function JobCategorySection() {
  return (
    <section
      id="jobs"
      className="relative overflow-hidden bg-linear-to-b from-white to-[#fff8e9] px-5 py-5 lg:px-10"
    >
      <div className="mx-auto space-y-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <div className="flex items-center gap-4">
              <MalaysiaFlag className="size-16 shrink-0 rounded-full sm:size-18" />

              <div className="space-y-1">
                <h2 className="text-[32px] font-extrabold leading-none text-[#073968] sm:text-[43px]">
                  Malaysia <span className="text-[#ef7115]">Job Category</span>
                </h2>
                <p className="text-[14px] font-semibold text-[#0b528b] sm:text-[15px]">
                  আপনার দক্ষতা অনুযায়ী বেছে নিন আপনার পছন্দের কাজ
                </p>
              </div>
            </div>
          </div>

          {/* More Jobs Section - Higher Rotation & Matching Airplane */}
          <div className="hidden items-center gap-3 -mt-4 md:flex">
            {/* Rotated Text & Underline Wrapper */}
            <div className="relative origin-right -rotate-8 text-left">
              <div
                className={`${caveat.className} text-[24px] font-bold leading-[1.05] tracking-tight text-[#083363] lg:text-[28px]`}
              >
                <div>More Jobs</div>
                <div>More Opportunities</div>
              </div>

              {/* Curved Red Swoosh Underline */}
              <svg
                className="absolute -bottom-2.5 left-0 h-3.5 w-full overflow-visible"
                viewBox="0 0 240 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 5 14 Q 120 4, 235 2"
                  stroke="#DC2626"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Jet Airplane Silhouette Matching original image angle */}
            <div className="h-10 w-11 shrink-0 -rotate-12 self-start mt-4">
              <svg
                viewBox="0 0 100 100"
                fill="#083363"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full drop-shadow-sm"
              >
                {/* Main Fuselage & Wings */}
                <path d="M 92 18 L 62 40 L 22 22 L 14 26 L 42 48 L 22 62 L 12 56 L 6 60 L 18 74 L 30 88 L 34 82 L 28 72 L 48 58 L 74 84 L 80 78 L 66 46 L 94 28 Z" />
                {/* Engine Pod Detail */}
                <path d="M 40 68 L 48 74 L 54 70 L 46 64 Z" />
              </svg>
            </div>
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