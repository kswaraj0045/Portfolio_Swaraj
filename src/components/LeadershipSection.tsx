import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Users2, Rocket, Code, CheckCircle2, Calendar } from 'lucide-react';
import { leadershipData } from '../data/portfolioData';
import { MotionReveal } from './MotionReveal';

export const LeadershipSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="leadership" className="py-20 md:py-28 relative border-t border-border-subtle bg-bg-secondary/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Motion Reveal */}
        <MotionReveal className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-accent-primary bg-accent-primary/10 border border-accent-primary/20 mb-3">
            <Users2 className="w-3.5 h-3.5" />
            <span>CROSS-FUNCTIONAL LEADERSHIP & INITIATIVES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-text-primary tracking-tight">
            Leadership & Community Impact.
          </h2>
          <p className="mt-3 text-base text-text-secondary leading-relaxed">
            Leading within startup incubators and campus technical clubs to align teams, organize developer events, and execute milestone deliveries.
          </p>
        </MotionReveal>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease: [0.21, 0.47, 0.32, 0.98] as const }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between group hover:border-accent-primary/50 hover:shadow-card-glow transition-all duration-300 relative overflow-hidden bg-bg-card/80"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-bg-main border border-border-subtle flex items-center justify-center text-accent-primary group-hover:scale-105 transition-transform">
                    {item.id === 'viaset-ecell' ? <Rocket className="w-6 h-6 text-accent-primary" /> : <Code className="w-6 h-6 text-accent-secondary" />}
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-bg-main/60 border border-border-subtle text-xs font-mono text-text-muted">
                    <Calendar className="w-3 h-3 text-accent-primary" />
                    <span>{item.period}</span>
                  </span>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold font-heading text-text-primary group-hover:text-accent-primary transition-colors">
                    {item.organization}
                  </h3>
                  <div className="text-sm font-mono text-silver-metallic font-medium mt-1">
                    {item.role}
                  </div>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Impact Points */}
                <div className="space-y-2.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-text-muted">
                    Key Contributions
                  </div>
                  {item.impactPoints.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-text-secondary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-primary shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
