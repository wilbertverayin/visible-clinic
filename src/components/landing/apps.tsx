import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const apps = [
  {
    title: "OnlineHPI (Beta)",
    description: "An AI-powered tool to help streamline patient history intake.",
    href: "https://onlinehpi.visibleclinic.com/",
    imageSrc: "/onlinehpi.png",
    imageHint: "medical history form"
  },
  {
    title: "MedCertGen (Beta)",
    description: "Instantly generate drafts of medical certificates with AI assistance.",
    href: "https://medcertgen.visibleclinic.com/",
    imageSrc: "/medcertgen.png",
    imageHint: "medical certificate document"
  },
  {
    title: "EyeTriage (Beta)",
    description: "An innovative tool for preliminary eye condition triage.",
    href: "https://eyetriage.visibleclinic.com/",
    imageSrc: "/eyetriage.png",
    imageHint: "eye examination app"
  },
];

export function Apps() {
  return (
    <section id="apps" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-4 bg-accent border-transparent text-accent-foreground font-semibold">
            Our Tools
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl font-headline">
            Explore Our Suite of Clinic Apps
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80">
            We're developing a range of applications to help modernize and streamline your clinical practice.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <Link 
              key={app.title} 
              href={app.href} 
              target={app.href.startsWith('http') ? '_blank' : undefined} 
              rel={app.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="block h-full"
            >
              <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-xl">
                 <CardHeader className="p-0">
                  <div className="aspect-video relative">
                      <Image
                      src={app.imageSrc}
                      alt={app.title}
                      fill
                      className="object-cover"
                      data-ai-hint={app.imageHint}
                      />
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow p-6">
                  <CardTitle className="text-primary">{app.title}</CardTitle>
                  <CardDescription className="mt-2 flex-grow">{app.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
