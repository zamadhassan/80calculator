import Link from 'next/link'
import { blogPosts } from '@/data/blog'
import { getAllCalculators } from '@/data/index'

export default function RelatedBlogPosts({ relatedSlugs }: { relatedSlugs: string[] }) {
  const all = blogPosts
  const links = relatedSlugs
    .map(slug => all.find(p => p.slug === slug))
    .filter(Boolean) as typeof blogPosts

  if (links.length === 0) return null

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-brand">Related Articles</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {links.map(p => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 transition-all hover:border-brand/20 hover:bg-white/[0.04]"
          >
            <p className="text-sm font-medium text-white">{p.title}</p>
            <p className="mt-1 text-xs text-white/40">{p.category} · {p.readTime}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export function RelatedBlogPostsForCalculator({ calculatorSlug }: { calculatorSlug: string }) {
  const related = blogPosts.filter(p => p.relatedCalculatorSlugs.includes(calculatorSlug))

  if (related.length === 0) return null

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-brand">Related Blog Posts</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {related.map(p => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 transition-all hover:border-brand/20 hover:bg-white/[0.04]"
          >
            <p className="text-sm font-medium text-white">{p.title}</p>
            <p className="mt-1 text-xs text-white/40">{p.category} · {p.readTime}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export function RelatedCalculatorsFromBlog({ calculatorSlugs }: { calculatorSlugs: string[] }) {
  const all = getAllCalculators()
  const related = calculatorSlugs
    .map(slug => all.find(c => c.slug === slug))
    .filter(Boolean) as ReturnType<typeof getAllCalculators>

  if (related.length === 0) return null

  return (
    <div className="mt-8 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
      <h2 className="text-sm font-semibold text-brand mb-3">Related Calculators</h2>
      <div className="grid gap-2 sm:grid-cols-2">
        {related.map(c => (
          <Link
            key={c.slug}
            href={`/${c.slug}`}
            className="text-sm text-white/50 hover:text-brand transition-colors"
          >
            {c.h1}
          </Link>
        ))}
      </div>
    </div>
  )
}
