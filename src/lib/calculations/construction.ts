export function roofArea(length: number, width: number, pitchFactor: number, wastePercent: number): { area: number; adjustedArea: number; waste: number } {
  const area = length * width
  const adjustedArea = area * pitchFactor
  const waste = adjustedArea * (wastePercent / 100)
  return { area, adjustedArea: adjustedArea + waste, waste }
}

export function concreteVolume(length: number, width: number, depth: number, unit: 'ft' | 'm'): { cubicFeet: number; cubicYards: number; cubicMeters: number } {
  const l = unit === 'ft' ? length : length * 3.28084
  const w = unit === 'ft' ? width : width * 3.28084
  const d = unit === 'ft' ? depth : depth * 3.28084
  const cf = l * w * d
  return { cubicFeet: cf, cubicYards: cf / 27, cubicMeters: cf / 35.315 }
}

export function paintNeeded(wallArea: number, doors: number, windows: number, coats: number, coveragePerGallon: number): { netArea: number; gallons: number } {
  const doorArea = doors * 21
  const windowArea = windows * 15
  const netArea = Math.max(0, wallArea - doorArea - windowArea)
  const gallons = (netArea * coats) / coveragePerGallon
  return { netArea, gallons }
}

export function brickCount(wallLength: number, wallHeight: number, brickLength: number, brickHeight: number, mortarGap: number, wastePercent: number): { bricks: number; wallArea: number; withWaste: number } {
  const wallArea = wallLength * wallHeight
  const effectiveBrickLength = (brickLength + mortarGap) / 12
  const effectiveBrickHeight = (brickHeight + mortarGap) / 12
  const bricksPerSqFt = 1 / (effectiveBrickLength * effectiveBrickHeight)
  const bricks = Math.ceil(wallArea * bricksPerSqFt)
  const withWaste = Math.ceil(bricks * (1 + wastePercent / 100))
  return { bricks, wallArea, withWaste }
}

export function stairCalc(totalRise: number, desiredRiser: number, treadDepth: number): { steps: number; actualRiser: number; totalRun: number; angle: number } {
  const steps = Math.round(totalRise / desiredRiser)
  const actualRiser = totalRise / steps
  const totalRun = (steps - 1) * treadDepth
  const angle = Math.atan2(actualRiser, treadDepth) * (180 / Math.PI)
  return { steps, actualRiser, totalRun, angle }
}

export function cubicYards(l: number, w: number, d: number, unit: 'ft' | 'in'): number {
  const lFt = unit === 'in' ? l / 12 : l
  const wFt = unit === 'in' ? w / 12 : w
  const dFt = unit === 'in' ? d / 12 : d
  return (lFt * wFt * dFt) / 27
}
