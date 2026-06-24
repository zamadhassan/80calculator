import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'roof-pitch-calculator',
  title: 'Roof Pitch Calculator - Calculate Pitch Ratio, Angle and Factor',
  metaDescription: 'Free roof pitch calculator. Enter rise and run to get pitch ratio, angle in degrees, and pitch factor instantly.',
  h1: 'Roof Pitch Calculator',
  category: 'Construction & Home',
  intro: 'Calculate your roof pitch ratio, angle, and pitch factor from rise and run measurements.',
  inputs: [
    { id: 'rise', label: 'Rise (inches)', type: 'number', placeholder: '6', min: 0, step: 0.25 },
    { id: 'run', label: 'Run (inches)', type: 'number', placeholder: '12', min: 0.1, step: 0.25 },
  ],
  calculate: (vals) => {
    const ratio = vals.rise / vals.run
    const pitchRatio = `${vals.rise}/${vals.run}`
    const angle = Math.atan(ratio) * (180 / Math.PI)
    const factor = Math.sqrt(1 + ratio ** 2)
    return { pitchRatio, angleDegrees: angle, pitchFactor: factor }
  },
  formula: 'Pitch = Rise / Run. Angle = arctan(Rise/Run) in degrees. Pitch Factor = √(1 + (Rise/Run)²).',
  example: { inputs: { rise: 6, run: 12 }, result: 'Pitch: 6/12, Angle: 26.57°, Factor: 1.12' },
  useCases: ['Determine roof slope for building code compliance', 'Calculate pitch factor for roofing material estimates', 'Verify roof angle for solar panel installation'],
  faqs: [
    { q: 'What does a 6/12 roof pitch mean?', a: 'It means the roof rises 6 inches for every 12 inches of horizontal run.' },
    { q: 'What is the most common roof pitch?', a: 'A 4/12 to 9/12 pitch is most common in residential construction.' },
    { q: 'What is the minimum roof pitch for shingles?', a: 'Standard asphalt shingles require a minimum 4/12 pitch for proper water drainage. Low-slope roofs (2/12 to 4/12) require specialized roofing materials like rolled roofing or rubber membranes.' },
    { q: 'How can I measure roof pitch without climbing the roof?', a: 'Stand at the gable end of the house, hold a level horizontally at the roofline, measure 12 inches along the level, then measure the vertical distance from that point down to the roof surface.' },
  ],
  relatedCalculators: ['roofing-calculator', 'square-footage-calculator'],
  disclaimerType: 'construction',
} satisfies CalculatorConfig
