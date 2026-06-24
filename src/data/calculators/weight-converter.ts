import type { CalculatorConfig } from '@/types/calculator'

const units: Record<number, { label: string; toKg: number }> = {
  0: { label: 'Kilograms (kg)', toKg: 1 },
  1: { label: 'Grams (g)', toKg: 0.001 },
  2: { label: 'Milligrams (mg)', toKg: 0.000001 },
  3: { label: 'Metric Tons (t)', toKg: 1000 },
  4: { label: 'Pounds (lb)', toKg: 0.453592 },
  5: { label: 'Ounces (oz)', toKg: 0.0283495 },
  6: { label: 'Stones (st)', toKg: 6.35029 },
  7: { label: 'US Tons (short ton)', toKg: 907.185 },
}

export default {
  slug: 'weight-converter',
  title: 'Weight Converter - Convert kg, lbs, ounces, tons',
  metaDescription: 'Free weight converter. Convert between kilograms, pounds, ounces, grams, tons, and stones instantly.',
  h1: 'Weight Converter',
  category: 'Math & Conversion Calculators',
  intro: 'Convert between 8 different weight units instantly including metric and imperial systems.',
  inputs: [
    { id: 'value', label: 'Value', type: 'number', placeholder: '70', min: 0, step: 0.01 },
    { id: 'fromUnit', label: 'From Unit', type: 'select', defaultValue: 0, options: [
      { value: '0', label: 'Kilograms (kg)' }, { value: '1', label: 'Grams (g)' }, { value: '2', label: 'Milligrams (mg)' },
      { value: '3', label: 'Metric Tons (t)' }, { value: '4', label: 'Pounds (lb)' }, { value: '5', label: 'Ounces (oz)' },
      { value: '6', label: 'Stones (st)' }, { value: '7', label: 'US Tons (short ton)' },
    ] },
    { id: 'toUnit', label: 'To Unit', type: 'select', defaultValue: 4, options: [
      { value: '0', label: 'Kilograms (kg)' }, { value: '1', label: 'Grams (g)' }, { value: '2', label: 'Milligrams (mg)' },
      { value: '3', label: 'Metric Tons (t)' }, { value: '4', label: 'Pounds (lb)' }, { value: '5', label: 'Ounces (oz)' },
      { value: '6', label: 'Stones (st)' }, { value: '7', label: 'US Tons (short ton)' },
    ] },
  ],
  calculate: (vals) => {
    const kg = vals.value * units[vals.fromUnit].toKg
    const converted = kg / units[vals.toUnit].toKg
    return { fromLabel: units[vals.fromUnit].label, toLabel: units[vals.toUnit].label, result: Math.round(converted * 10000) / 10000 }
  },
  formula: 'Convert to kilograms (base unit) first, then to target unit. 1 kg = 2.20462 lb = 35.274 oz.',
  example: { inputs: { value: 70, fromUnit: 0, toUnit: 4 }, result: '70 Kilograms = 154.323 Pounds' },
  useCases: ['Convert body weight between metric and imperial', 'Measure ingredients for cooking and baking', 'Calculate shipping weight for packages', 'Compare product weights internationally'],
  faqs: [
    { q: 'How do I convert pounds to kilograms?', a: 'Divide the number of pounds by 2.20462. For example, 150 lb ÷ 2.20462 = 68.04 kg. Our calculator handles this instantly.' },
    { q: 'What is the difference between a metric ton and a US ton?', a: 'A metric ton (tonne) is 1,000 kg (2,204.62 lb). A US short ton is 907.185 kg (2,000 lb). A UK long ton is 1,016 kg (2,240 lb).' },
    { q: 'How many grams are in an ounce?', a: 'One ounce equals 28.3495 grams. There are 16 ounces in a pound and approximately 453.6 grams in a pound.' },
    { q: 'What is a stone used for?', a: 'The stone (6.35 kg) is primarily used in the UK and Ireland for measuring body weight. A person weighing 70 kg is approximately 11 stone.' },
    { q: 'Can I convert between any two weight units?', a: 'Yes, select any combination from the 8 supported units. The converter always converts through kilograms as the base unit for accuracy.' },
  ],
  relatedCalculators: ['length-converter', 'temperature-converter', 'bmi-calculator', 'ideal-weight-calculator'],
} satisfies CalculatorConfig
