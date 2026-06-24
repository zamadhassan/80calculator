import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'date-add-calculator',
  title: 'Date Add Calculator - Add or Subtract Days from a Date',
  metaDescription: 'Free date add calculator. Add or subtract days, weeks, months, or years from any date instantly.',
  h1: 'Date Add / Subtract Calculator',
  category: 'Date & Age Calculators',
  intro: 'Add or subtract days, weeks, months, or years from any date.',
  inputs: [
    { id: 'day', label: 'Date (Day)', type: 'number', placeholder: '1', min: 1, max: 31, step: 1 },
    { id: 'month', label: 'Month', type: 'number', placeholder: '1', min: 1, max: 12, step: 1 },
    { id: 'year', label: 'Year', type: 'number', placeholder: '2026', min: 1900, max: 2100, step: 1 },
    { id: 'amount', label: 'Amount to Add', type: 'number', placeholder: '30', min: -10000, max: 10000, step: 1 },
    { id: 'unit', label: 'Unit', type: 'select', defaultValue: 0, options: [
      { value: '0', label: 'Days' }, { value: '1', label: 'Weeks' }, { value: '2', label: 'Months' }, { value: '3', label: 'Years' },
    ] },
  ],
  calculate: (vals) => {
    const date = new Date(vals.year, vals.month - 1, vals.day)
    const amount = vals.amount
    const unit = vals.unit
    if (unit === 0) date.setDate(date.getDate() + amount)
    else if (unit === 1) date.setDate(date.getDate() + amount * 7)
    else if (unit === 2) date.setMonth(date.getMonth() + amount)
    else if (unit === 3) date.setFullYear(date.getFullYear() + amount)
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return {
      resultDate: date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      weekday: weekdays[date.getDay()],
      dayOfYear: Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)),
    }
  },
  formula: 'New Date = Original Date + (Amount × Unit). Supports days, weeks, months, and years.',
  example: { inputs: { day: 1, month: 1, year: 2026, amount: 30, unit: 0 }, result: 'Result Date: January 31, 2026, Weekday: Saturday' },
  useCases: ['Calculate deadlines and due dates', 'Plan future events and appointments', 'Determine shipping and delivery dates'],
  faqs: [
    { q: 'Can I subtract days by using a negative number?', a: 'Yes, enter a negative value in the amount field to subtract days, weeks, months, or years from a date.' },
    { q: 'Does this account for leap years?', a: 'Yes, the JavaScript Date object handles leap years automatically. February 29 is valid in leap years, and February 28 is used in non-leap years.' },
    { q: 'What happens if I add months to January 31?', a: 'Adding 1 month to January 31 gives February 28 (or 29 in leap years), as February 31 does not exist. The date automatically adjusts.' },
  ],
  relatedCalculators: ['date-difference-calculator', 'age-calculator', 'weeks-between-dates-calculator'],
} satisfies CalculatorConfig
