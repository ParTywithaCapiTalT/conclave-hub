'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAccount } from 'wagmi';
import AscensionGate from './AscensionGate';
// Fixed: Using relative pathing for flat root layout
import { useStakingSimulation } from '../hooks/useStakingSimulation';

export default function StakingTerminal() {
  const { isConnected } = useAccount();
  const [amount, setAmount] = useState<number>(1000);
  const [days, setDays] = useState<number>(90);

  const { estimatedReward, totalReturn, apy } = useStakingSimulation(amount, days);

  return (
    // Responsive outer padding
    <div className="glass p-5 sm:p-8 rounded-3xl border border-[#22d3ee]/30">
      {/* Responsive heading text size */}
      <h2 className="title-font text-2xl md:text-3xl text-[#eab308] mb-8">ASCENSION TERMINAL</h2>

      {!isConnected ? (
        <AscensionGate />
      ) : (
        <div className="space-y-8">
          <div>
            <label className="block text-cyan-300 text-sm mb-2 font-mono">STAKE AMOUNT ($SAINT)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
              className="w-full bg-black/50 border border-[#22d3ee]/50 rounded-xl p-4 text-2xl font-mono focus:outline-none focus:border-[#eab308]"
            />
          </div>

          <div>
            <label className="block text-cyan-300 text-sm mb-2 font-mono">LOCK PERIOD (DAYS)</label>
            <input
              type="range"
              min="30"
              max="365"
              step="15"
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="w-full accent-[#eab308]"
            />
            <div className="flex justify-between text-xs text-cyan-400 font-mono mt-1">
              <span>30</span>
              <span className="text-[#eab308] font-semibold">{days} DAYS</span>
              <span>365</span>
            </div>
          </div>

          <div className="bg-black/60 border border-[#22d3ee]/20 rounded-2xl p-6 space-y-4">
            <div className="flex justify-between">
              <span className="text-cyan-400">Projected APY</span>
              <span className="text-[#eab308] font-mono font-bold">{apy}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cyan-400">Estimated Reward</span>
              <span className="font-mono text-emerald-400">+{estimatedReward} $SAINT</span>
            </div>
            <div className="flex justify-between border-t border-cyan-900 pt-4">
              <span className="text-cyan-400">Total at Maturity</span>
              <span className="font-mono text-white text-xl">{totalReturn} $SAINT</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            className="w-full py-5 bg-gradient-to-r from-[#eab308] to-yellow-400 text-black font-bold rounded-2xl"
          >
            CONFIRM STAKE FOR ASCENSION
          </motion.button>
        </div>
      )}
    </div>
  );
}

