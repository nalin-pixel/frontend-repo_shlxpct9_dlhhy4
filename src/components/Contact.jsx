import { useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`${API}/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await res.json();
      if (data.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Get in touch</h2>
          <p className="mt-3 text-slate-300">We'd love to hear about your project.</p>
        </div>
        <form onSubmit={submit} className="mt-10 grid md:grid-cols-2 gap-6">
          <input value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} placeholder="Your name" className="px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white outline-none focus:border-blue-400" required />
          <input value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} placeholder="Email" type="email" className="px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white outline-none focus:border-blue-400" required />
          <input value={form.subject} onChange={(e)=>setForm({...form, subject: e.target.value})} placeholder="Subject" className="md:col-span-2 px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white outline-none focus:border-blue-400" />
          <textarea value={form.message} onChange={(e)=>setForm({...form, message: e.target.value})} placeholder="Message" rows={6} className="md:col-span-2 px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white outline-none focus:border-blue-400" required />
          <div className="md:col-span-2 flex items-center gap-4">
            <button type="submit" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium hover:-translate-y-0.5 transition">Send message</button>
            {status === 'loading' && <span className="text-slate-300">Sending…</span>}
            {status === 'sent' && <span className="text-green-300">Message sent!</span>}
            {status === 'error' && <span className="text-red-300">Something went wrong.</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
