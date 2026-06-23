import type { CalculatorConfig } from '@/types/calculator'
import { discount } from '@/lib/calculations/business'

export default {
  slug: 'discount-calculator',
  title: 'Discount Calculator - Calculate Discounted Price and Savings',
  metaDescription: 'Free discount calculator. Calculate discount amount, final price, and savings from original price and discount percentage.',
  h1: 'Discount Calculator',
  category: 'Business, Profit & Ecommerce',
  intro: 'Calculate the final price after discount, including optional tax.',
  inputs: [
    { id: 'originalPrice', label: 'Original Price ($)', type: 'number', placeholder: '100', min: 0, step: 0.01 },
    { id: 'discountPercent', label: 'Discount %', type: 'number', placeholder: '20', min: 0, max: 100, step: 1 },
    { id: 'taxPercent', label: 'Tax % (optional)', type: 'number', placeholder: '0', min: 0, step: 0.1 },
  ],
  calculate: (vals) => {
    const r = discount(vals.originalPrice, vals.discountPercent, vals.taxPercent)
    return { discountAmount: r.discountAmount, finalPrice: r.finalPrice, savings: r.savings }
  },
  formula: 'Discount = Price × (Discount%/100). Final Price = (Price - Discount) × (1 + Tax%).',
  example: { inputs: { originalPrice: 100, discountPercent: 20, taxPercent: 8 }, result: 'Discount: $20.00, Final: $86.40, Savings: $20.00' },
  useCases: ['Calculate sale prices for customers', 'Plan promotional discounts', 'Compare deals and offers'],
  faqs: [
    { q: 'How do I calculate a 20% discount?', a: 'Multiply the price by 0.20 to get the discount amount, then subtract from the original price.' },
    { q: 'Is discount calculated before or after tax?', a: 'Typically discount is applied before tax, but this can vary by store policy.' },
  ],
  relatedCalculators: ['margin-calculator', 'sales-tax-calculator', 'price-calculator'],
} satisfies CalculatorConfig
