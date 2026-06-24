interface Example {
  inputs: Record<string, number>
  result: string
}

export default function ExampleBlock({ example }: { example: Example }) {
  return (
    <div className="mt-6 card-glass animate-slide-up">
      <h2 className="text-xl font-semibold gradient-gold-text">Example</h2>
      <div className="mt-3 space-y-2">
        {Object.entries(example.inputs).map(([key, val]) => (
          <div key={key} className="flex items-center gap-2 rounded-lg bg-white/[0.02] px-4 py-2 border border-white/[0.04]">
            <span className="text-sm text-white/40 capitalize w-32">
              {key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())}:
            </span>
            <span className="text-sm text-white/70 font-medium">{val}</span>
          </div>
        ))}
        <div className="mt-3 rounded-xl gradient-gold px-4 py-3">
          <p className="text-sm font-medium text-black/80">Result: <span className="font-bold">{example.result}</span></p>
        </div>
      </div>
    </div>
  )
}
