export default function StakingTerminal() {
  return (
    <section className="rounded-2xl border border-orange-500 p-6 backdrop-blur-md">
      <h2 className="mb-4 text-2xl font-bold text-orange-400">
        Staking Terminal
      </h2>

      <div className="space-y-2 text-sm text-zinc-300">
        <p>Vault Status: ACTIVE</p>
        <p>Node Yield: 13.37%</p>
        <p>Conclave Sync: ONLINE</p>
      </div>

      <button className="mt-6 rounded-xl bg-orange-500 px-5 py-2 font-semibold text-black transition hover:scale-105">
        Enter Vault
      </button>
    </section>
  )
}