import type { MetadataRoute } from 'next'
import { getAllCalculators } from '@/data/index'
import { categories } from '@/data/categories'

export default function sitemap(): MetadataRoute.Sitemap {
  const calculators = getAllCalculators()
  const calcUrls = calculators.map(c => ({
    url: `https://nexoracalculators.vercel.app/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const catUrls = categories.map(c => ({
    url: `https://nexoracalculators.vercel.app/category/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    { url: 'https://nexoracalculators.vercel.app', lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    ...catUrls,
    ...calcUrls,
  ]
}
