import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

// Komponen Kartu Harga Tunggal 3D
const SinglePricingCard3D = () => {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  
  // Efek Miring 3D Halus
  const rotateX = useTransform(y, [0, 1], [7, -7]);
  const rotateY = useTransform(x, [0, 1], [-7, 7]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5); y.set(0.5);
  };

  // Daftar Benefit Premium Lu (Bisa lu edit sendiri teksnya nanti)
  const benefits = [
    "Desain UI/UX Eksklusif & Kustom",
    "Pengembangan Website Multi-halaman",
    "Responsif di Semua Perangkat (Mobile & Desktop)",
    "Optimasi Kecepatan Loading & SEO Dasar",
    "Integrasi Formulir Kontak & WhatsApp",
    "Sistem Manajemen Konten (Bisa Edit Sendiri)",
    "Keamanan Server & SSL Certificate",
    "Gratis Maintenance & Support 1 Bulan"
  ];

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      style={{ perspective: 1200, rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative max-w-2xl mx-auto p-8 md:p-14 rounded-xl bg-[#0a0a0a] border border-[#D4AF37] shadow-[0_15px_50px_rgba(212,175,55,0.15)] flex flex-col items-center transition-colors duration-300"
    >
      {/* Konten dengan efek 3D muncul ke depan */}
      <div className="w-full flex flex-col items-center" style={{ transform: "translateZ(30px)" }}>
        
        {/* Label Rekomendasi */}
        <div className="inline-block bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-black text-[9px] font-bold px-5 py-2 rounded-sm tracking-[0.2em] uppercase shadow-lg mb-8">
          PAKET ALL-IN-ONE
        </div>
        
        {/* Nama Layanan */}
        <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-widest mb-4 text-center">
          EXECUTIVE SUITE
        </h3>
        
        <p className="text-sm text-gray-400 mb-8 leading-relaxed font-light text-center max-w-md">
          Solusi end-to-end untuk digitalisasi bisnis Anda. Kami menangani semuanya dari perancangan desain hingga peluncuran sistem.
        </p>
        
        {/* Harga */}
        <div className="flex items-end justify-center gap-3 mb-10 pb-10 border-b border-[#1f1f23] w-full">
          <span className="text-xs text-gray-500 mb-2 uppercase tracking-[0.2em]">Mulai Dari</span>
          {/* Lu bisa ganti harganya di sini */}
          <span className="text-5xl md:text-6xl font-black tracking-tighter text-[#D4AF37]">Rp 35.000</span>
        </div>

        {/* List Benefit */}
        <div className="w-full text-left px-2 md:px-8">
          <p className="text-[10px] text-[#D4AF37]/70 uppercase tracking-[0.2em] mb-6 text-center font-bold">BENEFIT YANG ANDA DAPATKAN :</p>
          <ul className="space-y-4 mb-12">
            {benefits.map((feature, i) => (
              <li key={i} className="flex items-center text-sm text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full mr-4 shrink-0 shadow-[0_0_8px_rgba(212,175,55,0.8)] bg-[#D4AF37]"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tombol Call to Action */}
        <button className="w-full max-w-md py-4 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-black font-bold text-[11px] uppercase tracking-[0.2em] rounded-sm hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105 transition-all duration-300">
          KONSULTASI GRATIS SEKARANG
        </button>

      </div>
    </motion.div>
  )
}

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative z-10">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-black tracking-widest uppercase text-white mb-3">
          INVESTASI <span className="font-serif text-[#D4AF37] italic font-normal">DIGITAL</span>
        </h2>
        <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em]">TIDAK ADA BIAYA TERSEMBUNYI, HANYA HASIL MAKSIMAL</p>
      </div>
      
      {/* Memanggil komponen kartu yang udah kita buat di atas */}
      <SinglePricingCard3D />
    </section>
  )
}