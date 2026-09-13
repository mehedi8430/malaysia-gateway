import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { TrackingProvider } from "@/contexts/TrackingContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LangSync from "@/components/LangSync";

export const metadata: Metadata = {
  title: "Malaysia Work Visa Agency",
  description: "Bangladesh-based government-approved manpower agency for Malaysia work visas",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="bn">
      <body>
        <LanguageProvider>
          <LangSync />
          <TrackingProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <WhatsAppButton />
          </TrackingProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}