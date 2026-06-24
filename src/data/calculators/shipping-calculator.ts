import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'shipping-calculator',
  title: 'Shipping Calculator - Estimate Shipping Costs',
  metaDescription: 'Free shipping calculator. Estimate shipping costs based on weight, dimensions, and distance.',
  h1: 'Shipping Calculator',
  category: 'Business, Profit & Ecommerce',
  intro: 'Estimate shipping costs based on package weight and dimensions.',
  inputs: [
    { id: 'weight', label: 'Weight (lbs)', type: 'number', placeholder: '5', min: 0, step: 0.1 },
    { id: 'length', label: 'Length (inches)', type: 'number', placeholder: '12', min: 0, step: 0.5 },
    { id: 'width', label: 'Width (inches)', type: 'number', placeholder: '10', min: 0, step: 0.5 },
    { id: 'height', label: 'Height (inches)', type: 'number', placeholder: '8', min: 0, step: 0.5 },
    { id: 'ratePerLb', label: 'Rate per lb ($)', type: 'number', placeholder: '1.5', defaultValue: 1.5, min: 0, step: 0.01 },
  ],
  calculate: (vals) => {
    const dimensionalWeight = (vals.length * vals.width * vals.height) / 139
    const billableWeight = Math.max(vals.weight, dimensionalWeight)
    const cost = billableWeight * vals.ratePerLb
    return { actualWeight: vals.weight, dimensionalWeight, billableWeight, estimatedCost: cost }
  },
  formula: 'Dimensional Weight = (L×W×H) / 139. Billable = Higher of Actual or Dimensional. Cost = Billable × Rate/lb.',
  example: { inputs: { weight: 5, length: 12, width: 10, height: 8, ratePerLb: 1.5 }, result: 'DIM: 6.91 lbs, Billable: 6.91 lbs, Cost: $10.37' },
  useCases: ['Estimate shipping costs for ecommerce', 'Compare carrier pricing', 'Calculate dimensional weight'],
  faqs: [
    { q: 'What is dimensional weight?', a: 'Dimensional weight (DIM) considers package volume, not just actual weight. Formula: L×W×H/139 for most carriers.' },
    { q: 'How can I reduce shipping costs?', a: 'Use smaller boxes, reduce packaging weight, negotiate rates, and use regional carriers.' },
    { q: 'What is the difference between actual weight and billable weight?', a: 'Actual weight is the physical weight on a scale. Billable weight is the greater of actual weight or dimensional weight. Carriers charge by billable weight because lightweight but bulky packages take up valuable cargo space.' },
    { q: 'How can I determine the right shipping carrier for my package?', a: 'Compare rates from USPS, UPS, FedEx, and regional carriers based on package size, weight, destination, and delivery speed. USPS is often cheapest for small packages, while UPS and FedEx may offer better rates for larger shipments.' },
  ],
  relatedCalculators: ['freight-class-calculator', 'fuel-cost-calculator'],
} satisfies CalculatorConfig
