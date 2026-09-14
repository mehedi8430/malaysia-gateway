import Link from "next/link";
import { notices } from "./site-data";

export function NoticeBoard({ compact = false }: { compact?: boolean }) {
  return <section className={`notice-board ${compact ? "notice-compact" : ""}`}>
    <div className="section-kicker">সরকারি তথ্য ও ঘোষণা</div>
    <div className="notice-heading"><h2>সর্বশেষ <span>নোটিশ</span></h2><Link href="/notice" className="text-link">সব নোটিশ দেখুন ↗</Link></div>
    <div className="notice-list">{notices.map((notice) => <Link href="/notice" className="notice-item" key={notice.title}><time>{notice.date}</time><p>{notice.title}</p><span className="notice-tag">{notice.tag}</span><span className="notice-arrow">↗</span></Link>)}</div>
  </section>;
}
