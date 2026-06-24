import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'time-clock-calculator',
  title: 'Time Clock Calculator - Calculate Hours Worked with Clock In/Out',
  metaDescription: 'Free time clock calculator. Calculate total time worked from clock in and out entries with breaks.',
  h1: 'Time Clock Calculator',
  category: 'Work, Time & Payroll',
  intro: 'Calculate total time worked from clock in/out entries with break deductions.',
  inputs: [
    { id: 'clockIn', label: 'Clock In Hour (24h)', type: 'number', placeholder: '8', min: 0, max: 24, step: 0.5 },
    { id: 'clockOut', label: 'Clock Out Hour (24h)', type: 'number', placeholder: '17', min: 0, max: 24, step: 0.5 },
    { id: 'breakMinutes', label: 'Break (minutes)', type: 'number', placeholder: '30', defaultValue: 30, min: 0, step: 5 },
  ],
  calculate: (vals) => {
    const raw = vals.clockOut - vals.clockIn
    const breakHours = (vals.breakMinutes || 0) / 60
    const total = Math.max(0, raw - breakHours)
    return { clockIn: vals.clockIn, clockOut: vals.clockOut, totalHours: total, totalMinutes: total * 60 }
  },
  formula: 'Time Worked = Clock Out - Clock In - Break Duration.',
  example: { inputs: { clockIn: 8, clockOut: 17, breakMinutes: 30 }, result: '8h to 17h, Total: 8.5 hours, 510 minutes' },
  useCases: ['Track daily employee attendance', 'Log work hours for payroll', 'Monitor shift compliance'],
  faqs: [
    { q: 'Do lunch breaks count as work time?', a: 'Unpaid lunch breaks (30+ minutes) are typically not counted as work time.' },
    { q: 'How do I track clock in/out for multiple days?', a: 'Use the Time Card calculator for weekly entries or log each day separately.' },
    { q: 'What is the minimum break duration required by law?', a: 'Federal law does not require meal or rest breaks, but many states mandate a 30-minute meal break for shifts over 5-6 hours and short rest breaks of 10-15 minutes per 4 hours worked. Check your state regulations.' },
    { q: 'How can I track time if I work past midnight?', a: 'Use a 24-hour clock format where midnight is 24.0 or 0.0. If you clock in at 22:00 (10 PM) and out at 6:00 (6 AM), add 24 to the out time: 6 + 24 - 22 = 8 hours worked.' },
  ],
  relatedCalculators: ['time-card-calculator', 'work-hours-calculator', 'payroll-hours-calculator'],
} satisfies CalculatorConfig
