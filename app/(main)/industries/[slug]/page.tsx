import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { industryExamples } from '@/content/industries-examples';
import IndustryHero from '@/components/sections/industries/IndustryHero';
import IndustryOverview from '@/components/sections/industries/IndustryOverview';
import IndustryChallenges from '@/components/sections/industries/IndustryChallenges';
import IndustrySolutions from '@/components/sections/industries/IndustrySolutions';
import IndustryBenefits from '@/components/sections/industries/IndustryBenefits';
import IndustryProducts from '@/components/sections/industries/IndustryProducts';
import IndustryCTA from '@/components/sections/industries/IndustryCTA';

export async function generateStaticParams() {
  return industryExamples.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const industry = industryExamples.find((ind) => ind.slug === params.slug);
  
  if (!industry) {
    return {
      title: 'Industry Not Found',
    };
  }

  return {
    title: `${industry.name} Solutions | Bevcon Solutions`,
    description: industry.seoDescription,
  };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = industryExamples.find((ind) => ind.slug === params.slug);

  if (!industry) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Hero with opening story */}
      <IndustryHero industry={industry} />
      
      {/* Industry Overview - NEW informative section */}
      <IndustryOverview overview={industry.overview} />
      
      {/* Challenge narrative */}
      <IndustryChallenges challenge={industry.challenge} />
      
      {/* Solution examples */}
      <IndustrySolutions solution={industry.solution} />
      
      {/* Featured products */}
      <IndustryProducts products={industry.products} />
      
      {/* Success vision */}
      <IndustryBenefits success={industry.success} metrics={industry.metrics} />
      
      {/* CTA */}
      <IndustryCTA industryName={industry.name} />
    </main>
  );
}
