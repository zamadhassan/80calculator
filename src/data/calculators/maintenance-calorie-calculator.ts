import type { CalculatorConfig } from '@/types/calculator'
import { bmrMifflinStJeor, tdee } from '@/lib/calculations/health'

const activityKeys = ['sedentary', 'light', 'moderate', 'active', 'extra']

export default {
  slug: 'maintenance-calorie-calculator',
  title: 'Maintenance Calorie Calculator - Calories to Maintain Weight',
  metaDescription: 'Free maintenance calorie calculator. Calculate calories needed to maintain your current weight.',
  h1: 'Maintenance Calorie Calculator',
  category: 'Health, Fitness & Cycle',
  intro: 'Calculate how many calories you need daily to maintain your current weight.',
  inputs: [
    { id: 'age', label: 'Age', type: 'number', placeholder: '30', min: 10, max: 100, step: 1 },
    { id: 'gender', label: 'Gender', type: 'select', defaultValue: 0, options: [
      { value: '0', label: 'Male' }, { value: '1', label: 'Female' },
    ] },
    { id: 'weight', label: 'Weight (kg)', type: 'number', placeholder: '75', min: 0, step: 0.1 },
    { id: 'height', label: 'Height (cm)', type: 'number', placeholder: '175', min: 0, step: 0.1 },
    { id: 'activity', label: 'Activity Level', type: 'select', defaultValue: 2, options: [
      { value: '0', label: 'Sedentary' }, { value: '1', label: 'Light' },
      { value: '2', label: 'Moderate' }, { value: '3', label: 'Active' }, { value: '4', label: 'Extra Active' },
    ] },
  ],
  calculate: (vals) => {
    const bmr = bmrMifflinStJeor(vals.weight, vals.height, vals.age, Number(vals.gender) === 0 ? 'male' : 'female')
    const maintenance = tdee(bmr, activityKeys[vals.activity])
    return { bmr, maintenanceCalories: Math.round(maintenance), activityLevel: vals.activity }
  },
  formula: 'TDEE = BMR × Activity Multiplier (1.2 sedentary to 1.9 extra active).',
  example: { inputs: { age: 30, gender: 0, weight: 75, height: 175, activity: 2 }, result: 'BMR: 1,687, Maintenance: 2,615 cal/day' },
  useCases: ['Understand weight maintenance needs', 'Set baseline for diet planning', 'Track metabolic changes'],
  faqs: [
    { q: 'Do maintenance calories change over time?', a: 'Yes, as you lose or gain weight, your maintenance calories decrease or increase accordingly.' },
    { q: 'How accurate is TDEE calculation?', a: 'TDEE formulas provide estimates within 10-15%. Actual values vary by individual metabolism.' },
  ],
  relatedCalculators: ['bmr-calculator', 'calorie-calculator', 'calorie-deficit-calculator'],
  disclaimerType: 'health',
} satisfies CalculatorConfig
