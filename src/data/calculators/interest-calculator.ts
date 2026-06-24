import type { CalculatorConfig } from '@/types/calculator'
import { simpleInterest, compoundInterest } from '@/lib/calculations/finance'

export default {
  slug: 'interest-calculator',
  title: 'Interest Calculator - Calculate Simple or Compound Interest',
  metaDescription: 'Free interest calculator. Calculate simple or compound interest on any principal, rate, and time period.',
  h1: 'Interest Calculator',
  category: 'Finance, Loan & Investment',
  intro: 'Calculate interest earned or paid using simple or compound interest methods.',
  inputs: [
    { id: 'principal', label: 'Principal ($)', type: 'number', placeholder: '10000', min: 0, step: 100 },
    { id: 'rate', label: 'Annual Rate (%)', type: 'number', placeholder: '7', min: 0, step: 0.1 },
    { id: 'time', label: 'Time (years)', type: 'number', placeholder: '5', min: 0, step: 0.5 },
    { id: 'method', label: 'Interest Method', type: 'select', defaultValue: 0, options: [
      { value: '0', label: 'Simple Interest' }, { value: '1', label: 'Compound Interest (monthly)' },
    ] },
  ],
  calculate: (vals) => {
    const method = Number(vals.method)
    if (method === 0) {
      const r = simpleInterest(vals.principal, vals.rate, vals.time, 'years')
      return { interest: r.interest, totalAmount: r.total, method: 'Simple' }
    }
    const r = compoundInterest(vals.principal, vals.rate, vals.time, 12)
    return { interest: r.interestEarned, totalAmount: r.futureValue, method: 'Compound (monthly)' }
  },
  formula: 'Simple: I = P×R×T. Compound: A = P(1+r/n)^(nt). Monthly compounding: n=12.',
  example: { inputs: { principal: 10000, rate: 7, time: 5, method: 0 }, result: 'Interest: $3,500, Total: $13,500 (Simple)' },
  useCases: ['Compare savings account returns', 'Calculate loan interest costs', 'Compare simple vs compound growth'],
  faqs: [
    { q: 'What earns more: simple or compound interest?', a: 'Compound interest earns more because you earn interest on previously earned interest.' },
    { q: 'How often is interest typically compounded?', a: 'Savings accounts: daily or monthly. Loans: monthly. Investments: varies.' },
  ],
  relatedCalculators: ['simple-interest-calculator', 'compound-interest-calculator', 'daily-compound-interest-calculator'],
  disclaimerType: 'finance',
} satisfies CalculatorConfig
