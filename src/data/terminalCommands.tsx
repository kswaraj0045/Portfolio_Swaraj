import React from 'react';
import { ExternalLink, Download, ArrowUpRight } from 'lucide-react';
import { personalInfo } from './portfolioData';

export interface CommandResult {
  output: React.ReactNode;
  action?: 'navigate_projects' | 'download_resume' | 'clear';
}

export const executeTerminalCommand = (rawCommand: string): CommandResult => {
  const trimmed = rawCommand.trim();
  const lower = trimmed.toLowerCase();

  // Handle special sub-commands
  if (lower === 'projects --explore' || lower === 'projects -e') {
    return {
      output: (
        <div className="space-y-1 text-accent-primary">
          <div>Navigating to Projects section...</div>
          <div className="text-xs text-text-muted">Viewport scrolled to #projects.</div>
        </div>
      ),
      action: 'navigate_projects',
    };
  }

  switch (lower) {
    case 'clear':
    case 'cls':
      return { output: null, action: 'clear' };

    case 'help':
      return {
        output: (
          <div className="space-y-3">
            <div className="text-accent-primary font-bold tracking-wider">AVAILABLE COMMANDS</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs">
              <div><span className="text-accent-achievement font-bold">whoami</span>       <span className="text-text-muted">-</span> Discover who I am</div>
              <div><span className="text-accent-achievement font-bold">about</span>        <span className="text-text-muted">-</span> Know more about me</div>
              <div><span className="text-accent-achievement font-bold">education</span>    <span className="text-text-muted">-</span> Explore my education</div>
              <div><span className="text-accent-achievement font-bold">experience</span>   <span className="text-text-muted">-</span> View professional experience</div>
              <div><span className="text-accent-achievement font-bold">skills</span>       <span className="text-text-muted">-</span> Explore my technical skills</div>
              <div><span className="text-accent-achievement font-bold">leadership</span>   <span className="text-text-muted">-</span> Discover my leadership experience</div>
              <div><span className="text-accent-achievement font-bold">projects</span>     <span className="text-text-muted">-</span> Explore my selected projects</div>
              <div><span className="text-accent-achievement font-bold">certifications</span> <span className="text-text-muted">-</span> View my certifications</div>
              <div><span className="text-accent-achievement font-bold">interests</span>    <span className="text-text-muted">-</span> Know what I enjoy exploring</div>
              <div><span className="text-accent-achievement font-bold">career</span>       <span className="text-text-muted">-</span> Explore my career milestone</div>
              <div><span className="text-accent-achievement font-bold">contact</span>      <span className="text-text-muted">-</span> Get in touch with me</div>
              <div><span className="text-accent-achievement font-bold">github</span>       <span className="text-text-muted">-</span> Open my GitHub profile</div>
              <div><span className="text-accent-achievement font-bold">linkedin</span>     <span className="text-text-muted">-</span> Open my LinkedIn profile</div>
              <div><span className="text-accent-achievement font-bold">resume</span>       <span className="text-text-muted">-</span> Download my resume</div>
              <div><span className="text-accent-achievement font-bold">clear</span>        <span className="text-text-muted">-</span> Clear the terminal</div>
              <div><span className="text-accent-achievement font-bold">neofetch</span>     <span className="text-text-muted">-</span> Display my professional system profile</div>
            </div>
            <div className="text-[11px] text-text-muted pt-1">
              Tip: You can also try <span className="text-accent-primary">projects --explore</span> to jump directly to projects.
            </div>
          </div>
        ),
      };

    case 'whoami':
      return {
        output: (
          <div className="space-y-1.5 leading-relaxed">
            <div className="text-text-primary"><span className="text-accent-primary font-bold">NAME       :</span> Swaraj Khadalkar</div>
            <div className="text-text-primary"><span className="text-accent-primary font-bold">IDENTITY   :</span> Computer Engineering Student</div>
            <div className="text-text-primary"><span className="text-accent-primary font-bold">INTERESTS  :</span> Product Management, Technology, Analytics</div>
            <div className="text-text-primary"><span className="text-accent-primary font-bold">MINDSET    :</span> Think. Build. Lead.</div>
            <div className="text-text-primary"><span className="text-accent-primary font-bold">LOCATION   :</span> Pune, India</div>
            <div className="pt-2 text-text-secondary italic">
              I enjoy connecting technology with business needs and building meaningful digital experiences.
            </div>
          </div>
        ),
      };

    case 'about':
      return {
        output: (
          <div className="space-y-2 leading-relaxed">
            <div className="text-accent-primary font-bold tracking-wider">ABOUT ME</div>
            <p>
              I am a final-year B.Tech Computer Engineering student at MIT Academy of Engineering, Pune.
            </p>
            <p>
              I am interested in Product Management, Data Analytics, Business Strategy, and Technology.
            </p>
            <p>
              I enjoy understanding problems, exploring ideas, collaborating with teams, and developing practical digital solutions.
            </p>
            <p className="text-accent-achievement">
              My goal is to combine technical understanding with product and business thinking.
            </p>
          </div>
        ),
      };

    case 'education':
      return {
        output: (
          <div className="space-y-2 leading-relaxed">
            <div className="text-accent-primary font-bold tracking-wider">EDUCATION</div>
            <div className="text-text-primary font-bold">MIT Academy of Engineering</div>
            <div className="text-accent-achievement">B.Tech - Computer Engineering</div>
            <div className="text-text-muted">2023 - 2027</div>
            <div className="pt-1 text-text-secondary">
              Currently pursuing final-year undergraduate studies.
            </div>
          </div>
        ),
      };

    case 'experience':
      return {
        output: (
          <div className="space-y-2 leading-relaxed">
            <div className="text-accent-primary font-bold tracking-wider">PROFESSIONAL EXPERIENCE</div>
            <div className="text-text-primary font-bold">STREET-UP</div>
            <div>Role: <span className="text-accent-achievement">Software Developer Intern</span></div>
            <div className="text-text-muted">Since: 29 June 2026</div>
            <p className="pt-1 text-text-secondary">
              Working on CRM software for optical store clients. Contributing to software development and collaborating with the team to build practical business solutions.
            </p>
          </div>
        ),
      };

    case 'skills':
      return {
        output: (
          <div className="space-y-3 leading-relaxed">
            <div className="text-accent-primary font-bold tracking-wider">TECHNICAL SKILLS</div>
            
            <div>
              <div className="text-accent-achievement font-semibold text-xs uppercase">PROGRAMMING</div>
              <div className="text-text-secondary">Java, Python, C++</div>
            </div>

            <div>
              <div className="text-accent-achievement font-semibold text-xs uppercase">DATA &amp; ANALYTICS</div>
              <div className="text-text-secondary">Python, Pandas, NumPy, SQL, Data Analysis</div>
            </div>

            <div>
              <div className="text-accent-achievement font-semibold text-xs uppercase">DEVELOPMENT</div>
              <div className="text-text-secondary">React, Spring Boot, PostgreSQL</div>
            </div>

            <div>
              <div className="text-accent-achievement font-semibold text-xs uppercase">CLOUD &amp; TOOLS</div>
              <div className="text-text-secondary">AWS, Docker, Linux, Git</div>
            </div>

            <div>
              <div className="text-accent-achievement font-semibold text-xs uppercase">PRODUCT &amp; BUSINESS</div>
              <div className="text-text-secondary">Product Thinking, Problem Solving, Business Analysis, Team Collaboration</div>
            </div>
          </div>
        ),
      };

    case 'leadership':
      return {
        output: (
          <div className="space-y-2 leading-relaxed">
            <div className="text-accent-primary font-bold tracking-wider">LEADERSHIP &amp; ACTIVITIES</div>
            <div className="pt-1">
              <div className="text-text-primary font-bold">VIASET - MIT AOE E-CELL</div>
              <div className="text-accent-achievement">Core Member - CMO</div>
            </div>
            <div className="pt-2">
              <div className="text-text-primary font-bold">GeeksforGeeks Club - MIT AOE</div>
              <div className="text-accent-achievement">Club Member</div>
            </div>
            <p className="pt-2 text-text-secondary">
              Interested in leadership, coordination, team collaboration, and organizational activities.
            </p>
          </div>
        ),
      };

    case 'projects':
      return {
        output: (
          <div className="space-y-2 leading-relaxed">
            <div className="text-accent-primary font-bold tracking-wider">SELECTED PROJECTS</div>
            <div className="space-y-1">
              <div>01. <span className="text-text-primary font-medium">Pharmacy Analytics Dashboard</span></div>
              <div>02. <span className="text-text-primary font-medium">AI-Based Scoliosis Detection</span></div>
              <div>03. <span className="text-text-primary font-medium">Dental Practice Management System</span></div>
              <div>04. <span className="text-text-primary font-medium">Hostel Management Platform</span></div>
              <div>05. <span className="text-text-primary font-medium">Demand Forecasting &amp; Stock Optimisation</span></div>
            </div>
            <div className="pt-2 text-xs text-text-muted">
              Use <span className="text-accent-achievement font-bold cursor-pointer underline" onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}>projects --explore</span> to open the projects section.
            </div>
          </div>
        ),
      };

    case 'certifications':
      return {
        output: (
          <div className="space-y-2 leading-relaxed">
            <div className="text-accent-primary font-bold tracking-wider">CERTIFICATIONS</div>
            <div className="space-y-1">
              <div>• Career Edge - Young Professionals | <span className="text-text-primary">TCS</span></div>
              <div>• Claude 101 | <span className="text-text-primary">Anthropic</span></div>
              <div>• AI Fluency for Students | <span className="text-text-primary">Anthropic</span></div>
              <div>• Cloud Foundations Training | <span className="text-text-primary">AWS Academy</span></div>
            </div>
          </div>
        ),
      };

    case 'interests':
      return {
        output: (
          <div className="space-y-2 leading-relaxed">
            <div className="text-accent-primary font-bold tracking-wider">WHAT I ENJOY EXPLORING</div>
            <ul className="list-disc list-inside space-y-1 text-text-secondary">
              <li>Product Management</li>
              <li>Technology and Emerging Innovations</li>
              <li>Data Analytics</li>
              <li>Business Strategy</li>
              <li>Leadership and Team Collaboration</li>
            </ul>
            <div className="pt-2 text-text-primary font-semibold">Outside technology:</div>
            <ul className="list-disc list-inside space-y-1 text-text-secondary">
              <li>Watching cinema</li>
              <li>Listening to music</li>
            </ul>
          </div>
        ),
      };

    case 'career':
      return {
        output: (
          <div className="space-y-2 leading-relaxed">
            <div className="text-accent-achievement font-bold tracking-wider">CAREER MILESTONE</div>
            <div className="p-3 rounded-xl bg-accent-achievement/10 border border-accent-achievement/30 space-y-1">
              <div className="text-accent-achievement font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-accent-achievement animate-pulse" />
                <span>[UNLOCKED] DELOITTE ANALYST SELECTION</span>
              </div>
              <p className="text-text-primary text-xs">
                Selected for the Analyst role through campus placement.
              </p>
              <div className="text-xs font-mono font-medium text-accent-achievement">
                STATUS: Incoming Analyst
              </div>
            </div>
            <p className="text-text-secondary text-xs italic pt-1">
              A meaningful milestone in my professional journey.
            </p>
          </div>
        ),
      };

    case 'contact':
      return {
        output: (
          <div className="space-y-2 leading-relaxed">
            <div className="text-accent-primary font-bold tracking-wider">LET'S CONNECT</div>
            <div className="space-y-1.5 text-xs">
              <div>
                <span className="text-text-muted block">EMAIL:</span>
                <a href={`mailto:${personalInfo.email}`} className="text-accent-achievement hover:underline inline-flex items-center gap-1 font-mono">
                  {personalInfo.email}
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
              <div>
                <span className="text-text-muted block">GITHUB:</span>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-accent-primary hover:underline inline-flex items-center gap-1 font-mono">
                  github.com/kswaraj0045
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div>
                <span className="text-text-muted block">LINKEDIN:</span>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-sky-300 hover:underline inline-flex items-center gap-1 font-mono">
                  Open my LinkedIn profile
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        ),
      };

    case 'github':
      window.open(personalInfo.github, '_blank', 'noreferrer');
      return {
        output: (
          <div className="space-y-1">
            <div className="text-accent-primary font-bold">GITHUB PROFILE</div>
            <div className="text-text-secondary">Username: <span className="text-text-primary font-mono">kswaraj0045</span></div>
            <div className="text-xs text-text-muted">Opening GitHub repository in new tab...</div>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-accent-achievement hover:underline inline-flex items-center gap-1 text-xs">
              <span>{personalInfo.github}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        ),
      };

    case 'linkedin':
      window.open(personalInfo.linkedin, '_blank', 'noreferrer');
      return {
        output: (
          <div className="space-y-1">
            <div className="text-accent-primary font-bold">LINKEDIN PROFILE</div>
            <div className="text-xs text-text-muted">Opening LinkedIn profile in new tab...</div>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-accent-achievement hover:underline inline-flex items-center gap-1 text-xs">
              <span>{personalInfo.linkedin}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        ),
      };

    case 'resume':
      return {
        output: (
          <div className="space-y-1.5">
            <div className="text-accent-primary font-bold">DOWNLOADING RESUME</div>
            <div className="text-xs text-text-secondary">Triggered download for Swaraj_Khadalkar_Resume.pdf...</div>
            <a 
              href={personalInfo.resumeUrl} 
              download="Swaraj_Khadalkar_Resume.pdf"
              className="text-accent-achievement hover:underline inline-flex items-center gap-1.5 text-xs font-semibold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Click here if download does not start automatically</span>
            </a>
          </div>
        ),
        action: 'download_resume',
      };

    case 'neofetch':
      return {
        output: (
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start font-mono text-xs leading-relaxed py-1">
            {/* Minimal Monogram ASCII Graphic */}
            <pre className="text-accent-primary font-bold leading-none select-none text-[10px] sm:text-xs">
{`       ____  _  __ 
      / ___|| |/ / 
      \\___ \\| ' /  
       ___) | . \\  
      |____/|_|\\_\\ `}
            </pre>

            <div className="space-y-1">
              <div className="text-accent-achievement font-bold text-sm">SWARAJ KHADALKAR</div>
              <div className="text-border-subtle tracking-tighter">----------------------------------------</div>
              <div><span className="text-accent-primary font-semibold">OS        :</span> Product-Oriented Mindset</div>
              <div><span className="text-accent-primary font-semibold">ROLE      :</span> Computer Engineering Student</div>
              <div><span className="text-accent-primary font-semibold">EXPERIENCE:</span> Software Developer Intern</div>
              <div><span className="text-accent-achievement font-semibold">MILESTONE :</span> Deloitte Analyst Selection</div>
              <div><span className="text-accent-primary font-semibold">FOCUS     :</span> Product, Technology &amp; Analytics</div>
              <div><span className="text-accent-primary font-semibold">LOCATION  :</span> Pune, India</div>
              <div><span className="text-accent-primary font-semibold">STATUS    :</span> Always Learning</div>
            </div>
          </div>
        ),
      };

    default:
      return {
        output: (
          <div className="space-y-1 text-rose-400">
            <div>Command not found: <span className="text-white font-bold">{trimmed}</span></div>
            <div className="text-text-muted text-xs">Type <span className="text-accent-primary font-bold cursor-pointer underline">'help'</span> to see the available commands.</div>
          </div>
        ),
      };
  }
};

