export function bmi(weight: number, height: number, unit: 'metric' | 'imperial'): { bmi: number; category: string } {
  const h = unit === 'imperial' ? height * 0.0254 : height / 100
  const w = unit === 'imperial' ? weight * 0.453592 : weight
  const bmi = w / (h * h)
  let category = ''
  if (bmi < 18.5) category = 'Underweight'
  else if (bmi < 25) category = 'Normal weight'
  else if (bmi < 30) category = 'Overweight'
  else category = 'Obese'
  return { bmi, category }
}

export function bmrMifflinStJeor(weight: number, height: number, age: number, gender: 'male' | 'female'): number {
  return gender === 'male'
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161
}

export function tdee(bmr: number, activityLevel: string): number {
  const multipliers: Record<string, number> = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    extra: 1.9,
  }
  return bmr * (multipliers[activityLevel] || 1.2)
}

export function bodyFatNavy(weight: number, height: number, neck: number, waist: number, gender: 'male' | 'female', hip?: number): number {
  if (gender === 'male') {
    return 86.01 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76
  }
  return 163.205 * Math.log10(waist + (hip || 0) - neck) - 97.684 * Math.log10(height) - 78.387
}

export function proteinRange(weight: number, activityLevel: 'sedentary' | 'moderate' | 'active'): { min: number; max: number } {
  const multipliers: Record<string, [number, number]> = {
    sedentary: [0.8, 1.0],
    moderate: [1.2, 1.6],
    active: [1.6, 2.2],
  }
  const [min, max] = multipliers[activityLevel]
  return { min: Math.round(weight * min), max: Math.round(weight * max) }
}

export function periodPrediction(lastPeriodStart: string, cycleLength: number, periodLength: number): { nextStart: Date; nextEnd: Date; ovulation: Date } {
  const start = new Date(lastPeriodStart)
  const nextStart = new Date(start)
  nextStart.setDate(nextStart.getDate() + cycleLength)
  const nextEnd = new Date(nextStart)
  nextEnd.setDate(nextEnd.getDate() + periodLength - 1)
  const ovulation = new Date(nextStart)
  ovulation.setDate(ovulation.getDate() - 14)
  return { nextStart, nextEnd, ovulation }
}

export function ovulationPrediction(lastPeriodStart: string, cycleLength: number, lutealPhase: number): { ovulation: Date; fertileStart: Date; fertileEnd: Date; nextPeriod: Date } {
  const start = new Date(lastPeriodStart)
  const nextPeriod = new Date(start)
  nextPeriod.setDate(nextPeriod.getDate() + cycleLength)
  const ovulation = new Date(nextPeriod)
  ovulation.setDate(ovulation.getDate() - lutealPhase)
  const fertileStart = new Date(ovulation)
  fertileStart.setDate(fertileStart.getDate() - 5)
  const fertileEnd = new Date(ovulation)
  fertileEnd.setDate(fertileEnd.getDate() + 1)
  return { ovulation, fertileStart, fertileEnd, nextPeriod }
}
