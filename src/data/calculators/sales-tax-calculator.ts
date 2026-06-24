import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'sales-tax-calculator',
  title: 'Sales Tax Calculator - Calculate Tax Amount and Final Price',
  metaDescription: 'Free sales tax calculator. Calculate sales tax amount and final price including or excluding tax.',
  h1: 'Sales Tax Calculator',
  category: 'Business, Profit & Ecommerce',
  intro: 'Calculate the sales tax amount and final price with or without tax.',
  inputs: [
    { id: 'price', label: 'Price ($)', type: 'number', placeholder: '100', min: 0, step: 0.01 },
    { id: 'taxRate', label: 'Tax Rate (%)', type: 'number', placeholder: '8', min: 0, step: 0.1 },
    { id: 'taxIncluded', label: 'Is tax already included?', type: 'select', defaultValue: 0, options: [
      { value: '0', label: 'No, add tax to price' }, { value: '1', label: 'Yes, extract tax from price' },
    ] },
  ],
  calculate: (vals) => {
    const rate = vals.taxRate / 100
    const included = Number(vals.taxIncluded)
    if (included === 1) {
      const preTax = vals.price / (1 + rate)
      return { taxAmount: vals.price - preTax, priceExcludingTax: preTax, priceIncludingTax: vals.price }
    }
    return { taxAmount: vals.price * rate, priceExcludingTax: vals.price, priceIncludingTax: vals.price * (1 + rate) }
  },
  formula: 'Tax = Price × Rate/100. Total = Price + Tax. If tax included: Pre-tax = Total / (1 + Rate).',
  example: { inputs: { price: 100, taxRate: 8, taxIncluded: 0 }, result: 'Tax: $8.00, Total: $108.00' },
  useCases: ['Calculate final purchase price with tax', 'Determine pre-tax price', 'Estimate tax deductions'],
  faqs: [
    { q: 'How do I calculate sales tax backwards?', a: 'Divide the total price by (1 + tax rate). For 8% tax: Total / 1.08 = pre-tax price.' },
    { q: 'Do I need to charge sales tax online?', a: 'It depends on your nexus (physical presence) and local laws. Consult a tax professional.' },
    { q: 'What items are typically exempt from sales tax?', a: 'Most states exempt essential items like groceries (unprepared food), prescription medications, and medical devices. Clothing is exempt in some states. Business-to-business transactions may also qualify for tax-exempt status.' },
    { q: 'How do sales tax rates vary by location?', a: 'Sales tax can include state, county, and city components. Some areas have total rates under 4%, while others exceed 10%. Always check the combined rate for your specific shipping or purchase address.' },
  ],
  relatedCalculators: ['discount-calculator', 'price-calculator'],
} satisfies CalculatorConfig
