import type { MetadataRoute } from 'next'
import { getAllCalculators } from '@/data/index'
import { categories } from '@/data/categories'
import { blogPosts } from '@/data/blog'

const siteUrl = 'https://80calculator.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const calculators = getAllCalculators()
  const calcUrls = calculators.map(c => ({
    url: `${siteUrl}/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const catUrls = categories.map(c => ({
    url: `${siteUrl}/category/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const blogUrls = blogPosts.map(p => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${siteUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    ...blogUrls,
    ...catUrls,
    ...calcUrls,
  ]
}
