// app/page.tsx
'use client';

import React, { useState, useEffect } from 'react';

export default function AllSaintOracle() {
  const [price, setPrice] = useState(1.4226);
  const [change] = useState(-0.15);
  const [ascendants, setAscendants] = useState(1247);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPrice = parseFloat((price + (Math.random() - 0.5) * 0.005).toFixed(4));
      setPrice(Math.max(1.35, newPrice));
      
      if (Math.random() > 0.75) {
        setAscendants(prev => prev + Math.floor(Math.random() * 3) + 1);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [price]);

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      {/* Header */}
      <header className="border-b border-black/10 py-6">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-xs tracking-widest">THE CONCLAVE</div>
              <div className="text-2xl font-bold tracking-tighter">ALLSAINT ORACLE</div>
            </div>
            
            <div className="flex items-center gap-8 text-sm">
              <a href="#" className="text-blue-600 underline">ORACLES</a>
              <a href="#" className="hover:underline">ASCENDANTS</a>
              <a href="#" className="hover:underline">LITANY</a>
              <a href="#" className="hover:underline">VAULT</a>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-xs px-4 py-2 border border-black/80 rounded flex items-center gap-2">
                LIVE ON BASE
              </div>
              <button className="px-6 py-2 border border-black bg-black text-white text-sm hover:bg-white hover:text-black transition">
                CONNECT WALLET
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-16 pb-24">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-sm mb-6">
            <span className="text-black">●</span>
            ORACLE OF THE CONCLAVE
          </div>
        </div>

        {/* Hero */}
        <div className="mb-16">
          <h1 className="text-8xl font-bold tracking-tighter">ALLSAINT</h1>
          <div className="text-4xl text-black/70 mt-2">$SAINT</div>
        </div>

        <div className="max-w-lg">
          <p className="text-lg leading-relaxed text-black/80 mb-12">
            The sacred oracle bridging the conclave of saints with on-chain truth.
          </p>

          {/* Live Data */}
          <div className="space-y-10">
            <div>
              <div className="text-xs tracking-widest mb-1">LIVE</div>
              <div className="text-5xl font-semibold tabular-nums">
                ${price.toFixed(4)}
              </div>
              <div className="flex items-center gap-2 text-red-600 mt-1">
                ↓ {Math.abs(change)}% <span className="text-black/50">24H</span>
              </div>
            </div>

            <div>
              <div className="text-xs tracking-widest mb-1">ASCENDANTS</div>
              <div className="text-6xl font-semibold tabular-nums tracking-tighter">
                {ascendants.toLocaleString()}
              </div>
              <div className="text-sm text-black/60">INVOKED THIS CYCLE</div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-black/10 py-8 text-center text-xs text-black/50">
        THE CONCLAVE • ALLSAINT ORACLE
      </footer>
    </div>
  );
}