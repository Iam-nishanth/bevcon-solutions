'use client';

import { useEffect, useRef } from 'react';
import { CheckCircle2, Cog, Package, Factory } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CenterFocusCarousel from '@/components/sections/products/CenterFocusCarousel';
import ProductCard from '@/components/sections/products/ProductCard';
import { pulleyOverview } from '@/data/spareng-products/pulleys-overview';
import { conveyorPartsProducts } from '@/data/spareng-products/conveyor-parts';

export default function PulleysPage() {
  const contentRef = useRef<HTMLDivElement | null>(null);

  // Filter pulley products
  const pulleyProducts = conveyorPartsProducts.filter(
    product => Array.isArray(product.category) 
      ? product.category.includes('Pulleys')
      : product.category === 'Pulleys'
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
              {pulleyOverview.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
            >
              {pulleyOverview.heading}
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
                images={pulleyOverview.images}
                alt={pulleyOverview.title}
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
                {pulleyOverview.description.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-base sm:text-lg">{paragraph}</p>
                ))}
              </div>
            </motion.div>

            {/* Key Features and Applications */}
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
                  {pulleyOverview.keyFeatures.map((feature, idx) => (
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

              {/* Applications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-primary-900 mb-6 flex items-center">
                  <Factory className="w-6 h-6 mr-3 text-primary-600" />
                  Applications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pulleyOverview.applications.map((app: { title: string; description: string }, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.65 + idx * 0.05 }}
                      className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-primary-300 hover:shadow-sm transition-all"
                    >
                      <h3 className="font-semibold text-primary-900 mb-2">{app.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{app.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Lagging Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 lg:p-10"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-8">Lagging Options</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {pulleyOverview.laggingTypes.map((lagging, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + idx * 0.05 }}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all"
                  >
                    <h3 className="text-lg font-bold text-primary-900 mb-3">{lagging.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{lagging.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Available Products Section */}
            {pulleyProducts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.95 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 lg:p-10"
              >
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-2 flex items-center">
                      <Package className="w-7 h-7 mr-3 text-primary-600" />
                      Available Products
                    </h2>
                    <p className="text-gray-600">Explore our range of precision-engineered pulley products</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pulleyProducts.map((product, idx) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 + idx * 0.05 }}
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
              transition={{ delay: 1.05 }}
              className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 rounded-2xl shadow-xl p-8 sm:p-12 text-center text-white"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Need Custom Pulley Solutions?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Our engineering team specializes in designing custom pulleys with FEA analysis to meet your exact specifications.
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
