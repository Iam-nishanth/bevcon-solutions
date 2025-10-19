'use client';

import { motion } from 'framer-motion';

interface IndustrySolutionsProps {
  solution: {
    title: string;
    intro: string;
    examples: {
      scenario: string;
      howWeHelp: string;
      result: string;
    }[];
  };
}

export default function IndustrySolutions({ solution }: IndustrySolutionsProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {solution.title}
          </h2>
          <p className="text-xl text-gray-600">
            {solution.intro}
          </p>
        </motion.div>

        <div className="space-y-12">
          {solution.examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200"
            >
              <div className="grid md:grid-cols-3 gap-6">
                {/* Scenario */}
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                    The Scenario
                  </div>
                  <p className="text-gray-700">{example.scenario}</p>
                </div>

                {/* How We Help */}
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                    How We Help
                  </div>
                  <p className="text-gray-700">{example.howWeHelp}</p>
                </div>

                {/* Result */}
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-accent-600 uppercase tracking-wide">
                    The Result
                  </div>
                  <p className="text-gray-700 font-medium">{example.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
