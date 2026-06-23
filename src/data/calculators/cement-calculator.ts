import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'cement-calculator',
  title: 'Cement Calculator - Estimate Cement Bags for Your Project',
  metaDescription: 'Free cement calculator. Estimate the number of cement bags needed for concrete, mortar, or plaster projects.',
  h1: 'Cement Calculator',
  category: 'Construction & Home',
  intro: 'Calculate how many bags of cement you need based on your project area or volume.',
  inputs: [
    { id: 'area', label: 'Area (sq ft)', type: 'number', placeholder: '100', min: 0, step: 1 },
    { id: 'thickness', label: 'Thickness (inches)', type: 'number', placeholder: '4', min: 0, step: 0.5 },
    { id: 'ratio', label: 'Mix Ratio (cement:sand:agg)', type: 'number', placeholder: '1', defaultValue: 1, min: 0.5, step: 0.5 },
    { id: 'bagSize', label: 'Bag Size (lbs)', type: 'number', placeholder: '60', defaultValue: 60, min: 0, step: 10 },
    { id: 'waste', label: 'Waste %', type: 'number', placeholder: '5', defaultValue: 5, min: 0, max: 30 },
  ],
  calculate: (vals) => {
    const volCuFt = vals.area * (vals.thickness / 12)
    const totalParts = vals.ratio + 2 + 4
    const cementVol = volCuFt * (vals.ratio / totalParts)
    const bagsPerCuFt = vals.bagSize > 0 ? vals.bagSize / 94 : 1
    const bags = Math.ceil(cementVol * bagsPerCuFt * (1 + vals.waste / 100))
    return { volumeCuFt: volCuFt, cementCuFt: cementVol, bagsNeeded: bags }
  },
  formula: 'Cement volume = Total volume × (Cement ratio / Total parts). Standard mix: 1:2:4 (cement:sand:aggregate).',
  example: { inputs: { area: 100, thickness: 4, ratio: 1, bagSize: 60, waste: 5 }, result: 'Volume: 33.3 cu ft, Bags: 12' },
  useCases: ['Estimate cement for a slab', 'Plan mortar for brickwork', 'Budget for a construction project'],
  faqs: [
    { q: 'What is a standard concrete mix ratio?', a: 'A common mix ratio is 1:2:4 (cement:sand:aggregate) for general construction.' },
    { q: 'How many cubic feet does a 60lb bag cover?', a: 'A 60lb bag of concrete mix covers approximately 0.45 cubic feet.' },
  ],
  relatedCalculators: ['concrete-calculator', 'concrete-yard-calculator'],
  disclaimerType: 'construction',
} satisfies CalculatorConfig
