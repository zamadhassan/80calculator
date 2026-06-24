import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'temperature-converter',
  title: 'Temperature Converter - Convert Celsius, Fahrenheit, Kelvin',
  metaDescription: 'Free temperature converter. Convert between Celsius, Fahrenheit, and Kelvin instantly.',
  h1: 'Temperature Converter',
  category: 'Math & Conversion Calculators',
  intro: 'Convert between Celsius, Fahrenheit, and Kelvin temperature scales instantly.',
  inputs: [
    { id: 'value', label: 'Temperature Value', type: 'number', placeholder: '100', step: 0.1 },
    { id: 'fromScale', label: 'From Scale', type: 'select', defaultValue: 0, options: [
      { value: '0', label: 'Celsius (°C)' }, { value: '1', label: 'Fahrenheit (°F)' }, { value: '2', label: 'Kelvin (K)' },
    ] },
  ],
  calculate: (vals) => {
    let celsius = 0
    if (vals.fromScale === 0) celsius = vals.value
    else if (vals.fromScale === 1) celsius = (vals.value - 32) * 5 / 9
    else celsius = vals.value - 273.15
    const fahrenheit = (celsius * 9 / 5) + 32
    const kelvin = celsius + 273.15
    return {
      celsius: Math.round(celsius * 100) / 100,
      fahrenheit: Math.round(fahrenheit * 100) / 100,
      kelvin: Math.round(kelvin * 100) / 100,
    }
  },
  formula: '°F = (°C × 9/5) + 32. K = °C + 273.15. °C = (°F - 32) × 5/9.',
  example: { inputs: { value: 100, fromScale: 0 }, result: 'Celsius: 100°C, Fahrenheit: 212°F, Kelvin: 373.15K' },
  useCases: ['Convert weather temperatures', 'Check oven temperatures for recipes', 'Convert scientific measurements', 'Compare international temperature scales'],
  faqs: [
    { q: 'What is absolute zero?', a: 'Absolute zero (0 K or -273.15°C) is the theoretical lowest possible temperature where all molecular motion stops. It has never been reached experimentally.' },
    { q: 'At what temperature do Celsius and Fahrenheit meet?', a: 'Celsius and Fahrenheit are equal at -40 degrees. -40°C = -40°F. This is the only point where the two scales read the same.' },
    { q: 'Why does the US use Fahrenheit while most countries use Celsius?', a: 'The US continues to use Fahrenheit due to historical precedent and cultural familiarity. Most other countries adopted Celsius as part of metric system adoption.' },
    { q: 'How do I convert Fahrenheit to Celsius without a calculator?', a: 'Subtract 32 from the Fahrenheit value, then divide by 1.8. For a quick estimate: subtract 30 then divide by 2. For example, 100°F: (100-30)/2 = 35°C (actual: 37.8°C).' },
    { q: 'Can Kelvin ever be negative?', a: 'No, Kelvin is an absolute temperature scale starting at absolute zero. Zero Kelvin is the lowest possible temperature, so Kelvin values are always positive.' },
  ],
  relatedCalculators: ['length-converter', 'weight-converter', 'speed-converter', 'percentage-calculator'],
} satisfies CalculatorConfig
