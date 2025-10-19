import { Metadata } from 'next';
import IndustriesHero from '@/components/sections/industries/IndustriesHero';
import IndustriesGrid from '@/components/sections/industries/IndustriesGrid';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'Customized entrance automation and material handling solutions for pharmaceutical, food processing, logistics, manufacturing, and more. Expertise across diverse industrial sectors.',
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen">
      <IndustriesHero />
      <IndustriesGrid />
    </main>
  );
}
