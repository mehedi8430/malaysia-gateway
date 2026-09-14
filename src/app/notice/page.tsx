import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { NoticeBoard } from "@/components/NoticeBoard";
import { PageHero } from "@/components/PageHero";

export default function NoticePage() {
  return (
    <>
      <Header />
      <main className="notice-page">
        <PageHero
          eyebrow="সরকারি তথ্য ও ঘোষণা"
          title="নোটিশ বোর্ড"
          description="নিবন্ধন, প্রশিক্ষণ ও প্রক্রিয়া সম্পর্কিত গুরুত্বপূর্ণ আপডেট এক জায়গায়।"
        />
        <section className="page-content shell">
          <NoticeBoard compact />
        </section>
      </main>
      <Footer />
    </>
  );
}
