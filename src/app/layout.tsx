
import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';

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
        <Navbar />
        <main className="mx-auto max-w-2xl px-4 py-12">
          {children}
        </main>
        <footer className="mt-auto border-t border-primary/5 py-12 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Akein's Ink. Built for the future.</p>
        </footer>
      </body>
    </html>
  );
}
