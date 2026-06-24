interface Example {
  inputs: Record<string, number>
  result: string
}

export default function FormulaBlock({ formula }: { formula: string }) {
  return (
    <div className="mt-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
      <h2 className="text-lg font-semibold text-brand">Formula / Logic</h2>
      <div className="mt-3 rounded-xl bg-white/[0.02] border border-white/[0.04] px-4 py-3">
        <p className="text-white/60 leading-relaxed text-sm">{formula}</p>
      </div>
    </div>
  )
}
