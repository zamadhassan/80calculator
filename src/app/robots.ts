import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
      { userAgent: '*', allow: '/', disallow: '/api/' },
    ],
    sitemap: 'https://80calculator.vercel.app/sitemap.xml',
  }
}
