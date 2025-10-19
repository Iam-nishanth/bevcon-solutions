'use client';

import { motion } from 'framer-motion';
import { IndustryContent } from '@/content/industries-examples';

interface IndustryHeroProps {
  industry: IndustryContent;
}

export default function IndustryHero({ industry }: IndustryHeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {industry.hero.title}
          </h1>
        </motion.div>
        
        {/* Opening Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12"
        >
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center">
            {industry.hero.openingStory}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
