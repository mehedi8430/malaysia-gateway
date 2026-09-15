import React from "react";
import Image from "next/image";
import { ArrowRightIcon, CheckIcon } from "@/components/icon";
import { processSteps } from "./data";

const COLORS = {
  green: {
    header: "from-[#008f42] to-[#00a448]",
    border: "border-[#009a4b]",
    number: "bg-[#079b4a]",
    icon: "text-[#008d45]",
  },
  blue: {
    header: "from-[#008ad0] to-[#0878c6]",
    border: "border-[#0786cf]",
    number: "bg-[#078bd0]",
    icon: "text-[#078bd0]",
  },
  purple: {
    header: "from-[#7c12ae] to-[#8619c7]",
    border: "border-[#7612aa]",
    number: "bg-[#7913ac]",
    icon: "text-[#7913ac]",
  },
} as const;

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="bg-linear-to-b from-[#f5fbff] to-white px-5 py-6 lg:px-10"
    >
      <div className="mx-auto">
        <div className="mb-5">
          <h2 className="text-[38px] font-extrabold leading-none text-[#063d70]">
            Our Process
          </h2>
          <p className="mt-1 text-[16px] font-semibold text-[#0b528b]">
            সহজ ও স্বচ্ছ প্রক্রিয়ায় আপনার মালয়েশিয়া যাত্রা
          </p>
        </div>

        <div className="relative grid gap-10 lg:grid-cols-[1fr_40px_1fr_40px_1fr] lg:items-center">
          {processSteps.map((step, index) => {
            const colors =
              COLORS[step.color as keyof typeof COLORS] ?? COLORS.green;

            return (
              <React.Fragment key={step.number}>
                <div
                  className={`relative overflow-hidden rounded-2xl border-[3px] ${colors.border} bg-white shadow-md`}
                >
                  {/* Number */}
                  <div
                    className={`absolute left-[-3px] top-[-3px] z-20 flex h-[70px] w-[70px] items-center justify-center rounded-br-[38px] rounded-tl-[15px] ${colors.number} text-[40px] font-extrabold text-white`}
                  >
                    {step.number}
                  </div>

                  {/* Header */}
                  <div
                    className={`bg-linear-to-r ${colors.header} min-h-[72px] px-5 pb-3 pt-4 pl-[85px] text-white`}
                  >
                    <h3 className="text-[21px] font-extrabold leading-tight">
                      {step.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="relative min-h-[330px] overflow-hidden bg-white">
                    <div className="relative z-10 flex gap-4 px-6 py-5">
                      <div className={`${colors.icon} shrink-0`}>
                        {step.icon}
                      </div>

                      <div className="space-y-2">
                        {step.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2 text-[14px] font-semibold leading-5 text-[#254768]"
                          >
                            <span
                              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${colors.number} text-white`}
                            >
                              <CheckIcon className="h-3 w-3" />
                            </span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom image */}
                    <div className="absolute bottom-0 left-0 right-0 h-[145px]">
                      <Image
                        src={step.image}
                        alt=""
                        fill
                        sizes="(max-width: 1024px) 100vw, 300px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-white/10 via-white/40 to-white" />

                      <div className="absolute bottom-8 left-7 rotate-[-8deg] bg-white/85 px-4 py-1.5 text-[18px] font-bold tracking-wide text-[#172f46] shadow-sm">
                        {step.bottomText}
                      </div>
                    </div>
                  </div>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="hidden items-center justify-center text-[#0870a9] lg:flex">
                    <ArrowRightIcon className="h-9 w-9 stroke-[3]" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}