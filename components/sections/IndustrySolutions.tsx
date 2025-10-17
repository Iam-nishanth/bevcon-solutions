'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Factory, Warehouse, Pill, Utensils, Snowflake, Car } from 'lucide-react';

const industries = [
  { name: 'Pharmaceutical & Life Sciences', icon: Pill, href: '/industries/pharmaceutical' },
  { name: 'Food & Beverage Processing', icon: Utensils, href: '/industries/food-beverage' },
  { name: 'Warehouse & Logistics', icon: Warehouse, href: '/industries/warehouse-logistics' },
  { name: 'Manufacturing & Heavy Industry', icon: Factory, href: '/industries/manufacturing' },
  { name: 'Automotive Production', icon: Car, href: '/industries/automotive' },
  { name: 'Cold Storage & Refrigeration', icon: Snowflake, href: '/industries/cold-storage' },
];

export default function IndustrySolutions() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4"
          >
            Solutions for Every Industry
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Tailored entrance and bulk material handling solutions designed for your sector&apos;s unique challenges
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={industry.href}
                className="block group relative overflow-hidden rounded-xl h-64 bg-gradient-to-br from-primary-50 to-gray-50 p-8 hover:shadow-lg hover:border-primary-200 transition-all border border-gray-200"
              >
                <div className="flex flex-col justify-between h-full">
                  <div className="w-16 h-16 rounded-lg bg-white border border-primary-100 flex items-center justify-center text-primary-900 group-hover:text-secondary-500 transition-colors">
                    <industry.icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold mb-2 text-gray-900 group-hover:text-primary-900 transition-colors">{industry.name}</h3>
                    <div className="flex items-center space-x-2 text-sm font-medium text-gray-600 group-hover:text-secondary-500 transition-colors">
                      <span>Explore Solutions</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
