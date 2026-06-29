import { getCalculator, getAllCalculators } from '@/data/index'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import CalculatorWrapper from '@/components/CalculatorWrapper'
import Script from 'next/script'
import { categories } from '@/data/categories'
import { RelatedBlogPostsForCalculator } from '@/components/RelatedBlogPosts'
import ShareButtons from '@/components/ShareButtons'

type Props = { params: Promise<{ slug: string }> }

const siteUrl = 'https://easycalculatornex.pro'

export async function generateStaticParams() {
  return getAllCalculators().map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const config = getCalculator(slug)
  if (!config) return {}
  const category = categories.find(c => c.name === config.category)
  const keywords = [
    config.h1.toLowerCase(), 'free online calculator', 'instant results',
    ...config.useCases.map(u => u.toLowerCase()),
    ...config.faqs.map(f => f.q.toLowerCase().replace(/[?]/g, '')),
  ].filter(Boolean)
  return {
    title: config.title,
    description: config.metaDescription,
    keywords: keywords.slice(0, 15).join(', '),
    openGraph: {
      title: config.title,
      description: config.metaDescription,
      url: `${siteUrl}/${config.slug}`,
      siteName: 'Easy Calculator Nex',
      locale: 'en_US',
      type: 'website',
      images: [{ url: `${siteUrl}/og-image.svg`, width: 1200, height: 630, alt: config.h1 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.metaDescription,
    },
    alternates: { canonical: `${siteUrl}/${config.slug}` },
  }
}

export default async function CalculatorPage({ params }: Props) {
  const { slug } = await params
  const config = getCalculator(slug)
  if (!config) notFound()

  const category = categories.find(c => c.name === config.category)
  const breadcrumbItems = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: config.category, item: `${siteUrl}/category/${category?.slug || 'calculators'}` },
    { '@type': 'ListItem', position: 3, name: config.h1, item: `${siteUrl}/${config.slug}` },
  ]

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: config.h1,
    description: config.metaDescription,
    applicationCategory: 'Utilities',
    operatingSystem: 'All',
    browserRequirements: 'JavaScript',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@type': 'Organization', name: 'Easy Calculator Nex' },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  }

  return (
    <>
      <Script id="webapp-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CalculatorWrapper slug={slug} />
      <RelatedBlogPostsForCalculator calculatorSlug={slug} />
      <ShareButtons url={`${siteUrl}/${slug}`} title={config.h1} />
    </>
  )
}
