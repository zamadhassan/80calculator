import type { CalculatorConfig } from '@/types/calculator'
import { freightClass } from '@/lib/calculations/business'

export default {
  slug: 'freight-class-calculator',
  title: 'Freight Class Calculator - Determine Freight Shipping Class',
  metaDescription: 'Free freight class calculator. Calculate density and determine NMFC freight class for shipping.',
  h1: 'Freight Class Calculator',
  category: 'Business, Profit & Ecommerce',
  intro: 'Determine the freight class for your shipment based on density and dimensions.',
  inputs: [
    { id: 'weight', label: 'Weight (lbs)', type: 'number', placeholder: '200', min: 0, step: 1 },
    { id: 'length', label: 'Length (inches)', type: 'number', placeholder: '48', min: 0, step: 0.5 },
    { id: 'width', label: 'Width (inches)', type: 'number', placeholder: '40', min: 0, step: 0.5 },
    { id: 'height', label: 'Height (inches)', type: 'number', placeholder: '36', min: 0, step: 0.5 },
  ],
  calculate: (vals) => {
    const r = freightClass(vals.weight, vals.length, vals.width, vals.height)
    return { cubicFeet: r.cubicFeet, density: r.density, freightClass: r.classEstimate }
  },
  formula: 'Density = Weight (lbs) / Cubic Feet. Cubic Feet = (L×W×H in inches) / 1728. Higher density = lower class number = cheaper shipping.',
  example: { inputs: { weight: 200, length: 48, width: 40, height: 36 }, result: '40 cu ft, Density: 5 pcf, Class: 150' },
  useCases: ['Classify freight for LTL shipping', 'Compare carrier rates', 'Prepare shipping documentation'],
  faqs: [
    { q: 'What is freight class?', a: 'A standardized classification system (NMFC) used for less-than-truckload (LTL) shipping pricing.' },
    { q: 'How is freight class determined?', a: 'Primarily by density (lbs/cu ft), but also by handling, stowability, and liability characteristics.' },
    { q: 'What is the most common freight class for general cargo?', a: 'Class 50 is for heavy dense items over 50 pcf, while Class 150 covers lighter bulkier freight like furniture and boxes shipped via LTL.' },
    { q: 'How do I lower my freight class to reduce shipping costs?', a: 'Pack items more densely, use smaller boxes, reduce void fill material, and combine multiple pieces into single shipments when possible.' },
  ],
  relatedCalculators: ['shipping-calculator'],
} satisfies CalculatorConfig
