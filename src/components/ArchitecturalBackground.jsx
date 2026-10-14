import React from 'react';

export default function ArchitecturalBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Precision Architectural Grid */}
      <div className="absolute inset-0 architectural-grid opacity-85" />

      {/* Top Edge Architectural Metric Ruler */}
      <div className="hidden md:flex absolute top-0 left-0 right-0 h-6 border-b border-[#3B332B]/10 items-end px-8 justify-between text-[8px] font-mono text-[#685A4E]/40">
        <span>000</span>
        <span>100</span>
        <span>200</span>
        <span>300</span>
        <span>400</span>
        <span>500</span>
        <span className="text-[#A47756]/80 font-bold">GRID-CENTER [X:600]</span>
        <span>700</span>
        <span>800</span>
        <span>900</span>
        <span>1000</span>
        <span>1100</span>
        <span>1200</span>
      </div>

      {/* Left Edge Metric Ruler */}
      <div className="hidden md:flex absolute top-6 bottom-0 left-0 w-6 border-r border-[#3B332B]/10 flex-col justify-between py-8 items-center text-[8px] font-mono text-[#685A4E]/40">
        <span>00</span>
        <span>10</span>
        <span>20</span>
        <span className="text-[#A47756]/80 font-bold rotate-90">REF-Y</span>
        <span>40</span>
        <span>50</span>
        <span>60</span>
        <span>70</span>
        <span>80</span>
      </div>

      {/* Subtle Architectural Corner Crosshairs */}
      <div className="absolute top-12 left-12 w-4 h-4 drafting-crosshair opacity-30"></div>
      <div className="absolute top-12 right-12 w-4 h-4 drafting-crosshair opacity-30"></div>
      <div className="absolute bottom-16 left-12 w-4 h-4 drafting-crosshair opacity-30"></div>
      <div className="absolute bottom-16 right-12 w-4 h-4 drafting-crosshair opacity-30"></div>

      {/* Subtle Bronze Ambient Architectural Glow */}
      <div 
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(164,119,86,0.08) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}
