
"use client";

import { usePathname } from 'next/navigation';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function PageChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isMaintenance = pathname === '/maintenance';

  if (isMaintenance) {
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
