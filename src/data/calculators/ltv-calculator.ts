import type { CalculatorConfig } from '@/types/calculator'
import { ltv } from '@/lib/calculations/business'

export default {
  slug: 'ltv-calculator',
  title: 'LTV Calculator - Calculate Customer Lifetime Value',
  metaDescription: 'Free customer lifetime value calculator. Calculate LTV using average order value, purchase frequency, and customer lifespan.',
  h1: 'LTV Calculator',
  category: 'Business, Profit & Ecommerce',
  intro: 'Calculate customer lifetime value to understand how much each customer is worth to your business.',
  inputs: [
    { id: 'aov', label: 'Avg Order Value ($)', type: 'number', placeholder: '50', min: 0, step: 0.01 },
    { id: 'frequency', label: 'Purchases per Year', type: 'number', placeholder: '4', min: 0, step: 0.1 },
    { id: 'lifespan', label: 'Customer Lifespan (years)', type: 'number', placeholder: '3', min: 0, step: 0.5 },
  ],
  calculate: (vals) => ({ lifetimeValue: ltv(vals.aov, vals.frequency, vals.lifespan) }),
  formula: 'LTV = Average Order Value × Purchase Frequency × Customer Lifespan.',
  example: { inputs: { aov: 50, frequency: 4, lifespan: 3 }, result: 'LTV: $600.00' },
  useCases: ['Determine customer acquisition budget', 'Segment high-value customers', 'Calculate marketing ROI'],
  faqs: [
    { q: 'What is a good LTV?', a: 'A good LTV is typically 3x your customer acquisition cost (CAC).' },
    { q: 'How can I increase LTV?', a: 'Improve retention, increase order frequency, upsell, and cross-sell.' },
  ],
  relatedCalculators: ['cac-calculator', 'roi-calculator'],
} satisfies CalculatorConfig
