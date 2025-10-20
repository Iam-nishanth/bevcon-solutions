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
import JRFResourceSection from '@/components/sections/solutions/JRFResourceSection';

export async function generateStaticParams() {
  return industryExamples.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const industry = industryExamples.find((ind) => ind.slug === resolvedParams.slug);
  
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

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const industry = industryExamples.find((ind) => ind.slug === resolvedParams.slug);

  if (!industry) {
    notFound();
  }

  // Check if this is a JR Fibreglass related industry
  const jrfIndustries = ['chemical-petrochemical', 'power-generation-utilities', 'semiconductor-manufacturing'];
  const isJRFIndustry = jrfIndustries.includes(resolvedParams.slug);

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
      
      {/* JR Fibreglass Resource Section for relevant industries */}
      {isJRFIndustry && (
        <JRFResourceSection context="environmental-control" />
      )}
      
      {/* CTA */}
      <IndustryCTA industryName={industry.name} />
    </main>
  );
}
