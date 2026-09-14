import Link from "next/link";
import { MenuIcon, PhoneIcon } from "@/components/icon";

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="relative flex h-[55px] w-[65px] items-center justify-center">
      <div className="absolute bottom-1 h-9 w-9 rounded-t-full border-[5px] border-white" />
      <div className="absolute bottom-0 left-2 h-9 w-[5px] bg-white" />
      <div className="absolute bottom-0 left-[22px] h-11 w-[5px] bg-white" />
      <div className="absolute bottom-0 right-2 h-7 w-[5px] bg-white" />
      <div className="absolute right-0 top-0 text-3xl font-black text-yellow-400">
        ↗
      </div>
    </div>

    <div className="leading-none">
      <div className="text-[25px] tracking-wider font-extrabold text-white">
        MALAYSIA
      </div>
      <div className="text-[22px] font-bold text-yellow-400">Work Visa</div>
    </div>
  </div>
);

export { Logo };

export default function HomeHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[#06345e] shadow-lg">
      <div className="mx-auto flex h-[78px] max-w-[1400px] items-center justify-between px-5 lg:px-10">
        <Link href="#home" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {[
            ["Home", "#home"],
            ["About Us", "#about"],
            ["Job Category", "#jobs"],
            ["Process", "#process"],
            ["Notice", "#notice"],
            ["Contact", "#contact"],
          ].map(([label, href], index) => (
            <span
              key={label}
              className={`relative py-7 text-[14px] font-medium text-white transition hover:text-yellow-300 ${
                index === 0
                  ? "after:absolute after:bottom-4.25 after:left-0 fter:h-0.75 after:w-full after:bg-yellow-400"
                  : ""
              }`}
            >
              <Link href={href}>{label}</Link>
            </span>
          ))}
        </nav>

        <Link
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-linear-to-r from-yellow-300 to-yellow-500 px-6 py-3 text-sm font-bold text-[#092c51] shadow-md transition hover:scale-105 md:flex"
        >
          <PhoneIcon className="h-4 w-4" />
          Contact Us
        </Link>

        <button className="rounded-lg p-2 text-white lg:hidden">
          <MenuIcon />
        </button>
      </div>
    </header>
  );
}
