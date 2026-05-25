'use client';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { motion } from 'framer-motion';

export default function AscensionGate() {
  const { address, isConnected } = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected && address) {
    return (
      <div className="glass p-6 rounded-2xl text-center">
        <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse mx-auto mb-3"></div>
        <p className="text-[#eab308] font-mono">ASCENDED</p>
        <p className="text-cyan-300 text-sm font-mono mt-1">
          {address.slice(0, 6)}...{address.slice(-4)}
        </p>
        <button 
          onClick={() => disconnect()}
          className="mt-4 text-red-400 text-sm hover:underline"
        >
          Sever Connection
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {connectors.map((connector) => (
        <motion.button
          key={connector.id}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => connect({ connector })}
          className="w-full bg-gradient-to-r from-[#22d3ee] to-cyan-400 text-black font-bold py-4 rounded-xl"
        >
          Connect with {connector.name}
        </motion.button>
      ))}
    </div>
  );
}