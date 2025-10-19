'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

interface ProductSidebarProps {
  categories: string[];
  currentCategory?: string;
}

export default function ProductSidebar({ categories, currentCategory }: ProductSidebarProps) {
  const pathname = usePathname();
  
  // Create URL-friendly slug
  const createSlug = (category: string) => {
    return category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  return (
    <aside className="w-full lg:w-80 flex-shrink-0">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 sticky top-24 max-h-[calc(100vh-8rem)] flex flex-col">
        <div className="p-6 pb-4 border-b border-gray-100 flex-shrink-0">
          <h3 className="text-lg font-bold text-primary-900">Product Categories</h3>
        </div>
        
        <nav className="flex-1 overflow-y-auto p-6 pt-4">
          <ul className="space-y-2">
          <li>
            <Link
              href="/products"
              className={`flex items-center justify-between px-4 py-2.5 rounded-lg transition-all duration-200 ${
                pathname === '/products'
                  ? 'bg-primary-900 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="font-medium">All Products</span>
              {pathname === '/products' && <ChevronRight className="w-4 h-4" />}
            </Link>
          </li>
          
          {categories.filter(cat => cat !== 'all').map((category) => {
            const slug = createSlug(category);
            const isActive = pathname === `/products/${slug}` || currentCategory === category;
            
            return (
              <li key={category}>
                <Link
                  href={`/products/${slug}`}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-900 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="font-medium text-sm">{category}</span>
                  {isActive && <ChevronRight className="w-4 h-4" />}
                </Link>
              </li>
            );
          })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
