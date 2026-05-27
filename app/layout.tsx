import type { Metadata } from 'next';
import Web3Providers from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'AllSaint Oracle — $SAINT',
  description: 'High-fidelity cyber-liturgical oracle platform on Base.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="grain stained">
        {/* The nave-beams class renders Emergent's custom diagonal cathedral light sweep */}
        <div className="nave-beams" /> 
        <Web3Providers>
          {children}
        </Web3Providers>
      </body>
    </html>
  );
}
