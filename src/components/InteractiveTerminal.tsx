import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  Terminal as TerminalIcon, 
  Minus, 
  Square, 
  RotateCcw, 
  Sparkles, 
  ArrowRight,
  ChevronRight,
  CornerDownLeft,
  Command
} from 'lucide-react';
import { executeTerminalCommand, CommandResult } from '../data/terminalCommands';
import { MotionReveal } from './MotionReveal';
import { personalInfo } from '../data/portfolioData';

interface HistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [isMaximized, setIsMaximized] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  // Scroll only the terminal's internal container — NEVER scroll the outer browser window
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input on clicking anywhere within terminal body without scrolling the page
  const handleBodyClick = () => {
    inputRef.current?.focus({ preventScroll: true });
  };

  const handleCommandExecution = (cmdToRun: string) => {
    const trimmed = cmdToRun.trim();
    if (!trimmed) return;

    // Check for clear command
    if (trimmed.toLowerCase() === 'clear' || trimmed.toLowerCase() === 'cls') {
      setHistory([]);
      setInputVal('');
      setCommandHistory((prev) => [...prev, trimmed]);
      setHistoryIndex(-1);
      return;
    }

    const result: CommandResult = executeTerminalCommand(trimmed);

    // Handle special actions
    if (result.action === 'navigate_projects') {
      setTimeout(() => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    } else if (result.action === 'download_resume') {
      const link = document.createElement('a');
      link.href = personalInfo.resumeUrl;
      link.download = 'Swaraj_Khadalkar_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    const newItem: HistoryItem = {
      id: `${Date.now()}-${Math.random()}`,
      command: trimmed,
      output: result.output,
    };

    setHistory((prev) => [...prev, newItem]);
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);
    setInputVal('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommandExecution(inputVal);
  };

  // Keyboard navigation for command history (Up / Down)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(commandHistory[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandHistory.length === 0 || historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInputVal('');
      } else {
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Simple autocompletion
      const commonCommands = ['whoami', 'about', 'skills', 'experience', 'projects', 'career', 'contact', 'help', 'neofetch', 'resume', 'clear'];
      const match = commonCommands.find(c => c.startsWith(inputVal.toLowerCase().trim()));
      if (match) {
        setInputVal(match);
      }
    }
  };

  const quickCommands = [
    { label: 'whoami', desc: 'Identity' },
    { label: 'skills', desc: 'Tech stack' },
    { label: 'experience', desc: 'Work history' },
    { label: 'career', desc: 'Milestone' },
    { label: 'projects', desc: 'Case studies' },
    { label: 'neofetch', desc: 'System info' },
    { label: 'contact', desc: 'Get in touch' },
  ];

  return (
    <section id="terminal" className="py-20 md:py-28 relative border-t border-border-subtle bg-bg-main overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-accent-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <MotionReveal className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-accent-primary bg-accent-primary/10 border border-accent-primary/20 mb-3">
            <Command className="w-3.5 h-3.5" />
            <span>INTERACTIVE EXPERIENCE / 01</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-text-primary tracking-tight">
            KNOW ME THROUGH TERMINAL
          </h2>

          <p className="mt-2 text-base text-text-secondary font-normal leading-relaxed">
            An interactive way to explore my professional journey.
          </p>

          <p className="mt-1 text-xs font-mono font-normal text-accent-primary">
            Type a command and discover more about me.
          </p>
        </MotionReveal>

        {/* ========================================================= */}
        {/* TERMINAL WINDOW */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className={`glass-card rounded-2xl border border-border-subtle bg-bg-card/95 shadow-2xl backdrop-blur-xl overflow-hidden transition-all duration-300 ${
            isMaximized ? 'fixed inset-4 sm:inset-10 z-50 flex flex-col my-0' : 'relative'
          }`}
        >
          {/* Header Bar */}
          <div className="px-4 py-3 bg-bg-secondary/95 border-b border-border-subtle flex items-center justify-between select-none">
            {/* Window Controls */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setHistory([])}
                title="Clear terminal session"
                className="w-3 h-3 rounded-full bg-accent-primary/80 hover:bg-accent-hover transition-colors cursor-pointer"
                aria-label="Clear session"
              />
              <button 
                onClick={() => setIsMinimized(!isMinimized)}
                title="Minimize / expand terminal body"
                className="w-3 h-3 rounded-full bg-silver-steel/50 hover:bg-silver-metallic transition-colors cursor-pointer"
                aria-label="Minimize toggle"
              />
              <button 
                onClick={() => setIsMaximized(!isMaximized)}
                title="Toggle fullscreen terminal view"
                className="w-3 h-3 rounded-full bg-silver-steel/50 hover:bg-silver-platinum transition-colors cursor-pointer"
                aria-label="Maximize toggle"
              />
            </div>

            {/* Window Title */}
            <div className="flex items-center gap-2 text-xs font-mono text-text-secondary">
              <TerminalIcon className="w-3.5 h-3.5 text-accent-primary" />
              <span className="font-semibold text-text-primary">swaraj@portfolio:~</span>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-primary shadow-[0_0_8px_rgba(179,38,53,0.8)] animate-pulse" />
              <span className="text-[10px] font-mono font-bold tracking-wider text-accent-primary hidden sm:inline">
                SYSTEM ONLINE
              </span>
            </div>
          </div>

          {/* Terminal Body */}
          <AnimatePresence>
            {!isMinimized && (
              <motion.div
                ref={terminalBodyRef}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                onClick={handleBodyClick}
                className={`p-4 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed text-text-primary overflow-y-auto cursor-text ${
                  isMaximized ? 'flex-1 max-h-none' : 'max-h-[460px] min-h-[320px]'
                }`}
              >
                {/* Initial Welcome Message */}
                <div className="space-y-2 text-text-secondary pb-4 border-b border-border-subtle/50 mb-4 select-none">
                  <div className="text-silver-metallic font-bold">
                    Initializing Swaraj's Personal Terminal...
                  </div>
                  <div className="text-text-muted space-y-0.5 text-xs">
                    <div><span className="text-accent-primary font-bold">[OK]</span> Loading personal profile</div>
                    <div><span className="text-accent-primary font-bold">[OK]</span> Loading professional experience</div>
                    <div><span className="text-accent-primary font-bold">[OK]</span> Loading technical skills</div>
                    <div><span className="text-accent-primary font-bold">[OK]</span> Loading achievements</div>
                  </div>
                  <div className="pt-2 text-text-primary font-bold">
                    Welcome to Swaraj's Interactive Portfolio!
                  </div>
                  <div className="text-xs text-text-secondary">
                    Type <span className="text-accent-primary font-bold underline cursor-pointer hover:text-accent-hover" onClick={() => handleCommandExecution('help')}>'help'</span> to explore who I am.
                  </div>
                </div>

                {/* Command Output History */}
                <div className="space-y-4">
                  {history.map((item) => (
                    <div key={item.id} className="space-y-2">
                      <div className="flex items-center gap-2 text-text-secondary">
                        <span className="text-accent-primary font-bold">swaraj@portfolio:~$</span>
                        <span className="text-text-primary font-bold">{item.command}</span>
                      </div>
                      <div className="pl-4 border-l border-border-subtle text-text-secondary text-xs sm:text-[13px]">
                        {item.output}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Active Command Input Line */}
                <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-3 mt-1">
                  <span className="text-accent-primary font-bold shrink-0 text-xs sm:text-[13px]">
                    <span className="hidden sm:inline">swaraj@portfolio:</span>~$
                  </span>
                  <div className="relative flex-1 flex items-center">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputVal}
                      onChange={(e) => setInputVal(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Type a command (try 'whoami' or 'help')..."
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      className="w-full bg-transparent text-text-primary placeholder:text-text-muted/60 focus:outline-none font-mono text-xs sm:text-[13px] caret-accent-primary min-h-[36px]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="p-1.5 rounded-lg text-text-muted hover:text-accent-primary transition-colors cursor-pointer min-w-[36px] min-h-[36px] flex items-center justify-center"
                    title="Press Enter to execute"
                    aria-label="Execute command"
                  >
                    <CornerDownLeft className="w-3.5 h-3.5" />
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ========================================================= */}
        {/* QUICK COMMAND SUGGESTIONS */}
        {/* ========================================================= */}
        <div className="mt-5 space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="text-text-muted font-mono flex items-center gap-1.5">
              <span>Quick execute:</span>
            </span>
            <span className="text-text-muted font-mono text-[11px] italic">
              Not sure where to start? Try typing <span className="text-accent-primary font-bold cursor-pointer underline" onClick={() => handleCommandExecution('help')}>help</span>.
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {quickCommands.map((q) => (
              <motion.button
                key={q.label}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleCommandExecution(q.label)}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-bg-card border border-border-subtle hover:border-accent-primary text-text-secondary hover:text-text-primary transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <span className="text-accent-primary font-bold">$</span>
                <span>{q.label}</span>
                <span className="text-[10px] text-text-muted hidden sm:inline">({q.desc})</span>
              </motion.button>
            ))}

            <button
              onClick={() => setHistory([])}
              className="px-3 py-1.5 rounded-lg text-xs font-mono text-text-muted hover:text-accent-primary border border-border-subtle hover:border-accent-primary/40 transition-colors ml-auto flex items-center gap-1 cursor-pointer"
              title="Clear terminal history"
            >
              <RotateCcw className="w-3 h-3" />
              <span>clear</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

