import { JRFProduct, JRFCategory } from './product-types'

export const frpFabricationData: JRFProduct[] = [
  {
    id: "jrf-storage-tank-01",
    title: "FRP Storage Tanks & Vessels",
    model: "JRF-ST-500",
    sku: "FRP-TANK-001",
    category: JRFCategory.FRP_FABRICATION,
    subcategory: "Storage Tanks",
    specifications: {
      volume_capacity: "Up to 500 m³",
      material_construction: "FRP using Isophthalic, Vinyl Ester, Bisphenol, Super Vinyl Ester resins",
      operating_temperature: "Up to 180°C (resin dependent)",
      design_pressure: "Full vacuum to 16 kg/cm² internal pressure",
      wall_thickness: "Custom designed per application",
      corrosion_resistance: "Complete chemical resistance",
      resin_type: "Multiple options: Isophthalic, Vinyl Ester, Bisphenol, Super Vinyl Ester",
      reinforcement: "Glass fiber reinforcement with various configurations",
      certifications: ["Chemical Storage Standards", "Pressure Vessel Codes"],
      standards: ["FRP Fabrication Standards", "Chemical Storage Regulations"]
    },
    features: [
      "Custom designed for specific chemical storage",
      "Multiple resin options for chemical compatibility",
      "Lightweight compared to metal alternatives",
      "Excellent corrosion resistance",
      "Long service life in harsh environments",
      "Custom fabrication capabilities",
      "On-site installation support",
      "Comprehensive testing and quality assurance"
    ],
    applications: [
      "Chemical storage tanks",
      "Process vessels in chemical plants",
      "Water treatment storage",
      "Pharmaceutical storage systems",
      "Food grade storage applications",
      "Corrosive liquid storage",
      "Emergency containment systems"
    ],
    tags: ["FRP tank", "storage vessel", "chemical storage", "corrosion resistant", "custom fabrication", "500 m3"],
    image: "/images/jr-fibreglass/frp_storage_tanks.jpg",
    brand: "JR Fibreglass  ",
    heading: "FRP Storage Tanks & Vessels - Up to 500 m³",
    description: "Custom-designed FRP storage tanks and vessels with capacities up to 500 m³. Multiple resin options available for optimal chemical compatibility. Lightweight, corrosion-resistant alternative to metal storage systems with superior longevity in harsh chemical environments."
  },
  {
    id: "jrf-reaction-vessel-01",
    title: "FRP Reaction Vessels",
    model: "JRF-RV-Custom",
    sku: "FRP-REACTOR-001",
    category: JRFCategory.FRP_FABRICATION,
    subcategory: "Reaction Vessels",
    specifications: {
      volume_capacity: "Custom designed per process requirements",
      material_construction: "FRP with process-specific resin selection",
      operating_temperature: "Up to 180°C depending on resin",
      design_pressure: "Custom engineered for process conditions",
      wall_thickness: "Calculated per pressure and temperature requirements",
      corrosion_resistance: "Tailored to specific chemical processes",
      resin_type: "Selected based on chemical compatibility",
      reinforcement: "Multi-layer glass fiber reinforcement",
      certifications: ["Process Vessel Standards", "Chemical Reactor Codes"],
      standards: ["Chemical Process Standards", "Reactor Design Codes"]
    },
    features: [
      "Custom designed for specific chemical reactions",
      "Optimal resin selection for process compatibility",
      "Internal surface designed for easy cleaning",
      "Integrated mixing and agitation provisions",
      "Temperature and pressure monitoring provisions",
      "Custom inlet/outlet configurations",
      "Maintenance access provisions",
      "Process optimization through FRP benefits"
    ],
    applications: [
      "Chemical reaction vessels",
      "Pharmaceutical synthesis reactors",
      "Polymer processing vessels",
      "Wastewater treatment reactors",
      "Biotechnology process vessels",
      "Specialty chemical manufacturing",
      "Research and development reactors"
    ],
    tags: ["FRP reactor", "reaction vessel", "chemical processing", "custom design", "process equipment"],
    image: "/images/jr-fibreglass/frp_storage_tanks.jpg",
    brand: "JR Fibreglass  ",
    heading: "Custom FRP Reaction Vessels",
    description: "Specially designed FRP reaction vessels for chemical processing applications. Custom-engineered with optimal resin selection for specific chemical reactions. Superior corrosion resistance and process optimization through lightweight, durable FRP construction."
  },
  {
    id: "jrf-filament-pipe-01",
    title: "Filament Winding Machine",
    model: "JRF-FW-2000",
    sku: "FRP-PIPE-001",
    category: JRFCategory.FRP_FABRICATION,
    subcategory: "Filament Wound Pipes",
    specifications: {
      dimensions: "Up to 2000 mm diameter x 10 m length",
      material_construction: "Filament wound FRP with CNC controlled winding",
      operating_temperature: "Up to 180°C",
      design_pressure: "Custom designed per application requirements",
      wall_thickness: "Optimized through filament winding process",
      corrosion_resistance: "Superior chemical resistance",
      resin_type: "High-performance resins including Derakane 470.300",
      reinforcement: "Continuous filament winding with optimal fiber orientation",
      certifications: ["Pipe Standards", "Pressure Rating Certifications"],
      standards: ["FRP Pipe Standards", "Filament Winding Standards"]
    },
    features: [
      "CNC controlled filament winding for precision",
      "High strength-to-weight ratio",
      "Superior corrosion resistance",
      "Smooth internal surface for optimal flow",
      "Custom length and diameter capabilities",
      "High temperature resin options",
      "Excellent pressure rating capabilities",
      "Long service life in corrosive environments"
    ],
    applications: [
      "Chemical process piping",
      "Corrosive fluid transport",
      "High temperature applications",
      "Pressure piping systems",
      "Seawater and brine piping",
      "Industrial process lines",
      "Exhaust ducting applications"
    ],
    tags: ["filament wound", "FRP pipe", "CNC controlled", "2000mm diameter", "high pressure", "corrosion resistant"],
    image: "/images/jr-fibreglass/placeholder-pipe.jpg",
    brand: "JR Fibreglass  ",
    heading: "Filament Wound FRP Pipes - Up to 2000mm Diameter",
    description: "Precision-manufactured filament wound FRP pipes using CNC controlled winding technology. Available up to 2000mm diameter and 10m length with superior strength-to-weight ratio and excellent corrosion resistance for demanding industrial applications."
  },
  {
    id: "jrf-frp-ducting-01",
    title: "FRP Exhaust Ducting Systems",
    model: "JRF-DUCT-5000",
    sku: "FRP-DUCT-001",
    category: [JRFCategory.FRP_FABRICATION, JRFCategory.FRP_FANS_BLOWERS],
    subcategory: "FRP Ducting",
    specifications: {
      dimensions: "Up to 5000 mm diameter",
      material_construction: "FRP with chemical-resistant resin systems",
      operating_temperature: "Up to 180°C",
      design_pressure: "Full vacuum to positive pressure applications",
      wall_thickness: "Optimized for pressure and temperature conditions",
      corrosion_resistance: "Complete immunity to corrosive gases",
      resin_type: "Selected for specific gas handling requirements",
      reinforcement: "Glass fiber reinforcement with structural design",
      certifications: ["Ducting Standards", "Exhaust System Certifications"],
      standards: ["FRP Ducting Standards", "Exhaust System Codes"]
    },
    features: [
      "Large diameter capabilities up to 5000mm",
      "Complete corrosion immunity",
      "Lightweight compared to metal ducting",
      "Smooth internal surfaces for optimal airflow",
      "Modular construction for easy installation",
      "Custom fittings and transitions available",
      "Excellent thermal properties",
      "Long-term durability in harsh environments"
    ],
    applications: [
      "Chemical plant exhaust systems",
      "Scrubber exhaust ducting",
      "Corrosive gas handling systems",
      "Industrial ventilation systems",
      "Fume extraction ducting",
      "Process gas transport",
      "Emission control systems"
    ],
    tags: ["FRP ducting", "5000mm diameter", "exhaust system", "corrosion proof", "chemical resistant"],
    image: "/images/jr-fibreglass/placeholder-duct.jpg",
    brand: "JR Fibreglass  ",
    heading: "FRP Exhaust Ducting - Up to 5000mm Diameter",
    description: "Large diameter FRP exhaust ducting systems up to 5000mm diameter for corrosive gas handling applications. Complete corrosion immunity with lightweight construction and superior durability. Custom-designed for optimal airflow and chemical compatibility."
  },
  // {
  //   id: "jrf-dual-laminate-01",
  //   title: "Dual Laminate Tanks & Vessels",
  //   model: "JRF-DL-Custom",
  //   sku: "DUAL-LAM-001",
  //   category: JRFCategory.FRP_FABRICATION,
  //   subcategory: "Dual Laminate Systems",
  //   specifications: {
  //     volume_capacity: "Custom designed per application",
  //     material_construction: "Dual laminate: thermoplastic liner + FRP structural layer",
  //     operating_temperature: "Depends on thermoplastic selection",
  //     design_pressure: "Enhanced through dual laminate construction",
  //     wall_thickness: "Optimized dual layer design",
  //     corrosion_resistance: "Superior through thermoplastic liner",
  //     resin_type: "FRP structural layer with various thermoplastic liners",
  //     reinforcement: "FRP structural reinforcement with thermoplastic barrier",
  //     certifications: ["Dual Laminate Standards", "Chemical Storage Certifications"],
  //     standards: ["Advanced Composite Standards", "Chemical Compatibility Standards"]
  //   },
  //   features: [
  //     "Superior chemical resistance through thermoplastic liner",
  //     "Structural strength from FRP outer layer",
  //     "Enhanced barrier properties",
  //     "Excellent for aggressive chemicals",
  //     "Cost-effective compared to solid thermoplastic",
  //     "Custom liner material selection",
  //     "Superior permeation resistance",
  //     "Long-term reliability in harsh environments"
  //   ],
  //   applications: [
  //     "Highly corrosive chemical storage",
  //     "Aggressive acid storage",
  //     "Specialty chemical applications",
  //     "Process vessels for harsh chemicals",
  //     "Secondary containment systems",
  //     "High-purity applications",
  //     "Critical chemical processes"
  //   ],
  //   tags: ["dual laminate", "thermoplastic liner", "FRP structure", "superior resistance", "aggressive chemicals"],
  //   image: "/images/jr-fibreglass/frp_storage_tanks.jpg",
  //   brand: "JR Fibreglass  ",
  //   heading: "Dual Laminate Tanks & Vessels",
  //   description: "Advanced dual laminate construction combining thermoplastic liner with FRP structural layer. Superior chemical resistance for the most aggressive chemicals while maintaining structural integrity and cost-effectiveness compared to solid thermoplastic construction."
  // }
]
