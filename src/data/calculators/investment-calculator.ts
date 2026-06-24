import type { CalculatorConfig } from '@/types/calculator'
import { compoundInterest } from '@/lib/calculations/finance'

export default {
  slug: 'investment-calculator',
  title: 'Investment Calculator - Project Investment Growth',
  metaDescription: 'Free investment calculator. See how your investments grow over time with compound returns and regular contributions.',
  h1: 'Investment Calculator',
  category: 'Finance, Loan & Investment',
  intro: 'Project how your investments will grow over time with compound returns and regular contributions.',
  inputs: [
    { id: 'initial', label: 'Initial Investment ($)', type: 'number', placeholder: '25000', min: 0, step: 100 },
    { id: 'contribution', label: 'Monthly Contribution ($)', type: 'number', placeholder: '1000', min: 0, step: 10 },
    { id: 'returnRate', label: 'Expected Annual Return (%)', type: 'number', placeholder: '8', min: 0, step: 0.1 },
    { id: 'years', label: 'Investment Period (years)', type: 'number', placeholder: '20', min: 1, step: 1 },
  ],
  calculate: (vals) => {
    const r = compoundInterest(vals.initial, vals.returnRate, vals.years, 12, vals.contribution)
    const totalContributions = vals.initial + vals.contribution * 12 * vals.years
    return { futureValue: r.futureValue, totalContributions, totalGains: r.futureValue - totalContributions }
  },
  formula: 'FV = PV(1+r/12)^(12t) + PMT × ((1+r/12)^(12t)-1)/(r/12). Monthly compounding with contributions.',
  example: { inputs: { initial: 25000, contribution: 1000, returnRate: 8, years: 20 }, result: 'FV: $706,721, Gains: $426,721, Contributions: $280,000' },
  useCases: ['Plan retirement savings', 'Project wealth accumulation', 'Compare investment strategies'],
  faqs: [
    { q: 'What is a reasonable expected return?', a: 'Historical S&P 500 average is 7-10% annually. Conservative: 4-6%. Aggressive: 10-12%.' },
    { q: 'How do monthly contributions impact growth?', a: 'Regular contributions dramatically increase final value through dollar-cost averaging and compound growth.' },
    { q: 'What if I stop making monthly contributions halfway through the investment period?', a: 'Stopping contributions reduces the final value significantly since you miss out on compound growth during the remaining years. Consistent contributions maximize long-term wealth building.' },
    { q: 'How do taxes affect my actual investment returns over the long term?', a: 'Taxes on capital gains and dividends can reduce effective returns by 15-30% depending on your tax bracket. Consider using tax-advantaged accounts like IRAs or 401(k)s.' },
  ],
  relatedCalculators: ['compound-interest-calculator', 'investment-return-calculator', 'future-value-calculator'],
  disclaimerType: 'finance',
} satisfies CalculatorConfig
