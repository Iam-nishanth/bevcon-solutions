'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { INDUSTRY_IMAGES } from '@/content/images';

const industries = [
  { name: 'Pharmaceutical & Life Sciences', image: INDUSTRY_IMAGES.pharmaceutical, href: '/industries/pharmaceutical' },
  { name: 'Food & Beverage Processing', image: INDUSTRY_IMAGES.foodBeverage, href: '/industries/food-beverage' },
  { name: 'Warehouse & Logistics', image: INDUSTRY_IMAGES.warehouseLogistics, href: '/industries/warehouse-logistics' },
  { name: 'Manufacturing & Heavy Industry', image: INDUSTRY_IMAGES.manufacturing, href: '/industries/manufacturing' },
  { name: 'Automotive Production', image: INDUSTRY_IMAGES.automotive, href: '/industries/automotive' },
  { name: 'Cold Storage & Refrigeration', image: INDUSTRY_IMAGES.coldStorage, href: '/industries/cold-storage' },
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
                className="block group relative overflow-hidden rounded-xl h-64 hover:shadow-2xl transition-all"
              >
                {/* Background Image */}
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70 group-hover:from-black/70 group-hover:to-black/80 transition-all" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col justify-end h-full p-8">
                  <h3 className="text-2xl font-heading font-bold mb-3 text-white">{industry.name}</h3>
                  <div className="flex items-center space-x-2 text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                    <span>Explore Solutions</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
