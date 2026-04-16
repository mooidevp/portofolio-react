import React from 'react'
import { motion } from 'framer-motion'
import { Hexagon, Database, Server, Layers, Cloud } from 'lucide-react'

export default function TechSection() {
  const techs = [
    { icon: <Hexagon className="text-orange-500 w-8 h-8" />, name: 'React/Vite' },
    { icon: <Database className="text-green-500 w-8 h-8" />, name: 'Supabase' },
    { icon: <Layers className="text-blue-400 w-8 h-8" />, name: 'Tailwind' },
    { icon: <Server className="text-secondary w-8 h-8" />, name: 'Node.js' },
    { icon: <Cloud className="text-primary w-8 h-8" />, name: 'Cloud Infra' },
  ]

  return (
    <section className="py-20 flex flex-col items-center">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold font-mono tracking-tighter uppercase text-white mb-2">TECH_DNA</h2>
        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">OPTIMIZED DEVELOPMENT STACK</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="w-20 h-20 rounded-xl bg-card border border-[#1f1f23] flex items-center justify-center hover:border-gray-500 transition-colors shadow-lg"
            title={tech.name}
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
