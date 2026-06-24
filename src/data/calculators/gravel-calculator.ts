import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'gravel-calculator',
  title: 'Gravel Calculator - Estimate Gravel Volume and Cost',
  metaDescription: 'Free gravel calculator. Calculate cubic yards, tons, and cost of gravel, crushed stone, or landscaping material.',
  h1: 'Gravel Calculator',
  category: 'Construction & Home',
  intro: 'Estimate the volume, weight, and cost of gravel needed for driveways, pathways, and landscaping.',
  inputs: [
    { id: 'length', label: 'Length (ft)', type: 'number', placeholder: '50', min: 0, step: 0.1 },
    { id: 'width', label: 'Width (ft)', type: 'number', placeholder: '10', min: 0, step: 0.1 },
    { id: 'depth', label: 'Depth (inches)', type: 'number', placeholder: '4', min: 0, step: 0.5 },
    { id: 'density', label: 'Density (lbs/cu ft)', type: 'number', placeholder: '100', defaultValue: 100, min: 0, step: 1 },
    { id: 'costPerTon', label: 'Cost per ton ($)', type: 'number', placeholder: '50', min: 0, step: 0.5 },
  ],
  calculate: (vals) => {
    const cubicFeet = vals.length * vals.width * (vals.depth / 12)
    const cubicYards = cubicFeet / 27
    const weightTons = (cubicFeet * vals.density) / 2000
    const cost = weightTons * vals.costPerTon
    return { cubicFeet, cubicYards, weightTons, estimatedCost: cost }
  },
  formula: 'Volume (ft³) = L × W × D. Tons = (ft³ × Density) / 2000.',
  example: { inputs: { length: 50, width: 10, depth: 4, density: 100, costPerTon: 50 }, result: 'Volume: 6.17 cu yd, Weight: 8.33 tons, Cost: $416.50' },
  useCases: ['Estimate gravel for a driveway', 'Plan landscaping material', 'Budget for a pathway project'],
  faqs: [
    { q: 'How much does a cubic yard of gravel weigh?', a: 'Gravel typically weighs 2,400-2,900 lbs per cubic yard depending on the type.' },
    { q: 'How deep should gravel be for a driveway?', a: 'A driveway typically needs 4-6 inches of compacted gravel base.' },
    { q: 'How do I measure the length and width for an irregular area?', a: 'Break irregular areas into smaller rectangles and circles, calculate each section separately, then add all volumes together for your total gravel estimate.' },
    { q: 'What type of gravel is best for a driveway base layer?', a: 'Crushed angular stone like #57 or #3 gravel is ideal because the jagged edges lock together providing a stable, compacted base that resists shifting under vehicle weight.' },
  ],
  relatedCalculators: ['concrete-calculator', 'asphalt-calculator', 'soil-calculator'],
  disclaimerType: 'construction',
} satisfies CalculatorConfig
