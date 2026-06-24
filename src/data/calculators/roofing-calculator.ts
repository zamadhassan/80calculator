import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'roofing-calculator',
  title: 'Roofing Calculator - Estimate Roof Area, Pitch and Material Cost',
  metaDescription: 'Free roofing calculator to estimate roof area, materials, and cost. Calculate with length, width, pitch, and waste factor.',
  h1: 'Roofing Calculator',
  category: 'Construction & Home',
  intro: 'Estimate your roof area, material quantities, and costs based on dimensions and pitch.',
  inputs: [
    { id: 'length', label: 'Length (ft)', type: 'number', placeholder: '40', min: 0, step: 0.1 },
    { id: 'width', label: 'Width (ft)', type: 'number', placeholder: '30', min: 0, step: 0.1 },
    { id: 'pitch', label: 'Roof Pitch (rise/12)', type: 'number', placeholder: '6', min: 0, step: 0.5 },
    { id: 'waste', label: 'Waste %', type: 'number', placeholder: '10', defaultValue: 10, min: 0, max: 50 },
    { id: 'materialCost', label: 'Material Cost per sq ft ($)', type: 'number', placeholder: '3.50', min: 0, step: 0.01 },
  ],
  calculate: (vals) => {
    const area = vals.length * vals.width
    const pitchFactor = Math.sqrt(1 + (vals.pitch / 12) ** 2)
    const adjustedArea = area * pitchFactor
    const waste = adjustedArea * (vals.waste / 100)
    const totalArea = adjustedArea + waste
    const cost = totalArea * vals.materialCost
    return { roofArea: area, adjustedArea: totalArea, waste, materialCost: cost }
  },
  formula: 'Roof Area = Length × Width × Pitch Factor. Pitch Factor = √(1 + (rise/12)²). Includes waste percentage.',
  example: { inputs: { length: 40, width: 30, pitch: 6, waste: 10, materialCost: 3.5 }, result: 'Total area: 1,291 sq ft, Cost: $4,518.50' },
  useCases: ['Estimate roofing material for a new home build', 'Plan shingle purchases for a re-roofing project', 'Budget material costs for a roof repair'],
  faqs: [
    { q: 'How do I measure my roof pitch?', a: 'Measure the vertical rise over 12 inches of horizontal run. A 6/12 pitch means 6 inches rise per foot.' },
    { q: 'What is a typical waste factor for roofing?', a: 'A 10-15% waste factor is standard to account for cuts, overlaps, and mistakes.' },
    { q: 'Does this include labor costs?', a: 'No, this estimates material quantities and costs only. Labor varies by region and contractor.' },
    { q: 'How many squares of roofing do I need for my house?', a: 'A roofing square is 100 square feet. Divide your total roof area by 100 to get the number of squares needed. Most single-family homes need 20-35 squares depending on their footprint and roof complexity.' },
    { q: 'Should I replace roofing felt or underlayment during re-roofing?', a: 'Yes, always replace the underlayment when re-roofing. The underlayment provides a secondary waterproof barrier that protects the roof deck from moisture if shingles are damaged or blown off.' },
  ],
  relatedCalculators: ['roof-pitch-calculator', 'square-footage-calculator', 'concrete-calculator'],
  disclaimerType: 'construction',
} satisfies CalculatorConfig
