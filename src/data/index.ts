import type { CalculatorConfig, CalculatorResult } from '@/types/calculator'
import type { CategoryConfig } from '@/types/calculator'
import type { DisclaimerType } from '@/types/calculator'
import calculators from './calculators'

const calculatorModules: Record<string, CalculatorConfig> = {}

for (const c of calculators) {
  calculatorModules[c.slug] = c
}

export function getCalculator(slug: string): CalculatorConfig | undefined {
  return calculatorModules[slug]
}

export function getAllCalculators(): CalculatorConfig[] {
  return Object.values(calculatorModules)
}

export function getCalculatorsByCategory(category: string): CalculatorConfig[] {
  return Object.values(calculatorModules).filter(c => c.category === category)
}

export function getRelatedCalculators(slug: string, count = 5): CalculatorConfig[] {
  const current = calculatorModules[slug]
  if (!current) return []
  return Object.values(calculatorModules)
    .filter(c => c.slug !== slug && (c.category === current.category || current.relatedCalculators.includes(c.slug)))
    .slice(0, count)
}

export function formatResult(result: CalculatorResult): string[] {
  return Object.entries(result).map(([key, value]) => {
    if (typeof value === 'number') {
      return `${key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())}: ${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    }
    return `${key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())}: ${value}`
  })
}

export type { CalculatorConfig, CalculatorResult, CategoryConfig, DisclaimerType }
