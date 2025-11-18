import { useState } from 'react';
import { Menu, X, LogIn, UserPlus } from 'lucide-react';

export default function Navbar({ onOpenAuth }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-slate-900/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
            <span className="text-white font-semibold tracking-tight">Finix</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200">
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#blog" className="hover:text-white transition">Blog</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <button onClick={() => onOpenAuth('login')} className="px-3 py-2 text-slate-200 hover:text-white inline-flex items-center gap-2"><LogIn size={16}/> Log in</button>
            <button onClick={() => onOpenAuth('signup')} className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-100 inline-flex items-center gap-2"><UserPlus size={16}/> Sign up</button>
          </div>
          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-2 text-slate-200">
              <a href="#pricing" className="hover:text-white transition">Pricing</a>
              <a href="#blog" className="hover:text-white transition">Blog</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
              <div className="pt-2 flex gap-2">
                <button onClick={() => onOpenAuth('login')} className="flex-1 px-3 py-2 rounded-lg bg-slate-800 text-white">Log in</button>
                <button onClick={() => onOpenAuth('signup')} className="flex-1 px-3 py-2 rounded-lg bg-white text-slate-900">Sign up</button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
