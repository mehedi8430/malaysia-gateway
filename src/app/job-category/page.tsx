import Hero from "@/components/home/Hero";
import HomeFooter from "@/components/home/HomeFooter";
import HomeHeader from "@/components/home/HomeHeader";


export default function JobCategoryPage() {
  return (
    <>
      <HomeHeader />
      <main>
        <Hero/>
        {/* <JobCategoryGrid /> */}
        <section className="page-content shell">
          <div className="prose-block">
            <h2>কাজ বাছাইয়ের আগে জানুন</h2>
            <p>
              প্রতিটি পদের যোগ্যতা, কাজের ধরন ও প্রয়োজনীয় কাগজপত্র সম্পর্কে
              আমাদের টিমের সঙ্গে কথা বলুন। নিয়োগকর্তা ও পদের তথ্য যাচাই না করে
              কোনো সিদ্ধান্ত নেবেন না।
            </p>
          </div>
        </section>
      </main>
      <HomeFooter />
    </>
  );
}
