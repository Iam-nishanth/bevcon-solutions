'use client';

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, CheckCircle2, Factory } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/data/spareng-products/product-types';
import ProductImageCarousel from './ProductImageCarousel';

interface ProductDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

function ProductDetailsModalContent({ isOpen, onClose, product }: ProductDetailsModalProps) {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const images = Array.isArray(product.image) ? product.image : [product.image];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[9999] overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-2 sm:p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-white rounded-lg sm:rounded-2xl shadow-2xl w-full max-w-full sm:max-w-[95vw] lg:max-w-[85vw] xl:max-w-[80vw] max-h-[95vh] sm:max-h-[90vh] overflow-hidden"
              >
                {/* Header */}
                <div className="sticky top-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 flex items-start justify-between z-10">
                  <div className="flex-1 pr-2">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">{product.title}</h2>
                    <p className="text-white/90 text-xs sm:text-sm hidden sm:block">
                      {product.heading || 'Comprehensive bulk material handling solutions'}
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-white/80 hover:text-white transition-colors p-1.5 sm:p-2 hover:bg-white/10 rounded-lg flex-shrink-0"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>

                {/* Content */}
                <div className="overflow-y-auto max-h-[calc(95vh-140px)] sm:max-h-[calc(90vh-180px)] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
                  
                  {/* Images Carousel */}
                  {images.length > 0 && images[0] !== '' && (
                    <div className="mb-4 sm:mb-6 lg:mb-8">
                      <ProductImageCarousel 
                        images={images}
                        alt={product.title}
                      />
                    </div>
                  )}

                  {/* Overview */}
                  {product.description && (
                    <div className="mb-4 sm:mb-6 lg:mb-8">
                      <h3 className="text-lg sm:text-xl font-bold text-primary-900 mb-3 sm:mb-4">Overview</h3>
                      <div className="prose max-w-none text-gray-700 leading-relaxed space-y-2 sm:space-y-3 text-sm sm:text-base">
                        {product.description.split('\n\n').map((paragraph: string, idx: number) => (
                          <p key={idx}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6 lg:mb-8">
                    {/* Key Features */}
                    <div className="bg-gray-50 rounded-lg p-4 sm:p-5 lg:p-6 border border-gray-100">
                      <h3 className="text-base sm:text-lg font-bold text-primary-900 mb-3 sm:mb-4 flex items-center">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary-600" />
                        Key Features
                      </h3>
                      <ul className="space-y-2 sm:space-y-2.5">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-xs sm:text-base">
                            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Applications */}
                    <div className="bg-gray-50 rounded-lg p-4 sm:p-5 lg:p-6 border border-gray-100">
                      <h3 className="text-base sm:text-lg font-bold text-primary-900 mb-3 sm:mb-4 flex items-center">
                        <Factory className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary-600" />
                        Applications
                      </h3>
                      <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                        {product.applications.map((app, idx) => (
                          <div 
                            key={idx}
                            className="bg-white px-2 sm:px-3 py-1.5 sm:py-2 rounded text-[10px] sm:text-base text-gray-700 font-medium border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors text-center"
                          >
                            {app}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Technical Specifications */}
                  {product.specifications && Object.keys(product.specifications).length > 0 && (
                    <div className="bg-gray-50 rounded-lg p-4 sm:p-5 lg:p-6 border border-gray-100 mb-4 sm:mb-6">
                      <h3 className="text-base sm:text-lg font-bold text-primary-900 mb-3 sm:mb-4">Technical Specifications</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <div key={key} className="bg-white rounded-lg p-3 sm:p-4 border border-gray-200">
                            <dt className="text-[10px] sm:text-base font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                              {key.replace(/_/g, ' ')}
                            </dt>
                            <dd className="text-xs sm:text-base text-gray-900 font-medium">{value}</dd>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Compatible Equipment */}
                  {product.compatibleEquipment && product.compatibleEquipment.length > 0 && (
                    <div className="bg-gray-50 rounded-lg p-4 sm:p-5 lg:p-6 border border-gray-100">
                      <h3 className="text-base sm:text-lg font-bold text-primary-900 mb-3 sm:mb-4">Compatible Equipment</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                        {product.compatibleEquipment.map((equipment, idx) => (
                          <div 
                            key={idx}
                            className="flex items-center bg-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-gray-200"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-600 mr-2 flex-shrink-0" />
                            <span className="text-gray-700 text-xs sm:text-base">{equipment}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer CTA */}
                <div className="sticky bottom-0 bg-gray-200/60 border-t border-gray-200 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
                  <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
                    Need more information about {product.title}?
                  </p>
                  <a
                    href="/contact"
                    onClick={onClose}
                    className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-2.5 bg-primary-900 text-white rounded-lg font-medium hover:bg-primary-800 transition-colors text-xs sm:text-base text-center"
                  >
                    Contact Us
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function ProductDetailsModal(props: ProductDetailsModalProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <ProductDetailsModalContent {...props} />,
    document.body
  );
}
