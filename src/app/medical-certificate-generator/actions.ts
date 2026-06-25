// AI features disabled for static build

import { generateMedicalCertificateDraft } from "@/ai/flows/medical-certificate-generator";

type State = {
  data: {
    certificateDraft: string;
  } | null;
  error: string | null;
};

export async function generateCertificateAction(
  input: Record<string, string>
): Promise<State> {
  try {
    const result = await generateMedicalCertificateDraft({
      patientName: input.patientName ?? '',
      dateOfBirth: input.dateOfBirth ?? '',
      reasonForVisit: input.reasonForVisit ?? '',
      diagnosis: input.diagnosis ?? '',
      treatmentRecommended: input.treatmentRecommended ?? '',
      dateOfCertificate: input.dateOfCertificate ?? '',
      doctorName: input.doctorName ?? '',
      clinicName: input.clinicName ?? '',
    });
    return { data: result, error: null };
  } catch (error) {
    console.error(error);
    return { data: null, error: 'Failed to generate certificate. Please try again.' };
  }
}
