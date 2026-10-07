'use client';

import Link from 'next/link';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center bg-foreground">
                <Leaf className="h-4 w-4 text-background" />
              </div>
              <span className="text-base font-semibold uppercase tracking-[0.05em] text-foreground">
                An Phu Co-op
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Vietnamese water hyacinth export cooperative connecting rural
              artisans with European B2B partners.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col">
            <h4 className="text-xs font-medium uppercase tracking-[0.12em] text-foreground">
              Navigate
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Home
              </Link>
              <Link
                href="/catalog"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Catalog
              </Link>
              <Link
                href="/#story"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Our Story
              </Link>
              <Link
                href="/#contact"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col">
            <h4 className="text-xs font-medium uppercase tracking-[0.12em] text-foreground">
              Contact
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-muted-foreground/60" />
                <span>export@anphucoop.vn</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-muted-foreground/60" />
                <span>+84 28 1234 5678</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-muted-foreground/60" />
                <span>Mekong Delta, Vietnam</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} An Phu Cooperative. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
