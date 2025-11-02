import { BrandData } from './product-types'

export interface IdlerOverview {
  slug: string
  title: string
  heading: string
  description: string
  images: string[]
  keyFeatures: string[]
  applications: {
    title: string
    description: string
  }[]
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
  description: `Our conveyor idlers are manufactured with precision engineering and stringent quality control from raw material selection through to final production. Each idler is grease-packed for life, ensuring trouble-free operation with minimal maintenance requirements.

With excellent sealing arrangements, our idlers are water and dust-proof, delivering extended service life even in the most severe field conditions. The low friction factor ensures substantial power consumption savings and smooth, efficient operation.

All idlers undergo pre-running in our factory to ensure even grease distribution and minimal starting resistance. Our supporting structural members are precision-manufactured to guarantee the highest quality standards.`,
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
    'Low friction design for power savings',
    'Pre-run in factory for even grease distribution',
    'Premium quality bearings for reliability',
    'Precision-welded construction for structural integrity',
    'Manufactured with tight tolerances',
    'Corrosion-resistant finish for harsh environments',
  ],
  applications: [
    {
      title: 'Mining & Quarrying',
      description: 'Heavy-duty idlers for continuous operation in harsh mining environments with high load capacity'
    },
    {
      title: 'Bulk Material Handling',
      description: 'Efficient handling of aggregates, coal, grain, and other bulk materials in industrial facilities'
    },
    {
      title: 'Manufacturing & Production',
      description: 'Reliable operation in automotive, cement, steel, and general manufacturing plants'
    },
    {
      title: 'Ports & Shipping',
      description: 'Durable idlers for material handling at ports, terminals, and shipping facilities'
    },
    {
      title: 'Power Generation',
      description: 'Designed for thermal power plants, handling coal and ash with minimal downtime'
    },
    {
      title: 'Agriculture & Food Processing',
      description: 'Food-grade options available for grain handling and food processing applications'
    }
  ],
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
