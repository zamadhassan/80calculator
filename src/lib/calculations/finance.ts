export function loanPayment(principal: number, annualRate: number, termMonths: number): { monthlyPayment: number; totalInterest: number; totalRepayment: number } {
  const monthlyRate = annualRate / 100 / 12
  if (monthlyRate === 0) {
    const monthlyPayment = principal / termMonths
    return { monthlyPayment, totalInterest: 0, totalRepayment: principal }
  }
  const factor = Math.pow(1 + monthlyRate, termMonths)
  const monthlyPayment = principal * (monthlyRate * factor) / (factor - 1)
  const totalRepayment = monthlyPayment * termMonths
  return { monthlyPayment, totalInterest: totalRepayment - principal, totalRepayment }
}

export function amortizationSchedule(principal: number, annualRate: number, termMonths: number, startDate?: string): { payment: number; totalInterest: number; schedule: { month: number; payment: number; interest: number; principal: number; balance: number; date?: string }[] } {
  const monthlyRate = annualRate / 100 / 12
  const payment = monthlyRate === 0
    ? principal / termMonths
    : principal * (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / (Math.pow(1 + monthlyRate, termMonths) - 1)
  const schedule: { month: number; payment: number; interest: number; principal: number; balance: number; date?: string }[] = []
  let balance = principal
  let totalInterest = 0
  const start = startDate ? new Date(startDate) : null
  for (let i = 1; i <= termMonths; i++) {
    const interest = balance * monthlyRate
    const principalPaid = payment - interest
    balance -= principalPaid
    totalInterest += interest
    schedule.push({
      month: i,
      payment,
      interest,
      principal: principalPaid,
      balance: Math.max(0, balance),
      date: start ? new Date(start.getFullYear(), start.getMonth() + i, 1).toISOString().slice(0, 7) : undefined,
    })
  }
  return { payment, totalInterest, schedule }
}

export function simpleInterest(principal: number, rate: number, time: number, timeUnit: 'years' | 'months' | 'days'): { interest: number; total: number } {
  const t = timeUnit === 'months' ? time / 12 : timeUnit === 'days' ? time / 365 : time
  const interest = principal * (rate / 100) * t
  return { interest, total: principal + interest }
}

export function compoundInterest(principal: number, rate: number, time: number, compoundPerYear: number, contribution?: number): { futureValue: number; interestEarned: number } {
  const r = rate / 100
  const n = compoundPerYear
  const t = time
  let fv = principal * Math.pow(1 + r / n, n * t)
  if (contribution) {
    fv += contribution * ((Math.pow(1 + r / n, n * t) - 1) / (r / n))
  }
  return { futureValue: fv, interestEarned: fv - principal - (contribution || 0) * n * t }
}

export function aprFromFees(loanAmount: number, fees: number, payment: number, term: number): number {
  const netLoan = loanAmount - fees
  if (netLoan <= 0) return 0
  const guess = 0.1
  const f = (r: number) => {
    let sum = -netLoan
    for (let i = 1; i <= term; i++) {
      sum += payment / Math.pow(1 + r, i)
    }
    return sum
  }
  let low = 0, high = 1
  for (let i = 0; i < 100; i++) {
    const mid = (low + high) / 2
    if (f(mid) > 0) low = mid
    else high = mid
  }
  return (low + high) / 2 * 12 * 100
}

export function apy(rate: number, compoundPerYear: number): number {
  return (Math.pow(1 + (rate / 100) / compoundPerYear, compoundPerYear) - 1) * 100
}

export function cagr(beginValue: number, endValue: number, years: number): number {
  return (Math.pow(endValue / beginValue, 1 / years) - 1) * 100
}

export function npv(discountRate: number, initialInvestment: number, cashflows: number[]): number {
  const r = discountRate / 100
  let npv = -initialInvestment
  for (let t = 0; t < cashflows.length; t++) {
    npv += cashflows[t] / Math.pow(1 + r, t + 1)
  }
  return npv
}

export function irr(cashflows: number[]): number {
  const f = (r: number) => cashflows.reduce((sum, cf, t) => sum + cf / Math.pow(1 + r, t), 0)
  let low = -0.99, high = 10
  for (let i = 0; i < 1000; i++) {
    const mid = (low + high) / 2
    if (f(mid) * f(low) > 0) low = mid
    else high = mid
  }
  return (low + high) / 2 * 100
}

export function futureValue(presentValue: number, rate: number, periods: number, contribution?: number): number {
  const r = rate / 100
  let fv = presentValue * Math.pow(1 + r, periods)
  if (contribution) {
    fv += contribution * ((Math.pow(1 + r, periods) - 1) / r)
  }
  return fv
}

export function presentValue(futureValue: number, rate: number, periods: number): number {
  return futureValue / Math.pow(1 + rate / 100, periods)
}

export function creditCardPayoff(balance: number, apr: number, monthlyPayment: number): { months: number; totalInterest: number; finalPayment: number } {
  const monthlyRate = apr / 100 / 12
  let bal = balance
  let months = 0
  let totalInterest = 0
  while (bal > 0 && months < 600) {
    const interest = bal * monthlyRate
    const principal = Math.min(monthlyPayment - interest, bal)
    bal -= principal
    totalInterest += interest
    months++
    if (bal <= 0) break
  }
  return { months, totalInterest, finalPayment: monthlyPayment }
}
