import Link from "next/link";
import { navItems } from "./site-data";

export function Header() {
  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="shell utility-inner">
          <span>সরকার অনুমোদিত জনশক্তি রপ্তানিকারক প্রতিষ্ঠান</span>
          <span className="utility-detail">ঢাকা · বাংলাদেশ</span>
        </div>
      </div>
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="Malaysia Work Visa Gateway home">
          <span className="brand-mark">MW</span>
          <span className="brand-copy"><strong>MALAYSIA</strong><em>Work Visa Gateway</em></span>
        </Link>
        <details className="mobile-menu">
          <summary aria-label="মেনু খুলুন">মেনু</summary>
          <nav className="mobile-nav">{navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
        </details>
        <nav className="desktop-nav" aria-label="প্রধান নেভিগেশন">
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <Link href="/contact" className="header-cta">যোগাযোগ করুন <span>↗</span></Link>
      </div>
    </header>
  );
}
