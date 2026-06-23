import Link from 'next/link'
import { getAllCalculators } from '@/data/index'
import { categories } from '@/data/categories'
import SearchBar from '@/components/SearchBar'

export default function Home() {
  const calculators = getAllCalculators()
  const popular = calculators.slice(0, 12)

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-brand sm:text-5xl">Nexora Calculators</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
          Fast, free online calculators for work, money, health, and home projects.
        </p>
        <div className="mx-auto mt-8 max-w-xl">
          <SearchBar />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-brand-light">Popular Calculators</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {popular.map(c => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              data-calc={c.h1.toLowerCase()}
              className="rounded-xl border border-white/10 bg-brand-dark-2 p-4 transition hover:border-brand hover:bg-brand-dark-3"
            >
              <h3 className="font-medium text-white">{c.h1}</h3>
              <p className="mt-1 text-sm text-white/50">{c.category.split(',')[0]}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-brand-light">All Calculators by Category</h2>
        {categories.map(cat => {
          const catCalcs = calculators.filter(c => c.category === cat.name)
          if (catCalcs.length === 0) return null
          return (
            <div key={cat.slug} className="mt-8">
              <Link href={`/category/${cat.slug}`} className="group inline-flex items-center gap-2">
                <span className="text-xl">{cat.icon}</span>
                <h3 className="text-xl font-semibold text-white transition group-hover:text-brand">
                  {cat.name}
                </h3>
                <span className="text-sm text-white/40">({catCalcs.length})</span>
              </Link>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {catCalcs.map(c => (
                  <Link
                    key={c.slug}
                    href={`/${c.slug}`}
                    data-calc={c.h1.toLowerCase()}
                    className="rounded-lg border border-white/5 bg-brand-dark-3/50 px-3 py-2 text-sm text-white/60 transition hover:border-brand hover:text-brand"
                  >
                    {c.h1}
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}
