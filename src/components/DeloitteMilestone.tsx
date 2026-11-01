import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Award, CheckCircle2, ShieldCheck, Building2, ArrowRight } from 'lucide-react';
import { MotionReveal } from './MotionReveal';

export const DeloitteMilestone: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="deloitte" className="py-16 md:py-24 relative overflow-hidden">
      {/* Ambient glow with subtle pulse */}
      <motion.div 
        animate={shouldReduceMotion ? {} : { scale: [1, 1.12, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-accent-primary/10 rounded-full blur-[140px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const }}
          className="deloitte-card p-5 sm:p-8 md:p-12 rounded-3xl relative overflow-hidden backdrop-blur-xl border border-accent-achievement/35 shadow-deloitte-glow"
        >
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-silver-metallic bg-bg-elevated border border-border-silver/40 shadow-silver-soft">
                <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
                <span>CAREER SELECTION MILESTONE</span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-heading text-text-primary tracking-tight">
                  SELECTED AT DELOITTE
                </h2>
                <div className="text-base sm:text-xl font-mono text-accent-achievement font-semibold mt-1">
                  Incoming Analyst | Campus Placement
                </div>
              </div>

              <p className="text-sm sm:text-lg text-text-secondary leading-relaxed max-w-2xl">
                Selected for the Analyst role at Deloitte through college campus placement.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-text-secondary">
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-bg-main/60 border border-border-subtle hover:border-accent-achievement/30 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-accent-achievement shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-text-primary block text-xs font-mono">ANALYTICAL RIGOR</span>
                    <span className="text-xs text-text-secondary">Demonstrated structured problem decomposition and quantitative analysis.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-bg-main/60 border border-border-subtle hover:border-accent-achievement/30 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-accent-achievement shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-text-primary block text-xs font-mono">BUSINESS ALIGNMENT</span>
                    <span className="text-xs text-text-secondary">Connecting technical systems with enterprise objectives and client value.</span>
                  </div>
                </div>
              </div>

              <div className="text-[11px] sm:text-xs font-mono text-text-muted flex items-start gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-accent-achievement shrink-0 mt-0.5" />
                <span>Verified selection milestone through college campus placement • No employment commencement claimed</span>
              </div>
            </div>

            {/* Right Badge Graphic & Verification Box */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-end justify-center">
              <motion.div 
                whileHover={{ y: -4 }}
                className="w-full max-w-sm p-6 rounded-2xl bg-bg-main/90 border border-border-subtle shadow-xl space-y-4"
              >
                <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-accent-achievement" />
                    <span className="font-heading font-bold text-text-primary">Deloitte.</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-accent-achievement/15 text-accent-achievement border border-accent-achievement/30">
                    ANALYST
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-border-subtle/50">
                    <span className="text-text-muted">Target Profile:</span>
                    <span className="text-text-primary font-mono font-medium">Incoming Analyst</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border-subtle/50">
                    <span className="text-text-muted">Selection Track:</span>
                    <span className="text-text-primary font-mono font-medium">Campus Placement</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border-subtle/50">
                    <span className="text-text-muted">Institution:</span>
                    <span className="text-text-primary font-mono font-medium">MIT AOE Pune</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-text-muted">Status:</span>
                    <span className="text-silver-metallic font-mono font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
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
