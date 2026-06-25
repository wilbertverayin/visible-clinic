import type { Metadata } from 'next';
import '../../globals.css';

export const metadata: Metadata = {
  title: 'Laboratories Theme | Visible Clinic',
  description: 'A live preview of the Laboratories theme by Visible Clinic.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function LaboratoriesLayout({
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
