import type { CalculatorConfig } from '@/types/calculator'
import { creditCardPayoff } from '@/lib/calculations/finance'

export default {
  slug: 'credit-card-payoff-calculator',
  title: 'Credit Card Payoff Calculator - Plan Debt Repayment',
  metaDescription: 'Free credit card payoff calculator. Calculate how long to pay off debt and total interest based on monthly payment.',
  h1: 'Credit Card Payoff Calculator',
  category: 'Finance, Loan & Investment',
  intro: 'See how long it will take to pay off your credit card balance and how much interest you will pay.',
  inputs: [
    { id: 'balance', label: 'Current Balance ($)', type: 'number', placeholder: '5000', min: 0, step: 100 },
    { id: 'apr', label: 'APR (%)', type: 'number', placeholder: '22', min: 0, step: 0.1 },
    { id: 'payment', label: 'Monthly Payment ($)', type: 'number', placeholder: '200', min: 0, step: 10 },
  ],
  calculate: (vals) => {
    const r = creditCardPayoff(vals.balance, vals.apr, vals.payment)
    return { monthsToPayoff: r.months, totalInterest: r.totalInterest, finalPayment: r.finalPayment }
  },
  formula: 'Monthly interest = Balance × (APR/12). Each month, payment covers interest first, then reduces principal.',
  example: { inputs: { balance: 5000, apr: 22, payment: 200 }, result: 'Payoff: 31 months, Interest: $1,200.00, Final payment: $200' },
  useCases: ['Plan credit card debt repayment', 'Compare payment strategies', 'Calculate total interest costs'],
  faqs: [
    { q: 'How can I pay off credit card debt faster?', a: 'Pay more than the minimum, consider balance transfer, or use the debt avalanche method.' },
    { q: 'What happens if I only make minimum payments?', a: 'Minimum payments can extend payoff by years and multiply total interest dramatically.' },
    { q: 'What is the debt avalanche method?', a: 'Pay the minimum on all cards but put extra money toward the card with the highest APR first to minimize total interest paid over the repayment period.' },
    { q: 'Should I close credit cards after paying them off?', a: 'Closing cards reduces your available credit and may hurt your credit utilization ratio, so it is better to keep them open with a zero balance.' },
  ],
  relatedCalculators: ['debt-payoff-calculator', 'loan-payment-calculator', 'simple-loan-calculator'],
  disclaimerType: 'finance',
} satisfies CalculatorConfig
