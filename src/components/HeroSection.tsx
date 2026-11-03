import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { 
  ArrowRight, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles,
  Award,
  Compass
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import swarajPhoto from '../assets/swaraj-portrait.jpg';

interface Props {
  onNavigate?: (path: string) => void;
}

export const HeroSection: React.FC<Props> = ({ onNavigate }) => {
  const shouldReduceMotion = useReducedMotion();

  const firstName = "SWARAJ";
  const lastName = "KHADALKAR";

  // Staggered letter animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.035,
        delayChildren: 0.15,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 35,
      rotateX: shouldReduceMotion ? 0 : -45 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.21, 0.47, 0.32, 0.98] as const 
      } 
    },
  };

  return (
    <section id="hero" className="relative pt-24 pb-12 sm:pt-28 md:pt-32 md:pb-16 overflow-hidden">
      {/* Background ambient radial glow lights */}
      <motion.div 
        animate={shouldReduceMotion ? {} : { scale: [1, 1.08, 1], opacity: [0.1, 0.16, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-48 w-[500px] h-[500px] bg-accent-primary/10 rounded-full blur-[140px] pointer-events-none" 
      />
      <motion.div 
        animate={shouldReduceMotion ? {} : { scale: [1, 1.1, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 -right-48 w-[500px] h-[500px] bg-accent-secondary/10 rounded-full blur-[140px] pointer-events-none" 
      />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent-secondary/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* CINEMATIC SPLIT-SCREEN HERO CONTAINER */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const }}
          className="rounded-3xl lg:rounded-[2.5rem] border border-border-silver/30 bg-gradient-to-b from-[#111317] via-[#0D0F12] to-[#090A0C] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.85),0_0_30px_-5px_rgba(179,38,53,0.12)] overflow-hidden relative"
        >
          {/* Subtle Inner Border Glow Effect */}
          <div className="absolute inset-0 rounded-3xl lg:rounded-[2.5rem] pointer-events-none border border-white/5" />

          {/* Split Screen Container: 48% Left / 52% Right */}
          <div className="flex flex-col md:flex-row items-stretch">
            
            {/* =================================================== */}
            {/* LEFT SIDE — PERSONAL IDENTITY (~48% width) */}
            {/* =================================================== */}
            <div className="w-full md:w-[48%] flex flex-col justify-between p-6 sm:p-8 md:p-8 lg:p-10 xl:p-12 z-10 relative space-y-8">
              
              <div className="space-y-6">
                {/* Small upper label with crimson decorative accent line */}
                <motion.div 
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                  className="flex items-center gap-3"
                >
                  <span className="h-[2px] w-8 sm:w-10 bg-gradient-to-r from-accent-primary to-accent-hover rounded-full shadow-[0_0_8px_#B32635]" />
                  <span className="text-xs font-mono font-medium tracking-wider text-silver-steel uppercase">
                    PORTFOLIO / THE DIGITAL SPACE
                  </span>
                </motion.div>

                {/* Main Heading: Dominant SWARAJ KHADALKAR Typography */}
                <div className="pt-1">
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="font-heading font-bold tracking-tight leading-[0.96] select-none"
                  >
                    {/* First Name */}
                    <div className="text-4xl sm:text-5xl md:text-[2.2rem] lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.6rem] flex flex-nowrap whitespace-nowrap shrink-0">
                      {firstName.split("").map((char, index) => (
                        <motion.span
                          key={`first-${index}`}
                          variants={letterVariants}
                          className="inline-block shrink-0 text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#EAEAEA] to-[#D4D4D8] drop-shadow-[0_2px_12px_rgba(255,255,255,0.08)]"
                        >
                          {char}
                        </motion.span>
                      ))}
                    </div>

                    {/* Last Name — Always a single unbroken word on laptop, PC, tablet, and mobile */}
                    <div className="text-4xl sm:text-5xl md:text-[2.2rem] lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.6rem] flex flex-nowrap whitespace-nowrap shrink-0 mt-1 sm:mt-2">
                      {lastName.split("").map((char, index) => (
                        <motion.span
                          key={`last-${index}`}
                          variants={letterVariants}
                          className="inline-block shrink-0 text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F5] via-[#C5C8CE] to-[#A4A7AE] drop-shadow-[0_2px_16px_rgba(197,200,206,0.18)]"
                        >
                          {char}
                        </motion.span>
                      ))}
                    </div>

                    {/* Subtle Crimson Signature Accent Underline */}
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                      className="h-1 w-24 sm:w-32 bg-gradient-to-r from-accent-primary to-accent-hover rounded-full mt-3 origin-left shadow-[0_0_12px_rgba(179,38,53,0.5)]"
                    />
                  </motion.div>
                </div>

                {/* Subtitle */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
                  className="space-y-3"
                >
                  <p className="text-base sm:text-lg md:text-xl font-heading font-medium text-silver-metallic tracking-normal">
                    Technology Enthusiast. Product Thinker. Data-Driven Problem Solver.
                  </p>

                  {/* Supporting description */}
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl font-normal font-sans">
                    Building meaningful digital experiences by connecting technology, data and business thinking.
                  </p>
                </motion.div>

                {/* CTAs & Functional Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
                >
                  <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-accent-primary hover:bg-accent-hover transition-all shadow-card-glow cursor-pointer group min-h-[44px]"
                  >
                    <span>Explore My Work</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.a>

                  <motion.a
                    href={personalInfo.resumeUrl}
                    download="Swaraj_Khadalkar_Resume.pdf"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-silver-steel hover:text-white bg-bg-card border border-border-silver/40 hover:border-silver-metallic transition-all cursor-pointer min-h-[44px]"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Download Resume</span>
                  </motion.a>
                </motion.div>
              </div>

              {/* Social Connect Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.95 }}
                className="pt-2 flex flex-wrap items-center gap-5 text-sm text-text-secondary"
              >
                <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Connect:</span>
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-1.5 hover:text-accent-primary transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-1.5 hover:text-accent-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="inline-flex items-center gap-1.5 hover:text-accent-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="font-mono text-xs">{personalInfo.email}</span>
                </a>
              </motion.div>

            </div>

            {/* =================================================== */}
            {/* RIGHT SIDE — PERSONAL PORTRAIT (~52% width) */}
            {/* =================================================== */}
            <div className="w-full md:w-[52%] relative h-[420px] sm:h-[500px] md:h-auto min-h-[420px] sm:min-h-[500px] md:min-h-[560px] lg:min-h-[620px] xl:min-h-[660px] overflow-hidden group">
              
              {/* Actual Personal Photograph */}
              <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#0D0F12]">
                <img
                  src={swarajPhoto}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/swaraj-portrait.jpg";
                  }}
                  alt="Swaraj Sanjay Khadalkar"
                  className="w-full h-full object-cover object-[center_15%] brightness-[0.98] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  loading="eager"
                />
              </div>

              {/* Seamless Left Edge Blend Gradient (into the dark left column) */}
              <div className="hidden md:block absolute inset-y-0 left-0 w-24 lg:w-36 xl:w-44 bg-gradient-to-r from-[#0D0F12] via-[#0D0F12]/60 to-transparent z-10 pointer-events-none" />

              {/* Bottom Edge Blend Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-32 sm:h-40 bg-gradient-to-t from-[#090A0C] via-[#090A0C]/70 to-transparent z-10 pointer-events-none" />

              {/* Top Edge Blend Gradient */}
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#111317]/60 to-transparent z-10 pointer-events-none" />

              {/* Cinematic Ambient Crimson & Silver Glow Overlays */}
              <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent-primary/12 rounded-full blur-[90px] pointer-events-none z-10" />
              <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent-secondary/10 rounded-full blur-[80px] pointer-events-none z-10" />

              {/* Interactive Soft Crimson Light Reflection on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_center,rgba(179,38,53,0.12),transparent_70%)] pointer-events-none z-10" />

              {/* Subtle Verified Indicator Badge in Bottom Right of Portrait */}
              <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7 z-20 px-3 py-1.5 rounded-full bg-bg-main/80 backdrop-blur-md border border-border-silver/40 shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-primary shadow-[0_0_8px_#B32635] animate-pulse" />
                <span className="text-[11px] font-mono font-medium text-silver-metallic uppercase tracking-wider">
                  Swaraj Khadalkar
                </span>
              </div>

            </div>

          </div>

          {/* ========================================================= */}
          {/* BOTTOM INFORMATION STRIP (Three Compact Information Blocks) */}
          {/* ========================================================= */}
          <div className="border-t border-border-silver/20 bg-bg-main/90 backdrop-blur-md relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-silver/15 p-4 sm:p-6 lg:px-12 lg:py-5">
              
              {/* Block 01 — EXPERIENCE */}
              <div className="p-3 sm:p-4 flex flex-col justify-center">
                <div className="text-[11px] sm:text-xs font-mono font-medium tracking-wider text-accent-primary uppercase flex items-center gap-2">
                  <span>01 — EXPERIENCE</span>
                </div>
                <div className="text-sm sm:text-base font-heading font-semibold text-text-primary mt-1">
                  Software Developer Intern
                </div>
              </div>

              {/* Block 02 — FOCUS */}
              <div className="p-3 sm:p-4 flex flex-col justify-center">
                <div className="text-[11px] sm:text-xs font-mono font-medium tracking-wider text-accent-primary uppercase flex items-center gap-2">
                  <span>02 — FOCUS</span>
                </div>
                <div className="text-sm sm:text-base font-heading font-semibold text-text-primary mt-1">
                  Technology &amp; Product Thinking
                </div>
              </div>

              {/* Block 03 — CAREER */}
              <div className="p-3 sm:p-4 flex flex-col justify-center">
                <div className="text-[11px] sm:text-xs font-mono font-medium tracking-wider text-[#86BC25] uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#86BC25] animate-pulse" />
                  <span>03 — CAREER</span>
                </div>
                <div className="text-sm sm:text-base font-heading font-semibold text-text-primary mt-1 flex items-center justify-between">
                  <span>Incoming Analyst at Deloitte USI</span>
                  <a 
                    href="/deloitte" 
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate('/deloitte');
                      }
                    }}
                    className="text-xs font-mono font-medium text-[#86BC25] hover:text-[#97D72B] transition-colors flex items-center gap-1 bg-[#86BC25]/10 px-2 py-1 rounded border border-[#86BC25]/30 hover:border-[#86BC25]"
                  >
                    <span>Discover USI</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
