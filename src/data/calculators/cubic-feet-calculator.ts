import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'cubic-feet-calculator',
  title: 'Cubic Feet Calculator - Calculate Volume in Cubic Feet',
  metaDescription: 'Free cubic feet calculator. Calculate volume in cubic feet and cubic meters from length, width, and height.',
  h1: 'Cubic Feet Calculator',
  category: 'Construction & Home',
  intro: 'Calculate volume in cubic feet and cubic meters for any space.',
  inputs: [
    { id: 'length', label: 'Length (ft)', type: 'number', placeholder: '10', min: 0, step: 0.1 },
    { id: 'width', label: 'Width (ft)', type: 'number', placeholder: '8', min: 0, step: 0.1 },
    { id: 'height', label: 'Height (ft)', type: 'number', placeholder: '6', min: 0, step: 0.1 },
  ],
  calculate: (vals) => ({
    cubicFeet: vals.length * vals.width * vals.height,
    cubicMeters: vals.length * vals.width * vals.height * 0.028317,
  }),
  formula: 'Cubic Feet = Length × Width × Height. Cubic Meters = ft³ × 0.0283.',
  example: { inputs: { length: 10, width: 8, height: 6 }, result: '480 cu ft, 13.59 cu m' },
  useCases: ['Calculate room volume for HVAC', 'Estimate shipping container capacity', 'Measure storage space'],
  faqs: [
    { q: 'How do I convert cubic feet to cubic meters?', a: 'Multiply cubic feet by 0.028317 to get cubic meters.' },
    { q: 'What is the difference between cubic feet and square feet?', a: 'Square feet measures area (2D). Cubic feet measures volume (3D, includes depth/height).' },
    { q: 'How do I measure irregular-shaped items for cubic feet?', a: 'Measure the longest length, width, and height at the widest points even for irregular items to get a reasonable volume estimate for shipping.' },
    { q: 'How many cubic feet is a standard shipping pallet?', a: 'A standard 48 by 40 by 48 inch pallet occupies about 53 cubic feet, which helps estimate truck space needed for freight shipping.' },
  ],
  relatedCalculators: ['cubic-yard-calculator', 'square-footage-calculator', 'area-calculator'],
} satisfies CalculatorConfig
