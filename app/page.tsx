'use client';

import React, { useState, useEffect } from 'react';
import SaintTicker from '../components/SaintTicker';
import StakingTerminal from '../components/StakingTerminal';
import SubmitProposal from '../components/SubmitProposal';

export default function AllSaintOracle() {
  const [saintPrice, setSaintPrice] = useState(1.4226);
  const [ascendants, setAscendants] = useState(1247);
  const [change, setChange] = useState(-0.15);

  // Simulated live updates for background telemetry data
  useEffect(() => {
    const interval = setInterval(() => {
      const newPrice = parseFloat((saintPrice + (Math.random() - 0.5) * 0.01).toFixed(4));
      setSaintPrice(newPrice);
      
      const newChange = parseFloat(((newPrice - 1.4226) / 1.4226 * 100).toFixed(2));
      setChange(newChange);
      
      if (Math.random() > 0.85) {
        setAscendants(prev => prev + Math.floor(Math.random() * 3) + 1);
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [saintPrice]);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(at_center,#1a1a2e_0%,transparent_70%)] pointer-events-none"></div>
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#22d3ee_0.8px,transparent_1px)] [background-size:50px_50px] pointer-events-none"></div>

      {/* Top Navigation */}
      <nav className="border-b border-white/10 bg-black/70 backdrop-blur-xl fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-xl font-bold">✧</div>
            <div>
              <div className="font-semibold tracking-tighter text-xl">THE CONCLAVE</div>
              <div className="text-[10px] text-cyan-400 -mt-1">ALLSAINT ORACLE</div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#" className="hover:text-cyan-400 transition-colors">ORACLES</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">ASCENDANTS</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">LITANY</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">VAULT</a>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-1.5 bg-white/5 rounded-full text-xs flex items-center gap-2 border border-white/10">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span>LIVE ON BASE</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center pb-12">
            <div className="inline-flex items-center gap-2 bg-white/5 px-6 py-2 rounded-full mb-6 border border-white/10">
              <span className="text-emerald-400">●</span>
              <span className="text-sm tracking-[3px] uppercase">ORACLE OF THE CONCLAVE</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[120px] leading-none font-bold tracking-tighter bg-gradient-to-b from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              ALLSAINT
            </h1>
            
            <div className="text-2xl text-cyan-400 mt-2 tracking-widest">$SAINT</div>
            <p className="max-w-md mx-auto mt-6 text-lg text-white/70">
              The sacred oracle bridging the conclave of saints with on-chain truth.
            </p>
          </div>

          {/* Core Telemetry Data Stream */}
          <div className="mb-12">
            <SaintTicker />
          </div>

          {/* Active Workspaces */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Staking Terminal Pane */}
            <div className="glass rounded-3xl p-1">
              <StakingTerminal />
            </div>

            {/* Governance Arena Pane */}
            <div className="bg-[#111118]/80 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <h2 className="text-3xl font-semibold tracking-tight text-[#eab308] mb-6">Governance Arena</h2>
              <SubmitProposal />
            </div>
          </div>

          {/* Context / Litany */}
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-5 bg-[#111118] border border-white/10 rounded-3xl p-8">
              <div className="uppercase tracking-[2px] text-xs text-cyan-400 mb-4">THE SACRED FEED</div>
              <h3 className="text-3xl font-semibold leading-tight">Divine Market Truth</h3>
              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                AllSaint channels the collective wisdom of the conclave. Every price tick is a parameter logged to immutable execution space.
              </p>
              
              <div className="mt-8 space-y-4">
                {[
                  ["INFERRED PRICE INDEX", `$${saintPrice.toFixed(4)}`],
                  ["CYCLED CHANGE VALUE", `${change >= 0 ? '↑' : '↓'} ${Math.abs(change)}%`],
                  ["ACTIVE ASCENDANTS", ascendants.toLocaleString()]
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between items-center border-b border-white/5 pb-3 last:border-none last:pb-0">
                    <div className="text-xs text-white/50">{label}</div>
                    <div className="font-mono text-sm text-cyan-400">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-7 bg-[#111118] border border-white/10 rounded-3xl p-8 flex flex-col justify-between">
              <div className="uppercase tracking-[2px] text-xs text-cyan-400 mb-4">LITANY OF THE ASCENDED</div>
              
              <div className="my-auto">
                <div className="text-3xl md:text-4xl font-light opacity-80 leading-snug">“In the name of the saints above and the chain below.”</div>
                <div className="mt-4 text-xs text-white/40">— Oracle Protocol v1.0.0</div>
              </div>

              <button 
                onClick={() => alert("Sovereign terminal state loaded. Connect wallet above to execute raw signatures.")}
                className="mt-6 w-full py-3.5 border border-white/20 hover:bg-white/5 hover:border-cyan-400/50 transition-all rounded-xl text-xs tracking-widest uppercase font-mono"
              >
                SYSTEM CHECK
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-black/60 relative z-10">
        <div className="max-w-5xl mx-auto px-6 text-center text-xs text-white/40">
          THE CONCLAVE • ALLSAINT ORACLE • SOVEREIGN DOMAIN • STAKING FOR ASCENSION
          <div className="mt-2 text-[10px] opacity-50">Not financial advice. Purely cryptographic coordination.</div>
        </div>
      </footer>
    </div>
  );
}
