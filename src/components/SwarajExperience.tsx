import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  Lightbulb, 
  Terminal, 
  TrendingUp, 
  BarChart3, 
  Users, 
  Sparkles, 
  Compass,
  Layers,
  ArrowRight
} from 'lucide-react';

interface Dimension {
  id: string;
  number: string;
  title: string;
  shortLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  color: string;
  glowColor: string;
  // Precise percentage coordinates inside canvas
  x: number;
  y: number;
}

export const SwarajExperience: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedDimensionId, setSelectedDimensionId] = useState<string>('problem-solving');
  const [hoveredDimensionId, setHoveredDimensionId] = useState<string | null>(null);

  const activeDimensionId = hoveredDimensionId || selectedDimensionId;

  // Center coordinate of canvas
  const centerX = 50;
  const centerY = 46;

  // Symmetrically arranged 6 dimensions equidistant from center (r = 34%)
  const dimensions: Dimension[] = [
    {
      id: 'product-thinking',
      number: '01',
      title: 'PRODUCT THINKING',
      shortLabel: 'Product',
      icon: Lightbulb,
      description: 'I enjoy understanding user problems, identifying opportunities, and thinking about how technology can create meaningful solutions.',
      color: 'text-accent-primary',
      glowColor: '#3D8C87',
      x: 50,
      y: 12,
    },
    {
      id: 'technology',
      number: '02',
      title: 'TECHNOLOGY',
      shortLabel: 'Technology',
      icon: Terminal,
      description: 'I enjoy exploring software development, emerging technologies, and building practical digital solutions.',
      color: 'text-accent-primary',
      glowColor: '#3D8C87',
      x: 80,
      y: 28,
    },
    {
      id: 'business-strategy',
      number: '03',
      title: 'BUSINESS STRATEGY',
      shortLabel: 'Strategy',
      icon: TrendingUp,
      description: 'I am interested in connecting technology with business objectives and understanding how products create value.',
      color: 'text-accent-secondary',
      glowColor: '#D6B77A',
      x: 80,
      y: 64,
    },
    {
      id: 'data-analytics',
      number: '04',
      title: 'DATA & ANALYTICS',
      shortLabel: 'Data & Analytics',
      icon: BarChart3,
      description: 'I enjoy working with data, discovering insights, and using evidence to support better decisions.',
      color: 'text-accent-primary',
      glowColor: '#3D8C87',
      x: 50,
      y: 80,
    },
    {
      id: 'leadership',
      number: '05',
      title: 'LEADERSHIP',
      shortLabel: 'Leadership',
      icon: Users,
      description: 'I value collaboration, coordination, ownership, and working with teams toward shared goals.',
      color: 'text-text-primary',
      glowColor: '#B5C0CD',
      x: 20,
      y: 64,
    },
    {
      id: 'problem-solving',
      number: '06',
      title: 'PROBLEM SOLVING',
      shortLabel: 'Problem Solving',
      icon: Sparkles,
      description: 'I approach challenges by understanding the problem, exploring alternatives, and developing practical solutions.',
      color: 'text-accent-secondary',
      glowColor: '#D6B77A',
      x: 20,
      y: 28,
    },
  ];

  const activeDimension = dimensions.find((d) => d.id === activeDimensionId) || dimensions[0];
  const ActiveIcon = activeDimension.icon;

  // Background floating ambient particles
  const particles = [
    { x: '25%', y: '16%', size: 2.5, delay: 0 },
    { x: '75%', y: '18%', size: 3, delay: 1.2 },
    { x: '88%', y: '48%', size: 2, delay: 2.5 },
    { x: '12%', y: '46%', size: 2.5, delay: 0.8 },
    { x: '35%', y: '78%', size: 3, delay: 1.8 },
    { x: '66%', y: '75%', size: 2, delay: 3.1 },
  ];

  return (
    <div className="relative mx-auto max-w-lg lg:max-w-none select-none">
      
      {/* Outer Card with Glassmorphism, Deep Navy Base and Subtle Micro-Border */}
      <div className="glass-card p-4 sm:p-7 rounded-3xl relative overflow-hidden border border-border-subtle bg-bg-card/90 shadow-2xl backdrop-blur-2xl">
        
        {/* Ambient Gradient Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent-secondary/10 rounded-full blur-[90px] pointer-events-none" />

        {/* Top Header */}
        <div className="flex items-center justify-between pb-3.5 mb-2 border-b border-border-subtle/70 relative z-10">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-accent-primary shadow-sm animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-text-primary">
              THE SWARAJ EXPERIENCE
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono text-accent-primary bg-accent-primary/10 border border-accent-primary/25">
            <Compass className="w-3 h-3 text-accent-primary" />
            <span>Interactive Identity</span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* INTERACTIVE DIGITAL IDENTITY VISUALIZATION CANVAS */}
        {/* ========================================================= */}
        <div className="relative h-[360px] sm:h-[390px] w-full overflow-hidden my-1">
          
          {/* Subtle Ambient Micro-Particles */}
          {!shouldReduceMotion && particles.map((p, idx) => (
            <motion.div
              key={`particle-${idx}`}
              animate={{
                y: [0, -8, 0],
                opacity: [0.25, 0.75, 0.25],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                delay: p.delay,
                ease: "easeInOut"
              }}
              style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
              className="absolute rounded-full bg-slate-400/40 pointer-events-none"
            />
          ))}

          {/* Multiple Concentric Orbital Rings (Centered at 50%, 46%) */}
          <div 
            className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ left: `${centerX}%`, top: `${centerY}%` }}
          >
            {/* Outer Subtle Continuous Rotating Orbital Ring (36s linear) */}
            <motion.div
              animate={shouldReduceMotion ? {} : { rotate: 360 }}
              transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
              className="w-[280px] h-[280px] sm:w-[310px] sm:h-[310px] rounded-full border border-dashed border-slate-600/35 flex items-center justify-center relative"
            >
              {/* Star point on outer orbit */}
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 absolute -top-0.5 left-1/2 -translate-x-1/2" />
            </motion.div>
            
            {/* Middle Counter-Rotating Orbital Ring (26s linear) with Satellite Node */}
            <motion.div
              animate={shouldReduceMotion ? {} : { rotate: -360 }}
              transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 m-auto w-[210px] h-[210px] sm:w-[230px] sm:h-[230px] rounded-full border border-slate-500/30"
            >
              {/* Satellite Node traversing orbit */}
              <div className="w-2 h-2 rounded-full bg-accent-secondary shadow-sm absolute -top-1 left-1/2 -translate-x-1/2" />
            </motion.div>

            {/* Inner Organic Breathing Glow Ring */}
            <motion.div
              animate={shouldReduceMotion ? {} : { scale: [1, 1.08, 1], opacity: [0.35, 0.65, 0.35] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 m-auto w-[145px] h-[145px] sm:w-[155px] sm:h-[155px] rounded-full border border-accent-primary/40 shadow-sm"
            />
          </div>

          {/* Animated Curved Connecting Paths from Center (50%, 46%) to Nodes */}
          <svg 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none" 
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
          >
            {dimensions.map((dim) => {
              const isActive = dim.id === activeDimensionId;
              const startX = centerX;
              const startY = centerY;
              const endX = dim.x;
              const endY = dim.y;

              // Quadratic bezier curved path bending gently
              const ctrlX = (startX + endX) / 2 + (endY - startY) * 0.12;
              const ctrlY = (startY + endY) / 2 - (endX - startX) * 0.12;
              const pathD = `M ${startX} ${startY} Q ${ctrlX} ${ctrlY} ${endX} ${endY}`;

              return (
                <g key={`curved-path-${dim.id}`}>
                  {/* Base Curved Vector */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={isActive ? dim.glowColor : 'rgba(52, 70, 91, 0.45)'}
                    strokeWidth={isActive ? '1.8' : '0.8'}
                    strokeDasharray={isActive ? 'none' : '2 2'}
                    vectorEffect="non-scaling-stroke"
                    className="transition-colors duration-300"
                  />
                </g>
              );
            })}
          </svg>

          {/* =================================================== */}
          {/* UPGRADED CENTRAL IDENTITY CORE (Perfect Center at 50%, 46%) */}
          {/* =================================================== */}
          <div 
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto"
            style={{ left: `${centerX}%`, top: `${centerY}%` }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              whileHover={{ scale: 1.05 }}
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-b from-[#25364A] via-[#1C2B40] to-[#101B2D] border-2 border-accent-primary shadow-[0_4px_24px_-4px_rgba(61,140,135,0.35)] flex flex-col items-center justify-center cursor-pointer group relative"
            >
              {/* Slow Breathing Radial Glow Pulse */}
              <motion.div
                animate={shouldReduceMotion ? {} : { scale: [1, 1.18, 1], opacity: [0.15, 0.35, 0.15] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-primary/20 via-slate-500/10 to-accent-secondary/15 pointer-events-none"
              />

              {/* Central SK Monogram */}
              <span className="font-heading font-black text-2xl sm:text-3xl tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-[#F1F3F5] via-[#E2E8F0] to-accent-primary drop-shadow-[0_2px_10px_rgba(61,140,135,0.25)]">
                SK
              </span>

              {/* Full Name */}
              <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-text-primary text-center uppercase mt-0.5 px-2">
                SWARAJ KHADALKAR
              </span>

              {/* Core Philosophy Subtitle */}
              <span className="text-[8px] sm:text-[8.5px] font-mono text-accent-secondary tracking-wider text-center font-bold mt-0.5">
                THINK • BUILD • LEAD
              </span>
            </motion.div>
          </div>

          {/* =================================================== */}
          {/* SIX SYMMETRICAL PROFESSIONAL DIMENSION NODES */}
          {/* =================================================== */}
          {dimensions.map((dim) => {
            const isActive = dim.id === activeDimensionId;
            const Icon = dim.icon;

            return (
              <div
                key={dim.id}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto"
                style={{ left: `${dim.x}%`, top: `${dim.y}%` }}
              >
                <motion.button
                  onClick={() => setSelectedDimensionId(dim.id)}
                  onMouseEnter={() => setHoveredDimensionId(dim.id)}
                  onMouseLeave={() => setHoveredDimensionId(null)}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center group cursor-pointer focus:outline-none"
                >
                  {/* Node Disc with Geometric Border & Glow */}
                  <div 
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300 relative shadow-md ${
                      isActive 
                        ? 'bg-bg-card border-2 shadow-[0_0_22px] scale-110' 
                        : 'bg-bg-main/90 border border-border-subtle hover:border-accent-primary/60 text-text-secondary'
                    }`}
                    style={isActive ? { borderColor: dim.glowColor, boxShadow: `0 0 20px ${dim.glowColor}55` } : {}}
                  >
                    <Icon className={`w-4 h-4 sm:w-4.5 sm:h-4.5 ${isActive ? dim.color : 'text-text-muted group-hover:text-text-primary'}`} />
                    
                    {/* Glowing Pulse Indicator on Active Node */}
                    {isActive && (
                      <span 
                        className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
                        style={{ backgroundColor: dim.glowColor, boxShadow: `0 0 8px ${dim.glowColor}` }}
                      />
                    )}
                  </div>

                  {/* Node Label (Crisp Monospace, Guaranteed Zero Overlap) */}
                  <span className={`text-[9px] sm:text-[10px] font-mono font-bold tracking-tight mt-1.5 px-2 py-0.5 rounded transition-colors whitespace-nowrap ${
                    isActive 
                      ? 'text-text-primary bg-bg-card/95 border border-border-subtle shadow-md' 
                      : 'text-text-muted group-hover:text-text-secondary'
                  }`}>
                    {dim.shortLabel}
                  </span>
                </motion.button>
              </div>
            );
          })}

        </div>

        {/* ========================================================= */}
        {/* MOBILE TOUCH RIBBON (Smooth Tap-to-Select) */}
        {/* ========================================================= */}
        <div className="flex sm:hidden overflow-x-auto gap-1.5 py-2 px-1 mb-2 no-scrollbar">
          {dimensions.map((dim) => {
            const isActive = dim.id === activeDimensionId;
            const Icon = dim.icon;
            return (
              <button
                key={`mobile-${dim.id}`}
                onClick={() => setSelectedDimensionId(dim.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-mono whitespace-nowrap border transition-all ${
                  isActive
                    ? 'bg-accent-primary/15 border-accent-primary text-text-primary font-bold'
                    : 'bg-bg-main border-border-subtle text-text-muted'
                }`}
              >
                <Icon className={`w-3 h-3 ${dim.color}`} />
                <span>{dim.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* REDESIGNED ELEGANT INFORMATION AREA (Clean & Uncluttered) */}
        {/* ========================================================= */}
        <div className="mt-2 min-h-[96px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDimension.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="p-4 rounded-2xl bg-bg-card border border-border-subtle relative overflow-hidden shadow-lg"
            >
              {/* Header: Dimension Number & Title with Icon Accent */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-bg-card border border-border-subtle flex items-center justify-center">
                    <ActiveIcon className={`w-3 h-3 ${activeDimension.color}`} />
                  </div>
                  <span className={`text-xs font-mono font-bold tracking-wider ${activeDimension.color}`}>
                    {activeDimension.number} / {activeDimension.title}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-text-muted">
                  Mindset Dimension
                </span>
              </div>

              {/* Exact Verified Dimension Narrative */}
              <p className="text-xs sm:text-[13px] text-text-secondary leading-relaxed font-normal">
                "{activeDimension.description}"
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ========================================================= */}
        {/* UNDERSTATED ELEGANT SIGNATURE */}
        {/* ========================================================= */}
        <div className="mt-3.5 pt-2.5 border-t border-border-subtle/50 flex items-center justify-center">
          <span className="text-[10px] font-mono tracking-[0.25em] text-text-muted/70 uppercase">
            THINK DIFFERENTLY. BUILD MEANINGFULLY.
          </span>
        </div>

      </div>
    </div>
  );
};
