import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Building2, ArrowUpRight, GraduationCap } from 'lucide-react';

interface Props {
  onNavigate?: (path: string) => void;
}

export const DeloitteMilestone: React.FC<Props> = ({ onNavigate }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="deloitte" className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
      {/* Deloitte Green ambient halo */}
      <motion.div 
        animate={shouldReduceMotion ? {} : { scale: [1, 1.08, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-[#86BC25]/12 rounded-full blur-[140px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const }}
          className="p-5 sm:p-8 md:p-12 rounded-3xl relative overflow-hidden backdrop-blur-xl bg-[#000000] border border-[#86BC25]/30 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.9),0_0_30px_-5px_rgba(134,188,37,0.18)]"
        >
          {/* Subtle architectural grid overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(134, 188, 37, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(134, 188, 37, 0.15) 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }}
          />

          {/* Corner green radial reflection */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_top_right,rgba(134,188,37,0.14),transparent_70%)] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-5 sm:space-y-6">
              
              {/* Section Title Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold text-[#86BC25] bg-[#000000] border border-[#86BC25]/40 shadow-[0_0_12px_rgba(134,188,37,0.16)]">
                <span className="w-2 h-2 rounded-full bg-[#86BC25] shadow-[0_0_8px_#86BC25] animate-pulse" />
                <span>CAREER MILESTONE</span>
              </div>

              {/* Main Heading & Role */}
              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#FFFFFF] tracking-tight">
                  SELECTED AT DELOITTE USI
                </h2>
                <div className="text-base sm:text-xl font-heading font-semibold text-[#86BC25] tracking-tight">
                  Incoming Analyst
                </div>
              </div>

              {/* Description */}
              <p className="text-xs xs:text-sm sm:text-base md:text-lg text-[#C5C8CE] leading-relaxed max-w-2xl font-normal font-sans">
                Selected through college campus placement. This dedicated milestone marks an important step in connecting technology implementations with enterprise business value.
              </p>

              {/* Core Information Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm">
                
                {/* Institution Card */}
                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-[#0D0F11] border border-[#35383F] hover:border-[#86BC25]/40 transition-colors">
                  <GraduationCap className="w-5 h-5 text-[#86BC25] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#858992] block">Institution</span>
                    <span className="font-semibold text-[#FFFFFF] text-xs sm:text-sm block mt-0.5 font-sans">
                      MIT Academy of Engineering, Pune
                    </span>
                  </div>
                </div>

                {/* Status Card */}
                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-[#0D0F11] border border-[#35383F] hover:border-[#86BC25]/40 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-[#86BC25] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#858992] block">Status</span>
                    <span className="font-semibold text-[#FFFFFF] text-xs sm:text-sm flex items-center gap-2 mt-0.5 font-sans">
                      <span className="w-2 h-2 rounded-full bg-[#86BC25] animate-pulse" />
                      Selected / Incoming
                    </span>
                  </div>
                </div>

              </div>

              {/* Prominent Button: KNOW ABOUT DELOITTE ↗ */}
              <div className="pt-2">
                <motion.a
                  href="/deloitte"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('/deloitte');
                    }
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold font-sans text-[#000000] bg-[#86BC25] hover:bg-[#97D72B] shadow-[0_0_20px_rgba(134,188,37,0.35)] hover:shadow-[0_0_28px_rgba(134,188,37,0.5)] transition-all cursor-pointer group/btn min-h-[46px] w-full sm:w-auto"
                >
                  <span>KNOW ABOUT DELOITTE</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </motion.a>
              </div>

              {/* Verification & Compliance Note */}
              <div className="text-[11px] sm:text-xs font-mono text-[#858992] flex items-start sm:items-center gap-2 pt-2 border-t border-[#35383F]/60">
                <ShieldCheck className="w-4 h-4 text-[#86BC25] shrink-0 mt-0.5 sm:mt-0" />
                <span>Verified selection milestone through college campus placement • MIT Academy of Engineering, Pune</span>
              </div>
            </div>

            {/* Right-Side Authentic Deloitte Identity Card */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <motion.div 
                whileHover={shouldReduceMotion ? {} : { y: -3 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-sm p-5 sm:p-8 rounded-2xl bg-[#0D0F11] border border-[#86BC25]/35 shadow-2xl space-y-6 relative overflow-hidden group hover:border-[#86BC25]/60 hover:shadow-[0_12px_36px_-6px_rgba(134,188,37,0.22)] transition-all duration-300"
              >
                {/* Green corner reflection */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#86BC25]/15 rounded-full blur-2xl pointer-events-none group-hover:bg-[#86BC25]/25 transition-colors" />

                {/* Deloitte Accurate Text Wordmark */}
                <div className="flex items-center justify-between pb-5 border-b border-[#35383F]">
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-black text-2xl text-[#FFFFFF] tracking-tight">
                      Deloitte<span className="text-[#86BC25] font-black text-3xl leading-none">.</span>
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-[#86BC25]/15 text-[#86BC25] border border-[#86BC25]/40">
                    USI
                  </span>
                </div>

                {/* Structured Metadata Summary */}
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between items-center py-1.5 border-b border-[#35383F]/50">
                    <span className="text-[#858992]">Role:</span>
                    <span className="text-[#FFFFFF] font-mono font-medium text-xs sm:text-sm">Incoming Analyst</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-[#35383F]/50">
                    <span className="text-[#858992]">Selection Track:</span>
                    <span className="text-[#FFFFFF] font-mono font-medium text-xs sm:text-sm">Campus Placement</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-[#35383F]/50">
                    <span className="text-[#858992]">Institution:</span>
                    <span className="text-[#FFFFFF] font-mono font-medium text-xs text-right max-w-[190px]">MIT Academy of Engineering</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-[#858992]">Status:</span>
                    <span className="text-[#86BC25] font-mono font-semibold text-xs sm:text-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#86BC25] shadow-[0_0_8px_#86BC25] animate-pulse" />
                      Selected / Incoming
                    </span>
                  </div>
                </div>

                {/* Direct Card Footer Action */}
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate && onNavigate('/deloitte')}
                    className="w-full py-2.5 rounded-lg text-xs font-mono font-semibold text-[#86BC25] hover:text-[#FFFFFF] bg-[#86BC25]/10 hover:bg-[#86BC25]/20 border border-[#86BC25]/30 hover:border-[#86BC25] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>View Deloitte USI Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

