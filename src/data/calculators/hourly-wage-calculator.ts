import type { CalculatorConfig } from '@/types/calculator'
import { salaryToHourly, hourlyToSalary } from '@/lib/calculations/time'

export default {
  slug: 'hourly-wage-calculator',
  title: 'Hourly Wage Calculator - Convert Salary to Hourly Wage',
  metaDescription: 'Free hourly wage calculator. Convert annual salary to hourly, weekly, and monthly rates.',
  h1: 'Hourly Wage Calculator',
  category: 'Work, Time & Payroll',
  intro: 'Convert your annual salary to an equivalent hourly wage.',
  inputs: [
    { id: 'salary', label: 'Annual Salary ($)', type: 'number', placeholder: '60000', min: 0, step: 1000 },
    { id: 'hoursPerWeek', label: 'Hours per Week', type: 'number', placeholder: '40', defaultValue: 40, min: 1, max: 168, step: 1 },
    { id: 'weeksPerYear', label: 'Weeks per Year', type: 'number', placeholder: '52', defaultValue: 52, min: 1, max: 52, step: 1 },
  ],
  calculate: (vals) => {
    const hourly = salaryToHourly(vals.salary, vals.hoursPerWeek, vals.weeksPerYear)
    const weekly = vals.salary / vals.weeksPerYear
    const monthly = vals.salary / 12
    return { hourlyWage: hourly, weeklyEquivalent: weekly, monthlyEquivalent: monthly }
  },
  formula: 'Hourly = Annual Salary / (Hours/Week × Weeks/Year). Weekly = Salary / 52. Monthly = Salary / 12.',
  example: { inputs: { salary: 60000, hoursPerWeek: 40, weeksPerYear: 52 }, result: '$28.85/h, $1,153.85/week, $5,000/month' },
  useCases: ['Compare salary and hourly job offers', 'Set contractor rates', 'Calculate freelance billing'],
  faqs: [
    { q: 'How many work hours in a year?', a: 'Standard full-time: 40 hours × 52 weeks = 2,080 hours per year.' },
    { q: 'Should I include paid time off in weeks?', a: 'No, use 52 weeks for salaried positions with paid vacation. Use fewer weeks if unpaid.' },
    { q: 'Should freelancers use a different hourly rate than salary employees?', a: 'Freelancers should factor in self-employment taxes, health insurance, unpaid time off, and overhead costs, typically adding 25-40% above the equivalent employee hourly rate.' },
    { q: 'How do bonuses and commissions affect the hourly wage calculation?', a: 'Add expected annual bonuses and commissions to your base salary before dividing to get a more accurate hourly rate that reflects your total annual compensation.' },
  ],
  relatedCalculators: ['hourly-to-salary-calculator', 'salary-calculator', 'gross-pay-calculator'],
} satisfies CalculatorConfig
