"use server";

import { generateMedicalCertificateDraft } from "@/ai/flows/medical-certificate-generator";
import { z } from "zod";

const GenerateMedicalCertificateInputSchema = z.object({
  patientName: z.string().min(1, "Patient name is required."),
  dateOfBirth: z.string().min(1, "Date of birth is required."),
  reasonForVisit: z.string().min(1, "Reason for visit is required."),
  diagnosis: z.string().min(1, "Diagnosis is required."),
  treatmentRecommended: z.string().min(1, "Recommended treatment is required."),
  dateOfCertificate: z.string().min(1, "Date of certificate is required."),
  doctorName: z.string().min(1, "Doctor name is required."),
  clinicName: z.string().min(1, "Clinic name is required."),
});

type State = {
  data: {
    certificateDraft: string;
  } | null;
  error: string | null;
};

export async function generateCertificateAction(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = GenerateMedicalCertificateInputSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      data: null,
      error: validatedFields.error.flatten().fieldErrors[0] || "Validation failed.",
    };
  }
  
  try {
    const result = await generateMedicalCertificateDraft(validatedFields.data);
    return { data: result, error: null };
  } catch (error) {
    console.error(error);
    return { data: null, error: "Failed to generate certificate. Please try again." };
  }
}
