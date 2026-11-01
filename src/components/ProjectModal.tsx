import React, { useEffect } from 'react';
import { Project } from '../types';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb, 
  Layers, 
  Compass, 
  Activity, 
  TrendingUp,
  Cpu
} from 'lucide-react';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<Props> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-bg-main/80 backdrop-blur-md overflow-y-auto cursor-pointer"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-bg-card border border-border-subtle rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col my-auto cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-6 border-b border-border-subtle flex items-center justify-between sticky top-0 bg-bg-card/95 backdrop-blur-md z-10 gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium text-accent-primary bg-accent-primary/10 border border-accent-primary/25">
              {project.category}
            </span>
            <span className="text-[11px] sm:text-xs font-mono text-text-muted">
              Role: <strong className="text-text-primary">{project.role}</strong>
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-bg-secondary text-text-secondary hover:text-text-primary hover:bg-border-subtle transition-colors cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center shrink-0"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-8 overflow-y-auto space-y-6 sm:space-y-8">
          
          {/* Title & Tagline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-text-primary">
              {project.title}
            </h2>
            <p className="text-base text-text-secondary mt-2 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((m, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-bg-main/80 border border-border-subtle">
                <div className="text-[10px] font-mono text-text-muted uppercase tracking-wider">{m.label}</div>
                <div className="text-lg font-bold font-mono text-text-primary mt-0.5">{m.value}</div>
                {m.detail && <div className="text-[11px] text-text-secondary mt-0.5">{m.detail}</div>}
              </div>
            ))}
          </div>

          {/* Problem & Solution Dual Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/20 space-y-3">
              <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-semibold uppercase">
                <AlertCircle className="w-4 h-4" />
                <span>The Problem Statement</span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold uppercase">
                <Lightbulb className="w-4 h-4" />
                <span>The Engineered Solution</span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Product Features */}
          <div className="space-y-3">
            <h3 className="text-base font-bold font-heading text-text-primary flex items-center gap-2">
              <Layers className="w-4 h-4 text-accent-primary" />
              <span>Verified Features & Capabilities</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, i) => (
                <div key={i} className="p-3 rounded-xl bg-bg-main/60 border border-border-subtle flex items-start gap-2.5 text-xs text-text-secondary leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Architecture Highlights */}
          <div className="space-y-3">
            <h3 className="text-base font-bold font-heading text-text-primary flex items-center gap-2">
              <Cpu className="w-4 h-4 text-accent-secondary" />
              <span>Implementation & Architecture Details</span>
            </h3>
            <ul className="space-y-2">
              {project.architectureHighlights.map((arch, i) => (
                <li key={i} className="text-xs sm:text-sm text-text-secondary flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary shrink-0 mt-2" />
                  <span>{arch}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Management Relevance */}
          <div className="p-5 rounded-2xl bg-accent-primary/5 border border-accent-primary/20 space-y-2">
            <div className="flex items-center gap-2 text-accent-primary font-mono text-xs font-semibold uppercase">
              <Compass className="w-4 h-4" />
              <span>Product Management Relevance</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              {project.productRelevance}
            </p>
          </div>

          {/* Full Tech Stack */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-text-muted uppercase tracking-wider">
              Technology Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-bg-secondary text-text-primary border border-border-subtle"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-border-subtle bg-bg-secondary/40 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="text-xs text-text-muted font-mono text-center sm:text-left">
            Direct GitHub & Deployment Verification
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-accent-primary hover:bg-accent-hover transition-colors shadow-card-glow min-h-[44px]"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-text-primary bg-bg-card border border-border-subtle hover:border-silver-metallic hover:text-white transition-colors min-h-[44px]"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Repository</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

