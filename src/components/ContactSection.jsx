import React, { useState } from 'react'
import { supabase } from '../lib/supabase'
import { Send, Mail } from 'lucide-react' // <-- Cuman 2 ini doang yang di-import, dijamin aman!

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
            
            {/* Email Moidev */}
            <a href="mailto:hello@moidev.com" className="flex items-center text-sm text-gray-300 font-mono tracking-wider hover:text-[#D4AF37] transition-colors w-fit group">
              <div className="w-8 h-8 rounded bg-[#111] border border-[#D4AF37]/20 flex items-center justify-center mr-4 group-hover:border-[#D4AF37]">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
              </div>
              hello@moidev.com
            </a>

            {/* Instagram Moidev - Pake Raw SVG Anti Error */}
            <a href="https://instagram.com/moidev" target="_blank" rel="noreferrer" className="flex items-center text-sm text-gray-300 font-mono tracking-wider hover:text-[#D4AF37] transition-colors w-fit group">
              <div className="w-8 h-8 rounded bg-[#111] border border-[#D4AF37]/20 flex items-center justify-center mr-4 group-hover:border-[#D4AF37]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4AF37]">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </div>
              @moidev
            </a>

            {/* TikTok Moidev - Pake Raw SVG Anti Error */}
            <a href="https://tiktok.com/@moidev" target="_blank" rel="noreferrer" className="flex items-center text-sm text-gray-300 font-mono tracking-wider hover:text-[#D4AF37] transition-colors w-fit group">
              <div className="w-8 h-8 rounded bg-[#111] border border-[#D4AF37]/20 flex items-center justify-center mr-4 group-hover:border-[#D4AF37]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#D4AF37]" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-1.15 4.38-2.9 5.8-1.74 1.43-4.06 2.06-6.31 1.63-2.25-.43-4.22-1.77-5.46-3.6-1.24-1.84-1.57-4.2-.95-6.36.62-2.16 2.16-3.95 4.16-4.9 2.01-.95 4.41-1.03 6.47-.23v4.09c-1.07-.63-2.42-.7-3.55-.22-1.13.48-1.99 1.48-2.24 2.67-.25 1.19.1 2.45.93 3.32.83.87 2.1 1.25 3.28 1.02 1.18-.23 2.16-1.05 2.58-2.17.29-.78.34-1.63.34-2.46V0h-3.41z"/>
                </svg>
              </div>
              @moidev
            </a>

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