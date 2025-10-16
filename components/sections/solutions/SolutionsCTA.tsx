'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function SolutionsCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Ready to Transform Your Operations?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
          >
            Let's discuss how our integrated solutions can optimize your facility's 
            efficiency, safety, and productivity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-lg transition-all hover:scale-105 hover:shadow-xl flex items-center space-x-2 group shadow-md"
            >
              <span>Request Consultation</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/products"
              className="px-8 py-4 bg-white text-primary-900 hover:bg-gray-100 font-semibold rounded-lg transition-all flex items-center space-x-2"
            >
              <span>View Products</span>
            </Link>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 text-sm"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Phone size={18} />
              </div>
              <div className="text-left">
                <div className="text-gray-400 text-xs">Call Us</div>
                <div className="font-semibold">+61-XXX-XXX-XXX</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Mail size={18} />
              </div>
              <div className="text-left">
                <div className="text-gray-400 text-xs">Email Us</div>
                <div className="font-semibold">info@bevconsolutions.com.au</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
