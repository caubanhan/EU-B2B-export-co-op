'use client';

import { useState } from 'react';
import productsData from '@/src/data/products.json';
import type { Product } from '@/src/data/types';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ProductCard } from '@/components/product-card';
import { RFQModal } from '@/components/rfq-modal';

const products = productsData as Product[];

export default function CatalogPage() {
  const [rfqOpen, setRfqOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader onQuoteClick={() => setRfqOpen(true)} />

      {/* Page header */}
      <section className="border-b border-border pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
            Collection
          </p>
          <h1 className="mt-3 text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Water Hyacinth Furniture
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Handcrafted furniture and home accessories woven from sustainably
            harvested water hyacinth. Designed for wholesale and B2B export
            across Europe.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-24">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
      <RFQModal open={rfqOpen} onOpenChange={setRfqOpen} />
    </main>
  );
}
