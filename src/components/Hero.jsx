import Spline from '@splinetool/react-spline';

function Nav() {
  return (
    <nav className="absolute top-0 inset-x-0 z-20">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-xl bg-emerald-400/20 border border-emerald-300/30 flex items-center justify-center">
            <span className="text-emerald-300 font-bold">T</span>
          </div>
          <span className="text-white/90 font-semibold tracking-tight">Trashemon</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-white/70">
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#challenges" className="hover:text-white">Challenges</a>
          <a href="#leaderboard" className="hover:text-white">Leaderboard</a>
          <a href="#get-started" className="ml-2 inline-flex items-center gap-2 rounded-full bg-emerald-500 text-neutral-900 px-4 py-2 font-semibold hover:bg-emerald-400 transition-colors">Start Cleaning</a>
        </div>
      </div>
    </nav>
  );
}

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <Spline scene="https://prod.spline.design/vZX5NNlylxke-6DM/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/20 to-neutral-950/80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
        <Nav />
        <div className="absolute inset-x-0 bottom-10 md:bottom-16 z-10">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Catch litter like creatures. Level up your city.
            </h1>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">
              Trashemon turns real-world trash pickup into a playful quest. Track pickups, complete challenges, and rise on the leaderboard.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#challenges" className="inline-flex items-center justify-center rounded-full bg-emerald-500 text-neutral-900 px-6 py-3 font-semibold hover:bg-emerald-400 transition-colors">
                Start a Challenge
              </a>
              <a href="#how" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:border-white/40 transition-colors">
                How it works
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
