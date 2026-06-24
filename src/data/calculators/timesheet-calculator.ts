import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'timesheet-calculator',
  title: 'Timesheet Calculator - Calculate Hours and Pay',
  metaDescription: 'Free timesheet calculator. Track daily work hours, breaks, and calculate gross pay including overtime.',
  h1: 'Timesheet Calculator',
  category: 'Work, Time & Payroll',
  intro: 'Track your work week and calculate gross pay including overtime.',
  inputs: [
    { id: 'start1', label: 'Day 1 Start', type: 'number', placeholder: '9', min: 0, max: 24, step: 0.5 },
    { id: 'end1', label: 'Day 1 End', type: 'number', placeholder: '17', min: 0, max: 24, step: 0.5 },
    { id: 'break1', label: 'Day 1 Break (min)', type: 'number', placeholder: '30', defaultValue: 30, min: 0, step: 5 },
    { id: 'start2', label: 'Day 2 Start', type: 'number', placeholder: '9', min: 0, max: 24, step: 0.5 },
    { id: 'end2', label: 'Day 2 End', type: 'number', placeholder: '17', min: 0, max: 24, step: 0.5 },
    { id: 'break2', label: 'Day 2 Break (min)', type: 'number', placeholder: '30', defaultValue: 30, min: 0, step: 5 },
    { id: 'start3', label: 'Day 3 Start', type: 'number', placeholder: '9', min: 0, max: 24, step: 0.5 },
    { id: 'end3', label: 'Day 3 End', type: 'number', placeholder: '17', min: 0, max: 24, step: 0.5 },
    { id: 'break3', label: 'Day 3 Break (min)', type: 'number', placeholder: '30', defaultValue: 30, min: 0, step: 5 },
    { id: 'start4', label: 'Day 4 Start', type: 'number', placeholder: '9', min: 0, max: 24, step: 0.5 },
    { id: 'end4', label: 'Day 4 End', type: 'number', placeholder: '17', min: 0, max: 24, step: 0.5 },
    { id: 'break4', label: 'Day 4 Break (min)', type: 'number', placeholder: '30', defaultValue: 30, min: 0, step: 5 },
    { id: 'start5', label: 'Day 5 Start', type: 'number', placeholder: '9', min: 0, max: 24, step: 0.5 },
    { id: 'end5', label: 'Day 5 End', type: 'number', placeholder: '17', min: 0, max: 24, step: 0.5 },
    { id: 'break5', label: 'Day 5 Break (min)', type: 'number', placeholder: '30', defaultValue: 30, min: 0, step: 5 },
    { id: 'hourlyRate', label: 'Hourly Rate ($)', type: 'number', placeholder: '25', min: 0, step: 0.5 },
  ],
  calculate: (vals) => {
    let totalHours = 0
    for (let i = 1; i <= 5; i++) {
      const start = vals[`start${i}`]
      const end = vals[`end${i}`]
      const brk = vals[`break${i}`] || 0
      if (end > start) totalHours += Math.max(0, end - start - brk / 60)
    }
    const regularHours = Math.min(totalHours, 40)
    const overtimeHours = Math.max(0, totalHours - 40)
    const regularPay = regularHours * vals.hourlyRate
    const overtimePay = overtimeHours * vals.hourlyRate * 1.5
    return { totalHours, regularHours, overtimeHours, regularPay, overtimePay, grossPay: regularPay + overtimePay }
  },
  formula: 'Total Hours = Sum of (End - Start - Break/day). Overtime = Hours > 40. Gross Pay = (Regular × Rate) + (Overtime × Rate × 1.5).',
  example: { inputs: { start1: 9, end1: 17, break1: 30 }, result: 'Total: 37.5h, Gross Pay: $937.50 (at $25/h)' },
  useCases: ['Calculate weekly payroll', 'Track employee timesheets', 'Estimate gross pay'],
  faqs: [
    { q: 'How do I account for unpaid lunch breaks?', a: 'Subtract break minutes from daily hours. A 30-min break = 0.5 hours deducted.' },
    { q: 'What is the overtime rate?', a: 'Standard US overtime is 1.5x the regular hourly rate for hours over 40 per week.' },
    { q: 'How do I calculate overtime if I work 6 or 7 days a week?', a: 'FLSA overtime is based on 40 hours per week, not daily hours. All hours beyond 40 in a week are overtime regardless of how many days worked. Some states also require daily overtime beyond 8 hours in a day.' },
    { q: 'What records should employers keep for timesheet compliance?', a: 'Employers should retain timesheets, clock-in/out records, and pay stubs for at least 3 years under FLSA requirements. Records should include daily hours worked, break times, and total hours each pay period.' },
  ],
  relatedCalculators: ['time-card-calculator', 'work-hours-calculator', 'overtime-calculator'],
} satisfies CalculatorConfig
