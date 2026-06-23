import type { CalculatorConfig } from '@/types/calculator'
import { roi } from '@/lib/calculations/business'

export default {
  slug: 'roi-calculator',
  title: 'ROI Calculator - Calculate Return on Investment',
  metaDescription: 'Free ROI calculator. Calculate return on investment percentage and net return from investment cost and returns.',
  h1: 'ROI Calculator',
  category: 'Business, Profit & Ecommerce',
  intro: 'Calculate your return on investment percentage and net profit.',
  inputs: [
    { id: 'investment', label: 'Total Investment ($)', type: 'number', placeholder: '10000', min: 0, step: 0.01 },
    { id: 'returns', label: 'Total Returns ($)', type: 'number', placeholder: '15000', min: 0, step: 0.01 },
  ],
  calculate: (vals) => {
    const r = roi(vals.investment, vals.returns)
    return { roiPercent: r.roiPercent, netReturn: r.netReturn }
  },
  formula: 'ROI = (Returns - Investment) / Investment × 100. Net Return = Returns - Investment.',
  example: { inputs: { investment: 10000, returns: 15000 }, result: 'ROI: 50%, Net Return: $5,000.00' },
  useCases: ['Evaluate marketing campaign performance', 'Compare investment opportunities', 'Measure business project success'],
  faqs: [
    { q: 'What is a good ROI?', a: 'A positive ROI means profit. Above 10-20% is generally considered good, but it varies by industry.' },
    { q: 'Does ROI consider time?', a: 'Basic ROI does not. For time-adjusted returns, use CAGR or IRR calculators.' },
  ],
  relatedCalculators: ['cagr-calculator', 'irr-calculator', 'profit-calculator'],
} satisfies CalculatorConfig
