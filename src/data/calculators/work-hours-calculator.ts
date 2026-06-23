import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'work-hours-calculator',
  title: 'Work Hours Calculator - Calculate Total Hours Worked',
  metaDescription: 'Free work hours calculator. Calculate total hours worked with start time, end time, and break duration.',
  h1: 'Work Hours Calculator',
  category: 'Work, Time & Payroll',
  intro: 'Calculate total hours worked in a day by entering your start time, end time, and break duration.',
  inputs: [
    { id: 'start', label: 'Start Time (24h)', type: 'number', placeholder: '9', min: 0, max: 24, step: 0.25 },
    { id: 'end', label: 'End Time (24h)', type: 'number', placeholder: '17', min: 0, max: 24, step: 0.25 },
    { id: 'breakMinutes', label: 'Break (minutes)', type: 'number', placeholder: '30', defaultValue: 30, min: 0, step: 5 },
  ],
  calculate: (vals) => {
    const rawHours = vals.end - vals.start
    const breakHours = (vals.breakMinutes || 0) / 60
    const totalHours = Math.max(0, rawHours - breakHours)
    return { totalHours, totalMinutes: totalHours * 60, breakHours }
  },
  formula: 'Work Hours = End Time - Start Time - Break Duration.',
  example: { inputs: { start: 9, end: 17, breakMinutes: 30 }, result: 'Work: 7.5 hours, Break: 0.5 hours' },
  useCases: ['Track daily work hours', 'Calculate billable hours', 'Log employee attendance'],
  faqs: [
    { q: 'What is the standard work day length?', a: 'A standard work day is 8 hours with a 30-minute to 1-hour unpaid break.' },
    { q: 'How do I enter half hours?', a: 'Use .5 for half hours (e.g., 8:30 AM = 8.5, 5:30 PM = 17.5).' },
  ],
  relatedCalculators: ['hours-calculator', 'time-card-calculator', 'overtime-calculator'],
} satisfies CalculatorConfig
