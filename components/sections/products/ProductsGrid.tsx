'use client';

import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import ProductCard from './ProductCard';
import ProductSidebar from './ProductSidebar';
import CategoryBottomSheet from './CategoryBottomSheet';

// Import all product data
import { allProducts as bevconProducts } from '@/data/bevcon-products';
import { allProducts as sparengProducts } from '@/data/spareng-products';
// TODO: Uncomment for next rollout - JR Fibreglass products need accuracy review
// import { allJRFProducts } from '@/data/jr-fibreglass';

// Combine all products
const allProducts = [...bevconProducts, ...sparengProducts];

// JR Fibreglass categories
const jrfCategories = [
  "Fume Extraction & Scrubbing Systems",
  "FRP - GRP Equipments"
];

export default function ProductsGrid() {
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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
    // Add JR Fibreglass categories
    jrfCategories.forEach(cat => cats.add(cat));
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
    let filtered = allProducts.filter(product => {
      const brandMatch = selectedBrand === 'all' || product.brand === selectedBrand;
      return brandMatch;
    });

    // Then filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.title.toLowerCase().includes(query) ||
        product.brand?.toLowerCase().includes(query) ||
        (Array.isArray(product.category) 
          ? product.category.some(cat => cat.toLowerCase().includes(query))
          : product.category.toLowerCase().includes(query))
      );
    }

    // Remove duplicates - keep only first product with each title
    const seenTitles = new Set<string>();
    return filtered.filter(product => {
      if (seenTitles.has(product.title)) {
        return false;
      }
      seenTitles.add(product.title);
      return true;
    });
  }, [selectedBrand, searchQuery]);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <ProductSidebar categories={categories} />
          </div>

          {/* Mobile Bottom Sheet */}
          <CategoryBottomSheet
            categories={categories}
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          />

          {/* Main Content */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products by name, brand, or category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                  />
                </div>
                <button
                  onClick={() => setIsDrawerOpen(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  aria-label="Filter products"
                >
                  <SlidersHorizontal className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>

            {/* Filters Row */}
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-gray-200">
              {/* Filter By Brands */}
              <div className="flex items-center flex-wrap gap-2">
                <span className="text-sm font-semibold text-gray-700">Filter By:</span>
                {brands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      selectedBrand === brand
                        ? 'bg-primary-900 text-white shadow-sm'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {brand === 'all' ? 'All' : brand}
                  </button>
                ))}
              </div>

              {/* Results count */}
              <div className="text-sm text-gray-600 whitespace-nowrap">
                Showing <span className="font-semibold text-primary-900">{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'product' : 'products'}
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
