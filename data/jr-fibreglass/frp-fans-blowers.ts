import { JRFProduct, JRFCategory } from './product-types'

export const frpFansData: JRFProduct[] = [
  {
    id: "jrf-hpfan-01",
    title: "High Pressure FRP Centrifugal Fan - 800 mmWC",
    model: "JRF-9004-B/C",
    sku: "HPFAN-800",
    category: JRFCategory.FRP_FANS_BLOWERS,
    subcategory: "High Pressure Fans",
    specifications: {
      flow_rate: "Custom designed per application",
      static_pressure: "Up to 800 mmWC static pressure",
      efficiency: "Performance tested as per IS-4894 & BS-848",
      material_construction: "FRP using Isophthalic, Vinyl Ester, Bisphenol, Super Vinyl Ester (Epoxy Novolac) or Dual Laminates (PP+FRP, PVC+FRP, PVDF+FRP, TFM+FRP, FEP+FRP, PFA+FRP, ECTFE+FRP)",
      operating_temperature: "Up to 180°C (resin dependent)",
      design_pressure: "800 mmWC",
      power_requirements: "Custom per capacity",
      dimensions: "Custom built for each application",
      weight: "Lightweight compared to metal equivalents",
      corrosion_resistance: "Exceptional - handles all corrosive gases and fumes",
      dynamic_balancing: "As per ISO-1940",
      ce_certification: true,
      certifications: ["CE Certified", "IS-4894", "BS-848", "ISO-1940"],
      standards: ["IS-4894", "BS-848", "ISO-1940"]
    },
    features: [
      "ONLY INDIAN COMPANY WITH CE CERTIFICATION for FRP fans",
      "Custom built for each customer application",
      "Strict quality measures with multi-stage inspections",
      "Dynamic balancing as per ISO-1940",
      "Can handle extreme corrosive environments",
      "Non-sparking construction for hazardous areas",
      "Over 10,000 units supplied till date",
      "High pressure capability rare in FRP construction"
    ],
    applications: [
      "Scrubbing system exhaust with high back pressure",
      "Chemical fume extraction requiring high static pressure",
      "Metallurgical plants with corrosive gases",
      "Pharmaceutical clean room pressurization",
      "Process gas boosting in corrosive service",
      "Emission control systems"
    ],
    tags: ["high pressure fan", "800 mmWC", "FRP", "CE certified", "corrosion resistant", "custom designed", "rare product", "industrial"],
    image: "/images/jr-fibreglass/high_pressure_frp_fan.jpg",
    brand: "JR Fibreglass  ",
    heading: "High Pressure FRP Centrifugal Fan - 800 mmWC",
    description: "Industry-leading high pressure FRP centrifugal fans capable of 800 mmWC static pressure - a rare achievement in fiberglass construction. CE certified and custom engineered for the most demanding corrosive gas handling applications. JR Fibreglass is the only Indian company with CE certification for FRP fans.",
    isRareProduct: true,
    worldRecord: "Only Indian company with CE certification for FRP fans, achieving 800 mmWC static pressure in FRP construction"
  },
  {
    id: "jrf-uhvfan-01",
    title: "Ultra High Volume FRP Centrifugal Fan - 120,000 m³/hr",
    model: "JRF-UHV-120K",
    sku: "UHVFAN-120K",
    category: JRFCategory.FRP_FANS_BLOWERS,
    subcategory: "Ultra High Volume Fans",
    specifications: {
      flow_rate: "90,000 to 120,000 m³/hr",
      static_pressure: "Up to 350 mmWC",
      efficiency: "Performance tested as per IS-4894 & BS-848",
      material_construction: "FRP using various resin grades (Isophthalic, Vinyl Ester, Bisphenol, Super Vinyl Ester) or Dual Laminates",
      operating_temperature: "Up to 180°C",
      design_pressure: "350 mmWC at 120,000 m³/hr capacity",
      power_requirements: "Custom calculated per application",
      dimensions: "Large diameter impeller (custom per flow requirement)",
      weight: "Significantly lighter than metal equivalents",
      corrosion_resistance: "Exceptional for all corrosive environments",
      dynamic_balancing: "As per ISO-1940",
      ce_certification: true,
      certifications: ["CE Certified", "IS-4894", "BS-848", "ISO-1940"],
      standards: ["IS-4894", "BS-848", "ISO-1940"]
    },
    features: [
      "Largest capacity FRP fans manufactured in India",
      "CE Certified - only Indian company with this certification",
      "Complete fan and ducting system integration",
      "Tested to IS-4894 and BS-848 standards",
      "Dynamic balancing per ISO-1940",
      "Custom designed for each installation",
      "Proven installations at major industrial sites",
      "Rare combination of high volume with FRP corrosion resistance"
    ],
    applications: [
      "Large scale scrubbing systems",
      "Industrial fume extraction systems",
      "Chemical plant exhaust ventilation",
      "Metallurgical off-gas handling",
      "Large capacity pollution control",
      "Process gas circulation in corrosive service"
    ],
    tags: ["ultra high volume", "120000 m3/hr", "90000 m3/hr", "FRP fan", "CE certified", "rare product", "largest capacity", "industrial"],
    image: "/images/jr-fibreglass/ultra_high_volume_frp_fan.jpg",
    brand: "JR Fibreglass  ",
    heading: "Ultra High Volume FRP Fan - Up to 120,000 m³/hr",
    description: "Exceptional ultra-high capacity FRP centrifugal fans handling 90,000 to 120,000 m³/hr - among the largest FRP fans manufactured globally. Successfully installed at Indian Rayon and other major industrial facilities. A rare product combining massive airflow capacity with complete corrosion resistance.",
    isRareProduct: true,
    worldRecord: "Largest capacity FRP fans manufactured in India with 90,000-120,000 m³/hr capacity"
  },
  // {
  //   id: "jrf-fanduct-01",
  //   title: "Integrated FRP Fan & Ducting System",
  //   model: "JRF-FD-3636",
  //   sku: "FANDUCT-3636",
  //   category: [JRFCategory.FRP_FANS_BLOWERS, JRFCategory.FRP_FABRICATION],
  //   subcategory: "Integrated Fan & Duct Systems",
  //   specifications: {
  //     flow_rate: "Custom per application (typically 10,000-50,000 m³/hr)",
  //     pressure_drop: "Custom designed (50-500 mmWC typical)",
  //     efficiency: "System optimized for minimum pressure loss",
  //     material_construction: "Complete FRP system - fan, ductwork, fittings using matched resin grades",
  //     operating_temperature: "Up to 180°C system-wide",
  //     design_pressure: "Full vacuum to 16 kg/cm² internal pressure capability",
  //     dimensions: "36\" x 36\" duct standard, custom sizes available up to 5000 mm diameter",
  //     weight: "70-80% lighter than metal equivalent",
  //     corrosion_resistance: "Complete system corrosion immunity",
  //     certifications: ["IS-4894", "BS-848", "ISO-1940"],
  //     standards: ["IS-4894", "BS-848", "ISO-1940"]
  //   },
  //   features: [
  //     "Fully integrated FRP fan and ductwork solution",
  //     "Eliminates galvanic corrosion at transitions",
  //     "Seamless material compatibility throughout system",
  //     "Custom designed for optimal flow and minimal turbulence",
  //     "Complete system testing and balancing",
  //     "Modular construction for easy installation",
  //     "Matched thermal expansion throughout",
  //     "Rare complete FRP air handling solution"
  //   ],
  //   applications: [
  //     "Chemical process exhaust systems",
  //     "Scrubber exhaust ducting and fans",
  //     "Corrosive fume extraction systems",
  //     "Acid gas handling facilities",
  //     "Clean room exhaust in pharmaceutical plants",
  //     "Hazardous vapor control systems"
  //   ],
  //   tags: ["integrated system", "FRP duct", "FRP fan", "complete solution", "corrosion proof", "rare product", "chemical resistant"],
  //   image: "/images/jr-fibreglass/ultra_high_volume_frp_fan.jpg",
  //   brand: "JR Fibreglass  ",
  //   heading: "Integrated FRP Fan & Ducting System",
  //   description: "Comprehensive turnkey solution combining FRP centrifugal fans with complete FRP ductwork systems. Ensures perfect material compatibility, eliminates corrosion at transitions, and provides optimized airflow performance. A rare offering of complete corrosion-proof air handling systems.",
  //   isRareProduct: true,
  //   worldRecord: "Complete integrated FRP fan and ductwork systems up to 5000mm diameter - rare in global market"
  // }
]
