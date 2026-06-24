import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'calorie-deficit-calculator',
  title: 'Calorie Deficit Calculator - Plan Weight Loss',
  metaDescription: 'Free calorie deficit calculator. Calculate daily calories needed for weight loss based on maintenance and deficit target.',
  h1: 'Calorie Deficit Calculator',
  category: 'Health, Fitness & Cycle',
  intro: 'Calculate your target daily calories and weekly weight loss based on your calorie deficit.',
  inputs: [
    { id: 'maintenance', label: 'Maintenance Calories', type: 'number', placeholder: '2500', min: 0, step: 10 },
    { id: 'deficit', label: 'Daily Deficit (calories)', type: 'number', placeholder: '500', min: 0, step: 50 },
  ],
  calculate: (vals) => {
    const target = vals.maintenance - vals.deficit
    const weeklyLoss = (vals.deficit * 7) / 3500
    return { targetCalories: target, deficit: vals.deficit, estimatedWeeklyLoss: weeklyLoss }
  },
  formula: 'Target = Maintenance - Deficit. 1 lb fat ≈ 3,500 calories. Weekly loss = (Deficit × 7) / 3,500.',
  example: { inputs: { maintenance: 2500, deficit: 500 }, result: 'Target: 2,000 cal, Weekly loss: 1 lb' },
  useCases: ['Set weight loss calorie targets', 'Understand deficit impact', 'Plan sustainable weight loss'],
  faqs: [
    { q: 'What is a safe calorie deficit?', a: 'A deficit of 300-500 calories per day is safe and sustainable for most people.' },
    { q: 'Can I lose weight too fast?', a: 'Losing more than 1-2 lbs per week can lead to muscle loss, nutrient deficiencies, and metabolic slowdown.' },
    { q: 'Can I create a deficit through exercise alone?', a: 'Yes, but combining diet and exercise is more effective and sustainable than relying on exercise alone for creating a calorie deficit.' },
    { q: 'What happens if my deficit is too large for too long?', a: 'Extreme deficits can cause muscle loss, metabolic adaptation, hormonal imbalances, and increased risk of nutrient deficiencies over extended periods.' },
  ],
  relatedCalculators: ['calorie-calculator', 'maintenance-calorie-calculator', 'bmi-calculator'],
  disclaimerType: 'health',
} satisfies CalculatorConfig
