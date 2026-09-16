import Link from "next/link";
import { Caveat } from "next/font/google";
import { GlobeIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/icon";
import { Logo } from "../Logo";
import OfficeMap from "./OfficeMap";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["700"],
});

const QUICK_LINKS: { href: string; icon: string; label: string }[] = [
  { href: "/#home", icon: "🏠", label: "Home" },
  { href: "/about", icon: "👥", label: "About Us" },
  { href: "/#jobs", icon: "💼", label: "Job Category" },
  { href: "/#process", icon: "📋", label: "Process" },
  { href: "/#notice", icon: "📅", label: "Notice" },
  { href: "/contact", icon: "📞", label: "Contact Us" },
];

export default function HomeFooter() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#03254c] text-white">
      {/* Malaysia City Skyline Background Silhouette (Petronas Towers Left + Right Skyline) */}
      <div className="absolute inset-x-0 bottom-[35px] top-0 pointer-events-none opacity-20">
        <svg
          viewBox="0 0 1400 160"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <g fill="#4a8ec9">
            {/* Left Far Skyline */}
            <rect x="0" y="110" width="1400" height="50" />
            <rect x="10" y="80" width="20" height="80" />
            <rect x="35" y="65" width="25" height="95" />
            
            {/* Left Petronas Twin Towers Silhouette (behind column 1) */}
            <path d="M 65 160 V 40 H 68 V 30 H 70 V 20 H 71 V 8 H 72 V 20 H 73 V 30 H 75 V 40 H 78 V 160 Z" />
            <rect x="63" y="50" width="17" height="110" />
            <path d="M 86 160 V 40 H 89 V 30 H 91 V 20 H 92 V 8 H 93 V 20 H 94 V 30 H 96 V 40 H 99 V 160 Z" />
            <rect x="84" y="50" width="17" height="110" />
            <rect x="79" y="65" width="6" height="3" /> {/* Skybridge */}
            
            <rect x="110" y="70" width="30" height="90" />
            <rect x="145" y="85" width="20" height="75" />
            <rect x="170" y="75" width="25" height="85" />
            
            {/* Right Petronas Twin Towers Silhouette (far right background) */}
            <path d="M 1250 160 V 40 H 1253 V 30 H 1255 V 20 H 1256 V 8 H 1257 V 20 H 1258 V 30 H 1260 V 40 H 1263 V 160 Z" />
            <rect x="1248" y="50" width="17" height="110" />
            <path d="M 1271 160 V 40 H 1274 V 30 H 1276 V 20 H 1277 V 8 H 1278 V 20 H 1279 V 30 H 1281 V 40 H 1284 V 160 Z" />
            <rect x="1269" y="50" width="17" height="110" />
            <rect x="1264" y="65" width="6" height="3" /> {/* Skybridge */}

            {/* KL Tower Silhouette (Far Right) */}
            <line x1="1335" y1="10" x2="1335" y2="40" stroke="#4a8ec9" strokeWidth="2" />
            <path d="M 1327 45 C 1327 38, 1343 38, 1343 45 L 1340 58 H 1330 Z" />
            <rect x="1333" y="58" width="4" height="102" />

            {/* Right Far Buildings */}
            <rect x="1200" y="90" width="22" height="70" />
            <rect x="1295" y="75" width="24" height="85" />
            <rect x="1350" y="80" width="50" height="80" />
          </g>
        </svg>
      </div>

      {/* Main Grid Content */}
      <div className="relative z-10 mx-auto grid gap-6 px-6 pt-6 pb-4 sm:grid-cols-2 lg:grid-cols-[1.1fr_1.3fr_1.3fr_0.9fr] lg:px-12">
        
        {/* Column 1: Logo & Tagline */}
        <div className="flex flex-col justify-center">
          <Logo />

          <div className="relative mt-6 origin-left -rotate-6">
            <div
              className={`${caveat.className} text-[24px] font-bold leading-tight text-white/95 sm:text-[25px]`}
            >
              <div>Your Trusted Partner</div>
              <div>for a Better Tomorrow</div>
            </div>

            {/* Curved Gold Underline */}
            <svg
              className="mt-1 h-3 w-[180px] overflow-visible"
              viewBox="0 0 200 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 5 12 Q 100 2, 195 2"
                stroke="#EAB308"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Column 2: Contact Info */}
        <div className="border-t border-white/15 pt-4 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
          <div className="space-y-3 text-[14px] leading-tight text-white/90">
            <div className="flex items-start gap-3">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/80" />
              <div>
                <div className="font-semibold text-white/70">Contract Number</div>
                <div className="mt-0.5 font-bold">+880 1712-345678</div>
                <div className="font-bold">+880 1819-876543</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/80" />
              <div>
                <div className="font-semibold text-white/70">Our Address</div>
                <div className="mt-0.5 font-medium">House No 123, Road No 5,</div>
                <div className="font-medium">Dhanmondi, Dhaka-1205, Bangladesh</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/80" />
              <div>
                <div className="font-semibold text-white/70">Email</div>
                <div className="mt-0.5 font-medium">info@malaysiaworkvisa.com</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <GlobeIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/80" />
              <div>
                <div className="font-semibold text-white/70">Website</div>
                <div className="mt-0.5 font-medium">www.malaysiaworkvisa.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Office Map */}
        <div className="border-t border-white/15 pt-4 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
          <h3 className="mb-2 text-[16px] font-bold text-white">অফিস লোকেশন</h3>
          <OfficeMap />
        </div>

        {/* Column 4: Quick Links */}
        <div className="border-t border-white/15 pt-4 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
          <h3 className="mb-2 text-[16px] font-bold text-white">Quick Links</h3>

          <div className="space-y-2.5 text-[14px] text-white/90">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2.5 transition-colors hover:text-yellow-300"
              >
                <span className="text-[14px]">{link.icon}</span>
                <span className="font-medium">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10 bg-[#021b38]/60 backdrop-blur-xs">
        <div className="mx-auto flex flex-col items-center justify-between gap-2 px-6 py-2.5 text-[12px] text-white/70 sm:flex-row lg:px-10">
          <p className="">© 2026 Malaysia Work Visa. All rights reserved.</p>

          <div className="flex items-center gap-2 text-[11px] font-medium tracking-wider text-white/90">
            <span>Dream</span>
            <span>|</span>
            <span>Apply</span>
            <span>|</span>
            <span>Fly</span>
            <span className="text-xs">✈</span>
          </div>
        </div>
      </div>
    </footer>
  );
}