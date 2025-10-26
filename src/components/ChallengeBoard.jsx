import { useMemo, useState } from 'react';

const challenges = [
  {
    id: 'c1',
    title: 'Starter Sweep',
    difficulty: 'Easy',
    xp: 50,
    tags: ['solo', '15 min'],
    desc: 'Collect 1 bag of litter on your street. Snap before/after.',
  },
  {
    id: 'c2',
    title: 'Park Protector',
    difficulty: 'Medium',
    xp: 120,
    tags: ['duo', '30 min'],
    desc: 'Team up to clear a park bench area. Bonus for recyclables.',
  },
  {
    id: 'c3',
    title: 'River Ranger',
    difficulty: 'Hard',
    xp: 250,
    tags: ['team', '60 min'],
    desc: 'Clean a riverside path. Log 3+ bags and separate plastics.',
  },
  {
    id: 'c4',
    title: 'Block Boss Streak',
    difficulty: 'Medium',
    xp: 180,
    tags: ['solo', '3 days'],
    desc: 'Do a 3-day streak of quick block cleanups. Keep momentum!',
  },
];

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

function ChallengeCard({ challenge, onStart }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5 hover:border-emerald-300/40 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-lg">{challenge.title}</h3>
          <p className="mt-1 text-sm text-white/70">{challenge.desc}</p>
        </div>
        <div className="text-right">
          <div className="text-emerald-300 text-sm font-semibold">{challenge.xp} XP</div>
          <div className="text-xs text-white/60">{challenge.difficulty}</div>
        </div>
      </div>
      <div className="mt-4 flex items-center flex-wrap gap-2">
        {challenge.tags.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between">
        <button onClick={() => onStart(challenge)} className="inline-flex items-center justify-center rounded-full bg-emerald-500 text-neutral-900 px-4 py-2 text-sm font-semibold hover:bg-emerald-400 transition-colors">
          Start Challenge
        </button>
        <button className="text-xs text-white/60 hover:text-white">View details</button>
      </div>
    </div>
  );
}

export default function ChallengeBoard() {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(null);

  const filtered = useMemo(() => {
    if (!query) return challenges;
    return challenges.filter((c) =>
      [c.title, c.desc, c.difficulty, ...(c.tags || [])]
        .join(' ')
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <section id="challenges" className="relative py-20 md:py-24">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Choose your challenge</h2>
            <p className="mt-3 text-white/70 max-w-2xl">Complete missions to earn XP, unlock badges, and climb the Trashemon leaderboard.</p>
          </div>
          <div className="flex items-center gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search challenges..."
              className="w-64 rounded-xl bg-neutral-900/70 border border-white/10 px-3 py-2 text-sm outline-none focus:border-emerald-400/50"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((c) => (
            <ChallengeCard key={c.id} challenge={c} onStart={(ch) => setActive(ch)} />
          ))}
        </div>

        {active && (
          <div className="mt-8 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm text-emerald-300 font-semibold">Challenge armed</div>
                <h3 className="text-lg font-semibold">{active.title}</h3>
                <p className="mt-1 text-sm text-white/70 max-w-2xl">{active.desc}</p>
              </div>
              <a id="get-started" href="#leaderboard" className="inline-flex items-center justify-center rounded-full bg-emerald-500 text-neutral-900 px-4 py-2 text-sm font-semibold hover:bg-emerald-400 transition-colors h-9">
                Log progress
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
