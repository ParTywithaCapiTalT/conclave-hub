'use client';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { motion } from 'framer-motion';

export default function AscensionGate() {
  const { address, isConnected } = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected && address) {
    return (
      <div className="glass p-5 sm:p-6 rounded-2xl text-center w-full">
        <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse mx-auto mb-3"></div>
        
        <p className="text-[#eab308] font-mono text-sm mb-1">ASCENDED</p>
        {/* Optimized: Clean typography sizing and break utilities for small mobile displays */}
        <p className="text-cyan-300 font-mono text-xs break-all selection:bg-cyan-500/30 px-2">
          {address}
        </p>
        
        <button 
          onClick={() => disconnect()}
          className="mt-6 text-red-400 hover:text-red-500 text-sm underline transition-colors block mx-auto"
        >
          Sever Connection
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-3 w-full">
      {connectors.map((connector) => (
        <motion.button
          key={connector.id}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => connect({ connector })}
          {/* Optimized: Fluid padding and responsive text wrapping for mobile wallet select panels */}
          className="w-full bg-gradient-to-r from-[#22d3ee] to-cyan-400 hover:from-cyan-300 hover:to-[#eab308] 
                     text-[#0a0a1f] font-bold py-4 px-4 sm:px-6 rounded-2xl text-xs sm:text-sm uppercase tracking-widest
                     transition-all duration-200 block text-center whitespace-normal"
        >
          {connector.name} • Enter Conclave
        </motion.button>
      ))}
    </div>
  );
}
