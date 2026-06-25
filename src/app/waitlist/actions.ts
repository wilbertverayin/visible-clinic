// AI features disabled for static build

type State = {
  success: boolean;
  message: string | null;
};

export async function addToWaitlistAction(
  prevState: State,
  formData: FormData
): Promise<State> {
  return { success: true, message: 'You have been added to the waitlist.' };
}
