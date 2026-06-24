import type { CalculatorConfig } from '@/types/calculator'
import { bodyFatNavy } from '@/lib/calculations/health'

export default {
  slug: 'body-fat-calculator',
  title: 'Body Fat Calculator - Estimate Body Fat Percentage',
  metaDescription: 'Free body fat calculator. Estimate body fat percentage using the US Navy method.',
  h1: 'Body Fat Calculator',
  category: 'Health, Fitness & Cycle',
  intro: 'Estimate your body fat percentage using the US Navy circumference method.',
  inputs: [
    { id: 'gender', label: 'Gender', type: 'select', defaultValue: 0, options: [
      { value: '0', label: 'Male' }, { value: '1', label: 'Female' },
    ] },
    { id: 'height', label: 'Height (inches)', type: 'number', placeholder: '70', min: 0, step: 0.5 },
    { id: 'neck', label: 'Neck Circumference (inches)', type: 'number', placeholder: '15.5', min: 0, step: 0.25 },
    { id: 'waist', label: 'Waist Circumference (inches)', type: 'number', placeholder: '34', min: 0, step: 0.25 },
    { id: 'hip', label: 'Hip Circumference (inches) - for female', type: 'number', placeholder: '38', min: 0, step: 0.25 },
  ],
  calculate: (vals) => {
    const gender = Number(vals.gender) === 0 ? 'male' : 'female'
    const bf = bodyFatNavy(0, vals.height, vals.neck, vals.waist, gender, vals.hip)
    let category = ''
    if (gender === 'male') {
      if (bf < 6) category = 'Essential fat'
      else if (bf < 14) category = 'Athletic'
      else if (bf < 18) category = 'Fitness'
      else if (bf < 25) category = 'Average'
      else category = 'Obese'
    } else {
      if (bf < 14) category = 'Essential fat'
      else if (bf < 21) category = 'Athletic'
      else if (bf < 25) category = 'Fitness'
      else if (bf < 32) category = 'Average'
      else category = 'Obese'
    }
    return { bodyFatPercent: bf, category }
  },
  formula: 'US Navy Method. Male: 86.01×log(waist-neck) - 70.041×log(height) + 36.76. Female includes hip measurement.',
  example: { inputs: { gender: 0, height: 70, neck: 15.5, waist: 34, hip: 38 }, result: 'Body Fat: 21.5%, Category: Fitness' },
  useCases: ['Track body composition changes', 'Monitor fitness progress', 'Assess health risk factors'],
  faqs: [
    { q: 'How accurate is the US Navy method?', a: 'Within 3-5% of DEXA scans for most people. Accuracy varies by body type and hydration.' },
    { q: 'What is a healthy body fat percentage?', a: 'Men: 10-20%. Women: 18-28%. Athletes are typically lower.' },
  ],
  relatedCalculators: ['bmi-calculator', 'ideal-weight-calculator', 'calorie-calculator'],
  disclaimerType: 'health',
} satisfies CalculatorConfig
