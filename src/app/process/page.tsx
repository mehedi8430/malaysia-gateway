import Hero from "@/components/home/Hero";
import HomeFooter from "@/components/home/HomeFooter";
import HomeHeader from "@/components/home/HomeHeader";


export default function ProcessPage() {
  return (
    <>
      <HomeHeader />
      <main>
        <Hero/>
        {/* <ProcessSteps full /> */}
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
      <HomeFooter />
    </>
  );
}
