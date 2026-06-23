export function formatNumber(n: number, decimals = 2): string {
  return n.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

export function formatCurrency(n: number): string {
  return n.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export function validateInputs(values: Record<string, number>, required: string[]): string | null {
  for (const key of required) {
    if (values[key] === undefined || values[key] === null || isNaN(values[key])) {
      return `${key} is required`
    }
    if (values[key] < 0) return `${key} cannot be negative`
  }
  return null
}
