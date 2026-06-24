import type { CalculatorConfig } from '@/types/calculator'
import { stairCalc } from '@/lib/calculations/construction'

export default {
  slug: 'stair-calculator',
  title: 'Stair Calculator - Calculate Stair Dimensions and Angle',
  metaDescription: 'Free stair calculator. Calculate number of steps, riser height, total run, and stair angle.',
  h1: 'Stair Calculator',
  category: 'Construction & Home',
  intro: 'Calculate stair dimensions including number of steps, riser height, total run, and angle.',
  inputs: [
    { id: 'totalRise', label: 'Total Rise (inches)', type: 'number', placeholder: '108', min: 0, step: 0.5 },
    { id: 'desiredRiser', label: 'Desired Riser Height (inches)', type: 'number', placeholder: '7', min: 0, step: 0.25 },
    { id: 'treadDepth', label: 'Tread Depth (inches)', type: 'number', placeholder: '11', min: 0, step: 0.25 },
  ],
  calculate: (vals) => {
    const r = stairCalc(vals.totalRise, vals.desiredRiser, vals.treadDepth)
    return { numberOfSteps: r.steps, actualRiserHeight: r.actualRiser, totalRun: r.totalRun, angleDegrees: r.angle }
  },
  formula: 'Steps = Total Rise / Desired Riser (rounded). Actual Riser = Total Rise / Steps. Run = (Steps-1) × Tread.',
  example: { inputs: { totalRise: 108, desiredRiser: 7, treadDepth: 11 }, result: 'Steps: 15, Riser: 7.2", Run: 154", Angle: 33.2°' },
  useCases: ['Design staircases for construction', 'Check building code compliance', 'Plan renovation projects'],
  faqs: [
    { q: 'What is the standard riser height?', a: 'Building codes typically allow 4-7.75 inches riser height. 7 inches is common for residential.' },
    { q: 'What is the minimum tread depth?', a: 'Minimum tread depth is typically 10 inches, with 11 inches being standard for comfort.' },
    { q: 'What is the ideal tread depth for comfortable stairs?', a: 'An 11-inch tread depth combined with a 7-inch riser height is considered the most comfortable stair proportion. The formula 2R + T (2 × riser + tread) should be between 24 and 25 inches for optimal comfort.' },
    { q: 'What building codes apply to stair construction?', a: 'The IRC requires maximum riser height of 7.75 inches, minimum tread depth of 10 inches, minimum stair width of 36 inches, and handrails on stairs with 4 or more risers. Local codes may vary.' },
  ],
  relatedCalculators: ['square-footage-calculator', 'concrete-calculator'],
  disclaimerType: 'construction',
} satisfies CalculatorConfig
