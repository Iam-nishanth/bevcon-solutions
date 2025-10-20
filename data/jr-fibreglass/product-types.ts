// JR Fibreglass product specifications interface
export interface JRFProductSpecifications {
  // Gas Scrubbing Systems
  flow_rate?: string
  pressure_drop?: string
  efficiency?: string
  material_construction?: string
  operating_temperature?: string
  design_pressure?: string
  dimensions?: string
  weight?: string
  corrosion_resistance?: string
  gas_handling_capacity?: string
  scrubber_type?: string
  packing_material?: string
  mist_eliminator?: string
  
  // FRP Fans & Blowers
  power_requirements?: string
  static_pressure?: string
  dynamic_balancing?: string
  ce_certification?: boolean
  
  // FRP/GRP Fabrication
  volume_capacity?: string
  wall_thickness?: string
  resin_type?: string
  reinforcement?: string
  
  // Environmental Control
  pollutants_handled?: string[]
  removal_efficiency?: string
  emergency_capacity?: string
  
  // Quality & Compliance
  certifications?: string[]
  standards?: string[]
  testing_compliance?: string[]
  
  // Scrubber Components & Internals
  load_capacity?: string
  distribution_efficiency?: string
  hole_diameter?: string
  open_area?: string
}

// Main product interface for JR Fibreglass
export interface JRFProduct {
  id: string
  title: string
  model: string
  sku: string
  category: string | string[]
  subcategory?: string
  specifications?: JRFProductSpecifications
  features: string[]
  applications: string[]
  tags: string[]
  image: string | string[]
  imageFit?: 'cover' | 'contain' | 'fill' | 'none'
  brand?: string
  heading?: string
  description?: string
  technicalDrawing?: string
  dataSheet?: string
  isRareProduct?: boolean // Flag for world record/rare products
  worldRecord?: string // Description of world record achievement
}

// Brand data structure for JR Fibreglass
export interface JRFBrandData {
  brand: string
  description: string
  website: string
  products: JRFProduct[]
}

// JR Fibreglass Categories enumeration
export enum JRFCategory {
  GAS_SCRUBBING = "Gas Scrubbing Systems",
  FRP_FANS_BLOWERS = "FRP Centrifugal Fans & Blowers", 
  FRP_FABRICATION = "FRP/GRP Fabrication",
  SCRUBBER_COMPONENTS = "Scrubber Components & Internals",
  EMERGENCY_SYSTEMS = "Emergency Gas Treatment Systems"
}

// Pollutants handled by JR Fibreglass systems
export const POLLUTANTS_HANDLED = [
  "HCl (Hydrogen Chloride)",
  "Cl2 (Chlorine)", 
  "H2SO4 (Sulfuric Acid)",
  "SO2 (Sulfur Dioxide)",
  "NH3 (Ammonia)",
  "HBr (Hydrogen Bromide)",
  "HF (Hydrogen Fluoride)",
  "PCl3 (Phosphorus Trichloride)",
  "Br2 (Bromine)",
  "COCl2 (Phosgene)",
  "Dilute NOx (Nitrogen Oxides)",
  "SOCl2 (Thionyl Chloride)",
  "VOCs (Volatile Organic Compounds)"
]

// Industries served by JR Fibreglass
export const JRF_INDUSTRIES = [
  "Chemical & Petrochemical",
  "Chlor-Alkali Manufacturing",
  "Metallurgical & Steel",
  "Pharmaceutical & Life Sciences", 
  "Power Generation",
  "Pulp & Paper",
  "Semiconductor Manufacturing",
  "Nuclear Energy",
  "Renewable Energy",
  "Environmental Consultants"
]
