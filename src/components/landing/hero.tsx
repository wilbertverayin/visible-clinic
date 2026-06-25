"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-transparent py-20 md:py-32"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div variants={itemVariants}>
          <Badge variant="outline" className="mb-6 bg-accent border-transparent text-accent-foreground hover:bg-accent/90">
            <Zap className="mr-2 h-4 w-4" />
            Empowering your online presence
          </Badge>
        </motion.div>
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline"
        >
          <span className="text-primary">Visibility</span> builds <span className="text-destructive">Credibility</span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80"
        >
          In today's digital world, patients trust what they see online. A strong web
          presence builds confidence and credibility — even before the first consultation.
          Your website is your digital reputation.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" asChild>
            <Link href="#notify">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#features">See How It Works</Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
