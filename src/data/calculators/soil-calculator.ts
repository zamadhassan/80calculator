import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'soil-calculator',
  title: 'Soil Calculator - Estimate Soil Volume for Gardening',
  metaDescription: 'Free soil calculator. Calculate cubic yards and tons of soil, compost, or mulch needed for your garden.',
  h1: 'Soil Calculator',
  category: 'Construction & Home',
  intro: 'Calculate the volume and weight of soil, compost, or mulch needed for your garden beds.',
  inputs: [
    { id: 'length', label: 'Length (ft)', type: 'number', placeholder: '10', min: 0, step: 0.1 },
    { id: 'width', label: 'Width (ft)', type: 'number', placeholder: '4', min: 0, step: 0.1 },
    { id: 'depth', label: 'Depth (inches)', type: 'number', placeholder: '6', min: 0, step: 0.5 },
    { id: 'type', label: 'Material Type', type: 'select', defaultValue: 0, options: [
      { value: '0', label: 'Topsoil (~95 lbs/cu ft)' }, { value: '1', label: 'Compost (~40 lbs/cu ft)' }, { value: '2', label: 'Mulch (~25 lbs/cu ft)' },
    ] },
  ],
  calculate: (vals) => {
    const densities = [95, 40, 25]
    const names = ['Topsoil', 'Compost', 'Mulch']
    const cf = vals.length * vals.width * (vals.depth / 12)
    const cy = cf / 27
    const typeIdx = Number(vals.type)
    const weightLbs = cf * densities[typeIdx]
    return { cubicFeet: cf, cubicYards: cy, weightTons: weightLbs / 2000, material: names[typeIdx] }
  },
  formula: 'Volume = Length × Width × Depth. Convert to cubic yards (÷27). Weight = Volume × Density.',
  example: { inputs: { length: 10, width: 4, depth: 6, type: 0 }, result: '20 cu ft, 0.74 cu yd, 0.95 tons Topsoil' },
  useCases: ['Plan garden bed soil needs', 'Order compost for landscaping', 'Estimate mulch for flower beds'],
  faqs: [
    { q: 'How deep should topsoil be for a garden?', a: 'Most gardens need 6-12 inches of topsoil for healthy plant growth.' },
    { q: 'How much does a yard of topsoil weigh?', a: 'A cubic yard of topsoil typically weighs 2,000-2,700 lbs (1-1.35 tons).' },
  ],
  relatedCalculators: ['gravel-calculator', 'cubic-yard-calculator', 'aggregate-calculator'],
  disclaimerType: 'construction',
} satisfies CalculatorConfig
