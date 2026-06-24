'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500/20 to-red-500/5 text-4xl font-bold text-red-400 mb-6">
        !
      </div>
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Something went wrong</h1>
      <p className="mt-3 max-w-md text-white/50">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand to-brand-light px-6 py-3 font-semibold text-black transition-all hover:brightness-110 active:scale-95"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
        Try Again
      </button>
    </div>
  )
}
