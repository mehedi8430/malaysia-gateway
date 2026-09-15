import Hero from "@/components/home/Hero";
import HomeFooter from "@/components/home/HomeFooter";
import HomeHeader from "@/components/home/HomeHeader";


export default function NoticePage() {
  return (
    <>
      <HomeHeader />
      <main className="notice-page">
        <Hero/>
        <section className="page-content shell">
          {/* <NoticeBoard compact /> */}
        </section>
      </main>
      <HomeFooter />
    </>
  );
}
