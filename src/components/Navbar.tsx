import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, FileText, Sparkles, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface Props {
  onToggleDesignSystem?: () => void;
  showDesignSystem?: boolean;
}

export const Navbar: React.FC<Props> = ({ onToggleDesignSystem, showDesignSystem }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('about');

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Terminal', href: '#terminal', id: 'terminal', badge: 'CLI' },
    { name: 'Deloitte', href: '#deloitte', id: 'deloitte', badge: 'Selected' },
    { name: 'Framework', href: '#framework', id: 'framework' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Leadership', href: '#leadership', id: 'leadership' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy: determine which section is currently active
      const sections = navLinks.map(l => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile navigation menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-bg-main/85 backdrop-blur-md border-b border-border-subtle shadow-lg' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl bg-bg-card border border-border-subtle group-hover:border-accent-primary transition-colors flex items-center justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-accent-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="font-heading font-black text-silver-metallic text-base tracking-wider">SK</span>
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-accent-primary shadow-[0_0_6px_rgba(179,38,53,0.6)]" />
            </motion.div>
            <div>
              <span className="font-heading font-bold text-text-primary text-base tracking-tight block group-hover:text-silver-metallic transition-colors">
                Swaraj Khadalkar
              </span>
              <span className="text-[11px] font-mono text-text-muted block -mt-0.5">
                Aspiring Product Manager
              </span>
            </div>
          </a>

          {/* Desktop Navigation with Animated Active-Section Indicator */}
          <nav className="hidden lg:flex items-center gap-1 relative bg-bg-card/40 p-1 rounded-xl border border-border-subtle/50 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id && !showDesignSystem;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors relative flex items-center gap-1.5 ${
                    isActive ? 'text-text-primary font-semibold' : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {/* Animated Active Pill Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="navActivePill"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-accent-primary/15 border border-accent-primary/30 rounded-lg -z-10 shadow-sm"
                    />
                  )}

                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.2 rounded text-[10px] font-mono font-bold bg-accent-secondary/15 text-accent-secondary border border-accent-secondary/30">
                      {link.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {onToggleDesignSystem && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onToggleDesignSystem}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-text-secondary border border-border-subtle hover:border-accent-primary hover:text-accent-primary transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Toggle Design System Specification Preview"
              >
                <Sparkles className="w-3.5 h-3.5 text-accent-primary" />
                <span>{showDesignSystem ? 'View Full Site' : 'Design Tokens'}</span>
              </motion.button>
            )}

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={personalInfo.resumeUrl}
              download="Swaraj_Khadalkar_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-text-primary bg-bg-card border border-border-subtle hover:border-accent-primary hover:text-accent-primary transition-all cursor-pointer shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-accent-primary" />
              <span>Resume</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-accent-primary hover:bg-accent-hover transition-all shadow-card-glow cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>

          {/* Mobile & Tablet Hamburger Button (Available on < 1024px) */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-bg-card border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent-primary/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary/40 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-accent-primary" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-bg-card/98 backdrop-blur-2xl border-b border-border-subtle px-4 pt-3 pb-6 space-y-3 overflow-hidden shadow-2xl max-h-[calc(100vh-4.5rem)] overflow-y-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between min-h-[44px] ${
                    activeSection === link.id
                      ? 'bg-accent-primary/15 text-accent-primary border border-accent-primary/30 font-semibold'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[10px] font-mono font-bold text-accent-secondary bg-accent-secondary/15 border border-accent-secondary/30 px-1.5 py-0.5 rounded">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-border-subtle/60 flex flex-col gap-2">
              <a
                href={personalInfo.resumeUrl}
                download="Swaraj_Khadalkar_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl text-xs font-semibold text-center text-text-primary bg-bg-secondary border border-border-subtle flex items-center justify-center gap-2 min-h-[44px]"
              >
                <FileText className="w-4 h-4 text-accent-primary" />
                <span>Download Verified Resume</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl text-xs font-semibold text-center text-white bg-accent-primary hover:bg-accent-hover flex items-center justify-center gap-1.5 min-h-[44px] shadow-card-glow"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              {onToggleDesignSystem && (
                <button
                  onClick={() => {
                    onToggleDesignSystem();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2.5 rounded-xl text-xs font-mono text-center text-accent-primary bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center gap-1.5 min-h-[40px] cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{showDesignSystem ? 'Exit Design System' : 'View Design System Tokens'}</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
