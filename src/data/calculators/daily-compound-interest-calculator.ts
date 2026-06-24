import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'daily-compound-interest-calculator',
  title: 'Daily Compound Interest Calculator - Daily Compounding Growth',
  metaDescription: 'Free daily compound interest calculator. Calculate investment growth with daily compounding and optional contributions.',
  h1: 'Daily Compound Interest Calculator',
  category: 'Finance, Loan & Investment',
  intro: 'Calculate investment growth with daily compounding interest and optional daily contributions.',
  inputs: [
    { id: 'principal', label: 'Initial Investment ($)', type: 'number', placeholder: '5000', min: 0, step: 100 },
    { id: 'rate', label: 'Annual Rate (%)', type: 'number', placeholder: '5', min: 0, step: 0.1 },
    { id: 'days', label: 'Time (days)', type: 'number', placeholder: '365', min: 1, step: 1 },
    { id: 'dailyContribution', label: 'Daily Contribution ($)', type: 'number', placeholder: '10', min: 0, step: 1 },
  ],
  calculate: (vals) => {
    const r = vals.rate / 100 / 365
    const n = vals.days
    let fv = vals.principal * Math.pow(1 + r, n)
    if (vals.dailyContribution > 0) {
      fv += vals.dailyContribution * ((Math.pow(1 + r, n) - 1) / r)
    }
    const totalContributions = vals.dailyContribution * vals.days
    return { futureValue: fv, totalContributions, interestEarned: fv - vals.principal - totalContributions }
  },
  formula: 'Daily: A = P(1+r/365)^d + PMT × ((1+r/365)^d - 1)/(r/365). Daily compounding maximizes growth.',
  example: { inputs: { principal: 5000, rate: 5, days: 365, dailyContribution: 10 }, result: 'FV: $8,935.81, Interest: $390.81, Contributions: $3,650' },
  useCases: ['Maximize savings with daily compounding', 'Calculate high-yield account growth', 'Compare compounding frequencies'],
  faqs: [
    { q: 'Does daily compounding make a big difference?', a: 'Over long periods, yes. Daily vs monthly compounding can add significant returns over decades.' },
    { q: 'What accounts use daily compounding?', a: 'Many high-yield savings accounts, money market accounts, and some CDs compound daily.' },
  ],
  relatedCalculators: ['compound-interest-calculator', 'interest-calculator', 'apy-calculator'],
  disclaimerType: 'finance',
} satisfies CalculatorConfig
