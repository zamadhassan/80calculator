import type { CalculatorConfig } from '@/types/calculator'
import { proteinRange } from '@/lib/calculations/health'

const activityKeys = ['sedentary', 'moderate', 'active']

export default {
  slug: 'protein-calculator',
  title: 'Protein Calculator - Calculate Daily Protein Needs',
  metaDescription: 'Free protein calculator. Calculate daily protein intake needs based on weight and activity level.',
  h1: 'Protein Calculator',
  category: 'Health, Fitness & Cycle',
  intro: 'Calculate your recommended daily protein intake based on weight and activity level.',
  inputs: [
    { id: 'weight', label: 'Weight (kg)', type: 'number', placeholder: '75', min: 0, step: 0.1 },
    { id: 'activity', label: 'Activity Level', type: 'select', defaultValue: 1, options: [
      { value: '0', label: 'Sedentary' }, { value: '1', label: 'Moderate Exercise' }, { value: '2', label: 'Active / Athlete' },
    ] },
  ],
  calculate: (vals) => {
    const r = proteinRange(vals.weight, activityKeys[vals.activity] as 'sedentary' | 'moderate' | 'active')
    return { minGrams: r.min, maxGrams: r.max }
  },
  formula: 'Sedentary: 0.8-1g/kg. Moderate: 1.2-1.6g/kg. Active: 1.6-2.2g/kg of body weight.',
  example: { inputs: { weight: 75, activity: 1 }, result: 'Protein: 90-120g per day' },
  useCases: ['Plan daily protein intake', 'Optimize muscle building', 'Support weight loss diet'],
  faqs: [
    { q: 'How much protein do I need daily?', a: 'Minimum 0.8g/kg per day. Active individuals need 1.2-2.2g/kg depending on exercise intensity.' },
    { q: 'Can I eat too much protein?', a: 'Excess protein (3g+/kg) may stress kidneys in sensitive individuals. Stick to recommended ranges.' },
  ],
  relatedCalculators: ['calorie-calculator', 'bmr-calculator', 'bmi-calculator'],
  disclaimerType: 'health',
} satisfies CalculatorConfig
