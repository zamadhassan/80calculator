import type { CalculatorConfig } from '@/types/calculator'
import { irr } from '@/lib/calculations/finance'

export default {
  slug: 'irr-calculator',
  title: 'IRR Calculator - Calculate Internal Rate of Return',
  metaDescription: 'Free IRR calculator. Calculate the internal rate of return for an investment with cash flows.',
  h1: 'IRR Calculator',
  category: 'Finance, Loan & Investment',
  intro: 'Calculate the internal rate of return for an investment based on its cash flows.',
  inputs: [
    { id: 'initialInvestment', label: 'Initial Investment ($) (negative)', type: 'number', placeholder: '-100000', step: 100 },
    { id: 'cashflow1', label: 'Year 1 Cash Flow ($)', type: 'number', placeholder: '25000', min: 0, step: 100 },
    { id: 'cashflow2', label: 'Year 2 Cash Flow ($)', type: 'number', placeholder: '30000', min: 0, step: 100 },
    { id: 'cashflow3', label: 'Year 3 Cash Flow ($)', type: 'number', placeholder: '35000', min: 0, step: 100 },
    { id: 'cashflow4', label: 'Year 4 Cash Flow ($)', type: 'number', placeholder: '40000', min: 0, step: 100 },
    { id: 'cashflow5', label: 'Year 5 Cash Flow ($)', type: 'number', placeholder: '45000', min: 0, step: 100 },
  ],
  calculate: (vals) => {
    const cashflows = [vals.initialInvestment, vals.cashflow1, vals.cashflow2, vals.cashflow3, vals.cashflow4, vals.cashflow5].filter(cf => cf !== 0)
    const result = irr(cashflows)
    return { irrPercent: result }
  },
  formula: 'IRR is the discount rate that makes NPV = 0. Found through iterative calculation of -Initial + Σ(CF/(1+IRR)^t) = 0.',
  example: { inputs: { initialInvestment: -100000, cashflow1: 25000, cashflow2: 30000, cashflow3: 35000, cashflow4: 40000, cashflow5: 45000 }, result: 'IRR: 18.8%' },
  useCases: ['Evaluate project profitability', 'Compare investment returns', 'Capital budgeting decisions'],
  faqs: [
    { q: 'What is a good IRR?', a: 'An IRR higher than your cost of capital is good. Generally, 15%+ is considered attractive.' },
    { q: 'What is the difference between IRR and ROI?', a: 'IRR considers time value of money. ROI is a simpler percentage return without timing.' },
    { q: 'What if my cash flows are irregular or skip a year in the calculation?', a: 'For years with no cash flow, enter zero for that year amount. The IRR calculation will properly account for the gap in the cash flow sequence.' },
    { q: 'Can IRR be negative and what does a negative IRR signify?', a: 'Yes, a negative IRR means the investment loses money overall because the total discounted cash flows never recover the initial investment cost.' },
  ],
  relatedCalculators: ['npv-calculator', 'cagr-calculator', 'roi-calculator'],
  disclaimerType: 'finance',
} satisfies CalculatorConfig
