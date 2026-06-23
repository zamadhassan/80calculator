import type { CalculatorConfig } from '@/types/calculator'
import { ovulationPrediction } from '@/lib/calculations/health'

export default {
  slug: 'ovulation-calculator',
  title: 'Ovulation Calculator - Estimate Fertile Window and Ovulation Date',
  metaDescription: 'Free ovulation calculator. Estimate your ovulation date, fertile window, and next period based on your cycle.',
  h1: 'Ovulation Calculator',
  category: 'Health, Fitness & Cycle',
  intro: 'Estimate your ovulation date, fertile window, and next period date.',
  inputs: [
    { id: 'lastPeriodDay', label: 'First Day of Last Period (day)', type: 'number', placeholder: '1', min: 1, max: 31, step: 1 },
    { id: 'lastPeriodMonth', label: 'Month', type: 'number', placeholder: '1', min: 1, max: 12, step: 1 },
    { id: 'lastPeriodYear', label: 'Year', type: 'number', placeholder: '2026', defaultValue: 2026, min: 2020, max: 2030, step: 1 },
    { id: 'cycleLength', label: 'Average Cycle Length (days)', type: 'number', placeholder: '28', defaultValue: 28, min: 20, max: 45, step: 1 },
    { id: 'lutealPhase', label: 'Luteal Phase Length (days)', type: 'number', placeholder: '14', defaultValue: 14, min: 10, max: 16, step: 1 },
  ],
  calculate: (vals) => {
    const dateStr = `${vals.lastPeriodYear}-${String(vals.lastPeriodMonth).padStart(2, '0')}-${String(vals.lastPeriodDay).padStart(2, '0')}`
    const r = ovulationPrediction(dateStr, vals.cycleLength, vals.lutealPhase)
    return {
      ovulationDate: r.ovulation.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      fertileWindowStart: r.fertileStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      fertileWindowEnd: r.fertileEnd.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      nextPeriod: r.nextPeriod.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    }
  },
  formula: 'Ovulation = Cycle Length - Luteal Phase (days from last period start). Fertile window: 5 days before to 1 day after ovulation.',
  example: { inputs: { lastPeriodDay: 1, lastPeriodMonth: 1, lastPeriodYear: 2026, cycleLength: 28, lutealPhase: 14 }, result: 'Ovulation: Jan 15, Fertile: Jan 10-16, Next: Jan 29' },
  useCases: ['Identify fertile window for family planning', 'Understand menstrual cycle timing', 'Track ovulation patterns'],
  faqs: [
    { q: 'How accurate is ovulation prediction?', a: 'Ovulation calculators provide estimates. Actual timing varies due to cycle irregularity and health factors.' },
    { q: 'What is the luteal phase?', a: 'The luteal phase is the time between ovulation and the next period, typically 12-16 days.' },
  ],
  relatedCalculators: ['period-calculator', 'bmi-calculator'],
  disclaimerType: 'period',
} satisfies CalculatorConfig
