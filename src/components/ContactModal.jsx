import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    scope: 'General Contracting',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedRef = `AJ-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefId(generatedRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      scope: 'General Contracting',
      message: '',
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-2xl border border-[#3B332B]/20 rounded-sm overflow-hidden shadow-2xl bg-[#F5F0E8] text-[#3B332B]"
        >
          {/* Top Architectural Banner */}
          <div className="relative border-b border-[#A47756]/20 px-6 sm:px-8 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#A47756] rotate-45"></span>
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#A47756] uppercase block">
                  COMMUNICATION CHANNEL
                </span>
                <h3 className="text-base sm:text-lg font-semibold tracking-wide uppercase text-[#3B332B]">
                  AJJAYER PROJECT INQUIRY
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full border border-[#3B332B]/20 hover:bg-[#3B332B]/10 text-[#3B332B] transition-all"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[#A47756]/15 border border-[#A47756] flex items-center justify-center text-[#A47756]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-light uppercase tracking-tight text-[#3B332B]">
                  Inquiry Received
                </h4>
                <p className="text-sm max-w-md mx-auto text-[#685A4E]">
                  Thank you for reaching out to AJJAYER Constructions Contracting LLC. Our commercial and engineering team will review your project brief and respond promptly.
                </p>
                <div className="inline-block px-4 py-2 bg-[#A47756]/10 border border-[#A47756]/30 rounded-sm">
                  <span className="text-xs font-mono tracking-widest text-[#A47756]">
                    REFERENCE TICKET: {refId}
                  </span>
                </div>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-[#A47756] text-white text-xs font-medium tracking-loose-caps uppercase transition-colors hover:bg-[#8E6142]"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            ) : (
              <div className="space-y-6">
                
                {/* Fast Contact Strip */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 border border-[#3B332B]/15 bg-white/60 rounded-sm text-xs">
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-3.5 h-3.5 text-[#A47756] shrink-0" />
                    <div>
                      <span className="block text-[9px] font-mono opacity-60">DIRECT EMAIL</span>
                      <a href="mailto:contact@ajjayer.ae" className="font-medium hover:text-[#A47756]">
                        contact@ajjayer.ae
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone className="w-3.5 h-3.5 text-[#A47756] shrink-0" />
                    <div>
                      <span className="block text-[9px] font-mono opacity-60">PHONE &bull; WHATSAPP</span>
                      <a href="tel:+971541696975" className="font-medium hover:text-[#A47756]">
                        +971 54 169 6975
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-3.5 h-3.5 text-[#A47756] shrink-0" />
                    <div>
                      <span className="block text-[9px] font-mono opacity-60">HEADQUARTERS</span>
                      <span className="font-medium">Dubai, UAE</span>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium tracking-wide uppercase mb-1.5 opacity-80">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Al Mansoori"
                        className="w-full px-3.5 py-2.5 text-sm border rounded-sm outline-none transition-colors bg-white border-[#3B332B]/20 text-[#3B332B] focus:border-[#A47756]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium tracking-wide uppercase mb-1.5 opacity-80">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Emaar / Private Developer"
                        className="w-full px-3.5 py-2.5 text-sm border rounded-sm outline-none transition-colors bg-white border-[#3B332B]/20 text-[#3B332B] focus:border-[#A47756]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium tracking-wide uppercase mb-1.5 opacity-80">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tariq@example.ae"
                        className="w-full px-3.5 py-2.5 text-sm border rounded-sm outline-none transition-colors bg-white border-[#3B332B]/20 text-[#3B332B] focus:border-[#A47756]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium tracking-wide uppercase mb-1.5 opacity-80">
                        Phone / Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 000 0000"
                        className="w-full px-3.5 py-2.5 text-sm border rounded-sm outline-none transition-colors bg-white border-[#3B332B]/20 text-[#3B332B] focus:border-[#A47756]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium tracking-wide uppercase mb-1.5 opacity-80">
                      Project Discipline
                    </label>
                    <select
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border rounded-sm outline-none transition-colors bg-white border-[#3B332B]/20 text-[#3B332B] focus:border-[#A47756]"
                    >
                      <option value="General Contracting">General Contracting & Civil Works</option>
                      <option value="Structural Engineering">Structural Engineering & Steel Fabrication</option>
                      <option value="Commercial Development">Commercial & Industrial Contracting</option>
                      <option value="Luxury Residential">Prime / Luxury Residential Project</option>
                      <option value="Turnkey Execution">Turnkey Design-Build Execution</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium tracking-wide uppercase mb-1.5 opacity-80">
                      Project Scope / Brief *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your project requirements, location in UAE, and approximate timeline..."
                      className="w-full px-3.5 py-2.5 text-sm border rounded-sm outline-none transition-colors resize-none bg-white border-[#3B332B]/20 text-[#3B332B] focus:border-[#A47756]"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-4">
                    <span className="text-[10px] font-mono opacity-60 flex items-center gap-1.5 text-[#3B332B]">
                      <ShieldCheck className="w-3 h-3 text-[#A47756]" />
                      NDA & Confidentiality Respected
                    </span>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#A47756] text-white text-xs font-semibold tracking-loose-caps uppercase transition-all duration-300 hover:bg-[#8E6142] shadow-md hover:-translate-y-0.5"
                    >
                      <span>TRANSMIT BRIEF</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
