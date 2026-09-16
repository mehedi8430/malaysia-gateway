import React from "react";
import Image from "next/image";
import { CheckIcon } from "@/components/icon";
import { processSteps } from "./data";

// Placeholder background images for each step corresponding to the design
const PLACEHOLDER_IMAGES = [
  "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
];

const COLORS = {
  green: {
    bgHeader: "bg-[#057d38]",
    border: "border-[#057d38]",
    textHeader: "text-white",
    numberBg: "bg-white",
    numberText: "text-[#057d38]",
    checkBg: "bg-[#057d38]",
    iconColor: "text-[#057d38]",
  },
  blue: {
    bgHeader: "bg-[#0070c0]",
    border: "border-[#0070c0]",
    textHeader: "text-white",
    numberBg: "bg-white",
    numberText: "text-[#0070c0]",
    checkBg: "bg-[#0070c0]",
    iconColor: "text-[#0070c0]",
  },
  purple: {
    bgHeader: "bg-[#6b21a8]",
    border: "border-[#6b21a8]",
    textHeader: "text-white",
    numberBg: "bg-white",
    numberText: "text-[#6b21a8]",
    checkBg: "bg-[#6b21a8]",
    iconColor: "text-[#6b21a8]",
  },
} as const;

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="bg-linear-to-b from-[#f5fbff] to-white px-5 py-8 lg:px-10"
    >
      <div className="mx-auto">
        <div className="mb-6">
          <h2 className="text-[34px] font-extrabold leading-none text-[#063d70] sm:text-[40px]">
            Our Process
          </h2>
          <p className="mt-1 text-[15px] font-semibold text-[#0b528b] sm:text-[16px]">
            সহজ ও স্বচ্ছ প্রক্রিয়ায় আপনার মালয়েশিয়া যাত্রা
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_24px_1fr_24px_1fr] lg:items-center">
          {processSteps.map((step, index) => {
            const colors =
              COLORS[step.color as keyof typeof COLORS] ?? COLORS.green;

            return (
              <React.Fragment key={step.number}>
                {/* Process Card Container */}
                <div
                  className={`relative flex h-110 flex-col overflow-hidden rounded-3xl border-2 ${colors.border} bg-white shadow-md`}
                >
                  {/* Top Header Bar */}
                  <div
                    className={`${colors.bgHeader} flex items-center gap-3 px-4 py-3 text-white`}
                  >
                    {/* Circle Number */}
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${colors.numberBg} ${colors.numberText} text-[26px] font-black shadow-inner`}
                    >
                      {step.number}
                    </div>

                    {/* Header Title */}
                    <h3 className="text-[22px] font-extrabold leading-tight tracking-tight sm:text-[20px]">
                      {step.title}
                    </h3>
                  </div>

                  {/* Body Content */}
                  <div className="relative flex flex-1 flex-col justify-between overflow-hidden">
                    {/* List Items and Left Icon */}
                    <div className="relative z-10 flex gap-3 p-4">
                      {/* Left Side Category Icon */}
                      <div className={`${colors.iconColor} pt-1 shrink-0`}>
                        {step.icon}
                      </div>

                      {/* Checklist Items */}
                      <div className="space-y-2.5 pt-0.5">
                        {step.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2 text-[16px] font-bold leading-snug text-[#082952]"
                          >
                            <span
                              className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${colors.checkBg} text-white`}
                            >
                              <CheckIcon className="h-2.5 w-2.5 stroke-3" />
                            </span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Image Container with Gradient Fade */}
                    <div className="relative mt-4 h-90 w-full overflow-hidden rounded-b-[18px]">
                      <Image
                        src={step.image || PLACEHOLDER_IMAGES[index]}
                        alt={step.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 380px"
                        className="object-cover object-bottom"
                      />
                      {/* Top Fade Gradient overlay to blend seamlessly into white card background */}
                      <div className="absolute inset-0 bg-linear-to-b from-white via-white/40 to-transparent" />
                    </div>
                  </div>
                </div>

                {/* Double Arrow Connector between steps */}
                {index < processSteps.length - 1 && (
                  <div className="hidden items-center justify-center font-bold text-[#0070c0] lg:flex">
                    <span className="text-2xl font-black tracking-tighter">
                      »
                    </span>
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