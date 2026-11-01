import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Sparkles, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border-subtle bg-bg-secondary/40 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-border-subtle/60 items-center">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-bg-card border border-border-subtle flex items-center justify-center font-heading font-black text-accent-primary text-xs">
                SK
              </div>
              <span className="font-heading font-bold text-text-primary text-lg">
                {personalInfo.name}
              </span>
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono text-accent-primary bg-accent-primary/10 border border-accent-primary/20">
                {personalInfo.role}
              </span>
            </div>

            <p className="text-sm font-mono text-text-muted italic pt-1">
              "{personalInfo.tagline}"
            </p>
            <p className="text-xs text-text-secondary">
              "Curious by nature. Analytical by mindset. Product-driven by ambition."
            </p>
          </div>

          {/* Quick Links & Socials */}
          <div className="md:col-span-6 flex flex-wrap items-center md:justify-end gap-6">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noreferrer" 
              className="text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1.5 text-xs font-mono"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="text-text-secondary hover:text-accent-primary transition-colors flex items-center gap-1.5 text-xs font-mono"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a 
              href={`mailto:${personalInfo.email}`} 
              className="text-text-secondary hover:text-accent-secondary transition-colors flex items-center gap-1.5 text-xs font-mono"
            >
              <Mail className="w-4 h-4" />
              <span>{personalInfo.email}</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-bg-card border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent-primary transition-all cursor-pointer"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <div>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-accent-primary" />
            <span>Privacy Compliant • Verified Repositories & Placement Milestone</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

