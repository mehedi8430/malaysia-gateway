import Link from "next/link";
import { jobs } from "./site-data";

export function JobCategoryGrid() {
  return <section className="job-section shell"><div className="section-kicker">সুযোগ খুঁজুন</div><div className="section-heading-row"><div><h2>আপনার দক্ষতার <span>সঠিক জায়গা</span></h2><p>মালয়েশিয়ার বিভিন্ন খাতে যাচাই করা কাজের সুযোগ।</p></div><Link href="/job-category" className="outline-link">সব বিভাগ দেখুন ↗</Link></div><div className="job-grid">{jobs.map((job) => <Link className="job-tile" href="/job-category" key={job.english} style={{ "--job-accent": job.accent } as React.CSSProperties}><div className="job-icon">{job.icon}</div><div><h3>{job.name}</h3><p>{job.english}</p><small>{job.detail}</small></div><span className="tile-arrow">↗</span></Link>)}</div></section>;
}
