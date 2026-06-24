import type { CalculatorConfig } from '@/types/calculator'
import { margin } from '@/lib/calculations/business'

export default {
  slug: 'margin-calculator',
  title: 'Margin Calculator - Calculate Profit Margin and Selling Price',
  metaDescription: 'Free margin calculator. Calculate gross margin percentage, profit amount, and markup from cost and revenue.',
  h1: 'Margin Calculator',
  category: 'Business, Profit & Ecommerce',
  intro: 'Calculate your gross margin, profit, and markup percentage instantly.',
  inputs: [
    { id: 'cost', label: 'Cost ($)', type: 'number', placeholder: '50', min: 0, step: 0.01 },
    { id: 'revenue', label: 'Revenue / Selling Price ($)', type: 'number', placeholder: '100', min: 0, step: 0.01 },
  ],
  calculate: (vals) => {
    const r = margin(vals.cost, vals.revenue)
    return { marginPercent: r.marginPercent, profit: r.profit, markupPercent: r.markupPercent }
  },
  formula: 'Gross Margin = ((Revenue - Cost) / Revenue) × 100. Markup = (Profit / Cost) × 100.',
  example: { inputs: { cost: 50, revenue: 100 }, result: 'Margin: 50%, Profit: $50.00, Markup: 100%' },
  useCases: ['Set product pricing strategy', 'Evaluate business profitability', 'Compare supplier pricing'],
  faqs: [
    { q: 'What is the difference between margin and markup?', a: 'Margin is percentage of revenue, markup is percentage of cost. A 50% margin equals 100% markup.' },
    { q: 'What is a good profit margin?', a: 'It varies by industry. Retail margins range 20-50%, while services can be 60-80%.' },
    { q: 'Why is understanding margin more important than just tracking profit dollars alone?', a: 'Margin percentage tells you the efficiency of your pricing strategy relative to revenue, while profit dollars alone do not reveal how well you are managing costs.' },
    { q: 'How do discounts and sales promotions affect my overall profit margins?', a: 'A 20% discount requires roughly 25% more sales volume just to maintain the same gross profit dollars, significantly impacting your bottom line profitability.' },
  ],
  relatedCalculators: ['profit-calculator', 'markup-calculator', 'discount-calculator'],
} satisfies CalculatorConfig
