import Image from "next/image";
import { features } from "./data";

const HERO_SKYLINE =
  "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=2000&q=85";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-97.5 overflow-hidden bg-[#0071bd]"
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

      <div className="relative mx-auto flex min-h-[390px] max-w-[1400px] items-center px-6 py-10 lg:px-12">
        <div className="max-w-[600px] text-white">
          <p className="mb-3 font-serif text-[20px] italic text-white lg:text-[25px]">
            Your Global Career Starts Here
          </p>

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
