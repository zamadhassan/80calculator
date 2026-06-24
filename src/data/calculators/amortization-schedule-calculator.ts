import type { CalculatorConfig } from '@/types/calculator'
import { amortizationSchedule } from '@/lib/calculations/finance'

export default {
  slug: 'amortization-schedule-calculator',
  title: 'Amortization Schedule Calculator - Full Loan Payment Table',
  metaDescription: 'Free amortization schedule calculator. Generate a complete month-by-month loan payment schedule with totals.',
  h1: 'Amortization Schedule Calculator',
  category: 'Finance, Loan & Investment',
  intro: 'Generate a full month-by-month amortization schedule for any loan.',
  inputs: [
    { id: 'principal', label: 'Loan Amount ($)', type: 'number', placeholder: '30000', min: 0, step: 100 },
    { id: 'rate', label: 'Interest Rate (%)', type: 'number', placeholder: '5', min: 0, step: 0.1 },
    { id: 'term', label: 'Term (months)', type: 'number', placeholder: '60', min: 1, step: 1 },
  ],
  calculate: (vals) => {
    const r = amortizationSchedule(vals.principal, vals.rate, vals.term)
    return { monthlyPayment: r.payment, totalInterest: r.totalInterest, totalPaid: r.payment * vals.term }
  },
  formula: 'Month-by-month: Interest = Balance × Monthly Rate. Principal = Payment - Interest. Balance reduces monthly.',
  example: { inputs: { principal: 30000, rate: 5, term: 60 }, result: 'Monthly: $566.14, Total Interest: $3,968.40' },
  useCases: ['See detailed loan payment breakdown', 'Track principal reduction over time', 'Compare accelerated payment plans'],
  faqs: [
    { q: 'What does a full schedule show?', a: 'Each month shows: payment amount, interest portion, principal portion, and remaining balance.' },
    { q: 'Can I see the schedule for extra payments?', a: 'This calculates the standard schedule. Extra payments reduce total interest and shorten the term.' },
    { q: 'How does paying extra each month affect my schedule?', a: 'Extra payments reduce principal faster, lowering total interest paid and shortening the loan term significantly over the life of the loan.' },
    { q: 'Can I use this for a mortgage amortization schedule?', a: 'Yes, simply enter your mortgage principal, annual interest rate, and term in months to generate a complete month-by-month payment breakdown.' },
  ],
  relatedCalculators: ['loan-amortization-calculator', 'loan-payment-calculator', 'credit-card-payoff-calculator'],
  disclaimerType: 'finance',
} satisfies CalculatorConfig
