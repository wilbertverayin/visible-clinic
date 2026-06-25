"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    stat: "10x",
    title: "More Patient Inquiries",
    description: "Reach more potential patients through optimized websites and search visibility.",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    stat: "90%",
    title: "Less Admin Work",
    description: "Let automation handle bookings, verifications, and online forms — so you can focus on care.",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    stat: "85%",
    title: "Practice Growth Rate",
    description: "Clinics with strong online presence attract more trust, referrals, and repeat visits.",
  },
];

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export function Benefits() {
  return (
    <section className="bg-transparent py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((benefit) => (
            <motion.div key={benefit.stat} variants={itemVariants} className="text-center">
              <Card className="flex h-full flex-col items-center justify-start rounded-2xl border-none bg-secondary p-8 shadow-xl">
                <CardContent className="flex flex-col items-center space-y-6 p-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    {benefit.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-5xl font-bold text-primary">{benefit.stat}</p>
                    <p className="text-xl font-semibold text-foreground">{benefit.title}</p>
                  </div>
                  <p className="text-base text-foreground/70">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
