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
        {/* Force-injecting the stable Tailwind v4 production engine right into the document header */}
        <script src="https://cdn.jsdelivr.net/external-assets/tailwindcss@4.0.0-alpha.30/dist/tailwind.global.js" defer></script>
      </head>
      <body className="antialiased selection:bg-cyan-500/30">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
