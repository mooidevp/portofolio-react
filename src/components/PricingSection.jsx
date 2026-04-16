import React from 'react'
import { motion } from 'framer-motion'

export default function PricingSection() {
  const tiers = [
    {
      name: 'BASIC_CORE',
      price: '$599',
      features: ['Single Page App', 'Responsive Framework', 'Performance Audit'],
      highlight: false
    },
    {
      name: 'STANDARD_ARCH',
      price: '$1,299',
      features: ['Multi-page Application', 'Data Integration', 'Dynamic Data Visualization', 'SEO Optimization'],
      highlight: true
    },
    {
      name: 'PRO_SYSTEMS',
      price: '$2,499',
      features: ['Enterprise Infrastructure', 'AI/ML Module Integration', 'Real-time Data Processing', '24/7 Priority Support'],
      highlight: false
    }
  ]

  return (
    <section id="pricing" className="py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-bold font-mono tracking-tighter uppercase text-white mb-2">SERVICE_TIERS</h2>
        <p className="text-xs text-gray-500 uppercase tracking-widest font-mono">CHOOSE YOUR ARCHITECTURAL SCALE</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative p-8 rounded-xl bg-card border flex flex-col ${tier.highlight ? 'border-secondary shadow-[0_0_30px_rgba(229,92,255,0.15)] transform scale-105 z-10' : 'border-[#1f1f23]'}`}
          >
            {tier.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-sm tracking-widest uppercase">
                RECOMMENDED
              </div>
            )}
            
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-4 font-mono">TIER_0{index+1}</p>
            <h3 className="text-xl font-bold text-white font-mono uppercase tracking-tighter mb-4">{tier.name}</h3>
            
            <div className="flex items-end gap-1 mb-8">
              <span className={`text-4xl font-black ${tier.highlight ? 'text-secondary' : 'text-primary'}`}>{tier.price}</span>
              <span className="text-xs text-gray-500 mb-1">/base</span>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-start text-sm text-gray-400">
                  <span className={`w-1.5 h-1.5 rounded-full mt-1.5 mr-3 shrink-0 ${tier.highlight ? 'bg-secondary' : 'bg-primary'}`}></span>
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-3 rounded text-xs font-bold uppercase tracking-widest transition-all ${tier.highlight ? 'bg-secondary text-white hover:bg-[#ff75ff] shadow-[0_0_15px_rgba(229,92,255,0.4)]' : 'bg-transparent border border-[#27272a] text-white hover:border-gray-500 hover:bg-[#1a1a1f]'}`}>
              INITIALIZE
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
