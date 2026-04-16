import React from 'react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section id="overview" className="min-h-screen flex items-center relative gap-8">
      <div className="flex-1 space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 border border-primary/20 bg-primary/5 px-3 py-1 rounded-full text-xs text-primary mb-4"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="uppercase tracking-wider font-mono">UPLINK ESTABLISHED | V 1.0 SECURED</span>
        </motion.div>

        <motion.h1 
          className="text-6xl font-black text-white leading-tight uppercase font-mono tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          CRAFTING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00aaff] italic pr-2">DIGITAL</span> <br />
          FUTURES
        </motion.h1>

        <motion.p 
          className="text-gray-400 max-w-md text-sm leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Building resilient architectures and immersive interfaces. Specializing in high-performance web ecosystems for the next generation.
        </motion.p>

        <motion.div 
          className="flex space-x-4 pt-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button className="px-6 py-3 bg-primary text-black font-bold uppercase tracking-widest text-xs rounded shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:scale-105 transition-transform">
            INITIALIZE_PROJECT -&gt;
          </button>
          <button className="px-6 py-3 border border-gray-600 text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-gray-800 transition-colors">
            VIEW_DATA
          </button>
        </motion.div>
      </div>

      <motion.div 
        className="flex-1 right-0 relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="w-[500px] h-[500px] rounded-2xl overflow-hidden border border-gray-800 relative bg-card/50 backdrop-blur">
          {/* Decorative geometric pattern */}
          <div className="absolute inset-0 bg-[url('https://placehold.co/600x600/101014/1f1f23?text=WAVE_FORM')] bg-cover opacity-60 mix-blend-screen" />
          <img 
            src="https://placehold.co/600x600/0a0a0f/00F0FF?text=GENERATIVE_ART" 
            alt="Hero visualization" 
            className="w-full h-full object-cover opacity-80 mix-blend-lighten"
          />
        </div>
      </motion.div>
    </section>
  )
}
