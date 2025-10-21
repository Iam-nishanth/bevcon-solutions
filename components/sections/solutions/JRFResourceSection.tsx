'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ResourceDownload from '@/components/ui/ResourceDownload';

interface JRFResourceSectionProps {
  context: 'fume-extraction' | 'environmental-control' | 'emergency-gas-treatment';
}

export default function JRFResourceSection({ context }: JRFResourceSectionProps) {
  const getContextualContent = () => {
    switch (context) {
      case 'fume-extraction':
        return {
          title: 'Learn More About Our Fume Extraction Capabilities',
          description: 'Discover JR Fibreglass Industries\' world-record fume extraction systems, including the largest emergency chlorine scrubber and ultra-high volume FRP fans.',
          highlight: 'Features world record emergency chlorine scrubber (9500 kg/hr) and ultra-high volume FRP fans'
        };
      case 'environmental-control':
        return {
          title: 'Comprehensive Environmental Control Solutions',
          description: 'Explore JR Fibreglass Industries\' complete range of environmental control systems and pollution management technologies.',
          highlight: 'Includes mega-scale installations and integrated environmental solutions'
        };
      case 'emergency-gas-treatment':
        return {
          title: 'Emergency Gas Treatment Expertise',
          description: 'Learn about JR Fibreglass Industries\' critical safety systems and emergency response capabilities for catastrophic gas releases.',
          highlight: 'World\'s largest emergency chlorine scrubber and proven emergency response systems'
        };
      default:
        return {
          title: 'JR Fibreglass Industries Overview',
          description: 'Comprehensive overview of JR Fibreglass Industries\' capabilities and world-record achievements.',
          highlight: 'Complete company overview and technical capabilities'
        };
    }
  };

  const content = getContextualContent();

  return (
    <section className="py-12 bg-gradient-to-r from-primary-50 to-primary-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {content.title}
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-2">
              {content.description}
            </p>
            <p className="text-primary-600 font-medium text-sm">
              {content.highlight}
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <ResourceDownload
              title="JR Fibreglass Industries - Complete Overview"
              description="Detailed company profile featuring world records, technical capabilities, manufacturing facilities, and comprehensive product range with specifications and case studies."
              fileUrl="/JRE FIBREGLASS Overview.pdf"
              fileName="JRE_FIBREGLASS_Overview.pdf"
              variant="default"
              className="bg-white shadow-lg"
            />
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/80 rounded-lg border border-primary-200">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>50+ years of expertise</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>3844+ systems manufactured</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Multiple world records</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
