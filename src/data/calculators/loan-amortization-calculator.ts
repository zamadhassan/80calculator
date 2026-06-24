import type { CalculatorConfig } from '@/types/calculator'
import { amortizationSchedule } from '@/lib/calculations/finance'

export default {
  slug: 'loan-amortization-calculator',
  title: 'Loan Amortization Calculator - Full Payment Breakdown',
  metaDescription: 'Free loan amortization calculator. See monthly payment, interest, principal breakdown, and full schedule.',
  h1: 'Loan Amortization Calculator',
  category: 'Finance, Loan & Investment',
  intro: 'Calculate monthly payments and see the full amortization schedule for your loan.',
  inputs: [
    { id: 'principal', label: 'Loan Amount ($)', type: 'number', placeholder: '250000', min: 0, step: 1000 },
    { id: 'rate', label: 'Interest Rate (%)', type: 'number', placeholder: '6.5', min: 0, step: 0.1 },
    { id: 'term', label: 'Term (months)', type: 'number', placeholder: '360', min: 1, step: 12 },
  ],
  calculate: (vals) => {
    const r = amortizationSchedule(vals.principal, vals.rate, vals.term)
    return { monthlyPayment: r.payment, totalInterest: r.totalInterest, totalPayments: r.payment * vals.term, numberOfPayments: vals.term }
  },
  formula: 'Standard amortization: M = P × (r(1+r)^n)/((1+r)^n-1). Each payment splits into interest and principal.',
  example: { inputs: { principal: 250000, rate: 6.5, term: 360 }, result: 'Monthly: $1,580.17, Total Interest: $318,861.20' },
  useCases: ['Understand mortgage payment structure', 'Compare loan amortization options', 'Plan loan payoff strategy'],
  faqs: [
    { q: 'What is amortization?', a: 'Amortization spreads loan payments over time so each payment covers interest and gradually reduces principal.' },
    { q: 'How much interest do I pay in early years?', a: 'Early payments are mostly interest. Over time, more goes toward principal.' },
    { q: 'How much can I save by making extra principal payments on my mortgage each month?', a: 'Adding $100 extra monthly to a $250,000 mortgage at 6.5% can save over $70,000 in interest and shorten the loan term by approximately 6-7 years.' },
    { q: 'What happens to amortization if I refinance to a lower interest rate?', a: 'Refinancing resets the amortization schedule. Your monthly payment decreases but you extend the term, so calculate total interest carefully before refinancing.' },
  ],
  relatedCalculators: ['amortization-schedule-calculator', 'loan-payment-calculator', 'simple-loan-calculator'],
  disclaimerType: 'finance',
} satisfies CalculatorConfig
