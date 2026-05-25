import { useMemo } from 'react';

export const useStakingSimulation = (amount: number, days: number) => {
  const apy = 0.05 + ((days / 30) * 0.01);

  const estimatedReward = useMemo(() => {
    if (amount <= 0 || days <= 0) return 0;
    return (amount * apy * (days / 365)).toFixed(4);
  }, [amount, days, apy]);

  const totalReturn = (amount + parseFloat(estimatedReward as string)).toFixed(4);

  return {
    estimatedReward: parseFloat(estimatedReward as string),
    totalReturn: parseFloat(totalReturn),
    apy: (apy * 100).toFixed(2) + '%',
  };
};