import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'brick-calculator',
  title: 'Brick Calculator - Estimate Number of Bricks Needed',
  metaDescription: 'Free brick calculator. Calculate how many bricks you need for a wall, including mortar gap and waste factor.',
  h1: 'Brick Calculator',
  category: 'Construction & Home',
  intro: 'Calculate the number of bricks required for a wall project including mortar gaps and waste.',
  inputs: [
    { id: 'wallLength', label: 'Wall Length (ft)', type: 'number', placeholder: '20', min: 0, step: 0.1 },
    { id: 'wallHeight', label: 'Wall Height (ft)', type: 'number', placeholder: '10', min: 0, step: 0.1 },
    { id: 'brickLength', label: 'Brick Length (inches)', type: 'number', placeholder: '8', defaultValue: 8, min: 0, step: 0.5 },
    { id: 'brickHeight', label: 'Brick Height (inches)', type: 'number', placeholder: '2.25', defaultValue: 2.25, min: 0, step: 0.125 },
    { id: 'mortarGap', label: 'Mortar Gap (inches)', type: 'number', placeholder: '0.375', defaultValue: 0.375, min: 0, step: 0.125 },
    { id: 'waste', label: 'Waste %', type: 'number', placeholder: '5', defaultValue: 5, min: 0, max: 20 },
  ],
  calculate: (vals) => {
    const wallArea = vals.wallLength * vals.wallHeight
    const effectiveLength = (vals.brickLength + vals.mortarGap) / 12
    const effectiveHeight = (vals.brickHeight + vals.mortarGap) / 12
    const bricksPerSqFt = 1 / (effectiveLength * effectiveHeight)
    const bricks = Math.ceil(wallArea * bricksPerSqFt)
    const withWaste = Math.ceil(bricks * (1 + vals.waste / 100))
    return { wallArea, bricksNeeded: bricks, withWaste }
  },
  formula: 'Bricks = Wall Area / ((Brick Length + Mortar Gap) × (Brick Height + Mortar Gap)). Add 5-10% waste.',
  example: { inputs: { wallLength: 20, wallHeight: 10, brickLength: 8, brickHeight: 2.25, mortarGap: 0.375, waste: 5 }, result: 'Wall: 200 sq ft, Bricks: 1,025, With waste: 1,076' },
  useCases: ['Estimate bricks for a garden wall', 'Plan materials for a house facade', 'Budget for a masonry project'],
  faqs: [
    { q: 'How many bricks per square foot?', a: 'With standard 8×2.25-inch bricks and 3/8-inch mortar, about 6.75 bricks per sq ft.' },
    { q: 'What is a standard brick size?', a: 'A standard modular brick is 8 × 2.25 × 3.625 inches.' },
    { q: 'Should I buy extra bricks beyond the waste factor?', a: 'Yes, buying 10 to 15 extra bricks ensures you have matching ones for future repairs since brick colors can vary significantly by batch.' },
    { q: 'How do I calculate bricks for a wall with windows?', a: 'Calculate the full wall area, subtract window and door openings, then use the standard brick formula on the remaining surface area only.' },
  ],
  relatedCalculators: ['concrete-calculator', 'square-footage-calculator'],
  disclaimerType: 'construction',
} satisfies CalculatorConfig
