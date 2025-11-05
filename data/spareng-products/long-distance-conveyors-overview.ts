import { BrandData } from './product-types'

export interface LongDistanceConveyorOverview {
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
  technicalCapabilities: {
    title: string
    description: string
  }[]
}

export const longDistanceConveyorOverview: LongDistanceConveyorOverview = {
  slug: 'long-distance-conveyors',
  title: 'Long Distance Conveyors',
  heading: 'Extended Range Material Transport Solutions',
  description: `Our Long Distance Conveyor Systems are engineered to transport bulk materials over extended distances ranging from several hundred meters to multiple kilometers. Utilizing advanced drive configurations, intermediate drives, and optimized belt tension management, these systems ensure efficient, continuous material flow across challenging terrains and elevations. With capabilities to handle thousands of tons per hour over distances exceeding 15 km, our long distance conveyors minimize transfer points, reduce material degradation, and lower overall operational costs compared to traditional multi-stage conveying systems.

Particularly suited for Australia's vast mining and resource sectors, these systems efficiently connect remote extraction sites with processing facilities or port terminals across challenging landscapes. Our designs account for Australia's extreme weather conditions, from intense heat to dust storms, ensuring reliable operation in the harshest environments while meeting all relevant International Standards.`,
  images: [
    '/images/long-distance-conveyor/long-distance-conveyor-1.jpg',
    '/images/long-distance-conveyor/long-distance-conveyor-2.jpg',
    '/images/long-distance-conveyor/long-distance-conveyor-3.jpg',
  ],
  keyFeatures: [
    'Single flight conveyance up to 15+ km',
    'Multiple drive configurations for extended lengths',
    'Advanced belt tension control systems',
    'Minimized transfer points for reduced spillage',
    'Regenerative braking on decline sections',
    'Variable speed drives for efficiency',
    'Robust construction for continuous operation',
    'Low maintenance design for remote locations',
  ],
  applications: [
    {
      title: 'Mining Operations',
      description: 'Long haul transport of ore, coal, and minerals from mine sites to processing facilities or ports'
    },
    {
      title: 'Port & Terminal Facilities',
      description: 'Efficient material transfer from storage yards to ship loading stations over extended distances'
    },
    {
      title: 'Power Plants',
      description: 'Coal and ash handling systems connecting storage areas, boilers, and disposal sites'
    },
    {
      title: 'Cement Plants',
      description: 'Raw material and clinker transport across large plant facilities and quarry operations'
    },
    {
      title: 'Steel Mills',
      description: 'Iron ore, coke, and slag transport throughout integrated steel manufacturing complexes'
    },
    {
      title: 'Overland Conveying',
      description: 'Cross country material transport linking mining sites with processing plants or export terminals'
    }
  ],
  technicalCapabilities: [
    {
      title: 'Multi Drive Systems',
      description: 'Head, tail, and intermediate drives strategically positioned to distribute power and manage belt tension effectively'
    },
    {
      title: 'Curve Negotiation',
      description: 'Horizontal and vertical curves designed to follow terrain contours while maintaining material stability'
    },
    {
      title: 'Energy Efficiency',
      description: 'Optimized power consumption through variable frequency drives and regenerative systems on declining sections'
    },
    {
      title: 'Weather Protection',
      description: 'Enclosed or semi enclosed designs protecting materials and components from environmental conditions'
    }
  ]
}

export const longDistanceConveyorOverviewData: BrandData = {
  brand: 'Bevcon Solutions',
  description: 'Specialized in engineering and implementing long distance conveyor systems for large-scale bulk material transport across challenging terrains.',
  website: 'https://bevconwayors.in',
  products: []
}
