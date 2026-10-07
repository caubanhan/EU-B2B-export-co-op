export interface ProductImage {
  src: string;
  alt: string;
}

export interface ProductSpecs {
  dimensions: string;
  material: string;
  packaging: string;
  moq: string;
  care: string;
  leadTime: string;
  certifications: string;
}

export interface Product {
  id: string;
  slug: string;
  sku: string;
  collection: string;
  title: string;
  description: string;
  images: ProductImage[];
  hoverImage: string;
  specs: ProductSpecs;
}
