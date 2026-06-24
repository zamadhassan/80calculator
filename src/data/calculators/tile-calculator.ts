import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'tile-calculator',
  title: 'Tile Calculator - Estimate Tiles Needed for Flooring',
  metaDescription: 'Free tile calculator. Calculate number of tiles needed for floors, walls, and backsplashes including waste.',
  h1: 'Tile Calculator',
  category: 'Construction & Home',
  intro: 'Calculate the number of tiles needed for your flooring or wall project.',
  inputs: [
    { id: 'areaLength', label: 'Area Length (ft)', type: 'number', placeholder: '12', min: 0, step: 0.1 },
    { id: 'areaWidth', label: 'Area Width (ft)', type: 'number', placeholder: '10', min: 0, step: 0.1 },
    { id: 'tileLength', label: 'Tile Length (inches)', type: 'number', placeholder: '12', defaultValue: 12, min: 0, step: 0.5 },
    { id: 'tileWidth', label: 'Tile Width (inches)', type: 'number', placeholder: '12', defaultValue: 12, min: 0, step: 0.5 },
    { id: 'waste', label: 'Waste %', type: 'number', placeholder: '10', defaultValue: 10, min: 0, max: 30 },
  ],
  calculate: (vals) => {
    const area = vals.areaLength * vals.areaWidth
    const tileArea = (vals.tileLength / 12) * (vals.tileWidth / 12)
    const tilesNeeded = Math.ceil(area / tileArea)
    const withWaste = Math.ceil(tilesNeeded * (1 + vals.waste / 100))
    return { areaSqFt: area, tilesNeeded, tilesWithWaste: withWaste }
  },
  formula: 'Tiles = (Area Length × Area Width) / (Tile Length × Tile Width in feet). Add 10-15% waste.',
  example: { inputs: { areaLength: 12, areaWidth: 10, tileLength: 12, tileWidth: 12, waste: 10 }, result: 'Area: 120 sq ft, Tiles: 120, With waste: 132' },
  useCases: ['Estimate tiles for flooring', 'Plan backsplash installation', 'Budget for bathroom renovation'],
  faqs: [
    { q: 'How much extra tile should I buy?', a: 'Buy 10-15% extra to account for cuts, breakage, and future repairs.' },
    { q: 'What tile size is best for small bathrooms?', a: 'Large tiles (12×24) can make small spaces look bigger. Small tiles (1×1 mosaics) work for showers.' },
    { q: 'Should I use the same tile size for floors and walls?', a: 'For a cohesive look, you can use different sizes of the same tile type. Floor tiles are typically 12×24 or 18×18 inches, while wall tiles are often 4×4, 6×6, or subway tile. Ensure floor tiles have adequate slip resistance.' },
    { q: 'How do I calculate tiles needed for a diagonal pattern?', a: 'Diagonal installations require more tile due to increased cutting waste. Add 15-20% waste instead of the standard 10%. Purchase extra tiles to account for the angled cuts along walls and corners.' },
  ],
  relatedCalculators: ['square-footage-calculator', 'area-calculator'],
  disclaimerType: 'construction',
} satisfies CalculatorConfig
