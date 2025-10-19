'use client';

import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

interface IndustryBenefitsProps {
  success: {
    title: string;
    vision: string;
  };
  metrics?: { value: string; label: string }[];
}

export default function IndustryBenefits({ success, metrics }: IndustryBenefitsProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {success.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            {success.vision}
          </p>
        </motion.div>

        {/* Metrics */}
        {metrics && metrics.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl"
              >
                <div className="flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-accent-400" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-300">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
