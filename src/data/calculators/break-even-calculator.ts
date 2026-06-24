import type { CalculatorConfig } from '@/types/calculator'
import { breakEven } from '@/lib/calculations/business'

export default {
  slug: 'break-even-calculator',
  title: 'Break Even Calculator - Calculate Break Even Point',
  metaDescription: 'Free break even calculator. Calculate units and revenue needed to break even on fixed and variable costs.',
  h1: 'Break Even Calculator',
  category: 'Business, Profit & Ecommerce',
  intro: 'Calculate how many units you need to sell to cover your costs and break even.',
  inputs: [
    { id: 'fixedCosts', label: 'Fixed Costs ($)', type: 'number', placeholder: '50000', min: 0, step: 100 },
    { id: 'variableCost', label: 'Variable Cost per Unit ($)', type: 'number', placeholder: '20', min: 0, step: 0.01 },
    { id: 'price', label: 'Price per Unit ($)', type: 'number', placeholder: '50', min: 0, step: 0.01 },
  ],
  calculate: (vals) => {
    const r = breakEven(vals.fixedCosts, vals.variableCost, vals.price)
    return { breakEvenUnits: r.units, breakEvenRevenue: r.revenue }
  },
  formula: 'Break-Even Units = Fixed Costs / (Price - Variable Cost per Unit). Revenue = Units × Price.',
  example: { inputs: { fixedCosts: 50000, variableCost: 20, price: 50 }, result: 'Units: 1,667, Revenue: $83,350.00' },
  useCases: ['Determine minimum sales targets', 'Evaluate business viability', 'Price products for profitability'],
  faqs: [
    { q: 'What is the break-even point?', a: 'The point where total revenue equals total costs, resulting in zero profit or loss.' },
    { q: 'How can I lower my break-even point?', a: 'Reduce fixed costs, lower variable costs, or increase your selling price.' },
  ],
  relatedCalculators: ['margin-calculator', 'profit-calculator', 'price-calculator'],
} satisfies CalculatorConfig
