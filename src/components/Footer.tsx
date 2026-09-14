import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-intro">
          <Link href="/" className="brand brand-footer"><span className="brand-mark">MW</span><span className="brand-copy"><strong>MALAYSIA</strong><em>Work Visa Gateway</em></span></Link>
          <p>নিরাপদ ও নিয়মতান্ত্রিক পথে মালয়েশিয়ায় কাজের সুযোগ তৈরিতে আমরা আপনার পাশে আছি।</p>
          <span className="footer-rule" />
          <small>সরকার অনুমোদিত · স্বচ্ছ প্রক্রিয়া · নির্ভরযোগ্য সহায়তা</small>
        </div>
        <div><h2>দ্রুত লিংক</h2><div className="footer-links"><Link href="/about-us">আমাদের সম্পর্কে</Link><Link href="/job-category">চাকরির বিভাগ</Link><Link href="/process">প্রক্রিয়া</Link><Link href="/notice">নোটিশ</Link></div></div>
        <div><h2>যোগাযোগ</h2><address>হাউস ১২৩, রোড ৫<br />ধানমন্ডি, ঢাকা ১২০৫<br /><br /><a href="tel:+8801712345678">+৮৮০ ১৭১২-৩৪৫৬৭৮</a><br /><a href="mailto:info@malaysiaworkvisa.com">info@malaysiaworkvisa.com</a></address></div>
      </div>
      <div className="shell footer-bottom"><span>© ২০২৬ Malaysia Work Visa Gateway</span><span>আপনার নিরাপদ কর্মযাত্রার সঙ্গী</span></div>
    </footer>
  );
}
