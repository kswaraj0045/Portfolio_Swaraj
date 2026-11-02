import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { 
  ArrowRight, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  Award, 
  TrendingUp, 
  Activity, 
  Layers, 
  Compass, 
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { SwarajExperience } from './SwarajExperience';
import swarajPhoto from '../assets/swaraj.jpeg';

export const HeroSection: React.FC = () => {
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
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Background radial ambient lights with subtle motion */}
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
      <div className="absolute inset-0 grid-pattern opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Brand & Hero Name */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Executive Profile Introduction Card: Portrait & Badges */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 pb-1"
            >
              {/* Premium Framed Portrait */}
              <div className="relative group shrink-0">
                {/* Ambient Soft Glow Behind Frame */}
                <div className="absolute -inset-1 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-accent-primary/25 via-border-silver/20 to-transparent blur-md opacity-40 group-hover:opacity-85 transition-opacity duration-500 pointer-events-none" />

                {/* Outer Glass Card Frame with Silver Border and Crimson Corner Accent */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl sm:rounded-3xl p-1 sm:p-1.5 bg-gradient-to-b from-[#202329] via-[#17191D] to-[#090A0C] border-2 border-border-silver/50 group-hover:border-accent-primary/70 transition-all duration-300 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.8),0_0_20px_-2px_rgba(179,38,53,0.18)] group-hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.9),0_0_28px_-2px_rgba(179,38,53,0.3)]">
                  
                  {/* Photo Container */}
                  <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative bg-[#090A0C]">
                    <img 
                      src={swarajPhoto} 
                      alt="Swaraj Khadalkar" 
                      className="w-full h-full object-cover object-[center_15%] transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="eager"
                    />
                    
                    {/* Subtle Crimson Corner Light Sweep Accent */}
                    <div className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-bl from-accent-primary/40 to-transparent pointer-events-none rounded-tr-xl sm:rounded-tr-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Subtle Bottom Ambient Gradient for Depth */}
                    <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#090A0C]/60 to-transparent pointer-events-none" />
                  </div>

                  {/* Restrained Crimson Status Beacon */}
                  <div className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-[#17191D] border border-border-silver/50 shadow-md flex items-center gap-1.5 group-hover:border-accent-primary/60 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-accent-primary shadow-[0_0_8px_#B32635] animate-pulse" />
                    <span className="text-[10px] font-mono font-bold text-silver-metallic uppercase tracking-wider">Online</span>
                  </div>
                </div>
              </div>

              {/* Badges & Identity Tagline alongside Portrait */}
              <div className="flex-1 space-y-3 text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-accent-primary bg-accent-primary/10 border border-accent-primary/25 backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>PRODUCT THINKER | TECHNOLOGY ENTHUSIAST</span>
                  </div>

                  {/* Deloitte Highlight Element */}
                  <motion.a 
                    href="#deloitte"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold text-silver-metallic bg-bg-elevated border border-border-silver/40 shadow-silver-soft backdrop-blur-md hover:bg-bg-card transition-all cursor-pointer group"
                    title="View campus selection milestone details"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
                    <span className="tracking-wide font-bold">SELECTED AT DELOITTE</span>
                    <span className="text-border-subtle hidden sm:inline">•</span>
                    <span className="text-text-primary hidden sm:inline font-medium">Incoming Analyst</span>
                    <ArrowRight className="w-3.5 h-3.5 text-accent-primary group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>

                <div className="text-xs font-mono text-text-muted flex items-center justify-center sm:justify-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-silver-metallic/60" />
                  <span>Computer Engineering Senior • MIT AOE Pune</span>
                </div>
              </div>
            </motion.div>

            {/* The Most Prominent Landing Element: THE NAME */}
            <div className="pt-2">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="font-heading font-black tracking-tight leading-[0.98] select-none"
              >
                {/* First Name */}
                <div className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl flex flex-wrap overflow-hidden">
                  {firstName.split("").map((char, index) => (
                    <motion.span
                      key={`first-${index}`}
                      variants={letterVariants}
                      className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-[#F5F5F5] via-[#EAEAEA] to-[#D4D4D8] drop-shadow-[0_2px_12px_rgba(245,245,245,0.1)]"
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>

                {/* Last Name */}
                <div className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl flex flex-wrap overflow-hidden mt-1 sm:mt-2">
                  {lastName.split("").map((char, index) => (
                    <motion.span
                      key={`last-${index}`}
                      variants={letterVariants}
                      className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F5] via-[#C5C8CE] to-[#A4A7AE] drop-shadow-[0_2px_16px_rgba(197,200,206,0.2)]"
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

            {/* Professional Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
              className="space-y-3"
            >
              <p className="text-sm sm:text-lg md:text-xl font-mono text-silver-metallic font-medium tracking-tight break-words">
                Aspiring Product Thinker <span className="text-accent-primary">|</span> Technology Enthusiast <span className="text-accent-primary">|</span> Data-Driven Problem Solver
              </p>

              {/* Deloitte Prominent Sub-Card (Mobile & Desktop reinforcement) */}
              <div className="p-3 sm:p-3.5 rounded-2xl bg-bg-elevated border border-border-silver/30 shadow-silver-soft flex flex-col sm:flex-row sm:items-center justify-between gap-3 max-w-xl">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-accent-primary/15 border border-accent-primary/30 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-accent-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-silver-metallic uppercase tracking-wide">
                        SELECTED AT DELOITTE
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                    </div>
                    <div className="text-xs text-text-muted font-mono">
                      Incoming Analyst <span className="text-text-muted/80">• Campus Placement Selection</span>
                    </div>
                  </div>
                </div>

                <a 
                  href="#deloitte" 
                  className="text-xs font-mono font-semibold text-silver-metallic hover:text-white inline-flex items-center gap-1 self-start sm:self-center shrink-0 transition-colors"
                >
                  <span>Milestone Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-accent-primary" />
                </a>
              </div>

              {/* Narrative Description */}
              <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl font-normal pt-1">
                I'm Swaraj, a final-year Computer Engineering student passionate about understanding user problems, connecting technology with business needs, and building meaningful digital experiences.
              </p>
            </motion.div>

            {/* CTAs (Mobile Ergonomics with min 44px touch targets) */}
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
                href="#framework"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-text-primary bg-bg-card border border-border-silver/40 hover:border-silver-metallic hover:text-white hover:bg-bg-elevated transition-all cursor-pointer min-h-[44px]"
              >
                <Compass className="w-4 h-4 text-silver-metallic" />
                <span>My Product Journey</span>
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

            {/* Social & Contact Direct Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.95 }}
              className="pt-4 flex items-center gap-6 text-sm text-text-secondary"
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

          {/* Right Column: THE SWARAJ EXPERIENCE – Interactive Digital Identity */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            >
              <SwarajExperience />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
