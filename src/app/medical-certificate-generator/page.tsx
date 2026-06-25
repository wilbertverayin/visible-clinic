import { Header } from "@/components/landing/header";
import { MedicalCertificateForm } from "./form";
import { FileText } from "lucide-react";

export default function MedicalCertificateGeneratorPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex flex-col items-center text-center">
            <FileText className="mb-4 h-12 w-12 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
              AI Medical Certificate Generator
            </h1>
            <p className="mt-4 text-lg text-foreground/80">
              Fill in the patient's details below to generate a professional medical certificate draft instantly. This tool helps reduce administrative time and ensures accuracy.
            </p>
          </div>
          <MedicalCertificateForm />
        </div>
      </main>
    </div>
  );
}
