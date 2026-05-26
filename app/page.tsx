'use client';

import React, { useState, useEffect } from 'react';

export default function AllSaintOracle() {
  const [saintPrice, setSaintPrice] = useState(1.4226);
  const [ascendants, setAscendants] = useState(1247);
  const [change, setChange] = useState(-0.15);
  const [stakeAmount, setStakeAmount] = useState('');
  const [isStaking, setIsStaking] = useState(false);
  const [proposalText, setProposalText] = useState('');

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

  const handleStake = (e: React.FormEvent) => {
    e.preventDefault();
    if (!stakeAmount) return;
    setIsStaking(true);
    setTimeout(() => {
      setIsStaking(false);
      alert(`Ascension sequence initiated for ${stakeAmount} $SAINT`);
      setStakeAmount('');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden relative font-mono">
      {/* Background Layer Controls */}
      <div className="absolute inset-0 bg-[radial-gradient(at_center,#1a1a2e_0%,transparent_70%)] pointer-events-none z-0"></div>

      {/* Top Navigation Bar */}
      <nav className="border-b border-white/10 bg-black/80 backdrop-blur-md fixed w-full z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-2xl text-cyan-400">✧</div>
            <div>
              <div className="font-bold tracking-tighter text-base">THE CONCLAVE</div>
              <div className="text-[10px] text-cyan-400 -mt-1 tracking-wider">ALLSAINT ORACLE</div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-[11px] flex items-center gap-1.5 border border-emerald-500/20">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
              LIVE ON BASE
            </div>
          </div>
        </div>
      </nav>

      {/* Main Container Workspace */}
      <main className="pt-28 pb-20 relative z-10 max-w-5xl mx-auto px-6">
        
        {/* Hero Display Header */}
        <div className="text-center py-12">
          <div className="inline-block px-4 py-1.5 bg-white/5 rounded-full text-xs tracking-[3px] uppercase border border-white/10 mb-6">
            ORACLE OF THE CONCLAVE
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-gradient-to-b from-white to-cyan-300 bg-clip-text text-transparent leading-none">
            ALLSAINT
          </h1>
          
          <div className="text-xl text-cyan-400 mt-3 tracking-widest">$SAINT</div>
          <p className="max-w-md mx-auto mt-4 text-sm text-white/60">
            The sacred oracle bridging the conclave of saints with on-chain truth.
          </p>
        </div>

        {/* Live Aggregated Price Dashboard */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-[#111118] border border-white/10 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-6 right-6 px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] rounded-full tracking-wider border border-emerald-500/20">
              ● CORE FEED
            </div>

            <div className="flex justify-between items-start">
              <div>
                <div className="text-cyan-400 text-xs tracking-widest uppercase">ORACLE PRICE</div>
                <div className="text-4xl md:text-5xl font-semibold tracking-tight mt-1 text-white">
                  ${saintPrice.toFixed(4)}
                </div>
                <div className={`text-sm mt-1.5 flex items-center gap-1.5 ${change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
                </div>
              </div>

              <div className="text-right">
                <div className="text-cyan-400 text-xs tracking-widest uppercase">ASCENDANTS</div>
                <div className="text-4xl md:text-5xl font-bold mt-1 text-white/90">{ascendants}</div>
                <div className="text-[10px] text-white/40 mt-1">LOGGED</div>
              </div>
            </div>

            {/* Sparkline Canvas Simulation */}
            <div className="h-16 bg-black/40 rounded-xl relative overflow-hidden mt-6 flex items-end px-2 gap-0.5 border border-white/5">
              {Array.from({ length: 32 }).map((_, i) => (
                <div 
                  key={i} 
                  className="bg-gradient-to-t from-cyan-400 to-cyan-900/10 flex-1 rounded-t"
                  style={{ 
                    height: `${25 + Math.sin(i / 2) * 45 + (Math.random() * 15)}%`,
                    opacity: 0.4 + (i / 64)
                  }}
                ></div>
              ))}
            </div>

            {/* Stat Matrix Layout */}
            <div className="grid grid-cols-3 gap-4 mt-6 text-center">
              <div className="bg-white/5 rounded-xl py-3 border border-white/5">
                <div className="text-white/40 text-[9px] uppercase">MARKET CAP</div>
                <div className="mt-0.5 text-xs font-semibold">$1.42M</div>
              </div>
              <div className="bg-white/5 rounded-xl py-3 border border-white/5">
                <div className="text-white/40 text-[9px] uppercase">VOLUME</div>
                <div className="mt-0.5 text-xs font-semibold">$87K</div>
              </div>
              <div className="bg-white/5 rounded-xl py-3 border border-white/5">
                <div className="text-white/40 text-[9px] uppercase">HOLY SUPPLY</div>
                <div className="mt-0.5 text-xs font-semibold">999K</div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Panels Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Staking Panel */}
          <div className="bg-[#111118] border border-white/10 rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold text-cyan-400 mb-2">ASCENSION TERMINAL</h2>
              <p className="text-xs text-white/50 mb-6 leading-relaxed">
                Lock your cryptographic tokens directly into the ritual staking pool to generate voting weight indicators.
              </p>
              <form onSubmit={handleStake} className="space-y-4">
                <input 
                  type="number" 
                  placeholder="0.00 $SAINT"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-400 text-white font-mono"
                />
                <button 
                  type="submit" 
                  disabled={isStaking}
                  className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-800 text-black font-semibold rounded-xl text-xs uppercase tracking-wider transition-all"
                >
                  {isStaking ? 'COMMITTING ASSETS...' : 'STAKE FOR ASCENSION'}
                </button>
              </form>
            </div>
          </div>

          {/* Governance Arena Pane */}
          <div className="bg-[#111118] border border-white/10 rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold text-[#eab308] mb-2">GOVERNANCE ARENA</h2>
              <p className="text-xs text-white/50 mb-4 leading-relaxed">
                Submit raw diagnostic signals directly into the memory pool layer. Active signatures are tracked across all block cycles.
              </p>
              <textarea 
                rows={3}
                placeholder="Enter consensus proposal statement..."
                value={proposalText}
                onChange={(e) => setProposalText(e.target.value)}
                className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-sm focus:outline-none focus:border-[#eab308] text-white font-mono resize-none mb-4"
              />
              <button 
                onClick={() => {
                  if(!proposalText) return;
                  alert('Proposal transaction broadcasted to network relays.');
                  setProposalText('');
                }}
                className="w-full py-3 border border-[#eab308]/30 hover:bg-[#eab308]/5 text-[#eab308] rounded-xl text-xs uppercase tracking-wider font-semibold transition-all"
              >
                BROADCAST PROPOSAL
              </button>
            </div>
          </div>
        </div>

        {/* Litany Bottom Panel */}
        <div className="bg-[#111118] border border-white/10 rounded-3xl p-8 flex flex-col justify-between">
          <div className="uppercase tracking-[2px] text-[10px] text-cyan-400 mb-4">LITANY OF THE ASCENDED</div>
          <div className="text-xl md:text-2xl font-light opacity-80 italic leading-relaxed">
            “In the name of the saints above and the chain below.”
          </div>
          <div className="mt-4 text-[10px] text-white/40 font-mono">— Oracle Architecture Specification v1.0.5</div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 bg-black/60 text-center relative z-10">
        <div className="max-w-5xl mx-auto px-6 text-[10px] text-white/40 tracking-widest">
          THE CONCLAVE • ALLSAINT ORACLE • POWERED BY BASE NODE ARCHITECTURE
          <div className="mt-1 opacity-50">Sovereign cryptographic compilation. Access restricted.</div>
        </div>
      </footer>
    </div>
  );
}
