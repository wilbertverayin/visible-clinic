import { Badge } from "@/components/ui/badge";
import { Globe, CalendarCheck, TrendingUp } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: "We Build Your Digital Presence",
    description: "We create a professional, mobile-friendly website optimized for patient discovery and trust-building.",
    details: "Visible Clinic builds: Online profile, clinic info, services, and contact touchpoints—ready in days.",
  },
  {
    step: 2,
    icon: <CalendarCheck className="h-6 w-6 text-primary" />,
    title: "We Automate Patient Connections",
    description: "From appointment booking to medical certificate verification, we streamline your administrative tasks.",
    details: "Reduce no-shows with automated reminders and simplify paperwork with digital forms.",
  },
  {
    step: 3,
    icon: <TrendingUp className="h-6 w-6 text-primary" />,
    title: "We Help You Grow With Trust",
    description: "A visible clinic means more referrals, more reviews, and more opportunities to build patient loyalty.",
    details: "Showcase patient testimonials and build a credible online reputation that attracts new patients.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-transparent py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-4 bg-accent border-transparent text-accent-foreground font-semibold">
            Digital Growth Made Simple
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl font-headline">
            How <span className="text-primary">Visible Clinic</span> Works in 3 Steps
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-foreground/80">
            We handle your digital presence so you can focus on patient care. From website to bookings, we've got you covered.
          </p>
        </div>

        <div className="mt-20">
          <div className="relative mx-auto flex max-w-3xl flex-col gap-12">
             <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-border -z-10" />
            {steps.map((step) => (
              <div key={step.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 bg-background z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
                    {step.step}
                  </div>
                </div>
                <div className="flex flex-col gap-3 pt-1">
                  <div className="flex items-center gap-3">
                    {step.icon}
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-foreground/80">{step.description}</p>
                  <div className="mt-2 rounded-lg bg-secondary/70 p-3 text-sm text-secondary-foreground/80">
                    {step.details}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
