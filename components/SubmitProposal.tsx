'use client';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import { motion } from 'framer-motion';

export default function SubmitProposal() {
  const { isConnected } = useAccount();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;
    alert("🜂 Proposal submitted to the Conclave (Mock).");
    setTitle('');
    setDescription('');
  };

  if (!isConnected) {
    return <p className="text-amber-400 italic">Connect wallet to submit proposals.</p>;
  }

  return (
    <motion.form onSubmit={handleSubmit} className="glass p-8 rounded-3xl">
      <h3 className="title-font text-[#eab308] text-2xl mb-6">Submit Initiative</h3>
      
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Proposal Title"
        className="w-full bg-black/50 border border-[#22d3ee]/50 rounded-xl p-4 mb-4"
        required
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Describe your proposal..."
        rows={5}
        className="w-full bg-black/50 border border-[#22d3ee]/50 rounded-xl p-4 mb-6"
        required
      />

      <button 
        type="submit"
        className="w-full py-4 bg-[#eab308] text-black font-bold rounded-2xl"
      >
        SUBMIT TO CONCLAVE
      </button>
    </motion.form>
  );
}