import type { CalculatorConfig } from '@/types/calculator'

const units: Record<number, { label: string; toMeters: number }> = {
  0: { label: 'Meters (m)', toMeters: 1 },
  1: { label: 'Kilometers (km)', toMeters: 1000 },
  2: { label: 'Centimeters (cm)', toMeters: 0.01 },
  3: { label: 'Millimeters (mm)', toMeters: 0.001 },
  4: { label: 'Miles (mi)', toMeters: 1609.344 },
  5: { label: 'Yards (yd)', toMeters: 0.9144 },
  6: { label: 'Feet (ft)', toMeters: 0.3048 },
  7: { label: 'Inches (in)', toMeters: 0.0254 },
  8: { label: 'Nautical Miles (nmi)', toMeters: 1852 },
}

export default {
  slug: 'length-converter',
  title: 'Length Converter - Convert Meters, Feet, Inches, Miles',
  metaDescription: 'Free length converter. Convert between meters, kilometers, feet, inches, miles, yards, and more.',
  h1: 'Length Converter',
  category: 'Math & Conversion Calculators',
  intro: 'Convert between 9 different length units instantly including metric and imperial systems.',
  inputs: [
    { id: 'value', label: 'Value', type: 'number', placeholder: '100', min: 0, step: 0.01 },
    { id: 'fromUnit', label: 'From Unit', type: 'select', defaultValue: 0, options: [
      { value: '0', label: 'Meters (m)' }, { value: '1', label: 'Kilometers (km)' }, { value: '2', label: 'Centimeters (cm)' },
      { value: '3', label: 'Millimeters (mm)' }, { value: '4', label: 'Miles (mi)' }, { value: '5', label: 'Yards (yd)' },
      { value: '6', label: 'Feet (ft)' }, { value: '7', label: 'Inches (in)' }, { value: '8', label: 'Nautical Miles (nmi)' },
    ] },
    { id: 'toUnit', label: 'To Unit', type: 'select', defaultValue: 4, options: [
      { value: '0', label: 'Meters (m)' }, { value: '1', label: 'Kilometers (km)' }, { value: '2', label: 'Centimeters (cm)' },
      { value: '3', label: 'Millimeters (mm)' }, { value: '4', label: 'Miles (mi)' }, { value: '5', label: 'Yards (yd)' },
      { value: '6', label: 'Feet (ft)' }, { value: '7', label: 'Inches (in)' }, { value: '8', label: 'Nautical Miles (nmi)' },
    ] },
  ],
  calculate: (vals) => {
    const meters = vals.value * units[vals.fromUnit].toMeters
    const converted = meters / units[vals.toUnit].toMeters
    const results: Record<string, number> = {}
    Object.entries(units).forEach(([key, u]) => {
      if (Number(key) !== vals.fromUnit && Number(key) !== vals.toUnit) return
      const val = meters / u.toMeters
      results[`${u.label}`] = Math.round(val * 10000) / 10000
    })
    return { fromLabel: units[vals.fromUnit].label, toLabel: units[vals.toUnit].label, result: Math.round(converted * 1000000) / 1000000, ...results }
  },
  formula: 'Convert to base unit (meters) first, then to target unit. 1 meter = 3.28084 feet = 39.3701 inches.',
  example: { inputs: { value: 100, fromUnit: 0, toUnit: 4 }, result: '100 Meters = 0.06214 Miles' },
  useCases: ['Convert measurements for travel', 'Compare metric and imperial units', 'Calculate dimensions for DIY projects', 'Convert sports distances'],
  faqs: [
    { q: 'How do I convert feet to meters?', a: 'Multiply the number of feet by 0.3048. For example, 10 feet × 0.3048 = 3.048 meters. Our calculator does this automatically.' },
    { q: 'What is the difference between a nautical mile and a regular mile?', a: 'A nautical mile (1,852 meters) is based on the circumference of the Earth and is used in aviation and maritime. A statute mile (1,609.344 meters) is used on land.' },
    { q: 'How many centimeters are in an inch?', a: 'One inch equals exactly 2.54 centimeters. This is a standard conversion factor defined by international agreement.' },
    { q: 'What is the largest unit in this converter?', a: 'The largest unit is the nautical mile (1,852 meters), followed by the mile (1,609 meters), then kilometer (1,000 meters).' },
    { q: 'Can I convert between all supported units?', a: 'Yes, select any combination of the 9 supported units. The converter always converts through meters as the base unit for accuracy.' },
  ],
  relatedCalculators: ['weight-converter', 'temperature-converter', 'speed-converter', 'area-calculator'],
} satisfies CalculatorConfig
