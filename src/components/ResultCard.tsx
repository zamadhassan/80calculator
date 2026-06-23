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
    <div className="mt-6 rounded-xl border border-brand/30 bg-brand-dark-2 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-brand-light">Result</h2>
        <button
          onClick={copyAll}
          className="text-sm text-white/50 transition hover:text-brand"
        >
          Copy All
        </button>
      </div>
      <div className="mt-4 space-y-2">
        {lines.map((l, i) => (
          <div key={i} className="flex justify-between rounded-lg bg-brand-dark-3 px-4 py-2">
            <span className="text-white/70">{l.label}</span>
            <span className="font-semibold text-brand">{l.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
