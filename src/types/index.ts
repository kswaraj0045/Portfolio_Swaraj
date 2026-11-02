export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  category: 'Product & Analytics' | 'Full-Stack SaaS' | 'AI & Deep Learning' | 'Healthcare Systems';
  tagline: string;
  problem: string;
  solution: string;
  metrics: { label: string; value: string; detail?: string }[];
  keyFeatures: string[];
  techStack: string[];
  architectureHighlights: string[];
  productRelevance: string;
  githubUrl: string;
  liveUrl?: string;
  role: string;
  status: 'Production' | 'Live Demo' | 'Research Prototype' | 'Completed';
}

export interface FrameworkStage {
  id: string;
  step: string;
  title: string;
  summary: string;
  objective: string;
  activities: string[];
  deliverables: string[];
  exampleFromWork: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  badge: string;
  period?: string;
  location: string;
  type: 'milestone' | 'internship';
  description: string;
  highlights: string[];
  skills: string[];
  note?: string;
}

export interface LeadershipItem {
  id: string;
  organization: string;
  role: string;
  period?: string;
  description: string;
  impactPoints: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year?: string;
  badge?: string;
  credentialUrl?: string;
}

