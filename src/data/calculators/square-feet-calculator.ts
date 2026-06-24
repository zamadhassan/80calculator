import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'square-feet-calculator',
  title: 'Square Feet Calculator - Calculate Area in Square Feet',
  metaDescription: 'Free square feet calculator. Calculate area in square feet and square meters for any space.',
  h1: 'Square Feet Calculator',
  category: 'Construction & Home',
  intro: 'Calculate the area of any space in square feet and square meters.',
  inputs: [
    { id: 'length', label: 'Length (ft)', type: 'number', placeholder: '25', min: 0, step: 0.1 },
    { id: 'width', label: 'Width (ft)', type: 'number', placeholder: '15', min: 0, step: 0.1 },
  ],
  calculate: (vals) => ({
    squareFeet: vals.length * vals.width,
    squareMeters: vals.length * vals.width * 0.092903,
  }),
  formula: 'Square Feet = Length × Width. Square Meters = sq ft × 0.0929.',
  example: { inputs: { length: 25, width: 15 }, result: '375 sq ft, 34.84 sq m' },
  useCases: ['Measure room sizes', 'Calculate flooring needs', 'Estimate property area'],
  faqs: [
    { q: 'How do I measure irregular shaped rooms?', a: 'Break the room into rectangles, calculate each, and add them together.' },
    { q: 'What is the difference between sq ft and sq m?', a: '1 square meter = 10.764 square feet. Multiply sq m by 10.764 to get sq ft.' },
  ],
  relatedCalculators: ['square-footage-calculator', 'area-calculator', 'acreage-calculator'],
} satisfies CalculatorConfig
