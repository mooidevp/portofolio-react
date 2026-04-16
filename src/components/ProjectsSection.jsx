import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { motion } from 'framer-motion'

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
    <section id="projects" className="py-20">
      <div className="flex justify-between items-end mb-12 border-b border-[#1f1f23] pb-4">
        <h2 className="text-3xl font-bold font-mono tracking-tighter uppercase uppercase text-white">
          DEPLOYED_OPERATIONS
        </h2>
        <span className="text-xs tracking-widest uppercase text-gray-500 cursor-pointer hover:text-primary transition-colors">
          SCROLL TO NAVIGATE -&gt;
        </span>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-[#1f1f23] bg-card">
              <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur border border-green-500/30 px-3 py-1 rounded text-[10px] text-green-400 font-mono tracking-widest uppercase align-middle max-w-fit">
                {project.status || 'ONLINE'}
              </div>
              <img 
                src={project.image_url || `https://placehold.co/600x400/101014/00F0FF?text=${project.title}`} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <h3 className="text-lg font-bold text-white font-mono uppercase tracking-tight">{project.title}</h3>
            <p className="text-sm text-gray-400 mt-2">{project.description}</p>
          </motion.div>
        ))}

        {projects.length === 0 && (
          <div className="col-span-2 py-10 text-center text-gray-500 font-mono border border-dashed border-[#1f1f23] rounded-xl">
             [ NO DATA_FOUND ]
          </div>
        )}
      </div>
    </section>
  )
}
