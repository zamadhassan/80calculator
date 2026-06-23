export type CalculatorInputDef = {
  id: string
  label: string
  type: 'number' | 'select' | 'date'
  placeholder?: string
  defaultValue?: number | string
  min?: number
  max?: number
  step?: number
  options?: { value: string; label: string }[]
  required?: boolean
}

export type CalculatorResult = Record<string, string | number>

export type DisclaimerType = 'health' | 'finance' | 'construction' | 'period' | 'none'

export type CalculatorConfig = {
  slug: string
  title: string
  metaDescription: string
  h1: string
  category: string
  intro: string
  inputs: CalculatorInputDef[]
  calculate: (values: Record<string, number>) => CalculatorResult
  formula: string
  example: { inputs: Record<string, number>; result: string }
  useCases: string[]
  faqs: { q: string; a: string }[]
  relatedCalculators: string[]
  disclaimerType?: DisclaimerType
}

export type CategoryConfig = {
  slug: string
  name: string
  description: string
  icon: string
}
