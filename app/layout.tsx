import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'AllSaint Oracle — $SAINT',
  description: 'The sacred oracle bridging the conclave of saints with on-chain truth.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="grain stained">
        <div className="nave-beams" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
