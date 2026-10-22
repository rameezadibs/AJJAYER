import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-30 w-full border-b border-[#3B332B]/10 bg-[#F5F0E8]/85 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 sm:py-6 flex items-center justify-between gap-6">
        {/* Left: Finalized AJJAYER Logo */}
        <div className="flex items-center gap-4">
          <a 
            href="#" 
            className="group block transition-transform duration-300 hover:scale-[1.01]"
            aria-label="AJJAYER Constructions Contracting LLC Home"
          >
            <img 
              src="/assets/ajjayer-logo.png" 
              alt="AJJAYER Constructions Contracting LLC" 
              className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-all duration-300"
            />
          </a>
        </div>

        {/* Right: DUBAI • UNITED ARAB EMIRATES & Direct Phone */}
        <div className="text-right">
          <div className="flex items-center justify-end gap-2 text-[10px] sm:text-xs font-semibold tracking-architectural uppercase text-[#3B332B]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A47756] animate-pulse"></span>
            <span>DUBAI &bull; UNITED ARAB EMIRATES</span>
          </div>
          <div className="flex items-center justify-end gap-3 text-[11px] font-mono tracking-wider text-[#685A4E]/90 mt-1">
            <a 
              href="tel:+971541696975" 
              className="flex items-center gap-1.5 font-medium hover:text-[#A47756] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#A47756]" />
              <span>+971 54 169 6975</span>
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
