import Image from "next/image";
import Link from "next/link";
import { features } from "./data";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const HERO_SKYLINE =
  "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=2000&q=85";

export default function Hero() {
  return (
    <section
      id="home"
      /* Added -mt-4 to pull hero up behind the clip-path angle */
      className="relative -mt-4 min-h-97.5 overflow-hidden bg-[#0071bd]"
    >
      {/* City background */}
      <div className="absolute inset-0">
        <Image
          src={HERO_SKYLINE}
          alt="Malaysia skyline"
          fill
          sizes="100vw"
          preload
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#004a86]/90 via-[#0076be]/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-100 items-center px-6 py-10 lg:px-12">
        <div className="max-w-150 text-white">
          {/* slope text from left to right */}
          <div className="relative mb-6 inline-block origin-left -rotate-3 transition-transform">
            <p
              className={`${caveat.className} text-[20px] tracking-tight font-bold text-white drop-shadow-md sm:text-[26px] lg:text-[32px]`}
            >
              Your Global Career Starts Here
            </p>

            {/* Angled curved yellow-to-white underline swoosh */}
            <svg
              className="absolute -bottom-2.5 left-0 h-4 w-full overflow-visible"
              viewBox="0 0 300 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 5 18 Q 150 2, 295 2"
                stroke="url(#yellow-white-gradient)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="yellow-white-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#EAB308" />
                  <stop offset="65%" stopColor="#FEF08A" />
                  <stop offset="100%" stopColor="#FFFFFF" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <h1 className="text-[42px] font-extrabold leading-[0.95] sm:text-[55px] lg:text-[67px]">
            Work in
            <span className="block text-yellow-300">MALAYSIA</span>
          </h1>

          <p className="mt-3 text-base font-medium sm:text-[19px]">
            Better Job
            <span className="mx-3">|</span>
            Better Income
            <span className="mx-3">|</span>A Brighter Future
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-3 text-sm font-bold text-[#06345e] shadow-lg transition hover:-translate-y-0.5 hover:bg-yellow-300">
              <Link href="/track-application">
                Track Your Application <span aria-hidden="true">→</span>
              </Link>
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-white/70 px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#06345e]">
              <Link href="/contact" className="">
                Talk to an Advisor
              </Link>
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-center gap-2 rounded-full bg-black/15 px-2 py-1.5 backdrop-blur-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-lg font-bold text-[#06345e]">
                  {feature.icon}
                </div>

                <div className="pr-2 text-xs leading-tight">
                  <div className="font-bold">{feature.title}</div>
                  <div>{feature.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
