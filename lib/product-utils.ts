// Utility functions for products

import { allProducts as bevconProducts } from '@/data/bevcon-products';
import { allProducts as sparengProducts } from '@/data/spareng-products';

const allProducts = [...bevconProducts, ...sparengProducts];

// Get all unique categories
export const getAllCategories = () => {
  const cats = new Set<string>();
  allProducts.forEach(product => {
    if (Array.isArray(product.category)) {
      product.category.forEach(cat => cats.add(cat));
    } else {
      cats.add(product.category);
    }
  });
  return Array.from(cats).sort();
};

// Create URL-friendly slug
export const createSlug = (category: string) => {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

// Find category by slug
export const findCategoryBySlug = (slug: string) => {
  const categories = getAllCategories();
  return categories.find(cat => createSlug(cat) === slug);
};

// Get products by category
export const getProductsByCategory = (category: string) => {
  return allProducts.filter(product => {
    if (Array.isArray(product.category)) {
      return product.category.includes(category);
    }
    return product.category === category;
  });
};
