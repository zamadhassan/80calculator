import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { blogPosts } from '@/data/blog'
import { notFound } from 'next/navigation'
import { RelatedCalculatorsFromBlog } from '@/components/RelatedBlogPosts'
import ShareButtons from '@/components/ShareButtons'

type Props = { params: Promise<{ slug: string }> }

const siteUrl = 'https://easycalculatornex.pro'

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) return {}
  return {
    title: `${post.title} | Easy Calculator Nex Blog`,
    description: post.description,
    keywords: `${post.category.toLowerCase()}, ${post.title.toLowerCase()}, calculator guide, free online calculator tips`,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteUrl}/blog/${post.slug}`,
      siteName: 'Easy Calculator Nex',
      locale: 'en_US',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: `${siteUrl}/og-image.svg`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    alternates: { canonical: `${siteUrl}/blog/${post.slug}` },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) notFound()

  const paragraphs = post.content.split('\n\n')

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: { '@type': 'Person', name: post.author },
    datePublished: post.date,
    publisher: { '@type': 'Organization', name: 'Easy Calculator Nex' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/blog/${post.slug}` },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${siteUrl}/blog/${post.slug}` },
    ],
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-white/40 transition-colors hover:text-brand mb-8">
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        Back to Blog
      </Link>

      <article>
        <div className="flex items-center gap-2 text-xs text-white/30 mb-4">
          <span className="rounded-full border border-white/[0.06] px-2.5 py-0.5">{post.category}</span>
          <span>{post.readTime}</span>
          <span>{post.date}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">{post.title}</h1>

        <div className="mt-4 flex items-center gap-3 text-sm text-white/40">
          <span>By {post.author}</span>
        </div>

        <div className="mt-8 prose prose-invert max-w-none">
          {paragraphs.map((p, i) => {
            if (p.startsWith('## ')) {
              return <h2 key={i} className="text-xl font-semibold text-white mt-8 mb-3">{p.replace('## ', '')}</h2>
            }
            if (p.startsWith('### ')) {
              return <h3 key={i} className="text-lg font-semibold text-white mt-6 mb-2">{p.replace('### ', '')}</h3>
            }
            const lines = p.split('\n')
            if (lines.some(l => l.startsWith('- ')) || lines.some(l => l.match(/^\d+\.\s/))) {
              const isOrdered = lines[0]?.match(/^\d+\.\s/)
              const items = lines.filter(l => l.trim()).map(l => l.replace(/^(\d+\.\s|[*-]\s)/, ''))
              if (isOrdered) {
                return (
                  <ol key={i} className="list-decimal pl-5 text-sm text-white/60 space-y-1 mt-2 mb-4">
                    {items.map((item, j) => <li key={j}>{item}</li>)}
                  </ol>
                )
              }
              return (
                <ul key={i} className="list-disc pl-5 text-sm text-white/60 space-y-1 mt-2 mb-4">
                  {items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              )
            }
            return <p key={i} className="text-sm text-white/60 leading-relaxed mt-4">{p}</p>
          })}
        </div>
      </article>

      <div className="mt-12 pt-8 border-t border-white/[0.06]">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/5"
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          All Articles
        </Link>
      </div>

      <RelatedCalculatorsFromBlog currentCategory={post.category} />
      <ShareButtons url={`${siteUrl}/blog/${post.slug}`} title={post.title} />
    </div>
  )
}
