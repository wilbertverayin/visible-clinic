'use server';

import { z } from 'zod';

const AddToWaitlistSchema = z.object({
  email: z.string().email('Invalid email address.'),
});

type State = {
  success: boolean;
  message: string | null;
};

export async function addToWaitlistAction(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = AddToWaitlistSchema.safeParse({
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: validatedFields.error.flatten().fieldErrors.email?.[0] || "Validation failed.",
    };
  }

  const { email } = validatedFields.data;
  const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL;

  if (!scriptUrl) {
    console.error('Missing Google Apps Script URL in .env file');
    return {
      success: false,
      message: 'Server configuration error. Could not connect to the waitlist.',
    };
  }

  try {
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const result = await response.json();

    if (result.result !== 'success') {
      throw new Error(result.message || 'Failed to add to waitlist.');
    }

    return { success: true, message: 'You have been successfully added to the waitlist!' };
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.';
    return { success: false, message: errorMessage };
  }
}
