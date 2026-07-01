import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/data/blog'

const siteUrl = 'https://easycalculatornex.pro'

export const metadata: Metadata = {
  title: 'Blog - Calculator Tips & Guides',
  description: 'Read our latest articles on health, finance, construction, and productivity — with tips on using our calculators effectively.',
  openGraph: {
    title: 'Blog - Easy Calculator Nex',
    description: 'Calculator tips, guides, and educational content.',
    url: `${siteUrl}/blog`,
    siteName: 'Easy Calculator Nex',
    locale: 'en_US',
    type: 'website',
    images: [{ url: `${siteUrl}/og-image.svg`, width: 1200, height: 630, alt: 'Blog - Easy Calculator Nex' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Easy Calculator Nex',
    description: 'Calculator tips, guides, and educational content.',
  },
  alternates: { canonical: `${siteUrl}/blog` },
  keywords: ['calculator blog', 'calculator tips', 'BMI guide', 'compound interest guide', 'calorie deficit', 'financial calculator guide', 'health calculator tips'],
}

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-1.5 text-xs text-white/40 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
          Guides & Resources
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
          Our <span className="bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">Blog</span>
        </h1>
        <p className="mt-4 text-lg text-white/50 max-w-2xl mx-auto">
          Tips, guides, and educational content to help you get the most from our calculators.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map(post => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-brand/20 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-brand/5"
          >
            <div className="flex items-center gap-2 text-xs text-white/30 mb-3">
              <span className="rounded-full border border-white/[0.06] px-2.5 py-0.5">{post.category}</span>
              <span>{post.readTime}</span>
              <span>{post.date}</span>
            </div>
            <h2 className="text-lg font-semibold text-white group-hover:text-brand transition-colors">{post.title}</h2>
            <p className="mt-2 text-sm text-white/40 leading-relaxed">{post.description}</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-brand/60 group-hover:text-brand transition-colors">
              Read more
              <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
