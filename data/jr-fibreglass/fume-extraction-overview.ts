export interface FumeExtractionOverview {
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
  scrubberTypes: {
    name: string
    description: string
  }[]
  materialsOfConstruction: string[]
  industries: string[]
}

export const fumeExtractionOverview: FumeExtractionOverview = {
  slug: 'fume-extraction-scrubbing-systems',
  title: 'Fume Extraction & Scrubbing Systems',
  heading: 'Advanced Air Pollution Control Solutions from JR Fibreglass Industries',
  description: `JR Fibreglass Industries Pvt. Ltd. (JRF) is a Mumbai-based leader in air pollution control with over 50 years of specialized experience in designing and manufacturing fume extraction and scrubbing systems. Founded by a dedicated team of technocrats, JRF has established itself as a trusted partner for industries requiring customized environmental solutions.

Our expertise spans across chemical, metallurgical, petrochemical, pharmaceutical, and processing industries. We provide innovative, customized solutions tailored to each client's specific requirements, with systems designed for versatility and adherence to global standards.

With continuous patronage from India's leading industrial companies and successful international projects, JRF is your premier choice for comprehensive air pollution control and FRP-GRP equipment solutions.`,
  images: [
    '/images/jr-fibreglass/venturi_scrubber.jpg',
    '/images/jr-fibreglass/emergency_chlorine_scrubber.jpg',
    '/images/jr-fibreglass/frp_fan_duct_system.jpg',
    '/images/jr-fibreglass/high_pressure_frp_fan.jpg',
    '/images/jr-fibreglass/ultra_high_volume_frp_fan.jpg',
    // '/images/jr-fibreglass/jrf_manufacturing_facility.jpg',
  ],
  companyInfo: {
    name: 'JR Fibreglass Industries Pvt. Ltd.',
    established: '50+ Years of Excellence',
    location: 'Mumbai, India',
    highlights: [
      'Over 50 years of specialized experience',
      'Serving India\'s leading industrial companies',
      'International project experience',
      'In-house design and manufacturing facility',
      'Comprehensive testing laboratory',
      'ISO certified quality management system'
    ]
  },
  keyFeatures: [
    'Custom-designed systems for specific applications',
    'Comprehensive range of scrubber configurations',
    'Advanced FRP/GRP construction technology',
    'High-efficiency gas and particulate removal',
    'Corrosion-resistant materials for harsh environments',
    'Full vacuum to 16 kg/cm² pressure capability',
    'Complete engineering and installation support',
    'Proven performance across diverse industries',
  ],
  productTypes: [
    {
      title: 'Metal Strip Processing Lines',
      description: 'Specialized fume extraction systems for aluminum and carbon steel cold & hot rolling mills, designed to handle high-volume emissions and maintain air quality in metal processing facilities.',
      applications: [
        'Aluminum rolling mills',
        'Carbon steel processing',
        'Hot rolling operations',
        'Cold rolling facilities'
      ]
    },
    {
      title: 'Emergency Chlorine Leakage Systems',
      description: 'Critical safety systems designed for rapid response to chlorine gas leaks, providing reliable containment and neutralization in emergency situations.',
      applications: [
        'Water treatment plants',
        'Chemical processing facilities',
        'Chlor-alkali plants',
        'Municipal utilities'
      ]
    },
    {
      title: 'Chemical & Pharmaceutical Industries',
      description: 'Precision-engineered scrubbing systems for controlling toxic and corrosive fumes from chemical reactions and pharmaceutical manufacturing processes.',
      applications: [
        'Chemical manufacturing',
        'Pharmaceutical production',
        'R&D laboratories',
        'Process industries'
      ]
    },
    {
      title: 'General Processing Industries',
      description: 'Versatile fume extraction solutions for a wide range of industrial processing applications requiring effective emission control.',
      applications: [
        'Food processing',
        'Textile manufacturing',
        'Electronics assembly',
        'General manufacturing'
      ]
    }
  ],
  scrubberTypes: [
    {
      name: 'Packed Scrubbers',
      description: 'High-efficiency gas absorption using structured or random packing media for maximum gas-liquid contact'
    },
    {
      name: 'Plate Scrubbers',
      description: 'Multi-stage sieve or bubble cap tray designs for thorough gas scrubbing and separation'
    },
    {
      name: 'Plate-cum-Packed Scrubbers',
      description: 'Hybrid design combining benefits of both plate and packed tower configurations'
    },
    {
      name: 'Venturi Scrubbers',
      description: 'High-energy particulate removal system ideal for fine dust and mist collection'
    },
    {
      name: 'Spray Columns',
      description: 'Simple, effective design for gas absorption with minimal pressure drop'
    },
    {
      name: 'Sieve Trays',
      description: 'Perforated plate designs for efficient gas-liquid contacting'
    },
    {
      name: 'Bubble Cap Trays',
      description: 'Proven technology for precise vapor-liquid equilibrium operations'
    }
  ],
  materialsOfConstruction: [
    'FRP using Isophthalic Polyester Resin',
    'Vinyl Ester for enhanced chemical resistance',
    'Bisphenol Epoxy for high-temperature applications',
    'Super Vinyl Ester (Epoxy Novolac based)',
    'Dual Laminates: PP+FRP, PVC+FRP, PVDF+FRP',
    'High-performance Laminates: TFM+FRP, FEP+FRP, PFA+FRP, ECTFE+FRP',
    'Local and imported resin systems available'
  ],
  industries: [
    'Chemical Processing',
    'Pharmaceutical Manufacturing',
    'Metal Processing & Rolling Mills',
    'Water Treatment Facilities',
    'Petrochemical Plants',
    'Electronics Manufacturing',
    'Food Processing',
    'Textile Industries',
    'Paint & Coating Industries',
    'Battery Manufacturing',
    'Fertilizer Plants',
    'Pulp & Paper Industries'
  ]
}
