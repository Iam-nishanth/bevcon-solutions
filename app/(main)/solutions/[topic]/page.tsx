import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSolutionTopicBySlug } from '@/content/solution-topics';
import SolutionsTopicHero from '@/components/sections/solutions/SolutionsTopicHero';
import SolutionsTopicOverview from '@/components/sections/solutions/SolutionsTopicOverview';
import CaseStudiesGrid from '@/components/sections/solutions/CaseStudiesGrid';
import SolutionsCTA from '@/components/sections/solutions/SolutionsCTA';
import JRFResourceSection from '@/components/sections/solutions/JRFResourceSection';

interface PageProps {
  params: Promise<{
    topic: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const topic = getSolutionTopicBySlug(resolvedParams.topic);

  if (!topic) {
    return {
      title: 'Solution Not Found | Bevcon Solutions',
    };
  }

  return {
    title: topic.metaTitle,
    description: topic.metaDescription,
  };
}

export default async function SolutionsTopicPage({ params }: PageProps) {
  const resolvedParams = await params;
  const topic = getSolutionTopicBySlug(resolvedParams.topic);

  if (!topic) {
    notFound();
  }

  // Check if this is a JR Fibreglass related solution
  const jrfSolutions = ['fume-extraction', 'environmental-control', 'emergency-gas-treatment'];
  const isJRFSolution = jrfSolutions.includes(resolvedParams.topic);

  return (
    <main className="min-h-screen">
      <SolutionsTopicHero topic={topic} />
      <SolutionsTopicOverview topic={topic} />
      <CaseStudiesGrid caseStudies={topic.caseStudies} />
      {isJRFSolution && (
        <JRFResourceSection context={resolvedParams.topic as 'fume-extraction' | 'environmental-control' | 'emergency-gas-treatment'} />
      )}
      <SolutionsCTA />
    </main>
  );
}

// Generate static paths for all solution topics
export async function generateStaticParams() {
  // This will be populated at build time
  return [
    { topic: 'entrance-automation' },
    { topic: 'loading-bay' },
    { topic: 'material-handling' },
    { topic: 'fume-extraction' },
    { topic: 'environmental-control' },
    { topic: 'emergency-gas-treatment' },
    { topic: 'safety-compliance' },
    { topic: 'energy-efficiency' },
    { topic: 'temperature-control' },
  ];
}
