import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'fence-calculator',
  title: 'Fence Calculator - Estimate Materials for Fence Building',
  metaDescription: 'Free fence calculator. Calculate posts, panels, and total cost for building a fence.',
  h1: 'Fence Calculator',
  category: 'Construction & Home',
  intro: 'Estimate the number of posts, panels, and total material length for your fence project.',
  inputs: [
    { id: 'perimeter', label: 'Total Perimeter (ft)', type: 'number', placeholder: '200', min: 0, step: 1 },
    { id: 'postSpacing', label: 'Post Spacing (ft)', type: 'number', placeholder: '8', min: 0, step: 0.5 },
    { id: 'gates', label: 'Number of Gates', type: 'number', placeholder: '1', defaultValue: 1, min: 0, step: 1 },
    { id: 'panelLength', label: 'Panel Length (ft)', type: 'number', placeholder: '8', defaultValue: 8, min: 0, step: 0.5 },
    { id: 'costPerPost', label: 'Cost per Post ($)', type: 'number', placeholder: '15', min: 0, step: 1 },
    { id: 'costPerPanel', label: 'Cost per Panel ($)', type: 'number', placeholder: '30', min: 0, step: 1 },
  ],
  calculate: (vals) => {
    const posts = Math.ceil(vals.perimeter / vals.postSpacing) + 1
    const panels = Math.ceil(vals.perimeter / vals.panelLength)
    const totalLength = vals.perimeter
    const totalCost = posts * vals.costPerPost + panels * vals.costPerPanel
    return { postsNeeded: posts, panelsNeeded: panels, totalLength, totalMaterialCost: totalCost }
  },
  formula: 'Posts = Perimeter ÷ Post Spacing + 1. Panels = Perimeter ÷ Panel Length. Material Cost = Posts + Panels + Gates.',
  example: { inputs: { perimeter: 200, postSpacing: 8, gates: 1, panelLength: 8, costPerPost: 15, costPerPanel: 30 }, result: 'Posts: 26, Panels: 25, Cost: $1,140' },
  useCases: ['Plan a new fence installation', 'Estimate material costs', 'Compare fencing options'],
  faqs: [
    { q: 'How far apart should fence posts be?', a: 'Standard post spacing is 6-8 feet, depending on fence height and wind exposure.' },
    { q: 'Do I need concrete for fence posts?', a: 'Yes, concrete is recommended for setting posts to ensure stability, especially in windy areas.' },
    { q: 'What type of wood is best for fence posts?', a: 'Pressure-treated pine or cedar is best for fence posts as they naturally resist rot and insect damage far better than untreated lumber.' },
    { q: 'How deep should fence posts be buried?', a: 'Bury posts at least one-third of their total length, typically 24 to 30 inches deep, and set them in concrete for maximum stability.' },
  ],
  relatedCalculators: ['square-footage-calculator', 'concrete-calculator'],
  disclaimerType: 'construction',
} satisfies CalculatorConfig
