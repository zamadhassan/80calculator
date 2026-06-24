import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'net-pay-calculator',
  title: 'Net Pay Calculator - Calculate Take Home Pay After Deductions',
  metaDescription: 'Free net pay calculator. Estimate net pay after taxes and deductions from gross pay.',
  h1: 'Net Pay Calculator',
  category: 'Work, Time & Payroll',
  intro: 'Estimate your take-home pay after taxes and deductions.',
  inputs: [
    { id: 'grossPay', label: 'Gross Pay ($)', type: 'number', placeholder: '5000', min: 0, step: 0.01 },
    { id: 'taxPercent', label: 'Estimated Tax Rate (%)', type: 'number', placeholder: '22', min: 0, max: 100, step: 0.1 },
    { id: 'deductions', label: 'Other Deductions ($)', type: 'number', placeholder: '200', min: 0, step: 0.01 },
  ],
  calculate: (vals) => {
    const taxAmount = vals.grossPay * (vals.taxPercent / 100)
    const netPay = vals.grossPay - taxAmount - vals.deductions
    return { taxAmount, deductions: vals.deductions, netPay: Math.max(0, netPay) }
  },
  formula: 'Net Pay = Gross Pay - (Gross × Tax Rate) - Other Deductions.',
  example: { inputs: { grossPay: 5000, taxPercent: 22, deductions: 200 }, result: 'Tax: $1,100, Deductions: $200, Net: $3,700' },
  useCases: ['Estimate take-home pay', 'Budget after-tax income', 'Compare job offers after tax'],
  faqs: [
    { q: 'How accurate is this net pay estimate?', a: 'This is an estimate. Actual deductions vary by location, filing status, benefits, and other factors.' },
    { q: 'What other deductions might apply?', a: 'Health insurance, 401(k) contributions, FSA, HSA, union dues, and wage garnishments.' },
    { q: 'How do state taxes affect my net pay compared to federal taxes alone?', a: 'State income tax rates range from 0% in states like Texas and Florida to over 13% in California, significantly impacting your overall net pay and take-home earnings.' },
    { q: 'What is FICA and how much does it reduce my gross pay each pay period?', a: 'FICA includes Social Security at 6.2% and Medicare at 1.45%, totaling 7.65% of your gross pay that is automatically deducted before you receive your paycheck.' },
  ],
  relatedCalculators: ['gross-pay-calculator', 'salary-calculator', 'take-home-pay-calculator'],
  disclaimerType: 'finance',
} satisfies CalculatorConfig
