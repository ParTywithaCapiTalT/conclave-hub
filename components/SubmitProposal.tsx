export default function SubmitProposal() {
  return (
    <section className="rounded-2xl border border-zinc-700 p-6">
      <h2 className="mb-4 text-xl font-bold text-white">
        Submit Proposal
      </h2>

      <textarea
        placeholder="Transmit proposal to the Conclave..."
        className="min-h-[140px] w-full rounded-xl border border-zinc-700 bg-black p-4 text-white outline-none"
      />

      <button className="mt-4 rounded-xl border border-orange-500 px-4 py-2 text-orange-400 transition hover:bg-orange-500 hover:text-black">
        Broadcast
      </button>
    </section>
  )
}