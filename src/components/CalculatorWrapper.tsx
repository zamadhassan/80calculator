'use client'

import { getCalculator } from '@/data/index'
import Calculator from './Calculator'

export default function CalculatorWrapper({ slug }: { slug: string }) {
  const config = getCalculator(slug)
  if (!config) return <div className="p-8 text-center text-white/50">Calculator not found</div>
  return <Calculator config={config} />
}
