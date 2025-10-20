'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  title: string;
  image: string | string[];
  features: string[];
  applications: string[];
  brand?: string;
  category?: string | string[];
}

export default function ProductCard({ 
  title, 
  image, 
  features, 
  applications,
  brand,
  category 
}: ProductCardProps) {
  const [imageError, setImageError] = useState(false);
  const imageUrl = Array.isArray(image) ? image[0] : image;
  const displayCategory = Array.isArray(category) ? category[0] : category;
  
  // Check if the image URL is valid
  const isValidImageUrl = imageUrl && imageUrl !== '' && !imageError;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col"
    >
      {/* Image */}
      <div className="relative h-56 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        {isValidImageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="w-10 h-10 bg-primary-300 rounded-full"></div>
              </div>
              <p className="text-sm text-gray-500 font-medium">Product Image</p>
              <p className="text-xs text-gray-400">Coming Soon</p>
            </div>
          </div>
        )}
        {brand && brand !== 'Loading Systems' && (
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-900">
            {brand}
          </div>
        )}
        {displayCategory && (
          <div className="absolute top-4 right-4 bg-primary-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white">
            {displayCategory}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-primary-900 mb-4 line-clamp-2 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>

        {/* Features */}
        {features.length > 0 && (
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">Key Features</p>
            <ul className="space-y-1.5">
              {features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="line-clamp-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Applications */}
        {applications.length > 0 && (
          <div className="mt-auto">
            <p className="text-sm font-semibold text-gray-700 mb-2">Applications</p>
            <div className="flex flex-wrap gap-2">
              {applications.slice(0, 3).map((app, idx) => (
                <span 
                  key={idx} 
                  className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full line-clamp-1"
                >
                  {app}
                </span>
              ))}
              {applications.length > 3 && (
                <span className="text-xs bg-primary-50 text-primary-700 px-2.5 py-1 rounded-full font-medium">
                  +{applications.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
