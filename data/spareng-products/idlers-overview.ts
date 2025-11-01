import { BrandData } from './product-types'

export interface IdlerOverview {
  slug: string
  title: string
  heading: string
  description: string
  images: string[]
  keyFeatures: string[]
  technicalAdvantages: {
    title: string
    items: string[]
  }
  types: {
    title: string
    description: string
    applications: string[]
  }[]
}

export const idlerOverview: IdlerOverview = {
  slug: 'idlers',
  title: 'Conveyor Idlers',
  heading: 'Precision-Engineered Idlers for Maximum Conveyor Efficiency',
  description: `Spareng's conveyor idlers are manufactured with precision engineering and stringent quality control from raw material selection through to final production. Our idlers are grease-packed for life, ensuring trouble-free operation with minimal maintenance requirements.

With excellent sealing arrangements, our idlers are water and dust-proof, delivering extended service life even in the most severe field conditions. The low friction factor ensures substantial power consumption savings and smooth, efficient operation.

All idlers undergo pre-running in our factory to ensure even grease distribution and minimal starting resistance. Our supporting structural members are manufactured using advanced machinery and robotic welding to guarantee the highest quality standards.`,
  images: [
    '/images/idlers/Idler-1.jpg',
    '/images/idlers/Idler-2.jpg',
    '/images/idlers/Idler-3.jpg',
    '/images/idlers/Idler-4.jpg',
    '/images/idlers/Idler-5.jpg',
    '/images/idlers/Idler-6.jpg',
    '/images/idlers/Idler-7.jpg',
    '/images/idlers/Idler-8.jpg',
  ],
  keyFeatures: [
    'Grease-packed for life - minimal maintenance required',
    'Water and dust-proof sealing for extended life',
    'Low friction factor (<0.008 - 0.015) for power savings',
    'Pre-run in factory for even grease distribution',
    'Premium quality bearings (SKF, FAG & NTN)',
    'Advanced robotic welding for structural integrity',
    'Precision manufactured with tight tolerances',
    'Corrosion-resistant finish for harsh environments',
  ],
  technicalAdvantages: {
    title: 'Technical Specifications',
    items: [
      'Low friction factor: <0.008 - 0.015',
      'Diametrical run-out: <0.8mm',
      'Break-away mass: <250g',
      'Low axial play for smooth operation',
      'Effective sealing - water & dust proof',
      'Quality bearings: SKF, FAG & NTN',
      'Documented Quality Management System',
      'High precision engineering standards',
    ]
  },
  types: [
    {
      title: 'Carrying Idlers',
      description: 'Support the loaded belt and material, designed for heavy-duty applications with precision-balanced rollers.',
      applications: [
        'Belt conveyor support systems',
        'Mining operations',
        'Bulk material handling',
        'Industrial manufacturing'
      ]
    },
    {
      title: 'Impact Idlers',
      description: 'Specially designed with rubber rings to absorb shock at loading points, protecting the belt and extending system life.',
      applications: [
        'Loading zones',
        'Transfer points',
        'High-impact areas',
        'Mining applications'
      ]
    },
    {
      title: 'Return Idlers',
      description: 'Support the return belt, featuring self-cleaning design and low friction bearings for optimal performance.',
      applications: [
        'Return belt support',
        'Belt cleaning systems',
        'Continuous operation environments',
        'Industrial conveyors'
      ]
    },
    // {
    //   title: 'Guide Idlers',
    //   description: 'Prevent belt misalignment and ensure proper tracking through curved sections and complex conveyor paths.',
    //   applications: [
    //     'Curved conveyor sections',
    //     'Belt tracking systems',
    //     'Misalignment prevention',
    //     'Complex conveyor layouts'
    //   ]
    // }
  ]
}

export const idlerOverviewData: BrandData = {
  brand: 'Spareng Incorporated',
  description: 'Manufacturer of precision-engineered conveyor idlers with advanced manufacturing capabilities and rigorous quality control.',
  website: 'https://bevconwayors.in',
  products: [] // Products are in conveyor-parts.ts
}
