import type { Metadata } from 'next';
import '../../globals.css';

export const metadata: Metadata = {
  title: 'Pediatric Clinic Theme | Visible Clinic',
  description: 'A live preview of the Pediatric Clinic theme by Visible Clinic.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PediaLayout({
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
