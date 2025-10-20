'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { contactInfo } from '@/content/company';

export default function CTASection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white  overflow-hidden h-[450px] flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
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
            Ready to Transform Your Facility?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl mb-10 text-white/90"
          >
            Get in touch with our experts for a free consultation and customized quote
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/quote"
              className="px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-lg transition-colors shadow-xl flex items-center space-x-2 group"
            >
              <span>Request a Quote</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href={`tel:${contactInfo.phone}`}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-primary-900 font-semibold rounded-lg transition-all flex items-center space-x-2 hover:shadow-xl"
            >
              <Phone size={20} />
              <span>Call: {contactInfo.phone}</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
