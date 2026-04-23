import React, { useState, useEffect } from 'react'
import { motion, useScroll, useSpring, useMotionValue, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import PricingSection from './components/PricingSection'
import TechSection from './components/TechSection'
import ContactSection from './components/ContactSection'

function App() {
  const [activeItem, setActiveItem] = useState('Overview')
  const [isBooting, setIsBooting] = useState(true)
  const [bootProgress, setBootProgress] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Tracking Mouse (Real-time untuk panah biar akurat ngekliknya)
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  
  // Tracking Aura (Pakai efek spring biar ada jejak cahaya yang empuk)
  const springConfig = { damping: 20, stiffness: 400, mass: 0.3 }
  const auraX = useSpring(mouseX, springConfig)
  const auraY = useSpring(mouseY, springConfig)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 15) + 5
      if (progress >= 100) {
        progress = 100
        clearInterval(interval)
        setTimeout(() => setIsBooting(false), 800)
      }
      setBootProgress(progress)
    }, 150)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-[#030303] text-gray-300 font-sans min-h-screen selection:bg-[#D4AF37]/30 relative overflow-x-hidden md:cursor-none">
      
      {/* --- LAYAR LOADING --- */}
      <AnimatePresence>
        {isBooting && (
          <motion.div 
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            className="fixed inset-0 z-[10000] bg-[#030303] flex flex-col items-center justify-center font-mono"
          >
            <div className="w-64">
              <div className="flex justify-between text-[#D4AF37] text-[10px] tracking-widest mb-2 uppercase">
                <span>Initializing_System</span>
                <span>{bootProgress}%</span>
              </div>
              <div className="h-[1px] w-full bg-[#111] relative">
                <motion.div className="absolute inset-y-0 left-0 bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]" style={{ width: `${bootProgress}%` }} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- KURSOR MINIMALIS KEREN --- */}
      
      {/* 1. Aura Cahaya (Ngikutin dari belakang) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-[#D4AF37]/30 rounded-full pointer-events-none z-[9998] hidden md:block blur-[6px] mix-blend-screen"
        animate={{ scale: isHovered ? 1.8 : 1 }}
        style={{ x: auraX, y: auraY, translateX: "-50%", translateY: "-50%" }}
      />

      {/* 2. Panah Utama (Akurat tanpa delay) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block drop-shadow-[0_2px_10px_rgba(212,175,55,0.8)]"
        // Translate di set ke ujung panah (2px, 2px) biar kliknya akurat 100%
        style={{ x: mouseX, y: mouseY, translateX: "-2px", translateY: "-2px" }}
        animate={{
          rotate: isHovered ? -20 : 0, // Miring ala animasi mahal pas ngehover
          scale: isHovered ? 0.9 : 1
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Bentuk panah tajam minimalis */}
          <path d="M 2 2 L 18 8 L 11 11 L 8 18 Z" fill="#D4AF37" stroke="#ffffff" strokeWidth="1" strokeLinejoin="round"/>
        </svg>
      </motion.div>

      {/* --- SPOTLIGHT BACKGROUND --- */}
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none opacity-40"
        animate={{ background: `radial-gradient(600px circle at ${mouseX.get()}px ${mouseY.get()}px, rgba(212,175,55,0.06), transparent 70%)` }}
      />

      {/* --- SCROLL PROGRESS LINE --- */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-[#D4AF37] z-[500] origin-left shadow-[0_0_10px_#D4AF37]" style={{ scaleX }} />

      {/* --- NAVBAR MOBILE --- */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-[60] p-6 flex justify-between items-center bg-[#050505]/80 backdrop-blur-md border-b border-[#D4AF37]/10">
        <span className="font-bold text-white tracking-widest">NEOM<span className="text-[#D4AF37]">_</span></span>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#D4AF37]">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* --- SIDEBAR DESKTOP --- */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#050505] border-r border-[#D4AF37]/10 transform transition-transform duration-300 md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-10 flex flex-col h-full">
          <div className="mb-12">
            <h1 className="text-xl font-bold text-white tracking-tighter">NEOM<span className="text-[#D4AF37]">_</span>ARCHITECT</h1>
            <p className="text-[9px] text-[#D4AF37]/60 tracking-[0.3em] uppercase mt-1">Prime_Access</p>
          </div>
          
          <nav className="flex-1 space-y-2">
            {['Overview', 'Intelligence', 'Projects', 'Transmission'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`block px-4 py-3 text-xs uppercase tracking-widest transition-all ${activeItem === item ? 'text-white border-l-2 border-[#D4AF37] bg-[#111]' : 'text-gray-500 hover:text-[#D4AF37]'}`}
              >
                {item}
              </a>
            ))}
          </nav>
          
          <div className="mt-auto pt-6 border-t border-[#111]">
            <button 
              onMouseEnter={() => setIsHovered(true)} 
              onMouseLeave={() => setIsHovered(false)}
              className="w-full py-3 bg-[#D4AF37] text-black font-bold text-[10px] uppercase tracking-widest rounded hover:bg-white transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            >
              AUTHORIZE
            </button>
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="md:ml-64 relative z-10">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-24 space-y-32">
          {/* Bungkus semua section agar kursor mendeteksi hover */}
          <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <HeroSection />
            <ProjectsSection />
            <PricingSection />
            <TechSection />
            <ContactSection />
          </div>
        </div>
      </main>

    </div>
  )
}

export default App