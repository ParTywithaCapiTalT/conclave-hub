import type { Metadata } from 'next';
import Providers from './providers';

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
      <head>
        {/* Injecting the stable compiled production utility engine directly to the browser head */}
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/tailwindcss@3.4.1/dist/tailwind.min.css" 
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
