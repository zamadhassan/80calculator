import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'time-card-calculator',
  title: 'Time Card Calculator - Calculate Work Hours and Breaks',
  metaDescription: 'Free time card calculator. Calculate daily and weekly work hours with breaks and overtime tracking.',
  h1: 'Time Card Calculator',
  category: 'Work, Time & Payroll',
  intro: 'Track daily work hours, breaks, and overtime across a work week.',
  inputs: [
    { id: 'startMon', label: 'Monday Start', type: 'number', placeholder: '9', min: 0, max: 24, step: 0.5 },
    { id: 'endMon', label: 'Monday End', type: 'number', placeholder: '17', min: 0, max: 24, step: 0.5 },
    { id: 'breakMon', label: 'Monday Break (min)', type: 'number', placeholder: '30', defaultValue: 30, min: 0, step: 5 },
    { id: 'startTue', label: 'Tuesday Start', type: 'number', placeholder: '9', min: 0, max: 24, step: 0.5 },
    { id: 'endTue', label: 'Tuesday End', type: 'number', placeholder: '17', min: 0, max: 24, step: 0.5 },
    { id: 'breakTue', label: 'Tuesday Break (min)', type: 'number', placeholder: '30', defaultValue: 30, min: 0, step: 5 },
    { id: 'startWed', label: 'Wednesday Start', type: 'number', placeholder: '9', min: 0, max: 24, step: 0.5 },
    { id: 'endWed', label: 'Wednesday End', type: 'number', placeholder: '17', min: 0, max: 24, step: 0.5 },
    { id: 'breakWed', label: 'Wednesday Break (min)', type: 'number', placeholder: '30', defaultValue: 30, min: 0, step: 5 },
    { id: 'startThu', label: 'Thursday Start', type: 'number', placeholder: '9', min: 0, max: 24, step: 0.5 },
    { id: 'endThu', label: 'Thursday End', type: 'number', placeholder: '17', min: 0, max: 24, step: 0.5 },
    { id: 'breakThu', label: 'Thursday Break (min)', type: 'number', placeholder: '30', defaultValue: 30, min: 0, step: 5 },
    { id: 'startFri', label: 'Friday Start', type: 'number', placeholder: '9', min: 0, max: 24, step: 0.5 },
    { id: 'endFri', label: 'Friday End', type: 'number', placeholder: '17', min: 0, max: 24, step: 0.5 },
    { id: 'breakFri', label: 'Friday Break (min)', type: 'number', placeholder: '30', defaultValue: 30, min: 0, step: 5 },
  ],
  calculate: (vals) => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
    let totalHours = 0
    const daily: Record<string, number> = {}
    for (const day of days) {
      const start = vals[`start${day}`]
      const end = vals[`end${day}`]
      const brk = vals[`break${day}`] || 0
      if (end > start) {
        const h = end - start - brk / 60
        daily[`${day}Hours`] = Math.max(0, h)
        totalHours += Math.max(0, h)
      }
    }
    return { ...daily, totalHours, overtime: Math.max(0, totalHours - 40) }
  },
  formula: 'Daily Hours = End - Start - Break. Weekly Total = Sum of daily hours. Overtime = Hours over 40.',
  example: { inputs: { startMon: 9, endMon: 17, breakMon: 30, startTue: 9, endTue: 17, breakTue: 30 }, result: 'Mon: 7.5h, Tue: 7.5h, Total: 15h' },
  useCases: ['Track employee work hours', 'Calculate weekly payroll', 'Monitor overtime compliance'],
  faqs: [
    { q: 'How do I calculate hours with a lunch break?', a: 'Subtract unpaid break time from total hours. A 30-min lunch reduces 9-5 to 7.5 hours.' },
    { q: 'What counts as overtime?', a: 'In the US, overtime is typically hours worked beyond 40 in a work week.' },
    { q: 'How do I handle split shifts or irregular work schedules?', a: 'For split shifts, calculate each work segment separately and add the hours together. The time card calculator works best for standard continuous shifts. For irregular schedules, consider using the work hours calculator instead.' },
    { q: 'What is the difference between exempt and non-exempt employees for overtime?', a: 'Non-exempt employees must receive overtime pay (1.5x regular rate) for hours over 40 per week under FLSA. Exempt employees (typically salaried professionals) are not entitled to overtime pay.' },
  ],
  relatedCalculators: ['timesheet-calculator', 'work-hours-calculator', 'overtime-calculator'],
} satisfies CalculatorConfig
