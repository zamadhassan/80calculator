import type { CalculatorConfig } from '@/types/calculator'
import { futureValue } from '@/lib/calculations/finance'

export default {
  slug: 'future-value-calculator',
  title: 'Future Value Calculator - Calculate Investment Future Value',
  metaDescription: 'Free future value calculator. Calculate the future value of an investment with compound growth.',
  h1: 'Future Value Calculator',
  category: 'Finance, Loan & Investment',
  intro: 'Calculate the future value of an investment with compound growth over time.',
  inputs: [
    { id: 'presentValue', label: 'Present Value ($)', type: 'number', placeholder: '10000', min: 0, step: 100 },
    { id: 'rate', label: 'Annual Rate (%)', type: 'number', placeholder: '7', min: 0, step: 0.1 },
    { id: 'periods', label: 'Number of Years', type: 'number', placeholder: '10', min: 1, step: 1 },
  ],
  calculate: (vals) => ({ futureValue: futureValue(vals.presentValue, vals.rate, vals.periods) }),
  formula: 'FV = PV × (1 + r)^n. Where r = annual rate/100, n = number of years.',
  example: { inputs: { presentValue: 10000, rate: 7, periods: 10 }, result: 'FV: $19,671.51' },
  useCases: ['Project investment growth', 'Calculate retirement savings target', 'Plan lump sum investments'],
  faqs: [
    { q: 'What is the difference between PV and FV?', a: 'Present Value is today value. Future Value is what it grows to at a given rate over time.' },
    { q: 'How does inflation affect future value?', a: 'Use real return rate (nominal return minus inflation) for inflation-adjusted future value.' },
  ],
  relatedCalculators: ['present-value-calculator', 'investment-calculator', 'compound-interest-calculator'],
} satisfies CalculatorConfig
