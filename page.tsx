export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-10 max-w-5xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight">QuoteSnap</h1>
        <p className="text-zinc-400 mt-3 text-lg">Instant Quote Calculators for Local Services</p>
        <div className="mt-2 inline-flex px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm border border-green-500/20">✓ Sprint 0 - Foundation Live</div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
          <h2 className="font-bold text-xl">🚿 Pressure Washing</h2>
          <p className="text-zinc-400 text-sm mt-2">$0 upkeep, embeddable iframe, instant pricing</p>
          <button className="mt-4 w-full py-3 rounded-xl bg-white text-black font-bold">Open Calculator →</button>
        </div>
        <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
          <h2 className="font-bold text-xl">✨ Detailing</h2>
          <p className="text-zinc-400 text-sm mt-2">Interior / Exterior / Full Detail instant quotes</p>
          <button className="mt-4 w-full py-3 rounded-xl bg-white text-black font-bold">Open Calculator →</button>
        </div>
      </div>

      <p className="text-zinc-600 text-xs mt-10 text-center">Next: Add Supabase + Calculator Logic (Sprint 1)</p>
    </main>
  );
}
