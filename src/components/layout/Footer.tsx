
"use client";

import { useState, useEffect } from 'react';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="mt-auto border-t border-primary/5 py-12 text-center text-sm text-muted-foreground">
      <p>© {year ?? '2025'} Akein's Ink. Built for the future.</p>
    </footer>
  );
}
