import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSolutionTopicBySlug } from '@/content/solution-topics';
import SolutionsTopicHero from '@/components/sections/solutions/SolutionsTopicHero';
import SolutionsTopicOverview from '@/components/sections/solutions/SolutionsTopicOverview';
import CaseStudiesGrid from '@/components/sections/solutions/CaseStudiesGrid';
import SolutionsCTA from '@/components/sections/solutions/SolutionsCTA';

interface PageProps {
  params: {
    topic: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const topic = getSolutionTopicBySlug(params.topic);

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

export default function SolutionsTopicPage({ params }: PageProps) {
  const topic = getSolutionTopicBySlug(params.topic);

  if (!topic) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <SolutionsTopicHero topic={topic} />
      <SolutionsTopicOverview topic={topic} />
      <CaseStudiesGrid caseStudies={topic.caseStudies} />
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
    { topic: 'safety-compliance' },
    { topic: 'energy-efficiency' },
    { topic: 'temperature-control' },
  ];
}
