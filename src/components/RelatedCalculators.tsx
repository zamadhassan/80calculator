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
      <h2 className="text-lg font-semibold text-brand">Related Calculators</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(c => (
          <Link
            key={c.slug}
            href={`/${c.slug}`}
            className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm text-white/60 transition-all hover:border-brand/20 hover:bg-white/[0.04] hover:text-brand"
          >
            {c.h1}
          </Link>
        ))}
      </div>
    </div>
  )
}
