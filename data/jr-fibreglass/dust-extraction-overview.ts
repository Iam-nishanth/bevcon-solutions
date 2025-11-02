export interface DustExtractionOverview {
  slug: string
  title: string
  heading: string
  description: string
  images: string[]
  companyInfo: {
    name: string
    established: string
    location: string
    highlights: string[]
  }
  keyFeatures: string[]
  productTypes: {
    title: string
    description: string
    applications: string[]
  }[]
  extractionTypes: {
    name: string
    description: string
  }[]
  industries: string[]
}

export const dustExtractionOverview: DustExtractionOverview = {
  slug: 'dust-extraction-systems',
  title: 'Dust Extraction Systems',
  heading: 'Industrial Dust Collection & Extraction Solutions',
  description: `JR Fibreglass Industries provides specialized dust extraction systems integrated with our air pollution control solutions for chemical, pharmaceutical, and process industries. With over 50 years of expertise, we design and manufacture FRP-based extraction systems that handle corrosive and toxic dust from industrial processes.

Our dust extraction systems are specifically engineered for chemical powder handling, pharmaceutical production, battery manufacturing, and industrial processes where corrosion resistance and reliability are critical. All systems feature FRP/GRP construction for maximum chemical resistance and long service life.

These extraction systems work seamlessly with our scrubbing technology to provide complete air pollution control, ensuring worker safety, environmental compliance, and optimal process efficiency in demanding industrial applications.`,
  images: [
    '/images/jr-fibreglass/frp_demisters.jpg',
    '/images/jr-fibreglass/frp_fan_duct_system.jpg',
    '/images/jr-fibreglass/high_pressure_frp_fan.jpg',
    '/images/jr-fibreglass/ultra_high_volume_frp_fan.jpg',
  ],
  companyInfo: {
    name: 'JR Fibreglass Industries Pvt. Ltd.',
    established: '50+ Years of Excellence',
    location: 'Mumbai, India',
    highlights: [
      'Over 50 years of specialized experience',
      'Custom-designed extraction systems',
      'In-house manufacturing and testing',
      'ISO certified quality management',
      'Comprehensive installation support',
      'Proven performance across industries'
    ]
  },
  keyFeatures: [
    'FRP/GRP construction for corrosive dust handling',
    'Integrated with scrubbing systems for complete control',
    'Custom-designed for toxic and chemical dust',
    'High-efficiency capture of fine particulates',
    'Suitable for full vacuum to positive pressure',
    'Chemical-resistant materials and coatings',
    'Seamless integration with process equipment',
    'Compliance with industrial safety standards',
  ],
  productTypes: [
    {
      title: 'Chemical & Pharmaceutical Dust Control',
      description: 'FRP-based extraction systems for handling toxic and corrosive chemical dust, pharmaceutical powders, and active ingredients with complete containment and safety.',
      applications: [
        'Chemical powder processing',
        'Pharmaceutical tablet production',
        'Active ingredient handling',
        'Chemical reactor dust control',
        'Pigment and dye manufacturing',
        'Pesticide formulation'
      ]
    },
    {
      title: 'Battery & Fertilizer Manufacturing',
      description: 'Specialized extraction for corrosive dust from battery manufacturing processes and fertilizer production requiring acid-resistant materials.',
      applications: [
        'Lead-acid battery manufacturing',
        'Lithium battery production',
        'Fertilizer granulation',
        'Phosphate processing',
        'Sulphur dust handling',
        'Ammonia-based processes'
      ]
    },
    {
      title: 'Metal Processing & Surface Treatment',
      description: 'Corrosion-resistant systems for capturing metal oxide dust, acid mists, and particulates from electroplating and surface treatment operations.',
      applications: [
        'Electroplating facilities',
        'Pickling line dust control',
        'Galvanizing operations',
        'Anodizing processes',
        'Metal finishing',
        'Chrome plating'
      ]
    },
    {
      title: 'Process Industries Integration',
      description: 'Integrated dust extraction systems working with scrubbers and process equipment for complete air pollution control in industrial facilities.',
      applications: [
        'Chemical reactors',
        'Dryers and calciners',
        'Mixing and blending stations',
        'Material handling points',
        'Bag filling operations',
        'Conveyor transfer points'
      ]
    }
  ],
  extractionTypes: [
    {
      name: 'FRP Ducting & Hood Systems',
      description: 'Corrosion-resistant FRP duct networks with extraction hoods for capturing dust at source in chemical processes'
    },
    {
      name: 'Integrated Scrubber-Extractor Systems',
      description: 'Combined dust extraction and gas scrubbing for handling both particulates and corrosive vapors'
    },
    {
      name: 'Process Equipment Integration',
      description: 'Direct connection to reactors, dryers, and mixers for continuous dust extraction during operation'
    },
    {
      name: 'High-Pressure FRP Fans',
      description: 'Specialized corrosion-resistant fans for handling dust-laden corrosive gases with high static pressure'
    },
    {
      name: 'Bag Filter & Cyclone Systems',
      description: 'FRP-constructed filtration systems with chemical-resistant filter media for fine dust separation'
    },
    {
      name: 'Wet Scrubbing Dust Collectors',
      description: 'Venturi and packed bed scrubbers for simultaneous dust collection and gas absorption'
    }
  ],
  industries: [
    'Chemical Processing',
    'Pharmaceutical Manufacturing',
    'Battery Manufacturing',
    'Fertilizer Production',
    'Electroplating & Metal Finishing',
    'Pesticide & Agrochemical',
    'Paint & Pigment Industries',
    'Acid & Alkali Production',
    'Mineral & Ore Processing',
    'Cement & Lime Industries',
    'Pulp & Paper Mills',
    'Water Treatment Plants',
    'Metallurgical Industries',
    'Petrochemical Plants',
    'Dye & Intermediate Manufacturing',
    'Specialty Chemical Production'
  ]
}
