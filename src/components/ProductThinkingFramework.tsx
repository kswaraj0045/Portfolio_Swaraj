import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  Compass, 
  Search, 
  Target, 
  ListFilter, 
  Code2, 
  LineChart, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Info
} from 'lucide-react';
import { productThinkingFramework } from '../data/portfolioData';
import { MotionReveal } from './MotionReveal';

export const ProductThinkingFramework: React.FC = () => {
  const [selectedStageId, setSelectedStageId] = useState<string>('understand');
  const shouldReduceMotion = useReducedMotion();

  const selectedStage = productThinkingFramework.find((s) => s.id === selectedStageId) || productThinkingFramework[0];

  const getStageIcon = (id: string, active: boolean) => {
    const className = `w-5 h-5 ${active ? 'text-bg-main' : 'text-accent-primary'}`;
    switch (id) {
      case 'understand': return <Search className={className} />;
      case 'discover': return <Compass className={className} />;
      case 'define': return <Target className={className} />;
      case 'prioritize': return <ListFilter className={className} />;
      case 'build': return <Code2 className={className} />;
      case 'measure': return <LineChart className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  const currentIndex = productThinkingFramework.findIndex(s => s.id === selectedStageId);
  const progressPercent = ((currentIndex + 1) / productThinkingFramework.length) * 100;

  return (
    <section id="framework" className="py-20 md:py-28 relative border-t border-border-subtle bg-bg-main overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Motion Reveal */}
        <MotionReveal className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-accent-primary bg-accent-primary/10 border border-accent-primary/20 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>PRODUCT METHODOLOGY & EXECUTION MINDSET</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-text-primary tracking-tight">
            From Problems to Products.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-text-secondary leading-relaxed">
            A structured, iterative 6-stage framework connecting user discovery, analytical scoping, and technical execution.
          </p>
        </MotionReveal>

        {/* Disclaimer Note */}
        <MotionReveal delay={0.1} className="mb-10 p-4 rounded-xl bg-bg-card/50 border border-border-subtle/80 flex items-start gap-3 text-xs text-text-secondary">
          <Info className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
          <span>
            <strong>Note on Framework:</strong> This workflow represents my product-oriented learning framework and practical problem-solving methodology applied during academic research, startup projects, and software internships, not a claim of independently directing every stage in enterprise production.
          </span>
        </MotionReveal>

        {/* Desktop Horizontal Timeline / Stepper (Hidden on mobile) */}
        <div className="hidden lg:block mb-8">
          <div className="relative">
            {/* Background Track Line */}
            <div className="absolute top-7 left-12 right-12 h-1 bg-border-subtle z-0 rounded-full" />
            
            {/* Animated Dynamic Progress Line */}
            <motion.div 
              className="absolute top-7 left-12 h-1 bg-gradient-to-r from-accent-primary via-sky-400 to-accent-achievement z-0 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `calc(${progressPercent}% - 48px)` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            
            <div className="grid grid-cols-6 gap-3 relative z-10">
              {productThinkingFramework.map((stage) => {
                const isActive = stage.id === selectedStageId;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setSelectedStageId(stage.id)}
                    className="flex flex-col items-center text-center group cursor-pointer"
                  >
                    {/* Circle Node */}
                    <motion.div 
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md ${
                        isActive 
                          ? 'bg-accent-primary text-bg-main shadow-card-glow ring-4 ring-accent-primary/20' 
                          : 'bg-bg-card border border-border-subtle text-text-secondary hover:border-accent-primary/60 hover:text-text-primary'
                      }`}
                    >
                      {getStageIcon(stage.id, isActive)}
                    </motion.div>

                    {/* Step & Label */}
                    <span className={`text-[11px] font-mono mt-3 font-semibold ${isActive ? 'text-accent-primary' : 'text-text-muted'}`}>
                      STAGE {stage.step}
                    </span>
                    <span className={`text-xs font-heading font-bold mt-0.5 ${isActive ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'}`}>
                      {stage.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Vertical Stepper Selector */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
          {productThinkingFramework.map((stage) => {
            const isActive = stage.id === selectedStageId;
            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStageId(stage.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isActive
                    ? 'bg-accent-primary/15 border-accent-primary text-accent-primary font-semibold'
                    : 'bg-bg-card border-border-subtle text-text-secondary hover:text-text-primary'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold">STAGE {stage.step}</span>
                  {getStageIcon(stage.id, isActive)}
                </div>
                <div className="text-xs font-bold font-heading text-text-primary mt-1">
                  {stage.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail Showcase Card with Smooth Tab Transition */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedStage.id}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="glass-card p-4 sm:p-8 md:p-10 rounded-3xl border border-accent-primary/30 relative overflow-hidden bg-bg-card/90 shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Stage Objective & Activities */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-accent-primary/15 text-accent-primary font-mono font-bold text-xs flex items-center justify-center border border-accent-primary/30">
                    {selectedStage.step}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-text-primary">
                      {selectedStage.title}
                    </h3>
                    <div className="text-xs font-mono text-accent-primary">
                      {selectedStage.summary}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-2">Stage Objective</h4>
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                    {selectedStage.objective}
                  </p>
                </div>

                {/* Core Activities */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-3">Key Activities & Methods</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedStage.activities.map((act, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-text-secondary p-2.5 rounded-lg bg-bg-main/60 border border-border-subtle">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-primary shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Concrete Artifacts & Project Application */}
              <div className="lg:col-span-5 space-y-5">
                
                {/* Concrete Application Box */}
                <div className="p-5 rounded-2xl bg-bg-main/90 border border-border-subtle space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-border-subtle">
                    <span className="text-xs font-mono font-semibold text-accent-achievement uppercase">
                      Applied in Real Project
                    </span>
                    <span className="w-2 h-2 rounded-full bg-accent-achievement shadow-[0_0_6px_#a3e635]" />
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-mono">
                    "{selectedStage.exampleFromWork}"
                  </p>
                </div>

                {/* Deliverables */}
                <div className="p-5 rounded-2xl bg-bg-main/60 border border-border-subtle">
                  <div className="text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
                    Stage Deliverables
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedStage.deliverables.map((deliv, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 rounded-md text-xs font-mono font-medium text-text-primary bg-bg-card border border-border-subtle"
                      >
                        {deliv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stage Stepper Quick Links */}
                <div className="flex justify-between items-center pt-2">
                  <button
                    onClick={() => {
                      if (currentIndex > 0) {
                        setSelectedStageId(productThinkingFramework[currentIndex - 1].id);
                      }
                    }}
                    disabled={currentIndex === 0}
                    className="text-xs font-mono text-text-secondary hover:text-text-primary disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  >
                    ← Previous Stage
                  </button>

                  <button
                    onClick={() => {
                      if (currentIndex < productThinkingFramework.length - 1) {
                        setSelectedStageId(productThinkingFramework[currentIndex + 1].id);
                      }
                    }}
                    disabled={currentIndex === productThinkingFramework.length - 1}
                    className="text-xs font-mono text-accent-primary hover:text-sky-300 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1 group"
                  >
                    <span>Next Stage</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
