import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Malaysia Work Visa Gateway | মালয়েশিয়ায় কাজের সুযোগ",
  description: "সরকার অনুমোদিত জনশক্তি রপ্তানিকারক প্রতিষ্ঠান। নিরাপদ ও নিয়মতান্ত্রিক পথে মালয়েশিয়ায় কাজের সুযোগ।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
