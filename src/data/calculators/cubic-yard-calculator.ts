import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'cubic-yard-calculator',
  title: 'Cubic Yard Calculator - Calculate Volume in Cubic Yards',
  metaDescription: 'Free cubic yard calculator. Convert length, width, and depth measurements to cubic yards.',
  h1: 'Cubic Yard Calculator',
  category: 'Construction & Home',
  intro: 'Calculate volume in cubic yards, cubic feet, and cubic meters from your measurements.',
  inputs: [
    { id: 'length', label: 'Length (ft)', type: 'number', placeholder: '20', min: 0, step: 0.1 },
    { id: 'width', label: 'Width (ft)', type: 'number', placeholder: '10', min: 0, step: 0.1 },
    { id: 'depth', label: 'Depth (inches)', type: 'number', placeholder: '6', min: 0, step: 0.5 },
  ],
  calculate: (vals) => {
    const cf = vals.length * vals.width * (vals.depth / 12)
    return { cubicFeet: cf, cubicYards: cf / 27, cubicMeters: cf / 35.315 }
  },
  formula: 'Cubic Yards = (Length × Width × Depth in feet) / 27.',
  example: { inputs: { length: 20, width: 10, depth: 6 }, result: '100 cu ft, 3.70 cu yd, 2.83 cu m' },
  useCases: ['Order concrete or fill dirt', 'Estimate excavation volume', 'Plan landscaping materials'],
  faqs: [
    { q: 'How many cubic feet in a cubic yard?', a: '27 cubic feet = 1 cubic yard (3ft × 3ft × 3ft).' },
    { q: 'How do I convert cubic yards to tons?', a: 'Multiply cubic yards by material density. For gravel: ~1.4 tons/cu yd.' },
    { q: 'How much does a cubic yard of topsoil weigh?', a: 'A cubic yard of dry topsoil weighs approximately 2,000 to 2,500 pounds, while wet topsoil can weigh up to 3,000 pounds or more.' },
    { q: 'How do I measure a pile of dirt in cubic yards?', a: 'Approximate the pile as a cone shape using height and base diameter, then multiply by 0.33 for a reasonable cubic yard volume estimate.' },
  ],
  relatedCalculators: ['cubic-feet-calculator', 'concrete-yard-calculator', 'gravel-calculator'],
  disclaimerType: 'construction',
} satisfies CalculatorConfig
