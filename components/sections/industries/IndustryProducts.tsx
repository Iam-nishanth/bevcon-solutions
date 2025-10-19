'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface IndustryProductsProps {
  products: {
    name: string;
    useCase: string;
    keyBenefit: string;
  }[];
}

// Map product names to their actual category URLs
const getProductUrl = (productName: string): string => {
  const productMap: Record<string, string> = {
    'High-Speed Roll Doors': '/products/high-speed-doors',
    'Hydraulic Dock Levelers': '/products/dock-levelers',
    'Automatic Sliding Doors': '/products/high-speed-doors',
    'Roller Conveyor Systems': '/products/conveyor-components',
  };
  
  return productMap[productName] || '/products';
};

export default function IndustryProducts({ products }: IndustryProductsProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Solutions
          </h2>
          <p className="text-xl text-gray-600">
            Industry-specific applications of our proven technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Application
                  </div>
                  <p className="text-gray-700">{product.useCase}</p>
                </div>

                <div>
                  <div className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-1">
                    Key Benefit
                  </div>
                  <p className="text-gray-900 font-medium">{product.keyBenefit}</p>
                </div>
              </div>

              <Link
                href={getProductUrl(product.name)}
                className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
              >
                View Product Details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
