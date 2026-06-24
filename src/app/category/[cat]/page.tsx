import { getAllCalculators } from '@/data/index'
import { categories } from '@/data/categories'
import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

type Props = { params: Promise<{ cat: string }> }

const siteUrl = 'https://80calculator.vercel.app'

export async function generateStaticParams() {
  return categories.map(c => ({ cat: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cat } = await params
  const category = categories.find(c => c.slug === cat)
  if (!category) return {}
  const title = `${category.name} Calculators - Free Online Tools`
  const description = `Free ${category.name.toLowerCase()} calculators. ${category.description}`
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/category/${category.slug}`,
      type: 'website',
      images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: { canonical: `${siteUrl}/category/${category.slug}` },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { cat } = await params
  const category = categories.find(c => c.slug === cat)
  if (!category) return <div className="p-8 text-center text-white/50">Category not found</div>

  const calculators = getAllCalculators().filter(c => c.category === category.name)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: category.name, item: `${siteUrl}/category/${category.slug}` },
    ],
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Link href="/" className="inline-flex items-center gap-1 text-sm text-white/40 transition-colors hover:text-brand">
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        Home
      </Link>
      <div className="mt-4 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-2xl">{category.icon}</div>
        <div>
          <h1 className="text-3xl font-bold sm:text-4xl">
            <span className="gradient-gold-text">{category.name}</span>
            <span className="text-white/40 text-xl font-normal ml-2">({calculators.length})</span>
          </h1>
          <p className="mt-1 text-white/50">{category.description}</p>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {calculators.map((c, i) => (
          <Link
            key={c.slug}
            href={`/${c.slug}`}
            className="card-glass-hover animate-slide-up"
            style={{ animationDelay: `${i * 0.03}s`, animationFillMode: 'forwards' }}
          >
            <h2 className="text-lg font-semibold text-white group-hover:text-brand transition-colors">{c.h1}</h2>
            <p className="mt-1 text-sm text-white/40 line-clamp-2">{c.intro}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
