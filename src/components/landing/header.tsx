"use client";

import Link from "next/link";
import { Logo } from "@/components/logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-start px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Logo width={24} height={24} />
          <span className="font-bold text-foreground">VisibleClinic</span>
        </Link>
      </div>
    </header>
  );
}
