"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Globe, CalendarCheck, FileText, Share2, Star } from "lucide-react";

const features = [
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "Search Optimization",
    description: "Helps your clinic appear in Google search results, connecting you with more patients.",
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Professional Website",
    description: "A fully responsive, mobile-optimized website that showcases your practice.",
  },
  {
    icon: <CalendarCheck className="h-8 w-8 text-primary" />,
    title: "Smart Booking",
    description: "Online booking with automation to reduce admin time and streamline appointments.",
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Medical Certificate Generator",
    description: "Generate verifiable, QR-enabled medical certificates linked to Google Drive.",
  },
  {
    icon: <Share2 className="h-8 w-8 text-primary" />,
    title: "SEO & Social Integration",
    description: "Improves online visibility and makes your content easily shareable on social media.",
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: "Verified Reviews",
    description: "Display patient reviews and testimonials to build credibility and trust.",
  },
];

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function Features() {
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Digital Growth Tools for Your Practice</h2>
          <p className="mt-4 text-lg text-foreground/80">
            Everything you need to build a strong online presence, attract more patients, and automate your clinic.
          </p>
        </div>
        <motion.div
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              onClick={() => setSelectedTitle(prev => prev === feature.title ? null : feature.title)}
              animate={{ scale: selectedTitle === feature.title ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="cursor-pointer"
            >
              <Card className={`flex h-full flex-col text-center transition-all duration-300 ${selectedTitle === feature.title ? 'shadow-2xl border-primary' : 'shadow-sm hover:shadow-lg'}`}>
                <CardHeader className="items-center">
                  {feature.icon}
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
