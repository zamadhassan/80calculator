import type { CalculatorConfig } from '@/types/calculator'
import { bmi } from '@/lib/calculations/health'

export default {
  slug: 'bmi-calculator',
  title: 'BMI Calculator - Calculate Body Mass Index',
  metaDescription: 'Free BMI calculator. Calculate your body mass index and see your weight category. Works with metric and imperial units.',
  h1: 'BMI Calculator',
  category: 'Health, Fitness & Cycle',
  intro: 'Calculate your body mass index and see which weight category you fall into.',
  inputs: [
    { id: 'weight', label: 'Weight', type: 'number', placeholder: '70', min: 0, step: 0.1 },
    { id: 'weightUnit', label: 'Weight Unit', type: 'select', defaultValue: 0, options: [
      { value: '0', label: 'kg' }, { value: '1', label: 'lbs' },
    ] },
    { id: 'height', label: 'Height', type: 'number', placeholder: '175', min: 0, step: 0.1 },
    { id: 'heightUnit', label: 'Height Unit', type: 'select', defaultValue: 0, options: [
      { value: '0', label: 'cm' }, { value: '1', label: 'inches' },
    ] },
  ],
  calculate: (vals) => {
    const weightKg = vals.weightUnit === 0 ? vals.weight : vals.weight * 0.453592
    const heightCm = vals.heightUnit === 0 ? vals.height : vals.height * 2.54
    const r = bmi(weightKg, heightCm, 'metric')
    return { bmi: r.bmi, category: r.category }
  },
  formula: 'BMI = Weight (kg) / Height (m)². Categories: <18.5 Underweight, 18.5-25 Normal, 25-30 Overweight, 30+ Obese.',
  example: { inputs: { weight: 70, weightUnit: 0, height: 175, heightUnit: 0 }, result: 'BMI: 22.86, Category: Normal weight' },
  useCases: ['Track body composition changes', 'Screen for health risks', 'Monitor weight management goals'],
  faqs: [
    { q: 'Is BMI an accurate measure of health?', a: 'BMI is a screening tool, not a diagnostic. Athletes may have high BMI due to muscle mass.' },
    { q: 'What is a healthy BMI range?', a: 'A BMI of 18.5-24.9 is considered healthy for most adults.' },
    { q: 'Can BMI be inaccurate for athletes or elderly people?', a: 'Yes, athletes often show high BMI from muscle rather than fat, and elderly people may have normal BMI despite low muscle and high fat.' },
    { q: 'What should I do if my BMI is in the obese range?', a: 'Consult a healthcare provider for a personalized health assessment and guidance on achieving a healthier weight through diet and exercise.' },
  ],
  relatedCalculators: ['bmr-calculator', 'calorie-calculator', 'body-fat-calculator'],
  disclaimerType: 'health',
} satisfies CalculatorConfig
