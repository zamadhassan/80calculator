export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-brand" />
        <p className="text-sm text-white/40">Loading...</p>
      </div>
    </div>
  )
}
