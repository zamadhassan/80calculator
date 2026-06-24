import Link from 'next/link'
import { getAllCalculators } from '@/data/index'
import { categories } from '@/data/categories'
import SearchBar from '@/components/SearchBar'
import CalculatorIcon from '@/components/CalculatorIcon'

export default function Home() {
  const calculators = getAllCalculators()
  const popular = calculators.slice(0, 8)

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-sm text-brand/80">
          <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
          80+ Free Calculators
        </div>
        <h1 className="mt-6 text-4xl font-bold sm:text-5xl lg:text-6xl tracking-tight">
          <span className="text-white">Smart</span>{' '}
          <span className="bg-gradient-to-r from-brand via-brand-light to-brand bg-clip-text text-transparent">Calculators</span>
          <br />
          <span className="text-white/60">for Every Need</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/40 leading-relaxed">
          Free online calculators for work, money, health, and home projects. Instant results, no signup.
        </p>
        <div className="mx-auto mt-8 max-w-lg">
          <SearchBar />
        </div>
      </section>

      {/* Stats */}
      <section className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] sm:grid-cols-4">
        {[
          { value: '80+', label: 'Calculators' },
          { value: '100%', label: 'Free to Use' },
          { value: '7', label: 'Categories' },
          { value: '0', label: 'Signup Required' },
        ].map((stat, i) => (
          <div key={i} className="bg-[#1c1c1c] px-6 py-8 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">{stat.value}</div>
            <div className="mt-1 text-sm text-white/40">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Categories */}
      <section className="mt-20">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">Categories</h2>
            <p className="mt-1 text-sm text-white/40">Browse calculators by category</p>
          </div>
          <Link href="/" className="text-sm text-brand/60 hover:text-brand transition-colors">
            View all &rarr;
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((cat) => {
            const count = calculators.filter(c => c.category === cat.name).length
            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-brand/20 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-brand/5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand/20 to-brand/5 text-xl">
                    {cat.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-white group-hover:text-brand transition-colors">{cat.name}</h3>
                    <p className="mt-1 text-sm text-white/40 line-clamp-2">{cat.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs text-brand/60">
                      {count} calculator{count !== 1 ? 's' : ''}
                      <svg className="h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Popular */}
      <section className="mt-20">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">Popular Calculators</h2>
            <p className="mt-1 text-sm text-white/40">Most used tools</p>
          </div>
          <Link href="/" className="text-sm text-brand/60 hover:text-brand transition-colors">
            View all &rarr;
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {popular.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 hover:border-brand/20 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-brand/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand/20 to-brand/5 text-sm text-brand mb-3">
                <CalculatorIcon slug={c.slug} className="h-4 w-4" />
              </div>
              <h3 className="font-medium text-white group-hover:text-brand transition-colors">{c.h1}</h3>
              <p className="mt-1 text-sm text-white/40">{c.category.split(',')[0]}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* All Calculators by Category */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold text-white">All Calculators</h2>
        <p className="mt-1 text-sm text-white/40">Browse the complete collection</p>
        <div className="mt-8 space-y-12">
          {categories.map(cat => {
            const catCalcs = calculators.filter(c => c.category === cat.name)
            if (catCalcs.length === 0) return null
            return (
              <div key={cat.slug}>
                <div className="flex items-center gap-3">
                  <span className="text-lg">{cat.icon}</span>
                  <Link href={`/category/${cat.slug}`} className="group inline-flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-brand">
                      {cat.name}
                    </h3>
                    <span className="text-sm text-white/30">({catCalcs.length})</span>
                    <svg className="h-3.5 w-3.5 text-white/20 transition-all group-hover:translate-x-0.5 group-hover:text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
                <div className="h-px mt-3 bg-gradient-to-r from-white/[0.06] to-transparent" />
                <div className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {catCalcs.map(c => (
                    <Link
                      key={c.slug}
                      href={`/${c.slug}`}
                      className="group rounded-xl border border-white/[0.04] bg-white/[0.01] px-4 py-2.5 text-sm text-white/40 transition-all hover:border-brand/15 hover:bg-white/[0.03] hover:text-brand flex items-center gap-2"
                    >
                      <CalculatorIcon slug={c.slug} className="h-3 w-3 text-white/20 group-hover:text-brand/60" />
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
