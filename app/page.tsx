'use client';

import { useState } from 'react';
import { SiteHeader } from '@/components/site-header';
import { Hero } from '@/components/hero';
import { OurStory } from '@/components/our-story';
import { FooterCTA } from '@/components/footer-cta';
import { SiteFooter } from '@/components/site-footer';
import { RFQModal } from '@/components/rfq-modal';

export default function Home() {
  const [rfqOpen, setRfqOpen] = useState(false);

  const openRfq = () => setRfqOpen(true);

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader onQuoteClick={openRfq} />
      <Hero onQuoteClick={openRfq} />
      <OurStory />
      <FooterCTA onQuoteClick={openRfq} />
      <SiteFooter />
      <RFQModal open={rfqOpen} onOpenChange={setRfqOpen} />
    </main>
  );
}
