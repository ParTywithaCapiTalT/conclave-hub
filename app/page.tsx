'use client';

import SaintTicker from '../components/SaintTicker';
import StakingTerminal from '../components/StakingTerminal';
import SubmitProposal from '../components/SubmitProposal';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a1f] text-white overflow-x-hidden">
      {/* Hero Section - The Temple */}
      <section className="relative min-h-[100vh] flex items-center justify-center border-b border-cyan-900/50">
        <div className="absolute inset-0 bg-[radial-gradient(#22d3ee_0.8px,transparent_1px)] [background-size:50px_50px] opacity-10"></div>
        
        <div className="max-w-6xl mx-auto px-6 text-center z-10 pt-12">
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            ALLSAINT
          </h1>
          <p className="text-2xl md:text-3xl text-cyan-300 mb-12">$SAINT • The Conclave's Currency</p>

          <SaintTicker />

          <div className="mt-16">
            <p className="text-cyan-100/90 max-w-md mx-auto text-lg">
              Welcome to the Conclave.<br />
              Stake for Ascension.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        {/* Staking Terminal */}
        <StakingTerminal />

        {/* Governance Arena */}
        <div className="space-y-8">
          <h2 className="text-4xl text-[#eab308] mb-6">Governance Arena</h2>
          <SubmitProposal />
        </div>
      </div>

      <footer className="py-12 text-center text-cyan-400/50 text-sm border-t border-cyan-900/50">
        THE CONCLAVE • Sovereign Domain of AllSaint Oracle • Staking for Ascension
      </footer>
    </main>
  );
}
