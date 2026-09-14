import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JobCategoryGrid } from "@/components/JobCategoryGrid";
import { PageHero } from "@/components/PageHero";

export default function JobCategoryPage() {
  return <><Header /><main><PageHero eyebrow="কাজের সুযোগ" title="আপনার দক্ষতার সঠিক বিভাগ" description="আপনার অভিজ্ঞতা ও আগ্রহ অনুযায়ী মালয়েশিয়ার বিভিন্ন খাতে কাজের সুযোগ দেখুন।" /><JobCategoryGrid /><section className="page-content shell"><div className="prose-block"><h2>কাজ বাছাইয়ের আগে জানুন</h2><p>প্রতিটি পদের যোগ্যতা, কাজের ধরন ও প্রয়োজনীয় কাগজপত্র সম্পর্কে আমাদের টিমের সঙ্গে কথা বলুন। নিয়োগকর্তা ও পদের তথ্য যাচাই না করে কোনো সিদ্ধান্ত নেবেন না।</p></div></section></main><Footer /></>;
}
