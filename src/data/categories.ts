import type { CategoryConfig } from '@/types/calculator'

export const categories: CategoryConfig[] = [
  { slug: 'construction-calculators', name: 'Construction & Home', description: 'Estimate materials, area, volume, and costs for construction and home improvement projects.', icon: '🏗️' },
  { slug: 'business-calculators', name: 'Business, Profit & Ecommerce', description: 'Calculate margins, profit, ROI, and other business metrics.', icon: '💼' },
  { slug: 'finance-calculators', name: 'Finance, Loan & Investment', description: 'Plan loans, investments, and understand your finances.', icon: '💰' },
  { slug: 'work-time-calculators', name: 'Work, Time & Payroll', description: 'Track work hours, calculate pay, and manage time.', icon: '⏰' },
  { slug: 'health-calculators', name: 'Health, Fitness & Cycle', description: 'Track health metrics, fitness goals, and menstrual cycles.', icon: '❤️' },
  { slug: 'date-calculators', name: 'Date & Age Calculators', description: 'Calculate dates, ages, and time differences.', icon: '📅' },
  { slug: 'math-calculators', name: 'Math & Conversion Calculators', description: 'Quick math and unit conversion tools.', icon: '🔢' },
]

export const categoryBySlug: Record<string, CategoryConfig> = {}
for (const cat of categories) {
  categoryBySlug[cat.slug] = cat
}
