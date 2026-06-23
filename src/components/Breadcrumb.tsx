import Link from 'next/link'

interface BreadcrumbItem { label: string; href: string }

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: `https://nexoracalculators.vercel.app${item.href}`,
    })),
  }

  return (
    <nav aria-label="Breadcrumb">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ol className="flex flex-wrap items-center gap-2 text-sm text-white/50">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <span>/</span>}
            {i === items.length - 1 ? (
              <span className="text-white/80">{item.label}</span>
            ) : (
              <Link href={item.href} className="transition hover:text-brand">{item.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
