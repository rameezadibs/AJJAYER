import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import ArchitecturalBackground from './components/ArchitecturalBackground';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-between relative bg-[#F5F0E8] text-[#3B332B] font-sans">
      {/* Precision Drafting Grid & Coordinate Lines */}
      <ArchitecturalBackground />

      {/* Top Header / Branding */}
      <Navbar />

      {/* Main Hero Section (Full-width spanning composition) */}
      <main className="flex-1 flex flex-col justify-center">
        <Hero onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* Bottom Architectural Divider & Footer */}
      <Footer />

      {/* Interactive Contact & Inquiry Modal */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}
