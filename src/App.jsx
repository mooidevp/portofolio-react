import React, { useState, useEffect } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import PricingSection from './components/PricingSection'
import TechSection from './components/TechSection'
import ContactSection from './components/ContactSection'

function App() {
  const [activeItem, setActiveItem] = useState('Overview')
  const [isBooting, setIsBooting] = useState(true)
  const [bootProgress, setBootProgress] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 5
      if (currentProgress > 100) currentProgress = 100
      setBootProgress(currentProgress)
      if (currentProgress === 100) {
        clearInterval(interval)
        setTimeout(() => setIsBooting(false), 800)
      }
    }, 150)
    return () => clearInterval(interval)
  }, [])

  const [particles] = useState(() => 
    Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5
    }))
  )

  return (
    <div className="flex min-h-screen bg-[#030303] text-gray-300 font-sans cursor-none selection:bg-[#D4AF37]/30 selection:text-white relative overflow-hidden">
      
      {/* --- ANIMASI BOOT-UP --- */}
      <AnimatePresence>
        {isBooting && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] bg-[#030303] flex flex-col items-center justify-center font-mono"
          >
            <div className="w-72">
              <div className="flex justify-between text-[#D4AF37] text-[10px] tracking-widest mb-3">
                <span>SYSTEM_INITIALIZATION</span>
                <span>{bootProgress}%</span>
              </div>
              <div className="h-[2px] w-full bg-[#111] overflow-hidden relative">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-[#D4AF37] shadow-[0_0_15px_#D4AF37]"
                  animate={{ width: `${bootProgress}%` }}
                  transition={{ ease: "linear", duration: 0.2 }}
                />
              </div>
              <div className="mt-5 text-[#D4AF37]/50 text-[9px] tracking-[0.3em] uppercase space-y-1 h-12 text-center">
                {bootProgress < 30 && <p>Decrypting neural pathways...</p>}
                {bootProgress >= 30 && bootProgress < 70 && <p>Bypassing standard security protocols...</p>}
                {bootProgress >= 70 && bootProgress < 100 && <p>Establishing secure executive uplink...</p>}
                {bootProgress === 100 && <p className="text-white font-bold animate-pulse shadow-[#D4AF37]">ACCESS_GRANTED</p>}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- SPOTLIGHT & PARTICLES --- */}
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none"
        animate={{ background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(212,175,55,0.08), transparent 80%)` }}
        transition={{ type: "tween", ease: "linear", duration: 0.05 }}
      />
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen opacity-60">
        {particles.map(p => (
          <motion.div
            key={p.id}
            className="absolute bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]"
            style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
            animate={{ y: ["0%", "-100%"], x: ["0%", `${Math.random() * 20 - 10}%`], opacity: [0, Math.random() * 0.8 + 0.2, 0] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      {/* --- KURSOR SILANG --- */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[1000] mix-blend-difference hidden md:block"
        animate={{ x: mousePos.x - 24, y: mousePos.y - 24 }}
        transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.2 }}
      >
        <div className="w-full h-full relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#D4AF37]/60"></div>
          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-[#D4AF37]/60"></div>
          <motion.div 
            className="absolute inset-0 border border-[#D4AF37]/30 rounded-full"
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-[#D4AF37] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#D4AF37]"></div>
        </div>
      </motion.div>

      {/* SCROLL PROGRESS */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-white origin-left z-[500] shadow-[0_0_20px_#D4AF37]" style={{ scaleX }} />

      {/* SIDEBAR */}
      <motion.aside 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 2.5 }}
        className="w-64 border-r border-[#D4AF37]/20 bg-[#0a0a0a]/90 backdrop-blur-md text-gray-400 fixed h-screen top-0 left-0 flex flex-col items-center py-10 z-50 shadow-[5px_0_30px_rgba(0,0,0,0.8)]"
      >
        <div className="mb-12 text-center">
          <h1 className="text-xl font-bold tracking-widest text-white">NEOM<span className="text-[#D4AF37]">_</span>ARCHITECT</h1>
          <p className="text-[9px] text-[#D4AF37]/70 mt-2 uppercase tracking-[0.3em]">Executive_System</p>
        </div>

        <nav className="flex-1 w-full px-6 space-y-3">
          {['Overview', 'Intelligence', 'Projects', 'Transmission'].map((item, i) => (
            <a 
              key={i} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setActiveItem(item)}
              className={`block px-4 py-3 text-sm rounded transition-all duration-300 ${activeItem === item ? 'bg-[#151515] text-white border-l-2 border-[#D4AF37] shadow-[inset_4px_0_10px_rgba(212,175,55,0.05)]' : 'hover:bg-[#111111] hover:text-white'}`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="w-full px-6 mt-auto">
          <div className="flex items-center space-x-3 mb-6 bg-[#111111] p-3 rounded-md border border-[#D4AF37]/20">
            <div className="w-10 h-10 rounded bg-gray-800 overflow-hidden border border-[#D4AF37]/30">
              <img src="https://placehold.co/100x100/111111/D4AF37?text=JD" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[11px] text-gray-300 font-semibold tracking-wider">AVAILABILITY</p>
              <p className="text-[10px] text-[#D4AF37] flex items-center mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mr-1.5 animate-pulse shadow-[0_0_5px_#D4AF37]"></span> PRIME READY
              </p>
            </div>
          </div>
          <button className="w-full py-3 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-black font-bold text-xs uppercase tracking-widest rounded transition-all shadow-[0_4px_15px_rgba(212,175,55,0.3)] hover:shadow-[0_4px_20px_rgba(212,175,55,0.5)]">
            AUTHORIZE
          </button>
        </div>
      </motion.aside>

      {/* KONTEN UTAMA - KEMBALI NORMAL, NGGAK MIRING */}
      <main className="flex-1 ml-64 relative z-10">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none z-0"></div>
        <div className="max-w-5xl mx-auto px-8 py-12 space-y-32 relative z-10">
          <HeroSection />
          <ProjectsSection />
          <PricingSection />
          <TechSection />
          <ContactSection />
        </div>
      </main>
    </div>
  )
}

export default App