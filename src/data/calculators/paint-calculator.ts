import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'paint-calculator',
  title: 'Paint Calculator - Estimate Paint Needed for Your Project',
  metaDescription: 'Free paint calculator. Calculate gallons of paint needed for walls, ceilings, and trim based on room dimensions.',
  h1: 'Paint Calculator',
  category: 'Construction & Home',
  intro: 'Estimate how much paint you need for your walls, doors, and windows.',
  inputs: [
    { id: 'wallLength', label: 'Total Wall Length (ft)', type: 'number', placeholder: '60', min: 0, step: 0.1 },
    { id: 'wallHeight', label: 'Wall Height (ft)', type: 'number', placeholder: '8', min: 0, step: 0.1 },
    { id: 'doors', label: 'Number of Doors', type: 'number', placeholder: '2', defaultValue: 2, min: 0, step: 1 },
    { id: 'windows', label: 'Number of Windows', type: 'number', placeholder: '3', defaultValue: 3, min: 0, step: 1 },
    { id: 'coats', label: 'Number of Coats', type: 'number', placeholder: '2', defaultValue: 2, min: 1, max: 5, step: 1 },
  ],
  calculate: (vals) => {
    const grossArea = vals.wallLength * vals.wallHeight
    const doorArea = vals.doors * 21
    const windowArea = vals.windows * 15
    const netArea = Math.max(0, grossArea - doorArea - windowArea)
    const gallons = (netArea * vals.coats) / 350
    return { grossArea, netArea, gallonsNeeded: gallons }
  },
  formula: 'Net Wall Area = (Wall Length × Height) - (Doors × 21) - (Windows × 15). Gallons = (Net Area × Coats) / 350.',
  example: { inputs: { wallLength: 60, wallHeight: 8, doors: 2, windows: 3, coats: 2 }, result: 'Net area: 393 sq ft, Paint: 2.25 gallons' },
  useCases: ['Estimate paint for a room', 'Plan painting supplies for a house', 'Budget for a painting project'],
  faqs: [
    { q: 'How much area does a gallon of paint cover?', a: 'A gallon of paint typically covers 350-400 sq ft for one coat.' },
    { q: 'Do I need primer?', a: 'Primer is recommended for new drywall, dark colors, or stained surfaces.' },
  ],
  relatedCalculators: ['square-footage-calculator', 'area-calculator'],
  disclaimerType: 'construction',
} satisfies CalculatorConfig
