interface Example {
  inputs: Record<string, number>
  result: string
}

export default function FormulaBlock({ formula, example }: { formula: string; example?: Example }) {
  return (
    <div className="mt-6 card-glass animate-slide-up">
      <h2 className="text-xl font-semibold gradient-gold-text">Formula / Logic</h2>
      <div className="mt-3 rounded-xl bg-white/[0.02] border border-white/[0.04] px-4 py-3">
        <p className="text-white/60 leading-relaxed">{formula}</p>
      </div>
    </div>
  )
}
