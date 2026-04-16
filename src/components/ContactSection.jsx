import React, { useState } from 'react'
import { supabase } from '../lib/supabase'
import { motion } from 'framer-motion'
import { Send, Terminal } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', project_overview: '' })
  const [status, setStatus] = useState('idle') // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.project_overview) return

    setStatus('loading')
    const { error } = await supabase
      .from('messages')
      .insert([formData])

    if (error) {
      console.error(error)
      setStatus('error')
    } else {
      setStatus('success')
      setFormData({ name: '', project_overview: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <section id="transmission" className="py-20 mb-20">
      <div className="bg-card border border-[#1f1f23] rounded-2xl p-10 md:p-14 flex flex-col md:flex-row gap-12 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl mix-blend-screen pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="flex-1 space-y-6 z-10">
          <h2 className="text-4xl font-black text-white font-mono uppercase tracking-tighter leading-tight">
            LET'S CONNECT <br/>
            <span className="text-secondary italic font-serif">BYPASS THE</span> <br/>
            NOISE
          </h2>
          <p className="text-gray-400 text-sm max-w-sm">
            Whether you're looking for a full systems architecture or a quick module patch, the uplink is open.
          </p>
          
          <div className="space-y-4 pt-6">
            <div className="flex items-center text-sm text-gray-300 font-mono">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <div className="w-3 h-3 border-2 border-primary rounded-sm rotate-45"></div>
              </div>
              uplink@neomarchitect.io
            </div>
            <div className="flex items-center text-sm text-gray-300 font-mono">
              <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center mr-4">
                <Terminal className="w-4 h-4 text-secondary" />
              </div>
              Encrypted Terminal [Node-04]
            </div>
          </div>
        </div>

        <div className="flex-1 z-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">USER_IDENTIFICATION</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                placeholder="Your Name" 
                required
                className="w-full bg-[#13131a] border border-[#27272a] rounded p-3 text-sm text-white focus:outline-none focus:border-secondary transition-colors"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">TRANSMISSION_PAYLOAD</label>
              <textarea 
                value={formData.project_overview}
                onChange={e => setFormData({...formData, project_overview: e.target.value})}
                placeholder="Brief project overview..." 
                rows={4}
                required
                className="w-full bg-[#13131a] border border-[#27272a] rounded p-3 text-sm text-white focus:outline-none focus:border-secondary transition-colors resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full py-3 bg-secondary text-white font-bold text-xs uppercase tracking-widest rounded hover:bg-[#ff75ff] transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(229,92,255,0.4)] disabled:opacity-50"
            >
              {status === 'loading' ? 'TRANSMITTING...' : status === 'success' ? 'RECEIVED' : 'SEND_TRANSMISSION'}
              <Send className="w-4 h-4" />
            </button>
            {status === 'error' && <p className="text-xs text-red-500 mt-2">Error sending transmission. Connection reset.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
