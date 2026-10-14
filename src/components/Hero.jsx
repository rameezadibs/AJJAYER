import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, ShieldCheck, Building2, Wrench, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenContact }) {
  // WhatsApp direct link (UAE international format)
  const whatsappNumber = "971500000000"; // Replaceable with client's direct WhatsApp
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello AJJAYER Constructions, I would like to inquire about your contracting and engineering services.")}`;

  // Framer Motion staggered variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-16 lg:py-20 flex-1 flex flex-col justify-between">
      
      {/* MAIN HEADLINE & STATEMENT SECTION */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col items-start space-y-8 sm:space-y-10"
      >
        {/* Eyebrow Label */}
        <motion.div variants={itemVariants} className="flex items-center gap-3">
          <span className="w-10 h-[1.5px] bg-[#A47756]"></span>
          <span className="text-[#A47756] text-xs sm:text-sm font-semibold tracking-architectural uppercase">
            AJJAYER CONSTRUCTIONS CONTRACTING LLC
          </span>
          <span className="hidden sm:inline-block w-4 h-[1px] bg-[#A47756]/40"></span>
          <span className="hidden sm:inline-block text-[10px] font-mono text-[#685A4E]/70 tracking-widest uppercase">
            DUBAI &bull; UAE
          </span>
        </motion.div>

        {/* Large Monumental Headline */}
        <motion.div variants={itemVariants} className="w-full">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[94px] font-light tracking-tight leading-[1.02] uppercase text-[#3B332B]">
            <span className="block font-extralight tracking-tight">
              WE’RE BUILDING
            </span>
            <span className="block font-normal tracking-tight text-[#3B332B]/90 mt-1">
              SOMETHING
            </span>
            <span className="relative inline-block font-bold tracking-tight text-[#A47756] mt-2">
              REMARKABLE.
              {/* Subtle architectural bronze underline accent */}
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-[#A47756] via-[#C69D7B] to-transparent opacity-90"></span>
            </span>
          </h1>
        </motion.div>

        {/* Supporting Text */}
        <motion.div variants={itemVariants} className="max-w-3xl space-y-3">
          <p className="text-xl sm:text-2xl font-light text-[#3B332B] leading-relaxed">
            Our new digital presence is currently under construction.
          </p>
          <p className="text-base sm:text-lg font-light text-[#685A4E] leading-relaxed">
            A new platform reflecting AJJAYER’s approach to construction, engineering and execution is coming soon.
          </p>
        </motion.div>

        {/* CTA Buttons (Both 1st & 2nd Identical in Style) */}
        <motion.div 
          variants={itemVariants} 
          className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          {/* Primary CTA: GET IN TOUCH → */}
          <button
            onClick={onOpenContact}
            className="group relative inline-flex items-center justify-center gap-3 px-9 py-4 bg-[#A47756] text-[#F5F0E8] font-medium text-sm tracking-loose-caps uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(164,119,86,0.25)] hover:bg-[#8E6142] hover:shadow-[0_6px_25px_rgba(164,119,86,0.4)] hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
            id="get-in-touch-btn"
          >
            {/* Subtle architectural corner notches */}
            <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/60"></span>
            <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white/60"></span>
            
            <span className="relative z-10 font-semibold tracking-[0.16em]">GET IN TOUCH</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 text-white" />
          </button>

          {/* Secondary WhatsApp Contact Option (Identical to 1st button) */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-9 py-4 bg-[#A47756] text-[#F5F0E8] font-medium text-sm tracking-loose-caps uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(164,119,86,0.25)] hover:bg-[#8E6142] hover:shadow-[0_6px_25px_rgba(164,119,86,0.4)] hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
            id="whatsapp-contact-link"
            title="Connect on WhatsApp"
          >
            {/* Subtle architectural corner notches */}
            <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/60"></span>
            <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white/60"></span>
            
            <MessageSquare className="w-4 h-4 text-white shrink-0" />
            <span className="relative z-10 font-semibold tracking-[0.16em]">WHATSAPP DIRECT</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 text-white" />
          </a>
        </motion.div>

      </motion.div>

      {/* FULL-WIDTH ARCHITECTURAL CAPABILITIES & REGIONAL EXCELLENCE GRID */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 pt-10 border-t border-[#3B332B]/15 w-full"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Card 1 */}
          <div className="p-5 border border-[#3B332B]/10 bg-white/40 rounded-sm hover:border-[#A47756]/50 transition-colors">
            <span className="text-[10px] font-mono tracking-widest text-[#A47756] uppercase block mb-1">
              01 / DISCIPLINE
            </span>
            <h3 className="text-sm font-semibold tracking-wide text-[#3B332B] uppercase">
              General Contracting
            </h3>
            <p className="text-xs font-light text-[#685A4E] mt-2 leading-relaxed">
              Civil construction, commercial complexes, and prime architectural developments built with strict engineering integrity.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-5 border border-[#3B332B]/10 bg-white/40 rounded-sm hover:border-[#A47756]/50 transition-colors">
            <span className="text-[10px] font-mono tracking-widest text-[#A47756] uppercase block mb-1">
              02 / EXPERTISE
            </span>
            <h3 className="text-sm font-semibold tracking-wide text-[#3B332B] uppercase">
              Structural Engineering
            </h3>
            <p className="text-xs font-light text-[#685A4E] mt-2 leading-relaxed">
              Precision structural modeling, steel fabrication, and advanced load-bearing calculations engineered for long-term endurance.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-5 border border-[#3B332B]/10 bg-white/40 rounded-sm hover:border-[#A47756]/50 transition-colors">
            <span className="text-[10px] font-mono tracking-widest text-[#A47756] uppercase block mb-1">
              03 / PRECISION
            </span>
            <h3 className="text-sm font-semibold tracking-wide text-[#3B332B] uppercase">
              Turnkey Execution
            </h3>
            <p className="text-xs font-light text-[#685A4E] mt-2 leading-relaxed">
              End-to-end project management from initial design-build coordination to authority approvals and final handover.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-5 border border-[#3B332B]/10 bg-white/40 rounded-sm hover:border-[#A47756]/50 transition-colors">
            <span className="text-[10px] font-mono tracking-widest text-[#A47756] uppercase block mb-1">
              04 / STANDARDS
            </span>
            <h3 className="text-sm font-semibold tracking-wide text-[#3B332B] uppercase">
              UAE Compliance
            </h3>
            <p className="text-xs font-light text-[#685A4E] mt-2 leading-relaxed">
              Full compliance with UAE Building Codes, municipal regulations, and international safety and quality standards.
            </p>
          </div>

        </div>
      </motion.div>

    </section>
  );
}
