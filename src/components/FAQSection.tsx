interface FAQ { q: string; a: string }

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
  if (faqs.length === 0) return null
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
  return (
    <div className="mt-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h2 className="text-lg font-semibold text-brand">Frequently Asked Questions</h2>
      <div className="mt-4 space-y-3">
        {faqs.map((faq, i) => (
          <details key={i} className="group rounded-xl border border-white/[0.06] bg-white/[0.02] transition-all hover:border-white/[0.1]">
            <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm text-white/70 font-medium transition-colors hover:text-brand [&::-webkit-details-marker]:hidden">
              {faq.q}
              <svg className="h-4 w-4 text-white/30 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="border-t border-white/[0.04] px-5 py-4">
              <p className="text-sm text-white/50 leading-relaxed">{faq.a}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}
