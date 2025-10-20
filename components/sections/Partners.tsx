'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { partners } from '@/content/company';
import { cn } from '@/lib/utils';
import ResourceDownload from '@/components/ui/ResourceDownload';

export default function Partners() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-gray-50 to-primary-50 text-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Our Associate Companies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Extending proven expertise from India to serve Australian industries
          </motion.p>
        </div>

        <div className="grid grid-cols-1  xl:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={cn("bg-white text-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100",
                partner.name === 'JR Fibreglass Industries' ? 'sm:col-span-2 xl:col-span-1' : ''
              )}
            >
              <div className="h-20 mb-6 flex items-center">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={200}
                  height={80}
                  className="object-contain h-full w-auto"
                />
              </div>
              
              <div className="text-primary-600 font-semibold mb-4">
                {partner.tagline}
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {partner.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Specialization:</h4>
                <ul className="space-y-2">
                  {partner.specialization.map((spec, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 items-center">
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold group"
                >
                  <span>Visit Website</span>
                  <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                
                {partner.name === 'JR Fibreglass Industries' && (
                  <ResourceDownload
                    title="JR Fibreglass Company Overview"
                    description="Comprehensive overview of JR Fibreglass Industries' capabilities, world records, and product range"
                    fileUrl="/JRE FIBREGLASS Overview.pdf"
                    fileName="JRE_FIBREGLASS_Overview.pdf"
                    variant="inline"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
