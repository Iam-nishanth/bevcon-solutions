'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { products } from '@/content/products';

const productImageMap: Record<string, string> = {
  'High-Speed Roll Doors': "/images/bevcon-products/nergeco/Doors for Clean Processes/Flexible,_high-speed_curtain_easily_installed_in_clean_rooms.jpg",
  'Hydraulic Dock Levelers': "/images/bevcon-products/loading-systems/CD/imagecontent-253.png",
  'Automatic Sliding Doors': '/images/bevcon-products/nergeco/SL/High-speed flexible door lined with a fire door (SL) .jpg',
  'Conveying Systems': "/images/spareng-products/Conveyor-belt.jpg",
};

// Map product names to navigation links
const productLinkMap: Record<string, string> = {
  'High-Speed Roll Doors': '/products/high-speed-doors',
  'Hydraulic Dock Levelers': '/products/dock-levelers',
  'Automatic Sliding Doors': '/products/fire-rated-shutters',
  'Conveying Systems': '/products/belt-conveyors/standard-belt-conveyor',
};

export default function FeaturedProducts() {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium uppercase tracking-wide mb-4"
          >
            Our Products
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4"
          >
            Comprehensive Product Range
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Industry-leading Entrance Automation Doors, Docking Equipments, and Bulk Material Handling Systems
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                <Image
                  src={productImageMap[product.name]}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-primary-50 text-primary-900 text-xs font-semibold rounded-full mb-3 border border-primary-100">
                  {product.subcategory}
                </div>
                <h3 className="text-xl font-heading font-bold mb-2 text-gray-900 group-hover:text-primary-900 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-700 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {product.shortDescription}
                </p>
                <Link
                  href={productLinkMap[product.name] || `/products/${product.slug}`}
                  className="text-primary-900 hover:text-primary-600 font-medium text-sm flex items-center space-x-2 group/link"
                >
                  <span>View Details</span>
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA - Commented out until /products page is created
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/products"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary-900 hover:bg-primary-800 text-white font-semibold rounded-lg transition-all hover:scale-105 shadow-md hover:shadow-lg"
          >
            <span>View All Products</span>
            <ArrowRight size={20} />
          </Link>
        </motion.div>
        */}
      </div>
    </section>
  );
}
