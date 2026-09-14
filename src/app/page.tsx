import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JobCategoryGrid } from "@/components/JobCategoryGrid";
import { NoticeBoard } from "@/components/NoticeBoard";
import { ProcessSteps } from "@/components/ProcessSteps";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section className="hero"><div className="shell hero-content"><div className="hero-copy"><div className="section-kicker hero-kicker">আপনার বৈশ্বিক ক্যারিয়ার শুরু হোক</div><h1>মালয়েশিয়ায়<br /><span>কাজের নতুন</span> <em>সম্ভাবনা</em></h1><p>নিরাপদ, স্বচ্ছ ও নিয়মতান্ত্রিক প্রক্রিয়ায় মালয়েশিয়ায় আপনার কাঙ্ক্ষিত কাজের সুযোগ তৈরি করুন।</p><div className="hero-actions"><Link href="/job-category" className="primary-button">চাকরির সুযোগ দেখুন <span>↗</span></Link><Link href="/process" className="quiet-link">প্রক্রিয়াটি জানুন <span>→</span></Link></div></div><div className="hero-stat"><strong>১৫+</strong><span>বছরের অভিজ্ঞতা</span></div></div><div className="hero-bottom"><div>মালয়েশিয়া</div><span>Trusted recruitment partner for your next chapter</span></div></section>
        <section className="trust-strip"><div className="shell trust-items"><div><span>✓</span><p><strong>সরকার অনুমোদিত</strong><small>নিয়ম মেনে পরিচালিত</small></p></div><div><span>◎</span><p><strong>স্বচ্ছ প্রক্রিয়া</strong><small>প্রতিটি ধাপে পরিষ্কার তথ্য</small></p></div><div><span>◈</span><p><strong>বাস্তব সহায়তা</strong><small>আপনার পাশে আমাদের টিম</small></p></div><div><span>↗</span><p><strong>নিরাপদ যাত্রা</strong><small>দায়িত্বশীল কর্মসংস্থান</small></p></div></div></section>
        <section className="notice-section shell"><NoticeBoard /></section>
        <JobCategoryGrid />
        <ProcessSteps />
        <section className="closing-cta shell"><div><div className="section-kicker">আপনার পরবর্তী অধ্যায়</div><h2>সঠিক তথ্য দিয়ে শুরু করুন।<br /><span>আমরা পাশে আছি।</span></h2></div><Link href="/contact" className="primary-button">কথা বলুন <span>↗</span></Link></section>
      </main>
      <Footer />
    </div>
  );
}
