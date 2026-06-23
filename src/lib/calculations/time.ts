export function timeDifference(startTime: string, endTime: string): { hours: number; minutes: number; totalMinutes: number } {
  const [sh, sm] = startTime.split(':').map(Number)
  const [eh, em] = endTime.split(':').map(Number)
  let total = (eh * 60 + em) - (sh * 60 + sm)
  if (total < 0) total += 24 * 60
  return { hours: Math.floor(total / 60), minutes: total % 60, totalMinutes: total }
}

export function weeklyHours(entries: { start: string; end: string; breakMinutes: number }[]): { dailyHours: number[]; totalHours: number; totalMinutes: number } {
  const dailyHours = entries.map(e => {
    const diff = timeDifference(e.start, e.end)
    return Math.max(0, diff.totalMinutes - e.breakMinutes) / 60
  })
  const totalMinutes = dailyHours.reduce((s, h) => s + h * 60, 0)
  return { dailyHours, totalHours: totalMinutes / 60, totalMinutes }
}

export function overtimeCalc(regularHours: number, overtimeHours: number, hourlyRate: number, overtimeMultiplier: number): { regularPay: number; overtimePay: number; totalPay: number } {
  const regularPay = regularHours * hourlyRate
  const overtimePay = overtimeHours * hourlyRate * overtimeMultiplier
  return { regularPay, overtimePay, totalPay: regularPay + overtimePay }
}

export function hourlyToSalary(hourlyRate: number, hoursPerWeek: number, weeksPerYear: number): { annual: number; monthly: number; weekly: number } {
  const annual = hourlyRate * hoursPerWeek * weeksPerYear
  return { annual, monthly: annual / 12, weekly: hourlyRate * hoursPerWeek }
}

export function salaryToHourly(salary: number, hoursPerWeek: number, weeksPerYear: number): number {
  return salary / (hoursPerWeek * weeksPerYear)
}

export function grossPay(hourlyRate: number, hours: number, overtimeHours: number, overtimeMultiplier: number): { regular: number; overtime: number; total: number } {
  const regular = hourlyRate * Math.min(hours, 40)
  const over = hourlyRate * Math.max(0, hours - 40) * 1.5
  const ot = overtimeHours * hourlyRate * overtimeMultiplier
  return { regular, overtime: Math.max(over, ot), total: regular + Math.max(over, ot) }
}

export function mileage(distance: number, fuelUsed: number): { mpg: number; kmPerLiter: number } {
  const mpg = fuelUsed > 0 ? distance / fuelUsed : 0
  return { mpg, kmPerLiter: mpg * 0.425144 }
}
