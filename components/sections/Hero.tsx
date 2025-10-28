'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white pt-32 pb-20">
      {/* Background image overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <span className="inline-block px-4 py-2 bg-primary-50 text-primary-900 rounded-full text-sm font-semibold tracking-wide mb-8 border border-primary-100">
              Integrated Industrial Solutions
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight text-primary-900"
          >
            Industrial Access & Material Handling{' '}
            Solutions
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl mb-8 text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive Entrance Automation, Industrial Doors, Docking Equipments, and Bulk Material Handling Solutions. Backed by 20+ years of proven expertise.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <Link
              href="/products"
              className="px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-lg transition-colors hover:shadow-xl flex items-center space-x-2 group shadow-md"
            >
              <span>Explore Products</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/quote"
              className="px-8 py-4 bg-white border-2 border-gray-300 hover:border-primary-900 hover:bg-primary-50 text-primary-900 font-semibold rounded-lg transition-all"
            >
              Request Quote
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-700"
          >
            <div className="flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full border border-primary-100">
              <div className="w-2 h-2 rounded-full bg-gray-400" />
              <span>1000+ Global Installations</span>
            </div>
            <div className="flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full border border-primary-100">
              <div className="w-2 h-2 rounded-full bg-gray-400" />
              <span>20+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full border border-primary-100">
              <div className="w-2 h-2 rounded-full bg-gray-400" />
              <span>Technical Support</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 md:block hidden"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-sm opacity-70">Scroll to explore</span>
          <ChevronDown size={24} className="opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
