import type { Metadata } from 'next';
import '../../globals.css';

export const metadata: Metadata = {
  title: 'Aesthetic Clinic Theme | Visible Clinic',
  description: 'A live preview of the Aesthetic Clinic theme by Visible Clinic.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AestheticLayout({
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
