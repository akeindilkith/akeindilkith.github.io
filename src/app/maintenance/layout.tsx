
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Akein Dilkith',
  description: 'Under Maintenance',
}

export default function MaintenanceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Nested layouts should not include <html> or <body> tags.
  // They inherit them from the root layout.
  return <>{children}</>;
}
