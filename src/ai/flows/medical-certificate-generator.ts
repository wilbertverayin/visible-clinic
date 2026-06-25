'use server';

/**
 * @fileOverview A medical certificate draft generation AI agent.
 *
 * - generateMedicalCertificateDraft - A function that handles the medical certificate draft generation process.
 * - GenerateMedicalCertificateInput - The input type for the generateMedicalCertificateDraft function.
 * - GenerateMedicalCertificateOutput - The return type for the generateMedicalCertificateDraft function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMedicalCertificateInputSchema = z.object({
  patientName: z.string().describe('The full name of the patient.'),
  dateOfBirth: z.string().describe('The date of birth of the patient (YYYY-MM-DD).'),
  reasonForVisit: z.string().describe('The reason for the patient’s visit to the clinic.'),
  diagnosis: z.string().describe('The diagnosis of the patient’s condition.'),
  treatmentRecommended: z.string().describe('The recommended treatment for the patient.'),
  dateOfCertificate: z.string().describe('The date the certificate is issued (YYYY-MM-DD).'),
  doctorName: z.string().describe('The full name of the issuing doctor.'),
  clinicName: z.string().describe('The name of the clinic.'),
});
export type GenerateMedicalCertificateInput = z.infer<typeof GenerateMedicalCertificateInputSchema>;

const GenerateMedicalCertificateOutputSchema = z.object({
  certificateDraft: z
    .string()
    .describe('A draft of the medical certificate based on the provided information.'),
});
export type GenerateMedicalCertificateOutput = z.infer<typeof GenerateMedicalCertificateOutputSchema>;

export async function generateMedicalCertificateDraft(
  input: GenerateMedicalCertificateInput
): Promise<GenerateMedicalCertificateOutput> {
  return generateMedicalCertificateDraftFlow(input);
}

const prompt = ai.definePrompt({
  name: 'medicalCertificateDraftPrompt',
  input: {schema: GenerateMedicalCertificateInputSchema},
  output: {schema: GenerateMedicalCertificateOutputSchema},
  prompt: `You are an expert medical professional tasked with drafting medical certificates.

  Based on the information provided, create a draft of a medical certificate. Ensure the certificate includes all relevant details in a professional and clear format.

  Patient Name: {{{patientName}}}
  Date of Birth: {{{dateOfBirth}}}
  Reason for Visit: {{{reasonForVisit}}}
  Diagnosis: {{{diagnosis}}}
  Treatment Recommended: {{{treatmentRecommended}}}
  Date of Certificate: {{{dateOfCertificate}}}
  Doctor Name: {{{doctorName}}}
  Clinic Name: {{{clinicName}}}

  Draft Certificate:`,
});

const generateMedicalCertificateDraftFlow = ai.defineFlow(
  {
    name: 'generateMedicalCertificateDraftFlow',
    inputSchema: GenerateMedicalCertificateInputSchema,
    outputSchema: GenerateMedicalCertificateOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
