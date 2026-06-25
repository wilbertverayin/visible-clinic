"use client";

import { useState, useEffect } from "react";
import { generateCertificateAction } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";

type State = {
  data: { certificateDraft: string } | null;
  error: string | null;
};

export function MedicalCertificateForm() {
  const [state, setState] = useState<State>({ data: null, error: null });
  const [pending, setPending] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error) {
      toast({
        title: "Error",
        description: state.error,
        variant: "destructive",
      });
    }
  }, [state.error, toast]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    const formData = new FormData(e.currentTarget);
    const input: Record<string, string> = {};
    formData.forEach((value, key) => { input[key] = value as string; });
    const result = await generateCertificateAction(input);
    setState(result);
    setPending(false);
  }

  return (
    <Card className="w-full">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Patient Information</CardTitle>
          <CardDescription>Enter the details to create a draft certificate.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="patientName">Patient Name</Label>
            <Input id="patientName" name="patientName" placeholder="Juan Dela Cruz" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dateOfBirth">Date of Birth</Label>
            <Input id="dateOfBirth" name="dateOfBirth" type="date" required />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="reasonForVisit">Reason for Visit</Label>
            <Textarea id="reasonForVisit" name="reasonForVisit" placeholder="e.g., Follow-up checkup, fever, etc." required />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="diagnosis">Diagnosis</Label>
            <Textarea id="diagnosis" name="diagnosis" placeholder="e.g., Acute Viral Nasopharyngitis" required />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="treatmentRecommended">Treatment Recommended</Label>
            <Textarea id="treatmentRecommended" name="treatmentRecommended" placeholder="e.g., Rest for 3 days, medication, etc." required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dateOfCertificate">Date of Certificate</Label>
            <Input id="dateOfCertificate" name="dateOfCertificate" type="date" defaultValue={new Date().toISOString().split('T')[0]} required />
          </div>
           <div className="space-y-2">
            <Label htmlFor="doctorName">Doctor Name</Label>
            <Input id="doctorName" name="doctorName" placeholder="Dr. Maria Santos" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="clinicName">Clinic Name</Label>
            <Input id="clinicName" name="clinicName" placeholder="HealthFirst Clinic" required />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={pending} className="w-full">
            {pending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate Certificate"
            )}
          </Button>
        </CardFooter>
      </form>
      {state.data && (
        <div className="p-4 sm:p-6">
            <Alert>
                <AlertTitle>Certificate Draft Generated</AlertTitle>
                <AlertDescription className="mt-4 whitespace-pre-wrap font-mono text-sm bg-muted p-4 rounded-md">
                    {state.data.certificateDraft}
                </AlertDescription>
            </Alert>
        </div>
      )}
    </Card>
  );
}
