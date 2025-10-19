'use client';

import { motion } from 'framer-motion';

interface IndustryOverviewProps {
  overview: {
    title: string;
    introduction: string;
    sections: {
      title: string;
      content: string;
    }[];
  };
}

export default function IndustryOverview({ overview }: IndustryOverviewProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {overview.title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {overview.introduction}
          </p>
        </motion.div>

        {/* Subsections */}
        <div className="space-y-12">
          {overview.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-l-4 border-primary-600 pl-6"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {section.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
