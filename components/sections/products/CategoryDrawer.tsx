'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface CategoryDrawerProps {
  categories: string[];
  currentCategory?: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function CategoryDrawer({ 
  categories, 
  currentCategory, 
  isOpen, 
  onClose 
}: CategoryDrawerProps) {
  const pathname = usePathname();
  
  // Create URL-friendly slug
  const createSlug = (category: string) => {
    return category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
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

          {/* Drawer */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 bottom-0 w-80 bg-white shadow-2xl z-50 lg:hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-primary-900">Product Categories</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close drawer"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Categories List */}
            <nav className="flex-1 overflow-y-auto p-6">
              <ul className="space-y-2">
                {/* All Products */}
                <li>
                  <Link
                    href="/products"
                    onClick={onClose}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                      pathname === '/products'
                        ? 'bg-primary-900 text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-medium">All Products</span>
                  </Link>
                </li>

                {/* Category Links */}
                {categories.map((category) => {
                  const slug = createSlug(category);
                  const isActive = currentCategory === category || pathname === `/products/${slug}`;

                  return (
                    <li key={category}>
                      <Link
                        href={`/products/${slug}`}
                        onClick={onClose}
                        className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                          isActive
                            ? 'bg-primary-900 text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-50'
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
            <div className="p-6 border-t border-gray-200 bg-gray-50">
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
