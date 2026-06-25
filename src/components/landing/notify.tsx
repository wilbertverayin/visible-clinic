"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export function Notify() {
  return (
    <section id="notify" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <Mail className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Coming Soon!
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Our services are not yet available, but we're working hard to launch soon.
            Enter your email below to join our mailing list and be the first to know when we go live.
          </p>
          <form className="mt-8 flex max-w-md mx-auto flex-col gap-4 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1"
              required
            />
            <Button type="submit">Notify Me</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
