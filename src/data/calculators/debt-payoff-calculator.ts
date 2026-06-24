import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'debt-payoff-calculator',
  title: 'Debt Payoff Calculator - Plan Debt Repayment Schedule',
  metaDescription: 'Free debt payoff calculator. Calculate how long to pay off debt and interest saved with extra payments.',
  h1: 'Debt Payoff Calculator',
  category: 'Finance, Loan & Investment',
  intro: 'See how long it takes to pay off your debt and how extra payments save interest.',
  inputs: [
    { id: 'balance', label: 'Current Balance ($)', type: 'number', placeholder: '10000', min: 0, step: 100 },
    { id: 'apr', label: 'APR (%)', type: 'number', placeholder: '18', min: 0, step: 0.1 },
    { id: 'monthlyPayment', label: 'Monthly Payment ($)', type: 'number', placeholder: '300', min: 0, step: 10 },
    { id: 'extraPayment', label: 'Extra Payment per Month ($)', type: 'number', placeholder: '50', min: 0, step: 10 },
  ],
  calculate: (vals) => {
    const monthlyRate = vals.apr / 100 / 12
    const totalPayment = vals.monthlyPayment + vals.extraPayment
    let bal = vals.balance
    let months = 0
    let totalInterest = 0
    while (bal > 0 && months < 600) {
      const interest = bal * monthlyRate
      const principal = Math.min(totalPayment - interest, bal)
      bal -= principal
      totalInterest += interest
      months++
    }
    return { monthsToPayoff: months, totalInterest, totalPaid: vals.balance + totalInterest }
  },
  formula: 'Monthly: Interest = Balance × (APR/12). Principal reduction = Payment - Interest. Extra payments reduce principal faster.',
  example: { inputs: { balance: 10000, apr: 18, monthlyPayment: 300, extraPayment: 50 }, result: 'Payoff: 40 months, Interest: $3,248' },
  useCases: ['Plan debt repayment strategy', 'See impact of extra payments', 'Compare debt payoff methods'],
  faqs: [
    { q: 'How do extra payments help?', a: 'Extra payments go directly to principal, reducing total interest and shortening payoff time.' },
    { q: 'Should I pay off debt or invest?', a: 'Generally pay off high-interest debt (8%+) before investing, since guaranteed returns beat market uncertainty.' },
    { q: 'What is the debt snowball method?', a: 'Pay minimum on all debts but put extra money toward the smallest balance first for psychological wins that keep you motivated to continue.' },
    { q: 'How do interest rate changes affect my payoff plan?', a: 'Rate changes alter how much of your payment goes to interest versus principal, so recalculate if your APR changes to stay on track.' },
  ],
  relatedCalculators: ['credit-card-payoff-calculator', 'loan-payment-calculator', 'simple-loan-calculator'],
  disclaimerType: 'finance',
} satisfies CalculatorConfig
