import { getAllCalculators } from '@/data/index'
import Link from 'next/link'

export default function RelatedCalculators({ currentSlug, related }: { currentSlug: string; related: string[] }) {
  const all = getAllCalculators()
  const links = related
    .map(slug => all.find(c => c.slug === slug))
    .filter(Boolean) as { slug: string; h1: string }[]

  if (links.length === 0) return null

  return (
    <div className="mt-8 animate-slide-up">
      <h2 className="text-xl font-semibold gradient-gold-text">Related Calculators</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((c, i) => (
          <Link
            key={c.slug}
            href={`/${c.slug}`}
            className="card-glass-hover animate-slide-up opacity-0"
            style={{ animationDelay: `${i * 0.05}s`, animationFillMode: 'forwards' }}
          >
            <h3 className="font-medium text-white group-hover:text-brand transition-colors">{c.h1}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}
