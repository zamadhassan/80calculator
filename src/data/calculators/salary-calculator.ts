import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'salary-calculator',
  title: 'Salary Calculator - Break Down Salary by Pay Period',
  metaDescription: 'Free salary calculator. Convert between annual, monthly, weekly, daily, and hourly salary.',
  h1: 'Salary Calculator',
  category: 'Work, Time & Payroll',
  intro: 'Break down your salary across different pay periods.',
  inputs: [
    { id: 'annualSalary', label: 'Annual Salary ($)', type: 'number', placeholder: '75000', min: 0, step: 1000 },
    { id: 'hoursPerWeek', label: 'Hours per Week', type: 'number', placeholder: '40', defaultValue: 40, min: 1, max: 168, step: 1 },
  ],
  calculate: (vals) => ({
    annual: vals.annualSalary,
    monthly: vals.annualSalary / 12,
    biweekly: vals.annualSalary / 26,
    weekly: vals.annualSalary / 52,
    daily: vals.annualSalary / 260,
    hourly: vals.annualSalary / (vals.hoursPerWeek * 52),
  }),
  formula: 'Monthly = Annual / 12. Biweekly = Annual / 26. Weekly = Annual / 52. Daily = Annual / 260. Hourly = Annual / (Hours × 52).',
  example: { inputs: { annualSalary: 75000, hoursPerWeek: 40 }, result: 'Annual: $75,000, Monthly: $6,250, Hourly: $36.06' },
  useCases: ['Compare salary across pay periods', 'Budget monthly from annual salary', 'Negotiate salary packages'],
  faqs: [
    { q: 'How many pay periods in a year?', a: '12 monthly, 26 biweekly, or 52 weekly pay periods depending on employer schedule.' },
    { q: 'How many working days in a year?', a: 'Typically 260 weekdays (52 weeks × 5 days), excluding holidays.' },
    { q: 'How do I negotiate a salary based on hourly equivalent?', a: 'Convert the offered salary to an hourly rate by dividing by 2,080 (40 hours × 52 weeks). This helps you compare salaried positions with hourly roles and understand the true value of the compensation package.' },
    { q: 'What is the difference between gross and net salary?', a: 'Gross salary is the total amount before any deductions. Net salary (take-home pay) is what remains after taxes, Social Security, Medicare, health insurance premiums, and retirement contributions are subtracted.' },
  ],
  relatedCalculators: ['hourly-to-salary-calculator', 'annual-income-calculator', 'gross-pay-calculator'],
} satisfies CalculatorConfig
