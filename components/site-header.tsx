'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Leaf, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Catalog', href: '/catalog' },
  { label: 'Our Story', href: '/#story' },
  { label: 'Contact', href: '/#contact' },
];

interface SiteHeaderProps {
  onQuoteClick: () => void;
}

export function SiteHeader({ onQuoteClick }: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center bg-primary">
            <Leaf className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-base font-semibold tracking-[0.05em] text-foreground uppercase">
            An Phu Co-op
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href.split('#')[0]) &&
                  item.href !== '/';
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-xs font-medium uppercase tracking-[0.12em] transition-colors hover:text-foreground ${
                  isActive ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            onClick={onQuoteClick}
            variant="outline"
            className="border-foreground text-foreground hover:bg-foreground hover:text-background text-xs uppercase tracking-[0.12em]"
          >
            Request B2B Quote
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="flex items-center justify-between pr-8">
              <span className="text-base font-semibold uppercase tracking-[0.05em] text-foreground">
                Menu
              </span>
              <SheetClose asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <X className="h-4 w-4" />
                </Button>
              </SheetClose>
            </div>
            <nav className="mt-8 flex flex-col gap-5">
              {navItems.map((item) => (
                <SheetClose asChild key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium uppercase tracking-[0.08em] text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
              <Button
                onClick={() => {
                  setMobileOpen(false);
                  onQuoteClick();
                }}
                className="mt-4 bg-foreground text-background hover:bg-foreground/90 text-xs uppercase tracking-[0.12em]"
              >
                Request B2B Quote
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
