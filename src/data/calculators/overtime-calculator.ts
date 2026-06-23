import type { CalculatorConfig } from '@/types/calculator'
import { overtimeCalc } from '@/lib/calculations/time'

export default {
  slug: 'overtime-calculator',
  title: 'Overtime Calculator - Calculate Overtime Pay',
  metaDescription: 'Free overtime calculator. Calculate regular pay, overtime pay, and total pay with overtime multiplier.',
  h1: 'Overtime Calculator',
  category: 'Work, Time & Payroll',
  intro: 'Calculate your regular and overtime pay based on hours worked and your hourly rate.',
  inputs: [
    { id: 'regularHours', label: 'Regular Hours', type: 'number', placeholder: '40', min: 0, step: 0.5 },
    { id: 'overtimeHours', label: 'Overtime Hours', type: 'number', placeholder: '5', min: 0, step: 0.5 },
    { id: 'hourlyRate', label: 'Hourly Rate ($)', type: 'number', placeholder: '25', min: 0, step: 0.5 },
    { id: 'multiplier', label: 'Overtime Multiplier', type: 'number', placeholder: '1.5', defaultValue: 1.5, min: 1, max: 3, step: 0.25 },
  ],
  calculate: (vals) => {
    const r = overtimeCalc(vals.regularHours, vals.overtimeHours, vals.hourlyRate, vals.multiplier)
    return { regularPay: r.regularPay, overtimePay: r.overtimePay, totalPay: r.totalPay }
  },
  formula: 'Regular Pay = Regular Hours × Rate. Overtime Pay = Overtime Hours × Rate × Multiplier. Total = Regular + Overtime.',
  example: { inputs: { regularHours: 40, overtimeHours: 5, hourlyRate: 25, multiplier: 1.5 }, result: 'Regular: $1,000, Overtime: $187.50, Total: $1,187.50' },
  useCases: ['Calculate weekly overtime earnings', 'Budget payroll expenses', 'Compare work schedules'],
  faqs: [
    { q: 'What is the standard overtime rate?', a: 'In the US, the standard overtime rate is 1.5x (time-and-a-half) for hours over 40.' },
    { q: 'Do all employees qualify for overtime?', a: 'No, exempt employees (typically salaried managers/professionals) may not qualify.' },
  ],
  relatedCalculators: ['time-card-calculator', 'hourly-to-salary-calculator', 'gross-pay-calculator'],
} satisfies CalculatorConfig
