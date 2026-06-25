import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

const designs = [
  {
    title: "Aesthetic Clinic Theme",
    description: "An elegant and modern theme perfect for aesthetic, dermatology, and wellness clinics.",
    href: "/designs/aesthetic",
    imageSrc: "/design-aesthetic-clinic.png",
    imageHint: "aesthetic clinic website"
  },
  {
    title: "Medical Laboratory Theme",
    description: "A clean and professional theme designed for clinical laboratories and diagnostic centers.",
    href: "/designs/laboratories",
    imageSrc: "/design-laboratories.png",
    imageHint: "medical laboratory website"
  },
  {
    title: "Pediatric Clinic Theme",
    description: "A warm and friendly theme perfect for pediatricians and family clinics.",
    href: "/designs/pedia",
    imageSrc: "/design-pedia-clinic.png",
    imageHint: "pediatric clinic website"
  },
  {
    title: "Dentist Clinic Theme",
    description: "A clean and friendly theme for dental practices, designed to build patient trust.",
    href: "/designs/dentist",
    imageSrc: "/design-dentist-clinic.png",
    imageHint: "dentist clinic website"
  },
  {
    title: "Internal Medicine Theme",
    description: "A professional and clean theme for internal medicine specialists and general practitioners.",
    href: "/designs/im",
    imageSrc: "/design-im-clinic.png",
    imageHint: "internal medicine website"
  },
  {
    title: "Ophthalmology Clinic Theme",
    description: "A professional and modern theme for ophthalmologists and eye care specialists.",
    href: "/designs/ophtha",
    imageSrc: "/design-ophtha-clinic.png",
    imageHint: "ophthalmology eye clinic"
  }
];

export function Designs() {
  return (
    <section id="designs" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-4 bg-accent border-transparent text-accent-foreground font-semibold">
            Available Designs
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl font-headline">
            Professionally Crafted Themes
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80">
            Explore our themes, ready to be customized for your clinic. Each design is built to be beautiful, functional, and fast.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {designs.map((design) => (
            <Link
              key={design.title}
              href={design.href}
              className="block h-full group"
            >
              <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                 <CardHeader className="p-0 relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={design.imageSrc}
                      alt={design.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={design.imageHint}
                    />
                  </div>
                  <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="secondary" className="shadow-lg">
                      <Eye className="mr-2 h-4 w-4"/>
                      Live Preview
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow p-6">
                  <CardTitle className="text-primary">{design.title}</CardTitle>
                  <CardDescription className="mt-2 flex-grow">{design.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
