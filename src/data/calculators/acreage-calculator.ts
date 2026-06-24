import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'acreage-calculator',
  title: 'Acreage Calculator - Calculate Acres and Hectares',
  metaDescription: 'Free acreage calculator. Convert square feet, square meters, or length/width to acres and hectares.',
  h1: 'Acreage Calculator',
  category: 'Construction & Home',
  intro: 'Calculate acres, hectares, and square feet for any piece of land.',
  inputs: [
    { id: 'length', label: 'Length (ft)', type: 'number', placeholder: '300', min: 0, step: 1 },
    { id: 'width', label: 'Width (ft)', type: 'number', placeholder: '200', min: 0, step: 1 },
  ],
  calculate: (vals) => {
    const sqft = vals.length * vals.width
    return { squareFeet: sqft, acres: sqft / 43560, hectares: sqft / 107639 }
  },
  formula: 'Square Feet = Length × Width. Acres = sq ft / 43,560. Hectares = sq ft / 107,639.',
  example: { inputs: { length: 300, width: 200 }, result: '60,000 sq ft, 1.38 acres, 0.56 hectares' },
  useCases: ['Measure property size for sale listings', 'Calculate land for development', 'Plan agricultural fields'],
  faqs: [
    { q: 'How many square feet in an acre?', a: 'There are 43,560 square feet in one acre.' },
    { q: 'How do I convert acres to hectares?', a: 'Multiply acres by 0.4047 to get hectares. Or divide square feet by 107,639.' },
    { q: 'What is the cheapest way to measure large acreage?', a: 'Use GPS or satellite mapping tools for free estimates, or hire a licensed surveyor for legal boundary verification and official documentation.' },
    { q: 'Can I use this for irregularly shaped lots?', a: 'Yes, divide the irregular lot into rectangles and triangles, calculate each area separately, then sum them for a close total acreage estimate.' },
  ],
  relatedCalculators: ['square-footage-calculator', 'area-calculator', 'square-feet-calculator'],
} satisfies CalculatorConfig
