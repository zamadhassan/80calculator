import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'payroll-hours-calculator',
  title: 'Payroll Hours Calculator - Calculate Regular and Overtime Hours',
  metaDescription: 'Free payroll hours calculator. Split total hours into regular and overtime with pay calculation.',
  h1: 'Payroll Hours Calculator',
  category: 'Work, Time & Payroll',
  intro: 'Split total work hours into regular and overtime, with optional pay calculation.',
  inputs: [
    { id: 'totalHours', label: 'Total Hours Worked', type: 'number', placeholder: '45', min: 0, step: 0.5 },
    { id: 'overtimeThreshold', label: 'Overtime Threshold (hours)', type: 'number', placeholder: '40', defaultValue: 40, min: 0, step: 1 },
    { id: 'hourlyRate', label: 'Hourly Rate ($) - optional', type: 'number', placeholder: '25', min: 0, step: 0.5 },
  ],
  calculate: (vals) => {
    const regular = Math.min(vals.totalHours, vals.overtimeThreshold)
    const overtime = Math.max(0, vals.totalHours - vals.overtimeThreshold)
    const regularPay = vals.hourlyRate > 0 ? regular * vals.hourlyRate : 0
    const overtimePay = vals.hourlyRate > 0 ? overtime * vals.hourlyRate * 1.5 : 0
    return { regularHours: regular, overtimeHours: overtime, regularPay, overtimePay, totalPay: regularPay + overtimePay }
  },
  formula: 'Regular = Min(Total, Threshold). Overtime = Max(0, Total - Threshold). Pay = Regular×Rate + Overtime×Rate×1.5.',
  example: { inputs: { totalHours: 45, overtimeThreshold: 40, hourlyRate: 25 }, result: 'Regular: 40h, OT: 5h, Total Pay: $1,187.50' },
  useCases: ['Process weekly payroll', 'Calculate overtime compliance', 'Estimate labor costs'],
  faqs: [
    { q: 'What is the standard overtime threshold?', a: 'In the US, 40 hours per week is the standard overtime threshold for non-exempt employees.' },
    { q: 'How is overtime pay calculated?', a: 'Overtime is typically paid at 1.5 times the regular hourly rate (time-and-a-half).' },
  ],
  relatedCalculators: ['overtime-calculator', 'time-card-calculator', 'gross-pay-calculator'],
} satisfies CalculatorConfig
