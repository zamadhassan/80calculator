import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'square-footage-calculator',
  title: 'Square Footage Calculator - Calculate Area in sq ft',
  metaDescription: 'Free square footage calculator. Calculate area in square feet and square meters for rooms, houses, and spaces.',
  h1: 'Square Footage Calculator',
  category: 'Construction & Home',
  intro: 'Calculate square footage and square meters for any rectangular space.',
  inputs: [
    { id: 'length', label: 'Length (ft)', type: 'number', placeholder: '20', min: 0, step: 0.1 },
    { id: 'width', label: 'Width (ft)', type: 'number', placeholder: '15', min: 0, step: 0.1 },
  ],
  calculate: (vals) => ({ sqft: vals.length * vals.width, sqm: vals.length * vals.width * 0.092903 }),
  formula: 'Square Feet = Length × Width. Square Meters = Square Feet × 0.0929.',
  example: { inputs: { length: 20, width: 15 }, result: 'Area: 300 sq ft, 27.87 sq m' },
  useCases: ['Measure room size for flooring', 'Calculate house square footage', 'Estimate paint or tile needs'],
  faqs: [
    { q: 'How do I calculate square footage of an irregular room?', a: 'Divide the room into rectangles, calculate each, and add them together.' },
    { q: 'What is the difference between sq ft and sq m?', a: '1 sq ft = 0.0929 sq m. Multiply sq ft by 0.0929 to get square meters.' },
  ],
  relatedCalculators: ['area-calculator', 'paint-calculator', 'tile-calculator'],
} satisfies CalculatorConfig
