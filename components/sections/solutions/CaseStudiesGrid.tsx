'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building, MapPin, TrendingUp, CheckCircle, Quote } from 'lucide-react';
import { CaseStudy } from '@/content/solution-topics';

interface CaseStudiesGridProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudiesGrid({ caseStudies }: CaseStudiesGridProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6">
              Success Stories & Case Studies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real-world implementations demonstrating the transformative impact of our solutions across various industries.
            </p>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  {/* Header */}
                  <div>
                    <div className="flex items-center space-x-4 mb-3">
                      <Building size={20} className="text-primary-600" />
                      <span className="text-sm font-medium text-primary-600 uppercase tracking-wide">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-2">
                      {study.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <span className="font-semibold">{study.company}</span>
                      {study.location && (
                        <>
                          <span>•</span>
                          <div className="flex items-center space-x-1">
                            <MapPin size={16} />
                            <span>{study.location}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h4 className="font-semibold text-red-900 mb-2">Challenge</h4>
                    <p className="text-red-800 leading-relaxed">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-900 mb-2">Solution</h4>
                    <p className="text-blue-800 leading-relaxed">{study.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h4 className="font-semibold text-green-900 mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-green-800">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quote */}
                  {study.quote && (
                    <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                      <Quote size={24} className="text-primary-600 mb-3" />
                      <blockquote className="text-primary-900 font-medium italic mb-3">
                        &ldquo;{study.quote.text}&rdquo;
                      </blockquote>
                      <cite className="text-primary-700 text-sm">
                        — {study.quote.author}, {study.quote.position}
                      </cite>
                    </div>
                  )}
                </div>

                {/* Metrics Side */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {/* Key Metrics */}
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-6 flex items-center space-x-2">
                      <TrendingUp size={24} className="text-primary-600" />
                      <span>Key Metrics</span>
                    </h4>

                    <div className="space-y-6">
                      {study.keyMetrics.map((metric, idx) => (
                        <div key={idx} className="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-2xl font-bold text-primary-600">
                              {metric.value}
                            </span>
                            <span className="text-sm font-medium text-gray-500">
                              {metric.label}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">{metric.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Technologies Implemented</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                Ready to Achieve Similar Results?
              </h3>
              <p className="text-gray-600 mb-6">
                Our experts can help you implement similar solutions tailored to your specific needs and challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/quote"
                  className="inline-flex justify-center items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
                >
                  <span>Get Started Today</span>
                </a>
                <a
                  href="/contact"
                  className="inline-flex justify-center items-center px-6 py-3 border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold rounded-lg transition-colors"
                >
                  <span className='text-center'>Contact Experts</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
