import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

interface Props {
  onComplete: () => void;
}

export const SignatureLoadingScreen: React.FC<Props> = ({ onComplete }) => {
  const shouldReduceMotion = useReducedMotion();
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  // Split name for responsive layout (stacks gracefully on small mobile screens without overflow)
  const firstName = 'SWARAJ'.split('');
  const lastName = 'KHADALKAR'.split('');

  useEffect(() => {
    // If visitor prefers reduced motion, skip intro immediately
    if (shouldReduceMotion) {
      onComplete();
      return;
    }

    // Lock body scroll during intro
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Smooth progress bar animation over ~2.4 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 45);

    // Trigger cinematic exit at 2.5s
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2500);

    // Complete and remove overlay at 3.1s
    const finishTimer = setTimeout(() => {
      document.body.style.overflow = originalOverflow;
      onComplete();
    }, 3100);

    // Allow user to skip via Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        clearInterval(interval);
        clearTimeout(exitTimer);
        clearTimeout(finishTimer);
        document.body.style.overflow = originalOverflow;
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onComplete, shouldReduceMotion]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      document.body.style.overflow = '';
      onComplete();
    }, 300);
  };

  // Particles generator for futuristic ambience
  const particles = [
    { x: '15%', y: '20%', size: 3, delay: 0.1, duration: 4 },
    { x: '82%', y: '25%', size: 2, delay: 0.4, duration: 5 },
    { x: '25%', y: '75%', size: 3, delay: 0.2, duration: 6 },
    { x: '78%', y: '70%', size: 4, delay: 0.5, duration: 4.5 },
    { x: '48%', y: '15%', size: 2, delay: 0.3, duration: 5.5 },
    { x: '10%', y: '50%', size: 3, delay: 0.6, duration: 5 },
    { x: '90%', y: '48%', size: 2.5, delay: 0.2, duration: 4.8 },
    { x: '60%', y: '82%', size: 3, delay: 0.7, duration: 6 },
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg-main text-text-primary overflow-hidden select-none"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: isExiting ? 1.4 : [1, 1.15, 1],
            opacity: isExiting ? 0 : [0.08, 0.16, 0.08],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent-primary/15 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{
            scale: isExiting ? 1.5 : [1, 1.2, 1],
            opacity: isExiting ? 0 : [0.05, 0.12, 0.05],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-accent-secondary/15 rounded-full blur-[150px]"
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{
              opacity: isExiting ? 0 : [0.2, 0.6, 0.2],
              y: [0, -15, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
            }}
            className="rounded-full bg-slate-400/40"
          />
        ))}
      </div>

      {/* Concentric orbital rings surrounding the name */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {/* Outer Ellipse */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{
            opacity: isExiting ? 0 : 0.35,
            scale: isExiting ? 1.35 : 1,
            rotate: 360,
          }}
          transition={{
            opacity: { duration: 1 },
            scale: { duration: isExiting ? 0.6 : 1 },
            rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
          }}
          className="w-[280px] sm:w-[560px] md:w-[780px] lg:w-[920px] h-[160px] sm:h-[270px] md:h-[350px] lg:h-[400px] rounded-[100%] border border-dashed border-slate-600/35"
        />

        {/* Inner Ellipse */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: isExiting ? 0 : 0.45,
            scale: isExiting ? 1.25 : 1,
            rotate: -360,
          }}
          transition={{
            opacity: { duration: 1, delay: 0.2 },
            scale: { duration: isExiting ? 0.6 : 1 },
            rotate: { duration: 32, repeat: Infinity, ease: 'linear' },
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[440px] md:w-[620px] lg:w-[740px] h-[120px] sm:h-[200px] md:h-[260px] lg:h-[300px] rounded-[100%] border border-slate-500/25"
        />

        {/* Orbiting Satellite Dot */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[440px] md:w-[620px] lg:w-[740px] h-[120px] sm:h-[200px] md:h-[260px] lg:h-[300px]"
        >
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent-primary shadow-sm" />
        </motion.div>
      </div>

      {/* ========================================================= */}
      {/* MAIN IDENTITY CONTAINER */}
      {/* ========================================================= */}
      <motion.div
        animate={{
          scale: isExiting ? 1.05 : 1,
          opacity: isExiting ? 0 : 1,
        }}
        transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto"
      >
        {/* Phase 1: FULL NAME WITH STAGGERED LETTER ANIMATION */}
        <h1 className="font-heading font-extrabold tracking-tight sm:tracking-normal text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-x-3 sm:gap-x-5 gap-y-1">
            {/* FIRST NAME: SWARAJ */}
            <div className="flex items-center">
              {firstName.map((char, index) => (
                <motion.span
                  key={`first-${index}`}
                  initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15 + index * 0.045,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="inline-block bg-gradient-to-b from-[#FFFFFF] via-[#F5F5F5] to-[#E5E5E5] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(245,245,245,0.15)]"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* LAST NAME: KHADALKAR */}
            <div className="flex items-center">
              {lastName.map((char, index) => (
                <motion.span
                  key={`last-${index}`}
                  initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.6,
                    delay: 0.45 + index * 0.045,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="inline-block bg-gradient-to-r from-[#F5F5F5] via-[#C5C8CE] to-[#A4A7AE] bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(197,200,206,0.25)]"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>
        </h1>

        {/* Subtle Crimson Light Sweep Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.85, ease: 'easeOut' }}
          className="h-0.5 w-24 sm:w-32 bg-gradient-to-r from-accent-primary via-accent-hover to-accent-primary rounded-full mb-6 shadow-[0_0_12px_rgba(179,38,53,0.7)]"
        />

        {/* Phase 2: PERSONAL TAGLINE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="space-y-2 mb-8 sm:mb-10"
        >
          <div className="font-mono font-bold text-xs sm:text-sm md:text-base tracking-[0.25em] text-silver-metallic uppercase">
            THINK. BUILD. LEAD.
          </div>
          <div className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-text-muted uppercase">
            WELCOME TO MY DIGITAL WORLD
          </div>
        </motion.div>

        {/* Phase 3: ANIMATED LOADING INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.15 }}
          className="w-full max-w-[240px] sm:max-w-[280px] space-y-3"
        >
          {/* Progress Track & Glowing Bar */}
          <div className="w-full h-[2px] bg-border-subtle/80 rounded-full overflow-hidden relative shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
            <motion.div
              style={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-accent-primary via-silver-metallic to-accent-primary rounded-full shadow-[0_0_8px_rgba(179,38,53,0.4)]"
            />
          </div>

          {/* Status Label (No fake percentages) */}
          <div className="flex items-center justify-center gap-2 text-[9px] sm:text-[10px] font-mono tracking-widest text-text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
            <span>
              {progress >= 100 ? 'SYSTEM READY' : 'INITIALIZING EXPERIENCE...'}
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Skip button for instant entry */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        whileHover={{ opacity: 1, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSkip}
        className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 text-xs font-mono text-text-muted hover:text-accent-primary px-3 py-1.5 rounded-lg border border-border-subtle/50 hover:border-accent-primary/40 bg-bg-card/50 backdrop-blur-sm transition-all flex items-center gap-1.5 cursor-pointer"
        title="Press ESC or click to enter immediately"
      >
        <span>Enter Directly</span>
        <ArrowRight className="w-3 h-3" />
      </motion.button>
    </motion.div>
  );
};
