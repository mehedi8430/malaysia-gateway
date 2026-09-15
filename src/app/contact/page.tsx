import Hero from "@/components/home/Hero";
import HomeFooter from "@/components/home/HomeFooter";
import HomeHeader from "@/components/home/HomeHeader";


export default function ContactPage() {
  return (
    <>
      <HomeHeader />
      <main>
        <Hero/>
        <section className="page-content shell info-layout">
          <div className="prose-block">
            <h2>
              সঠিক তথ্যের জন্য
              <br />
              সরাসরি যোগাযোগ করুন
            </h2>
            <p>
              আমাদের পরামর্শক দল আপনার প্রাথমিক প্রশ্নের উত্তর দিতে এবং পরবর্তী
              ধাপ বুঝিয়ে দিতে প্রস্তুত। অফিসে আসার আগে ফোন করে সময় জেনে নিন।
            </p>
            <div className="contact-box">
              <h2>অফিস ঠিকানা</h2>
              <p>
                হাউস ১২৩, রোড ৫<br />
                ধানমন্ডি, ঢাকা ১২০৫
              </p>
              <p>
                <a href="tel:+8801712345678">+৮৮০ ১৭১২-৩৪৫৬৭৮</a>
                <br />
                <a href="mailto:info@malaysiaworkvisa.com">
                  info@malaysiaworkvisa.com
                </a>
              </p>
            </div>
          </div>
          <aside className="contact-box">
            <h2>অফিস সময়</h2>
            <p>
              শনিবার – বৃহস্পতিবার
              <br />
              সকাল ৯:০০ – সন্ধ্যা ৬:০০
            </p>
            <span className="footer-rule" />
            <p>শুক্রবার বন্ধ</p>
            <p>জরুরি তথ্যের জন্য ফোনে যোগাযোগ করুন।</p>
          </aside>
        </section>
      </main>
      <HomeFooter />
    </>
  );
}
