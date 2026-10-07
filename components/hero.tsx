'use client';

import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const heroImage =
  'https://images.pexels.com/photos/12715591/pexels-photo-12715591.jpeg?auto=compress&cs=tinysrgb&w=1920';

interface HeroProps {
  onQuoteClick: () => void;
}

export function Hero({ onQuoteClick }: HeroProps) {
  return (
    <section id="home" className="relative min-h-[100vh] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="European living room with woven water hyacinth furniture"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-7xl flex-col justify-center px-6 pt-16 lg:px-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Vietnamese B2B Export Cooperative
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Green products from Vietnamese rivers
            <span className="block text-accent">
              handcrafted beauty to European living spaces.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            100% natural, eco-friendly water hyacinth products handcrafted by
            skilled rural artisans for global B2B partners.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/catalog">
              <Button
                size="lg"
                className="w-full bg-foreground text-background hover:bg-foreground/90 sm:w-auto text-xs uppercase tracking-[0.12em]"
              >
                Explore Catalog
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              onClick={onQuoteClick}
              className="w-full border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto"
            >
              <Mail className="mr-2 h-4 w-4" />
              Request B2B Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
