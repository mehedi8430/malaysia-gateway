import Link from "next/link";
import { GlobeIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/icon";
import { Logo } from "../Logo";

const QUICK_LINKS: { href: string; icon: string; label: string }[] = [
  { href: "#home", icon: "⌂", label: "Home" },
  { href: "#about", icon: "♟", label: "About Us" },
  { href: "#jobs", icon: "▣", label: "Job Category" },
  { href: "#notice", icon: "▦", label: "Notice" },
  { href: "#contact", icon: "◷", label: "Contact Us" },
];

export default function HomeFooter() {
  return (
    <footer id="contact" className="bg-[#06345e] text-white">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-6 py-7 lg:grid-cols-[1.15fr_1.3fr_1.25fr_0.8fr] lg:px-10">
        {/* Logo */}
        <div>
          <Logo />

          <div className="mt-5 font-serif text-[17px] italic leading-6 text-white/90">
            Your Trusted Partner
            <br />
            <span className="text-yellow-300">for a Better Tomorrow</span>
          </div>

          <div className="mt-2 h-[2px] w-[100px] rotate-[-5deg] bg-yellow-400" />
        </div>

        {/* Contact */}
        <div className="border-l border-white/20 pl-5">
          <div className="space-y-3 text-[12px] leading-5 text-white/90">
            <div className="flex gap-3">
              <PhoneIcon className="mt-1 h-5 w-5 shrink-0" />
              <div>
                <div className="font-semibold">Contract Number</div>
                <div>+880 1712-345678</div>
                <div>+880 1819-876543</div>
              </div>
            </div>

            <div className="flex gap-3">
              <MapPinIcon className="mt-1 h-5 w-5 shrink-0" />
              <div>
                <div className="font-semibold">Our Address</div>
                <div>House No 123, Road No 5,</div>
                <div>Dhanmondi, Dhaka-1205, Bangladesh</div>
              </div>
            </div>

            <div className="flex gap-3">
              <MailIcon className="mt-1 h-5 w-5 shrink-0" />
              <div>
                <div className="font-semibold">Email</div>
                <div>info@malaysiaworkvisa.com</div>
              </div>
            </div>

            <div className="flex gap-3">
              <GlobeIcon className="mt-1 h-5 w-5 shrink-0" />
              <div>
                <div className="font-semibold">Website</div>
                <div>www.malaysiaworkvisa.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div>
          <h3 className="mb-3 text-[17px] font-bold">অফিস লোকেশন</h3>

          <div className="relative h-[130px] overflow-hidden rounded-lg border-4 border-white/20 bg-[#e6eef5]">
            {/* Replace this with Google Maps embed */}
            <div className="absolute inset-0 opacity-60">
              <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rotate-12">
                <div className="absolute left-0 top-[30px] h-[2px] w-full bg-gray-400" />
                <div className="absolute left-0 top-[80px] h-[2px] w-full bg-gray-400" />
                <div className="absolute left-[40px] top-0 h-full w-[2px] bg-gray-400" />
                <div className="absolute left-[120px] top-0 h-full w-[2px] bg-gray-400" />
                <div className="absolute left-[200px] top-0 h-full w-[2px] bg-gray-400" />
              </div>
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col items-center">
                <MapPinIcon className="h-10 w-10 fill-red-500 text-red-600" />
                <span className="rounded bg-white px-2 py-0.5 text-[11px] font-bold text-[#06345e] shadow">
                  Our Office
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="mb-3 text-[17px] font-bold">Quick Links</h3>

          <div className="space-y-3 text-[13px] text-white/90">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex gap-3 hover:text-yellow-300"
              >
                <span>{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-2 px-6 py-3 text-[11px] text-white/80 sm:flex-row lg:px-10">
          <p>© 2026 Malaysia Work Visa. All rights reserved.</p>

          <div className="flex items-center gap-3">
            <span>Dream</span>
            <span>|</span>
            <span>Apply</span>
            <span>|</span>
            <span>Fly</span>
            <span>✈</span>
          </div>
        </div>
      </div>
    </footer>
  );
}