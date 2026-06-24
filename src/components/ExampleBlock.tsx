interface Example {
  inputs: Record<string, number>
  result: string
}

export default function ExampleBlock({ example }: { example: Example }) {
  return (
    <div className="mt-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
      <h2 className="text-lg font-semibold text-brand">Example</h2>
      <div className="mt-3 space-y-2">
        {Object.entries(example.inputs).map(([key, val]) => (
          <div key={key} className="flex items-center gap-3 rounded-lg bg-white/[0.02] px-4 py-2.5 border border-white/[0.04]">
            <span className="text-sm text-white/40 min-w-[120px]">
              {key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())}:
            </span>
            <span className="text-sm text-white/70 font-medium">{val}</span>
          </div>
        ))}
        <div className="mt-4 rounded-xl bg-gradient-to-br from-brand to-brand-light px-4 py-3">
          <p className="text-sm font-semibold text-black/80">Result: {example.result}</p>
        </div>
      </div>
    </div>
  )
}
