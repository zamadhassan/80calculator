import type { CalculatorConfig } from '@/types/calculator'
import { bmrMifflinStJeor, tdee } from '@/lib/calculations/health'

export default {
  slug: 'bmr-calculator',
  title: 'BMR Calculator - Calculate Basal Metabolic Rate',
  metaDescription: 'Free BMR calculator. Calculate your basal metabolic rate using the Mifflin-St Jeor formula.',
  h1: 'BMR Calculator',
  category: 'Health, Fitness & Cycle',
  intro: 'Calculate your basal metabolic rate — the calories your body needs at complete rest.',
  inputs: [
    { id: 'age', label: 'Age (years)', type: 'number', placeholder: '30', min: 10, max: 100, step: 1 },
    { id: 'gender', label: 'Gender', type: 'select', defaultValue: 0, options: [
      { value: '0', label: 'Male' }, { value: '1', label: 'Female' },
    ] },
    { id: 'weight', label: 'Weight (kg)', type: 'number', placeholder: '75', min: 0, step: 0.1 },
    { id: 'height', label: 'Height (cm)', type: 'number', placeholder: '175', min: 0, step: 0.1 },
  ],
  calculate: (vals) => {
    const bmr = bmrMifflinStJeor(vals.weight, vals.height, vals.age, Number(vals.gender) === 0 ? 'male' : 'female')
    return { bmr, maintenanceLow: Math.round(bmr * 1.2), maintenanceHigh: Math.round(bmr * 1.9) }
  },
  formula: 'Mifflin-St Jeor: Male: 10W + 6.25H - 5A + 5. Female: 10W + 6.25H - 5A - 161.',
  example: { inputs: { age: 30, gender: 0, weight: 75, height: 175 }, result: 'BMR: 1,687 cal/day, Maintenance range: 2,024-3,205' },
  useCases: ['Determine baseline calorie needs', 'Set weight loss/gain calorie targets', 'Understand metabolism'],
  faqs: [
    { q: 'What is BMR?', a: 'Basal Metabolic Rate is the calories your body burns at complete rest for basic functions like breathing and circulation.' },
    { q: 'How accurate is the Mifflin-St Jeor formula?', a: 'It is considered the most accurate BMR formula for the general population, within 10% of measured values.' },
  ],
  relatedCalculators: ['bmi-calculator', 'calorie-calculator', 'maintenance-calorie-calculator'],
  disclaimerType: 'health',
} satisfies CalculatorConfig
