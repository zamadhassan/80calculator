import type { CalculatorConfig } from '@/types/calculator'
import { loanPayment } from '@/lib/calculations/finance'

export default {
  slug: 'simple-loan-calculator',
  title: 'Simple Loan Calculator - Estimate Loan Payments',
  metaDescription: 'Free simple loan calculator. Calculate monthly payments, total interest, and total cost of a loan.',
  h1: 'Simple Loan Calculator',
  category: 'Finance, Loan & Investment',
  intro: 'Quickly estimate your monthly loan payments and total interest cost.',
  inputs: [
    { id: 'principal', label: 'Loan Amount ($)', type: 'number', placeholder: '25000', min: 0, step: 100 },
    { id: 'rate', label: 'Annual Interest Rate (%)', type: 'number', placeholder: '6', min: 0, step: 0.1 },
    { id: 'term', label: 'Loan Term (months)', type: 'number', placeholder: '48', min: 1, step: 1 },
  ],
  calculate: (vals) => {
    const r = loanPayment(vals.principal, vals.rate, vals.term)
    return { monthlyPayment: r.monthlyPayment, totalInterest: r.totalInterest, totalRepayment: r.totalRepayment }
  },
  formula: 'Standard amortized loan formula. Monthly Payment = P × (r(1+r)^n) / ((1+r)^n - 1).',
  example: { inputs: { principal: 25000, rate: 6, term: 48 }, result: 'Monthly: $587.13, Total Interest: $3,182.24' },
  useCases: ['Estimate car loan payments', 'Compare personal loan offers', 'Budget for a major purchase'],
  faqs: [
    { q: 'What is APR vs interest rate?', a: 'APR includes fees and costs beyond the interest rate, giving a more complete cost picture.' },
    { q: 'Can I pay off my loan early?', a: 'Most loans allow early payoff but some charge prepayment penalties. Check your terms.' },
  ],
  relatedCalculators: ['business-loan-calculator', 'loan-amortization-calculator', 'apr-calculator'],
  disclaimerType: 'finance',
} satisfies CalculatorConfig
