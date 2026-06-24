import type { CalculatorConfig } from '@/types/calculator'
import { loanPayment, aprFromFees } from '@/lib/calculations/finance'

export default {
  slug: 'apr-calculator',
  title: 'APR Calculator - Calculate Annual Percentage Rate',
  metaDescription: 'Free APR calculator. Calculate the true annual percentage rate including fees and costs.',
  h1: 'APR Calculator',
  category: 'Finance, Loan & Investment',
  intro: 'Calculate the true annual percentage rate (APR) including loan fees.',
  inputs: [
    { id: 'loanAmount', label: 'Loan Amount ($)', type: 'number', placeholder: '10000', min: 0, step: 100 },
    { id: 'fees', label: 'Fees ($)', type: 'number', placeholder: '300', min: 0, step: 10 },
    { id: 'payment', label: 'Monthly Payment ($)', type: 'number', placeholder: '350', min: 0, step: 0.01 },
    { id: 'term', label: 'Term (months)', type: 'number', placeholder: '36', min: 1, step: 1 },
  ],
  calculate: (vals) => {
    const result = aprFromFees(vals.loanAmount, vals.fees, vals.payment, vals.term)
    const noFees = loanPayment(vals.loanAmount, 0, vals.term)
    return { aprPercent: result, estimatedInterestOnly: noFees.totalInterest }
  },
  formula: 'APR considers both interest rate AND loan fees to give the true cost of borrowing expressed as an annual rate.',
  example: { inputs: { loanAmount: 10000, fees: 300, payment: 350, term: 36 }, result: 'APR: 16.5%' },
  useCases: ['Compare loan offers with different fees', 'Understand true cost of borrowing', 'Evaluate credit card terms'],
  faqs: [
    { q: 'What is the difference between APR and interest rate?', a: 'APR includes both the interest rate and fees, giving a more complete picture of loan cost.' },
    { q: 'Why is APR higher than the interest rate?', a: 'APR includes origination fees, processing costs, and other charges spread across the loan term.' },
  ],
  relatedCalculators: ['loan-payment-calculator', 'simple-loan-calculator', 'apy-calculator'],
  disclaimerType: 'finance',
} satisfies CalculatorConfig
