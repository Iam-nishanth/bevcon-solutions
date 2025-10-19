'use client';

import { motion, AnimatePresence, PanInfo, useMotionValue, useTransform } from 'framer-motion';
import { X, GripHorizontal } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface CategoryBottomSheetProps {
  categories: string[];
  currentCategory?: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function CategoryBottomSheet({ 
  categories, 
  currentCategory, 
  isOpen, 
  onClose 
}: CategoryBottomSheetProps) {
  const pathname = usePathname();
  const [isDragging, setIsDragging] = useState(false);
  const y = useMotionValue(0);
  
  // Create URL-friendly slug
  const createSlug = (category: string) => {
    return category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    // Close if dragged down more than 150px
    if (info.offset.y > 150) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Bottom Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            style={{ y }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 lg:hidden flex flex-col max-h-[80vh]"
          >
            {/* Drag Handle */}
            <div className="flex-shrink-0 py-3 flex items-center justify-center cursor-grab active:cursor-grabbing">
              <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
            </div>

            {/* Header */}
            <div className="flex-shrink-0 flex items-center justify-between px-6 pb-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <GripHorizontal className="w-5 h-5 text-gray-400" />
                <h2 className="text-xl font-bold text-primary-900">Product Categories</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close drawer"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Categories List - Scrollable */}
            <nav className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="space-y-2 pb-6">
                {/* All Products */}
                <li>
                  <Link
                    href="/products"
                    onClick={onClose}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-lg transition-all duration-200 ${
                      pathname === '/products'
                        ? 'bg-primary-900 text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
                    }`}
                  >
                    <span className="font-medium">All Products</span>
                  </Link>
                </li>

                {/* Category Links */}
                {categories.filter(cat => cat !== 'all').map((category) => {
                  const slug = createSlug(category);
                  const isActive = currentCategory === category || pathname === `/products/${slug}`;

                  return (
                    <li key={category}>
                      <Link
                        href={`/products/${slug}`}
                        onClick={onClose}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-lg transition-all duration-200 ${
                          isActive
                            ? 'bg-primary-900 text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
                        }`}
                      >
                        <span className="font-medium text-sm">{category}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Footer */}
            <div className="flex-shrink-0 p-6 pt-4 border-t border-gray-200 bg-gray-50">
              <p className="text-sm text-gray-600 text-center">
                {categories.length} Categories Available
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
