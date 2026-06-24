import type { CalculatorConfig } from '@/types/calculator'
import { loanPayment } from '@/lib/calculations/finance'

export default {
  slug: 'business-loan-calculator',
  title: 'Business Loan Calculator - Estimate Monthly Payments',
  metaDescription: 'Free business loan calculator. Calculate monthly payments, total interest, and total repayment for business loans.',
  h1: 'Business Loan Calculator',
  category: 'Finance, Loan & Investment',
  intro: 'Estimate monthly payments and total interest for a business loan.',
  inputs: [
    { id: 'principal', label: 'Loan Amount ($)', type: 'number', placeholder: '50000', min: 0, step: 100 },
    { id: 'rate', label: 'Annual Interest Rate (%)', type: 'number', placeholder: '8', min: 0, step: 0.1 },
    { id: 'term', label: 'Loan Term (months)', type: 'number', placeholder: '60', min: 1, step: 1 },
  ],
  calculate: (vals) => {
    const r = loanPayment(vals.principal, vals.rate, vals.term)
    return { monthlyPayment: r.monthlyPayment, totalInterest: r.totalInterest, totalRepayment: r.totalRepayment }
  },
  formula: 'Monthly Payment = P × (r(1+r)^n) / ((1+r)^n - 1). Where r = monthly rate, n = months.',
  example: { inputs: { principal: 50000, rate: 8, term: 60 }, result: 'Monthly: $1,013.82, Total Interest: $10,829.20' },
  useCases: ['Compare business loan options', 'Budget monthly loan payments', 'Plan equipment financing'],
  faqs: [
    { q: 'What credit score is needed for a business loan?', a: 'Requirements vary but most lenders prefer 680+ for traditional bank loans.' },
    { q: 'How long are typical business loan terms?', a: 'Term loans range 1-10 years depending on the lender and loan purpose.' },
    { q: 'What documents are needed for a business loan application?', a: 'Lenders typically require tax returns, financial statements, a business plan, and proof of revenue for the past two years at minimum.' },
    { q: 'How does a business loan affect my personal credit?', a: 'Most small business loans require a personal guarantee, meaning late payments will impact your personal credit score significantly if reported.' },
  ],
  relatedCalculators: ['simple-loan-calculator', 'loan-payment-calculator', 'amortization-schedule-calculator'],
  disclaimerType: 'finance',
} satisfies CalculatorConfig
