import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-400/10 to-transparent pointer-events-none" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-5xl sm:text-6xl font-semibold tracking-tight text-white">
            Payments, reimagined.
          </motion.h1>
          <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8, delay:0.1}} className="mt-4 text-lg text-slate-300">
            Elegant infrastructure for modern fintech products. Beautifully fast, secure, and developer‑first.
          </motion.p>
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8, delay:0.2}} className="mt-8 flex items-center gap-3">
            <a href="#pricing" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium shadow-lg shadow-blue-500/30 hover:-translate-y-0.5 transition">Get started</a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-slate-800/60 border border-white/10 text-white hover:bg-slate-800 transition">Talk to sales</a>
          </motion.div>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {["99.99% Uptime", "PCI DSS", "24/7 Support"].map((item) => (
              <div key={item} className="rounded-xl bg-slate-800/50 border border-white/10 p-4 text-slate-300 text-sm text-center">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[520px] lg:h-[640px] rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}
