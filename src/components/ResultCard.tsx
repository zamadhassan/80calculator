import { type CalculatorResult } from '@/data/index'

export default function ResultCard({ result }: { result: CalculatorResult }) {
  const lines = Object.entries(result).map(([key, value]) => {
    const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())
    const formatted = typeof value === 'number'
      ? value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      : String(value)
    return { label, value: formatted }
  })

  const copyAll = () => {
    const text = lines.map(l => `${l.label}: ${l.value}`).join('\n')
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="mt-6 rounded-2xl border border-brand/20 bg-gradient-to-br from-brand/[0.03] to-transparent p-6 sm:p-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-light text-black font-bold text-sm">✓</div>
          <h2 className="text-xl font-semibold text-brand">Results</h2>
        </div>
        <button
          onClick={copyAll}
          className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-white/50 transition-all hover:border-brand/30 hover:text-brand"
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
          Copy All
        </button>
      </div>
      <div className="mt-4 space-y-2">
        {lines.map((l, i) => (
          <div key={i} className="flex items-center justify-between rounded-xl bg-white/[0.03] border border-white/[0.04] px-4 py-3">
            <span className="text-sm text-white/50">{l.label}</span>
            <span className="text-lg font-semibold text-brand">{l.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
