import { useState } from "react";

export default function KandolaCrosseSite() {
  const [page, setPage] = useState("home");

  const Nav = () => (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-neutral-800">
      <span className="font-bold text-lg">KandolaCrosse</span>
      <div className="flex gap-6 text-sm text-neutral-300">
        <button onClick={() => setPage("home")} className="hover:text-white">Home</button>
        <button onClick={() => setPage("learn")} className="hover:text-white">Learn</button>
        <button onClick={() => setPage("gear")} className="hover:text-white">Gear</button>
        <button onClick={() => setPage("culture")} className="hover:text-white">Culture</button>
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Nav />
      {page === "home" && <Home />}
      {page === "learn" && <Learn />}
      {page === "gear" && <Gear />}
      {page === "culture" && <Culture />}
      <footer className="border-t border-neutral-800 py-8 text-center text-neutral-500 text-sm">
        © {new Date().getFullYear()} KandolaCrosse. Built for the late starters.
      </footer>
    </div>
  );
}

function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-24">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">KandolaCrosse</h1>
      <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mb-10">
        Honest lacrosse advice, kit breakdowns, and real university-level experience — built for players who are late to the game but serious about getting good.
      </p>
      <div className="flex gap-4">
        <button className="px-6 py-3 rounded-2xl bg-white text-black font-medium">Watch on TikTok</button>
        <button className="px-6 py-3 rounded-2xl border border-neutral-700">Join the Community</button>
      </div>
    </section>
  );
}

function Learn() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-6">Learn Lacrosse (Properly)</h2>
      <p className="text-neutral-300 mb-6">
        This is for people who didn’t grow up playing. No American bias, no elite shortcuts — just what actually helps when you’re starting at uni.
      </p>
      <ul className="space-y-4 text-neutral-400">
        <li>• Starting lacrosse at university: what to expect</li>
        <li>• Positions explained without jargon</li>
        <li>• What I’d do differently in my first year</li>
        <li>• Training basics that actually translate to games</li>
      </ul>
    </section>
  );
}

function Gear() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-6">Gear & Stick Reviews</h2>
      <p className="text-neutral-300 mb-6">
        Straight-up reviews. No sponsors, no waffle — just whether something is worth your money.
      </p>
      <ul className="space-y-4 text-neutral-400">
        <li>• Beginner stick recommendations (£ / ££ / £££)</li>
        <li>• Heads vs complete sticks — what actually matters</li>
        <li>• Common gear mistakes I made</li>
      </ul>
    </section>
  );
}

function Culture() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-6">UK Uni Lacrosse Culture</h2>
      <p className="text-neutral-300 mb-6">
        The stuff no one explains before you join — socials, chirps, etiquette, and the reality of uni lacrosse in the UK.
      </p>
      <ul className="space-y-4 text-neutral-400">
        <li>• What people get wrong before joining a team</li>
        <li>• Social vs performance expectations</li>
        <li>• British chirps (not American cringe)</li>
      </ul>
    </section>
  );
}
