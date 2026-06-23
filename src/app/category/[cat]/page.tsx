import { getAllCalculators } from '@/data/index'
import { categories } from '@/data/categories'
import Link from 'next/link'
import type { Metadata } from 'next'

type Props = { params: Promise<{ cat: string }> }

export async function generateStaticParams() {
  return categories.map(c => ({ cat: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cat } = await params
  const category = categories.find(c => c.slug === cat)
  if (!category) return {}
  return {
    title: `${category.name} Calculators`,
    description: `Free ${category.name.toLowerCase()} calculators. ${category.description}`,
  }
}

export default async function CategoryPage({ params }: Props) {
  const { cat } = await params
  const category = categories.find(c => c.slug === cat)
  if (!category) return <div className="p-8 text-center text-white/50">Category not found</div>

  const calculators = getAllCalculators().filter(c => c.category === category.name)

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Link href="/" className="text-sm text-white/50 transition hover:text-brand">&larr; Home</Link>
      <h1 className="mt-4 text-3xl font-bold text-brand sm:text-4xl">{category.name} Calculators</h1>
      <p className="mt-2 text-lg text-white/60">{category.description}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {calculators.map(c => (
          <Link
            key={c.slug}
            href={`/${c.slug}`}
            className="rounded-xl border border-white/10 bg-brand-dark-2 p-5 transition hover:border-brand"
          >
            <h2 className="text-lg font-semibold text-white">{c.h1}</h2>
            <p className="mt-1 text-sm text-white/50">{c.intro.slice(0, 100)}...</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
