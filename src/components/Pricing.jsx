import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'For experiments and prototypes',
    features: ['1k API calls / mo', 'Basic analytics', 'Community support'],
    cta: 'Start for free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'For growing products',
    features: ['100k API calls / mo', 'Advanced analytics', 'Priority support', 'SLA 99.9%'],
    cta: 'Buy Pro',
    highlighted: true,
  },
  {
    name: 'Scale',
    price: 'Contact',
    description: 'For large scale and enterprises',
    features: ['Unlimited usage', 'Custom SSO', 'Dedicated manager', 'Custom SLAs'],
    cta: 'Talk to sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-300">Start free. Scale when you need.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((tier, idx) => (
            <motion.div key={tier.name} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: idx * 0.05}} className={`rounded-2xl border p-6 bg-slate-900/40 ${tier.highlighted ? 'border-blue-500/40 shadow-[0_0_60px_-12px_rgba(59,130,246,0.5)]' : 'border-white/10'}`}>
              <div className="flex items-baseline gap-2">
                <h3 className="text-white text-xl font-medium">{tier.name}</h3>
                <span className="text-slate-400">{tier.description}</span>
              </div>
              <div className="mt-4 text-4xl font-semibold text-white">{tier.price}<span className="text-lg font-normal text-slate-400">{tier.price !== 'Contact' && '/mo'}</span></div>
              <ul className="mt-6 space-y-2 text-slate-300 text-sm">
                {tier.features.map(f => (<li key={f} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-400 inline-block" /> {f}</li>))}
              </ul>
              <button className={`mt-6 w-full px-4 py-2 rounded-xl font-medium ${tier.highlighted ? 'bg-white text-slate-900' : 'bg-slate-800/60 text-white border border-white/10'} hover:-translate-y-0.5 transition`}>{tier.cta}</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
