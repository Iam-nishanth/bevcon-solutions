/**
 * Image URLs for Bevcon Solutions Website
 * 
 * IMMEDIATE USE: These Unsplash URLs work right now (Next.js configured)
 * LATER: Replace with local paths after downloading images
 * 
 * Usage:
 * import { HERO_IMAGES, INDUSTRY_IMAGES } from '@/content/images';
 * <Image src={HERO_IMAGES.homepage} alt="..." width={1920} height={1080} />
 */

// ============================================================================
// HERO IMAGES (Main landing pages)
// ============================================================================

export const HERO_IMAGES = {
  homepage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80',
  solutions: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80',
  products: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1920&q=80',
  industries: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1920&q=80',
  contact: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80',
  quote: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&q=80',
};

// ============================================================================
// INDUSTRY PAGE IMAGES
// ============================================================================

export const INDUSTRY_IMAGES = {
  pharmaceutical: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&q=80',
  foodBeverage: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1920&q=80',
  coldStorage: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&q=80',
  warehouseLogistics: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80',
  automotive: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&q=80',
  healthcare: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80',
  ecommerce: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1920&q=80', // Steel/metal manufacturing plant
  manufacturing: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80', // Production assembly line
  heavyIndustry: '/images/steel-industry.jpg', // Fulfillment center with packages/boxes
  cargoFreight: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1920&q=80',
  airport: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=1920&q=80',
  chemical: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=1920&q=80', // Pharmaceutical/pill production
  textile: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=1920&q=80',
  agriculture: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80', // Dairy/agricultural processing
  retail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80',
  mining: '/images/mining-systems.webp'
};

// Mapping from industry slugs to image URLs
export const INDUSTRY_IMAGE_MAP: Record<string, string> = {
  'pharmaceutical': INDUSTRY_IMAGES.pharmaceutical,
  'food-beverage': INDUSTRY_IMAGES.foodBeverage,
  'cold-storage': INDUSTRY_IMAGES.coldStorage,
  'warehouse-logistics': INDUSTRY_IMAGES.warehouseLogistics,
  'automotive': INDUSTRY_IMAGES.automotive,
  'healthcare': INDUSTRY_IMAGES.healthcare,
  'ecommerce': INDUSTRY_IMAGES.ecommerce,
  'manufacturing': INDUSTRY_IMAGES.manufacturing,
  'heavy-industry': INDUSTRY_IMAGES.heavyIndustry,
  'cargo-freight': INDUSTRY_IMAGES.cargoFreight,
  'airport': INDUSTRY_IMAGES.airport,
  'chemical': INDUSTRY_IMAGES.chemical,
  'textile': INDUSTRY_IMAGES.textile,
  'agriculture': INDUSTRY_IMAGES.agriculture,
  'retail': INDUSTRY_IMAGES.retail,
  'mining': INDUSTRY_IMAGES.mining,
};

// ============================================================================
// PRODUCT CATEGORY IMAGES
// ============================================================================

export const PRODUCT_IMAGES = {
  highSpeedDoors: 'https://images.unsplash.com/photo-1590650213165-656dc1d8f2d9?w=800&q=80', // Industrial warehouse doors/entrance
  dockLevelers: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80', // Loading dock with truck
  conveyorSystems: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80', // Conveyor belt/material handling
  fireShutters: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
  materialHandling: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80',
};

// ============================================================================
// SOLUTION PAGE IMAGES
// ============================================================================

export const SOLUTION_IMAGES = {
  entranceAutomation: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
  loadingBay: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&q=80',
  materialHandling: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80',
  safetyCompliance: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80',
  energyEfficiency: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80',
  temperatureControl: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1200&q=80',
};

// ============================================================================
// BACKGROUND & PATTERN IMAGES
// ============================================================================

export const BACKGROUND_IMAGES = {
  industrialPattern: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&q=60',
  warehouseTexture: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=60',
  abstractIndustrial: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=60',
  gradientOverlay: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1920&q=60',
};

// ============================================================================
// FEATURE / BENEFITS SECTION IMAGES
// ============================================================================

export const FEATURE_IMAGES = {
  speed: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
  reliability: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  safety: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80',
  efficiency: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80',
  innovation: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80',
  support: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80',
};

// ============================================================================
// ABOUT / COMPANY IMAGES
// ============================================================================

export const COMPANY_IMAGES = {
  team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
  facility: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80',
  office: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
  warehouse: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
};

// ============================================================================
// PLACEHOLDER IMAGES (Fallback)
// ============================================================================

export const PLACEHOLDER_IMAGES = {
  default: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
  hero: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80',
  card: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80',
  thumbnail: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&q=80',
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get industry image by slug with fallback
 */
export function getIndustryImage(slug: string): string {
  return INDUSTRY_IMAGE_MAP[slug] || PLACEHOLDER_IMAGES.hero;
}

/**
 * Get optimized image URL with custom size/quality
 */
export function getOptimizedImageUrl(baseUrl: string, width: number, quality: number = 80): string {
  const url = new URL(baseUrl);
  url.searchParams.set('w', width.toString());
  url.searchParams.set('q', quality.toString());
  return url.toString();
}

/**
 * Convert remote URL to local path (for after downloading images)
 * Usage: Replace Unsplash URLs with local paths when ready
 */
export function getLocalImagePath(remoteUrl: string, folder: string, filename: string): string {
  // For future migration to local hosting
  return `/images/${folder}/${filename}`;
}

// ============================================================================
// IMAGE DIMENSIONS (Standard sizes)
// ============================================================================

export const IMAGE_DIMENSIONS = {
  hero: { width: 1920, height: 1080 },
  card: { width: 800, height: 600 },
  thumbnail: { width: 400, height: 300 },
  banner: { width: 1920, height: 400 },
  square: { width: 600, height: 600 },
  portrait: { width: 600, height: 800 },
};

// ============================================================================
// EXPORT ALL
// ============================================================================

export default {
  HERO_IMAGES,
  INDUSTRY_IMAGES,
  INDUSTRY_IMAGE_MAP,
  PRODUCT_IMAGES,
  SOLUTION_IMAGES,
  BACKGROUND_IMAGES,
  FEATURE_IMAGES,
  COMPANY_IMAGES,
  PLACEHOLDER_IMAGES,
  getIndustryImage,
  getOptimizedImageUrl,
  getLocalImagePath,
  IMAGE_DIMENSIONS,
};
