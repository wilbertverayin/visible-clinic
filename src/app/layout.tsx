import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const siteUrl = 'https://visibleclinic.com';

export const metadata: Metadata = {
  title: {
    default: 'Visible Clinic',
    template: '%s | Visible Clinic',
  },
  description: 'Empowering your online presence. Visibility builds credibility. We build professional websites and digital tools for clinics and doctors.',
  keywords: ['clinic website', 'doctor website', 'medical practice marketing', 'patient engagement', 'online booking', 'medical SEO'],
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'Visible Clinic | Digital Growth for Medical Practices',
    description: 'Empowering your online presence. Visibility builds credibility. We build professional websites and digital tools for clinics and doctors.',
    url: siteUrl,
    siteName: 'Visible Clinic',
    images: [
      {
        url: '/public/1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Visible Clinic promotional image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visible Clinic | Digital Growth for Medical Practices',
    description: 'Empowering your online presence. Visibility builds credibility. We build professional websites and digital tools for clinics and doctors.',
    images: ['/public/1200x630.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:wght@300;400;500&family=Roboto:wght@400;500;700&family=Nunito:wght@400;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-[linear-gradient(to_bottom,hsl(var(--background))_40rem,hsl(var(--accent))_80rem,hsl(var(--background))_150rem)]">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
