import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'time-duration-calculator',
  title: 'Time Duration Calculator - Calculate Time Between Two Times',
  metaDescription: 'Free time duration calculator. Calculate the exact hours, minutes, and seconds between two times.',
  h1: 'Time Duration Calculator',
  category: 'Date & Age Calculators',
  intro: 'Calculate the exact duration between two times in hours, minutes, and seconds.',
  inputs: [
    { id: 'startHour', label: 'Start Hour (0-23)', type: 'number', placeholder: '9', min: 0, max: 23, step: 1 },
    { id: 'startMin', label: 'Start Minute', type: 'number', placeholder: '0', min: 0, max: 59, step: 1 },
    { id: 'endHour', label: 'End Hour (0-23)', type: 'number', placeholder: '17', min: 0, max: 23, step: 1 },
    { id: 'endMin', label: 'End Minute', type: 'number', placeholder: '30', min: 0, max: 59, step: 1 },
  ],
  calculate: (vals) => {
    const startTotal = vals.startHour * 60 + vals.startMin
    const endTotal = vals.endHour * 60 + vals.endMin
    let diffMin = endTotal - startTotal
    if (diffMin < 0) diffMin += 24 * 60
    const hours = Math.floor(diffMin / 60)
    const minutes = diffMin % 60
    return { hours, minutes, totalMinutes: diffMin, totalSeconds: diffMin * 60 }
  },
  formula: 'Duration = End Time - Start Time. If end is before start, assumes next day (24-hour rollover).',
  example: { inputs: { startHour: 9, startMin: 0, endHour: 17, endMin: 30 }, result: 'Hours: 8, Minutes: 30, Total Minutes: 510' },
  useCases: ['Calculate work shift durations', 'Track time spent on tasks', 'Plan meeting and event lengths'],
  faqs: [
    { q: 'What happens if the end time is before the start time?', a: 'The calculator assumes the end time is on the following day. For example, 10 PM to 2 AM gives a duration of 4 hours.' },
    { q: 'Does this support 12-hour AM/PM format?', a: 'Currently uses 24-hour format (0-23). Convert 12-hour time by adding 12 to PM hours (e.g., 2 PM = 14, 11 PM = 23).' },
    { q: 'Can I calculate durations longer than 24 hours?', a: 'For durations longer than 24 hours, use the Date Difference Calculator instead, which supports multi-day calculations.' },
    { q: 'What is the difference between elapsed time and duration?', a: 'Duration is the time between two specific times on the same day (or next day). Elapsed time can span multiple days and is better calculated with a date-aware tool.' },
  ],
  relatedCalculators: ['hours-calculator', 'work-hours-calculator', 'time-card-calculator'],
} satisfies CalculatorConfig
