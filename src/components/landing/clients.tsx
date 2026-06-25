import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const clients = [
  {
    name: "Jomel Lapides, MD, DPBO",
    href: "https://jomellapides.visibleclinic.com/",
    imageSrc: "/client-jomel-lapides.png",
    imageHint: "ophthalmologist website screenshot"
  },
  {
    name: "ClearVision & Little Stars Eye Clinic & Pediatric Care",
    href: "https://clearvisionlittestars.visibleclinic.com/",
    imageSrc: "/client-vision-stars.png",
    imageHint: "ophthalmologist website screenshot"
  },
];

export function Clients() {
  return (
    <section id="clients" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-4 bg-accent border-transparent text-accent-foreground font-semibold">
            Our Clients
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl font-headline">
            Trusted by Professionals
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80">
            We're proud to partner with clinics and doctors to enhance their digital presence.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {clients.map((client) => (
            <Link 
              key={client.name} 
              href={client.href}
              className="block h-full"
            >
              <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-xl">
                 <CardHeader className="p-0">
                  <div className="aspect-video relative">
                      <Image
                      src={client.imageSrc}
                      alt={client.name}
                      fill
                      className="object-cover"
                      data-ai-hint={client.imageHint}
                      />
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow p-6">
                  <CardTitle className="text-primary">{client.name}</CardTitle>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

    