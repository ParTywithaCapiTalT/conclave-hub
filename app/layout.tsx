'use client';

import React, { useState, useEffect } from 'react';

export default function AllSaintOracle() {
  const [saintPrice, setSaintPrice] = useState(1.4226);
  const [ascendants, setAscendants] = useState(1247);
  const [change, setChange] = useState(-0.15);
  const [isLive, setIsLive] = useState(true);

  // Simulated live updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Random small price fluctuation
      const newPrice = parseFloat((saintPrice + (Math.random() - 0.5) * 0.01).toFixed(4));
      setSaintPrice(newPrice);
      
      const newChange = parseFloat(((newPrice - 1.4226) / 1.4226 * 100).toFixed(2));
      setChange(newChange);
      
      // Occasional ascendant increase
      if (Math.random() > 0.85) {
        setAscendants(prev => prev + Math.floor(Math.random() * 3) + 1);
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [saintPrice]);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(at_center,#1a1a2e_0%,transparent_70%)]"></div>
      <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,#ffffff_0,#ffffff_2px,transparent_2px,transparent_40px)]"></div>

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
          
          <div className="flex items-center gap-8 text-sm">
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
            <button className="px-6 py-2 bg-white text-black rounded-full font-medium text-sm hover:bg-white/90 transition-all active:scale-95">
              CONNECT WALLET
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center pt-16 pb-12">
            <div className="inline-flex items-center gap-2 bg-white/5 px-6 py-2 rounded-full mb-6 border border-white/10">
              <span className="text-emerald-400">●</span>
              <span className="text-sm tracking-[3px] uppercase">ORACLE OF THE CONCLAVE</span>
            </div>
            
            <h1 className="text-[120px] leading-none font-bold tracking-tighter bg-gradient-to-b from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              ALLSAINT
            </h1>
            
            <div className="text-2xl text-cyan-400 mt-2 tracking-widest">$SAINT</div>
            <p className="max-w-md mx-auto mt-6 text-lg text-white/70">
              The sacred oracle bridging the conclave of saints with on-chain truth.
            </p>
          </div>

          {/* Live Price Card */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-[#111118] border border-white/10 rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute top-6 right-6 px-4 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded-full flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></div>
                LIVE
              </div>

              <div className="flex justify-between items-start mb-10">
                <div>
                  <div className="text-cyan-400 text-sm tracking-widest">CURRENT ORACLE PRICE</div>
                  <div className="text-[72px] font-mono font-semibold tracking-tighter mt-2">
                    ${saintPrice.toFixed(4)}
                  </div>
                  <div className={`text-lg flex items-center gap-2 ${change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    {change >= 0 ? '↑' : '↓'} {Math.abs(change)}% <span className="text-white/50 text-sm">24H</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-cyan-400 text-sm tracking-widest">ASCENDANTS</div>
                  <div className="text-7xl font-mono font-bold mt-2 text-white/90">{ascendants.toLocaleString()}</div>
                  <div className="text-xs text-white/50">INVOKED THIS CYCLE</div>
                </div>
              </div>

              {/* Price Sparkline */}
              <div className="h-24 bg-black/40 rounded-2xl relative overflow-hidden mb-8">
                <div className="absolute inset-0 flex items-end px-8">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="bg-gradient-to-t from-cyan-400 to-transparent w-1 mx-0.5 rounded-t transition-all"
                      style={{ 
                        height: `${35 + Math.sin(i / 3) * 45}%`,
                        opacity: 0.6 + Math.random() * 0.4 
                      }}
                    ></div>
                  ))}
                </div>
                <div className="absolute bottom-4 left-8 text-xs text-white/40 font-mono">LAST 24 CYCLES</div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div className="bg-white/5 rounded-2xl py-4">
                  <div className="text-white/60">MARKET CAP</div>
                  <div className="font-mono mt-1">$1.42M</div>
                </div>
                <div className="bg-white/5 rounded-2xl py-4">
                  <div className="text-white/60">VOLUME</div>
                  <div className="font-mono mt-1">$87.2K</div>
                </div>
                <div className="bg-white/5 rounded-2xl py-4">
                  <div className="text-white/60">HOLY SUPPLY</div>
                  <div className="font-mono mt-1">999.7K</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features / Litany */}
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-5 bg-[#111118] border border-white/10 rounded-3xl p-10">
              <div className="uppercase tracking-[2px] text-xs text-cyan-400 mb-4">THE SACRED FEED</div>
              <h3 className="text-4xl leading-none font-semibold">Divine Market Truth</h3>
              <p className="mt-6 text-white/70 leading-relaxed">
                AllSaint channels the collective wisdom of the conclave. Every price tick is a prayer answered by the oracle.
              </p>
              
              <div className="mt-10 space-y-6">
                {[
                  ["INVOCATION SPEED", "42ms"],
                  ["HOLINESS SCORE", "99.7%"],
                  ["SAINTS GUARDING", "1,247"]
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between items-center border-b border-white/10 pb-4 last:border-none last:pb-0">
                    <div className="text-white/70">{label}</div>
                    <div className="font-mono text-cyan-400">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-7 bg-[#111118] border border-white/10 rounded-3xl p-10 flex flex-col">
              <div className="uppercase tracking-[2px] text-xs text-cyan-400 mb-6">LITANY OF THE ASCENDED</div>
              
              <div className="flex-1 flex flex-col justify-center">
                <div className="text-6xl leading-none font-light opacity-80">“In the name of the saints above and the chain below.”</div>
                <div className="mt-8 text-white/60">— Oracle Protocol v0.8.4</div>
              </div>

              <button 
                onClick={() => alert("Connected to the Conclave. Your soul has been witnessed.")}
                className="mt-8 w-full py-4 border border-white/30 hover:bg-white/5 transition-all rounded-2xl text-sm tracking-widest"
              >
                INVOKE THE ORACLE
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-black/60">
        <div className="max-w-5xl mx-auto px-6 text-center text-xs text-white/40">
          THE CONCLAVE • ALLSAINT ORACLE • BUILT WITH FAITH AND CODE
          <div className="mt-2">Not financial advice. Only prayers.</div>
        </div>
      </footer>
    </div>
  );
}