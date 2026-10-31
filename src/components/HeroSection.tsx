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
        animate={shouldReduceMotion ? {} : { scale: [1, 1.08, 1], opacity: [0.12, 0.18, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-48 w-[500px] h-[500px] bg-accent-primary/15 rounded-full blur-[140px] pointer-events-none" 
      />
      <motion.div 
        animate={shouldReduceMotion ? {} : { scale: [1, 1.1, 1], opacity: [0.1, 0.16, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 -right-48 w-[500px] h-[500px] bg-accent-secondary/15 rounded-full blur-[140px] pointer-events-none" 
      />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent-achievement/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Brand & Hero Name */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Badges: Product Thinker & Deloitte Incoming Analyst Recognition */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-3"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-accent-primary bg-accent-primary/10 border border-accent-primary/25 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PRODUCT THINKER | TECHNOLOGY ENTHUSIAST</span>
              </div>

              {/* Deloitte Highlight Element */}
              <motion.a 
                href="#deloitte"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold text-accent-achievement bg-accent-achievement/10 border border-accent-achievement/35 shadow-deloitte-glow backdrop-blur-md hover:bg-accent-achievement/20 transition-all cursor-pointer group"
                title="View campus selection milestone details"
              >
                <span className="w-2 h-2 rounded-full bg-accent-achievement shadow-[0_0_8px_#a3e635] animate-pulse" />
                <span className="tracking-wide font-bold">SELECTED AT DELOITTE</span>
                <span className="text-border-subtle hidden sm:inline">•</span>
                <span className="text-text-primary hidden sm:inline font-medium">Incoming Analyst</span>
                <ArrowRight className="w-3.5 h-3.5 text-accent-achievement group-hover:translate-x-1 transition-transform" />
              </motion.a>
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
                      className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-300 drop-shadow-[0_4px_24px_rgba(255,255,255,0.1)]"
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
                      className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-sky-300 to-accent-secondary drop-shadow-[0_4px_30px_rgba(56,189,248,0.25)]"
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Professional Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
              className="space-y-3"
            >
              <p className="text-sm sm:text-lg md:text-xl font-mono text-accent-primary font-medium tracking-tight break-words">
                Aspiring Product Thinker | Technology Enthusiast | Data-Driven Problem Solver
              </p>

              {/* Deloitte Prominent Sub-Card (Mobile & Desktop reinforcement) */}
              <div className="p-3 sm:p-3.5 rounded-2xl bg-bg-card/90 border border-accent-achievement/30 shadow-deloitte-glow flex flex-col sm:flex-row sm:items-center justify-between gap-3 max-w-xl">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-accent-achievement/10 border border-accent-achievement/30 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-accent-achievement" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-accent-achievement uppercase tracking-wide">
                        SELECTED AT DELOITTE
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-achievement animate-pulse" />
                    </div>
                    <div className="text-xs text-text-secondary font-mono">
                      Incoming Analyst <span className="text-text-muted">• Campus Placement Selection</span>
                    </div>
                  </div>
                </div>

                <a 
                  href="#deloitte" 
                  className="text-xs font-mono font-semibold text-accent-achievement hover:text-lime-300 inline-flex items-center gap-1 self-start sm:self-center shrink-0"
                >
                  <span>Milestone Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-bg-main bg-accent-primary hover:bg-sky-400 transition-all shadow-card-glow cursor-pointer group min-h-[44px]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#framework"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-text-primary bg-bg-card border border-border-subtle hover:border-accent-primary hover:bg-bg-secondary transition-all cursor-pointer min-h-[44px]"
              >
                <Compass className="w-4 h-4 text-accent-primary" />
                <span>My Product Journey</span>
              </motion.a>

              <motion.a
                href={personalInfo.resumeUrl}
                download="Swaraj_Khadalkar_Resume.pdf"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-text-secondary hover:text-text-primary bg-bg-secondary/80 border border-border-subtle hover:border-text-secondary transition-all cursor-pointer min-h-[44px]"
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
