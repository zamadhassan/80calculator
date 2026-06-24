import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'take-home-pay-calculator',
  title: 'Take Home Pay Calculator - Estimate Net Pay After Deductions',
  metaDescription: 'Free take home pay calculator. Estimate your take-home salary after taxes, insurance, and deductions.',
  h1: 'Take Home Pay Calculator',
  category: 'Work, Time & Payroll',
  intro: 'Estimate your take-home pay after taxes, benefits, and other deductions.',
  inputs: [
    { id: 'grossPay', label: 'Gross Pay ($)', type: 'number', placeholder: '6000', min: 0, step: 0.01 },
    { id: 'federalTax', label: 'Federal Tax %', type: 'number', placeholder: '12', min: 0, max: 100, step: 0.1 },
    { id: 'stateTax', label: 'State Tax %', type: 'number', placeholder: '5', min: 0, max: 100, step: 0.1 },
    { id: 'ssMedicare', label: 'SS + Medicare %', type: 'number', placeholder: '7.65', defaultValue: 7.65, min: 0, max: 100, step: 0.01 },
    { id: 'benefits', label: 'Benefits/401k ($)', type: 'number', placeholder: '300', min: 0, step: 0.01 },
  ],
  calculate: (vals) => {
    const fedTax = vals.grossPay * (vals.federalTax / 100)
    const stateTax = vals.grossPay * (vals.stateTax / 100)
    const ssMed = vals.grossPay * (vals.ssMedicare / 100)
    const totalDeductions = fedTax + stateTax + ssMed + vals.benefits
    return { federalTax: fedTax, stateTax, socialSecurityMedicare: ssMed, benefits: vals.benefits, totalDeductions, takeHomePay: vals.grossPay - totalDeductions }
  },
  formula: 'Take Home = Gross Pay - (Federal Tax + State Tax + SS/Medicare + Benefits).',
  example: { inputs: { grossPay: 6000, federalTax: 12, stateTax: 5, ssMedicare: 7.65, benefits: 300 }, result: 'Take Home: $4,221.00, Total Deductions: $1,779.00' },
  useCases: ['Understand paycheck deductions', 'Compare pre vs post-tax income', 'Budget real take-home earnings'],
  faqs: [
    { q: 'What is the standard SS + Medicare rate?', a: 'Social Security is 6.2% and Medicare is 1.45%, totaling 7.65% for employees in 2025.' },
    { q: 'Does this include all possible deductions?', a: 'This is an estimate. Actual deductions vary by location, employer, and individual circumstances.' },
  ],
  relatedCalculators: ['net-pay-calculator', 'gross-pay-calculator', 'salary-calculator'],
  disclaimerType: 'finance',
} satisfies CalculatorConfig
