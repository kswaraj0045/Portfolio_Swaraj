import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Building2 } from 'lucide-react';

export const DeloitteMilestone: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="deloitte" className="py-16 md:py-24 relative overflow-hidden">
      {/* Subtle green ambient lighting */}
      <motion.div 
        animate={shouldReduceMotion ? {} : { scale: [1, 1.08, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#86BC25]/12 rounded-full blur-[140px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const }}
          className="p-6 sm:p-8 md:p-12 rounded-3xl relative overflow-hidden backdrop-blur-xl bg-[#17191D] border border-[#343A42] shadow-[0_10px_35px_-5px_rgba(0,0,0,0.6),0_0_25px_-5px_rgba(134,188,37,0.12)]"
        >
          {/* Grid Pattern Overlay with faint graphite grid */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(52, 58, 66, 0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(52, 58, 66, 0.35) 1px, transparent 1px)',
              backgroundSize: '28px 28px'
            }}
          />

          {/* Corner subtle green radial glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(ellipse_at_top_right,rgba(134,188,37,0.10),transparent_70%)] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-5">
              {/* Top badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold text-[#86BC25] bg-[#202329] border border-[#86BC25]/35 shadow-[0_0_12px_rgba(134,188,37,0.12)] transition-all hover:border-[#86BC25]/60 hover:shadow-[0_0_16px_rgba(134,188,37,0.2)]">
                <span className="w-2 h-2 rounded-full bg-[#86BC25] shadow-[0_0_8px_#86BC25] animate-pulse" />
                <span>CAREER SELECTION MILESTONE</span>
              </div>

              {/* Main Heading & Subtitle */}
              <div className="space-y-1.5">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#F5F5F5] tracking-tight">
                  SELECTED AT DELOITTE
                </h2>
                <div className="text-base sm:text-xl font-mono text-[#C5C8CE] font-semibold tracking-wide">
                  Incoming Analyst | Campus Placement
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-[#C5C8CE] leading-relaxed max-w-2xl">
                Selected for the Analyst role at Deloitte through college campus placement.
              </p>

              {/* Achievement Cards */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm">
                {/* Card 1: Analytical Rigor */}
                <div className="group flex items-start gap-3 p-4 rounded-xl bg-[#0D0F11] border border-[#343A42] hover:border-[#86BC25]/45 hover:shadow-[0_4px_20px_-2px_rgba(134,188,37,0.14)] transition-all duration-300">
                  <CheckCircle2 className="w-4 h-4 text-[#86BC25] group-hover:text-[#A3D94B] shrink-0 mt-0.5 transition-all duration-200 group-hover:scale-110" />
                  <div>
                    <span className="font-semibold text-[#F5F5F5] block text-xs font-mono tracking-wider">ANALYTICAL RIGOR</span>
                    <span className="text-xs text-[#858A93] leading-relaxed mt-1 block">
                      Demonstrated structured problem decomposition and quantitative analysis.
                    </span>
                  </div>
                </div>

                {/* Card 2: Business Alignment */}
                <div className="group flex items-start gap-3 p-4 rounded-xl bg-[#0D0F11] border border-[#343A42] hover:border-[#86BC25]/45 hover:shadow-[0_4px_20px_-2px_rgba(134,188,37,0.14)] transition-all duration-300">
                  <CheckCircle2 className="w-4 h-4 text-[#86BC25] group-hover:text-[#A3D94B] shrink-0 mt-0.5 transition-all duration-200 group-hover:scale-110" />
                  <div>
                    <span className="font-semibold text-[#F5F5F5] block text-xs font-mono tracking-wider">BUSINESS ALIGNMENT</span>
                    <span className="text-xs text-[#858A93] leading-relaxed mt-1 block">
                      Connecting technical systems with enterprise objectives and client value.
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer Verification Note */}
              <div className="text-[11px] sm:text-xs font-mono text-[#858A93] flex items-start sm:items-center gap-2 pt-2 border-t border-[#343A42]/50">
                <ShieldCheck className="w-4 h-4 text-[#86BC25] shrink-0 mt-0.5 sm:mt-0" />
                <span>Verified selection milestone through college campus placement • No employment commencement claimed</span>
              </div>
            </div>

            {/* Right-Side Deloitte Information Card */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <motion.div 
                whileHover={shouldReduceMotion ? {} : { y: -3 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-sm p-6 sm:p-7 rounded-2xl bg-[#0D0F11] border border-[#343A42] shadow-2xl space-y-5 relative overflow-hidden group hover:border-[#86BC25]/40 hover:shadow-[0_10px_30px_-5px_rgba(134,188,37,0.14)] transition-all duration-300"
              >
                {/* Subtle top-corner green glow inside the panel */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#86BC25]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#86BC25]/15 transition-colors" />

                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#343A42]">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#202329] border border-[#343A42] group-hover:border-[#86BC25]/40 transition-colors">
                      <Building2 className="w-4 h-4 text-[#86BC25]" />
                    </div>
                    <span className="font-heading font-bold text-xl text-[#F5F5F5] tracking-tight">
                      Deloitte<span className="text-[#86BC25] font-black">.</span>
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-[#86BC25]/10 text-[#86BC25] border border-[#86BC25]/35 hover:bg-[#86BC25]/20 hover:border-[#86BC25] hover:text-[#A3D94B] transition-all cursor-default">
                    ANALYST
                  </span>
                </div>

                {/* Information Rows */}
                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between items-center py-1.5 border-b border-[#343A42]/50">
                    <span className="text-[#858A93]">Target Profile:</span>
                    <span className="text-[#F5F5F5] font-mono font-medium text-xs sm:text-sm">Incoming Analyst</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-[#343A42]/50">
                    <span className="text-[#858A93]">Selection Track:</span>
                    <span className="text-[#F5F5F5] font-mono font-medium text-xs sm:text-sm">Campus Placement</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-[#343A42]/50">
                    <span className="text-[#858A93]">Institution:</span>
                    <span className="text-[#F5F5F5] font-mono font-medium text-xs sm:text-sm">MIT AOE Pune</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-[#858A93]">Status:</span>
                    <span className="text-[#F5F5F5] font-mono font-semibold text-xs sm:text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#86BC25] shadow-[0_0_8px_#86BC25] animate-pulse" />
                      Selected
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
