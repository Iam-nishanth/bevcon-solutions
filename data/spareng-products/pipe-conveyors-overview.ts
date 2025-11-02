import { BrandData } from './product-types'

export interface PipeConveyorOverview {
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
  advantages: {
    title: string
    description: string
  }[]
}

export const pipeConveyorOverview: PipeConveyorOverview = {
  slug: 'pipe-conveyors',
  title: 'Pipe Conveyors',
  heading: 'Enclosed Belt Conveying Technology',
  description: `Our pipe conveyor systems utilize advanced enclosed belt technology where the conveyor belt forms a complete pipe or tube shape, fully containing the material being transported. This innovative design provides superior environmental protection, prevents material spillage, and enables complex routing with horizontal curves and steep inclines. Ideal for environmentally sensitive applications, pipe conveyors eliminate dust emissions, protect materials from weather exposure, and allow conveyors to navigate through urban areas, over roads, and around obstacles while maintaining complete material containment throughout the conveying path.`,
  images: [
    '/images/pipe-conveyor/pipe-conveyor-1.jpg',
    '/images/pipe-conveyor/pipe-conveyor-2.jpg',
    '/images/pipe-conveyor/pipe-conveyor-3.jpg',
    '/images/pipe-conveyor/pipe-conveyor-4.jpg',
    '/images/pipe-conveyor/pipe-conveyor-5.jpg',
  ],
  keyFeatures: [
    'Complete material enclosure - zero spillage',
    'Tight horizontal curves (radius down to 400m)',
    'Steep incline capability up to 30+ degrees',
    'Dust-free operation with no emissions',
    'Weather-proof material protection',
    'Reduced environmental footprint',
    'Space-efficient routing flexibility',
    'Low maintenance sealed design',
  ],
  applications: [
    {
      title: 'Mining & Mineral Processing',
      description: 'Environmentally compliant transport of ores and concentrates through sensitive areas and urban zones'
    },
    {
      title: 'Port Terminals',
      description: 'Dust-free handling of coal, grain, and bulk materials in port facilities near populated areas'
    },
    {
      title: 'Power Generation',
      description: 'Enclosed coal and biomass transport preventing dust emissions in power plant facilities'
    },
    {
      title: 'Cement & Limestone',
      description: 'Sealed transport of cement and limestone protecting materials from moisture and preventing dust pollution'
    },
    {
      title: 'Fertilizer Plants',
      description: 'Contained handling of granular fertilizers and chemicals with zero environmental exposure'
    },
    {
      title: 'Food & Agriculture',
      description: 'Hygienic enclosed transport of grains, seeds, and food products with contamination protection'
    }
  ],
  advantages: [
    {
      title: 'Environmental Compliance',
      description: 'Zero dust emissions and complete material containment meeting strict environmental regulations'
    },
    {
      title: 'Flexible Routing',
      description: 'Navigate complex layouts with horizontal curves and vertical transitions impossible with conventional conveyors'
    },
    {
      title: 'Material Protection',
      description: 'Complete weather shielding protects materials from rain, wind, sun, and temperature variations'
    },
    {
      title: 'Reduced Land Use',
      description: 'Compact routing and ability to cross over obstacles minimizes land acquisition and infrastructure costs'
    }
  ]
}

export const pipeConveyorOverviewData: BrandData = {
  brand: 'Bevcon Solutions',
  description: 'Delivering advanced pipe conveyor systems for environmentally sensitive applications requiring complete material containment and flexible routing.',
  website: 'https://bevconwayors.in',
  products: []
}
