'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  DoorOpen, 
  Zap, 
  Package, 
  Repeat, 
  Shield, 
  Lightbulb, 
  Thermometer,
  Flame,
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import { solutions, solutionCategories } from '@/content/solutions';

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  'door-open': DoorOpen,
  'zap': Zap,
  'package': Package,
  'repeat': Repeat,
  'shield': Shield,
  'lightbulb': Lightbulb,
  'thermometer': Thermometer,
  'flame': Flame,
};

export default function SolutionsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredSolutions = selectedCategory === 'all' 
    ? solutions
    : solutions.filter(sol => {
        const category = solutionCategories.find(cat => cat.solutions.includes(sol.id));
        return category && category.name === selectedCategory;
      });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-primary-900 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Solutions
            </button>
            {solutionCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === category.name
                    ? 'bg-primary-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredSolutions.map((solution, index) => {
            const Icon = iconMap[solution.icon];
            
            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-lg bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-900 group-hover:bg-primary-900 group-hover:text-white transition-colors">
                      {Icon && <Icon size={28} />}
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-gray-900 group-hover:text-primary-900 transition-colors">
                        {solution.name}
                      </h3>
                      <p className="text-sm text-primary-600 font-medium mt-1">
                        {solution.tagline}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.shortDescription}
                </p>

                {/* Key Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                    <CheckCircle size={18} className="text-primary-600" />
                    <span>Key Benefits</span>
                  </h4>
                  <ul className="space-y-2">
                    {solution.keyBenefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Industry Trend Highlight */}
                {solution.industryTrends.length > 0 && (
                  <div className="mb-6 p-4 bg-gradient-to-br from-primary-50 to-gray-50 rounded-lg border border-primary-100">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2 text-sm">
                      <TrendingUp size={16} className="text-accent-500" />
                      <span>Industry Trend</span>
                    </h4>
                    <p className="text-sm text-gray-700 font-medium mb-1">
                      {solution.industryTrends[0].title}
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {solution.industryTrends[0].description}
                    </p>
                  </div>
                )}

                {/* Case Study Badge (if available) */}
                {solution.caseStudyHighlight && (
                  <div className="mb-6 flex items-center space-x-2 text-xs text-primary-700 bg-primary-50 px-3 py-2 rounded-full w-fit">
                    <CheckCircle size={14} />
                    <span className="font-semibold">Case Study Available</span>
                  </div>
                )}

                {/* Learn More Link */}
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="inline-flex items-center space-x-2 text-primary-900 hover:text-primary-600 font-semibold group/link transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-4 bg-primary-50 rounded-lg border border-primary-100">
            <p className="text-gray-700">
              <span className="font-semibold text-primary-900">Need a custom solution?</span> Our engineering team can design integrated systems tailored to your specific requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
