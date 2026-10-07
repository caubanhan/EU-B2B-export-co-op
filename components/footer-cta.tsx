'use client';

import { Button } from '@/components/ui/button';

interface FooterCTAProps {
  onQuoteClick: () => void;
}

export function FooterCTA({ onQuoteClick }: FooterCTAProps) {
  return (
    <section id="contact" className="border-t border-border bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
          B2B Inquiries
        </p>
        <h2 className="mt-4 text-2xl font-medium tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          Looking for custom B2B orders or wholesale catalog?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Tell us about your sourcing needs. We offer competitive wholesale
          pricing, custom designs, and reliable export logistics across Europe.
        </p>
        <div className="mt-8">
          <Button
            size="lg"
            onClick={onQuoteClick}
            className="bg-foreground text-background hover:bg-foreground/90 text-xs uppercase tracking-[0.12em]"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
