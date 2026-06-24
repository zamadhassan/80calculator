import type { CalculatorConfig } from '@/types/calculator'

export default {
  slug: 'area-calculator',
  title: 'Area Calculator - Calculate Area of Various Shapes',
  metaDescription: 'Free area calculator. Calculate area of rectangles, squares, triangles, circles, and other shapes.',
  h1: 'Area Calculator',
  category: 'Construction & Home',
  intro: 'Calculate the area of rectangles, squares, triangles, and circles.',
  inputs: [
    { id: 'shape', label: 'Shape', type: 'select', defaultValue: 0, options: [
      { value: '0', label: 'Rectangle' }, { value: '1', label: 'Square' }, { value: '2', label: 'Triangle' }, { value: '3', label: 'Circle' },
    ] },
    { id: 'dim1', label: 'Length / Base / Radius', type: 'number', placeholder: '10', min: 0, step: 0.1 },
    { id: 'dim2', label: 'Width / Height (not for circle)', type: 'number', placeholder: '5', min: 0, step: 0.1 },
  ],
  calculate: (vals) => {
    let area = 0
    const shape = Number(vals.shape)
    if (shape === 0) area = vals.dim1 * vals.dim2
    else if (shape === 1) area = vals.dim1 * vals.dim1
    else if (shape === 2) area = 0.5 * vals.dim1 * vals.dim2
    else if (shape === 3) area = Math.PI * vals.dim1 * vals.dim1
    const shapes = ['Rectangle', 'Square', 'Triangle', 'Circle']
    return { shape: shapes[shape], area }
  },
  formula: 'Rectangle: L×W. Square: side². Triangle: ½×base×height. Circle: π×radius².',
  example: { inputs: { shape: 0, dim1: 10, dim2: 5 }, result: 'Shape: Rectangle, Area: 50 sq units' },
  useCases: ['Measure land or room area', 'Calculate material coverage', 'Plan garden or floor layouts'],
  faqs: [
    { q: 'How do I calculate area of an irregular shape?', a: 'Divide it into regular shapes, calculate each area, then add them together.' },
    { q: 'What units does this use?', a: 'Input units are consistent (e.g., feet, meters). Output is in square units of the same measure.' },
  ],
  relatedCalculators: ['square-footage-calculator', 'cubic-yard-calculator', 'acreage-calculator'],
} satisfies CalculatorConfig
