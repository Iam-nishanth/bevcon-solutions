import { Metadata } from 'next';
import ProductsHero from '@/components/sections/products/ProductsHero';
import ProductsGrid from '@/components/sections/products/ProductsGrid';

export const metadata: Metadata = {
  title: 'Our Products | Industrial Doors & Material Handling | Bevcon Solutions',
  description: 'Explore our comprehensive range of industrial doors, high-speed doors, docking equipment, and bulk material handling equipment from trusted brands.',
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <ProductsHero />
      <ProductsGrid />
    </main>
  );
}
