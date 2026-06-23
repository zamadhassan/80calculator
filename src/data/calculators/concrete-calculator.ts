import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'concrete-calculator',
  title: 'Concrete Calculator - Estimate Concrete Volume, Bags and Cost',
  metaDescription: 'Free concrete calculator. Estimate cubic yards, cubic feet, bags needed, and cost for your concrete project.',
  h1: 'Concrete Calculator',
  category: 'Construction & Home',
  intro: 'Calculate concrete volume needed in cubic yards, cubic feet, and estimate the number of bags required.',
  inputs: [
    { id: 'length', label: 'Length (ft)', type: 'number', placeholder: '10', min: 0, step: 0.1 },
    { id: 'width', label: 'Width (ft)', type: 'number', placeholder: '10', min: 0, step: 0.1 },
    { id: 'depth', label: 'Depth (inches)', type: 'number', placeholder: '4', min: 0, step: 0.5 },
    { id: 'waste', label: 'Waste %', type: 'number', placeholder: '5', defaultValue: 5, min: 0, max: 30 },
    { id: 'bagSize', label: 'Bag Size (lbs)', type: 'number', placeholder: '60', min: 0, step: 10 },
  ],
  calculate: (vals) => {
    const cubicFeet = vals.length * vals.width * (vals.depth / 12)
    const cubicYards = cubicFeet / 27
    const withWaste = cubicYards * (1 + vals.waste / 100)
    const bagsPerYard = vals.bagSize <= 0 ? 0 : 27 / (vals.bagSize / 133)
    const bags = Math.ceil(withWaste * bagsPerYard)
    return { cubicFeet, cubicYards, adjustedYards: withWaste, bagsNeeded: bags }
  },
  formula: 'Volume (ft³) = L × W × D. Cubic Yards = ft³ / 27. Bags = (Cubic Yards × 27) / Bag Yield.',
  example: { inputs: { length: 10, width: 10, depth: 4, waste: 5, bagSize: 60 }, result: 'Volume: 1.23 cu yd, Bags needed: 13' },
  useCases: ['Estimate concrete for a patio slab', 'Calculate materials for a driveway', 'Plan foundation footings'],
  faqs: [
    { q: 'How many 60lb bags make a yard?', a: 'Approximately 60 bags of 60lb concrete mix make 1 cubic yard.' },
    { q: 'Should I include waste in my estimate?', a: 'Yes, add 5-10% waste for spillage, uneven subgrade, and variations.' },
  ],
  relatedCalculators: ['concrete-yard-calculator', 'cement-calculator', 'square-footage-calculator'],
  disclaimerType: 'construction',
} satisfies CalculatorConfig
