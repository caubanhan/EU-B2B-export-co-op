'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

interface RFQModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productTitle?: string;
  productSku?: string;
}

export function RFQModal({
  open,
  onOpenChange,
  productTitle,
  productSku,
}: RFQModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onOpenChange(false);
    }, 2500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[520px] p-0">
        {submitted ? (
          <div className="flex flex-col items-center px-8 py-16 text-center">
            <CheckCircle2 className="h-12 w-12 text-foreground" />
            <h3 className="mt-5 text-lg font-medium text-foreground">
              Request Received
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Our export team will contact you within 24 hours with a detailed
              quotation.
            </p>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="border-b border-border px-8 py-6">
              <DialogHeader>
                <DialogTitle className="text-xl font-medium text-foreground">
                  Request B2B Quote
                </DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground">
                  Share your sourcing requirements and we&apos;ll respond
                  within 24 hours.
                </DialogDescription>
              </DialogHeader>
              {productTitle && (
                <div className="mt-4 border border-border bg-muted/50 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.1em] text-muted-foreground">
                    Product
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {productTitle}
                  </p>
                  {productSku && (
                    <p className="text-xs text-muted-foreground">
                      SKU: {productSku}
                    </p>
                  )}
                </div>
              )}
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-5 px-8 py-6"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label
                    htmlFor="rfq-name"
                    className="text-xs uppercase tracking-[0.08em] text-muted-foreground"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="rfq-name"
                    placeholder="Jane Doe"
                    required
                    className="border-border bg-transparent focus-visible:ring-foreground/30"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="rfq-company"
                    className="text-xs uppercase tracking-[0.08em] text-muted-foreground"
                  >
                    Company Name
                  </Label>
                  <Input
                    id="rfq-company"
                    placeholder="Acme GmbH"
                    required
                    className="border-border bg-transparent focus-visible:ring-foreground/30"
                  />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label
                    htmlFor="rfq-email"
                    className="text-xs uppercase tracking-[0.08em] text-muted-foreground"
                  >
                    Email
                  </Label>
                  <Input
                    id="rfq-email"
                    type="email"
                    placeholder="jane@acme.de"
                    required
                    className="border-border bg-transparent focus-visible:ring-foreground/30"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="rfq-country"
                    className="text-xs uppercase tracking-[0.08em] text-muted-foreground"
                  >
                    Country
                  </Label>
                  <Input
                    id="rfq-country"
                    placeholder="Germany"
                    required
                    className="border-border bg-transparent focus-visible:ring-foreground/30"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="rfq-quantity"
                  className="text-xs uppercase tracking-[0.08em] text-muted-foreground"
                >
                  Target Quantity
                </Label>
                <Input
                  id="rfq-quantity"
                  placeholder="e.g. 200 pcs"
                  required
                  className="border-border bg-transparent focus-visible:ring-foreground/30"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="rfq-message"
                  className="text-xs uppercase tracking-[0.08em] text-muted-foreground"
                >
                  Message
                </Label>
                <Textarea
                  id="rfq-message"
                  placeholder="Additional details about your inquiry..."
                  className="min-h-[90px] border-border bg-transparent focus-visible:ring-foreground/30"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-foreground text-background hover:bg-foreground/90 text-xs uppercase tracking-[0.12em]"
              >
                Submit Inquiry
              </Button>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
