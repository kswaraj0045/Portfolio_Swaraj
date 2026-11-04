import React, { useState } from 'react';
import { 
  User, 
  FileText, 
  Briefcase, 
  GraduationCap, 
  FolderGit2, 
  Wrench, 
  Award, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  AlertCircle,
  Sparkles,
  ChevronRight,
  Globe,
  Tag
} from 'lucide-react';
import { ResumeData, EducationItem, ExperienceItem, ProjectItem, CertificationItem } from '../../types/resume';

interface ResumeFormProps {
  data: ResumeData;
  onChange: (newData: ResumeData) => void;
  onLoadSample: () => void;
  onReset: () => void;
}

type FormTab = 'personal' | 'summary' | 'experience' | 'education' | 'projects' | 'skills' | 'certifications' | 'additional';

export const ResumeForm: React.FC<ResumeFormProps> = ({ data, onChange, onLoadSample, onReset }) => {
  const [activeTab, setActiveTab] = useState<FormTab>('personal');
  const [skillInput, setSkillInput] = useState('');
  const [achievementInput, setAchievementInput] = useState('');
  const [languageInput, setLanguageInput] = useState('');
  const [extracurricularInput, setExtracurricularInput] = useState('');

  // Update Personal Info
  const handlePersonalChange = (field: keyof typeof data.personalInfo, value: string) => {
    onChange({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        [field]: value
      }
    });
  };

  // Education Helpers
  const addEducation = () => {
    const newItem: EducationItem = {
      id: `edu-${Date.now()}`,
      institution: '',
      degree: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: '',
      location: '',
      description: ''
    };
    onChange({ ...data, education: [...data.education, newItem] });
  };

  const updateEducation = (id: string, field: keyof EducationItem, value: string) => {
    onChange({
      ...data,
      education: data.education.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    });
  };

  const removeEducation = (id: string) => {
    onChange({
      ...data,
      education: data.education.filter((item) => item.id !== id)
    });
  };

  // Experience Helpers
  const addExperience = () => {
    const newItem: ExperienceItem = {
      id: `exp-${Date.now()}`,
      company: '',
      jobTitle: '',
      employmentType: 'Full-time',
      startDate: '',
      endDate: '',
      location: '',
      responsibilities: ['']
    };
    onChange({ ...data, experience: [...data.experience, newItem] });
  };

  const updateExperience = (id: string, field: keyof ExperienceItem, value: any) => {
    onChange({
      ...data,
      experience: data.experience.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    });
  };

  const removeExperience = (id: string) => {
    onChange({
      ...data,
      experience: data.experience.filter((item) => item.id !== id)
    });
  };

  // Projects Helpers
  const addProject = () => {
    const newItem: ProjectItem = {
      id: `proj-${Date.now()}`,
      name: '',
      description: '',
      technologies: '',
      url: ''
    };
    onChange({ ...data, projects: [...data.projects, newItem] });
  };

  const updateProject = (id: string, field: keyof ProjectItem, value: string) => {
    onChange({
      ...data,
      projects: data.projects.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    });
  };

  const removeProject = (id: string) => {
    onChange({
      ...data,
      projects: data.projects.filter((item) => item.id !== id)
    });
  };

  // Certifications Helpers
  const addCertification = () => {
    const newItem: CertificationItem = {
      id: `cert-${Date.now()}`,
      name: '',
      issuer: '',
      date: '',
      url: ''
    };
    onChange({ ...data, certifications: [...data.certifications, newItem] });
  };

  const updateCertification = (id: string, field: keyof CertificationItem, value: string) => {
    onChange({
      ...data,
      certifications: data.certifications.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    });
  };

  const removeCertification = (id: string) => {
    onChange({
      ...data,
      certifications: data.certifications.filter((item) => item.id !== id)
    });
  };

  // Skills Helpers
  const addSkill = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!skillInput.trim()) return;
    if (!data.skills.includes(skillInput.trim())) {
      onChange({ ...data, skills: [...data.skills, skillInput.trim()] });
    }
    setSkillInput('');
  };

  const removeSkill = (skillToRemove: string) => {
    onChange({
      ...data,
      skills: data.skills.filter((s) => s !== skillToRemove)
    });
  };

  // Additional section helpers
  const addAchievement = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!achievementInput.trim()) return;
    onChange({ ...data, achievements: [...data.achievements, achievementInput.trim()] });
    setAchievementInput('');
  };

  const removeAchievement = (index: number) => {
    onChange({ ...data, achievements: data.achievements.filter((_, i) => i !== index) });
  };

  const addLanguage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!languageInput.trim()) return;
    onChange({ ...data, languages: [...data.languages, languageInput.trim()] });
    setLanguageInput('');
  };

  const removeLanguage = (index: number) => {
    onChange({ ...data, languages: data.languages.filter((_, i) => i !== index) });
  };

  const addExtracurricular = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!extracurricularInput.trim()) return;
    onChange({ ...data, extracurricular: [...data.extracurricular, extracurricularInput.trim()] });
    setExtracurricularInput('');
  };

  const removeExtracurricular = (index: number) => {
    onChange({ ...data, extracurricular: data.extracurricular.filter((_, i) => i !== index) });
  };

  // Calculate completion percentage
  const calculateProgress = () => {
    let score = 0;
    if (data.personalInfo.fullName) score += 15;
    if (data.personalInfo.email) score += 10;
    if (data.personalInfo.phone) score += 5;
    if (data.personalInfo.professionalTitle) score += 10;
    if (data.summary.trim()) score += 15;
    if (data.experience.length > 0) score += 20;
    if (data.education.length > 0) score += 10;
    if (data.skills.length >= 3) score += 10;
    if (data.projects.length > 0 || data.certifications.length > 0) score += 5;
    return Math.min(100, score);
  };

  const progress = calculateProgress();

  const tabs = [
    { id: 'personal', label: 'Personal', icon: User, complete: !!data.personalInfo.fullName && !!data.personalInfo.email },
    { id: 'summary', label: 'Summary', icon: FileText, complete: !!data.summary.trim() },
    { id: 'experience', label: 'Experience', icon: Briefcase, complete: data.experience.length > 0 },
    { id: 'education', label: 'Education', icon: GraduationCap, complete: data.education.length > 0 },
    { id: 'projects', label: 'Projects', icon: FolderGit2, complete: data.projects.length > 0 },
    { id: 'skills', label: 'Skills', icon: Wrench, complete: data.skills.length >= 3 },
    { id: 'certifications', label: 'Certs', icon: Award, complete: data.certifications.length > 0 },
    { id: 'additional', label: 'More', icon: Tag, complete: data.achievements.length > 0 || data.languages.length > 0 }
  ];

  return (
    <div className="bg-bg-card rounded-2xl sm:rounded-3xl border border-border-subtle p-4 sm:p-6 md:p-8 space-y-6">
      
      {/* Header & Progress Indicator */}
      <div className="space-y-3 pb-4 border-b border-border-subtle/70">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-text-primary tracking-tight">
              Resume Editor
            </h2>
            <p className="text-xs font-mono text-text-muted mt-0.5">
              Live updates • Stored securely in your browser
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onLoadSample}
              className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-accent-primary bg-accent-primary/10 border border-accent-primary/30 hover:bg-accent-primary/20 transition-colors flex items-center gap-1.5 cursor-pointer min-h-[36px]"
              title="Populate with sample resume data"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sample Data</span>
            </button>
            <button
              onClick={onReset}
              className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-text-muted hover:text-white bg-bg-main border border-border-subtle hover:border-accent-primary/40 transition-colors cursor-pointer min-h-[36px]"
              title="Clear all fields"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5 pt-1">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-text-muted">Profile Strength</span>
            <span className="text-accent-primary font-bold">{progress}% Complete</span>
          </div>
          <div className="w-full h-1.5 bg-bg-main rounded-full overflow-hidden border border-border-subtle/50">
            <div 
              className="h-full bg-accent-primary transition-all duration-500 rounded-full shadow-[0_0_8px_rgba(179,38,53,0.5)]" 
              style={{ width: `${progress}%` }} 
            />
          </div>
        </div>
      </div>

      {/* Tab Navigation Pill Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as FormTab)}
              className={`px-3 py-2 rounded-xl text-xs font-mono font-medium flex items-center gap-1.5 shrink-0 transition-all cursor-pointer min-h-[40px] ${
                isActive
                  ? 'bg-accent-primary text-white shadow-card-glow font-bold'
                  : 'bg-bg-main text-text-secondary hover:text-text-primary hover:bg-bg-elevated border border-border-subtle'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
              {tab.complete && !isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
              )}
            </button>
          );
        })}
      </div>

      {/* =================================================================== */}
      {/* TAB 1: PERSONAL INFORMATION */}
      {/* =================================================================== */}
      {activeTab === 'personal' && (
        <div className="space-y-4 animate-fadeIn">
          <div className="text-xs font-mono text-accent-primary uppercase tracking-wider font-semibold">
            01 / Personal Information
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-text-secondary uppercase mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                value={data.personalInfo.fullName}
                onChange={(e) => handlePersonalChange('fullName', e.target.value)}
                placeholder="e.g. Swaraj Sanjay Khadalkar"
                className="w-full px-3.5 py-2.5 rounded-xl bg-bg-main border border-border-subtle text-text-primary text-sm focus:outline-none focus:border-accent-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-text-secondary uppercase mb-1.5">
                Professional Title *
              </label>
              <input
                type="text"
                value={data.personalInfo.professionalTitle}
                onChange={(e) => handlePersonalChange('professionalTitle', e.target.value)}
                placeholder="e.g. Associate Product Manager"
                className="w-full px-3.5 py-2.5 rounded-xl bg-bg-main border border-border-subtle text-text-primary text-sm focus:outline-none focus:border-accent-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-text-secondary uppercase mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                value={data.personalInfo.email}
                onChange={(e) => handlePersonalChange('email', e.target.value)}
                placeholder="you@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-bg-main border border-border-subtle text-text-primary text-sm focus:outline-none focus:border-accent-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-text-secondary uppercase mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                value={data.personalInfo.phone}
                onChange={(e) => handlePersonalChange('phone', e.target.value)}
                placeholder="+1 (555) 000-0000"
                className="w-full px-3.5 py-2.5 rounded-xl bg-bg-main border border-border-subtle text-text-primary text-sm focus:outline-none focus:border-accent-primary transition-colors"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-mono text-text-secondary uppercase mb-1.5">
                Location (City, State / Country)
              </label>
              <input
                type="text"
                value={data.personalInfo.location}
                onChange={(e) => handlePersonalChange('location', e.target.value)}
                placeholder="Pune, India or San Francisco, CA"
                className="w-full px-3.5 py-2.5 rounded-xl bg-bg-main border border-border-subtle text-text-primary text-sm focus:outline-none focus:border-accent-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-text-secondary uppercase mb-1.5">
                LinkedIn URL
              </label>
              <input
                type="url"
                value={data.personalInfo.linkedin}
                onChange={(e) => handlePersonalChange('linkedin', e.target.value)}
                placeholder="https://linkedin.com/in/username"
                className="w-full px-3.5 py-2.5 rounded-xl bg-bg-main border border-border-subtle text-text-primary text-sm focus:outline-none focus:border-accent-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-text-secondary uppercase mb-1.5">
                GitHub URL
              </label>
              <input
                type="url"
                value={data.personalInfo.github}
                onChange={(e) => handlePersonalChange('github', e.target.value)}
                placeholder="https://github.com/username"
                className="w-full px-3.5 py-2.5 rounded-xl bg-bg-main border border-border-subtle text-text-primary text-sm focus:outline-none focus:border-accent-primary transition-colors"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-mono text-text-secondary uppercase mb-1.5">
                Portfolio / Personal Website URL
              </label>
              <input
                type="url"
                value={data.personalInfo.portfolio}
                onChange={(e) => handlePersonalChange('portfolio', e.target.value)}
                placeholder="https://yourportfolio.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-bg-main border border-border-subtle text-text-primary text-sm focus:outline-none focus:border-accent-primary transition-colors"
              />
            </div>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* TAB 2: PROFESSIONAL SUMMARY */}
      {/* =================================================================== */}
      {activeTab === 'summary' && (
        <div className="space-y-4 animate-fadeIn">
          <div className="text-xs font-mono text-accent-primary uppercase tracking-wider font-semibold">
            02 / Professional Summary
          </div>

          <div>
            <label className="block text-xs font-mono text-text-secondary uppercase mb-1.5">
              Summary Statement
            </label>
            <p className="text-xs text-text-muted mb-2 font-sans">
              Provide a concise 2–4 sentence overview highlighting your core domain expertise, leadership impact, and quantitative outcomes.
            </p>
            <textarea
              rows={6}
              value={data.summary}
              onChange={(e) => onChange({ ...data, summary: e.target.value })}
              placeholder="e.g. Product-focused engineer with hands-on experience driving software feature delivery from PRD to launch..."
              className="w-full px-3.5 py-3 rounded-xl bg-bg-main border border-border-subtle text-text-primary text-sm focus:outline-none focus:border-accent-primary transition-colors leading-relaxed"
            />
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* TAB 3: WORK EXPERIENCE */}
      {/* =================================================================== */}
      {activeTab === 'experience' && (
        <div className="space-y-5 animate-fadeIn">
          <div className="flex justify-between items-center">
            <div className="text-xs font-mono text-accent-primary uppercase tracking-wider font-semibold">
              03 / Work Experience ({data.experience.length})
            </div>
            <button
              onClick={addExperience}
              className="px-3 py-1.5 rounded-lg text-xs font-mono text-accent-primary bg-accent-primary/10 border border-accent-primary/30 hover:bg-accent-primary/20 transition-colors flex items-center gap-1.5 cursor-pointer min-h-[36px]"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Position</span>
            </button>
          </div>

          {data.experience.length === 0 ? (
            <div className="p-8 text-center rounded-2xl border border-dashed border-border-subtle text-text-muted space-y-2">
              <Briefcase className="w-8 h-8 mx-auto text-text-muted/60" />
              <p className="text-xs font-mono">No work experience added yet.</p>
              <button
                onClick={addExperience}
                className="text-xs font-mono text-accent-primary underline hover:text-accent-hover cursor-pointer"
              >
                + Add your first role
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {data.experience.map((exp, index) => (
                <div key={exp.id} className="p-4 sm:p-5 rounded-2xl bg-bg-main border border-border-subtle space-y-3 relative group">
                  <div className="flex justify-between items-center border-b border-border-subtle/50 pb-2">
                    <span className="text-xs font-mono text-accent-primary font-bold">
                      #{index + 1} {exp.company || 'New Organization'}
                    </span>
                    <button
                      onClick={() => removeExperience(exp.id)}
                      className="text-text-muted hover:text-accent-primary p-1.5 rounded-lg transition-colors cursor-pointer"
                      title="Remove experience"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-text-secondary uppercase mb-1">Company *</label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                        placeholder="Company name"
                        className="w-full px-3 py-2 rounded-lg bg-bg-card border border-border-subtle text-text-primary text-xs focus:outline-none focus:border-accent-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-text-secondary uppercase mb-1">Job Title *</label>
                      <input
                        type="text"
                        value={exp.jobTitle}
                        onChange={(e) => updateExperience(exp.id, 'jobTitle', e.target.value)}
                        placeholder="e.g. Product Analyst"
                        className="w-full px-3 py-2 rounded-lg bg-bg-card border border-border-subtle text-text-primary text-xs focus:outline-none focus:border-accent-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-text-secondary uppercase mb-1">Start Date</label>
                      <input
                        type="text"
                        value={exp.startDate}
                        onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                        placeholder="e.g. Jun 2023"
                        className="w-full px-3 py-2 rounded-lg bg-bg-card border border-border-subtle text-text-primary text-xs focus:outline-none focus:border-accent-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-text-secondary uppercase mb-1">End Date</label>
                      <input
                        type="text"
                        value={exp.endDate}
                        onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                        placeholder="e.g. Present"
                        className="w-full px-3 py-2 rounded-lg bg-bg-card border border-border-subtle text-text-primary text-xs focus:outline-none focus:border-accent-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-text-secondary uppercase mb-1">Location</label>
                      <input
                        type="text"
                        value={exp.location}
                        onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                        placeholder="e.g. Pune, India or Remote"
                        className="w-full px-3 py-2 rounded-lg bg-bg-card border border-border-subtle text-text-primary text-xs focus:outline-none focus:border-accent-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-text-secondary uppercase mb-1">Employment Type</label>
                      <input
                        type="text"
                        value={exp.employmentType}
                        onChange={(e) => updateExperience(exp.id, 'employmentType', e.target.value)}
                        placeholder="Full-time / Internship"
                        className="w-full px-3 py-2 rounded-lg bg-bg-card border border-border-subtle text-text-primary text-xs focus:outline-none focus:border-accent-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-text-secondary uppercase mb-1">
                      Responsibilities &amp; Achievements (One per line)
                    </label>
                    <textarea
                      rows={3}
                      value={exp.responsibilities.join('\n')}
                      onChange={(e) => updateExperience(exp.id, 'responsibilities', e.target.value.split('\n'))}
                      placeholder="Authored PRDs for core SaaS modules...&#10;Decreased user churn by 18% through workflow simplification..."
                      className="w-full px-3 py-2 rounded-lg bg-bg-card border border-border-subtle text-text-primary text-xs focus:outline-none focus:border-accent-primary leading-relaxed"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* =================================================================== */}
      {/* TAB 4: EDUCATION */}
      {/* =================================================================== */}
      {activeTab === 'education' && (
        <div className="space-y-5 animate-fadeIn">
          <div className="flex justify-between items-center">
            <div className="text-xs font-mono text-accent-primary uppercase tracking-wider font-semibold">
              04 / Education ({data.education.length})
            </div>
            <button
              onClick={addEducation}
              className="px-3 py-1.5 rounded-lg text-xs font-mono text-accent-primary bg-accent-primary/10 border border-accent-primary/30 hover:bg-accent-primary/20 transition-colors flex items-center gap-1.5 cursor-pointer min-h-[36px]"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Education</span>
            </button>
          </div>

          {data.education.length === 0 ? (
            <div className="p-8 text-center rounded-2xl border border-dashed border-border-subtle text-text-muted space-y-2">
              <GraduationCap className="w-8 h-8 mx-auto text-text-muted/60" />
              <p className="text-xs font-mono">No education history added yet.</p>
              <button
                onClick={addEducation}
                className="text-xs font-mono text-accent-primary underline hover:text-accent-hover cursor-pointer"
              >
                + Add your university / institution
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={edu.id} className="p-4 sm:p-5 rounded-2xl bg-bg-main border border-border-subtle space-y-3">
                  <div className="flex justify-between items-center border-b border-border-subtle/50 pb-2">
                    <span className="text-xs font-mono text-accent-primary font-bold">
                      #{index + 1} {edu.institution || 'New Institution'}
                    </span>
                    <button
                      onClick={() => removeEducation(edu.id)}
                      className="text-text-muted hover:text-accent-primary p-1.5 rounded-lg transition-colors cursor-pointer"
                      title="Remove education"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-text-secondary uppercase mb-1">Institution Name *</label>
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                        placeholder="e.g. MIT Academy of Engineering"
                        className="w-full px-3 py-2 rounded-lg bg-bg-card border border-border-subtle text-text-primary text-xs focus:outline-none focus:border-accent-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-text-secondary uppercase mb-1">Degree *</label>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                        placeholder="e.g. B.Tech"
                        className="w-full px-3 py-2 rounded-lg bg-bg-card border border-border-subtle text-text-primary text-xs focus:outline-none focus:border-accent-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-text-secondary uppercase mb-1">Field of Study</label>
                      <input
                        type="text"
                        value={edu.fieldOfStudy}
                        onChange={(e) => updateEducation(edu.id, 'fieldOfStudy', e.target.value)}
                        placeholder="e.g. Computer Engineering"
                        className="w-full px-3 py-2 rounded-lg bg-bg-card border border-border-subtle text-text-primary text-xs focus:outline-none focus:border-accent-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-text-secondary uppercase mb-1">Location</label>
                      <input
                        type="text"
                        value={edu.location}
                        onChange={(e) => updateEducation(edu.id, 'location', e.target.value)}
                        placeholder="e.g. Pune, India"
                        className="w-full px-3 py-2 rounded-lg bg-bg-card border border-border-subtle text-text-primary text-xs focus:outline-none focus:border-accent-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-text-secondary uppercase mb-1">Start Date</label>
                      <input
                        type="text"
                        value={edu.startDate}
                        onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                        placeholder="e.g. 2023"
                        className="w-full px-3 py-2 rounded-lg bg-bg-card border border-border-subtle text-text-primary text-xs focus:outline-none focus:border-accent-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-text-secondary uppercase mb-1">End Date</label>
                      <input
                        type="text"
                        value={edu.endDate}
                        onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                        placeholder="e.g. 2027"
                        className="w-full px-3 py-2 rounded-lg bg-bg-card border border-border-subtle text-text-primary text-xs focus:outline-none focus:border-accent-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-text-secondary uppercase mb-1">
                      Honors, GPA or Key Coursework
                    </label>
                    <input
                      type="text"
                      value={edu.description}
                      onChange={(e) => updateEducation(edu.id, 'description', e.target.value)}
                      placeholder="e.g. First Class with Distinction, Academic Finalist: Avishkar 2025"
                      className="w-full px-3 py-2 rounded-lg bg-bg-card border border-border-subtle text-text-primary text-xs focus:outline-none focus:border-accent-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* =================================================================== */}
      {/* TAB 5: PROJECTS */}
      {/* =================================================================== */}
      {activeTab === 'projects' && (
        <div className="space-y-5 animate-fadeIn">
          <div className="flex justify-between items-center">
            <div className="text-xs font-mono text-accent-primary uppercase tracking-wider font-semibold">
              05 / Projects ({data.projects.length})
            </div>
            <button
              onClick={addProject}
              className="px-3 py-1.5 rounded-lg text-xs font-mono text-accent-primary bg-accent-primary/10 border border-accent-primary/30 hover:bg-accent-primary/20 transition-colors flex items-center gap-1.5 cursor-pointer min-h-[36px]"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Project</span>
            </button>
          </div>

          {data.projects.length === 0 ? (
            <div className="p-8 text-center rounded-2xl border border-dashed border-border-subtle text-text-muted space-y-2">
              <FolderGit2 className="w-8 h-8 mx-auto text-text-muted/60" />
              <p className="text-xs font-mono">No projects added yet.</p>
              <button
                onClick={addProject}
                className="text-xs font-mono text-accent-primary underline hover:text-accent-hover cursor-pointer"
              >
                + Add your first project
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {data.projects.map((proj, index) => (
                <div key={proj.id} className="p-4 sm:p-5 rounded-2xl bg-bg-main border border-border-subtle space-y-3">
                  <div className="flex justify-between items-center border-b border-border-subtle/50 pb-2">
                    <span className="text-xs font-mono text-accent-primary font-bold">
                      #{index + 1} {proj.name || 'New Project'}
                    </span>
                    <button
                      onClick={() => removeProject(proj.id)}
                      className="text-text-muted hover:text-accent-primary p-1.5 rounded-lg transition-colors cursor-pointer"
                      title="Remove project"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-text-secondary uppercase mb-1">Project Name *</label>
                      <input
                        type="text"
                        value={proj.name}
                        onChange={(e) => updateProject(proj.id, 'name', e.target.value)}
                        placeholder="e.g. ScolioVis AI Diagnostic Suite"
                        className="w-full px-3 py-2 rounded-lg bg-bg-card border border-border-subtle text-text-primary text-xs focus:outline-none focus:border-accent-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-text-secondary uppercase mb-1">Project URL</label>
                      <input
                        type="url"
                        value={proj.url}
                        onChange={(e) => updateProject(proj.id, 'url', e.target.value)}
                        placeholder="https://github.com/..."
                        className="w-full px-3 py-2 rounded-lg bg-bg-card border border-border-subtle text-text-primary text-xs focus:outline-none focus:border-accent-primary"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-mono text-text-secondary uppercase mb-1">Technologies Used</label>
                      <input
                        type="text"
                        value={proj.technologies}
                        onChange={(e) => updateProject(proj.id, 'technologies', e.target.value)}
                        placeholder="e.g. Python, PyTorch, React, PostgreSQL, Docker"
                        className="w-full px-3 py-2 rounded-lg bg-bg-card border border-border-subtle text-text-primary text-xs focus:outline-none focus:border-accent-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-text-secondary uppercase mb-1">Description &amp; Impact</label>
                    <textarea
                      rows={2}
                      value={proj.description}
                      onChange={(e) => updateProject(proj.id, 'description', e.target.value)}
                      placeholder="Engineered computer vision pipeline calculating clinical spinal curvature Cobb angles with MAE < 5°..."
                      className="w-full px-3 py-2 rounded-lg bg-bg-card border border-border-subtle text-text-primary text-xs focus:outline-none focus:border-accent-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* =================================================================== */}
      {/* TAB 6: TECHNICAL SKILLS */}
      {/* =================================================================== */}
      {activeTab === 'skills' && (
        <div className="space-y-4 animate-fadeIn">
          <div className="text-xs font-mono text-accent-primary uppercase tracking-wider font-semibold">
            06 / Technical &amp; Professional Skills ({data.skills.length})
          </div>

          <form onSubmit={addSkill} className="flex gap-2">
            <input
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              placeholder="e.g. Product Strategy, SQL, React, JIRA, A/B Testing"
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-bg-main border border-border-subtle text-text-primary text-sm focus:outline-none focus:border-accent-primary"
            />
            <button
              type="submit"
              className="px-4 py-2.5 rounded-xl text-xs font-mono font-medium text-white bg-accent-primary hover:bg-accent-hover transition-colors flex items-center gap-1.5 cursor-pointer min-h-[44px]"
            >
              <Plus className="w-4 h-4" />
              <span>Add</span>
            </button>
          </form>

          <div className="flex flex-wrap gap-2 pt-2">
            {data.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-bg-main border border-border-subtle text-text-primary group"
              >
                <span>{skill}</span>
                <button
                  onClick={() => removeSkill(skill)}
                  className="text-text-muted hover:text-accent-primary transition-colors cursor-pointer"
                  title="Remove skill"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>

          {/* Quick preset suggestions */}
          <div className="pt-3 border-t border-border-subtle/50">
            <div className="text-[11px] font-mono text-text-muted mb-2">QUICK SUGGESTIONS (CLICK TO ADD):</div>
            <div className="flex flex-wrap gap-1.5">
              {[
                'Product Strategy', 'PRD Authoring', 'User Research', 'SQL Analysis', 
                'Roadmapping', 'Agile / Scrum', 'A/B Testing', 'Python', 'React', 'Data Modeling'
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => {
                    if (!data.skills.includes(suggestion)) {
                      onChange({ ...data, skills: [...data.skills, suggestion] });
                    }
                  }}
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-bg-main text-text-secondary hover:text-accent-primary border border-border-subtle transition-colors cursor-pointer"
                >
                  + {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* TAB 7: CERTIFICATIONS */}
      {/* =================================================================== */}
      {activeTab === 'certifications' && (
        <div className="space-y-5 animate-fadeIn">
          <div className="flex justify-between items-center">
            <div className="text-xs font-mono text-accent-primary uppercase tracking-wider font-semibold">
              07 / Certifications ({data.certifications.length})
            </div>
            <button
              onClick={addCertification}
              className="px-3 py-1.5 rounded-lg text-xs font-mono text-accent-primary bg-accent-primary/10 border border-accent-primary/30 hover:bg-accent-primary/20 transition-colors flex items-center gap-1.5 cursor-pointer min-h-[36px]"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Certification</span>
            </button>
          </div>

          {data.certifications.length === 0 ? (
            <div className="p-8 text-center rounded-2xl border border-dashed border-border-subtle text-text-muted space-y-2">
              <Award className="w-8 h-8 mx-auto text-text-muted/60" />
              <p className="text-xs font-mono">No certifications added yet.</p>
              <button
                onClick={addCertification}
                className="text-xs font-mono text-accent-primary underline hover:text-accent-hover cursor-pointer"
              >
                + Add your certification or license
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {data.certifications.map((cert, index) => (
                <div key={cert.id} className="p-4 sm:p-5 rounded-2xl bg-bg-main border border-border-subtle space-y-3">
                  <div className="flex justify-between items-center border-b border-border-subtle/50 pb-2">
                    <span className="text-xs font-mono text-accent-primary font-bold">
                      #{index + 1} {cert.name || 'New Certification'}
                    </span>
                    <button
                      onClick={() => removeCertification(cert.id)}
                      className="text-text-muted hover:text-accent-primary p-1.5 rounded-lg transition-colors cursor-pointer"
                      title="Remove certification"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-text-secondary uppercase mb-1">Certification Name *</label>
                      <input
                        type="text"
                        value={cert.name}
                        onChange={(e) => updateCertification(cert.id, 'name', e.target.value)}
                        placeholder="e.g. Certified Scrum Product Owner"
                        className="w-full px-3 py-2 rounded-lg bg-bg-card border border-border-subtle text-text-primary text-xs focus:outline-none focus:border-accent-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-text-secondary uppercase mb-1">Issuing Organization *</label>
                      <input
                        type="text"
                        value={cert.issuer}
                        onChange={(e) => updateCertification(cert.id, 'issuer', e.target.value)}
                        placeholder="e.g. Scrum Alliance / AWS"
                        className="w-full px-3 py-2 rounded-lg bg-bg-card border border-border-subtle text-text-primary text-xs focus:outline-none focus:border-accent-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-text-secondary uppercase mb-1">Issue Date</label>
                      <input
                        type="text"
                        value={cert.date}
                        onChange={(e) => updateCertification(cert.id, 'date', e.target.value)}
                        placeholder="e.g. 2024"
                        className="w-full px-3 py-2 rounded-lg bg-bg-card border border-border-subtle text-text-primary text-xs focus:outline-none focus:border-accent-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-text-secondary uppercase mb-1">Credential URL</label>
                      <input
                        type="url"
                        value={cert.url}
                        onChange={(e) => updateCertification(cert.id, 'url', e.target.value)}
                        placeholder="https://..."
                        className="w-full px-3 py-2 rounded-lg bg-bg-card border border-border-subtle text-text-primary text-xs focus:outline-none focus:border-accent-primary"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* =================================================================== */}
      {/* TAB 8: ADDITIONAL SECTIONS (Achievements, Languages, Activities) */}
      {/* =================================================================== */}
      {activeTab === 'additional' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="text-xs font-mono text-accent-primary uppercase tracking-wider font-semibold">
            08 / Additional Information
          </div>

          {/* Achievements */}
          <div className="space-y-2">
            <label className="block text-xs font-mono text-text-secondary uppercase">
              Key Achievements &amp; Honors
            </label>
            <form onSubmit={addAchievement} className="flex gap-2">
              <input
                type="text"
                value={achievementInput}
                onChange={(e) => setAchievementInput(e.target.value)}
                placeholder="e.g. 1st Place Winner – Hackathon 2024"
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-bg-main border border-border-subtle text-text-primary text-xs focus:outline-none focus:border-accent-primary"
              />
              <button
                type="submit"
                className="px-3.5 py-2 rounded-xl text-xs font-mono font-medium text-white bg-accent-primary hover:bg-accent-hover cursor-pointer"
              >
                Add
              </button>
            </form>
            <div className="space-y-1.5 pt-1">
              {data.achievements.map((ach, i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-bg-main border border-border-subtle text-xs text-text-primary">
                  <span>{ach}</span>
                  <button onClick={() => removeAchievement(i)} className="text-text-muted hover:text-accent-primary">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-2 pt-2 border-t border-border-subtle/50">
            <label className="block text-xs font-mono text-text-secondary uppercase">
              Languages
            </label>
            <form onSubmit={addLanguage} className="flex gap-2">
              <input
                type="text"
                value={languageInput}
                onChange={(e) => setLanguageInput(e.target.value)}
                placeholder="e.g. English (Native), Spanish (Conversational)"
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-bg-main border border-border-subtle text-text-primary text-xs focus:outline-none focus:border-accent-primary"
              />
              <button
                type="submit"
                className="px-3.5 py-2 rounded-xl text-xs font-mono font-medium text-white bg-accent-primary hover:bg-accent-hover cursor-pointer"
              >
                Add
              </button>
            </form>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {data.languages.map((lang, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-bg-main border border-border-subtle text-xs text-text-primary">
                  <span>{lang}</span>
                  <button onClick={() => removeLanguage(i)} className="text-text-muted hover:text-accent-primary">
                    <Trash2 className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Extracurricular Activities */}
          <div className="space-y-2 pt-2 border-t border-border-subtle/50">
            <label className="block text-xs font-mono text-text-secondary uppercase">
              Relevant Extracurricular Activities
            </label>
            <form onSubmit={addExtracurricular} className="flex gap-2">
              <input
                type="text"
                value={extracurricularInput}
                onChange={(e) => setExtracurricularInput(e.target.value)}
                placeholder="e.g. Student Club President, Volunteer Coding Instructor"
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-bg-main border border-border-subtle text-text-primary text-xs focus:outline-none focus:border-accent-primary"
              />
              <button
                type="submit"
                className="px-3.5 py-2 rounded-xl text-xs font-mono font-medium text-white bg-accent-primary hover:bg-accent-hover cursor-pointer"
              >
                Add
              </button>
            </form>
            <div className="space-y-1.5 pt-1">
              {data.extracurricular.map((act, i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-bg-main border border-border-subtle text-xs text-text-primary">
                  <span>{act}</span>
                  <button onClick={() => removeExtracurricular(i)} className="text-text-muted hover:text-accent-primary">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Navigation Footer for Wizard Tabs */}
      <div className="pt-4 border-t border-border-subtle/60 flex items-center justify-between">
        <button
          disabled={activeTab === 'personal'}
          onClick={() => {
            const currentIndex = tabs.findIndex(t => t.id === activeTab);
            if (currentIndex > 0) setActiveTab(tabs[currentIndex - 1].id as FormTab);
          }}
          className="px-4 py-2 rounded-xl text-xs font-mono text-text-secondary hover:text-text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          ← Previous
        </button>

        <button
          disabled={activeTab === 'additional'}
          onClick={() => {
            const currentIndex = tabs.findIndex(t => t.id === activeTab);
            if (currentIndex < tabs.length - 1) setActiveTab(tabs[currentIndex + 1].id as FormTab);
          }}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold text-white bg-accent-primary hover:bg-accent-hover disabled:opacity-30 disabled:cursor-not-allowed transition-colors shadow-card-glow cursor-pointer"
        >
          <span>Next Section</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
