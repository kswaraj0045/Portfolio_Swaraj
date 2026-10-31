import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { MotionReveal } from './MotionReveal';

export const ContactSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative border-t border-border-subtle bg-bg-main overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-accent-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info */}
          <MotionReveal className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-accent-primary bg-accent-primary/10 border border-accent-primary/20">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>LET'S CONNECT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-text-primary tracking-tight">
              Let's Build Something Meaningful.
            </h2>

            <p className="text-base text-text-secondary leading-relaxed">
              I'm interested in product management, technology, business strategy and connecting with people who enjoy solving meaningful problems.
            </p>

            <div className="space-y-4 pt-4">
              {/* Email Direct Card */}
              <motion.a
                whileHover={{ y: -3 }}
                href={`mailto:${personalInfo.email}`}
                className="glass-card p-4 rounded-2xl border border-border-subtle flex items-center justify-between group hover:border-accent-primary/60 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-bg-main border border-border-subtle flex items-center justify-center text-accent-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-text-muted">DIRECT EMAIL</div>
                    <div className="text-xs sm:text-sm font-bold font-mono text-text-primary group-hover:text-accent-primary transition-colors break-all sm:break-normal">
                      {personalInfo.email}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent-primary transition-colors shrink-0" />
              </motion.a>

              {/* GitHub Card */}
              <motion.a
                whileHover={{ y: -3 }}
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="glass-card p-4 rounded-2xl border border-border-subtle flex items-center justify-between group hover:border-accent-primary/60 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-bg-main border border-border-subtle flex items-center justify-center text-text-primary">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-text-muted">GITHUB PROFILE</div>
                    <div className="text-sm font-bold font-mono text-text-primary group-hover:text-accent-primary transition-colors">
                      kswaraj0045
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent-primary transition-colors" />
              </motion.a>

              {/* LinkedIn Card */}
              <motion.a
                whileHover={{ y: -3 }}
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass-card p-4 rounded-2xl border border-border-subtle flex items-center justify-between group hover:border-accent-primary/60 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-bg-main border border-border-subtle flex items-center justify-center text-accent-primary">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-text-muted">LINKEDIN PROFILE</div>
                    <div className="text-sm font-bold font-mono text-text-primary group-hover:text-accent-primary transition-colors">
                      swaraj-khadalkar
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent-primary transition-colors" />
              </motion.a>
            </div>
          </MotionReveal>

          {/* Right Column: Functional Form */}
          <div className="lg:col-span-7">
            <MotionReveal delay={0.2} className="glass-card p-6 sm:p-10 rounded-3xl border border-border-subtle bg-bg-card/85 space-y-6">
              <div>
                <h3 className="text-2xl font-bold font-heading text-text-primary">
                  Send a Message
                </h3>
                <p className="text-xs font-mono text-text-muted mt-1">
                  Triggers an email directly to {personalInfo.email} with pre-filled details.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono font-medium text-text-secondary uppercase mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-bg-main border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-primary transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono font-medium text-text-secondary uppercase mb-2">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-bg-main border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-primary transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-medium text-text-secondary uppercase mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="What problem or opportunity would you like to discuss?"
                    className="w-full px-4 py-3 rounded-xl bg-bg-main border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-primary transition-colors text-sm resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-bg-main bg-accent-primary hover:bg-sky-400 transition-all shadow-card-glow cursor-pointer group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Send Message via Email</span>
                </motion.button>
              </form>
            </MotionReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
