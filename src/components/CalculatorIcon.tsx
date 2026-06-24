'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getCalculatorIcon } from '@/data/calculatorIcons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export default function CalculatorIcon({ slug, className = '' }: { slug: string; className?: string }) {
  const icon: IconDefinition = getCalculatorIcon(slug)
  return <FontAwesomeIcon icon={icon} className={className} aria-hidden="true" />
}
