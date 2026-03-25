import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dynapharm Distributor Points Calculator',
  description: 'Calculate qualification points for Dynapharm distributors',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
