import type { CalculatorConfig } from '@/types/calculator'
import { cagr } from '@/lib/calculations/finance'

export default {
  slug: 'cagr-calculator',
  title: 'CAGR Calculator - Calculate Compound Annual Growth Rate',
  metaDescription: 'Free CAGR calculator. Calculate compound annual growth rate from beginning value, ending value, and years.',
  h1: 'CAGR Calculator',
  category: 'Finance, Loan & Investment',
  intro: 'Calculate the compound annual growth rate of an investment over time.',
  inputs: [
    { id: 'beginValue', label: 'Beginning Value ($)', type: 'number', placeholder: '10000', min: 0, step: 100 },
    { id: 'endValue', label: 'Ending Value ($)', type: 'number', placeholder: '20000', min: 0, step: 100 },
    { id: 'years', label: 'Number of Years', type: 'number', placeholder: '5', min: 1, step: 0.5 },
  ],
  calculate: (vals) => ({ cagrPercent: cagr(vals.beginValue, vals.endValue, vals.years) }),
  formula: 'CAGR = (EV/BV)^(1/n) - 1. Expressed as percentage. Smooths returns over the investment period.',
  example: { inputs: { beginValue: 10000, endValue: 20000, years: 5 }, result: 'CAGR: 14.87%' },
  useCases: ['Compare investment performance over time', 'Calculate historical portfolio returns', 'Evaluate business growth rates'],
  faqs: [
    { q: 'What is the difference between CAGR and average return?', a: 'CAGR shows the geometric mean return (compounded). Average return is arithmetic mean and can be misleading.' },
    { q: 'Is CAGR the same as annualized return?', a: 'Yes, CAGR and annualized return mean the same thing.' },
    { q: 'Can CAGR be negative for a losing investment?', a: 'Yes, if the ending value is less than the beginning value, CAGR will be negative, indicating the investment lost value over that time period.' },
    { q: 'How do I use CAGR to compare different investments?', a: 'Calculate CAGR for each investment over the exact same time period to fairly compare their annualized growth rates on an equal basis.' },
  ],
  relatedCalculators: ['roi-calculator', 'investment-return-calculator', 'irr-calculator'],
} satisfies CalculatorConfig
