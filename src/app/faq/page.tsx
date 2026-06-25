import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { getAllCalculators } from '@/data'
import { categories } from '@/data/categories'

const siteUrl = 'https://easycalculatornex.pro'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Answers to common questions about Easy Calculator Nex. Learn how our free online calculators work, privacy policy, and tips for best results.',
  openGraph: {
    title: 'FAQ - Easy Calculator Nex',
    description: 'Answers to common questions about our free online calculators.',
    url: `${siteUrl}/faq`,
    siteName: 'Easy Calculator Nex',
    locale: 'en_US',
    type: 'website',
    images: [{ url: `${siteUrl}/og-image.svg`, width: 1200, height: 630, alt: 'FAQ - Easy Calculator Nex' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - Easy Calculator Nex',
    description: 'Answers to common questions about our free online calculators.',
  },
  alternates: { canonical: `${siteUrl}/faq` },
  keywords: ['faq', 'frequently asked questions', 'calculator help', 'free online calculators', 'how to use calculator'],
}

const generalFaqs = [
  {
    q: 'What is Easy Calculator Nex?',
    a: 'Easy Calculator Nex is a free online platform offering 90+ calculators across 7 categories including construction, finance, health, business, time tracking, date calculations, and math conversions. All calculators run entirely in your browser — no data is sent to any server.',
  },
  {
    q: 'Are the calculators really free?',
    a: 'Yes, every calculator on this site is completely free to use. There are no hidden fees, no subscription plans, and no credit card required. We do not even require you to create an account or sign up.',
  },
  {
    q: 'How accurate are the calculations?',
    a: 'Our calculators use standard mathematical formulas and JavaScript\'s built-in math operations. Results are typically accurate to 2-6 decimal places. However, all results should be considered estimates and verified with a professional when making important decisions.',
  },
  {
    q: 'Do you store my data or calculations?',
    a: 'No. All calculations happen entirely in your browser (client-side). We never send, store, or process your inputs on any server. Once you close the page, all data is gone. This is why we also display disclaimers on sensitive calculators like health and finance.',
  },
  {
    q: 'What kind of calculators do you offer?',
    a: 'We offer 90+ calculators across 7 categories: Construction & Home (paint, concrete, roofing, tile), Business & Ecommerce (margin, markup, ROI), Finance & Investment (loan payment, compound interest, CAGR), Work Time & Payroll (hours, overtime, timesheet), Health & Fitness (BMI, BMR, calorie, body fat), Date & Age (age, date difference, day of week), and Math & Conversion (percentage, length, weight, temperature).',
  },
  {
    q: 'Can I use these calculators on mobile?',
    a: 'Yes, the entire site is built with a mobile-first responsive design. All calculators work on smartphones, tablets, and desktop browsers. The layout adapts automatically to your screen size.',
  },
  {
    q: 'Do I need to create an account?',
    a: 'No account, registration, or signup is required. Simply visit any calculator page, enter your values, and get instant results.',
  },
  {
    q: 'How do I find a specific calculator?',
    a: 'You can use the search bar at the top of the page, browse by category from the Categories dropdown in the navigation menu, or scroll through the "All Calculators" section on the homepage.',
  },
  {
    q: 'Are the health calculators for medical advice?',
    a: 'No. Health calculators like BMI, BMR, and calorie calculators are for informational and educational purposes only. They are not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider.',
  },
  {
    q: 'Are the financial calculators for professional advice?',
    a: 'No. Financial calculators provide estimates based on the inputs you provide. They are for educational and planning purposes. Always consult a qualified financial advisor for investment, loan, or retirement decisions.',
  },
  {
    q: 'How often are new calculators added?',
    a: 'We regularly add new calculators based on user demand. If you have a suggestion, feel free to reach out through our GitHub repository.',
  },
  {
    q: 'Can I embed a calculator on my website?',
    a: 'Currently we do not offer an embed feature. However, you can link directly to any calculator page from your website.',
  },
  {
    q: 'What browsers are supported?',
    a: 'The site works on all modern browsers including Chrome, Firefox, Safari, and Edge. JavaScript must be enabled for the calculators to function.',
  },
  {
    q: 'Why do some calculators have disclaimers?',
    a: 'We add disclaimers to calculators in sensitive categories (health, finance, construction, period tracking) to remind users that results are estimates and should not replace professional advice. These are added at the request of legal/privacy guidelines.',
  },
  {
    q: 'How do I report a bug or suggest a feature?',
    a: 'Please open an issue on our GitHub repository at https://github.com/zamadhassan/80calculator. We appreciate your feedback.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Easy Calculator Nex?',
      acceptedAnswer: { '@type': 'Answer', text: 'Easy Calculator Nex is a free online platform offering 90+ calculators across 7 categories. All calculators run entirely in your browser — no data is sent to any server.' },
    },
    {
      '@type': 'Question',
      name: 'Are the calculators really free?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, every calculator is completely free. No subscriptions, no credit card, no account required.' },
    },
    {
      '@type': 'Question',
      name: 'Do you store my data?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. All calculations happen entirely in your browser. We never send, store, or process your inputs on any server.' },
    },
  ],
}

const faqBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${siteUrl}/faq` },
  ],
}

export default function FaqPage() {
  const allCalcs = getAllCalculators()
  const totalFaqs = allCalcs.reduce((sum, c) => sum + c.faqs.length, 0)

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Script id="faqpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="faq-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqBreadcrumbSchema) }} />
      {/* Hero */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-1.5 text-xs text-white/40 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
          Got Questions? We Have Answers
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
          Frequently Asked <span className="bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">Questions</span>
        </h1>
        <p className="mt-4 text-lg text-white/50 max-w-2xl mx-auto">
          {allCalcs.length} calculators, {categories.length} categories, {totalFaqs}+ calculator-specific FAQs — everything you need to know.
        </p>
      </div>

      {/* General FAQ */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand/20 to-brand/5 border border-brand/20">
            <span className="text-lg">ℹ️</span>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">General Questions</h2>
            <p className="text-sm text-white/40">About the platform</p>
          </div>
        </div>
        <div className="space-y-3">
          {generalFaqs.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-all hover:border-white/[0.1]">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none text-sm font-medium text-white/80 hover:text-white transition-colors [&::-webkit-details-marker]:hidden">
                {faq.q}
                <svg className="h-4 w-4 text-white/30 group-open:rotate-180 transition-transform shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/50 leading-relaxed border-t border-white/[0.06] pt-3 mt-0">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Calculator Categories */}
      <section className="mt-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand/20 to-brand/5 border border-brand/20">
            <span className="text-lg">📚</span>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">By Category</h2>
            <p className="text-sm text-white/40">Browse all calculators grouped by category</p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(cat => {
            const calcs = allCalcs.filter(c => c.category === cat.name)
            if (calcs.length === 0) return null
            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl" aria-hidden="true">{cat.icon}</span>
                  <h3 className="text-sm font-semibold text-white">{cat.name}</h3>
                </div>
                <p className="text-xs text-white/40 mb-3">{calcs.length} calculator{calcs.length > 1 ? 's' : ''}</p>
                <div className="flex flex-wrap gap-1.5">
                  {calcs.slice(0, 4).map(c => (
                    <span key={c.slug} className="text-[11px] text-white/30 bg-white/[0.03] px-2 py-0.5 rounded-full truncate max-w-[140px]">
                      {c.h1}
                    </span>
                  ))}
                  {calcs.length > 4 && (
                    <span className="text-[11px] text-brand/60">+{calcs.length - 4} more</span>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Still have questions */}
      <section className="mt-16 text-center rounded-xl border border-white/[0.06] bg-white/[0.02] p-10">
        <span className="text-3xl mb-3 block">💬</span>
        <h2 className="text-xl font-semibold text-white">Still Have Questions?</h2>
        <p className="mt-2 text-sm text-white/50 max-w-md mx-auto">
          Check the FAQ section on any individual calculator page for tool-specific questions, or visit our GitHub repository.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand to-brand-light px-6 py-2.5 text-sm font-semibold text-black transition-all hover:brightness-110 active:scale-95"
        >
          Browse All Calculators
        </Link>
      </section>
    </div>
  )
}
