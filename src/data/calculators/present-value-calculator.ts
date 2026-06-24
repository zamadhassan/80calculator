import type { CalculatorConfig } from '@/types/calculator'
import { presentValue } from '@/lib/calculations/finance'

export default {
  slug: 'present-value-calculator',
  title: 'Present Value Calculator - Calculate Current Value of Future Money',
  metaDescription: 'Free present value calculator. Calculate what a future sum of money is worth today.',
  h1: 'Present Value Calculator',
  category: 'Finance, Loan & Investment',
  intro: 'Calculate the present value of a future sum of money, discounted at a given rate.',
  inputs: [
    { id: 'futureValue', label: 'Future Value ($)', type: 'number', placeholder: '50000', min: 0, step: 100 },
    { id: 'rate', label: 'Discount Rate (%)', type: 'number', placeholder: '8', min: 0, step: 0.1 },
    { id: 'periods', label: 'Number of Years', type: 'number', placeholder: '10', min: 1, step: 1 },
  ],
  calculate: (vals) => ({ presentValue: presentValue(vals.futureValue, vals.rate, vals.periods) }),
  formula: 'PV = FV / (1 + r)^n. Higher discount rates and longer periods reduce present value.',
  example: { inputs: { futureValue: 50000, rate: 8, periods: 10 }, result: 'PV: $23,159.34' },
  useCases: ['Value future cash flows today', 'Compare investment opportunities', 'Calculate what to invest now for a goal'],
  faqs: [
    { q: 'What does present value tell you?', a: 'PV tells you how much a future amount is worth in today dollars, considering the time value of money.' },
    { q: 'Why is present value lower than future value?', a: 'Because money today can be invested to grow. Future money must be discounted for this lost opportunity.' },
  ],
  relatedCalculators: ['future-value-calculator', 'npv-calculator', 'investment-calculator'],
} satisfies CalculatorConfig
