import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'ideal-weight-calculator',
  title: 'Ideal Weight Calculator - Estimate Healthy Weight Range',
  metaDescription: 'Free ideal weight calculator. Estimate your ideal body weight range based on height and gender.',
  h1: 'Ideal Weight Calculator',
  category: 'Health, Fitness & Cycle',
  intro: 'Estimate your ideal body weight range based on height using multiple formulas.',
  inputs: [
    { id: 'height', label: 'Height (inches)', type: 'number', placeholder: '66', min: 0, step: 0.5 },
    { id: 'gender', label: 'Gender', type: 'select', defaultValue: 0, options: [
      { value: '0', label: 'Male' }, { value: '1', label: 'Female' },
    ] },
  ],
  calculate: (vals) => {
    const isMale = Number(vals.gender) === 0
    const h = vals.height
    const devlin = isMale ? 50 + 2.3 * (h - 60) : 45.5 + 2.3 * (h - 60)
    const miller = isMale ? 56.2 + 1.41 * (h - 60) : 53.1 + 1.36 * (h - 60)
    const hamwi = isMale ? 48 + 2.7 * (h - 60) : 45.5 + 2.2 * (h - 60)
    const healthyMin = 18.5 * (h * 0.0254) ** 2
    const healthyMax = 24.9 * (h * 0.0254) ** 2
    return {
      devlinIdeal: devlin, millerIdeal: miller, hamwiIdeal: hamwi,
      healthyBmiRangeMin: Math.round(healthyMin * 2.20462), healthyBmiRangeMax: Math.round(healthyMax * 2.20462),
    }
  },
  formula: 'Common formulas: Devine, Miller, Hamwi. Healthy BMI range: 18.5-24.9 converted to lbs.',
  example: { inputs: { height: 66, gender: 0 }, result: 'Devine: 152 lbs, Miller: 155 lbs, Hamwi: 148 lbs, BMI range: 114-153 lbs' },
  useCases: ['Set weight goals', 'Understand healthy weight ranges', 'Track weight management progress'],
  faqs: [
    { q: 'What is the most accurate ideal weight formula?', a: 'No single formula is perfect. The healthy BMI range (18.5-24.9) is widely accepted.' },
    { q: 'Does ideal weight consider muscle mass?', a: 'No, these formulas do not account for muscle mass. Athletes may be healthy above the range.' },
  ],
  relatedCalculators: ['bmi-calculator', 'body-fat-calculator', 'calorie-calculator'],
  disclaimerType: 'health',
} satisfies CalculatorConfig
