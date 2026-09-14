import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { ProcessSteps } from "@/components/ProcessSteps";

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="প্রক্রিয়া"
          title="শুরু থেকে যাত্রা পর্যন্ত"
          description="১৫টি নির্দিষ্ট ধাপে আপনার আবেদন এগিয়ে যায়। প্রতিটি পর্যায়ে কী হবে, তা আগে থেকেই জানুন।"
        />
        <ProcessSteps full />
        <section className="page-content shell">
          <div className="prose-block">
            <h2>সময় ও তথ্য</h2>
            <p>
              প্রক্রিয়ার সময় আপনার নথি, মেডিকেল ফলাফল, নিয়োগকর্তার সিদ্ধান্ত
              এবং সরকারি অনুমোদনের ওপর নির্ভর করে। সর্বশেষ আপডেট জানতে অফিসে
              যোগাযোগ করুন।
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
