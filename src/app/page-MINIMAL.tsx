"use client";
import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black tracking-tighter">QuoteSnap Suite</h1>
        <p className="mt-2 text-zinc-500">Sprint 1 - Building... Test Build {count}</p>
        <button onClick={() => setCount(count+1)} className="mt-6 rounded-full bg-black px-6 py-3 text-white">Test Click {count}</button>
        <p className="mt-8 text-sm text-zinc-400">If you see this, build works. Next step: full app.</p>
      </div>
    </main>
  );
}
