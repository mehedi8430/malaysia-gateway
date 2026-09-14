import Link from "next/link";
import { processGroups } from "./site-data";

export function ProcessSteps({ full = false }: { full?: boolean }) {
  const groups = full ? processGroups : processGroups.slice(0, 3);
  return <section className={`process-section ${full ? "process-full" : ""}`}><div className="shell"><div className="section-kicker">সহজ, স্বচ্ছ, নিয়মতান্ত্রিক</div><div className="section-heading-row"><div><h2>আপনার মালয়েশিয়া <span>যাত্রার ধাপ</span></h2><p>প্রতিটি পর্যায়ে পরিষ্কার তথ্য ও বাস্তব সহায়তা পাবেন।</p></div>{!full && <Link href="/process" className="outline-link light">বিস্তারিত প্রক্রিয়া ↗</Link>}</div><div className="process-grid">{groups.map((group) => <article className="process-card" key={group.number}><div className="process-number">{group.number}</div><h3>{group.title}</h3><p>{group.description}</p><ul>{group.items.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul></article>)}</div></div></section>;
}
