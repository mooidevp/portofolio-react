import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function HeroSection() {
  const rotatingWords = ["PROFESIONAL", "RESPONSIF", "ELEGAN", "INOVATIF"]
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 2500) 
    return () => clearInterval(interval)
  }, [])

  return (
    // justify-start buat naruh konten di atas, pt-32 atau pt-40 buat atur seberapa tinggi naiknya
    <section id="overview" className="min-h-screen flex flex-col items-center justify-start pt-32 md:pt-44 relative">
      
      {/* text-center memastikan semua teks di dalamnya rata tengah secara horizontal */}
      <div className="max-w-4xl w-full text-center space-y-8 z-10 flex flex-col items-center">
        
        {/* Badge Atas */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center space-x-3 border border-[#D4AF37]/20 bg-[#111] px-6 py-2 rounded-full text-xs text-[#D4AF37] mb-2"
        >
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse shadow-[0_0_8px_#D4AF37]" />
          <span className="uppercase tracking-[0.3em] font-mono text-[10px] text-gray-300">
            <span className="text-[#D4AF37] font-bold">PREMIUM_SERVICE</span> | SOLUSI DIGITAL TERPERCAYA
          </span>
        </motion.div>

        {/* Judul Utama */}
        <motion.h1 
          className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          MEMBANGUN WEBSITE <br />
          
          <span className="inline-block relative h-[1.1em] w-full overflow-hidden align-bottom">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={rotatingWords[wordIndex]}
                initial={{ y: 60, opacity: 0, rotateX: -90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                exit={{ y: -60, opacity: 0, rotateX: 90 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 120, damping: 20 }}
                className="absolute left-0 right-0 mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#8B6508] font-serif italic transform-gpu"
                style={{ transformOrigin: "50% 50% -25px" }}
              >
                {rotatingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
          <br />
          UNTUK BISNIS ANDA.
        </motion.h1>

        {/* Deskripsi */}
        <motion.p 
          className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed tracking-wide font-light px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Kami menghadirkan arsitektur web berperforma tinggi dengan desain eksklusif yang dirancang khusus untuk meningkatkan kredibilitas dan konversi bisnis Anda.
        </motion.p>

        {/* Tombol Aksi */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button className="px-10 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs rounded-sm hover:bg-white hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-500">
            MULAI PROYEK ANDA
          </button>
          <button className="px-10 py-4 border border-[#333] text-gray-300 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs rounded-sm hover:border-[#D4AF37] hover:text-[#D4AF37] bg-[#0a0a0a] transition-all duration-500">
            LIHAT PORTOFOLIO
          </button>
        </motion.div>
      </div>

      {/* Aksen Dekoratif Pojok */}
      <div className="absolute top-20 left-10 w-8 h-8 border-t border-l border-[#D4AF37]/10 hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-8 h-8 border-b border-r border-[#D4AF37]/10 hidden lg:block"></div>
    </section>
  )
}