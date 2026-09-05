import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { TrackingProvider } from "@/contexts/TrackingContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Malaysia Work Visa Agency",
  description: "Bangladesh-based government-approved manpower agency for Malaysia work visas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body>
        <LanguageProvider>
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
