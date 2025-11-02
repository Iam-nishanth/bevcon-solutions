import { BrandData } from './product-types'

export interface DownhillConveyorOverview {
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
  safetyFeatures: {
    title: string
    description: string
  }[]
}

export const downhillConveyorOverview: DownhillConveyorOverview = {
  slug: 'downhill-conveyors',
  title: 'Downhill Conveyors',
  heading: 'Specialized Decline Conveying Systems',
  description: `Our downhill conveyor systems are specifically engineered to transport materials safely and efficiently on declining gradients. Featuring advanced braking systems, controlled descent mechanisms, and specialized belt configurations, these conveyors manage gravitational forces while maintaining material stability and operational safety. With regenerative braking capabilities and energy recovery systems, downhill conveyors can convert potential energy into usable power, significantly reducing overall energy consumption and operational costs in applications involving elevation drops.`,
  images: [
    '/images/placeholders/downhill-conveyor-1.jpg',
    '/images/placeholders/downhill-conveyor-2.jpg',
  ],
  keyFeatures: [
    'Advanced braking and control systems',
    'Regenerative energy recovery capability',
    'Controlled descent mechanism',
    'High-angle conveying up to 30+ degrees',
    'Specialized belt retention systems',
    'Anti-runback devices for safety',
    'Variable speed control for gradient management',
    'Low spillage design for steep angles',
  ],
  applications: [
    {
      title: 'Mining & Quarrying',
      description: 'Material transport from elevated pit levels to lower processing areas or storage facilities'
    },
    {
      title: 'Mountainous Terrain Operations',
      description: 'Conveying materials down slopes in hilly or mountainous regions while maintaining control'
    },
    {
      title: 'Port Unloading Systems',
      description: 'Transferring materials from elevated ship unloaders to ground-level storage or processing areas'
    },
    {
      title: 'Ash Handling Systems',
      description: 'Moving ash from elevated collection points to lower disposal or storage locations in power plants'
    },
    {
      title: 'Aggregate Processing',
      description: 'Controlled descent of crushed stone and aggregates from screening decks to lower production stages'
    },
    {
      title: 'Waste Management',
      description: 'Safe transport of waste materials from elevated sorting facilities to ground-level collection points'
    }
  ],
  safetyFeatures: [
    {
      title: 'Regenerative Braking',
      description: 'Controlled braking system that converts kinetic energy back to electrical power while managing descent speed'
    },
    {
      title: 'Emergency Stop Systems',
      description: 'Immediate stopping capability with fail-safe mechanisms to prevent runaway conditions'
    },
    {
      title: 'Belt Retention Design',
      description: 'Specialized idler configurations and belt patterns preventing material spillage on steep declines'
    },
    {
      title: 'Monitoring Systems',
      description: 'Continuous monitoring of belt speed, tension, and load to ensure safe operating conditions'
    }
  ]
}

export const downhillConveyorOverviewData: BrandData = {
  brand: 'Bevcon Solutions',
  description: 'Engineering specialized downhill conveyor solutions with advanced braking and energy recovery systems for safe material transport on declining gradients.',
  website: 'https://bevconwayors.in',
  products: []
}
