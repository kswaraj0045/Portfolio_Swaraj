export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  jobTitle: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  location: string;
  responsibilities: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  technologies: string;
  url: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url: string;
}

export interface PersonalInfo {
  fullName: string;
  professionalTitle: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: string[];
  certifications: CertificationItem[];
  achievements: string[];
  languages: string[];
  extracurricular: string[];
}

export type ResumeTemplateId = 'classic' | 'modern' | 'minimal';

export interface ResumeTemplateMeta {
  id: ResumeTemplateId;
  name: string;
  description: string;
  badge: string;
  recommendedFor: string;
}
