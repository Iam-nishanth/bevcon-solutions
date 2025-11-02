'use client';

import { useEffect, useRef } from 'react';
import { CheckCircle2, Cog, Factory, Package } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CenterFocusCarousel from '@/components/sections/products/CenterFocusCarousel';
import ProductCard from '@/components/sections/products/ProductCard';
import { dustExtractionEquipmentOverview } from '@/data/spareng-products/dust-extraction-equipment-overview';
import { dustExtractionSystemsProducts } from '@/data/spareng-products/dust-extraction-systems';

export default function DustExtractionSystemsPage() {
  const contentRef = useRef<HTMLDivElement | null>(null);

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
              {dustExtractionEquipmentOverview.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
            >
              {dustExtractionEquipmentOverview.heading}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={contentRef} className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 lg:p-10"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-6">Overview</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-base sm:text-lg">{dustExtractionEquipmentOverview.description}</p>
              </div>
            </motion.div>

            {/* Key Features and Applications Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-primary-900 mb-6 flex items-center">
                  <Cog className="w-6 h-6 mr-3 text-primary-600" />
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {dustExtractionEquipmentOverview.keyFeatures.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + idx * 0.05 }}
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
                transition={{ delay: 0.45 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-primary-900 mb-6 flex items-center">
                  <Factory className="w-6 h-6 mr-3 text-primary-600" />
                  Applications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {dustExtractionEquipmentOverview.applications.map((app: { title: string; description: string }, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.55 + idx * 0.05 }}
                      className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-primary-300 hover:shadow-sm transition-all"
                    >
                      <h3 className="font-semibold text-primary-900 mb-2">{app.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{app.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* System Types */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 lg:p-10"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-8">System Types</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dustExtractionEquipmentOverview.systemTypes.map((type, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65 + idx * 0.1 }}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all"
                  >
                    <h3 className="text-lg font-bold text-primary-900 mb-3">{type.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{type.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Available Products Section */}
            {dustExtractionSystemsProducts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 lg:p-10"
              >
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-2 flex items-center">
                      <Package className="w-7 h-7 mr-3 text-primary-600" />
                      Available Products
                    </h2>
                    <p className="text-gray-600">Explore our range of dust extraction system components</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {dustExtractionSystemsProducts.map((product, idx) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.85 + idx * 0.05 }}
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
              transition={{ delay: 0.95 }}
              className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 rounded-2xl shadow-xl p-8 sm:p-12 text-center text-white"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Need Custom Dust Extraction Solutions?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Our team can design comprehensive dust collection systems tailored to your specific industrial requirements.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-primary-900 px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
              >
                Request a Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
