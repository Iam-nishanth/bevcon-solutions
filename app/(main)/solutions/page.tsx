import React from 'react';
import { Metadata } from 'next';
import SolutionsHero from '@/components/sections/solutions/SolutionsHero';
import SolutionsGrid from '@/components/sections/solutions/SolutionsGrid';
import SolutionsCTA from '@/components/sections/solutions/SolutionsCTA';
import JRFResourceSection from '@/components/sections/solutions/JRFResourceSection';

export const metadata: Metadata = {
  title: 'Industrial Solutions | Entrance Automation & Material Handling | Bevcon Solutions',
  description: 'Comprehensive industrial solutions including entrance automation, high-speed doors, docking equipment, material handling, and smart building integration.',
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <SolutionsHero />
      <SolutionsGrid />
      <JRFResourceSection context="fume-extraction" />
      <SolutionsCTA />
    </main>
  );
}
