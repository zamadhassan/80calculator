import type { CalculatorConfig } from '@/types/calculator'
import { grossPay } from '@/lib/calculations/time'

export default {
  slug: 'gross-pay-calculator',
  title: 'Gross Pay Calculator - Calculate Pay Before Deductions',
  metaDescription: 'Free gross pay calculator. Calculate gross pay including regular and overtime wages.',
  h1: 'Gross Pay Calculator',
  category: 'Work, Time & Payroll',
  intro: 'Calculate your gross pay (before deductions) including regular and overtime wages.',
  inputs: [
    { id: 'hourlyRate', label: 'Hourly Rate ($)', type: 'number', placeholder: '25', min: 0, step: 0.5 },
    { id: 'hours', label: 'Total Hours Worked', type: 'number', placeholder: '45', min: 0, step: 0.5 },
    { id: 'overtimeMultiplier', label: 'Overtime Multiplier', type: 'number', placeholder: '1.5', defaultValue: 1.5, min: 1, max: 3, step: 0.25 },
  ],
  calculate: (vals) => {
    const r = grossPay(vals.hourlyRate, vals.hours, 0, vals.overtimeMultiplier)
    return { regularPay: r.regular, overtimePay: r.overtime, totalGrossPay: r.total }
  },
  formula: 'Regular Pay = Rate × Hours (up to 40). Overtime Pay = Rate × OT Hours × 1.5 (for hours over 40).',
  example: { inputs: { hourlyRate: 25, hours: 45, overtimeMultiplier: 1.5 }, result: 'Regular: $1,000, OT: $187.50, Gross: $1,187.50' },
  useCases: ['Calculate weekly gross earnings', 'Estimate pre-tax income', 'Budget payroll expenses'],
  faqs: [
    { q: 'What is gross pay vs net pay?', a: 'Gross pay is total earnings before deductions. Net pay is take-home after taxes and deductions.' },
    { q: 'What deductions come from gross pay?', a: 'Federal/state taxes, Social Security, Medicare, health insurance, retirement contributions, and garnishments.' },
  ],
  relatedCalculators: ['net-pay-calculator', 'overtime-calculator', 'payroll-hours-calculator'],
} satisfies CalculatorConfig
