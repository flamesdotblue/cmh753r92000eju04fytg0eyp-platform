import { Map, Trophy, Camera, Leaf } from 'lucide-react';

const steps = [
  {
    title: 'Pick a mission',
    desc: 'Choose a daily or weekly challenge: solo or with friends.',
    icon: Map,
  },
  {
    title: 'Scan & bag',
    desc: 'Snap a photo before/after, log bags and items collected.',
    icon: Camera,
  },
  {
    title: 'Earn XP & badges',
    desc: 'Complete streaks to unlock cute bot badges and level up.',
    icon: Trophy,
  },
  {
    title: 'Grow green impact',
    desc: 'See your CO₂ offset and community impact climb.',
    icon: Leaf,
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-20 md:py-28">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">How Trashemon works</h2>
          <p className="mt-3 text-white/70">Turn cleanup into a game. Simple steps, big wins for your block.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-emerald-400/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-400/20 border border-emerald-300/30 p-2">
                  <Icon className="text-emerald-300" size={22} />
                </div>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
