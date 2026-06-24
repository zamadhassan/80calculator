import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'aggregate-calculator',
  title: 'Aggregate Calculator - Estimate Aggregate Volume and Weight',
  metaDescription: 'Free aggregate calculator. Calculate volume and weight of crushed stone, sand, and gravel for construction.',
  h1: 'Aggregate Calculator',
  category: 'Construction & Home',
  intro: 'Calculate the volume and weight of construction aggregate materials.',
  inputs: [
    { id: 'length', label: 'Length (ft)', type: 'number', placeholder: '30', min: 0, step: 0.1 },
    { id: 'width', label: 'Width (ft)', type: 'number', placeholder: '20', min: 0, step: 0.1 },
    { id: 'depth', label: 'Depth (inches)', type: 'number', placeholder: '6', min: 0, step: 0.5 },
    { id: 'density', label: 'Density (lbs/cu ft)', type: 'number', placeholder: '110', defaultValue: 110, min: 0, step: 1 },
  ],
  calculate: (vals) => {
    const cf = vals.length * vals.width * (vals.depth / 12)
    return { cubicFeet: cf, cubicYards: cf / 27, weightTons: (cf * vals.density) / 2000 }
  },
  formula: 'Volume = L × W × D. Cubic Yards = ft³ / 27. Tons = (ft³ × Density) / 2000.',
  example: { inputs: { length: 30, width: 20, depth: 6, density: 110 }, result: '300 cu ft, 11.11 cu yd, 16.5 tons' },
  useCases: ['Order aggregate for construction', 'Estimate base material for roads', 'Plan drainage gravel'],
  faqs: [
    { q: 'What is the typical density of crushed stone?', a: 'Crushed stone typically has a density of 100-120 lbs per cubic foot.' },
    { q: 'How do I calculate aggregate for a base layer?', a: 'Measure the area length, width, and compacted depth in feet, then use the formula above.' },
    { q: 'What type of aggregate should I use for a driveway?', a: 'Crushed stone number 57 or 67 is best for driveways because it compacts well and provides excellent drainage under the surface layer.' },
    { q: 'How much aggregate do I need for a base layer?', a: 'Multiply the area by compacted depth of 4-6 inches typical for base layers, then add roughly 10 percent for compaction loss and settling over time.' },
  ],
  relatedCalculators: ['gravel-calculator', 'cubic-yard-calculator', 'soil-calculator'],
  disclaimerType: 'construction',
} satisfies CalculatorConfig
