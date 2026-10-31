import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Layers, Lightbulb, BarChart3, Users, Terminal, CheckCircle2 } from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Product Thinking & Strategy':
        return <Lightbulb className="w-5 h-5 text-accent-primary" />;
      case 'Business & Analytics':
        return <BarChart3 className="w-5 h-5 text-accent-achievement" />;
      case 'Collaboration & Leadership':
        return <Users className="w-5 h-5 text-sky-400" />;
      case 'Technical Foundation':
        return <Terminal className="w-5 h-5 text-accent-secondary" />;
      default:
        return <Layers className="w-5 h-5 text-accent-primary" />;
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const } 
    },
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative border-t border-border-subtle bg-bg-main overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-accent-primary bg-accent-primary/10 border border-accent-primary/20 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>CORE CAPABILITIES & COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-text-primary tracking-tight">
            Product, Business & Technical Toolkit.
          </h2>
          <p className="mt-3 text-base text-text-secondary leading-relaxed">
            A comprehensive matrix bridging product requirements, analytical insights, and technical implementation. (No fabricated proficiency percentages).
          </p>
        </div>

        {/* 4-Category Matrix with Staggered Scroll Reveal */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillsCategories.map((catGroup) => (
            <motion.div
              key={catGroup.category}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-border-subtle bg-bg-card/70 flex flex-col justify-between hover:border-accent-primary/40 hover:shadow-card-glow transition-all"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-bg-main border border-border-subtle flex items-center justify-center">
                    {getCategoryIcon(catGroup.category)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-text-primary">
                      {catGroup.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs font-mono text-text-muted mb-6">
                  {catGroup.description}
                </p>

                {/* Chips Grid */}
                <div className="flex flex-wrap gap-2">
                  {catGroup.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.03 }}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-bg-main/80 text-text-secondary border border-border-subtle hover:text-text-primary hover:border-accent-primary/50 transition-colors flex items-center gap-1.5 cursor-default"
                    >
                      <CheckCircle2 className="w-3 h-3 text-accent-primary/80 shrink-0" />
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
