import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'gas-mileage-calculator',
  title: 'Gas Mileage Calculator - Calculate MPG and Fuel Cost',
  metaDescription: 'Free gas mileage calculator. Calculate MPG, fuel cost, and efficiency from miles driven and gallons used.',
  h1: 'Gas Mileage Calculator',
  category: 'Business, Profit & Ecommerce',
  intro: 'Calculate your gas mileage (MPG) and optional fuel cost.',
  inputs: [
    { id: 'miles', label: 'Miles Driven', type: 'number', placeholder: '300', min: 0, step: 1 },
    { id: 'gallons', label: 'Gallons Used', type: 'number', placeholder: '12', min: 0, step: 0.1 },
    { id: 'pricePerGallon', label: 'Price per Gallon ($) - optional', type: 'number', placeholder: '3.5', min: 0, step: 0.01 },
  ],
  calculate: (vals) => {
    const mpg = vals.miles / vals.gallons
    const cost = vals.pricePerGallon > 0 ? vals.gallons * vals.pricePerGallon : 0
    return { mpg, gallonsUsed: vals.gallons, totalFuelCost: cost }
  },
  formula: 'MPG = Miles Driven / Gallons Used. Cost = Gallons × Price/Gallon.',
  example: { inputs: { miles: 300, gallons: 12, pricePerGallon: 3.5 }, result: 'MPG: 25, Cost: $42.00' },
  useCases: ['Track commute efficiency', 'Compare vehicle performance', 'Calculate trip fuel costs'],
  faqs: [
    { q: 'How can I improve my gas mileage?', a: 'Maintain proper tire pressure, avoid aggressive acceleration, reduce idling, and remove excess weight.' },
    { q: 'Does AC affect gas mileage?', a: 'Yes, running AC can reduce MPG by 5-25% depending on driving conditions and vehicle.' },
  ],
  relatedCalculators: ['mileage-calculator', 'fuel-cost-calculator'],
} satisfies CalculatorConfig
