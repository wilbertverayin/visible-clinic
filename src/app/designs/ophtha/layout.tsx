import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ophthalmology Clinic Theme | Visible Clinic',
  description: 'A live preview of the Ophthalmology Clinic theme by Visible Clinic.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function OphthaLayout({
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
