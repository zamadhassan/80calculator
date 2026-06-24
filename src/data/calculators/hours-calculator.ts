import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'hours-calculator',
  title: 'Hours Calculator - Calculate Hours Between Times',
  metaDescription: 'Free hours calculator. Calculate total hours and minutes between two times or dates.',
  h1: 'Hours Calculator',
  category: 'Work, Time & Payroll',
  intro: 'Calculate the total hours and minutes between two times or dates.',
  inputs: [
    { id: 'startHour', label: 'Start Hour (24h)', type: 'number', placeholder: '8', min: 0, max: 23, step: 1 },
    { id: 'startMin', label: 'Start Minute', type: 'number', placeholder: '0', defaultValue: 0, min: 0, max: 59, step: 1 },
    { id: 'endHour', label: 'End Hour (24h)', type: 'number', placeholder: '17', min: 0, max: 23, step: 1 },
    { id: 'endMin', label: 'End Minute', type: 'number', placeholder: '30', defaultValue: 30, min: 0, max: 59, step: 1 },
  ],
  calculate: (vals) => {
    const startTotal = vals.startHour * 60 + vals.startMin
    const endTotal = vals.endHour * 60 + vals.endMin
    let diff = endTotal - startTotal
    if (diff < 0) diff += 1440
    return { hours: Math.floor(diff / 60), minutes: diff % 60, totalMinutes: diff }
  },
  formula: 'Total Minutes = (End Hour × 60 + End Min) - (Start Hour × 60 + Start Min). Adjust if negative (crosses midnight).',
  example: { inputs: { startHour: 8, startMin: 0, endHour: 17, endMin: 30 }, result: '9 hours, 30 minutes' },
  useCases: ['Calculate shift duration', 'Measure project time', 'Schedule planning'],
  faqs: [
    { q: 'How do I calculate hours across midnight?', a: 'If end time is less than start time, it automatically adds 24 hours.' },
    { q: 'Can I calculate minutes between times?', a: 'Yes, the result shows both hours/minutes and total minutes.' },
    { q: 'How do I calculate hours worked including lunch breaks throughout the day?', a: 'Calculate total time from start to end first, then subtract your unpaid lunch break duration to get the actual hours worked for accurate time tracking.' },
    { q: 'Can I calculate hours across multiple days or different shifts using this tool?', a: 'For multi-day calculations, compute each shift separately and add the results together since this calculator handles single time ranges within a 24-hour period.' },
  ],
  relatedCalculators: ['work-hours-calculator', 'time-card-calculator'],
} satisfies CalculatorConfig
