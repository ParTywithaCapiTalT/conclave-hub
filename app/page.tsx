'use client';

import SaintTicker from '../components/SaintTicker';
import StakingTerminal from '../components/StakingTerminal';
import SubmitProposal from '../components/SubmitProposal';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a1f] text-white overflow-x-hidden">
      <section className="relative min-h-[100vh] flex items-center justify-center border-b border-cyan-900/50">
        <div className="max-w-6xl mx-auto px-6 text-center pt-12">
          <h1 className="title-font text-7xl md:text-8xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            ALLSAINT
          </h1>
          <p className="text-2xl text-cyan-300 mb-12">$SAINT • Oracle of the Conclave</p>
          
          <SaintTicker />
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <StakingTerminal />
        <div>
          <h2 className="title-font text-4xl text-[#eab308] mb-6">Governance Arena</h2>
          <SubmitProposal />
        </div>
      </div>
    </main>
  );
}