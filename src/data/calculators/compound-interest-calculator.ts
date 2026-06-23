import type { CalculatorConfig } from '@/types/calculator'
import { compoundInterest } from '@/lib/calculations/finance'

export default {
  slug: 'compound-interest-calculator',
  title: 'Compound Interest Calculator - Calculate Investment Growth',
  metaDescription: 'Free compound interest calculator. Calculate future value and interest earned with compound interest and optional contributions.',
  h1: 'Compound Interest Calculator',
  category: 'Finance, Loan & Investment',
  intro: 'See how your investments grow with compound interest over time.',
  inputs: [
    { id: 'principal', label: 'Initial Investment ($)', type: 'number', placeholder: '10000', min: 0, step: 100 },
    { id: 'rate', label: 'Annual Return (%)', type: 'number', placeholder: '8', min: 0, step: 0.1 },
    { id: 'years', label: 'Time (years)', type: 'number', placeholder: '10', min: 1, step: 1 },
    { id: 'compoundPerYear', label: 'Compound Frequency', type: 'select', defaultValue: 12, options: [
      { value: '1', label: 'Yearly' }, { value: '4', label: 'Quarterly' }, { value: '12', label: 'Monthly' }, { value: '365', label: 'Daily' },
    ] },
    { id: 'contribution', label: 'Monthly Contribution ($)', type: 'number', placeholder: '500', min: 0, step: 10 },
  ],
  calculate: (vals) => {
    const r = compoundInterest(vals.principal, vals.rate, vals.years, vals.compoundPerYear, vals.contribution)
    return { futureValue: r.futureValue, interestEarned: r.interestEarned }
  },
  formula: 'A = P(1+r/n)^(nt) + PMT × ((1+r/n)^(nt) - 1) / (r/n)',
  example: { inputs: { principal: 10000, rate: 8, years: 10, compoundPerYear: 12, contribution: 500 }, result: 'Future Value: $113,448.32, Interest: $43,448.32' },
  useCases: ['Project retirement savings growth', 'Compare investment strategies', 'Plan long-term financial goals'],
  faqs: [
    { q: 'What is compound interest?', a: 'Compound interest earns returns on both your original investment and previously earned returns.' },
    { q: 'How often should I compound?', a: 'More frequent compounding yields slightly higher returns. Monthly is typical for most accounts.' },
  ],
  relatedCalculators: ['simple-interest-calculator', 'investment-calculator', 'future-value-calculator'],
  disclaimerType: 'finance',
} satisfies CalculatorConfig
