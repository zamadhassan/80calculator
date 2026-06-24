import type { CalculatorConfig } from '@/types/calculator'
import { npv } from '@/lib/calculations/finance'

export default {
  slug: 'npv-calculator',
  title: 'NPV Calculator - Calculate Net Present Value',
  metaDescription: 'Free NPV calculator. Calculate net present value of an investment with discount rate and cash flows.',
  h1: 'NPV Calculator',
  category: 'Finance, Loan & Investment',
  intro: 'Calculate the net present value of an investment using discount rate and projected cash flows.',
  inputs: [
    { id: 'discountRate', label: 'Discount Rate (%)', type: 'number', placeholder: '10', min: 0, step: 0.1 },
    { id: 'initialInvestment', label: 'Initial Investment ($)', type: 'number', placeholder: '100000', min: 0, step: 100 },
    { id: 'cashflow1', label: 'Year 1 Cash Flow ($)', type: 'number', placeholder: '30000', min: 0, step: 100 },
    { id: 'cashflow2', label: 'Year 2 Cash Flow ($)', type: 'number', placeholder: '35000', min: 0, step: 100 },
    { id: 'cashflow3', label: 'Year 3 Cash Flow ($)', type: 'number', placeholder: '40000', min: 0, step: 100 },
    { id: 'cashflow4', label: 'Year 4 Cash Flow ($)', type: 'number', placeholder: '45000', min: 0, step: 100 },
    { id: 'cashflow5', label: 'Year 5 Cash Flow ($)', type: 'number', placeholder: '50000', min: 0, step: 100 },
  ],
  calculate: (vals) => {
    const cashflows = [vals.cashflow1, vals.cashflow2, vals.cashflow3, vals.cashflow4, vals.cashflow5].filter(cf => cf > 0)
    const result = npv(vals.discountRate, vals.initialInvestment, cashflows)
    return { netPresentValue: result, verdict: result >= 0 ? 'Accept (NPV ≥ 0)' : 'Reject (NPV < 0)' }
  },
  formula: 'NPV = -Initial + Σ(CFt / (1+r)^t). Positive NPV indicates profitable investment.',
  example: { inputs: { discountRate: 10, initialInvestment: 100000, cashflow1: 30000, cashflow2: 35000, cashflow3: 40000 }, result: 'NPV: $1,046.50 (Accept)' },
  useCases: ['Evaluate capital investment projects', 'Compare business opportunities', 'Make investment decisions'],
  faqs: [
    { q: 'What does a positive NPV mean?', a: 'Positive NPV means the investment is expected to generate more value than its cost, considering the time value of money.' },
    { q: 'What discount rate should I use?', a: 'Use your cost of capital or required rate of return. Often 8-15% depending on risk.' },
    { q: 'What happens to NPV if I use a higher discount rate than expected?', a: 'A higher discount rate reduces the present value of future cash flows, making NPV lower. Projects become less attractive when the required rate of return increases.' },
    { q: 'How does NPV compare with IRR for making investment decisions between projects?', a: 'NPV gives the actual dollar value added, while IRR shows the percentage return. For mutually exclusive projects, NPV is generally preferred over IRR for final decisions.' },
  ],
  relatedCalculators: ['irr-calculator', 'cagr-calculator', 'present-value-calculator'],
  disclaimerType: 'finance',
} satisfies CalculatorConfig
