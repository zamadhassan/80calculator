import { getCalculator, getAllCalculators } from '@/data/index'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import CalculatorWrapper from '@/components/CalculatorWrapper'
import Script from 'next/script'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllCalculators().map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const config = getCalculator(slug)
  if (!config) return {}
  return {
    title: config.title,
    description: config.metaDescription,
    openGraph: { title: config.title, description: config.metaDescription },
  }
}

export default async function CalculatorPage({ params }: Props) {
  const { slug } = await params
  const config = getCalculator(slug)
  if (!config) notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: config.h1,
    description: config.metaDescription,
    applicationCategory: 'Utilities', operatingSystem: 'All', browserRequirements: 'JavaScript',
  }

  return (
    <>
      <Script id="webapp-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CalculatorWrapper slug={slug} />
    </>
  )
}
