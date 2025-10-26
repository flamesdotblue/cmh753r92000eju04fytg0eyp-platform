const mockLeaders = [
  { name: 'Ava', xp: 820, bags: 26, city: 'Seattle' },
  { name: 'Liam', xp: 690, bags: 21, city: 'Austin' },
  { name: 'Noah', xp: 560, bags: 18, city: 'Toronto' },
  { name: 'Mia', xp: 510, bags: 16, city: 'Berlin' },
  { name: 'Zoe', xp: 470, bags: 15, city: 'Lisbon' },
];

function Row({ i, u }) {
  return (
    <div className="grid grid-cols-6 items-center gap-4 px-4 py-3 rounded-xl border border-white/10 bg-neutral-900/60">
      <div className="col-span-2 flex items-center gap-3">
        <div className="w-8 text-center text-white/60">#{i + 1}</div>
        <div className="h-8 w-8 rounded-full bg-emerald-400/20 border border-emerald-300/30 flex items-center justify-center text-emerald-300 font-semibold">
          {u.name.charAt(0)}
        </div>
        <div className="font-medium">{u.name}</div>
      </div>
      <div className="col-span-2 text-white/70">{u.city}</div>
      <div className="text-emerald-300 font-semibold">{u.xp} XP</div>
      <div className="text-white/70">{u.bags} bags</div>
    </div>
  );
}

export default function Leaderboard() {
  return (
    <section id="leaderboard" className="relative py-20 md:py-24">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Community leaderboard</h2>
            <p className="mt-3 text-white/70">Celebrate heroes keeping neighborhoods clean. Ready to join them?</p>
          </div>
          <a href="#challenges" className="inline-flex items-center justify-center rounded-full bg-emerald-500 text-neutral-900 px-5 py-2.5 text-sm font-semibold hover:bg-emerald-400 transition-colors h-10">
            Start cleaning
          </a>
        </div>
        <div className="mt-8 space-y-3">
          {mockLeaders.map((u, i) => (
            <Row key={u.name} i={i} u={u} />
          ))}
        </div>
      </div>
    </section>
  );
}
