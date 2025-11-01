'use client';

import { useEffect, useRef } from 'react';
import { CheckCircle2, Cog, Factory, Package } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CenterFocusCarousel from '@/components/sections/products/CenterFocusCarousel';
import ProductCard from '@/components/sections/products/ProductCard';
import { idlerOverview } from '@/data/spareng-products/idlers-overview';
import { conveyorPartsProducts } from '@/data/spareng-products/conveyor-parts';

export default function IdlersPage() {
  const contentRef = useRef<HTMLDivElement | null>(null);

  // Filter idler products
  const idlerProducts = conveyorPartsProducts.filter(
    product => Array.isArray(product.category) 
      ? product.category.includes('Idlers')
      : product.category === 'Idlers'
  );

  // Scroll to top on mount
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  }, []);

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            >
              {idlerOverview.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
            >
              {idlerOverview.heading}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={contentRef} className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            
            {/* Image Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <CenterFocusCarousel 
                images={idlerOverview.images}
                alt={idlerOverview.title}
              />
            </motion.div>

            {/* Overview Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 lg:p-10"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-6">Overview</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                {idlerOverview.description.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-base sm:text-lg">{paragraph}</p>
                ))}
              </div>
            </motion.div>

            {/* Key Features and Technical Advantages */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-primary-900 mb-6 flex items-center">
                  <Cog className="w-6 h-6 mr-3 text-primary-600" />
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {idlerOverview.keyFeatures.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + idx * 0.05 }}
                      className="flex items-start text-base"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Technical Advantages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-primary-900 mb-6 flex items-center">
                  <Factory className="w-6 h-6 mr-3 text-primary-600" />
                  {idlerOverview.technicalAdvantages.title}
                </h2>
                <ul className="space-y-3">
                  {idlerOverview.technicalAdvantages.items.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.65 + idx * 0.05 }}
                      className="flex items-start text-base"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Idler Types */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 lg:p-10"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-8">Idler Types & Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {idlerOverview.types.map((type, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.75 + idx * 0.1 }}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all"
                  >
                    <h3 className="text-lg font-bold text-primary-900 mb-3">{type.title}</h3>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">{type.description}</p>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Applications:</p>
                      <ul className="space-y-1">
                        {type.applications.map((app, appIdx) => (
                          <li key={appIdx} className="flex items-start text-sm text-gray-600">
                            <span className="mr-2">•</span>
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Available Products Section */}
            {idlerProducts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 lg:p-10"
              >
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-2 flex items-center">
                      <Package className="w-7 h-7 mr-3 text-primary-600" />
                      Available Products
                    </h2>
                    <p className="text-gray-600">Explore our range of high-quality idler products</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {idlerProducts.map((product, idx) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.95 + idx * 0.05 }}
                    >
                      <ProductCard
                        title={product.title}
                        image={product.image}
                        features={product.features}
                        applications={product.applications}
                        brand={product.brand}
                        category={product.category}
                        slug={product.slug}
                        product={product}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 rounded-2xl shadow-xl p-8 sm:p-12 text-center text-white"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Need Custom Idler Solutions?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Our engineering team can design and manufacture custom idlers to meet your specific requirements.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3.5 bg-white text-primary-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
              >
                Contact us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
