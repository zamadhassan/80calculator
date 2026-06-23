import type { DisclaimerType } from '@/types/calculator'

const disclaimers: Record<string, string> = {
  health: 'This calculator provides estimates only and is not medical advice. Results can vary based on individual health, lifestyle, medication, cycle regularity, and other factors. Consult a qualified healthcare professional for medical guidance.',
  finance: 'This calculator provides estimates only. Actual loan payments, APR, interest, fees, taxes and terms may vary by lender, country, credit profile and market conditions. Verify with a qualified financial professional or lender.',
  construction: 'Material estimates are approximate. Actual quantities may vary due to waste, site conditions, design changes, material dimensions, labor methods and local pricing. Always verify with a qualified contractor or supplier before purchasing materials.',
  period: 'This period/ovulation calculator estimates dates based on the information you provide. It does not guarantee pregnancy, fertility, ovulation timing, or menstrual cycle accuracy and should not be used as birth control.',
}

export default function Disclaimer({ type }: { type: DisclaimerType }) {
  const text = type === 'period' ? disclaimers.period
    : type === 'health' ? disclaimers.health
    : type === 'finance' ? disclaimers.finance
    : type === 'construction' ? disclaimers.construction
    : null

  if (!text) return null

  return (
    <div className="mt-8 rounded-xl border border-white/10 bg-brand-dark-2 p-4 text-sm text-white/50">
      <strong className="text-white/70">Disclaimer:</strong> {text}
    </div>
  )
}
