import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Globe, FileText, Phone, Shield, Users, X, CalendarDays } from "lucide-react";

export function Comparison() {
  return (
    <section className="bg-transparent py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-4 bg-accent border-transparent text-accent-foreground font-semibold">
            Why Traditional Practice Growth is Slowing Down
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl font-headline">
            Old School Referrals Fade. <br className="sm:hidden" />
            <span className="text-primary">Visible Online Presence</span> Works.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80">
            Patients now search online first before visiting a clinic. Your next appointment isn't walking in — they're Googling you right now. Visible Clinic helps you stand out, build trust, and grow faster.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 items-start">
          {/* Traditional Card */}
          <Card className="bg-destructive/5 dark:bg-destructive/10 border-destructive/20 p-2 h-full">
            <CardContent className="p-4 md:p-6 h-full flex flex-col">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-xl font-bold text-foreground">Traditional Word-of-Mouth Growth</h3>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-destructive/10">
                  <X className="h-5 w-5 text-destructive" />
                </div>
              </div>

              <div className="flex-grow">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-destructive/10 mt-1">
                      <X className="h-4 w-4 text-destructive" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Unpredictable referrals</h4>
                      <p className="text-foreground/70">Depends on who remembers to recommend you</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-destructive/10 mt-1">
                      <X className="h-4 w-4 text-destructive" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">No online visibility</h4>
                      <p className="text-foreground/70">You're invisible in search results</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-destructive/10 mt-1">
                      <X className="h-4 w-4 text-destructive" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Manual booking &amp; paperwork</h4>
                      <p className="text-foreground/70">Lost time = lost patients</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-auto pt-8 border-t border-destructive/20">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <Phone className="h-7 w-7 text-destructive" />
                    <p className="text-sm font-medium text-destructive">Word of Mouth</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <FileText className="h-7 w-7 text-destructive" />
                    <p className="text-sm font-medium text-destructive">Clinic Flyers</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Users className="h-7 w-7 text-destructive" />
                    <p className="text-sm font-medium text-destructive">Face-to-Face Only</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Visible Clinic Card */}
          <Card className="bg-primary/5 dark:bg-primary/10 border-primary/20 p-2 h-full">
            <CardContent className="p-4 md:p-6 h-full flex flex-col">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center flex-wrap gap-2">
                  <h3 className="text-xl font-bold text-foreground">Visible Clinic Digital Growth</h3>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-none text-xs font-semibold">Visible Clinic</Badge>
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-5 w-5 text-primary" />
                </div>
              </div>

              <div className="flex-grow">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">10x more patient visibility</h4>
                      <p className="text-foreground/70">Get discovered on Google and social media</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Smart online booking + automation</h4>
                      <p className="text-foreground/70">Save admin time, reduce no-shows</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Stronger credibility</h4>
                      <p className="text-foreground/70">Verified reviews, branded presence, trust boost</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-auto pt-8 border-t border-primary/20">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center justify-center gap-3 rounded-lg bg-primary/10 p-4 h-full">
                    <Globe className="h-7 w-7 text-primary" />
                    <p className="text-sm font-medium text-primary">Website</p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 rounded-lg bg-primary/10 p-4 h-full">
                    <CalendarDays className="h-7 w-7 text-primary" />
                    <p className="text-sm font-medium text-primary">Search Ranking</p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 rounded-lg bg-primary/10 p-4 h-full">
                    <Shield className="h-7 w-7 text-primary" />
                    <p className="text-sm font-medium text-primary">Digital Tools</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
