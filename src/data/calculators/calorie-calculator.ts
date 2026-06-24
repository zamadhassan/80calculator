import type { CalculatorConfig } from '@/types/calculator'
import { bmrMifflinStJeor, tdee } from '@/lib/calculations/health'

const activityKeys = ['sedentary', 'light', 'moderate', 'active', 'extra']
const goalValues = [0, -500, -1000, 500]

export default {
  slug: 'calorie-calculator',
  title: 'Calorie Calculator - Calculate Daily Calorie Needs',
  metaDescription: 'Free calorie calculator. Calculate daily calorie needs based on age, gender, height, weight, and activity level.',
  h1: 'Calorie Calculator',
  category: 'Health, Fitness & Cycle',
  intro: 'Calculate your daily calorie needs for weight maintenance, loss, or gain.',
  inputs: [
    { id: 'age', label: 'Age', type: 'number', placeholder: '30', min: 10, max: 100, step: 1 },
    { id: 'gender', label: 'Gender', type: 'select', defaultValue: 0, options: [
      { value: '0', label: 'Male' }, { value: '1', label: 'Female' },
    ] },
    { id: 'weight', label: 'Weight (kg)', type: 'number', placeholder: '75', min: 0, step: 0.1 },
    { id: 'height', label: 'Height (cm)', type: 'number', placeholder: '175', min: 0, step: 0.1 },
    { id: 'activity', label: 'Activity Level', type: 'select', defaultValue: 2, options: [
      { value: '0', label: 'Sedentary (desk job)' }, { value: '1', label: 'Light (1-3 days/week)' },
      { value: '2', label: 'Moderate (3-5 days/week)' }, { value: '3', label: 'Active (6-7 days/week)' },
      { value: '4', label: 'Extra Active (athlete)' },
    ] },
    { id: 'goal', label: 'Goal', type: 'select', defaultValue: 0, options: [
      { value: '0', label: 'Maintain weight' }, { value: '1', label: 'Lose 0.5 lb/week' },
      { value: '2', label: 'Lose 1 lb/week' }, { value: '3', label: 'Gain 0.5 lb/week' },
    ] },
  ],
  calculate: (vals) => {
    const bmr = bmrMifflinStJeor(vals.weight, vals.height, vals.age, Number(vals.gender) === 0 ? 'male' : 'female')
    const maintenance = tdee(bmr, activityKeys[vals.activity])
    const goal = goalValues[vals.goal]
    return { bmr, maintenanceCalories: Math.round(maintenance), targetCalories: Math.round(maintenance + goal) }
  },
  formula: 'TDEE = BMR × Activity Multiplier. Target = TDEE + Goal Adjustment. ~500 cal deficit = 1 lb/week loss.',
  example: { inputs: { age: 30, gender: 0, weight: 75, height: 175, activity: 2, goal: 0 }, result: 'TDEE: 2,615 cal, Maintenance: 2,615 cal' },
  useCases: ['Set daily calorie targets', 'Plan weight loss or gain', 'Understand activity impact on calories'],
  faqs: [
    { q: 'How many calories do I need daily?', a: 'Average adult women: 1,600-2,400. Men: 2,000-3,000 depending on activity.' },
    { q: 'How many calories to lose 1 lb per week?', a: 'A deficit of ~500 calories per day leads to ~1 lb weight loss per week.' },
    { q: 'Should I eat back calories burned through exercise?', a: 'For weight loss, it is best not to eat back exercise calories since fitness trackers and estimates often overestimate actual calories burned during activity.' },
    { q: 'How accurate are calorie calculators for weight maintenance?', a: 'They provide estimates within 10 to 15 percent of actual needs. Track your weight weekly and adjust intake up or down based on real results.' },
  ],
  relatedCalculators: ['bmr-calculator', 'calorie-deficit-calculator', 'maintenance-calorie-calculator'],
  disclaimerType: 'health',
} satisfies CalculatorConfig
