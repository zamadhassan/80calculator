import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'investment-return-calculator',
  title: 'Investment Return Calculator - Calculate Total Return',
  metaDescription: 'Free investment return calculator. Calculate total return amount and percentage from initial and final values.',
  h1: 'Investment Return Calculator',
  category: 'Finance, Loan & Investment',
  intro: 'Calculate your total investment return in dollars and percentage.',
  inputs: [
    { id: 'initialValue', label: 'Initial Value ($)', type: 'number', placeholder: '10000', min: 0, step: 100 },
    { id: 'finalValue', label: 'Final Value ($)', type: 'number', placeholder: '15000', min: 0, step: 100 },
  ],
  calculate: (vals) => ({
    totalReturn: vals.finalValue - vals.initialValue,
    returnPercent: ((vals.finalValue - vals.initialValue) / vals.initialValue) * 100,
  }),
  formula: 'Return = Final Value - Initial Value. Return % = (Return / Initial Value) × 100.',
  example: { inputs: { initialValue: 10000, finalValue: 15000 }, result: 'Total Return: $5,000, Return: 50%' },
  useCases: ['Calculate investment performance', 'Compare asset returns', 'Track portfolio growth'],
  faqs: [
    { q: 'Does this account for dividends?', a: 'No, this calculates price return only. Include reinvested dividends in final value for total return.' },
    { q: 'What is a good investment return?', a: 'Historically, 7-10% annual return is considered good for stock market investments over the long term.' },
    { q: 'Should I include fees and trading costs in my investment return calculation?', a: 'Yes, include all transaction fees, management fees, and commissions in your initial cost basis to calculate your true net return rather than a gross return figure.' },
    { q: 'How do I calculate annualized return from total return over multiple years?', a: 'Use the formula (1 + Total Return %)^(1/Years) - 1 to convert your total return into an average annual return for comparing different investment time periods.' },
  ],
  relatedCalculators: ['roi-calculator', 'cagr-calculator', 'investment-calculator'],
} satisfies CalculatorConfig
