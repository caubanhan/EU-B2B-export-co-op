'use client';

import { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ChevronDown,
  ArrowLeft,
} from 'lucide-react';
import productsData from '@/src/data/products.json';
import type { Product } from '@/src/data/types';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { RFQModal } from '@/components/rfq-modal';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const products = productsData as Product[];

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const product = products.find((p) => p.slug === slug);
  const [rfqOpen, setRfqOpen] = useState(false);

  if (!product) {
    notFound();
  }

  const specRows: { label: string; value: string }[] = [
    { label: 'Dimensions', value: product.specs.dimensions },
    { label: 'Material', value: product.specs.material },
    { label: 'Packaging', value: product.specs.packaging },
    { label: 'MOQ', value: product.specs.moq },
    { label: 'Care Instructions', value: product.specs.care },
    { label: 'Lead Time', value: product.specs.leadTime },
    { label: 'Certifications', value: product.specs.certifications },
  ];

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader onQuoteClick={() => setRfqOpen(true)} />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-6 lg:px-10">
        <Link
          href="/catalog"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3 w-3" />
          Back to Catalog
        </Link>
      </div>

      {/* Product layout */}
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
          {/* Left: Image gallery (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-6">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/5] overflow-hidden bg-muted/30"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product info (5 cols, sticky) */}
          <div className="mt-10 lg:col-span-5 lg:mt-0">
            <div className="lg:sticky lg:top-24">
              {/* Collection name */}
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                {product.collection}
              </p>

              {/* Product title */}
              <h1 className="mt-3 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                {product.title}
              </h1>

              {/* SKU */}
              <p className="mt-3 text-xs uppercase tracking-[0.1em] text-muted-foreground">
                SKU: {product.sku}
              </p>

              {/* Description */}
              <p className="mt-6 text-sm leading-[1.8] text-foreground/80">
                {product.description}
              </p>

              {/* Divider */}
              <div className="my-8 h-px w-full bg-border" />

              {/* Specifications accordion */}
              <div>
                <h2 className="text-xs font-medium uppercase tracking-[0.15em] text-foreground">
                  B2B Specifications
                </h2>
                <Accordion type="single" collapsible className="mt-4">
                  {specRows.map((spec) => (
                    <AccordionItem
                      key={spec.label}
                      value={spec.label}
                      className="border-b border-border"
                    >
                      <AccordionTrigger className="py-4 text-sm font-medium text-foreground hover:no-underline">
                        <span className="flex items-center justify-between w-full">
                          <span>{spec.label}</span>
                          <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300" />
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-sm leading-relaxed text-muted-foreground pb-4">
                        {spec.value}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* CTA button */}
              <div className="mt-8">
                <Button
                  onClick={() => setRfqOpen(true)}
                  className="w-full bg-foreground text-background hover:bg-foreground/90 text-xs uppercase tracking-[0.12em] py-6"
                >
                  Request B2B Quote
                </Button>
              </div>

              {/* MOQ note */}
              <p className="mt-4 text-xs text-muted-foreground">
                Minimum order quantity: {product.specs.moq} · Lead time:{' '}
                {product.specs.leadTime}
              </p>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
      <RFQModal
        open={rfqOpen}
        onOpenChange={setRfqOpen}
        productTitle={product.title}
        productSku={product.sku}
      />
    </main>
  );
}
