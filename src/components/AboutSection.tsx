import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Lightbulb, BarChart3, Terminal, CheckCircle2, ArrowRight } from 'lucide-react';
import { personalInfo, aboutPillars } from '../data/portfolioData';
import { MotionReveal } from './MotionReveal';

export const AboutSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const getIcon = (id: string) => {
    switch (id) {
      case 'product-thinking':
        return <Lightbulb className="w-6 h-6 text-silver-metallic" />;
      case 'business-data':
        return <BarChart3 className="w-6 h-6 text-silver-metallic" />;
      case 'technology':
        return <Terminal className="w-6 h-6 text-silver-metallic" />;
      default:
        return <Lightbulb className="w-6 h-6 text-silver-metallic" />;
    }
  };

  return (
    <section id="about" className="py-14 sm:py-20 md:py-28 relative border-t border-border-subtle bg-bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Motion Reveal */}
        <MotionReveal className="max-w-3xl mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-silver-metallic bg-bg-elevated border border-border-silver/30 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-silver-metallic" />
            <span>ABOUT ME & STRATEGIC PILLARS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-heading text-text-primary tracking-tight">
            {personalInfo.aboutHeadline}
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed font-normal">
            {personalInfo.aboutDescription}
          </p>
        </MotionReveal>

        {/* The 3 Strategic Pillars Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {aboutPillars.map((pillar, index) => (
            <motion.div 
              key={pillar.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] as const }}
              whileHover={{ y: -6 }}
              className="glass-card p-5 sm:p-7 md:p-8 rounded-2xl flex flex-col justify-between group hover:border-silver-metallic/40 hover:shadow-silver-soft transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle top border color glow */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-silver-metallic/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="w-12 h-12 rounded-xl bg-bg-main border border-border-subtle flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                  {getIcon(pillar.id)}
                </div>

                <h3 className="text-xl font-semibold font-heading text-text-primary mb-2 tracking-tight">
                  {pillar.title}
                </h3>

                <p className="text-xs font-mono font-medium text-silver-steel mb-4">
                  {pillar.subtitle}
                </p>

                <p className="text-sm text-text-secondary leading-relaxed mb-6 font-normal">
                  {pillar.description}
                </p>
              </div>

              {/* Skills / Competency Chips */}
              <div className="pt-4 border-t border-border-subtle/60">
                <div className="text-[11px] font-mono font-medium tracking-wider text-text-muted mb-2.5">
                  Core Competencies
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {pillar.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-normal bg-bg-main/80 text-text-secondary border border-border-subtle group-hover:border-border-subtle/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout: Professional Philosophy */}
        <MotionReveal delay={0.25} className="mt-8 sm:mt-12 p-5 sm:p-6 rounded-2xl bg-bg-card border border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
          <div className="flex items-start sm:items-center gap-3.5 sm:gap-4">
            <div className="w-10 h-10 rounded-full bg-silver-metallic/10 border border-silver-metallic/30 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
              <CheckCircle2 className="w-5 h-5 text-silver-metallic" />
            </div>
            <div>
              <div className="text-[11px] sm:text-xs font-mono font-medium text-text-muted">OPERATIONAL PHILOSOPHY</div>
              <div className="text-sm sm:text-base font-semibold font-heading text-text-primary">
                "{personalInfo.tagline}"
              </div>
            </div>
          </div>
          <a
            href="#framework"
            className="text-xs font-semibold text-silver-metallic hover:text-white inline-flex items-center gap-1.5 shrink-0 group transition-colors pt-1 sm:pt-0"
          >
            <span>See how I turn problems into products</span>
            <ArrowRight className="w-3.5 h-3.5 text-silver-metallic group-hover:translate-x-1 transition-transform" />
          </a>
        </MotionReveal>

      </div>
    </section>
  );
};
