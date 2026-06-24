'use client'

import { useState, useEffect, useRef } from 'react'
import { getAllCalculators } from '@/data/index'

const calculators = getAllCalculators()

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<{ slug: string; h1: string; category: string }[]>([])
  const [focused, setFocused] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setFocused(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleInput = (val: string) => {
    setQuery(val)
    const q = val.toLowerCase().trim()
    if (q.length < 1) {
      setResults([])
      return
    }
    const filtered = calculators
      .filter(c => c.h1.toLowerCase().includes(q) || c.category.toLowerCase().includes(q))
      .slice(0, 8)
      .map(c => ({ slug: c.slug, h1: c.h1, category: c.category }))
    setResults(filtered)
  }

  return (
    <div ref={ref} className="relative">
      <div className="relative">
        <svg className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search calculators..."
          className="input-modern pl-12"
          id="search-input"
          value={query}
          onChange={e => handleInput(e.target.value)}
          onFocus={() => setFocused(true)}
        />
        {query && (
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white/50 transition-colors"
            onClick={() => { setQuery(''); setResults([]) }}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        )}
      </div>
      {focused && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full rounded-xl border border-white/[0.06] bg-brand-dark-2/95 backdrop-blur-xl p-2 shadow-2xl z-50 animate-scale-in">
          {results.map(r => (
            <a
              key={r.slug}
              href={`/${r.slug}`}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-white/5"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-xs text-brand font-medium">
                {r.h1.charAt(0)}
              </span>
              <div>
                <p className="font-medium text-white">{r.h1}</p>
                <p className="text-xs text-white/30">{r.category}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
