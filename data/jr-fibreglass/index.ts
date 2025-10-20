// TODO: Uncomment for next rollout - products need accuracy review
// import { frpFansData } from './frp-fans-blowers'
// import { gasScrubberData } from './gas-scrubbers'
// import { frpFabricationData } from './frp-fabrication'
// import { scrubberComponentsData } from './scrubber-components'
import { JRFBrandData, JRFCategory, POLLUTANTS_HANDLED, JRF_INDUSTRIES } from './product-types'

// TODO: Uncomment for next rollout - products need accuracy review
// export * from './frp-fans-blowers'
// export * from './gas-scrubbers'
// export * from './frp-fabrication'
// export * from './scrubber-components'
export * from './product-types'

// JR Fibreglass brand data
export const jrFibreglassData: JRFBrandData = {
  brand: 'JR Fibreglass Industries  ',
  description: 'Established in 1975, JR Fibreglass Industries is a pioneering manufacturer of fume extraction equipment and FRP/GRP fabrication with 50 years of expertise. They hold multiple world records including the largest emergency chlorine scrubber (9500 kg/hr) and biggest FRP scrubber in India (6m diameter). Only Indian company with CE certification for FRP fans.',
  website: 'https://www.jrfibreglass.com',
  products: [
    // TODO: Uncomment for next rollout - products need accuracy review
    // ...frpFansData,
    // ...gasScrubberData,
    // ...frpFabricationData,
    // ...scrubberComponentsData
  ]
}

// All JR Fibreglass products combined
// TODO: Uncomment for next rollout - products need accuracy review
export const allJRFProducts: any[] = [
  // ...frpFansData,
  // ...gasScrubberData,
  // ...frpFabricationData,
  // ...scrubberComponentsData
]

// TODO: Uncomment for next rollout - JR Fibreglass products need accuracy review
// Get JR Fibreglass products by category
export const getJRFProductsByCategory = (category: string) => {
  return [] // allJRFProducts.filter(product => {
  //   if (Array.isArray(product.category)) {
  //     return product.category.some(cat => cat.toLowerCase() === category.toLowerCase())
  //   }
  //   return product.category.toLowerCase() === category.toLowerCase()
  // })
}

// Get all JR Fibreglass categories
export const getAllJRFCategories = () => {
  return [] // const categories = new Set<string>()
  // allJRFProducts.forEach(product => {
  //   if (Array.isArray(product.category)) {
  //     product.category.forEach(cat => categories.add(cat))
  //   } else {
  //     categories.add(product.category)
  //   }
  // })
  // return Array.from(categories)
}

// Get rare/world record products
export const getRareProducts = () => {
  return [] // allJRFProducts.filter(product => product.isRareProduct === true)
}

// Get products by pollutant handled
export const getProductsByPollutant = (pollutant: string) => {
  return [] // allJRFProducts.filter(product => 
  //   product.specifications?.pollutants_handled?.some(p => 
  //     p.toLowerCase().includes(pollutant.toLowerCase())
  //   )
  // )
}

// Search JR Fibreglass products
export const searchJRFProducts = (query: string) => {
  return [] // const searchTerm = query.toLowerCase()
  // return allJRFProducts.filter(product =>
  //   product.title.toLowerCase().includes(searchTerm) ||
  //   (product.brand && product.brand.toLowerCase().includes(searchTerm)) ||
  //   (Array.isArray(product.category) 
  //     ? product.category.some(cat => cat.toLowerCase().includes(searchTerm))
  //     : product.category.toLowerCase().includes(searchTerm)) ||
  //   product.features.some(feature => feature.toLowerCase().includes(searchTerm)) ||
  //   product.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
  //   (product.specifications?.pollutants_handled?.some(p => p.toLowerCase().includes(searchTerm))) ||
  //   (product.worldRecord && product.worldRecord.toLowerCase().includes(searchTerm))
  // )
}

// Company achievements and statistics
export const JRF_ACHIEVEMENTS = {
  establishedYear: 1975,
  experienceYears: 50,
  scrubbingSystemsManufactured: 3844,
  centrifugalFansSupplied: 10000,
  manufacturingAreaSqFt: 130000,
  workforce: {
    workers: '175-200',
    office: 40
  },
  worldRecords: [
    "World's largest emergency chlorine scrubber - 9500 kg/hr capacity",
    "Biggest FRP scrubber ever made in India - 6m diameter x 22m length",
    "Only Indian company with CE certification for FRP fans",
    "Ultra high volume FRP fans - 90,000-120,000 m³/hr capacity",
    "High pressure FRP fans - up to 800 mmWC static pressure"
  ]
}

// Export categories enum for easy access
export { JRFCategory, POLLUTANTS_HANDLED, JRF_INDUSTRIES }
