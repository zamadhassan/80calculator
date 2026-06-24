'use client'

import { type CalculatorConfig, type CalculatorResult } from '@/data/index'
import { useState, useId } from 'react'
import { categories } from '@/data/categories'
import CalculatorIcon from './CalculatorIcon'
import ResultCard from './ResultCard'
import FormulaBlock from './FormulaBlock'
import ExampleBlock from './ExampleBlock'
import FAQSection from './FAQSection'
import RelatedCalculators from './RelatedCalculators'
import Disclaimer from './Disclaimer'
import Breadcrumb from './Breadcrumb'

export default function Calculator({ config }: { config: CalculatorConfig }) {
  const [values, setValues] = useState<Record<string, number>>({})
  const [result, setResult] = useState<CalculatorResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const uid = useId()

  const handleInput = (id: string, value: number) => {
    setValues(prev => ({ ...prev, [id]: value }))
    setResult(null)
    setError(null)
  }

  const calculate = () => {
    const required = config.inputs.filter(i => i.required !== false).map(i => i.id)
    for (const key of required) {
      if (values[key] === undefined || isNaN(values[key]) || values[key] < 0) {
        setError('Please enter a valid value for all fields.')
        return
      }
    }
    try {
      const r = config.calculate(values)
      setResult(r)
      setError(null)
    } catch {
      setError('Calculation error. Please check your inputs.')
    }
  }

  const reset = () => {
    setValues({})
    setResult(null)
    setError(null)
  }

  const categorySlug = categories.find(c => c.name === config.category)?.slug || 'calculators'

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: config.category, href: `/category/${categorySlug}` },
        { label: config.h1, href: `/${config.slug}` },
      ]} />

      <div className="mt-8">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/20 to-brand/5 text-lg text-brand">
            <CalculatorIcon slug={config.slug} className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-3xl font-bold sm:text-4xl tracking-tight">
              <span className="bg-gradient-to-r from-brand via-brand-light to-brand bg-clip-text text-transparent">{config.h1}</span>
            </h1>
            <p className="mt-2 text-lg text-white/50 leading-relaxed">{config.intro}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8" role="form" aria-label={config.h1}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {config.inputs.map(input => {
            const inputId = `${uid}-${input.id}`
            return (
              <div key={input.id}>
                <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium text-white/60">
                  {input.label}
                </label>
                {input.type === 'select' && input.options ? (
                  <select
                    id={inputId}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all duration-200 appearance-none cursor-pointer focus:border-brand/50 focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-brand/20"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23FEC700' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 16px center',
                      paddingRight: '40px',
                    }}
                    value={values[input.id] ?? input.defaultValue ?? ''}
                    onChange={e => handleInput(input.id, Number(e.target.value))}
                  >
                    {input.options.map(o => (
                      <option key={o.value} value={o.value} style={{ background: '#1c1c1c', color: '#fff' }}>{o.label}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={inputId}
                    type="number"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/20 transition-all duration-200 focus:border-brand/50 focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-brand/20"
                    placeholder={input.placeholder || '0'}
                    min={input.min}
                    max={input.max}
                    step={input.step}
                    value={values[input.id] ?? ''}
                    onChange={e => handleInput(input.id, e.target.value === '' ? 0 : Number(e.target.value))}
                  />
                )}
              </div>
            )
          })}
        </div>

        {error && (
          <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400" role="alert">
            {error}
          </div>
        )}

        <div className="mt-6 flex gap-3">
          <button
            onClick={calculate}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand to-brand-light px-6 py-3 font-semibold text-black transition-all hover:brightness-110 active:scale-95"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            Calculate
          </button>
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-medium text-white transition-all hover:bg-white/5 active:scale-95"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            Reset
          </button>
        </div>
      </div>

      {result && <ResultCard result={result} />}
      {result && <FormulaBlock formula={config.formula} />}
      {result && <ExampleBlock example={config.example} />}

      {config.useCases.length > 0 && (
        <div className="mt-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-white">Use Cases</h2>
          <ul className="mt-4 space-y-3">
            {config.useCases.map((uc, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs text-brand" aria-hidden="true">✓</span>
                {uc}
              </li>
            ))}
          </ul>
        </div>
      )}

      <FAQSection faqs={config.faqs} />
      <RelatedCalculators currentSlug={config.slug} related={config.relatedCalculators} />
      <Disclaimer type={config.disclaimerType || 'none'} />
    </div>
  )
}
