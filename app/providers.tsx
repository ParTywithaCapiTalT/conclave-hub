// 1. CRITICAL: Polyfills must be imported FIRST before any web3 library
import '@walletconnect/react-native-compat'; 

import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { base } from 'wagmi/chains';
import { createAppKit, defaultWagmiConfig } from '@reown/appkit-wagmi-react-native';

// 2. Setup your App Metadata for deep-linking back from mobile wallets
const metadata = {
  name: 'AllSaint Oracle',
  description: 'Mobile Oracle Application',
  url: 'https://allsaint-oracle.com', // Must match your native app's deep link domain
  icons: ['https://your-domain.com/oracle-portrait.jpg'],
  redirect: {
    native: 'allsaint://', // Your app's custom URL scheme
  }
};

// 3. Get a free Project ID at https://cloud.reown.com/
const projectId = 'YOUR_WALLETCONNECT_PROJECT_ID_HERE'; 

const chains = [base] as const;

// 4. Create the mobile-compatible Wagmi config
const config = defaultWagmiConfig({ 
  chains, 
  projectId, 
  metadata,
  extraConnectors: [] // Handles native app-to-app routing automatically
});

// 5. Initialize the Mobile AppKit Modal instance
createAppKit({
  projectId,
  chains,
  config,
  enableAnalytics: false,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { gcTime: 1000 * 60 * 60 * 24, retry: 1 },
  },
});

// FIXED: Cleaned up export statement matching your file structure
export function Providers({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
