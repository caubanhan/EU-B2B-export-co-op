'use client';

import Link from 'next/link';
import type { Product } from '@/src/data/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/catalog/${product.slug}`}
      className="group block"
    >
      {/* Image container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-muted/30">
        {/* Primary image */}
        <img
          src={product.images[0].src}
          alt={product.images[0].alt}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out group-hover:opacity-0"
        />
        {/* Hover image */}
        <img
          src={product.hoverImage}
          alt={`${product.title} — alternate view`}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
        />
      </div>

      {/* Product title */}
      <h3 className="mt-5 text-sm font-medium tracking-[0.02em] text-foreground transition-colors group-hover:text-muted-foreground">
        {product.title}
      </h3>
    </Link>
  );
}
