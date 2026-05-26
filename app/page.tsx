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
      const fluctuation = (Math.random() - 0.5) * 0.008;
      const newPrice = Math.max(1.3, parseFloat((saintPrice + fluctuation).toFixed(4)));
      setSaintPrice(newPrice);
      
      const newChange = parseFloat(((newPrice - 1.4226) / 1.4226 * 100).toFixed(2));
      setChange(newChange);
      
      if (Math.random() > 0.7) {
        setAscendants(prev => prev + Math.floor(Math.random() * 2) + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [saintPrice]);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden relative">
      {/* Background Grid & Radial Glow Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(at_center,#1a1a2e_0%,transparent_70%)] pointer-events-none z-0"></div>
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#22d3ee_0.8px,transparent_1px)] [background-size:40px_40px] pointer-events-none z-0"></div>

      {/* Top Navigation Bar */}
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

      {/* Main Container Workspace */}
      <main className="pt-32 pb-20 relative z-10 max-w-5xl mx-auto px-6">
        
        {/* Hero Display Header */}
        <div className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-white/5 px-6 py-2 rounded-full mb-6 border border-white/10">
            <span className="text-emerald-400 animate-pulse">●</span>
            <span className="text-sm tracking-[3px] uppercase">ORACLE OF THE CONCLAVE</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[110px] leading-none font-bold tracking-tighter bg-gradient-to-b from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
            ALLSAINT
          </h1>
          
          <div className="text-2xl text-cyan-400 mt-2 tracking-widest">$SAINT</div>
          <p className="max-w-md mx-auto mt-6 text-base text-white/70">
            The sacred oracle bridging the conclave of saints with on-chain truth.
          </p>
        </div>

        {/* Live Aggregated Price Dashboard */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-[#111118]/90 border border-white/10 rounded-3xl p-8 relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-6 right-6 px-4 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded-full flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></div>
              LIVE TELEMETRY
            </div>

            <div className="flex justify-between items-start mb-8">
              <div>
                <div className="text-cyan-400 text-xs tracking-widest uppercase">CURRENT ORACLE PRICE</div>
                <div className="text-5xl md:text-6xl font-mono font-semibold tracking-tighter mt-2">
                  ${saintPrice.toFixed(4)}
                </div>
                <div className={`text-sm mt-2 flex items-center gap-2 ${change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {change >= 0 ? '↑' : '↓'} {Math.abs(change)}% <span className="text-white/30 text-xs">24H CYCLE</span>
                </div>
              </div>

              <div className="text-right">
                <div className="text-cyan-400 text-xs tracking-widest uppercase">ASCENDANTS</div>
                <div className="text-5xl md:text-6xl font-mono font-bold mt-2 text-white/90">{ascendants.toLocaleString()}</div>
                <div className="text-[10px] text-white/40 mt-1">INVOKED CURRENT POOL</div>
              </div>
            </div>

            {/* Sparkline Canvas Simulation */}
            <div className="h-20 bg-black/40 rounded-xl relative overflow-hidden mb-6 flex items-end px-4 gap-0.5">
              {Array.from({ length: 28 }).map((_, i) => (
                <div 
                  key={i} 
                  className="bg-gradient-to-t from-cyan-400 to-cyan-900/20 flex-1 rounded-t transition-all duration-500"
                  style={{ 
                    height: `${30 + Math.sin(i / 2.5) * 50 + (Math.random() * 15)}%`,
                    opacity: 0.5 + (i / 56)
                  }}
                ></div>
              ))}
              <div className="absolute top-3 left-4 text-[10px] text-white/30 font-mono tracking-wider uppercase">Real-time Chain Feed</div>
            </div>

            {/* Stat Matrix Layout */}
            <div className="grid grid-cols-3 gap-4 text-center text-xs">
              <div className="bg-white/5 rounded-xl py-3 border border-white/5">
                <div className="text-white/50 uppercase text-[10px]">MARKET CAP</div>
                <div className="font-mono mt-0.5 font-semibold text-white/90">$1.42M</div>
              </div>
              <div className="bg-white/5 rounded-xl py-3 border border-white/5">
                <div className="text-white/50 uppercase text-[10px]">VOLUME</div>
                <div className="font-mono mt-0.5 font-semibold text-white/90">$87.2K</div>
              </div>
              <div className="bg-white/5 rounded-xl py-3 border border-white/5">
                <div className="text-white/50 uppercase text-[10px]">HOLY SUPPLY</div>
                <div className="font-mono mt-0.5 font-semibold text-white/90">999.7K</div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Pipeline Interface Injectors */}
        <div className="mb-12">
          <SaintTicker />
        </div>

        {/* Interactive Modules Panel Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="glass rounded-3xl p-2 transition-all duration-300 hover:border-cyan-400/40">
            <StakingTerminal />
          </div>
          <div className="bg-[#111118]/90 border border-white/10 rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-[#eab308] mb-4">Governance Arena</h2>
              <p className="text-xs text-white/60 mb-6 leading-relaxed">
                Submit execution transactions directly into the Conclave memory pool. Active membership required for validation.
              </p>
            </div>
            <SubmitProposal />
          </div>
        </div>

        {/* Litany Context / Informational Footer Block */}
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-5 bg-[#111118] border border-white/10 rounded-3xl p-8">
            <div className="uppercase tracking-[2px] text-[10px] text-cyan-400 mb-3">THE SACRED FEED</div>
            <h3 className="text-2xl font-semibold leading-tight">Divine Market Truth</h3>
            <p className="mt-3 text-xs text-white/70 leading-relaxed">
              AllSaint channels the collective consensus vectors of the node layer. Every signature validation logs directly to your local state container.
            </p>
          </div>

          <div className="md:col-span-7 bg-[#111118] border border-white/10 rounded-3xl p-8 flex flex-col justify-between">
            <div className="uppercase tracking-[2px] text-[10px] text-cyan-400 mb-4">LITANY OF THE ASCENDED</div>
            <div className="my-auto">
              <div className="text-2xl font-light opacity-80 italic leading-relaxed">“In the name of the saints above and the chain below.”</div>
              <div className="mt-3 text-[10px] text-white/40 font-mono">— Oracle Architecture Specification v1.0.2</div>
            </div>
          </div>
        </div>
      </main>

      {/* Persistent Page Footer */}
      <footer className="border-t border-white/10 py-10 bg-black/60 relative z-10 text-center">
        <div className="max-w-5xl mx-auto px-6 text-[11px] text-white/40 tracking-wider font-mono">
          THE CONCLAVE • ALLSAINT ORACLE • POWERED BY BASE NODE ARCHITECTURE
          <div className="mt-1 text-[9px] opacity-50">Sovereign cryptographic compilation. Access restricted.</div>
        </div>
      </footer>
    </div>
  );
}
