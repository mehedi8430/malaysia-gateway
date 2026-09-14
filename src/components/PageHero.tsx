export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-hero"><div className="shell page-hero-inner"><div className="section-kicker">{eyebrow}</div><h1>{title}</h1><p>{description}</p></div></section>;
}
