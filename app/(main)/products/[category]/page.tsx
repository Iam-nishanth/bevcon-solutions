'use client';

import { useEffect, useRef } from 'react';
import { notFound, useParams } from 'next/navigation';
import { Download, CheckCircle2, Factory, Building2, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/sections/products/ProductCard';
import CenterFocusCarousel from '@/components/sections/products/CenterFocusCarousel';
import { allProducts as bevconProducts } from '@/data/bevcon-products';
import { allProducts as sparengProducts } from '@/data/spareng-products';
import { fumeExtractionOverview } from '@/data/jr-fibreglass/fume-extraction-overview';
import { dustExtractionOverview } from '@/data/jr-fibreglass/dust-extraction-overview';
import { frpGrpOverview } from '@/data/jr-fibreglass/frp-grp-overview';
// TODO: Uncomment for next rollout - JR Fibreglass products need accuracy review
// import { allJRFProducts } from '@/data/jr-fibreglass';

const allProducts = [...bevconProducts, ...sparengProducts];

const emitCategories = [
  "Bogie",
  "Steep Angle Sidewall Conveyors",
]

// JR Fibreglass categories that should show catalog download
const jrfCategories = [
  "Fume Extraction & Scrubbing Systems",
  "Dust Extraction Systems",
  "FRP - GRP Equipments"
];

// Map categories to their overview data
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const jrfCategoryMap: Record<string, any> = {
  "Fume Extraction & Scrubbing Systems": fumeExtractionOverview,
  "Dust Extraction Systems": dustExtractionOverview,
  "FRP - GRP Equipments": frpGrpOverview
};

// Get all unique categories
const getAllCategories = () => {
  const categories = new Set<string>()
  allProducts.forEach(product => {
    if (Array.isArray(product.category)) {
      product.category.forEach(cat => {
        if (!emitCategories.includes(cat)) {
          categories.add(cat)
        }
      })
    } else if (!emitCategories.includes(product.category)) {
      categories.add(product.category)
    }
  })
  // Add JR Fibreglass categories
  jrfCategories.forEach(cat => categories.add(cat))
  return Array.from(categories)
};

// Create URL-friendly slug
const createSlug = (category: string) => {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

// Find category by slug
const findCategoryBySlug = (slug: string) => {
  const categories = getAllCategories();
  return categories.find(cat => createSlug(cat) === slug);
};

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params.category as string;
  const category = findCategoryBySlug(categorySlug);
  const contentRef = useRef<HTMLDivElement | null>(null);
  
  // Scroll to top on mount and category change
  useEffect(() => {
    // Scroll hero into view first to avoid any sticky header offset
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    // Then ensure content section is visible just under the hero
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  }, [categorySlug]);
  
  if (!category) {
    notFound();
  }

  // Get JRF overview data for this category if applicable
  const jrfOverview = jrfCategoryMap[category];

  // Filter products by category
  const filteredByCategory = allProducts.filter(product => {
    if (Array.isArray(product.category)) {
      return product.category.includes(category);
    }
    return product.category === category;
  });

  // Remove duplicates - keep only first product with each title
  const seenTitles = new Set<string>();
  const categoryProducts = filteredByCategory.filter(product => {
    if (seenTitles.has(product.title)) {
      return false;
    }
    seenTitles.add(product.title);
    return true;
  });

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{category}</h1>
            <p className="text-lg text-white/90">
              Explore our comprehensive range of {category.toLowerCase()} solutions from trusted brands.
            </p>
            {categoryProducts.length > 0 && (
              <p className="text-white/80 mt-6">
                Showing <span className="font-semibold">{categoryProducts.length}</span> products
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={contentRef} className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Products Grid */}
            <div className="flex justify-center items-center">

              {/* Check JRF categories first, then show products */}
              {jrfCategories.includes(category) ? (
                <div className="w-full space-y-12">
                  {/* Image Carousel */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <CenterFocusCarousel 
                      images={jrfOverview.images}
                      alt={jrfOverview.title}
                    />
                  </motion.div>

                  {/* Company Overview */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 lg:p-10"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <Building2 className="w-8 h-8 text-primary-600" />
                      <h2 className="text-2xl sm:text-3xl font-bold text-primary-900">About JR Fibreglass Industries</h2>
                    </div>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                      {jrfOverview.description.split('\n\n').map((paragraph: string, idx: number) => (
                        <p key={idx} className="text-base sm:text-lg">{paragraph}</p>
                      ))}
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm font-semibold text-gray-600 mb-1">Company</div>
                        <div className="text-lg font-bold text-primary-900">{fumeExtractionOverview.companyInfo.name}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm font-semibold text-gray-600 mb-1">Experience</div>
                        <div className="text-lg font-bold text-primary-900">{fumeExtractionOverview.companyInfo.established}</div>
                      </div> */}
                      {/* <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm font-semibold text-gray-600 mb-1">Location</div>
                        <div className="text-lg font-bold text-primary-900">{fumeExtractionOverview.companyInfo.location}</div>
                      </div> */}
                    </div>
                  </motion.div>

                  {/* Key Features and Company Highlights */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {/* Key Features */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8"
                    >
                      <h2 className="text-xl sm:text-2xl font-bold text-primary-900 mb-6 flex items-center">
                        <CheckCircle2 className="w-6 h-6 mr-3 text-primary-600" />
                        Key Features
                      </h2>
                      <ul className="space-y-3">
                        {jrfOverview.keyFeatures.map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-start text-base">
                            <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Company Highlights */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 }}
                      className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8"
                    >
                      <h2 className="text-xl sm:text-2xl font-bold text-primary-900 mb-6 flex items-center">
                        <Award className="w-6 h-6 mr-3 text-primary-600" />
                        Company Highlights
                      </h2>
                      <ul className="space-y-3">
                        {jrfOverview.companyInfo.highlights.map((highlight: string, idx: number) => (
                          <li key={idx} className="flex items-start text-base">
                            <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Application Areas */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 lg:p-10"
                  >
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-8">Application Areas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                      {jrfOverview.productTypes.map((type: any, idx: number) => (
                        <div
                          key={idx}
                          className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all"
                        >
                          <h3 className="text-lg font-bold text-primary-900 mb-3">{type.title}</h3>
                          <p className="text-gray-700 mb-4 text-sm leading-relaxed">{type.description}</p>
                          <div className="space-y-2">
                            <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Typical Applications:</p>
                            <div className="grid grid-cols-2 gap-2">
                              {type.applications.map((app: string, appIdx: number) => (
                                <div key={appIdx} className="text-xs text-gray-600 flex items-center">
                                  <span className="mr-1 text-primary-600">•</span>
                                  <span>{app}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Scrubber Types */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 lg:p-10"
                  >
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-8">{jrfOverview.scrubberTypes ? 'Scrubber Configurations' : jrfOverview.extractionTypes ? 'Extraction System Types' : 'Equipment Types'}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                      {(jrfOverview.scrubberTypes || jrfOverview.extractionTypes || jrfOverview.equipmentTypes || []).map((item: any, idx: number) => (
                        <div
                          key={idx}
                          className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-5 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all"
                        >
                          <h3 className="text-base font-bold text-primary-900 mb-2">{item.name}</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Materials of Construction */}
                  {jrfOverview.materialsOfConstruction && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65 }}
                    className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8"
                  >
                    <h2 className="text-xl sm:text-2xl font-bold text-primary-900 mb-6">Materials of Construction</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {jrfOverview.materialsOfConstruction.map((material: string, idx: number) => (
                        <div key={idx} className="flex items-center bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
                          <CheckCircle2 className="w-4 h-4 text-primary-600 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{material}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                  )}

                  {/* Industries Served */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8"
                  >
                    <h2 className="text-xl sm:text-2xl font-bold text-primary-900 mb-6 flex items-center">
                      <Factory className="w-6 h-6 mr-3 text-primary-600" />
                      Industries Served
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {jrfOverview.industries.map((industry: string, idx: number) => (
                        <div
                          key={idx}
                          className="bg-gray-50 px-4 py-3 rounded-lg text-sm text-gray-700 font-medium border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors text-center"
                        >
                          {industry}
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Catalog Download CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.75 }}
                    className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 rounded-2xl shadow-xl p-8 sm:p-12 text-center text-white"
                  >
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Download className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                      Download Complete Product Catalog
                    </h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                      Explore our comprehensive range of fume extraction & scrubbing systems with detailed specifications and technical information.
                    </p>
                    <a
                      href="/JRE FIBREGLASS Overview.pdf"
                      download
                      className="inline-flex items-center space-x-2 px-8 py-3.5 bg-white text-primary-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
                    >
                      <Download className="w-5 h-5" />
                      <span>Download Catalog</span>
                    </a>
                  </motion.div>
                </div>
              ) : categoryProducts.length > 0 ? (
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      title={product.title}
                      image={product.image}
                      features={product.features}
                      applications={product.applications}
                      brand={product.brand}
                      category={product.category}
                      slug={product.slug}
                      product={product}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-gray-500 text-lg">No products found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
