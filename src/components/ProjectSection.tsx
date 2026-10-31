import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { projectsData } from '../data/projectsData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Layers, Sparkles, Filter } from 'lucide-react';
import { MotionReveal } from './MotionReveal';

export const ProjectSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Product & Analytics', 'Full-Stack SaaS', 'AI & Deep Learning', 'Healthcare Systems'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-28 relative border-t border-border-subtle bg-bg-secondary/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Motion Reveal */}
        <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-accent-primary bg-accent-primary/10 border border-accent-primary/20 mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>VERIFIED PROJECT PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-text-primary tracking-tight">
              Featured Case Studies & Systems.
            </h2>
            <p className="mt-2 text-base text-text-secondary max-w-2xl">
              Authentic systems inspected directly from GitHub repositories and technical specifications. Every project showcases problem definition, technical feasibility, and business value.
            </p>
          </div>

          {/* Filter Pills with Motion Highlights */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer relative ${
                  selectedCategory === cat
                    ? 'bg-accent-primary text-bg-main font-semibold shadow-card-glow'
                    : 'bg-bg-card border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent-primary/50'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </MotionReveal>

        {/* Projects Grid with AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
              >
                <ProjectCard
                  project={project}
                  onOpenDetails={(p) => setActiveModalProject(p)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Interactive Detail Modal with AnimatePresence */}
      <AnimatePresence>
        {activeModalProject && (
          <ProjectModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
