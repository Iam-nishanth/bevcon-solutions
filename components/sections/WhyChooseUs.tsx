'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Lightbulb, Map, Phone, Trophy } from 'lucide-react';
import { whyChooseUs } from '@/content/company';

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  'check-circle': CheckCircle,
  award: Award,
  lightbulb: Lightbulb,
  map: Map,
  phone: Phone,
  trophy: Trophy,
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl shadow-xl relative overflow-hidden flex items-center justify-center"
          >
            <div className="text-2xl font-heading font-bold text-primary-900 text-center px-8">
              Why Choose Bevcon Solutions
            </div>
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-heading font-bold text-gray-900 mb-6"
            >
              Why Leading Companies Choose Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 mb-8"
            >
              Bringing world-class industrial solutions to Australia with proven technology and comprehensive support.
            </motion.p>

            <div className="space-y-4">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                    {React.createElement(iconMap[item.icon], { size: 24 })}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-lg transition-all hover:scale-105 shadow-md hover:shadow-lg"
              >
                Request a Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
