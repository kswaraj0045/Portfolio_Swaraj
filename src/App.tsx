import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { SignatureLoadingScreen } from './components/SignatureLoadingScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { DeloitteMilestone } from './components/DeloitteMilestone';
import { ProductThinkingFramework } from './components/ProductThinkingFramework';
import { ProjectSection } from './components/ProjectSection';
import { ExperienceSection } from './components/ExperienceSection';
import { LeadershipSection } from './components/LeadershipSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationAndCertifications } from './components/EducationAndCertifications';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DesignSystemPreview } from './components/DesignSystemPreview';
import { DeloitteUSIPage } from './components/DeloitteUSIPage';
import { RecommendationRoomPage } from './components/RecommendationRoomPage';

export function App() {
  const [showDesignSystem, setShowDesignSystem] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname;
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isDeloittePage = currentPath.toLowerCase().includes('deloitte') || 
    window.location.pathname.toLowerCase().includes('deloitte') || 
    window.location.hash.toLowerCase() === '#/deloitte' ||
    window.location.hash.toLowerCase() === '#deloitte-usi';

  const isRecommendationsPage = currentPath.toLowerCase().includes('recommendations') || 
    window.location.pathname.toLowerCase().includes('recommendations') || 
    window.location.hash.toLowerCase() === '#/recommendations' ||
    window.location.hash.toLowerCase() === '#recommendations';

  // If directly landing on /deloitte or /recommendations, dismiss the signature loading screen immediately
  useEffect(() => {
    if (isDeloittePage || isRecommendationsPage) {
      setIsLoading(false);
    }
  }, [isDeloittePage, isRecommendationsPage]);

  if (isDeloittePage) {
    return <DeloitteUSIPage onNavigateHome={() => navigateTo('/')} />;
  }

  if (isRecommendationsPage) {
    return <RecommendationRoomPage onNavigateHome={() => navigateTo('/')} />;
  }

  return (
    <div className="min-h-screen bg-bg-main text-text-primary selection:bg-accent-primary/25 selection:text-accent-primary relative overflow-x-hidden">
      
      {/* Signature Loading Experience – Full Name intro */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <SignatureLoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Background Animated Ambient Lights */}
      {!shouldReduceMotion && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <motion.div
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-[150px]"
          />
          <motion.div
            animate={{
              x: [0, -50, 0],
              y: [0, 40, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-1/3 right-1/4 w-[700px] h-[700px] bg-accent-secondary/5 rounded-full blur-[170px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.03, 0.07, 0.03],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
            className="absolute top-2/3 left-1/3 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[160px]"
          />
        </div>
      )}

      {/* Top Persistent Navbar with Active Scroll Spy */}
      <Navbar 
        onToggleDesignSystem={() => setShowDesignSystem(!showDesignSystem)} 
        showDesignSystem={showDesignSystem} 
        onNavigate={navigateTo}
      />

      {/* Main Content Area */}
      {showDesignSystem ? (
        <main className="pt-20">
          <DesignSystemPreview onDismissPreview={() => setShowDesignSystem(false)} />
        </main>
      ) : (
        <main>
          <HeroSection onNavigate={navigateTo} />
          <AboutSection />
          <InteractiveTerminal />
          <DeloitteMilestone onNavigate={navigateTo} />
          <ProductThinkingFramework />
          <ProjectSection />
          <ExperienceSection />
          <LeadershipSection />
          <SkillsSection />
          <EducationAndCertifications />
          <ContactSection />
        </main>
      )}

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
}

export default App;
