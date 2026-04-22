import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Hexagon, Database, Server, Layers, Cloud } from 'lucide-react'

// Komponen Card Ikon 3D
const TechCard3D = ({ tech, index }) => {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  // Seberapa miring kotaknya pas kena kursor
  const rotateX = useTransform(y, [0, 1], [20, -20]); 
  const rotateY = useTransform(x, [0, 1], [-20, 20]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5); y.set(0.5); // Balik ke tengah
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{ perspective: 1000, rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative w-24 h-24 md:w-32 md:h-32 bg-[#080808] border border-[#1f1f23] flex flex-col items-center justify-center hover:border-[#D4AF37]/50 hover:bg-[#111] transition-colors duration-500 cursor-crosshair shadow-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/5 to-transparent -translate-y-full group-hover:animate-[scan_2s_ease-in-out_infinite]" style={{ transform: "translateZ(10px)" }}></div>
      <div className="text-gray-600 group-hover:text-[#D4AF37] transition-colors duration-500 mb-3" style={{ transform: "translateZ(30px)" }}>
        {tech.icon}
      </div>
      <span className="text-[8px] md:text-[9px] font-mono text-gray-600 group-hover:text-[#D4AF37] tracking-widest uppercase" style={{ transform: "translateZ(20px)" }}>
        {tech.name}
      </span>
    </motion.div>
  )
}

export default function TechSection() {
  const techs = [
    { icon: <Hexagon className="w-6 h-6 md:w-8 md:h-8" />, name: 'React_Core' },
    { icon: <Database className="w-6 h-6 md:w-8 md:h-8" />, name: 'Supabase_DB' },
    { icon: <Layers className="w-6 h-6 md:w-8 md:h-8" />, name: 'Tailwind_UI' },
    { icon: <Server className="w-6 h-6 md:w-8 md:h-8" />, name: 'Node_Runtime' },
    { icon: <Cloud className="w-6 h-6 md:w-8 md:h-8" />, name: 'Cloud_Infra' },
  ]

  return (
    <section className="py-24 flex flex-col items-center relative border-y border-[#111] bg-[#030303]">
      <div className="text-center mb-16 z-10">
        <h2 className="text-3xl font-black tracking-widest uppercase text-white mb-3">TACTICAL <span className="font-serif text-[#D4AF37] italic font-normal">ARSENAL</span></h2>
        <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em]">AUTHORIZED STACK ONLY</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6 z-10 max-w-4xl">
        {techs.map((tech, index) => (
          <TechCard3D key={index} tech={tech} index={index} />
        ))}
      </div>
    </section>
  )
}