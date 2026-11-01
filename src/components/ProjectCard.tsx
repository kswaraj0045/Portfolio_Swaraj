import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { Project } from '../types';
import { 
  ArrowRight, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Activity, 
  ShieldCheck, 
  TrendingUp, 
  Sparkles,
  BarChart2,
  Cpu
} from 'lucide-react';

interface Props {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<Props> = ({ project, onOpenDetails }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || window.innerWidth < 768) return;
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const getCategoryColor = (cat: Project['category']) => {
    switch (cat) {
      case 'Product & Analytics':
        return 'text-accent-primary bg-accent-primary/10 border-accent-primary/30';
      case 'Full-Stack SaaS':
        return 'text-accent-primary bg-accent-primary/10 border-accent-primary/30';
      case 'AI & Deep Learning':
        return 'text-accent-secondary bg-accent-secondary/10 border-accent-secondary/30';
      case 'Healthcare Systems':
        return 'text-accent-secondary bg-accent-secondary/10 border-accent-secondary/30';
      default:
        return 'text-text-secondary bg-bg-card border-border-subtle';
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: shouldReduceMotion ? 0 : rotateX,
        rotateY: shouldReduceMotion ? 0 : rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="glass-card p-5 sm:p-7 rounded-2xl flex flex-col justify-between group relative overflow-hidden bg-bg-card/80 border border-border-subtle hover:border-accent-primary/50 hover:shadow-card-glow transition-colors cursor-pointer"
      onClick={() => onOpenDetails(project)}
    >
      {/* Animated Subtle Ambient Radial Highlight on Hover */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      {/* Top Meta Bar */}
      <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium border ${getCategoryColor(project.category)}`}>
            {project.category}
          </span>
          <span className="text-[11px] font-mono text-text-muted flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
            <span>{project.status}</span>
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold font-heading text-text-primary group-hover:text-accent-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-sm text-text-secondary leading-relaxed mt-2.5 mb-5">
          {project.tagline}
        </p>

        {/* Highlight Metrics Grid with smooth hover scale */}
        <div className="grid grid-cols-2 gap-2.5 mb-5 p-3 rounded-xl bg-bg-main/60 border border-border-subtle group-hover:border-border-subtle/80 transition-colors">
          {project.metrics.slice(0, 2).map((m, i) => (
            <div key={i} className="text-left">
              <div className="text-[10px] font-mono text-text-muted uppercase truncate">{m.label}</div>
              <div className="text-sm font-bold font-mono text-text-primary truncate">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.slice(0, 4).map((tech) => (
            <span 
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-bg-secondary text-text-secondary border border-border-subtle group-hover:border-accent-primary/20 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-1.5 py-0.5 rounded text-[11px] font-mono text-text-muted bg-bg-secondary">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="pt-4 border-t border-border-subtle/60 flex items-center justify-between relative z-10" style={{ transform: 'translateZ(25px)' }}>
        <button
          onClick={() => onOpenDetails(project)}
          className="text-xs font-semibold text-accent-primary hover:text-sky-300 inline-flex items-center gap-1.5 cursor-pointer group/btn"
        >
          <span>Detailed Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform" />
        </button>

        <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-text-muted hover:text-accent-secondary transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
              title="Open Live Application"
              aria-label="Open Live Application"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="p-1.5 text-text-muted hover:text-text-primary transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
            title="View GitHub Repository"
            aria-label="View GitHub Repository"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>

    </motion.div>
  );
};
