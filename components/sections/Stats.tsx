'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '@/content/company';

export default function Stats() {
  return (
    <section className="py-16 bg-primary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-lg opacity-90">{stat.label}</div>
              {stat.description && (
                <div className="text-sm opacity-70 mt-1">{stat.description}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
