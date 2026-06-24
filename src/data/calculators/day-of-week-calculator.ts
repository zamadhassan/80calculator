import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'day-of-week-calculator',
  title: 'Day of Week Calculator - Find What Day a Date Falls On',
  metaDescription: 'Free day of week calculator. Find out what day of the week any date falls on — past, present, or future.',
  h1: 'Day of Week Calculator',
  category: 'Date & Age Calculators',
  intro: 'Find out what day of the week any date falls on — past, present, or future.',
  inputs: [
    { id: 'day', label: 'Day', type: 'number', placeholder: '15', min: 1, max: 31, step: 1 },
    { id: 'month', label: 'Month', type: 'number', placeholder: '6', min: 1, max: 12, step: 1 },
    { id: 'year', label: 'Year', type: 'number', placeholder: '2026', min: 1, max: 4000, step: 1 },
  ],
  calculate: (vals) => {
    const date = new Date(vals.year, vals.month - 1, vals.day)
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const weekday = weekdays[date.getDay()]
    const daysInMonth = new Date(vals.year, vals.month, 0).getDate()
    const isLeap = (vals.year % 4 === 0 && vals.year % 100 !== 0) || vals.year % 400 === 0
    const dayOfYear = Math.floor((date.getTime() - new Date(vals.year, 0, 0).getTime()) / (1000 * 60 * 60 * 24))
    return { weekday, dayOfWeek: date.getDay() + 1, dayOfYear, daysInMonth, isLeapYear: isLeap ? 'Yes' : 'No' }
  },
  formula: 'Zeller\'s congruence or JavaScript Date object determines day of week from date components.',
  example: { inputs: { day: 15, month: 6, year: 2026 }, result: 'Weekday: Monday, Day of Year: 166, Days in Month: 30' },
  useCases: ['Plan events for specific weekdays', 'Verify historical dates', 'Schedule recurring appointments'],
  faqs: [
    { q: 'How does the day-of-week calculation work?', a: 'The calculator uses JavaScript\'s built-in Date object, which accurately computes the day of the week based on the Gregorian calendar for dates from 1970 onward.' },
    { q: 'Is this accurate for dates before 1752?', a: 'The Gregorian calendar was adopted at different times worldwide. For dates before the adoption in your region, the day of week may differ from historical records.' },
    { q: 'What is the day of year?', a: 'Day of year is a number from 1 to 366 representing the sequential day count within a given year. January 1 is day 1, December 31 is day 365 (or 366 in a leap year).' },
    { q: 'How can I check what day my birthday falls on?', a: 'Simply enter your birth date (day, month, year) and the calculator will instantly show which day of the week it falls on for any year you specify.' },
  ],
  relatedCalculators: ['date-difference-calculator', 'age-calculator', 'date-add-calculator'],
} satisfies CalculatorConfig
