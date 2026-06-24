'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import { getAllCalculators } from '@/data/index'
import CalculatorIcon from './CalculatorIcon'

export default function SearchBar({ large }: { large?: boolean }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<{ slug: string; h1: string; category: string }[]>([])
  const [focused, setFocused] = useState(false)
  const [ready, setReady] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const calculators = useMemo(() => {
    try { return getAllCalculators() } catch { return [] }
  }, [])

  useEffect(() => { setReady(true) }, [])

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
    if (q.length < 1) { setResults([]); return }
    const filtered = calculators
      .filter(c => c.h1.toLowerCase().includes(q) || c.category.toLowerCase().includes(q))
      .slice(0, 8)
      .map(c => ({ slug: c.slug, h1: c.h1, category: c.category }))
    setResults(filtered)
  }

  return (
    <div ref={ref} className="relative w-full">
      <div className="relative">
        <svg className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search 90+ calculators..."
          className="w-full rounded-xl border border-white/10 bg-white/5 pl-11 pr-10 py-3.5 text-white placeholder-white/30 transition-all duration-200 focus:border-brand/50 focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-brand/20"
          value={query}
          onChange={e => handleInput(e.target.value)}
          onFocus={() => setFocused(true)}
          aria-label="Search calculators"
        />
        {query && (
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center h-7 w-7 rounded-lg text-white/30 hover:text-white/60 hover:bg-white/5 transition-all"
            onClick={() => { setQuery(''); setResults([]); (document.activeElement as HTMLElement)?.blur() }}
            aria-label="Clear search"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        )}
      </div>
      {ready && focused && results.length > 0 && query.length > 0 && (
        <div className="absolute top-full mt-2 w-full rounded-xl border border-white/[0.08] bg-black p-2 shadow-2xl z-50">
          {results.map(r => (
            <a
              key={r.slug}
              href={`/${r.slug}`}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-white/5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand/20 to-brand/5 text-xs text-brand">
                <CalculatorIcon slug={r.slug} className="h-3.5 w-3.5" />
              </span>
              <div className="min-w-0">
                <p className="font-medium text-white truncate">{r.h1}</p>
                <p className="text-xs text-white/40 truncate">{r.category}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
