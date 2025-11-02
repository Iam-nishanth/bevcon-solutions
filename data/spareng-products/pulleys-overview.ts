import { BrandData } from './product-types'

export interface PulleyOverview {
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
  laggingTypes: {
    title: string
    description: string
  }[]
}

export const pulleyOverview: PulleyOverview = {
  slug: 'pulleys',
  title: 'Conveyor Pulleys',
  heading: 'Engineered Pulleys for Superior Performance and Longevity',
  description: `Our conveyor pulleys are precision-engineered to meet the demanding requirements of modern material handling systems. Each pulley is designed considering all critical factors including belt tension, drive torque, and deflection to ensure optimal performance and extended service life.

We manufacture both Turbine and T-Bottom pulley configurations, each optimized for specific applications and duty requirements. Shaft design considers bending stress from belt tensions, torsional stress from drive units, and deflection control. Pulley diameter is determined by belt class, shaft diameter requirements, and operational speed, maintaining a minimum 3:1 ratio (pulley to shaft diameter) for optimal performance.

Our pulleys feature removable shafts for easy maintenance and can be supplied with various lagging options to suit your operational needs. With decades of design experience and rigorous testing, we deliver pulleys that meet international standards while exceeding customer expectations.`,
  images: [
    '/images/pulleys/Pulley-1.jpg',
    '/images/pulleys/Pulley-2.jpg',
  ],
  keyFeatures: [
    'Removable shaft design for easy maintenance',
    'Precision-engineered construction',
    'Available in Turbine and T-Bottom configurations',
    'Various lagging options available',
    'Fully certified materials and components',
    'Complete quality documentation',
    'International standard compliance',
    'Long service life with minimal maintenance',
  ],
  applications: [
    {
      title: 'Mining & Quarrying',
      description: 'Heavy-duty pulleys for continuous operation in demanding mining environments'
    },
    {
      title: 'Bulk Material Handling',
      description: 'Reliable pulley systems for handling coal, aggregates, and industrial materials'
    },
    {
      title: 'Port & Terminal Operations',
      description: 'Corrosion-resistant pulleys designed for marine and coastal environments'
    },
    {
      title: 'Power Generation',
      description: 'High-performance pulleys for thermal power plants and coal handling systems'
    },
    {
      title: 'Cement & Steel Industries',
      description: 'Robust pulleys engineered for extreme temperatures and abrasive materials'
    },
    {
      title: 'Manufacturing & Processing',
      description: 'Precision pulleys for automotive, food processing, and general manufacturing'
    }
  ],
  laggingTypes: [
    {
      title: 'Rubber Lagging',
      description: 'Standard rubber lagging for general applications with excellent traction and wear resistance'
    },
    {
      title: 'Ceramic Lagging',
      description: 'Direct bond or rubber-backed ceramic for extreme wear environments and high-temperature applications'
    },
    {
      title: 'Polyurethane Lagging',
      description: 'Superior wear resistance and chemical compatibility for specialized applications'
    },
    {
      title: 'Flame-Proof Lagging',
      description: 'Neoprene-based lagging for mining and hazardous environments requiring fire-resistant materials'
    }
  ]
}

export const pulleyOverviewData: BrandData = {
  brand: 'Spareng Incorporated',
  description: 'Manufacturer of precision-engineered conveyor pulleys with advanced design capabilities and comprehensive quality assurance.',
  website: 'https://bevconwayors.in',
  products: [] // Products are in conveyor-parts.ts
}
