'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Cog, MapPin, LucideIcon } from 'lucide-react';
import { valuePropositions } from '@/content/company';

const iconMap: Record<string, LucideIcon> = {
  layers: Layers,
  cog: Cog,
  'map-pin': MapPin,
};

export default function ValueProposition() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valuePropositions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-white border border-gray-200 hover:border-primary-200 hover:shadow-md transition-all group"
            >
              <div className="w-16 h-16 rounded-lg bg-primary-50 border border-primary-100 group-hover:border-secondary-500 flex items-center justify-center text-primary-900 group-hover:text-secondary-500 transition-all mb-6">
                {React.createElement(iconMap[item.icon], { size: 32 })}
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
