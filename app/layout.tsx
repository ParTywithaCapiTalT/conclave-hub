import type { Metadata } from 'next';
import './import '../app/globals.css';

export const metadata: Metadata = {
  title: 'The Conclave • AllSaint Oracle',
  description: '$SAINT | Staking for Ascension',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0a0a1f] text-white">{children}</body>
    </html>
  );
}
