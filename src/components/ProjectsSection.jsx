import React, { useEffect, useState, useRef } from 'react'
import { supabase } from '../lib/supabase'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

// Komponen Card Premium dengan 3D Glare
const PremiumProjectCard = ({ project, index }) => {
  const cardRef = useRef(null)
  
  // Motion values untuk melacak mouse di dalam kartu
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring agar kembalinya kartu mulus
  const springConfig = { damping: 20, stiffness: 150 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  // Konversi posisi mouse ke derajat rotasi (Maksimal miring 10 derajat biar elegan)
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10])

  // Efek Glare (Cahaya memantul)
  const glareX = useTransform(smoothX, [-0.5, 0.5], [100, 0])
  const glareY = useTransform(smoothY, [-0.5, 0.5], [100, 0])

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    // Normalisasi posisi mouse dari -0.5 ke 0.5 di tengah kartu
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    // Kembalikan ke posisi datar pas mouse keluar
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      // Perspektif 3D pada pembungkus luar
      style={{ perspective: 1200 }}
      className="group"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative bg-[#050505] border border-[#1f1f23] rounded-xl overflow-hidden hover:border-[#D4AF37]/40 transition-colors duration-500 shadow-2xl h-full flex flex-col"
      >
        {/* --- EFEK GLARE (Kilapan Kaca) --- */}
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(212,175,55,0.15) 0%, transparent 60%)`
          }}
        />

        {/* --- GAMBAR PROYEK --- */}
        <div className="relative aspect-video overflow-hidden bg-[#0a0a0a]" style={{ transform: "translateZ(20px)" }}>
          <div className="absolute top-4 right-4 z-10 bg-[#050505]/90 backdrop-blur-md border border-[#D4AF37]/30 px-3 py-1 rounded-sm text-[9px] text-[#D4AF37] tracking-widest uppercase shadow-lg">
            {project.status || 'PRIME_DEPLOYED'}
          </div>
          <img 
            src={project.image_url || `https://placehold.co/800x600/0a0a0a/D4AF37?text=${project.title}`} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
        </div>
        
        {/* --- TEKS INFO PROYEK --- */}
        <div className="p-8 relative z-30" style={{ transform: "translateZ(30px)" }}>
          <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-3 group-hover:text-[#D4AF37] transition-colors">{project.title}</h3>
          <p className="text-sm text-gray-400 leading-relaxed font-light">{project.description}</p>
          
          <div className="mt-6 flex items-center text-[10px] text-[#D4AF37] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            ACCESS_DATABASE <span className="ml-2">→</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (!error && data) {
        setProjects(data)
      }
    }
    fetchProjects()
  }, [])

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="flex justify-between items-end mb-16 border-b border-[#111] pb-6">
        <div>
          <h2 className="text-4xl font-black tracking-tighter uppercase text-white mb-2">
            DEPLOYED <span className="font-serif text-[#D4AF37] italic font-normal">OPERATIONS</span>
          </h2>
          <p className="text-[10px] text-gray-500 tracking-[0.3em] uppercase">Classified Project Archives</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <PremiumProjectCard key={project.id} project={project} index={index} />
        ))}

        {projects.length === 0 && (
          <div className="col-span-1 lg:col-span-2 py-20 text-center flex flex-col items-center justify-center border border-dashed border-[#1f1f23] rounded-xl bg-[#050505]">
             <div className="w-12 h-12 border-t-2 border-l-2 border-[#D4AF37]/50 animate-spin mb-4 rounded-full"></div>
             <p className="text-[#D4AF37]/50 tracking-[0.3em] text-[10px] uppercase">Retrieving Data...</p>
          </div>
        )}
      </div>
    </section>
  )
}