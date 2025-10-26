import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ChallengeBoard from './components/ChallengeBoard';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-inter">
      <Hero />
      <main className="relative z-10">
        <HowItWorks />
        <ChallengeBoard />
        <Leaderboard />
      </main>
      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        Built with care for cleaner streets. © {new Date().getFullYear()} Trashemon
      </footer>
    </div>
  );
}

export default App;
