// AI features disabled for static build

/**
 * @fileOverview A medical certificate draft generation AI agent.
 *
 * - generateMedicalCertificateDraft - A function that handles the medical certificate draft generation process.
 * - GenerateMedicalCertificateInput - The input type for the generateMedicalCertificateDraft function.
 * - GenerateMedicalCertificateOutput - The return type for the generateMedicalCertificateDraft function.
 */

export type GenerateMedicalCertificateInput = {
  patientName: string;
  dateOfBirth: string;
  reasonForVisit: string;
  diagnosis: string;
  treatmentRecommended: string;
  dateOfCertificate: string;
  doctorName: string;
  clinicName: string;
};

export type GenerateMedicalCertificateOutput = {
  certificateDraft: string;
};

export async function generateMedicalCertificateDraft(
  input: GenerateMedicalCertificateInput
): Promise<GenerateMedicalCertificateOutput> {
  return {
    certificateDraft: `MEDICAL CERTIFICATE\n\nThis is to certify that ${input.patientName} (DOB: ${input.dateOfBirth}) was examined at ${input.clinicName} on ${input.dateOfCertificate}.\n\nReason for Visit: ${input.reasonForVisit}\nDiagnosis: ${input.diagnosis}\nTreatment Recommended: ${input.treatmentRecommended}\n\nIssued by: ${input.doctorName}\n${input.clinicName}`,
  };
}
