import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 px-8 py-6 flex justify-between items-center bg-[#050505]/30 backdrop-blur-md border-b border-[#D4AF37]/10"
    >
      <div className="text-[#D4AF37] font-mono text-sm tracking-widest">SYSTEM_READY</div>
      
      <div className="flex space-x-8">
        {['WORK', 'SERVICES', 'ARCHIVE'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="group relative text-xs uppercase tracking-[0.2em] text-white">
            <span className="relative z-10">{item}</span>
            {/* Efek Garis Emas pas Hover */}
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>
    </motion.nav>
  )
}