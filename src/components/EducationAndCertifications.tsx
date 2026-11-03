import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationData, certificationsData } from '../data/portfolioData';
import { MotionReveal } from './MotionReveal';

export const EducationAndCertifications: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="education" className="py-20 md:py-28 relative border-t border-border-subtle bg-bg-secondary/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Education */}
          <div className="lg:col-span-6 space-y-8">
            <MotionReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-accent-primary bg-accent-primary/10 border border-accent-primary/20 mb-3">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>ACADEMIC BACKGROUND</span>
              </div>
              <h2 className="text-3xl font-semibold font-heading text-text-primary tracking-tight">
                Education.
              </h2>
              <p className="mt-2 text-sm text-text-secondary font-normal leading-relaxed">
                Technical foundation in computer engineering and continuous academic learning.
              </p>
            </MotionReveal>

            <div className="space-y-4">
              {educationData.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: i * 0.12 }}
                  whileHover={{ y: -3 }}
                  className="glass-card p-6 rounded-2xl border border-border-subtle bg-bg-card/80 space-y-3 hover:border-accent-primary/40 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold font-heading text-text-primary">
                      {edu.institution}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-bg-main text-xs font-mono font-normal text-accent-primary border border-border-subtle self-start">
                      <Calendar className="w-3 h-3" />
                      <span>{edu.period}</span>
                    </span>
                  </div>

                  <div className="text-sm font-sans text-accent-primary font-medium">
                    {edu.degree}
                  </div>

                  <div className="text-xs font-mono text-text-muted flex items-center gap-1 font-normal">
                    <MapPin className="w-3 h-3" />
                    <span>{edu.location}</span>
                  </div>

                  {edu.details && (
                    <div className="pt-2 border-t border-border-subtle/50 space-y-1">
                      {edu.details.map((d, idx) => (
                        <div key={idx} className="text-xs text-text-secondary flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-primary shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Industry Achievements */}
          <div className="lg:col-span-6 space-y-8">
            <MotionReveal delay={0.15}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-[#B99A6B] bg-[#B99A6B]/10 border border-[#B99A6B]/30 mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>ACHIEVEMENTS & CREDENTIALS</span>
              </div>
              <h2 className="text-3xl font-semibold font-heading text-text-primary tracking-tight">
                Certifications.
              </h2>
              <p className="mt-2 text-sm text-text-secondary font-normal leading-relaxed">
                Verified industry badges across cloud architecture, AI fluency, and professional readiness.
              </p>
            </MotionReveal>

            <div className="space-y-4">
              {certificationsData.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="glass-card p-5 rounded-2xl border border-border-subtle bg-bg-card/90 flex items-center justify-between gap-4 group transition-all hover:border-[#B99A6B]/50 hover:shadow-champagne-glow"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-bg-main border border-border-subtle flex items-center justify-center text-[#B99A6B] group-hover:scale-105 transition-transform">
                      <Award className="w-5 h-5 text-[#B99A6B]" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold font-heading text-text-primary group-hover:text-[#B99A6B] transition-colors">
                        {cert.title}
                      </h4>
                      <div className="text-xs font-mono font-normal text-text-secondary mt-0.5">
                        Issued by: <strong className="text-text-primary font-medium">{cert.issuer}</strong>
                      </div>
                    </div>
                  </div>

                  {cert.badge && (
                    <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-[11px] font-mono font-medium text-[#B99A6B] bg-[#B99A6B]/10 border border-[#B99A6B]/30">
                      {cert.badge}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
