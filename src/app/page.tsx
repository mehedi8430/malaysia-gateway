import HomeHeader from "@/components/home/HomeHeader";
import Hero from "@/components/home/Hero";
import NoticeSection from "@/components/home/NoticeSection";
import JobCategorySection from "@/components/home/JobCategorySection";
import ProcessSection from "@/components/home/ProcessSection";
import HomeFooter from "@/components/home/HomeFooter";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#0a315f]">
      <HomeHeader />
      <Hero />
      <NoticeSection />
      <JobCategorySection />
      <ProcessSection />
      <HomeFooter />
    </main>
  );
}