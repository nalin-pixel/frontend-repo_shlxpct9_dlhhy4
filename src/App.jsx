import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';
import AuthModal from './components/AuthModal';

function App() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  const openAuth = (mode) => { setAuthMode(mode); setAuthOpen(true); };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_55%)]" />
      <Navbar onOpenAuth={openAuth} />
      <main className="relative">
        <Hero />
        <Pricing />
        <Blog />
        <Contact />
        <footer className="py-12 text-center text-slate-400">© {new Date().getFullYear()} Finix. All rights reserved.</footer>
      </main>
      <AuthModal open={authOpen} mode={authMode} onClose={() => setAuthOpen(false)} />
    </div>
  )
}

export default App
