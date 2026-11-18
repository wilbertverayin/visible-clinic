export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/FORMSPREE_FORM_ID';

type State = {
  success: boolean;
  message: string | null;
};

export async function addToWaitlistAction(
  prevState: State,
  formData: FormData
): Promise<State> {
  const email = String(formData.get('email') ?? '').trim();
  if (!email) {
    return { success: false, message: 'Please enter your email address.' };
  }

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    if (response.ok) {
      return { success: true, message: 'You have been added to the waitlist.' };
    }
    const data = await response.json().catch(() => null);
    const detail = data?.errors?.map((e: { message: string }) => e.message).join(', ');
    return {
      success: false,
      message: detail || 'We could not add you to the waitlist. Please try again.',
    };
  } catch {
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.',
    };
  }
}
