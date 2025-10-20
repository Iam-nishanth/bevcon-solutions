'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Zap } from 'lucide-react';
import { SolutionTopic } from '@/content/solution-topics';

interface SolutionsTopicOverviewProps {
  topic: SolutionTopic;
}

export default function SolutionsTopicOverview({ topic }: SolutionsTopicOverviewProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Overview Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6">
                  Comprehensive {topic.name} Solutions
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {topic.overview}
                </p>

                {/* Key Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {topic.keyBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-primary-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                {/* Stats Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-xl border border-primary-200"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                      <TrendingUp size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-900">Proven Results</h3>
                      <p className="text-primary-700">Across {topic.caseStudies.length} successful implementations</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-900">30-80%</div>
                      <div className="text-sm text-primary-700">Efficiency Gains</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-900">12-24</div>
                      <div className="text-sm text-primary-700">Months ROI</div>
                    </div>
                  </div>
                </motion.div>

                {/* Technology Icons */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-gray-50 p-6 rounded-xl"
                >
                  <h4 className="font-semibold text-gray-900 mb-4">Advanced Technologies</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Automation', 'IoT Sensors', 'AI Optimization', 'Real-time Monitoring'].map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white text-gray-700 text-sm font-medium rounded-full border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Related Solutions */}
          {topic.relatedSolutions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-t border-gray-200 pt-16"
            >
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8 text-center">
                Related Solutions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {topic.relatedSolutions.map((solutionId, index) => (
                  <motion.div
                    key={solutionId}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Zap size={24} className="text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {solutionId.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </h4>
                    <p className="text-sm text-gray-600">
                      Specialized equipment for {topic.name.toLowerCase()} applications
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
