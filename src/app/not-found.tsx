import Link from 'next/link'
import SearchBar from '@/components/SearchBar'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:px-8 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-1.5 text-xs text-white/40 mb-6">
        <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
        404 Error
      </div>
      <h1 className="text-6xl font-bold text-white">Page Not Found</h1>
      <p className="mt-4 text-lg text-white/50 leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Try searching below.
      </p>
      <div className="mx-auto mt-8 max-w-md">
        <SearchBar />
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand to-brand-light px-6 py-3 text-sm font-semibold text-black transition-all hover:brightness-110 active:scale-95">
          Go Home
        </Link>
        <Link href="/blog" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/5">
          Browse Blog
        </Link>
        <Link href="/faq" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/5">
          Visit FAQ
        </Link>
      </div>
    </div>
  )
}