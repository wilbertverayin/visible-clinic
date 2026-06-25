"use client";

import { Logo } from "@/components/logo";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-12 px-4 py-16 text-center md:flex-row md:items-start md:text-left">
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="flex items-center space-x-4">
            <Logo width={64} height={64} />
            <span className="text-3xl font-bold leading-tight">
              Visible
              <br />
              Clinic
            </span>
          </Link>
          <p className="mt-4 text-sm text-slate-400">
            &copy; 2025 Visible Clinic. All rights reserved.
          </p>
        </div>

        {/* Location and Contact */}
        <div className="flex flex-col gap-8 text-center sm:flex-row sm:gap-16 md:text-left">
          <div>
            <h3 className="text-lg font-semibold">Location</h3>
            <p className="mt-2 text-slate-400">Albay, Philippines</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="mt-2 flex flex-col space-y-1 text-slate-400">
              <a href="mailto:thevisibleclinic@gmail.com" className="hover:text-white transition-colors">
                thevisibleclinic@gmail.com
              </a>
              <a href="tel:+639171378543" className="hover:text-white transition-colors">
                +639171378543
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
