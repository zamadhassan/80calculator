import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'price-calculator',
  title: 'Price Calculator - Calculate Recommended Selling Price',
  metaDescription: 'Free price calculator. Calculate the optimal selling price based on cost and desired margin or markup.',
  h1: 'Price Calculator',
  category: 'Business, Profit & Ecommerce',
  intro: 'Calculate the recommended selling price based on cost and desired profit margin or markup.',
  inputs: [
    { id: 'cost', label: 'Cost ($)', type: 'number', placeholder: '25', min: 0, step: 0.01 },
    { id: 'mode', label: 'Calculate by', type: 'select', defaultValue: 0, options: [
      { value: '0', label: 'Desired Margin %' }, { value: '1', label: 'Desired Markup %' },
    ] },
    { id: 'percent', label: 'Margin / Markup %', type: 'number', placeholder: '40', min: 0, max: 1000, step: 0.1 },
  ],
  calculate: (vals) => {
    const mode = Number(vals.mode)
    let price = 0
    if (mode === 0) price = vals.cost / (1 - vals.percent / 100)
    else price = vals.cost * (1 + vals.percent / 100)
    const profit = price - vals.cost
    return { sellingPrice: price, profit, marginPercent: mode === 0 ? vals.percent : (profit / price) * 100 }
  },
  formula: 'Margin Price = Cost / (1 - Desired Margin%). Markup Price = Cost × (1 + Desired Markup%).',
  example: { inputs: { cost: 25, mode: 0, percent: 40 }, result: 'Selling Price: $41.67, Profit: $16.67, Margin: 40%' },
  useCases: ['Price products for retail', 'Set service rates', 'Optimize profit margins'],
  faqs: [
    { q: 'What is the difference between margin and markup?', a: 'Margin is % of selling price. Markup is % of cost. A 50% markup equals 33.3% margin.' },
    { q: 'How do I price a product with a target margin?', a: 'Divide the cost by (1 - desired margin). For 40% margin: cost / 0.60.' },
    { q: 'Should I use margin or markup when setting prices for my online store products?', a: 'Use margin for financial analysis since it relates to revenue, but use markup for quick cost-based pricing. Most retailers use markup for initial pricing then track margin for profitability.' },
    { q: 'How do shipping costs and payment processing fees affect my final product pricing?', a: 'Include shipping materials, carrier fees, and payment processor charges (typically 2.5-3.5%) in your product cost before applying margin or markup to ensure profitability.' },
  ],
  relatedCalculators: ['margin-calculator', 'markup-calculator', 'profit-calculator'],
} satisfies CalculatorConfig
