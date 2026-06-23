interface Example {
  inputs: Record<string, number>
  result: string
}

export default function FormulaBlock({ formula, example }: { formula: string; example?: Example }) {
  return (
    <div className="mt-6 rounded-xl border border-white/10 bg-brand-dark-2 p-6">
      <h2 className="text-xl font-semibold text-brand-light">Formula / Logic</h2>
      <p className="mt-2 text-white/70">{formula}</p>
    </div>
  )
}
