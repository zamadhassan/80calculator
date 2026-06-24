import type { CalculatorConfig } from '@/types/calculator'

const units: Record<number, { label: string; toMps: number }> = {
  0: { label: 'Meters per second (m/s)', toMps: 1 },
  1: { label: 'Kilometers per hour (km/h)', toMps: 0.277778 },
  2: { label: 'Miles per hour (mph)', toMps: 0.44704 },
  3: { label: 'Knots (kn)', toMps: 0.514444 },
  4: { label: 'Feet per second (ft/s)', toMps: 0.3048 },
  5: { label: 'Mach (at sea level)', toMps: 340.29 },
  6: { label: 'Speed of light (c)', toMps: 299792458 },
}

export default {
  slug: 'speed-converter',
  title: 'Speed Converter - Convert mph, km/h, knots, mach',
  metaDescription: 'Free speed converter. Convert between mph, km/h, knots, mach, and speed of light instantly.',
  h1: 'Speed Converter',
  category: 'Math & Conversion Calculators',
  intro: 'Convert between 7 different speed units from km/h to the speed of light.',
  inputs: [
    { id: 'value', label: 'Speed Value', type: 'number', placeholder: '100', min: 0, step: 0.01 },
    { id: 'fromUnit', label: 'From Unit', type: 'select', defaultValue: 0, options: [
      { value: '0', label: 'Meters per second (m/s)' }, { value: '1', label: 'Kilometers per hour (km/h)' },
      { value: '2', label: 'Miles per hour (mph)' }, { value: '3', label: 'Knots (kn)' },
      { value: '4', label: 'Feet per second (ft/s)' }, { value: '5', label: 'Mach' },
      { value: '6', label: 'Speed of light' },
    ] },
    { id: 'toUnit', label: 'To Unit', type: 'select', defaultValue: 1, options: [
      { value: '0', label: 'Meters per second (m/s)' }, { value: '1', label: 'Kilometers per hour (km/h)' },
      { value: '2', label: 'Miles per hour (mph)' }, { value: '3', label: 'Knots (kn)' },
      { value: '4', label: 'Feet per second (ft/s)' }, { value: '5', label: 'Mach' },
      { value: '6', label: 'Speed of light' },
    ] },
  ],
  calculate: (vals) => {
    const mps = vals.value * units[vals.fromUnit].toMps
    const converted = mps / units[vals.toUnit].toMps
    return { fromLabel: units[vals.fromUnit].label, toLabel: units[vals.toUnit].label, result: Math.round(converted * 100000) / 100000 }
  },
  formula: 'Convert to m/s (base unit) first, then to target unit. 1 km/h = 0.277778 m/s, 1 mph = 0.44704 m/s.',
  example: { inputs: { value: 100, fromUnit: 1, toUnit: 2 }, result: '100 km/h = 62.13712 mph' },
  useCases: ['Convert car speed limits between mph and km/h', 'Convert wind speeds for weather', 'Calculate aircraft and boat speeds in knots', 'Compare running and athletic speeds'],
  faqs: [
    { q: 'What is the difference between knots and mph?', a: 'A knot is one nautical mile per hour (1.15078 mph). Knots are used in aviation and maritime because they relate directly to geographic coordinates.' },
    { q: 'How fast is Mach 1?', a: 'Mach 1 is the speed of sound, approximately 1,235 km/h (767 mph) at sea level. Mach number varies with altitude and temperature.' },
    { q: 'What is the speed of light in km/h?', a: 'The speed of light is approximately 1,079,252,849 km/h (299,792,458 m/s). Nothing can travel faster than the speed of light in a vacuum.' },
    { q: 'How do I convert mph to km/h in my head?', a: 'Multiply mph by 1.6 for a close estimate. For example, 60 mph × 1.6 = 96 km/h (actual: 96.56 km/h). For precise conversions, use this calculator.' },
    { q: 'What units do different countries use for speed limits?', a: 'Most countries use km/h (Europe, Asia, Australia, Canada). The US, UK (mph on major roads), and a few Caribbean nations use mph. Knots are used for maritime speed limits.' },
  ],
  relatedCalculators: ['length-converter', 'weight-converter', 'temperature-converter', 'gas-mileage-calculator'],
} satisfies CalculatorConfig
