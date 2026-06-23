import type { CalculatorConfig } from '@/types/calculator'
import { simpleInterest } from '@/lib/calculations/finance'

export default {
  slug: 'simple-interest-calculator',
  title: 'Simple Interest Calculator - Calculate Interest on Principal',
  metaDescription: 'Free simple interest calculator. Calculate interest earned or paid using the simple interest formula.',
  h1: 'Simple Interest Calculator',
  category: 'Finance, Loan & Investment',
  intro: 'Calculate simple interest and total amount for any principal, rate, and time period.',
  inputs: [
    { id: 'principal', label: 'Principal ($)', type: 'number', placeholder: '10000', min: 0, step: 100 },
    { id: 'rate', label: 'Annual Interest Rate (%)', type: 'number', placeholder: '5', min: 0, step: 0.1 },
    { id: 'time', label: 'Time', type: 'number', placeholder: '3', min: 0, step: 0.5 },
    { id: 'timeUnit', label: 'Time Unit', type: 'select', defaultValue: 1, options: [
      { value: '1', label: 'Years' }, { value: '2', label: 'Months' }, { value: '3', label: 'Days' },
    ] },
  ],
  calculate: (vals) => {
    const unit = vals.timeUnit === 1 ? 'years' : vals.timeUnit === 2 ? 'months' : 'days'
    const r = simpleInterest(vals.principal, vals.rate, vals.time, unit)
    return { interest: r.interest, totalAmount: r.total }
  },
  formula: 'Simple Interest = P × R × T. Total = P + Interest. Where R = rate/100, T = time in years.',
  example: { inputs: { principal: 10000, rate: 5, time: 3, timeUnit: 1 }, result: 'Interest: $1,500.00, Total: $11,500.00' },
  useCases: ['Calculate interest on savings accounts', 'Estimate loan interest costs', 'Compare simple vs compound returns'],
  faqs: [
    { q: 'What is the difference between simple and compound interest?', a: 'Simple interest earns only on the principal. Compound interest earns on principal + accumulated interest.' },
    { q: 'When is simple interest used?', a: 'Some car loans, short-term loans, and bonds use simple interest.' },
  ],
  relatedCalculators: ['compound-interest-calculator', 'interest-calculator', 'daily-compound-interest-calculator'],
  disclaimerType: 'finance',
} satisfies CalculatorConfig
