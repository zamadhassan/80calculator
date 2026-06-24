import type { CalculatorConfig } from '@/types/calculator'
import { markup } from '@/lib/calculations/business'

export default {
  slug: 'markup-calculator',
  title: 'Markup Calculator - Calculate Markup Percentage and Selling Price',
  metaDescription: 'Free markup calculator. Calculate markup percentage, selling price, and profit from cost.',
  h1: 'Markup Calculator',
  category: 'Business, Profit & Ecommerce',
  intro: 'Calculate markup percentage or selling price based on your cost.',
  inputs: [
    { id: 'cost', label: 'Cost ($)', type: 'number', placeholder: '50', min: 0, step: 0.01 },
    { id: 'sellingPrice', label: 'Selling Price ($) (leave 0 to calculate from markup)', type: 'number', placeholder: '0', min: 0, step: 0.01 },
    { id: 'markupPercent', label: 'Desired Markup % (if no selling price)', type: 'number', placeholder: '40', min: 0, step: 0.1 },
  ],
  calculate: (vals) => {
    const r = vals.sellingPrice > 0
      ? markup(vals.cost, vals.sellingPrice)
      : markup(vals.cost, undefined, vals.markupPercent)
    return { markupPercent: r.markupPercent, sellingPrice: r.sellingPrice, profit: r.profit }
  },
  formula: 'If selling price known: Markup% = (Price - Cost) / Cost × 100. If markup% known: Selling Price = Cost × (1 + Markup%/100).',
  example: { inputs: { cost: 50, sellingPrice: 0, markupPercent: 40 }, result: 'Markup: 40%, Selling Price: $70.00, Profit: $20.00' },
  useCases: ['Set retail prices from wholesale cost', 'Calculate profit on items', 'Compare markup with margin'],
  faqs: [
    { q: 'What is the difference between markup and margin?', a: 'Markup is % of cost. Margin is % of price. 50% markup = 33.3% margin.' },
    { q: 'What is a standard markup in retail?', a: 'Retail markup varies: 50-100% for clothing, 30-50% for electronics, 100-300% for jewelry.' },
    { q: 'How do I choose the right markup percentage for my products or services?', a: 'Research competitor pricing, understand your target market willingness to pay, and ensure your markup covers all costs including overhead, shipping, and marketing expenses.' },
    { q: 'Should markup percentages be consistent across all products in my store inventory?', a: 'Not necessarily. Low-demand or niche items can support higher markups of 100-200% while competitive commodity items may only sustain 20-30% markup.' },
  ],
  relatedCalculators: ['margin-calculator', 'price-calculator', 'profit-calculator'],
} satisfies CalculatorConfig
