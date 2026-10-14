import React from 'react';
import { MessageSquare, MapPin, Phone } from 'lucide-react';

function InstagramIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.75" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.75" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.75" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

export default function Footer() {
  const phoneNumber = "+971 54 596 2935";
  const whatsappNumber = "971545962935";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello AJJAYER Constructions, I would like to inquire about your services.")}`;

  return (
    <footer className="relative z-20 w-full border-t border-[#3B332B]/10 bg-[#F5F0E8]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
          
          {/* Company Details */}
          <div className="space-y-1.5">
            <h2 className="text-sm font-semibold tracking-wider uppercase text-[#3B332B]">
              AJJAYER Constructions Contracting LLC
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-xs font-light text-[#685A4E]/80">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#A47756]" />
                <span>Dubai, United Arab Emirates</span>
              </div>
              <span className="opacity-40">&bull;</span>
              <a 
                href="tel:+971545962935" 
                className="flex items-center gap-1.5 font-mono text-xs font-medium text-[#3B332B] hover:text-[#A47756] transition-colors"
              >
                <Phone className="w-3 h-3 text-[#A47756]" />
                <span>+971 54 596 2935</span>
              </a>
            </div>
          </div>

          {/* Social Channels */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-xs font-medium tracking-loose-caps uppercase transition-colors duration-200 text-[#685A4E] hover:text-[#A47756]"
              aria-label="AJJAYER on Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110" />
              <span>Instagram</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-xs font-medium tracking-loose-caps uppercase transition-colors duration-200 text-[#685A4E] hover:text-[#A47756]"
              aria-label="AJJAYER on LinkedIn"
            >
              <LinkedInIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110" />
              <span>LinkedIn</span>
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-xs font-medium tracking-loose-caps uppercase transition-colors duration-200 text-[#685A4E] hover:text-[#A47756]"
              aria-label="AJJAYER on WhatsApp: +971 54 596 2935"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-left md:text-right space-y-0.5">
            <p className="text-xs font-light tracking-wide text-[#685A4E]/70">
              &copy; 2026 AJJAYER Constructions Contracting LLC
            </p>
            <p className="text-[10px] font-mono tracking-widest text-[#A47756]/80">
              ALL RIGHTS RESERVED &bull; UAE
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
