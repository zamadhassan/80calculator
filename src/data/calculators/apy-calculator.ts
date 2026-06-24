import type { CalculatorConfig } from '@/types/calculator'
import { apy } from '@/lib/calculations/finance'

export default {
  slug: 'apy-calculator',
  title: 'APY Calculator - Calculate Annual Percentage Yield',
  metaDescription: 'Free APY calculator. Calculate the effective annual yield including compounding effects.',
  h1: 'APY Calculator',
  category: 'Finance, Loan & Investment',
  intro: 'Calculate the annual percentage yield (APY) including the effect of compounding.',
  inputs: [
    { id: 'rate', label: 'Annual Interest Rate (%)', type: 'number', placeholder: '5', min: 0, step: 0.1 },
    { id: 'compoundPerYear', label: 'Compounding Frequency', type: 'select', defaultValue: 12, options: [
      { value: '1', label: 'Yearly' }, { value: '4', label: 'Quarterly' }, { value: '12', label: 'Monthly' }, { value: '365', label: 'Daily' },
    ] },
  ],
  calculate: (vals) => ({
    apyPercent: apy(vals.rate, vals.compoundPerYear),
    nominalRate: vals.rate,
    effectiveRate: apy(vals.rate, vals.compoundPerYear),
  }),
  formula: 'APY = (1 + r/n)^n - 1. Where r = stated rate and n = compounding periods per year.',
  example: { inputs: { rate: 5, compoundPerYear: 12 }, result: 'APY: 5.12%, Nominal: 5%' },
  useCases: ['Compare savings account yields', 'Understand true investment returns', 'Evaluate CD or bond offers'],
  faqs: [
    { q: 'What is the difference between APR and APY?', a: 'APR is the simple rate. APY includes compounding effects. APY is always >= APR.' },
    { q: 'Why does compounding frequency matter?', a: 'More frequent compounding increases effective yield. Daily > monthly > yearly for the same nominal rate.' },
  ],
  relatedCalculators: ['apr-calculator', 'compound-interest-calculator', 'daily-compound-interest-calculator'],
} satisfies CalculatorConfig
