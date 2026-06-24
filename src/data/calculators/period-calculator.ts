import type { CalculatorConfig } from '@/types/calculator'
import { periodPrediction } from '@/lib/calculations/health'

export default {
  slug: 'period-calculator',
  title: 'Period Calculator - Predict Your Next Period Date',
  metaDescription: 'Free period calculator. Predict next period start and end dates, and estimated ovulation based on your cycle.',
  h1: 'Period Calculator',
  category: 'Health, Fitness & Cycle',
  intro: 'Predict your next period dates and ovulation window based on your cycle history.',
  inputs: [
    { id: 'lastPeriodDay', label: 'First Day of Last Period (day)', type: 'number', placeholder: '1', min: 1, max: 31, step: 1 },
    { id: 'lastPeriodMonth', label: 'Month', type: 'number', placeholder: '1', min: 1, max: 12, step: 1 },
    { id: 'lastPeriodYear', label: 'Year', type: 'number', placeholder: '2026', defaultValue: 2026, min: 2020, max: 2030, step: 1 },
    { id: 'cycleLength', label: 'Average Cycle Length (days)', type: 'number', placeholder: '28', defaultValue: 28, min: 20, max: 45, step: 1 },
    { id: 'periodLength', label: 'Period Length (days)', type: 'number', placeholder: '5', defaultValue: 5, min: 1, max: 10, step: 1 },
  ],
  calculate: (vals) => {
    const dateStr = `${vals.lastPeriodYear}-${String(vals.lastPeriodMonth).padStart(2, '0')}-${String(vals.lastPeriodDay).padStart(2, '0')}`
    const r = periodPrediction(dateStr, vals.cycleLength, vals.periodLength)
    return {
      nextPeriodStart: r.nextStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      nextPeriodEnd: r.nextEnd.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      estimatedOvulation: r.ovulation.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    }
  },
  formula: 'Next Period = Last Period Start + Cycle Length. Ovulation ≈ Next Period - 14 days.',
  example: { inputs: { lastPeriodDay: 1, lastPeriodMonth: 1, lastPeriodYear: 2026, cycleLength: 28, periodLength: 5 }, result: 'Next: Jan 29 - Feb 2, Ovulation: Jan 15' },
  useCases: ['Track menstrual cycle regularity', 'Plan for upcoming periods', 'Understand cycle patterns'],
  faqs: [
    { q: 'How accurate is period prediction?', a: 'Accuracy depends on cycle regularity. Irregular cycles make prediction less reliable.' },
    { q: 'What is a normal cycle length?', a: 'Cycle lengths of 21-35 days are considered normal. 28 days is the average.' },
    { q: 'What should I do if my period prediction is consistently wrong each month?', a: 'Track your cycle for 3-6 months to find your average cycle length. Irregular cycles over 35 or under 21 days may warrant a consultation with a healthcare provider.' },
    { q: 'How do hormonal contraceptives affect period prediction accuracy and cycle tracking?', a: 'Hormonal contraceptives like birth control pills create a controlled cycle, making period prediction very accurate since the timing is regulated by the medication rather than natural cycles.' },
  ],
  relatedCalculators: ['ovulation-calculator', 'bmi-calculator'],
  disclaimerType: 'period',
} satisfies CalculatorConfig
