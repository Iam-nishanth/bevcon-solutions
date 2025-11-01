import { BrandData } from './product-types'

export interface PulleyOverview {
  slug: string
  title: string
  heading: string
  description: string
  images: string[]
  keyFeatures: string[]
  designSpecifications: {
    title: string
    description: string
    points: string[]
  }[]
  laggingTypes: {
    title: string
    description: string
  }[]
  qualityAssurance: string[]
}

export const pulleyOverview: PulleyOverview = {
  slug: 'pulleys',
  title: 'Conveyor Pulleys',
  heading: 'Engineered Pulleys for Superior Performance and Longevity',
  description: `Spareng's conveyor pulleys are precision-engineered to meet the demanding requirements of modern material handling systems. Our pulleys are designed considering all critical factors including belt tension, drive torque, and deflection to ensure optimal performance and extended service life.

We manufacture both Turbine and T-Bottom pulley configurations, each optimized for specific applications and duty requirements. Our pulleys feature removable shafts for easy maintenance, and can be supplied with various lagging options to suit your operational needs.

Using advanced 3D design software, integrated FEA analysis, and decades of design experience, we deliver pulleys that meet international standards while exceeding customer expectations. Every pulley undergoes comprehensive quality checks including weld verification and material certification.`,
  images: [
    '/images/pulleys/Pulley-1.jpg',
    '/images/pulleys/Pulley-2.jpg',
  ],
  keyFeatures: [
    'Removable shaft design for easy maintenance',
    'Advanced 3D CAD design with FEA analysis',
    'Precision-welded construction using robotic systems',
    'Available in Turbine and T-Bottom configurations',
    'Various lagging options available',
    'Fully certified materials and components',
    'Comprehensive quality documentation',
    'International standard compliance',
  ],
  designSpecifications: [
    {
      title: 'Shaft Design',
      description: 'Our shaft design considers three main factors for optimal performance',
      points: [
        'Bending stress from belt tensions',
        'Torsional stress from drive unit',
        'Deflection analysis and control',
        'Material stress limits and safety factors',
        'Shaft diameter optimization for application'
      ]
    },
    {
      title: 'Pulley Diameter Selection',
      description: 'Pulley diameter is determined by multiple factors to ensure proper operation',
      points: [
        'Belt class and rating requirements',
        'Required shaft diameter',
        'Minimum 3:1 ratio (pulley to shaft diameter)',
        'Operational speed requirements',
        'Drive configuration compatibility'
      ]
    },
    {
      title: 'Pulley Types',
      description: 'We offer two main pulley configurations for different duty requirements',
      points: [
        'Turbine Pulley: Ideal for low to medium duty with flex hub design',
        'T-Bottom Pulley: Heavy-duty applications (200mm+ shaft diameter)',
        'Face-welded construction for high-stress areas',
        'Removable shaft on both designs',
        'Custom configurations available'
      ]
    },
    {
      title: 'Crowning Options',
      description: 'Pulley crowning for improved belt tracking',
      points: [
        'Full Crown: 1:100 ratio from centerline',
        'Strip Crown: Crown on first and last third (1:100 ratio)',
        'Custom crowning on request',
        'Computer-verified crown profiles'
      ]
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
  ],
  qualityAssurance: [
    'Fully integrated ISO Quality Management System',
    'All materials fully certified and traceable',
    'Weld verification using UT, MPI, or X-ray',
    'Comprehensive data book for each pulley',
    'Advanced SolidWorks 3D design software',
    'Integrated FEA (Finite Element Analysis)',
    'Decades of proven design experience',
    'Full dimensional inspection before dispatch'
  ]
}

export const pulleyOverviewData: BrandData = {
  brand: 'Spareng Incorporated',
  description: 'Manufacturer of precision-engineered conveyor pulleys with advanced design capabilities and comprehensive quality assurance.',
  website: 'https://bevconwayors.in',
  products: [] // Products are in conveyor-parts.ts
}
