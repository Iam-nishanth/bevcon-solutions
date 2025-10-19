import { Metadata } from 'next';
import QuoteHero from '@/components/sections/quote/QuoteHero';
import QuoteForm from '@/components/sections/quote/QuoteForm';

export const metadata: Metadata = {
  title: 'Request a Quote | Bevcon Solutions',
  description: 'Get a custom quote for industrial doors, entrance automation, and material handling solutions. Fast response, expert consultation, competitive pricing.',
};

export default function QuotePage() {
  return (
    <main className="min-h-screen">
      <QuoteHero />
      <QuoteForm />
    </main>
  );
}
