'use client';

import { motion } from 'framer-motion';

interface ProductsHeroProps {
  categoryName?: string;
}

export default function ProductsHero({ categoryName }: ProductsHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden flex items-center
      min-h-[220px] sm:min-h-[260px] md:min-h-[360px] lg:min-h-[420px] xl:min-h-[480px] py-10 sm:py-12 md:py-16 lg:py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6">
              {categoryName || 'Our Products'}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-7 md:mb-8 px-1"
          >
            {categoryName 
              ? `Explore our comprehensive range of ${categoryName.toLowerCase()} solutions from trusted brands.`
              : 'Comprehensive range of Industrial doors, High-speed Door solutions, Docking Equipment / Dock Levellers, and Bulk Material Handling Equipment from world-class brands.'
            }
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm"
          >
            {[
              'Industrial Doors',
              'High-Speed Doors',
              'Docking Equipment / Dock Levellers',
              'BMHE Components'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <div className="w-2 h-2 min-w-2 min-h-2 rounded-full bg-gray-400" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
