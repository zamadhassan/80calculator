import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'percentage-calculator',
  title: 'Percentage Calculator - Find Percentages Instantly',
  metaDescription: 'Free percentage calculator. Calculate percentages, percentage change, increase, and decrease easily.',
  h1: 'Percentage Calculator',
  category: 'Math & Conversion Calculators',
  intro: 'Calculate percentages, percentage change, percentage increase, and percentage decrease instantly.',
  inputs: [
    { id: 'mode', label: 'Calculation Type', type: 'select', defaultValue: 0, options: [
      { value: '0', label: 'What is X% of Y?' },
      { value: '1', label: 'X is what % of Y?' },
      { value: '2', label: 'Percentage change from X to Y' },
    ]},
    { id: 'valueX', label: 'Value X', type: 'number', placeholder: '20', min: -999999, max: 999999, step: 0.01 },
    { id: 'valueY', label: 'Value Y', type: 'number', placeholder: '200', min: -999999, max: 999999, step: 0.01 },
  ],
  calculate: (vals) => {
    const mode = vals.mode
    let result = 0
    let label = ''
    if (mode === 0) {
      result = (vals.valueX / 100) * vals.valueY
      label = `${vals.valueX}% of ${vals.valueY}`
    } else if (mode === 1) {
      result = (vals.valueX / vals.valueY) * 100
      label = `${vals.valueX} as % of ${vals.valueY}`
    } else if (mode === 2) {
      result = ((vals.valueY - vals.valueX) / vals.valueX) * 100
      label = `Change from ${vals.valueX} to ${vals.valueY}`
    }
    return { result: Math.round(result * 100) / 100, label, mode: ['Percentage Of', 'Percentage Of', 'Percentage Change'][mode] }
  },
  formula: 'Percentage = (Part / Whole) × 100. Change = ((New - Old) / Old) × 100.',
  example: { inputs: { mode: 0, valueX: 20, valueY: 200 }, result: 'Result: 40. Label: 20% of 200' },
  useCases: ['Calculate discounts and sales tax', 'Find tip amounts on bills', 'Analyze financial percentage changes', 'Compute exam scores and grades'],
  faqs: [
    { q: 'How do I calculate percentage increase?', a: 'Use mode 2 (Percentage Change). Enter the original value as X and the new value as Y. A positive result means an increase, negative means a decrease.' },
    { q: 'What does X% of Y mean?', a: 'It means multiplying Y by X/100. For example, 15% of 200 = (15/100) × 200 = 30. This is the most common percentage calculation.' },
    { q: 'How do I find what percentage one number is of another?', a: 'Use mode 1. Enter the part as X and the whole as Y. For example, to find what percent 30 is of 150: 30/150 × 100 = 20%.' },
    { q: 'Can I calculate percentage change for negative numbers?', a: 'Percentage change with negative numbers can produce unusual results. For example, going from -10 to -20 is a 100% decrease. Use cautiously with negative values.' },
    { q: 'What is the difference between percentage point and percent?', a: 'A percentage point is the arithmetic difference between two percentages. "Percent" refers to a fraction of 100. For example, going from 10% to 15% is a 5 percentage point increase but a 50% increase.' },
  ],
  relatedCalculators: ['discount-calculator', 'margin-calculator', 'markup-calculator', 'sales-tax-calculator'],
} satisfies CalculatorConfig
