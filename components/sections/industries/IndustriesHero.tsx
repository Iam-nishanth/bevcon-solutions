'use client';

import { motion } from 'framer-motion';

export default function IndustriesHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              Powering Industrial Performance
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The Right Solutions for Your Industry
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-white/90 leading-relaxed"
          >
            By combining global engineering and manufacturing expertise, Bevcon Solutions delivers integrated systems that enhance productivity, keeping industries running efficiently and production-ready every day.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
