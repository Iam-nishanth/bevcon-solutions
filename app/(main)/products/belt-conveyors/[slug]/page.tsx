'use client';

import { useEffect, useRef } from 'react';
import { notFound, useParams } from 'next/navigation';
import { CheckCircle2, Factory } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CenterFocusCarousel from '@/components/sections/products/CenterFocusCarousel';
import { beltConveyorProducts } from '@/data/spareng-products/belt-conveyors';

export default function BeltConveyorDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const contentRef = useRef<HTMLDivElement | null>(null);

  // Find the product by slug
  const product = beltConveyorProducts.find(p => p.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  }, [slug]);

  if (!product) {
    notFound();
  }

  const images = Array.isArray(product.image) ? product.image : [product.image];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section with Title */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            >
              {product.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
            >
              {product.heading || 'Comprehensive bulk material handling solutions'}
            </motion.p>
            {product.brand && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <span className="text-sm font-medium text-white/90">Brand: </span>
                <span className="text-sm font-bold text-white">{product.brand}</span>
              </motion.div>
            )}
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
                images={images}
                alt={product.title}
              />
            </motion.div>

            {/* Overview */}
            {product.description && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 lg:p-10"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-6">Overview</h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                  {product.description.split('\n\n').map((paragraph: string, idx: number) => (
                    <p key={idx} className="text-base sm:text-lg">{paragraph}</p>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Features and Applications Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-primary-900 mb-6 flex items-center">
                  <CheckCircle2 className="w-6 h-6 mr-3 text-primary-600" />
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
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
                <div className="grid grid-cols-2 gap-3">
                  {product.applications.map((app, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.65 + idx * 0.05 }}
                      className="bg-gray-50 px-4 py-3 rounded-lg text-sm text-gray-700 font-medium border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors text-center"
                    >
                      {app}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Technical Specifications */}
            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 lg:p-10"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-6">Technical Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {Object.entries(product.specifications).map(([key, value], idx) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.75 + idx * 0.05 }}
                      className="bg-gray-50 rounded-xl p-5 border border-gray-200"
                    >
                      <dt className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                        {key.replace(/_/g, ' ')}
                      </dt>
                      <dd className="text-base font-medium text-gray-900">{value}</dd>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Compatible Equipment */}
            {product.compatibleEquipment && product.compatibleEquipment.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-primary-900 mb-6">Compatible Equipment</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.compatibleEquipment.map((equipment, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.85 + idx * 0.05 }}
                      className="flex items-center bg-gray-50 px-4 py-3 rounded-lg border border-gray-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">{equipment}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 rounded-2xl shadow-xl p-8 sm:p-12 text-center text-white"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Need More Information?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Our experts are ready to help you find the perfect solution for your material handling needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3.5 bg-white text-primary-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
