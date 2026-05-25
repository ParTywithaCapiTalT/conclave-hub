import type { Metadata } from 'next';

// @ts-ignore
import './globals.css';

export const metadata: Metadata = {
  title: 'The Conclave • AllSaint Oracle',
  description: 'Bioluminescent governance and staking arena',
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
