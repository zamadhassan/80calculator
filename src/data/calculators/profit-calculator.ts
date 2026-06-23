import type { CalculatorConfig } from '@/types/calculator'
import { profitCalc } from '@/lib/calculations/business'

export default {
  slug: 'profit-calculator',
  title: 'Profit Calculator - Calculate Profit, Revenue and Margin',
  metaDescription: 'Free profit calculator. Calculate profit amount, profit margin, and cost per unit from revenue and costs.',
  h1: 'Profit Calculator',
  category: 'Business, Profit & Ecommerce',
  intro: 'Calculate your total profit, profit margin, and cost per unit easily.',
  inputs: [
    { id: 'revenue', label: 'Revenue per unit ($)', type: 'number', placeholder: '100', min: 0, step: 0.01 },
    { id: 'cost', label: 'Cost per unit ($)', type: 'number', placeholder: '60', min: 0, step: 0.01 },
    { id: 'expenses', label: 'Fixed Expenses ($)', type: 'number', placeholder: '500', min: 0, step: 0.01 },
    { id: 'quantity', label: 'Quantity Sold', type: 'number', placeholder: '50', min: 1, step: 1 },
  ],
  calculate: (vals) => {
    const r = profitCalc(vals.revenue, vals.cost, vals.expenses, vals.quantity)
    return { profit: r.profit, marginPercent: r.margin, costPerUnit: r.costPerUnit }
  },
  formula: 'Profit = (Revenue - Cost) × Quantity - Fixed Expenses. Margin = Profit / (Revenue × Quantity) × 100.',
  example: { inputs: { revenue: 100, cost: 60, expenses: 500, quantity: 50 }, result: 'Profit: $1,500.00, Margin: 30%, Cost/Unit: $10.00' },
  useCases: ['Evaluate product line profitability', 'Price new products effectively', 'Analyze business financial health'],
  faqs: [
    { q: 'What is the difference between gross and net profit?', a: 'Gross profit is revenue minus cost of goods sold. Net profit also subtracts operating expenses.' },
    { q: 'How can I increase my profit margin?', a: 'Raise prices, reduce costs, increase volume, or improve operational efficiency.' },
  ],
  relatedCalculators: ['margin-calculator', 'break-even-calculator', 'roi-calculator'],
} satisfies CalculatorConfig
