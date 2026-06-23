interface Example {
  inputs: Record<string, number>
  result: string
}

export default function ExampleBlock({ example }: { example: Example }) {
  return (
    <div className="mt-6 rounded-xl border border-white/10 bg-brand-dark-2 p-6">
      <h2 className="text-xl font-semibold text-brand-light">Example</h2>
      <div className="mt-2 space-y-1 text-white/70">
        {Object.entries(example.inputs).map(([key, val]) => (
          <p key={key}>
            <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span> {val}
          </p>
        ))}
        <p className="mt-2 font-medium text-brand">{example.result}</p>
      </div>
    </div>
  )
}
