import Hero from '@/components/sections/Hero';
import ValueProposition from '@/components/sections/ValueProposition';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import IndustrySolutions from '@/components/sections/IndustrySolutions';
import Stats from '@/components/sections/Stats';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Partners from '@/components/sections/Partners';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <FeaturedProducts />
      <IndustrySolutions />
      <Stats />
      {/* <WhyChooseUs /> */}
      <Partners />
      <CTASection />
    </>
  );
}
