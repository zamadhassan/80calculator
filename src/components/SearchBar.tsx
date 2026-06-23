'use client'

export default function SearchBar() {
  return (
    <input
      type="text"
      placeholder="Search calculators..."
      className="w-full rounded-xl border border-white/10 bg-brand-dark-2 px-5 py-3 text-white placeholder-white/30 focus:border-brand focus:outline-none"
      id="search-input"
      onInput={e => {
        const q = (e.target as HTMLInputElement).value.toLowerCase()
        const cards = document.querySelectorAll('[data-calc]')
        cards.forEach(card => card.classList.toggle('hidden', !(card.getAttribute('data-calc') || '').includes(q)))
      }}
    />
  )
}
