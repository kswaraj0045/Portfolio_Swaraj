import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  FileText, 
  Download, 
  Sparkles, 
  Eye, 
  Edit3, 
  RotateCcw, 
  ShieldCheck, 
  AlertTriangle,
  X
} from 'lucide-react';
import { ResumeData, ResumeTemplateId } from '../types/resume';
import { sampleResumeData, initialEmptyResumeData } from '../data/sampleResumeData';
import { ResumeForm } from './resume/ResumeForm';
import { ResumePreview } from './resume/ResumePreview';

interface Props {
  onNavigateHome: () => void;
}

const STORAGE_KEY = 'swaraj_portfolio_resume_builder_v1';
const TEMPLATE_KEY = 'swaraj_portfolio_resume_template_v1';

export const ResumeBuilderPage: React.FC<Props> = ({ onNavigateHome }) => {
  // Mobile / layout view mode: 'editor' | 'preview'
  const [mobileView, setMobileView] = useState<'editor' | 'preview'>('editor');
  const [showResetModal, setShowResetModal] = useState(false);

  // Resume State initialized from localStorage or sample data
  const [resumeData, setResumeData] = useState<ResumeData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load saved resume data', e);
    }
    return sampleResumeData;
  });

  const [activeTemplate, setActiveTemplate] = useState<ResumeTemplateId>(() => {
    try {
      const saved = localStorage.getItem(TEMPLATE_KEY) as ResumeTemplateId;
      if (saved && ['classic', 'modern', 'minimal'].includes(saved)) {
        return saved;
      }
    } catch (e) {
      console.error('Failed to load saved template choice', e);
    }
    return 'modern';
  });

  // Auto-save to localStorage on updates (purely client-side for privacy)
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(resumeData));
    } catch (e) {
      console.error('Failed to save resume data', e);
    }
  }, [resumeData]);

  useEffect(() => {
    try {
      localStorage.setItem(TEMPLATE_KEY, activeTemplate);
    } catch (e) {
      console.error('Failed to save template', e);
    }
  }, [activeTemplate]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleResetConfirm = () => {
    setResumeData(initialEmptyResumeData);
    setShowResetModal(false);
  };

  const handleLoadSample = () => {
    setResumeData(sampleResumeData);
  };

  return (
    <div className="min-h-screen bg-bg-main text-text-primary selection:bg-accent-primary/25 selection:text-accent-primary relative overflow-x-hidden flex flex-col">
      
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-[170px]" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-accent-secondary/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-[180px]" />
      </div>

      {/* Top Header Navigation */}
      <header className="sticky top-0 z-50 bg-bg-main/90 backdrop-blur-md border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono text-text-secondary hover:text-white bg-bg-card border border-border-subtle hover:border-accent-primary/60 transition-all cursor-pointer group min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-accent-primary" />
            <span>Return to Portfolio</span>
          </button>

          {/* Center Brand / Tool Title */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-bg-card border border-border-subtle flex items-center justify-center text-accent-primary">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="font-heading font-bold text-sm sm:text-base text-text-primary tracking-tight">
                Resume Builder
              </span>
              <span className="hidden sm:inline-block ml-2 px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-accent-primary/10 text-accent-primary border border-accent-primary/25">
                Obsidian Studio
              </span>
            </div>
          </div>

          {/* Quick Header Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowResetModal(true)}
              className="p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-mono text-text-muted hover:text-accent-primary bg-bg-card border border-border-subtle hover:border-accent-primary/40 transition-colors flex items-center gap-1.5 cursor-pointer min-h-[44px]"
              title="Clear resume data"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Mode Switcher (Editor vs Live Preview) */}
      <div className="lg:hidden sticky top-18 z-40 bg-bg-secondary/95 backdrop-blur-md border-b border-border-subtle px-4 py-2.5 flex items-center justify-center gap-2">
        <button
          onClick={() => setMobileView('editor')}
          className={`flex-1 max-w-[200px] py-2 rounded-xl text-xs font-mono font-medium flex items-center justify-center gap-2 transition-all min-h-[42px] cursor-pointer ${
            mobileView === 'editor'
              ? 'bg-accent-primary text-white shadow-card-glow font-bold'
              : 'bg-bg-card text-text-secondary border border-border-subtle'
          }`}
        >
          <Edit3 className="w-3.5 h-3.5" />
          <span>Edit Details</span>
        </button>

        <button
          onClick={() => setMobileView('preview')}
          className={`flex-1 max-w-[200px] py-2 rounded-xl text-xs font-mono font-medium flex items-center justify-center gap-2 transition-all min-h-[42px] cursor-pointer ${
            mobileView === 'preview'
              ? 'bg-accent-primary text-white shadow-card-glow font-bold'
              : 'bg-bg-card text-text-secondary border border-border-subtle'
          }`}
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Live Preview &amp; PDF</span>
        </button>
      </div>

      {/* Main Builder Workspace */}
      <main className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-6 sm:py-10 flex-1 w-full">
        
        {/* Intro Banner */}
        <div className="mb-6 space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-primary">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STANDARDIZED CAREER TOOLKIT</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-text-primary tracking-tight">
            Build Your Professional Resume.
          </h1>
          <p className="text-xs sm:text-sm text-text-secondary font-normal">
            Enter your career details, switch between 3 recruiter-ready templates, and export an A4 PDF with selectable text. No sign-up required.
          </p>
        </div>

        {/* 2-Column Desktop Grid / Tabbed Mobile View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Form Editor */}
          <div className={`lg:col-span-6 ${mobileView === 'preview' ? 'hidden lg:block' : 'block'}`}>
            <ResumeForm
              data={resumeData}
              onChange={setResumeData}
              onLoadSample={handleLoadSample}
              onReset={() => setShowResetModal(true)}
            />
          </div>

          {/* Right Column: Live Preview & Export Toolbar */}
          <div className={`lg:col-span-6 ${mobileView === 'editor' ? 'hidden lg:block' : 'block'}`}>
            <div className="lg:sticky lg:top-24">
              <ResumePreview
                data={resumeData}
                activeTemplate={activeTemplate}
                onSelectTemplate={setActiveTemplate}
              />
            </div>
          </div>

        </div>

      </main>

      {/* Privacy Notice Footer */}
      <footer className="border-t border-border-subtle bg-bg-secondary/40 py-6 mt-12 text-center text-xs font-mono text-text-muted">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent-primary" />
            <span>Client-Side Only: Your resume data never leaves your browser.</span>
          </div>
          <div>
            Built with Obsidian Silver + Crimson Design System • Portfolio 2026
          </div>
        </div>
      </footer>

      {/* Confirmation Dialog for Reset */}
      <AnimatePresence>
        {showResetModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-bg-card rounded-2xl border border-border-subtle p-6 max-w-md w-full space-y-4 shadow-2xl"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3 text-accent-primary">
                  <div className="w-10 h-10 rounded-xl bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-accent-primary" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-text-primary">
                    Reset Resume Form?
                  </h3>
                </div>
                <button
                  onClick={() => setShowResetModal(false)}
                  className="text-text-muted hover:text-text-primary cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs text-text-secondary leading-relaxed font-sans">
                This will clear all current resume entries and reset all fields. Saved browser storage will also be cleared. Are you sure you want to proceed?
              </p>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setShowResetModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-mono text-text-secondary hover:text-text-primary bg-bg-main border border-border-subtle transition-colors cursor-pointer min-h-[40px]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleResetConfirm}
                  className="px-4 py-2 rounded-xl text-xs font-mono font-bold text-white bg-accent-primary hover:bg-accent-hover transition-colors shadow-card-glow cursor-pointer min-h-[40px]"
                >
                  Yes, Reset Form
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
