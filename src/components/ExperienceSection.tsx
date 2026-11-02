import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Briefcase, Award, CheckCircle2, Building2, Calendar, MapPin, Sparkles } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="py-20 md:py-28 relative border-t border-border-subtle bg-bg-main overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-accent-primary bg-accent-primary/10 border border-accent-primary/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRAJECTORY & EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-text-primary tracking-tight">
            Professional Experience & Milestones.
          </h2>
          <p className="mt-3 text-base text-text-secondary leading-relaxed">
            Hands-on exposure combining software engineering internships, startup agile delivery, and competitive enterprise campus selection.
          </p>
        </div>

        {/* Experience Timeline Container */}
        <div className="space-y-8 relative">
          
          {/* Animated Timeline Spine (desktop & tablet) */}
          <div className="hidden md:block absolute left-4 top-6 bottom-6 w-0.5 bg-gradient-to-b from-accent-achievement via-accent-primary to-border-subtle" />

          {experienceData.map((exp, idx) => {
            const isDeloitte = exp.type === 'milestone';

            return (
              <motion.div 
                key={exp.id}
                tabIndex={0}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.15, ease: [0.21, 0.47, 0.32, 0.98] as const }}
                whileHover={shouldReduceMotion ? {} : { y: -6 }}
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 ease-out relative overflow-hidden md:ml-10 group outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/50 ${
                  isDeloitte 
                    ? 'deloitte-card border-accent-achievement/35 bg-bg-card/90 shadow-deloitte-glow hover:border-accent-achievement/60 hover:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.8),0_0_24px_-4px_rgba(197,200,206,0.14)] focus-within:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.8),0_0_24px_-4px_rgba(197,200,206,0.14)]' 
                    : 'glass-card border-border-subtle bg-bg-card/75 hover:border-accent-primary/60 focus-within:border-accent-primary/60 hover:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.8),0_0_24px_-4px_rgba(179,38,53,0.18)] focus-within:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.8),0_0_24px_-4px_rgba(179,38,53,0.18)]'
                }`}
              >
                {/* Soft radial glow inside the card on hover */}
                <div 
                  className={`absolute -inset-px rounded-3xl pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 ${
                    isDeloitte 
                      ? 'bg-[radial-gradient(circle_at_top_right,rgba(197,200,206,0.06),transparent_65%)]'
                      : 'bg-[radial-gradient(circle_at_top_right,rgba(179,38,53,0.09),transparent_65%)]'
                  }`} 
                />

                {/* Timeline node icon on the spine for desktop */}
                <div className={`hidden md:flex absolute -left-[49px] top-8 w-6 h-6 rounded-full border-2 items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                  isDeloitte 
                    ? 'bg-bg-main border-accent-achievement text-accent-achievement group-hover:border-silver-platinum' 
                    : 'bg-bg-main border-accent-primary text-accent-primary group-hover:border-accent-hover'
                }`}>
                  <span className={`w-2 h-2 rounded-full transition-transform duration-300 group-hover:scale-125 ${isDeloitte ? 'bg-accent-achievement animate-pulse' : 'bg-accent-primary'}`} />
                </div>

                <div className="relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-focus-within:translate-x-0.5 motion-reduce:group-hover:translate-x-0">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-2">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold transition-colors duration-300 ${
                          isDeloitte 
                            ? 'text-accent-achievement bg-accent-achievement/15 border border-accent-achievement/30 shadow-deloitte-glow' 
                            : 'text-accent-primary bg-accent-primary/10 border border-accent-primary/25 group-hover:border-accent-primary/50'
                        }`}>
                          {!isDeloitte && (
                            <Briefcase className="w-3.5 h-3.5 group-hover:scale-[1.08] group-hover:rotate-[4deg] transition-transform duration-300 motion-reduce:group-hover:scale-100 motion-reduce:group-hover:rotate-0" />
                          )}
                          <span>{exp.badge}</span>
                        </span>
                        <span className="text-xs font-mono text-text-muted flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 group-hover:text-text-secondary transition-colors duration-300" />
                          <span>{exp.location}</span>
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold font-heading text-text-primary group-hover:text-white transition-colors duration-300">
                        {exp.role} <span className="text-text-muted font-normal">at</span>{' '}
                        <span className={isDeloitte ? 'text-accent-achievement' : 'text-accent-primary group-hover:text-accent-hover transition-colors duration-300'}>
                          {exp.company}
                        </span>
                      </h3>
                    </div>

                    {exp.period && (
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-bg-main/60 border border-border-subtle text-xs font-mono text-text-secondary self-start">
                        <Calendar className="w-3.5 h-3.5 text-accent-primary" />
                        <span>{exp.period}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5 mb-6">
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 transition-colors duration-300 ${isDeloitte ? 'text-accent-achievement' : 'text-accent-primary group-hover:text-accent-hover'}`} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Note for Deloitte privacy/accuracy */}
                  {exp.note && (
                    <div className="p-3 rounded-xl bg-accent-achievement/5 border border-accent-achievement/20 text-xs font-mono text-accent-achievement mb-4">
                      ● {exp.note}
                    </div>
                  )}

                  {/* Skill Tags */}
                  <div className="pt-4 border-t border-border-subtle/50 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-bg-main text-text-secondary border border-border-subtle group-hover:border-border-hover/30 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
