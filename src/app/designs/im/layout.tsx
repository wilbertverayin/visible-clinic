import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Internal Medicine Theme | Visible Clinic',
  description: 'A live preview of the Internal Medicine theme by Visible Clinic.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function IMLayout({
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
