'use client';

import { useState, useMemo } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import ProductCard from './ProductCard';
import ProductSidebar from './ProductSidebar';
import CategoryDrawer from './CategoryDrawer';

// Import all product data
import { allProducts as bevconProducts } from '@/data/bevcon-products';
import { allProducts as sparengProducts } from '@/data/spareng-products';

// Combine all products
const allProducts = [...bevconProducts, ...sparengProducts];

export default function ProductsGrid() {
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set<string>();
    allProducts.forEach(product => {
      if (Array.isArray(product.category)) {
        product.category.forEach(cat => cats.add(cat));
      } else {
        cats.add(product.category);
      }
    });
    return ['all', ...Array.from(cats)].sort();
  }, []);

  // Get unique brands (excluding Loading Systems)
  const brands = useMemo(() => {
    const brandSet = new Set<string>();
    allProducts.forEach(product => {
      if (product.brand && product.brand !== 'Loading Systems') {
        brandSet.add(product.brand);
      }
    });
    return ['all', ...Array.from(brandSet)].sort();
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    // First filter by brand
    const brandFiltered = allProducts.filter(product => {
      const brandMatch = selectedBrand === 'all' || product.brand === selectedBrand;
      return brandMatch;
    });

    // Remove duplicates - keep only first product with each title
    const seenTitles = new Set<string>();
    return brandFiltered.filter(product => {
      if (seenTitles.has(product.title)) {
        return false;
      }
      seenTitles.add(product.title);
      return true;
    });
  }, [selectedBrand]);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all w-full justify-center text-primary-900 font-medium"
          >
            <SlidersHorizontal className="w-5 h-5" />
            <span>Filter by Category</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <ProductSidebar categories={categories} />
          </div>

          {/* Mobile Drawer */}
          <CategoryDrawer
            categories={categories}
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          />

          {/* Main Content */}
          <div className="flex-1">
            {/* Filters */}
            <div className="mb-12 space-y-6">

              {/* Brand Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Filter by Brand
                </label>
                <div className="flex flex-wrap gap-2">
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => setSelectedBrand(brand)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedBrand === brand
                          ? 'bg-secondary-500 text-white shadow-md'
                          : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      {brand === 'all' ? 'All Brands' : brand}
                    </button>
                  ))}
                </div>
              </div>

              {/* Results count */}
              <div>
                <p className="text-gray-600">
                  Showing <span className="font-semibold text-primary-900">{filteredProducts.length}</span> products
                </p>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    title={product.title}
                    image={product.image}
                    features={product.features}
                    applications={product.applications}
                    brand={product.brand}
                    category={product.category}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No products found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
