export function margin(cost: number, revenue: number): { marginPercent: number; profit: number; markupPercent: number } {
  const profit = revenue - cost
  const marginPercent = revenue > 0 ? (profit / revenue) * 100 : 0
  const markupPercent = cost > 0 ? (profit / cost) * 100 : 0
  return { marginPercent, profit, markupPercent }
}

export function profitCalc(revenue: number, cost: number, expenses: number, quantity: number): { profit: number; margin: number; costPerUnit: number } {
  const totalCost = cost + expenses
  const profit = (revenue - totalCost) * quantity
  const margin = revenue > 0 ? ((revenue - totalCost) / revenue) * 100 : 0
  const costPerUnit = quantity > 0 ? totalCost / quantity : 0
  return { profit, margin, costPerUnit }
}

export function discount(originalPrice: number, discountPercent: number, taxPercent?: number): { discountAmount: number; finalPrice: number; savings: number } {
  const discountAmount = originalPrice * (discountPercent / 100)
  const afterDiscount = originalPrice - discountAmount
  const tax = taxPercent ? afterDiscount * (taxPercent / 100) : 0
  return { discountAmount, finalPrice: afterDiscount + tax, savings: discountAmount }
}

export function roi(investment: number, returns: number): { roiPercent: number; netReturn: number } {
  const netReturn = returns - investment
  const roiPercent = investment > 0 ? (netReturn / investment) * 100 : 0
  return { roiPercent, netReturn }
}

export function ltv(aov: number, frequency: number, lifespan: number): number {
  return aov * frequency * lifespan
}

export function cac(cost: number, customers: number): number {
  return customers > 0 ? cost / customers : 0
}

export function breakEven(fixedCosts: number, variableCostPerUnit: number, pricePerUnit: number): { units: number; revenue: number } {
  const contribution = pricePerUnit - variableCostPerUnit
  const units = contribution > 0 ? Math.ceil(fixedCosts / contribution) : Infinity
  return { units, revenue: units * pricePerUnit }
}

export function markup(cost: number, sellingPrice?: number, markupPercent?: number): { markupPercent: number; sellingPrice: number; profit: number } {
  if (sellingPrice !== undefined) {
    const profit = sellingPrice - cost
    const markupPercent = cost > 0 ? (profit / cost) * 100 : 0
    return { markupPercent, sellingPrice, profit }
  }
  const pct = markupPercent || 0
  const sp = cost * (1 + pct / 100)
  return { markupPercent: pct, sellingPrice: sp, profit: sp - cost }
}

export function fuelCost(distance: number, efficiency: number, fuelPrice: number, unit: 'mpg' | 'l100km'): { fuelNeeded: number; totalCost: number } {
  const fuelNeeded = unit === 'mpg' ? distance / efficiency : (distance / 100) * efficiency
  return { fuelNeeded, totalCost: fuelNeeded * fuelPrice }
}

export function freightClass(weight: number, length: number, width: number, height: number): { cubicFeet: number; density: number; classEstimate: string } {
  const cf = (length * width * height) / 1728
  const density = cf > 0 ? weight / cf : 0
  let classEstimate = 'N/A'
  if (density >= 50) classEstimate = 'Class 50'
  else if (density >= 35) classEstimate = 'Class 55'
  else if (density >= 30) classEstimate = 'Class 60'
  else if (density >= 22.5) classEstimate = 'Class 65'
  else if (density >= 15) classEstimate = 'Class 70'
  else if (density >= 13) classEstimate = 'Class 77.5'
  else if (density >= 12) classEstimate = 'Class 85'
  else if (density >= 10.5) classEstimate = 'Class 92.5'
  else if (density >= 9) classEstimate = 'Class 100'
  else if (density >= 8) classEstimate = 'Class 110'
  else if (density >= 7) classEstimate = 'Class 125'
  else if (density >= 6) classEstimate = 'Class 150'
  else if (density >= 5) classEstimate = 'Class 175'
  else if (density >= 4) classEstimate = 'Class 200'
  else if (density >= 3) classEstimate = 'Class 250'
  else if (density >= 2) classEstimate = 'Class 300'
  else if (density >= 1) classEstimate = 'Class 400'
  else classEstimate = 'Class 500'
  return { cubicFeet: cf, density, classEstimate }
}
