import { BrandData } from './product-types'

export interface DustExtractionEquipmentOverview {
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
  systemTypes: {
    title: string
    description: string
  }[]
}

export const dustExtractionEquipmentOverview: DustExtractionEquipmentOverview = {
  slug: 'dust-extraction-equipment',
  title: 'Dust Extraction Equipment',
  heading: 'Industrial Dust Collection & Air Filtration Systems',
  description: `Our industrial dust extraction equipment provides comprehensive solutions for capturing and removing airborne dust particles from material handling and processing operations. Designed to enhance workplace safety, ensure regulatory compliance, and protect equipment from dust accumulation, these systems feature high-efficiency filtration, powerful extraction capabilities, and robust construction for continuous operation. From transfer points and loading zones to complete plant-wide extraction networks, our dust collection systems maintain clean air quality while reducing environmental impact and protecting worker health in demanding industrial environments.

Meeting Australia's strict WorkSafe regulations and environmental standards, our dust extraction systems help operations maintain compliance while protecting workers and surrounding communities from airborne particulate exposure.`,
  images: [],
  keyFeatures: [
    'High efficiency dust capture at source',
    'Multi stage filtration systems',
    'Explosion proof designs for combustible dust',
    'Automated cleaning mechanisms',
    'Low pressure drop for energy efficiency',
    'Modular and scalable configurations',
    'Continuous duty cycle capability',
    'Easy maintenance and filter replacement',
  ],
  applications: [
    {
      title: 'Conveyor Transfer Points',
      description: 'Dust extraction at belt to belt transfers, loading chutes, and discharge points in bulk handling systems'
    },
    {
      title: 'Crushing & Screening',
      description: 'Dust control for crushers, screens, and aggregate processing equipment in mining and quarrying operations'
    },
    {
      title: 'Loading & Unloading',
      description: 'Extraction systems for truck loading bays, railcar loading, and ship loading operations'
    },
    {
      title: 'Cement & Minerals',
      description: 'Dust collection in cement plants, lime kilns, and mineral processing facilities'
    },
    {
      title: 'Woodworking & Sawmills',
      description: 'Sawdust and wood particle extraction from cutting, sanding, and processing operations'
    },
    // {
    //   title: 'Metalworking & Foundries',
    //   description: 'Metal dust and fume extraction from grinding, cutting, and casting processes'
    // }
  ],
  systemTypes: [
    {
      title: 'Bag Filter Systems',
      description: 'Fabric filter collectors with pulse jet cleaning for fine dust removal in high volume applications'
    },
    {
      title: 'Cyclone Separators',
      description: 'Centrifugal separation systems for pre cleaning and coarse dust removal before fine filtration'
    },
    {
      title: 'Cartridge Collectors',
      description: 'Compact high efficiency cartridge filters ideal for welding fumes, metal dust, and fine particles'
    },
    {
      title: 'Wet Scrubber Systems',
      description: 'Water based dust suppression for sticky, hot, or explosive dust applications'
    },
    {
      title: 'Mobile Extraction Units',
      description: 'Portable dust collectors for flexible deployment at multiple work stations'
    },
    {
      title: 'Central Vacuum Systems',
      description: 'Plant wide networked extraction systems serving multiple pickup points from centralized collectors'
    }
  ]
}

export const dustExtractionEquipmentOverviewData: BrandData = {
  brand: 'Bevcon Solutions',
  description: 'Comprehensive dust extraction and air filtration solutions for industrial material handling and processing operations.',
  website: 'https://bevconwayors.in',
  products: []
}
