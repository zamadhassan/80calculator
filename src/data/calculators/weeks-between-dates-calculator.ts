import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'weeks-between-dates-calculator',
  title: 'Weeks Between Dates Calculator - Count Weeks',
  metaDescription: 'Free weeks calculator. Count the exact number of weeks and days between two dates.',
  h1: 'Weeks Between Dates Calculator',
  category: 'Date & Age Calculators',
  intro: 'Count the exact number of weeks and days between any two dates.',
  inputs: [
    { id: 'startDay', label: 'Start Date (Day)', type: 'number', placeholder: '1', min: 1, max: 31, step: 1 },
    { id: 'startMonth', label: 'Start Month', type: 'number', placeholder: '1', min: 1, max: 12, step: 1 },
    { id: 'startYear', label: 'Start Year', type: 'number', placeholder: '2026', min: 1900, max: 2100, step: 1 },
    { id: 'endDay', label: 'End Date (Day)', type: 'number', placeholder: '1', min: 1, max: 31, step: 1 },
    { id: 'endMonth', label: 'End Month', type: 'number', placeholder: '3', min: 1, max: 12, step: 1 },
    { id: 'endYear', label: 'End Year', type: 'number', placeholder: '2026', min: 1900, max: 2100, step: 1 },
  ],
  calculate: (vals) => {
    const start = new Date(vals.startYear, vals.startMonth - 1, vals.startDay)
    const end = new Date(vals.endYear, vals.endMonth - 1, vals.endDay)
    const diffMs = Math.abs(end.getTime() - start.getTime())
    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
    const weeks = Math.floor(totalDays / 7)
    const remainingDays = totalDays % 7
    const fullMonths = Math.floor(totalDays / 30.44)
    return { totalWeeks: weeks, extraDays: remainingDays, totalDays, fullMonths: Math.round(fullMonths), totalHours: Math.floor(diffMs / (1000 * 60 * 60)) }
  },
  formula: 'Weeks = (End Date - Start Date) / 7. Remaining days after full weeks are displayed separately.',
  example: { inputs: { startDay: 1, startMonth: 1, startYear: 2026, endDay: 1, endMonth: 3, endYear: 2026 }, result: 'Total Weeks: 8, Extra Days: 3, Total Days: 59' },
  useCases: ['Plan pregnancy and due date tracking', 'Calculate project sprint durations', 'Measure time between events in weeks'],
  faqs: [
    { q: 'What counts as a full week?', a: 'A full week is 7 consecutive days. The calculator divides total days by 7 and shows remaining extra days that are not part of a complete week.' },
    { q: 'Does the start date count as day 1?', a: 'No, the calculation counts full 24-hour periods between the two dates. The start date is considered day 0, and each subsequent day adds 1.' },
    { q: 'Can I calculate for future dates?', a: 'Yes, this calculator works for any date range in the past, present, or future between the year 1900 and 2100.' },
  ],
  relatedCalculators: ['date-difference-calculator', 'age-calculator', 'date-add-calculator'],
} satisfies CalculatorConfig
