import React from 'react'

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-[#1f1f23] bg-[#0a0a0f] text-gray-400 fixed h-screen top-0 left-0 flex flex-col items-center py-10 z-50">
      <div className="mb-12">
        <h1 className="text-xl font-bold font-poppins tracking-tighter text-white">Mooi<span className="text-primary"></span>Dev</h1>
        <p className="text-[10px] text-primary mt-1 uppercase tracking-widest text-center">SYSTEM_INITIALIZED</p>
      </div>

      <nav className="flex-1 w-full px-6 space-y-4">
        {['Overview', 'Intelligence', 'Projects', 'Transmission'].map((item, i) => (
          <a key={i} href={`#${item.toLowerCase()}`} className={`block px-4 py-2 text-sm rounded transition-colors ${i === 0 ? 'bg-[#1f1f23] text-white border-l-2 border-primary' : 'hover:bg-[#1a1a1f] hover:text-white'}`}>
            {item}
          </a>
        ))}
      </nav>

      <div className="w-full px-6 mt-auto">
        <div className="flex items-center space-x-3 mb-6 bg-card p-3 rounded-md border border-[#1f1f23]">
          <div className="w-10 h-10 rounded bg-gray-800 overflow-hidden">
             <img src="https://placehold.co/100x100?text=JD" alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xs text-white font-semibold">AVAILABILITY</p>
            <p className="text-[10px] text-green-400 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1 animate-pulse"></span> ONLINE (80%)
            </p>
          </div>
        </div>
        <button className="w-full py-2 bg-primary text-black font-bold text-xs uppercase tracking-wider rounded hover:bg-white transition-colors shadow-[0_0_15px_rgba(0,240,255,0.4)]">
          SYNC_NOW
        </button>
      </div>
    </aside>
  )
}
