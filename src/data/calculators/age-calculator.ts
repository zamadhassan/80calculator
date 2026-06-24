import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'age-calculator',
  title: 'Age Calculator - Calculate Exact Age in Years, Months, Days',
  metaDescription: 'Free age calculator. Calculate your exact age in years, months, days, hours, minutes, and seconds.',
  h1: 'Age Calculator',
  category: 'Date & Age Calculators',
  intro: 'Calculate your exact age down to the second based on your date of birth.',
  inputs: [
    { id: 'birthDay', label: 'Date of Birth (Day)', type: 'number', placeholder: '15', min: 1, max: 31, step: 1 },
    { id: 'birthMonth', label: 'Month', type: 'number', placeholder: '6', min: 1, max: 12, step: 1 },
    { id: 'birthYear', label: 'Year', type: 'number', placeholder: '1990', min: 1900, max: 2030, step: 1 },
  ],
  calculate: (vals) => {
    const birth = new Date(vals.birthYear, vals.birthMonth - 1, vals.birthDay)
    const now = new Date()
    let years = now.getFullYear() - birth.getFullYear()
    let months = now.getMonth() - birth.getMonth()
    let days = now.getDate() - birth.getDate()
    if (days < 0) { months--; days += new Date(now.getFullYear(), now.getMonth(), 0).getDate() }
    if (months < 0) { years--; months += 12 }
    const diffMs = now.getTime() - birth.getTime()
    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
    return { years, months, days, totalDays, totalHours: Math.floor(diffMs / (1000 * 60 * 60)), totalMinutes: Math.floor(diffMs / (1000 * 60)) }
  },
  formula: 'Age = Current Date - Birth Date. Calculates years, months, days, hours, minutes, and seconds.',
  example: { inputs: { birthDay: 15, birthMonth: 6, birthYear: 1990 }, result: 'Age varies based on current date' },
  useCases: ['Verify age for forms and applications', 'Calculate time since birth for milestones', 'Determine exact age for legal purposes'],
  faqs: [
    { q: 'How accurate is this age calculator?', a: 'It calculates down to the day based on your date of birth and the current date. For precise hour/minute accuracy, the time of birth would also be needed.' },
    { q: 'What is the difference between chronological age and biological age?', a: 'Chronological age is the time since birth. Biological age estimates how old your body seems based on health factors. This calculator provides chronological age only.' },
    { q: 'Can I calculate age for someone born before 1900?', a: 'Yes, but the year input accepts values from 1900 onward. For historical figures, check dedicated historical age resources.' },
  ],
  relatedCalculators: ['date-difference-calculator', 'date-add-calculator', 'weeks-between-dates-calculator'],
} satisfies CalculatorConfig
