import type { CalculatorConfig } from '@/types/calculator'
import { hourlyToSalary } from '@/lib/calculations/time'

export default {
  slug: 'hourly-to-salary-calculator',
  title: 'Hourly to Salary Calculator - Convert Hourly Wage to Annual Salary',
  metaDescription: 'Free hourly to salary calculator. Convert your hourly wage to annual, monthly, and weekly salary.',
  h1: 'Hourly to Salary Calculator',
  category: 'Work, Time & Payroll',
  intro: 'Convert your hourly wage to annual, monthly, and weekly salary equivalents.',
  inputs: [
    { id: 'hourlyRate', label: 'Hourly Rate ($)', type: 'number', placeholder: '25', min: 0, step: 0.5 },
    { id: 'hoursPerWeek', label: 'Hours per Week', type: 'number', placeholder: '40', defaultValue: 40, min: 1, max: 168, step: 1 },
    { id: 'weeksPerYear', label: 'Weeks per Year', type: 'number', placeholder: '52', defaultValue: 52, min: 1, max: 52, step: 1 },
  ],
  calculate: (vals) => {
    const r = hourlyToSalary(vals.hourlyRate, vals.hoursPerWeek, vals.weeksPerYear)
    return { annualSalary: r.annual, monthlySalary: r.monthly, weeklySalary: r.weekly }
  },
  formula: 'Annual Salary = Hourly Rate × Hours/Week × Weeks/Year. Monthly = Annual / 12. Weekly = Hourly × Hours.',
  example: { inputs: { hourlyRate: 25, hoursPerWeek: 40, weeksPerYear: 52 }, result: 'Annual: $52,000, Monthly: $4,333.33, Weekly: $1,000' },
  useCases: ['Compare job offers with different pay structures', 'Negotiate salary from hourly rate', 'Budget based on annual income'],
  faqs: [
    { q: 'How many weeks per year are typically worked?', a: 'Most full-time positions use 52 weeks, but 50 is common when accounting for unpaid leave.' },
    { q: 'Does this account for paid time off?', a: 'No. If you have paid vacation, use 52 weeks. For unpaid leave, reduce weeks accordingly.' },
    { q: 'How do I account for unpaid breaks when converting hourly to salary?', a: 'If you take 30-minute unpaid lunch breaks daily, reduce your effective paid hours per week from 40 to 37.5 to get a more accurate annual salary conversion.' },
    { q: 'Is the annual salary figure pretax or post-tax in this calculation?', a: 'This calculator shows gross annual salary before taxes and deductions. Your actual take-home pay will be lower after federal, state, and local taxes are applied.' },
  ],
  relatedCalculators: ['salary-calculator', 'hourly-wage-calculator', 'gross-pay-calculator'],
} satisfies CalculatorConfig
