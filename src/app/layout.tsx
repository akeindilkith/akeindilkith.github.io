
import type { Metadata } from 'next';
import './globals.css';
import { PageChrome } from '@/components/layout/PageChrome';

export const metadata: Metadata = {
  title: "Akein Dilkith",
  description: 'A minimalist blog by Akein Dikith exploring AI and design.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen">
        <PageChrome>
          {children}
        </PageChrome>
      </body>
    </html>
  );
}
