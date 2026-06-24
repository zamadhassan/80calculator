import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'number-base-converter',
  title: 'Number Base Converter - Convert Binary, Hex, Octal, Decimal',
  metaDescription: 'Free number base converter. Convert numbers between binary, hexadecimal, octal, and decimal numbering systems.',
  h1: 'Number Base Converter',
  category: 'Math & Conversion Calculators',
  intro: 'Convert numbers between binary (base-2), hexadecimal (base-16), octal (base-8), and decimal (base-10).',
  inputs: [
    { id: 'value', label: 'Number Value', type: 'number', placeholder: '255', min: 0, step: 1 },
    { id: 'fromBase', label: 'From Base', type: 'select', defaultValue: 0, options: [
      { value: '0', label: 'Decimal (Base 10)' }, { value: '1', label: 'Binary (Base 2)' },
      { value: '2', label: 'Octal (Base 8)' }, { value: '3', label: 'Hexadecimal (Base 16)' },
    ] },
  ],
  calculate: (vals) => {
    const bases = [10, 2, 8, 16]
    const base = bases[vals.fromBase]
    const decimal = parseInt(String(Math.round(vals.value)), base)
    if (isNaN(decimal)) return { decimal: 0, binary: 'Invalid input', octal: 'Invalid input', hexadecimal: 'Invalid input' }
    return {
      decimal,
      binary: decimal.toString(2),
      octal: decimal.toString(8),
      hexadecimal: decimal.toString(16).toUpperCase(),
    }
  },
  formula: 'Decimal → Binary: repeated division by 2. Hex: base-16 using 0-9 and A-F. Octal: base-8 using 0-7.',
  example: { inputs: { value: 255, fromBase: 0 }, result: 'Decimal: 255, Binary: 11111111, Octal: 377, Hex: FF' },
  useCases: ['Convert IP addresses and subnet masks', 'Work with color codes in web design (hex)', 'Program low-level system operations', 'Understand computer memory addresses'],
  faqs: [
    { q: 'Why is binary used in computers?', a: 'Binary (base-2) uses only two digits (0 and 1), which maps directly to transistor states (on/off). This makes it the natural numbering system for all digital electronics and computers.' },
    { q: 'What is hexadecimal used for?', a: 'Hexadecimal (base-16) is used extensively in programming for color codes (#FF0000), memory addresses, MAC addresses, and representing binary data in a more human-readable format.' },
    { q: 'How do I convert binary to decimal manually?', a: 'Starting from the right, multiply each digit by 2 raised to its position (0-indexed), then sum. For example, 1011 = (1×8)+(0×4)+(1×2)+(1×1) = 11.' },
    { q: 'What is the largest number I can convert?', a: 'This converter handles any positive integer up to 9,007,199,254,740,991 (the maximum safe integer in JavaScript). Larger values may lose precision.' },
    { q: 'Why does octal rarely appear in modern computing?', a: 'Octal was popular in older computing systems (like Unix file permissions: chmod 755). Modern systems increasingly use hexadecimal, which aligns better with 8-bit and 16-bit byte boundaries.' },
  ],
  relatedCalculators: ['percentage-calculator', 'length-converter', 'temperature-converter'],
} satisfies CalculatorConfig
