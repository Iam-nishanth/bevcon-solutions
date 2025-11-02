export interface FrpGrpOverview {
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
  equipmentTypes: {
    name: string
    description: string
  }[]
  materialsOfConstruction: string[]
  industries: string[]
}

export const frpGrpOverview: FrpGrpOverview = {
  slug: 'frp-grp-equipments',
  title: 'FRP - GRP Equipment',
  heading: 'Corrosion-Resistant Fiberglass Reinforced Plastic Equipment',
  description: `JR Fibreglass Industries specializes in the design and manufacturing of high-quality FRP (Fiberglass Reinforced Plastics) and GRP (Glass Reinforced Plastics) equipment for corrosive and demanding industrial applications. With over 50 years of expertise, we provide comprehensive solutions from engineering design to installation.

Our FRP-GRP equipment portfolio includes storage tanks, process vessels, piping systems, ducts, scrubbers, and custom fabrications. These products offer superior corrosion resistance, long service life, and lower maintenance compared to traditional materials like steel or concrete.

Each piece of equipment is engineered to meet specific process requirements and industry standards, utilizing advanced manufacturing techniques including hand lay-up, filament winding, and spray-up processes. Our dual laminate technology combines FRP with thermoplastic liners for enhanced chemical resistance.`,
  images: [
    '/images/jr-fibreglass/frp_storage_tanks.jpg',
    '/images/jr-fibreglass/Bubble-Cap-Trays.png',
    '/images/jr-fibreglass/liquid-distributor.png',
    '/images/jr-fibreglass/frp_demisters.jpg',
  ],
  companyInfo: {
    name: 'JR Fibreglass Industries Pvt. Ltd.',
    established: '50+ Years of Excellence',
    location: 'Mumbai, India',
    highlights: [
      'Over 50 years of FRP manufacturing expertise',
      'Custom design and engineering capabilities',
      'Advanced manufacturing facility',
      'ISO certified quality systems',
      'Comprehensive testing laboratory',
      'Full turnkey project execution'
    ]
  },
  keyFeatures: [
    'Superior corrosion resistance',
    'Lightweight compared to metal alternatives',
    'Long service life (20-30+ years)',
    'Low maintenance requirements',
    'Excellent chemical compatibility',
    'Custom design for specific applications',
    'Full vacuum to 16 kg/cm² pressure capability',
    'Wide range of sizes and configurations',
  ],
  productTypes: [
    {
      title: 'Storage Tanks & Vessels',
      description: 'FRP/GRP storage tanks for corrosive chemicals, acids, water, and process fluids with capacities ranging from small day tanks to large storage vessels.',
      applications: [
        'Chemical storage',
        'Acid & alkali containment',
        'Water treatment',
        'Wastewater storage',
        'Process fluid tanks',
        'Secondary containment'
      ]
    },
    {
      title: 'Piping Systems & Ducting',
      description: 'Corrosion-resistant piping and duct systems for chemical transfer, ventilation, and process applications with custom fittings and supports.',
      applications: [
        'Chemical transfer lines',
        'Process piping',
        'Exhaust ducting',
        'Fume extraction ducts',
        'Wastewater collection',
        'Brine transfer systems'
      ]
    },
    {
      title: 'Process Equipment',
      description: 'Custom FRP process equipment including reaction vessels, separators, columns, and specialized internals for chemical and process industries.',
      applications: [
        'Reaction vessels',
        'Distillation columns',
        'Absorption towers',
        'Packed columns',
        'Phase separators',
        'Heat exchangers'
      ]
    },
    {
      title: 'Scrubber Internals & Components',
      description: 'Precision-engineered FRP components including bubble cap trays, packing supports, liquid distributors, demisters, and specialized internals for scrubbers and columns.',
      applications: [
        'Bubble cap tray assemblies',
        'Thormann liquid distributors',
        'Packing support plates',
        'FRP demisters & mist eliminators',
        'Sieve tray systems',
        'Liquid re-distributors'
      ]
    }
  ],
  equipmentTypes: [
    {
      name: 'Storage Tanks',
      description: 'Vertical and horizontal storage tanks from 100 liters to 500,000+ liters capacity'
    },
    {
      name: 'Process Vessels',
      description: 'Reaction vessels, columns, and specialized process equipment up to 16 kg/cm² pressure'
    },
    {
      name: 'FRP Piping',
      description: 'Filament wound and contact molded pipes from 25mm to 3000mm diameter'
    },
    {
      name: 'Ducting Systems',
      description: 'Square, rectangular, and circular ducts for fume extraction and ventilation'
    },
    {
      name: 'Scrubbers',
      description: 'Packed, plate, and venturi scrubbers for gas treatment and pollution control'
    },
    {
      name: 'Custom Fabrications',
      description: 'Specialized equipment designed and manufactured per customer specifications'
    }
  ],
  materialsOfConstruction: [
    'Isophthalic Polyester Resin - General purpose applications',
    'Vinyl Ester Resin - Enhanced chemical resistance',
    'Bisphenol Resin - High-temperature applications',
    'Epoxy Novolac (Super Vinyl Ester) - Severe service',
    'Dual Laminate PP+FRP - Polypropylene lined',
    'Dual Laminate PVC+FRP - PVC lined systems',
    'Dual Laminate PVDF+FRP - Premium chemical resistance',
    'Dual Laminate ECTFE+FRP - Extreme corrosion resistance',
    'E-Glass Fibers - Structural reinforcement',
    'C-Glass Fibers - Chemical resistant liner',
  ],
  industries: [
    'Chemical Processing',
    'Chlor-Alkali Manufacturing',
    'Pharmaceutical Production',
    'Fertilizer Plants',
    'Pulp & Paper Mills',
    'Metal Extraction & Refining',
    'Electroplating Facilities',
    'Water Treatment Plants',
    'Wastewater Treatment',
    'Food & Beverage Processing',
    'Textile Industries',
    'Power Generation',
    'Mining & Minerals',
    'Petrochemical Plants',
    'Battery Manufacturing',
    'Paint & Coating Industries'
  ]
}
