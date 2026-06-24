import type { CalculatorConfig } from '@/types/calculator'
import { mileage } from '@/lib/calculations/time'

export default {
  slug: 'mileage-calculator',
  title: 'Mileage Calculator - Calculate Miles Per Gallon',
  metaDescription: 'Free mileage calculator. Calculate MPG and km/liter from distance and fuel used.',
  h1: 'Mileage Calculator',
  category: 'Business, Profit & Ecommerce',
  intro: 'Calculate your vehicle fuel mileage in MPG or km per liter.',
  inputs: [
    { id: 'distance', label: 'Distance Driven (miles)', type: 'number', placeholder: '350', min: 0, step: 1 },
    { id: 'fuelUsed', label: 'Fuel Used (gallons)', type: 'number', placeholder: '14', min: 0, step: 0.1 },
  ],
  calculate: (vals) => {
    const r = mileage(vals.distance, vals.fuelUsed)
    return { mpg: r.mpg, kmPerLiter: r.kmPerLiter }
  },
  formula: 'MPG = Miles Driven / Gallons Used. km/L = MPG × 0.425.',
  example: { inputs: { distance: 350, fuelUsed: 14 }, result: '25 MPG, 10.63 km/L' },
  useCases: ['Track vehicle fuel efficiency', 'Compare car performance', 'Monitor driving habits'],
  faqs: [
    { q: 'How do I calculate MPG accurately?', a: 'Fill your tank completely, drive until next fill-up, record miles and gallons used, then divide.' },
    { q: 'What is a good MPG?', a: '25-35 MPG is good for cars. 15-25 MPG is typical for trucks and SUVs. 40+ MPG is excellent.' },
  ],
  relatedCalculators: ['gas-mileage-calculator', 'fuel-cost-calculator'],
} satisfies CalculatorConfig
