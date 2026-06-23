'use client'

import { type CalculatorConfig, type CalculatorResult } from '@/data/index'
import { useState } from 'react'
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

  const handleInput = (id: string, value: number) => {
    setValues(prev => ({ ...prev, [id]: value }))
    setResult(null)
    setError(null)
  }

  const calculate = () => {
    const required = config.inputs.filter(i => i.required !== false).map(i => i.id)
    for (const key of required) {
      if (values[key] === undefined || isNaN(values[key]) || values[key] < 0) {
        setError(`Please enter a valid value for all fields.`)
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

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: config.category, href: `/category/${config.slug.split('-').slice(0, -1).join('-') || 'construction'}-calculators` },
        { label: config.h1, href: `/${config.slug}` },
      ]} />
      <h1 className="mt-4 text-3xl font-bold text-brand sm:text-4xl">{config.h1}</h1>
      <p className="mt-2 text-lg text-white/70">{config.intro}</p>

      <div className="mt-8 rounded-xl border border-white/10 bg-brand-dark-2 p-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {config.inputs.map(input => (
            <div key={input.id}>
              <label className="mb-1 block text-sm font-medium text-white/80">{input.label}</label>
              {input.type === 'select' && input.options ? (
                <select
                  className="w-full rounded-lg border border-white/10 bg-brand-dark-3 px-3 py-2 text-white focus:border-brand focus:outline-none"
                  value={values[input.id] ?? input.defaultValue ?? ''}
                  onChange={e => handleInput(input.id, Number(e.target.value))}
                >
                  {input.options.map(o => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              ) : (
                <input
                  type="number"
                  className="w-full rounded-lg border border-white/10 bg-brand-dark-3 px-3 py-2 text-white placeholder-white/30 focus:border-brand focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  placeholder={input.placeholder || '0'}
                  min={input.min}
                  max={input.max}
                  step={input.step}
                  value={values[input.id] ?? ''}
                  onChange={e => handleInput(input.id, e.target.value === '' ? 0 : Number(e.target.value))}
                />
              )}
            </div>
          ))}
        </div>
        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
        <div className="mt-6 flex gap-3">
          <button
            onClick={calculate}
            className="rounded-lg bg-brand px-6 py-2.5 font-semibold text-black transition hover:bg-brand-light"
          >
            Calculate
          </button>
          <button
            onClick={reset}
            className="rounded-lg border border-white/20 px-6 py-2.5 font-medium text-white transition hover:bg-white/10"
          >
            Reset
          </button>
        </div>
      </div>

      {result && <ResultCard result={result} />}
      {result && <FormulaBlock formula={config.formula} example={config.example} />}
      {result && <ExampleBlock example={config.example} />}

      {config.useCases.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-brand-light">Use Cases</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-white/70">
            {config.useCases.map((uc, i) => <li key={i}>{uc}</li>)}
          </ul>
        </div>
      )}

      <FAQSection faqs={config.faqs} />
      <RelatedCalculators currentSlug={config.slug} related={config.relatedCalculators} />
      <Disclaimer type={config.disclaimerType || 'none'} />
    </div>
  )
}
