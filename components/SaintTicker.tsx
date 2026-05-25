'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SaintTicker() {
  const [price, setPrice] = useState(1.4247);
  const [members, setMembers] = useState(1247);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrice(p => Math.max(1.35, Math.min(1.52, Number((p + (Math.random() - 0.5) * 0.012).toFixed(4)))));
    }, 4200);

    const memberInterval = setInterval(() => {
      setMembers(m => m + Math.floor(Math.random() * 3));
    }, 8700);

    return () => {
      clearInterval(interval);
      clearInterval(memberInterval);
    };
  }, []);

  const priceChange = ((price - 1.4247) / 1.4247 * 100).toFixed(2);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-wrap gap-8 justify-center md:justify-start text-sm font-mono border border-[#22d3ee]/20 bg-[#0a0a1f]/70 backdrop-blur-md p-6 rounded-2xl"
    >
      <div>
        <div className="text-cyan-400 text-xs tracking-widest">$SAINT PRICE</div>
        <div className="text-3xl text-white tabular-nums">${price}</div>
        <div className={`${priceChange.startsWith('-') ? 'text-red-400' : 'text-emerald-400'} text-xs`}>{priceChange}% • LIVE</div>
      </div>

      <div>
        <div className="text-cyan-400 text-xs tracking-widest">ASCENDANTS</div>
        <div className="text-3xl text-white tabular-nums">{members.toLocaleString()}</div>
      </div>
    </motion.div>
  );
}