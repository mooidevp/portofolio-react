import React from 'react'
import Sidebar from './components/Sidebar'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import PricingSection from './components/PricingSection'
import TechSection from './components/TechSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <div className="flex min-h-screen bg-background text-foreground font-sans">
      <Sidebar />
      <main className="flex-1 ml-64 relative bg-grid-pattern bg-fixed">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-8 py-12 space-y-32 relative z-10">
          <HeroSection />
          <ProjectsSection />
          <PricingSection />
          <TechSection />
          <ContactSection />
        </div>
      </main>
    </div>
  )
}

export default App
