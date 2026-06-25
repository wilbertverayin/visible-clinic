import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Comparison } from "@/components/landing/comparison";
import { Cta } from "@/components/landing/cta";
import { AnimatedSection } from "@/components/landing/animated-section";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Pricing } from "@/components/landing/pricing";
import { Footer } from "@/components/landing/footer";
import { Apps } from "@/components/landing/apps";
import { Designs } from "@/components/landing/designs";
import { Clients } from "@/components/landing/clients";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <AnimatedSection>
          <Comparison />
        </AnimatedSection>
        <AnimatedSection>
          <HowItWorks />
        </AnimatedSection>
        <AnimatedSection>
          <Apps />
        </AnimatedSection>
        {/* <AnimatedSection>
          <Designs />
        </AnimatedSection> */}
        <AnimatedSection>
          <Clients />
        </AnimatedSection>
        <AnimatedSection>
          <Pricing />
        </AnimatedSection>
        <AnimatedSection>
          <Cta />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
