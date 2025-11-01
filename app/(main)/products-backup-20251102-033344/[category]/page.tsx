'use client';

import { useEffect, useRef, useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import { SlidersHorizontal, Download } from 'lucide-react';
import ProductSidebar from '@/components/sections/products/ProductSidebar';
import ProductCard from '@/components/sections/products/ProductCard';
import CategoryBottomSheet from '@/components/sections/products/CategoryBottomSheet';
import { allProducts as bevconProducts } from '@/data/bevcon-products';
import { allProducts as sparengProducts } from '@/data/spareng-products';
// TODO: Uncomment for next rollout - JR Fibreglass products need accuracy review
// import { allJRFProducts } from '@/data/jr-fibreglass';

const allProducts = [...bevconProducts, ...sparengProducts];

const emitCategories = [
  "Dust Extraction Systems",
  "Bogie",
  "Steep Angle Sidewall Conveyors",
]

// JR Fibreglass categories that should show catalog download
const jrfCategories = [
  "Fume Extraction & Scrubbing Systems",
  "FRP - GRP Equipments"
];

// Get all unique categories
const getAllCategories = () => {
  const categories = new Set<string>()
  allProducts.forEach(product => {
    if (Array.isArray(product.category)) {
      product.category.forEach(cat => {
        if (!emitCategories.includes(cat)) {
          categories.add(cat)
        }
      })
    } else if (!emitCategories.includes(product.category)) {
      categories.add(product.category)
    }
  })
  // Add JR Fibreglass categories
  jrfCategories.forEach(cat => categories.add(cat))
  return Array.from(categories)
};

// Create URL-friendly slug
const createSlug = (category: string) => {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

// Find category by slug
const findCategoryBySlug = (slug: string) => {
  const categories = getAllCategories();
  return categories.find(cat => createSlug(cat) === slug);
};

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params.category as string;
  const category = findCategoryBySlug(categorySlug);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  // Scroll to top on mount and category change
  useEffect(() => {
    // Scroll hero into view first to avoid any sticky header offset
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    // Then ensure content section is visible just under the hero
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  }, [categorySlug]);
  
  if (!category) {
    notFound();
  }

  // Filter products by category
  const filteredByCategory = allProducts.filter(product => {
    if (Array.isArray(product.category)) {
      return product.category.includes(category);
    }
    return product.category === category;
  });

  // Remove duplicates - keep only first product with each title
  const seenTitles = new Set<string>();
  const categoryProducts = filteredByCategory.filter(product => {
    if (seenTitles.has(product.title)) {
      return false;
    }
    seenTitles.add(product.title);
    return true;
  });

  const categories = getAllCategories();

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{category}</h1>
            <p className="text-lg text-white/90 mb-6">
              Explore our comprehensive range of {category.toLowerCase()} solutions from trusted brands.
            </p>
            <p className="text-white/80">
              Showing <span className="font-semibold">{categoryProducts.length}</span> products
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={contentRef} className="py-8 bg-gray-50">
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
              <ProductSidebar categories={categories} currentCategory={category} />
            </div>

            {/* Mobile Bottom Sheet */}
            <CategoryBottomSheet
              categories={categories}
              currentCategory={category}
              isOpen={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
            />

            {/* Products Grid */}
            <div className="flex-1 flex justify-center items-center">

              {/* Products */}
              {categoryProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {categoryProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      title={product.title}
                      image={product.image}
                      features={product.features}
                      applications={product.applications}
                      brand={product.brand}
                      category={product.category}
                      slug={product.slug}
                      product={product}
                    />
                  ))}
                </div>
              ) : jrfCategories.includes(category) ? (
                <div className="flex items-center justify-center min-h-[400px] py-20">
                  <div className="max-w-md text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Download className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Download Our Catalog</h3>
                    <p className="text-gray-600 mb-8">
                      Explore our comprehensive range of {category.toLowerCase()} from JR Fibreglass Industries.
                    </p>
                    <a
                      href="/JRE FIBREGLASS Overview.pdf"
                      download
                      className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium"
                    >
                      <Download size={20} />
                      <span>Download Catalog</span>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-gray-500 text-lg">No products found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
