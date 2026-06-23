import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'asphalt-calculator',
  title: 'Asphalt Calculator - Estimate Asphalt Volume and Cost',
  metaDescription: 'Free asphalt calculator. Calculate tons of asphalt needed for driveways, parking lots, and paving projects.',
  h1: 'Asphalt Calculator',
  category: 'Construction & Home',
  intro: 'Estimate the asphalt volume, weight, and cost for paving driveways, parking lots, and roads.',
  inputs: [
    { id: 'length', label: 'Length (ft)', type: 'number', placeholder: '100', min: 0, step: 0.1 },
    { id: 'width', label: 'Width (ft)', type: 'number', placeholder: '20', min: 0, step: 0.1 },
    { id: 'thickness', label: 'Thickness (inches)', type: 'number', placeholder: '3', min: 0, step: 0.5 },
    { id: 'density', label: 'Density (lbs/cu ft)', type: 'number', placeholder: '145', defaultValue: 145, min: 0, step: 1 },
    { id: 'waste', label: 'Waste %', type: 'number', placeholder: '5', defaultValue: 5, min: 0, max: 20 },
  ],
  calculate: (vals) => {
    const cubicFeet = vals.length * vals.width * (vals.thickness / 12)
    const weightTons = (cubicFeet * vals.density) / 2000
    const withWaste = weightTons * (1 + vals.waste / 100)
    return { cubicFeet, weightTons, adjustedTons: withWaste }
  },
  formula: 'Tons = (Length × Width × Thickness × Density in lbs/ft³) / 2000. Includes waste factor.',
  example: { inputs: { length: 100, width: 20, thickness: 3, density: 145, waste: 5 }, result: 'Volume: 500 cu ft, Asphalt: 39.13 tons' },
  useCases: ['Estimate asphalt for a driveway', 'Plan a parking lot paving project', 'Budget for road resurfacing'],
  faqs: [
    { q: 'How thick should asphalt be for a driveway?', a: 'Residential driveways typically need 2-3 inches of asphalt over a base.' },
    { q: 'How much does a ton of asphalt cover?', a: '1 ton of asphalt covers about 80 sq ft at 2 inches thick.' },
  ],
  relatedCalculators: ['gravel-calculator', 'concrete-calculator'],
  disclaimerType: 'construction',
} satisfies CalculatorConfig
