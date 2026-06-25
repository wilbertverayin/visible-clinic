import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dentist Clinic Theme | Visible Clinic',
  description: 'A live preview of the Dentist Clinic theme by Visible Clinic.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DentistLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
