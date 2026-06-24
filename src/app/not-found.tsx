import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/20 to-brand/5 text-4xl font-bold text-brand mb-6">
        404
      </div>
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Page Not Found</h1>
      <p className="mt-3 max-w-md text-white/50">
        The calculator you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand to-brand-light px-6 py-3 font-semibold text-black transition-all hover:brightness-110 active:scale-95"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        Back to Home
      </Link>
    </div>
  )
}
