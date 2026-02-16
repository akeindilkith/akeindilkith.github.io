"use client";

import { usePathname } from 'next/navigation';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function PageChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // We check if the root is current, as we moved maintenance to root
  // For now, let's assume we want to hide Chrome on the main landing page
  const isLanding = pathname === '/';

  if (isLanding) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-2xl px-4 py-12">
        {children}
      </main>
      <Footer />
    </>
  );
}
