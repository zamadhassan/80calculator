import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'date-difference-calculator',
  title: 'Date Difference Calculator - Days Between Dates',
  metaDescription: 'Free date difference calculator. Calculate the exact number of days, weeks, months, and years between two dates.',
  h1: 'Date Difference Calculator',
  category: 'Date & Age Calculators',
  intro: 'Calculate the exact time between any two dates in days, weeks, months, and years.',
  inputs: [
    { id: 'startDay', label: 'Start Date (Day)', type: 'number', placeholder: '1', min: 1, max: 31, step: 1 },
    { id: 'startMonth', label: 'Start Month', type: 'number', placeholder: '1', min: 1, max: 12, step: 1 },
    { id: 'startYear', label: 'Start Year', type: 'number', placeholder: '2025', min: 1900, max: 2100, step: 1 },
    { id: 'endDay', label: 'End Date (Day)', type: 'number', placeholder: '15', min: 1, max: 31, step: 1 },
    { id: 'endMonth', label: 'End Month', type: 'number', placeholder: '6', min: 1, max: 12, step: 1 },
    { id: 'endYear', label: 'End Year', type: 'number', placeholder: '2026', min: 1900, max: 2100, step: 1 },
  ],
  calculate: (vals) => {
    const start = new Date(vals.startYear, vals.startMonth - 1, vals.startDay)
    const end = new Date(vals.endYear, vals.endMonth - 1, vals.endDay)
    const diffMs = Math.abs(end.getTime() - start.getTime())
    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
    const years = Math.floor(totalDays / 365.25)
    const remainingAfterYears = totalDays % 365.25
    const months = Math.floor(remainingAfterYears / 30.44)
    const days = Math.round(remainingAfterYears % 30.44)
    const weeks = Math.floor(totalDays / 7)
    return { totalDays, totalWeeks: weeks, years, months, days, totalHours: Math.floor(diffMs / (1000 * 60 * 60)) }
  },
  formula: 'Difference = End Date - Start Date. Converts milliseconds to days, weeks, months, and years.',
  example: { inputs: { startDay: 1, startMonth: 1, startYear: 2025, endDay: 15, endMonth: 6, endYear: 2026 }, result: 'Total Days: 530, Total Weeks: 75, Years: 1, Months: 5, Days: 14' },
  useCases: ['Calculate days until a deadline', 'Measure time between events', 'Plan project timelines and milestones'],
  faqs: [
    { q: 'Does this calculator include both start and end dates?', a: 'The calculation measures the time elapsed from the start date to the end date. It includes full 24-hour periods between the two dates.' },
    { q: 'How are months calculated?', a: 'Months are calculated using an average of 30.44 days per month. This provides a close approximation but may vary slightly from calendar months.' },
    { q: 'Can I calculate business days only?', a: 'This calculator counts all calendar days. For business days (excluding weekends), you would need a business day calculator that accounts for the day of week.' },
  ],
  relatedCalculators: ['age-calculator', 'date-add-calculator', 'weeks-between-dates-calculator'],
} satisfies CalculatorConfig
