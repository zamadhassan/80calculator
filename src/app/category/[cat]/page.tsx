import { getAllCalculators } from '@/data/index'
import { categories } from '@/data/categories'
import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'
import CalculatorIcon from '@/components/CalculatorIcon'

type Props = { params: Promise<{ cat: string }> }

const siteUrl = 'https://80calculator.vercel.app'

export async function generateStaticParams() {
  return categories.map(c => ({ cat: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cat } = await params
  const category = categories.find(c => c.slug === cat)
  if (!category) return {}
  const calcs = getAllCalculators().filter(c => c.category === category.name)
  const calcNames = calcs.map(c => c.h1).join(', ')
  const title = `${category.name} - Free Online Calculators & Tools`
  const description = `Free ${category.name.toLowerCase()}: ${calcNames.slice(0, 120)}... Instant results, no signup required.`
  return {
    title,
    description,
    keywords: `${category.name.toLowerCase()}, free ${category.name.toLowerCase()}, online calculator, ${calcNames.slice(0, 100)}`,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/category/${category.slug}`,
      siteName: 'Easy Calculator Nex',
      locale: 'en_US',
      type: 'website',
      images: [{ url: `${siteUrl}/og-image.svg`, width: 1200, height: 630, alt: title }],
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

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category.name} Calculators`,
    description: category.description,
    url: `${siteUrl}/category/${category.slug}`,
    provider: { '@type': 'Organization', name: 'Easy Calculator Nex' },
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="collection-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <Link href="/" className="inline-flex items-center gap-1 text-sm text-white/40 transition-colors hover:text-brand">
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        Home
      </Link>
      <div className="mt-6 flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/20 to-brand/5 text-2xl">{category.icon}</div>
        <div>
          <h1 className="text-3xl font-bold sm:text-4xl tracking-tight">
            <span className="bg-gradient-to-r from-brand via-brand-light to-brand bg-clip-text text-transparent">{category.name}</span>
            <span className="text-white/30 text-xl font-normal ml-2">({calculators.length})</span>
          </h1>
          <p className="mt-1 text-white/50">{category.description}</p>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {calculators.map(c => (
          <Link
            key={c.slug}
            href={`/${c.slug}`}
            className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 hover:border-brand/20 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-brand/5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand/20 to-brand/5 text-sm text-brand mb-3">
              <CalculatorIcon slug={c.slug} className="h-4 w-4" />
            </div>
            <h2 className="text-base font-semibold text-white group-hover:text-brand transition-colors">{c.h1}</h2>
            <p className="mt-1 text-sm text-white/40 line-clamp-2">{c.intro}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
