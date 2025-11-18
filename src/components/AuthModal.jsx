import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function AuthModal({ open, mode = 'login', onClose }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const endpoint = mode === 'signup' ? '/auth/signup' : '/auth/login';
      const body = mode === 'signup' ? { name: form.name, email: form.email, password: form.password } : { email: form.email, password: form.password };
      const res = await fetch(`${API}${endpoint}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      const data = await res.json();
      if (data.ok) {
        setStatus('success');
        setTimeout(onClose, 800);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-[60] bg-black/60 flex items-center justify-center p-4">
          <motion.div initial={{scale:0.96, opacity:0}} animate={{scale:1, opacity:1}} exit={{scale:0.96, opacity:0}} transition={{type:'spring', duration:0.5}} className="w-full max-w-md rounded-2xl bg-slate-900 border border-white/10 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-white text-xl font-semibold">{mode === 'signup' ? 'Create account' : 'Welcome back'}</h3>
              <button onClick={onClose} className="text-slate-400 hover:text-white">✕</button>
            </div>
            <form onSubmit={submit} className="mt-6 space-y-3">
              {mode === 'signup' && (
                <input value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} placeholder="Name" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-white outline-none focus:border-blue-400" required />
              )}
              <input type="email" value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-white outline-none focus:border-blue-400" required />
              <input type="password" value={form.password} onChange={(e)=>setForm({...form, password: e.target.value})} placeholder="Password" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-white outline-none focus:border-blue-400" required />
              <button type="submit" className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 font-medium">
                {mode === 'signup' ? 'Create account' : 'Log in'}
              </button>
              {status === 'loading' && <div className="text-slate-300 text-center">Processing…</div>}
              {status === 'success' && <div className="text-green-300 text-center">Success!</div>}
              {status === 'error' && <div className="text-red-300 text-center">Something went wrong.</div>}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
