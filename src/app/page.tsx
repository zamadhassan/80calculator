import Link from 'next/link'
import { getAllCalculators } from '@/data/index'
import { categories } from '@/data/categories'
import SearchBar from '@/components/SearchBar'

export default function Home() {
  const calculators = getAllCalculators()

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-3xl border border-white/[0.04] bg-gradient-to-b from-white/[0.02] to-transparent p-8 sm:p-12 lg:p-16">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand/3 rounded-full blur-3xl" />
        <div className="relative">
          <span className="tag mb-4 inline-block">80+ Free Calculators</span>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            <span className="gradient-gold-text">Nexora</span>
            <span className="text-white"> Calculators</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/50 leading-relaxed">
            Fast, free online calculators for work, money, health, and home projects.
            Instant results, no signup required.
          </p>
          <div className="mt-8 max-w-xl">
            <SearchBar />
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="section-title">Categories</h2>
        <p className="mt-2 text-white/40">Browse calculators by category</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((cat, i) => {
            const count = calculators.filter(c => c.category === cat.name).length
            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="card-glass-hover group animate-slide-up opacity-0"
                style={{ animationDelay: `${i * 0.05}s`, animationFillMode: 'forwards' }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-xl">
                    {cat.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-white group-hover:text-brand transition-colors truncate">
                      {cat.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/40 line-clamp-2">{cat.description}</p>
                    <span className="mt-2 inline-flex items-center text-xs text-brand/70">
                      {count} calculator{count !== 1 ? 's' : ''}
                      <svg className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="mt-16">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="section-title">Popular Calculators</h2>
            <p className="mt-1 text-sm text-white/40">Most used tools</p>
          </div>
          <Link href="/" className="text-sm text-brand/60 hover:text-brand transition-colors">
            View all &rarr;
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {calculators.slice(0, 8).map((c, i) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              data-calc={c.h1.toLowerCase()}
              className="card-glass-hover group animate-slide-up opacity-0"
              style={{ animationDelay: `${i * 0.05}s`, animationFillMode: 'forwards' }}
            >
              <h3 className="font-medium text-white group-hover:text-brand transition-colors">{c.h1}</h3>
              <p className="mt-1 text-sm text-white/40">{c.category.split(',')[0]}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="section-title">All Calculators by Category</h2>
        <div className="mt-8 space-y-10">
          {categories.map(cat => {
            const catCalcs = calculators.filter(c => c.category === cat.name)
            if (catCalcs.length === 0) return null
            return (
              <div key={cat.slug} className="animate-slide-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                <div className="flex items-center gap-3">
                  <span className="text-xl">{cat.icon}</span>
                  <Link href={`/category/${cat.slug}`} className="group inline-flex items-center gap-2">
                    <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-brand">
                      {cat.name}
                    </h3>
                    <span className="text-sm text-white/30">({catCalcs.length})</span>
                    <svg className="h-4 w-4 text-white/20 transition-all group-hover:translate-x-0.5 group-hover:text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
                <div className="divider-gradient mt-3" />
                <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {catCalcs.map(c => (
                    <Link
                      key={c.slug}
                      href={`/${c.slug}`}
                      data-calc={c.h1.toLowerCase()}
                      className="group rounded-xl border border-white/[0.04] bg-white/[0.02] px-4 py-3 text-sm text-white/40 transition-all hover:border-brand/20 hover:bg-white/[0.04] hover:text-brand"
                    >
                      {c.h1}
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
