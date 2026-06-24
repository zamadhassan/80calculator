import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'concrete-yard-calculator',
  title: 'Concrete Yard Calculator - Calculate Cubic Yards of Concrete',
  metaDescription: 'Free concrete yard calculator. Convert length, width, and depth measurements to cubic yards of concrete needed.',
  h1: 'Concrete Yard Calculator',
  category: 'Construction & Home',
  intro: 'Quickly convert your project measurements into cubic yards of concrete needed.',
  inputs: [
    { id: 'length', label: 'Length (ft)', type: 'number', placeholder: '20', min: 0, step: 0.1 },
    { id: 'width', label: 'Width (ft)', type: 'number', placeholder: '15', min: 0, step: 0.1 },
    { id: 'depth', label: 'Depth (inches)', type: 'number', placeholder: '6', min: 0, step: 0.5 },
    { id: 'waste', label: 'Waste %', type: 'number', placeholder: '5', defaultValue: 5, min: 0, max: 30 },
  ],
  calculate: (vals) => {
    const cubicFeet = vals.length * vals.width * (vals.depth / 12)
    const cubicYards = cubicFeet / 27
    const adjustedYards = cubicYards * (1 + vals.waste / 100)
    return { cubicFeet, cubicYards, adjustedYards }
  },
  formula: 'Cubic Yards = (Length × Width × Depth in feet) / 27. Add waste factor.',
  example: { inputs: { length: 20, width: 15, depth: 6, waste: 5 }, result: 'Volume: 5.56 cu yd, With waste: 5.83 cu yd' },
  useCases: ['Order ready-mix concrete for a slab', 'Estimate concrete for fence posts', 'Budget for a concrete pour'],
  faqs: [
    { q: 'How much does a cubic yard of concrete cover?', a: '1 cubic yard covers 81 sq ft at 4 inches thick, or 54 sq ft at 6 inches.' },
    { q: 'Should I order extra concrete?', a: 'Yes, order 5-10% extra to account for variations in depth and spillage.' },
    { q: 'How do I order ready-mix concrete?', a: 'Call a supplier with your cubic yard total, add 10 percent for waste, specify psi strength, and arrange pour time with proper truck access.' },
    { q: 'What is the minimum amount of concrete I can order?', a: 'Most ready-mix companies have a 1 cubic yard minimum delivery, though some may charge a short-load fee for smaller quantities than that.' },
  ],
  relatedCalculators: ['concrete-calculator', 'cement-calculator', 'cubic-yard-calculator'],
  disclaimerType: 'construction',
} satisfies CalculatorConfig
