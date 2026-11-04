import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Briefcase, Award, CheckCircle2, Building2, Calendar, MapPin, Sparkles } from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { RedScannerCard } from './RedScannerCard';

export const ExperienceSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="py-14 sm:py-20 md:py-28 relative border-t border-border-subtle bg-bg-main overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-accent-primary bg-accent-primary/10 border border-accent-primary/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRAJECTORY & EXPERIENCE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-heading text-text-primary tracking-tight">
            Professional Experience &amp; Milestones.
          </h2>
          <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
            Hands-on exposure combining software engineering internships, startup agile delivery, and competitive enterprise campus selection.
          </p>
        </div>

        {/* Experience Timeline Container */}
        <div className="space-y-8 relative">
          
          {/* Animated Timeline Spine (desktop & tablet) */}
          <div className="hidden md:block absolute left-4 top-6 bottom-6 w-0.5 bg-gradient-to-b from-accent-primary via-border-subtle to-border-subtle/30" />

          {experienceData.map((exp, idx) => (
            <div key={exp.id} className="relative md:ml-10">
              {/* Timeline node icon on the spine for desktop */}
              <div className="hidden md:flex absolute -left-[49px] top-8 w-6 h-6 rounded-full border-2 items-center justify-center bg-bg-main border-accent-primary text-accent-primary transition-all duration-300 z-30">
                <span className="w-2 h-2 rounded-full bg-accent-primary" />
              </div>

              <RedScannerCard
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.15, ease: [0.21, 0.47, 0.32, 0.98] as const }}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold text-accent-primary bg-accent-primary/10 border border-accent-primary/25 group-hover:border-accent-primary/50 transition-colors duration-300">
                        <Briefcase className="w-3.5 h-3.5 group-hover:scale-[1.08] group-hover:rotate-[4deg] transition-transform duration-300 motion-reduce:group-hover:scale-100 motion-reduce:group-hover:rotate-0" />
                        <span>{exp.badge}</span>
                      </span>
                      <span className="text-xs font-mono text-text-muted flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 group-hover:text-text-secondary transition-colors duration-300" />
                        <span>{exp.location}</span>
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold font-heading text-text-primary group-hover:text-white transition-colors duration-300">
                      {exp.role} <span className="text-text-muted font-normal">at</span>{' '}
                      <span className="text-accent-primary group-hover:text-accent-hover transition-colors duration-300">
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

                <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6 font-normal">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2.5 mb-6">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary font-normal">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-accent-primary group-hover:text-accent-hover transition-colors duration-300" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Skill Tags */}
                <div className="pt-4 border-t border-border-subtle/50 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-normal bg-bg-main text-text-secondary border border-border-subtle group-hover:border-border-hover/30 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </RedScannerCard>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
