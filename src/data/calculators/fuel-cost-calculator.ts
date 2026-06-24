import type { CalculatorConfig } from '@/types/calculator'
import { fuelCost } from '@/lib/calculations/business'

export default {
  slug: 'fuel-cost-calculator',
  title: 'Fuel Cost Calculator - Estimate Trip Fuel Cost',
  metaDescription: 'Free fuel cost calculator. Calculate fuel needed and cost for any trip based on distance and efficiency.',
  h1: 'Fuel Cost Calculator',
  category: 'Business, Profit & Ecommerce',
  intro: 'Calculate the fuel needed and total cost for your trip.',
  inputs: [
    { id: 'distance', label: 'Distance (miles)', type: 'number', placeholder: '300', min: 0, step: 1 },
    { id: 'efficiency', label: 'Fuel Efficiency', type: 'number', placeholder: '25', min: 0, step: 0.1 },
    { id: 'unit', label: 'Efficiency Unit', type: 'select', defaultValue: 0, options: [
      { value: '0', label: 'MPG (miles per gallon)' }, { value: '1', label: 'L/100km' },
    ] },
    { id: 'fuelPrice', label: 'Fuel Price per Gallon/Liter ($)', type: 'number', placeholder: '3.5', min: 0, step: 0.01 },
  ],
  calculate: (vals) => {
    const r = fuelCost(vals.distance, vals.efficiency, vals.fuelPrice, Number(vals.unit) === 0 ? 'mpg' : 'l100km')
    return { fuelNeeded: r.fuelNeeded, totalCost: r.totalCost }
  },
  formula: 'MPG Mode: Gallons = Miles / MPG. Cost = Gallons × Price/Gal. L/100km Mode: Liters = (Distance/100) × L/100km.',
  example: { inputs: { distance: 300, efficiency: 25, unit: 0, fuelPrice: 3.5 }, result: 'Fuel: 12 gallons, Cost: $42.00' },
  useCases: ['Budget road trip fuel expenses', 'Compare vehicle efficiency costs', 'Plan fleet fuel budget'],
  faqs: [
    { q: 'How do I calculate fuel cost for a trip?', a: 'Divide trip distance by your vehicle MPG to get gallons needed, then multiply by fuel price per gallon.' },
    { q: 'What is average MPG for cars?', a: 'Average modern cars achieve 25-35 MPG. SUVs and trucks average 15-25 MPG.' },
  ],
  relatedCalculators: ['mileage-calculator', 'gas-mileage-calculator'],
} satisfies CalculatorConfig
