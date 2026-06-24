import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'monthly-income-calculator',
  title: 'Monthly Income Calculator - Calculate Monthly Earnings',
  metaDescription: 'Free monthly income calculator. Convert annual, weekly, or hourly income to monthly earnings.',
  h1: 'Monthly Income Calculator',
  category: 'Work, Time & Payroll',
  intro: 'Convert your annual, weekly, or hourly income to a monthly figure.',
  inputs: [
    { id: 'amount', label: 'Income Amount ($)', type: 'number', placeholder: '60000', min: 0, step: 0.01 },
    { id: 'period', label: 'From', type: 'select', defaultValue: 0, options: [
      { value: '0', label: 'Annual' }, { value: '1', label: 'Weekly' }, { value: '2', label: 'Hourly' },
    ] },
    { id: 'hoursPerWeek', label: 'Hours per Week (if hourly)', type: 'number', placeholder: '40', defaultValue: 40, min: 1, step: 1 },
  ],
  calculate: (vals) => {
    const period = Number(vals.period)
    let monthly = 0
    if (period === 0) monthly = vals.amount / 12
    else if (period === 1) monthly = (vals.amount * 52) / 12
    else monthly = (vals.amount * vals.hoursPerWeek * 52) / 12
    return { monthlyIncome: monthly, annual: monthly * 12, weekly: monthly * 12 / 52 }
  },
  formula: 'Annual / 12 = Monthly. Weekly × 52 / 12 = Monthly. Hourly × Hours × 52 / 12 = Monthly.',
  example: { inputs: { amount: 60000, period: 0, hoursPerWeek: 40 }, result: 'Monthly: $5,000, Annual: $60,000, Weekly: $1,153.85' },
  useCases: ['Create monthly budget', 'Estimate rental affordability', 'Plan monthly expenses'],
  faqs: [
    { q: 'How many weeks in a month?', a: 'Average is 4.33 weeks per month (52 weeks / 12 months).' },
    { q: 'Is monthly income gross or net?', a: 'This calculates gross monthly income (before taxes and deductions).' },
    { q: 'How do I calculate monthly income if I get paid every two weeks instead of monthly?', a: 'Multiply your bi-weekly paycheck amount by 26 pay periods, then divide by 12 months to get your average monthly income for budgeting purposes.' },
    { q: 'Should I use gross or net income when creating my monthly budget plan?', a: 'Use net take-home pay for budgeting since that is the money actually available for expenses, savings, and discretionary spending after all deductions are taken out.' },
  ],
  relatedCalculators: ['annual-income-calculator', 'salary-calculator', 'net-pay-calculator'],
} satisfies CalculatorConfig
