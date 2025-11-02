'use client';

import { useEffect, useRef } from 'react';
import { CheckCircle2, Cog, Factory } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CenterFocusCarousel from '@/components/sections/products/CenterFocusCarousel';
import { longDistanceConveyorOverview } from '@/data/spareng-products/long-distance-conveyors-overview';

export default function LongDistanceConveyorsPage() {
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
              {longDistanceConveyorOverview.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
            >
              {longDistanceConveyorOverview.heading}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={contentRef} className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
            {/* Carousel */}
            {longDistanceConveyorOverview.images.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <CenterFocusCarousel images={longDistanceConveyorOverview.images} alt="Long Distance Conveyors" />
              </motion.div>
            )}

            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 lg:p-10"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-6">Overview</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-base sm:text-lg">{longDistanceConveyorOverview.description}</p>
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
                  {longDistanceConveyorOverview.keyFeatures.map((feature, idx) => (
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
                  {longDistanceConveyorOverview.applications.map((app: { title: string; description: string }, idx: number) => (
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

            {/* Technical Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 lg:p-10"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-8">Technical Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {longDistanceConveyorOverview.technicalCapabilities.map((capability, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.75 + idx * 0.1 }}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all"
                  >
                    <h3 className="text-lg font-bold text-primary-900 mb-3">{capability.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{capability.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 rounded-2xl shadow-xl p-8 sm:p-12 text-center text-white"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Need Custom Long Distance Conveyor Solutions?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Our engineering team can design and deliver tailored long distance conveying systems for your specific requirements.
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
