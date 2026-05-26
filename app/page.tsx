// app/page.tsx
'use client';

import React, { useState, useEffect } from 'react';

export default function AllSaintOracle() {
  const [saintPrice, setSaintPrice] = useState(1.4226);
  const [ascendants, setAscendants] = useState(1247);
  const [change, setChange] = useState(-0.15);

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
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Top Bar */}
      <div className="border-b border-white/10 bg-black/80 backdrop-blur-md fixed w-full z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-2xl">✧</div>
            <div>
              <div className="font-bold tracking-tighter">THE CONCLAVE</div>
              <div className="text-xs text-cyan-400 -mt-1">ALLSAINT ORACLE</div>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <div className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs flex items-center gap-1.5">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
              LIVE
            </div>
          </div>
        </div>
      </div>

      <main className="pt-24 pb-20 max-w-5xl mx-auto px-6">
        <div className="text-center py-16">
          <div className="mb-6 inline-block px-5 py-2 bg-white/5 rounded-full text-sm tracking-widest border border-white/10">
            ORACLE OF THE CONCLAVE
          </div>
          
          <h1 className="text-[110px] leading-[90px] font-bold tracking-[-4px] bg-gradient-to-b from-white to-cyan-300 bg-clip-text text-transparent">
            ALLSAINT
          </h1>
          
          <div className="text-3xl text-cyan-400 mt-3">$SAINT</div>
        </div>

        {/* Price Card */}
        <div className="max-w-xl mx-auto">
          <div className="bg-[#111118] border border-white/10 rounded-3xl p-12 relative">
            <div className="absolute top-8 right-8 text-xs px-4 py-1 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center gap-2">
              ● LIVE
            </div>

            <div className="flex justify-between">
              <div>
                <div className="text-cyan-400 text-sm tracking-widest mb-2">ORACLE PRICE</div>
                <div className="text-6xl font-mono font-semibold tracking-tight">
                  ${saintPrice.toFixed(4)}
                </div>
                <div className={`text-xl mt-2 flex items-center gap-2 ${change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
                </div>
              </div>

              <div className="text-right">
                <div className="text-cyan-400 text-sm tracking-widest mb-2">ASCENDANTS</div>
                <div className="text-6xl font-mono font-bold">{ascendants}</div>
              </div>
            </div>

            <div className="mt-12 h-px bg-white/10" />

            <div className="grid grid-cols-3 gap-4 mt-8 text-center">
              <div>
                <div className="text-xs text-white/50">MARKET CAP</div>
                <div className="font-mono mt-1">$1.42M</div>
              </div>
              <div>
                <div className="text-xs text-white/50">VOLUME</div>
                <div className="font-mono mt-1">$87K</div>
              </div>
              <div>
                <div className="text-xs text-white/50">SUPPLY</div>
                <div className="font-mono mt-1">999K</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 text-white/40 text-sm">
          The Conclave is watching.<br />
          Built with faith on Base.
        </div>
      </main>
    </div>
  );
}