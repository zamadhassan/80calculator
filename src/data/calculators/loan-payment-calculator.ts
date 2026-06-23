import type { CalculatorConfig } from '@/types/calculator'
import { loanPayment } from '@/lib/calculations/finance'

export default {
  slug: 'loan-payment-calculator',
  title: 'Loan Payment Calculator - Calculate Monthly Loan Payments',
  metaDescription: 'Free loan payment calculator. Calculate monthly payment, total interest, and total cost for any loan.',
  h1: 'Loan Payment Calculator',
  category: 'Finance, Loan & Investment',
  intro: 'Calculate your monthly loan payment, total interest, and total repayment amount.',
  inputs: [
    { id: 'principal', label: 'Loan Amount ($)', type: 'number', placeholder: '30000', min: 0, step: 100 },
    { id: 'rate', label: 'APR / Interest Rate (%)', type: 'number', placeholder: '7', min: 0, step: 0.1 },
    { id: 'term', label: 'Loan Term (months)', type: 'number', placeholder: '60', min: 1, step: 1 },
  ],
  calculate: (vals) => {
    const r = loanPayment(vals.principal, vals.rate, vals.term)
    return { monthlyPayment: r.monthlyPayment, totalInterest: r.totalInterest, totalRepayment: r.totalRepayment }
  },
  formula: 'PMT Formula: M = P × (r(1+r)^n) / ((1+r)^n - 1)',
  example: { inputs: { principal: 30000, rate: 7, term: 60 }, result: 'Monthly: $594.04, Total Interest: $5,642.40' },
  useCases: ['Estimate mortgage or car payments', 'Compare loan terms', 'Plan debt repayment budget'],
  faqs: [
    { q: 'How does loan term affect payments?', a: 'Longer terms mean lower monthly payments but more total interest paid.' },
    { q: 'What is the difference between simple and amortized loans?', a: 'Simple loans charge interest on the original balance. Amortized loans reduce principal gradually.' },
  ],
  relatedCalculators: ['simple-loan-calculator', 'loan-amortization-calculator', 'apr-calculator'],
  disclaimerType: 'finance',
} satisfies CalculatorConfig
