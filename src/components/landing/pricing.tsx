"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    name: "Basic",
    price: "Php 9,999.00",
    features: [
      "Custom website design",
      "1 website web page (up to 10 sections)",
      "Up to 10 curated icons or stock photos",
      "Image optimization",
      "Basic SEO",
      "Expert content review",
      "Screen testing for common devices",
      "Domain setup",
      "15 days' post-launch support",
    ],
  },
  {
    name: "Classic",
    price: "Php 19,999.00",
    features: [
      "Custom website design",
      "Up to five responsive web pages",
      "Up to 15 curated icons or stock photos",
      "Expert content review",
      "Image optimization",
      "Basic SEO",
      "Domain setup",
      "Screen testing for common devices",
      "30 days' post-launch support",
    ],
  },
  {
    name: "Premium",
    price: "Php 29,999.00",
    features: [
      "Custom website design",
      "More than 5 responsive web pages",
      "Up to 30 curated icons or stock photos",
      "Expert content review",
      "Image optimization",
      "Basic SEO",
      "Domain setup",
      "Screen testing for common devices",
      "90 days' post-launch support",
      "Medical Certificate Generator and Verification",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-foreground">
            Transparent Pricing for Every Clinic
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Choose the plan that fits your practice's needs and budget. No hidden fees, no surprises.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.name}
              className="h-full"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Card
                className="flex h-full flex-col bg-purple-100 text-black shadow-xl"
              >
                <CardHeader className="pt-8 pb-4 items-center text-center">
                  <CardTitle className="font-headline text-4xl mb-4">{tier.name}</CardTitle>
                  <div className="rounded-lg bg-background px-4 py-2">
                    <span className="text-3xl font-bold text-primary">{tier.price}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow pt-6 pb-8">
                  <ul className="space-y-4">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
