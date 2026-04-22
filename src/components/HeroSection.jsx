import React from 'react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section id="overview" className="min-h-screen flex items-center relative gap-8">
      <div className="flex-1 space-y-7 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center space-x-3 border border-[#D4AF37]/20 bg-[#111] px-4 py-1.5 rounded-sm text-xs text-[#D4AF37] mb-2"
        >
          <span className="w-1.5 h-1.5 bg-[#D4AF37] animate-pulse" />
          <span className="uppercase tracking-[0.3em] font-mono text-[9px] text-gray-300">
            <span className="text-[#D4AF37] font-bold">SECURE_UPLINK</span> | ZERO-TRUST ARCHITECTURE
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          ENGINEERING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#8B6508] font-serif italic pr-4">SECURE</span> <br />
          ECOSYSTEMS.
        </motion.h1>

        <motion.p 
          className="text-gray-400 max-w-lg text-sm md:text-base leading-relaxed tracking-wide font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Deploying resilient infrastructures and fortified interfaces. We architect high-performance, impenetrable web systems for exclusive operations.
        </motion.p>

        <motion.div 
          className="flex flex-wrap gap-4 pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button className="px-8 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs rounded-sm hover:bg-white hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300">
            DEPLOY_ARCHITECTURE
          </button>
          <button className="px-8 py-4 border border-[#333] text-gray-300 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs rounded-sm hover:border-[#D4AF37] hover:text-[#D4AF37] bg-[#0a0a0a] transition-all duration-300">
            ACCESS_DOSSIER
          </button>
        </motion.div>
      </div>

      <motion.div 
        className="flex-1 right-0 relative hidden lg:block"
        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="w-[480px] h-[580px] ml-auto rounded-sm overflow-hidden border border-[#D4AF37]/10 relative bg-[#050505]">
          {/* Grid background ala terminal / radar map */}
          <div className="absolute inset-0 bg-[url('https://placehold.co/600x800/050505/111?text=+')] bg-[length:30px_30px] opacity-40" />
          <img 
            src="https://placehold.co/600x800/0a0a0a/D4AF37?text=SYSTEM_TOPOLOGY" 
            alt="Hero visualization" 
            className="w-full h-full object-cover opacity-50 mix-blend-screen grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50"></div>
          
          {/* Aksen pinggiran ala UI Sci-fi militer */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]/50 m-4"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]/50 m-4"></div>
        </div>
      </motion.div>
    </section>
  )
}