import { getAllCalculators } from '@/data/index'
import Link from 'next/link'

export default function RelatedCalculators({ currentSlug, related }: { currentSlug: string; related: string[] }) {
  const all = getAllCalculators()
  const links = related
    .map(slug => all.find(c => c.slug === slug))
    .filter(Boolean) as { slug: string; h1: string }[]

  if (links.length === 0) return null

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-brand-light">Related Calculators</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {links.map(c => (
          <Link
            key={c.slug}
            href={`/${c.slug}`}
            className="rounded-lg border border-white/10 bg-brand-dark-2 px-4 py-2 text-sm text-white/70 transition hover:border-brand hover:text-brand"
          >
            {c.h1}
          </Link>
        ))}
      </div>
    </div>
  )
}
