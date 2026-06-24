import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'annual-income-calculator',
  title: 'Annual Income Calculator - Calculate Yearly Income',
  metaDescription: 'Free annual income calculator. Convert hourly, weekly, or monthly income to annual salary.',
  h1: 'Annual Income Calculator',
  category: 'Work, Time & Payroll',
  intro: 'Convert your hourly, weekly, or monthly income to an annual figure.',
  inputs: [
    { id: 'amount', label: 'Income Amount ($)', type: 'number', placeholder: '5000', min: 0, step: 0.01 },
    { id: 'period', label: 'Pay Period', type: 'select', defaultValue: 0, options: [
      { value: '0', label: 'Per Month' }, { value: '1', label: 'Per Week' }, { value: '2', label: 'Per Hour' },
    ] },
    { id: 'hoursPerWeek', label: 'Hours per Week (if hourly)', type: 'number', placeholder: '40', defaultValue: 40, min: 1, step: 1 },
  ],
  calculate: (vals) => {
    const period = Number(vals.period)
    let annual = 0
    if (period === 0) annual = vals.amount * 12
    else if (period === 1) annual = vals.amount * 52
    else annual = vals.amount * vals.hoursPerWeek * 52
    return { annualIncome: annual, monthly: annual / 12, weekly: annual / 52 }
  },
  formula: 'Monthly × 12 = Annual. Weekly × 52 = Annual. Hourly × Hours/Week × 52 = Annual.',
  example: { inputs: { amount: 5000, period: 0, hoursPerWeek: 40 }, result: 'Annual: $60,000, Monthly: $5,000, Weekly: $1,153.85' },
  useCases: ['Estimate total annual earnings', 'Compare job offers', 'Calculate loan eligibility'],
  faqs: [
    { q: 'How do I calculate annual income from hourly?', a: 'Multiply hourly rate by hours per week and then by 52 weeks.' },
    { q: 'Should I include bonuses in annual income?', a: 'Yes, include all guaranteed income. Bonuses can be estimated separately.' },
    { q: 'What if I work variable hours each week?', a: 'Use your average weekly hours over the past several months to get the most accurate annual income estimate from this calculator.' },
    { q: 'Does this calculator account for overtime pay?', a: 'Enter your base hourly rate for regular hours. Calculate overtime separately and add it to the annual result as additional income.' },
  ],
  relatedCalculators: ['monthly-income-calculator', 'salary-calculator', 'hourly-to-salary-calculator'],
} satisfies CalculatorConfig
