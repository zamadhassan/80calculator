import type { CalculatorConfig } from '@/types/calculator'
import { cac } from '@/lib/calculations/business'

export default {
  slug: 'cac-calculator',
  title: 'CAC Calculator - Calculate Customer Acquisition Cost',
  metaDescription: 'Free CAC calculator. Calculate customer acquisition cost from total marketing spend and new customers gained.',
  h1: 'CAC Calculator',
  category: 'Business, Profit & Ecommerce',
  intro: 'Calculate how much it costs to acquire each new customer.',
  inputs: [
    { id: 'totalCost', label: 'Total Marketing & Sales Cost ($)', type: 'number', placeholder: '50000', min: 0, step: 100 },
    { id: 'newCustomers', label: 'New Customers Acquired', type: 'number', placeholder: '250', min: 1, step: 1 },
  ],
  calculate: (vals) => ({ customerAcquisitionCost: cac(vals.totalCost, vals.newCustomers) }),
  formula: 'CAC = Total Marketing & Sales Cost / Number of New Customers Acquired.',
  example: { inputs: { totalCost: 50000, newCustomers: 250 }, result: 'CAC: $200.00' },
  useCases: ['Evaluate marketing campaign efficiency', 'Compare customer acquisition channels', 'Set customer budget benchmarks'],
  faqs: [
    { q: 'What is a good CAC?', a: 'A good CAC should be significantly less than customer lifetime value (LTV), ideally LTV:CAC ratio of 3:1.' },
    { q: 'What costs are included in CAC?', a: 'Include advertising spend, marketing salaries, sales team costs, software tools, and creative production.' },
  ],
  relatedCalculators: ['ltv-calculator', 'roi-calculator'],
} satisfies CalculatorConfig
