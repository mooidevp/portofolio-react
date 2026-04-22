import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const PricingCard3D = ({ tier, index }) => {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useTransform(y, [0, 1], [10, -10]); // Miringnya dibikin halus
  const rotateY = useTransform(x, [0, 1], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5); y.set(0.5);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{ perspective: 1200, rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative p-8 rounded-lg bg-[#0a0a0a] flex flex-col transition-colors duration-300 ${
        tier.highlight 
          ? 'border border-[#D4AF37] shadow-[0_10px_40px_rgba(212,175,55,0.15)] z-10' 
          : 'border border-[#1f1f23] hover:border-[#D4AF37]/30'
      }`}
    >
      <div style={{ transform: "translateZ(30px)" }}>
        {tier.highlight && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-black text-[9px] font-bold px-4 py-1.5 rounded-sm tracking-[0.2em] uppercase shadow-lg">
            RECOMMENDED
          </div>
        )}
        
        <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-4">TIER_0{index+1}</p>
        <h3 className="text-lg font-bold text-white uppercase tracking-widest mb-6">{tier.name}</h3>
        
        <div className="flex items-end gap-1 mb-8 pb-8 border-b border-[#1f1f23]">
          <span className={`text-4xl font-black tracking-tighter ${tier.highlight ? 'text-[#D4AF37]' : 'text-gray-300'}`}>{tier.price}</span>
          <span className="text-[10px] text-gray-500 mb-1.5 uppercase tracking-widest">/base</span>
        </div>

        <ul className="space-y-5 mb-10 flex-1">
          {tier.features.map((feature, i) => (
            <li key={i} className="flex items-start text-sm text-gray-400">
              <span className={`w-1.5 h-1.5 rounded-full mt-1.5 mr-4 shrink-0 shadow-[0_0_5px_rgba(212,175,55,0.5)] ${tier.highlight ? 'bg-[#D4AF37]' : 'bg-gray-500'}`}></span>
              {feature}
            </li>
          ))}
        </ul>

        <button className={`w-full py-3.5 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${
          tier.highlight 
            ? 'bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]' 
            : 'bg-transparent border border-[#27272a] text-gray-300 hover:border-[#D4AF37] hover:text-[#D4AF37]'
        }`}>
          AUTHORIZE
        </button>
      </div>
    </motion.div>
  )
}

export default function PricingSection() {
  const tiers = [
    { name: 'EXECUTIVE_CORE', price: '$999', features: ['Single Page App', 'Responsive Framework', 'Performance Audit'], highlight: false },
    { name: 'PRIME_ARCH', price: '$2,499', features: ['Multi-page Application', 'Data Integration', 'Dynamic Data Visualization', 'SEO Optimization'], highlight: true },
    { name: 'IMPERIAL_SYS', price: '$4,999', features: ['Enterprise Infrastructure', 'AI/ML Module Integration', 'Real-time Data Processing', '24/7 Priority Support'], highlight: false }
  ]

  return (
    <section id="pricing" className="py-20">
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-bold tracking-widest uppercase text-white mb-3">SERVICE <span className="font-serif text-[#D4AF37] italic">TIERS</span></h2>
        <p className="text-[10px] text-[#D4AF37]/70 uppercase tracking-[0.2em]">CHOOSE YOUR ARCHITECTURAL SCALE</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, index) => <PricingCard3D key={tier.name} tier={tier} index={index} />)}
      </div>
    </section>
  )
}