import React, { useState } from 'react'
import { supabase } from '../lib/supabase'
import { Send, Terminal } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', project_overview: '' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.project_overview) return

    setStatus('loading')
    const { error } = await supabase.from('messages').insert([formData])

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
      <div className="bg-[#0a0a0a] border border-[#1f1f23] rounded-xl p-8 md:p-14 flex flex-col md:flex-row gap-12 relative overflow-hidden">
        {/* Decorative subtle gold glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="flex-1 space-y-8 z-10">
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-tight">
            INITIATE <br/>
            <span className="text-[#D4AF37] italic font-serif tracking-normal">CONTACT</span> <br/>
            PROTOCOL
          </h2>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
            Direct line for executive clients. Submit your architecture requirements or system integration needs.
          </p>
          
          <div className="space-y-5 pt-6 border-t border-[#1f1f23]">
            <div className="flex items-center text-sm text-gray-300 font-mono tracking-wider">
              <div className="w-8 h-8 rounded bg-[#111] border border-[#D4AF37]/20 flex items-center justify-center mr-4">
                <div className="w-2 h-2 bg-[#D4AF37] rounded-sm rotate-45 shadow-[0_0_5px_#D4AF37]"></div>
              </div>
              director@neomarchitect.io
            </div>
            <div className="flex items-center text-sm text-gray-300 font-mono tracking-wider">
              <div className="w-8 h-8 rounded bg-[#111] border border-[#D4AF37]/20 flex items-center justify-center mr-4">
                <Terminal className="w-4 h-4 text-[#D4AF37]" />
              </div>
              Encrypted Node [X-09]
            </div>
          </div>
        </div>

        <div className="flex-1 z-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] text-[#D4AF37]/80 uppercase tracking-[0.2em]">CLIENT_IDENTIFICATION</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                placeholder="Enter designation..." 
                required
                className="w-full bg-[#050505] border border-[#1f1f23] rounded-sm p-4 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] text-[#D4AF37]/80 uppercase tracking-[0.2em]">PROJECT_PAYLOAD</label>
              <textarea 
                value={formData.project_overview}
                onChange={e => setFormData({...formData, project_overview: e.target.value})}
                placeholder="Detail your requirements..." 
                rows={4}
                required
                className="w-full bg-[#050505] border border-[#1f1f23] rounded-sm p-4 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full py-4 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-black font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] rounded-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {status === 'loading' ? 'ENCRYPTING...' : status === 'success' ? 'TRANSMITTED' : 'DISPATCH_MESSAGE'}
              <Send className="w-4 h-4" />
            </button>
            {status === 'error' && <p className="text-[10px] tracking-widest uppercase text-red-500 mt-3 text-center">Connection Failed. Try Again.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}