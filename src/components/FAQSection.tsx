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
      <h2 className="text-xl font-semibold text-brand-light">Frequently Asked Questions</h2>
      <div className="mt-4 space-y-3">
        {faqs.map((faq, i) => (
          <details key={i} className="rounded-lg border border-white/10 bg-brand-dark-2">
            <summary className="cursor-pointer px-4 py-3 font-medium text-white transition hover:text-brand">
              {faq.q}
            </summary>
            <p className="border-t border-white/10 px-4 py-3 text-white/70">{faq.a}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
