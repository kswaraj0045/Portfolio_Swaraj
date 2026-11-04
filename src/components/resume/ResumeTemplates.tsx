import React from 'react';
import { ResumeData, ResumeTemplateId } from '../../types/resume';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, ExternalLink } from 'lucide-react';

interface TemplateProps {
  data: ResumeData;
}

/**
 * =========================================================================
 * TEMPLATE 1: CLASSIC ATS RESUME
 * Ultra-compatible single-column format, pure monochrome typography,
 * standard headings and structure designed for automated ATS parsing.
 * =========================================================================
 */
export const ClassicATSTemplate: React.FC<TemplateProps> = ({ data }) => {
  const { personalInfo, summary, education, experience, projects, skills, certifications, achievements, languages, extracurricular } = data;

  return (
    <div className="resume-document bg-white text-neutral-900 font-serif leading-normal p-8 sm:p-12 text-[12.5px] max-w-[794px] mx-auto min-h-[1123px] shadow-sm select-text">
      {/* Header */}
      <header className="text-center pb-4 border-b border-neutral-900 mb-5">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900 uppercase">
          {personalInfo.fullName || 'YOUR FULL NAME'}
        </h1>
        {personalInfo.professionalTitle && (
          <p className="text-sm font-medium text-neutral-700 mt-1 uppercase tracking-wider font-sans">
            {personalInfo.professionalTitle}
          </p>
        )}

        {/* Contact Line */}
        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mt-2 text-xs text-neutral-700 font-sans">
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.phone && (
            <>
              <span>•</span>
              <span>{personalInfo.phone}</span>
            </>
          )}
          {personalInfo.email && (
            <>
              <span>•</span>
              <span className="underline">{personalInfo.email}</span>
            </>
          )}
          {personalInfo.linkedin && (
            <>
              <span>•</span>
              <span className="underline">LinkedIn</span>
            </>
          )}
          {personalInfo.github && (
            <>
              <span>•</span>
              <span className="underline">GitHub</span>
            </>
          )}
          {personalInfo.portfolio && (
            <>
              <span>•</span>
              <span className="underline">Portfolio</span>
            </>
          )}
        </div>
      </header>

      {/* Professional Summary */}
      {summary && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-neutral-400 pb-1 mb-2 text-neutral-900 font-sans">
            Professional Summary
          </h2>
          <p className="text-neutral-800 leading-relaxed text-justify">
            {summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-neutral-400 pb-1 mb-2 text-neutral-900 font-sans">
            Work Experience
          </h2>
          <div className="space-y-3.5">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline font-sans text-xs">
                  <span className="font-bold text-neutral-900 text-sm">{exp.company}</span>
                  <span className="text-neutral-700 italic">
                    {exp.startDate} – {exp.endDate || 'Present'}
                  </span>
                </div>
                <div className="flex justify-between items-baseline font-sans text-xs mb-1 text-neutral-800">
                  <span className="font-semibold italic">{exp.jobTitle} {exp.employmentType ? `(${exp.employmentType})` : ''}</span>
                  {exp.location && <span className="text-neutral-600">{exp.location}</span>}
                </div>
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <ul className="list-disc ml-5 space-y-1 text-neutral-800 text-[12px] leading-relaxed">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-neutral-400 pb-1 mb-2 text-neutral-900 font-sans">
            Education
          </h2>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline font-sans text-xs">
                  <span className="font-bold text-neutral-900 text-sm">{edu.institution}</span>
                  <span className="text-neutral-700">
                    {edu.startDate} – {edu.endDate || 'Present'}
                  </span>
                </div>
                <div className="flex justify-between items-baseline font-sans text-xs text-neutral-800">
                  <span className="italic">{edu.degree}{edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ''}</span>
                  {edu.location && <span className="text-neutral-600">{edu.location}</span>}
                </div>
                {edu.description && (
                  <p className="text-neutral-700 text-[11.5px] mt-1 font-serif">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-neutral-400 pb-1 mb-2 text-neutral-900 font-sans">
            Technical &amp; Academic Projects
          </h2>
          <div className="space-y-3">
            {projects.map((proj) => (
              <div key={proj.id}>
                <div className="flex justify-between items-baseline font-sans text-xs">
                  <span className="font-bold text-neutral-900">{proj.name}</span>
                  {proj.url && <span className="text-neutral-600 text-[11px] underline">Link</span>}
                </div>
                {proj.technologies && (
                  <div className="text-[11px] font-sans text-neutral-700 italic mb-1">
                    Technologies: {proj.technologies}
                  </div>
                )}
                <p className="text-neutral-800 text-[12px] leading-relaxed">
                  {proj.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-neutral-400 pb-1 mb-2 text-neutral-900 font-sans">
            Technical &amp; Professional Skills
          </h2>
          <p className="text-neutral-800 text-[12px] leading-relaxed font-sans">
            {skills.join('  •  ')}
          </p>
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-neutral-400 pb-1 mb-2 text-neutral-900 font-sans">
            Certifications &amp; Credentials
          </h2>
          <div className="space-y-1.5 font-sans text-xs">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex justify-between items-baseline">
                <span className="font-medium text-neutral-900">
                  {cert.name} — <span className="text-neutral-700">{cert.issuer}</span>
                </span>
                {cert.date && <span className="text-neutral-600">{cert.date}</span>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Additional: Achievements & Languages */}
      {(achievements.length > 0 || languages.length > 0 || extracurricular.length > 0) && (
        <section className="mb-4">
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-neutral-400 pb-1 mb-2 text-neutral-900 font-sans">
            Honors &amp; Additional Activities
          </h2>
          {achievements.length > 0 && (
            <div className="mb-2">
              <span className="font-sans font-bold text-xs text-neutral-900">Achievements: </span>
              <span className="text-neutral-800 text-xs">{achievements.join(' • ')}</span>
            </div>
          )}
          {languages.length > 0 && (
            <div className="mb-2">
              <span className="font-sans font-bold text-xs text-neutral-900">Languages: </span>
              <span className="text-neutral-800 text-xs">{languages.join(', ')}</span>
            </div>
          )}
          {extracurricular.length > 0 && (
            <div>
              <span className="font-sans font-bold text-xs text-neutral-900">Extracurricular: </span>
              <span className="text-neutral-800 text-xs">{extracurricular.join(' • ')}</span>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

/**
 * =========================================================================
 * TEMPLATE 2: MODERN PROFESSIONAL RESUME
 * Striking header layout, subtle crimson highlight rule, refined
 * sans-serif typography (Sora / Inter feel), clean pills for skills.
 * =========================================================================
 */
export const ModernProfessionalTemplate: React.FC<TemplateProps> = ({ data }) => {
  const { personalInfo, summary, education, experience, projects, skills, certifications, achievements, languages, extracurricular } = data;

  return (
    <div className="resume-document bg-white text-neutral-800 font-sans leading-normal p-8 sm:p-12 text-[12.5px] max-w-[794px] mx-auto min-h-[1123px] shadow-sm select-text">
      {/* Modern Header with subtle crimson accent touch */}
      <header className="pb-5 mb-6 border-b-2 border-neutral-100 relative">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B32635]" />
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950 font-heading">
                {personalInfo.fullName || 'Your Full Name'}
              </h1>
            </div>
            {personalInfo.professionalTitle && (
              <p className="text-sm font-semibold text-[#B32635] mt-1 tracking-wide">
                {personalInfo.professionalTitle}
              </p>
            )}
          </div>

          {/* Contact Details Grid */}
          <div className="text-right text-xs text-neutral-600 space-y-1 self-start sm:self-auto">
            {personalInfo.email && (
              <div className="flex items-center sm:justify-end gap-1.5">
                <span>{personalInfo.email}</span>
                <Mail className="w-3.5 h-3.5 text-neutral-400" />
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center sm:justify-end gap-1.5">
                <span>{personalInfo.phone}</span>
                <Phone className="w-3.5 h-3.5 text-neutral-400" />
              </div>
            )}
            {personalInfo.location && (
              <div className="flex items-center sm:justify-end gap-1.5">
                <span>{personalInfo.location}</span>
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
              </div>
            )}
            <div className="flex items-center sm:justify-end gap-2 pt-0.5 text-[11px] text-[#B32635] font-medium">
              {personalInfo.linkedin && <span>LinkedIn</span>}
              {personalInfo.github && <span>• GitHub</span>}
              {personalInfo.portfolio && <span>• Portfolio</span>}
            </div>
          </div>
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-6">
          <h2 className="text-xs font-bold text-neutral-900 uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-1.5 h-3 bg-[#B32635] rounded-sm" />
            <span>Executive Summary</span>
          </h2>
          <p className="text-neutral-700 leading-relaxed text-[12px] pl-3 border-l-2 border-neutral-100">
            {summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xs font-bold text-neutral-900 uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="w-1.5 h-3 bg-[#B32635] rounded-sm" />
            <span>Professional Experience</span>
          </h2>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id} className="relative pl-4 border-l-2 border-neutral-200">
                <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#B32635]" />
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-bold text-neutral-950">{exp.jobTitle}</h3>
                  <span className="text-xs font-mono font-medium text-neutral-500">
                    {exp.startDate} – {exp.endDate || 'Present'}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs text-neutral-600 mb-2">
                  <span className="font-semibold text-neutral-800">{exp.company}</span>
                  {exp.location && <span>{exp.location}</span>}
                </div>
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <ul className="list-disc ml-4 space-y-1 text-neutral-700 text-[12px] leading-relaxed">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 2-Column Grid: Education & Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Education */}
        {education.length > 0 && (
          <section>
            <h2 className="text-xs font-bold text-neutral-900 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-[#B32635] rounded-sm" />
              <span>Education</span>
            </h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="bg-neutral-50 p-3 rounded-lg border border-neutral-200">
                  <div className="text-xs font-bold text-neutral-950">{edu.institution}</div>
                  <div className="text-xs font-medium text-[#B32635] mt-0.5">
                    {edu.degree} {edu.fieldOfStudy ? `in ${edu.fieldOfStudy}` : ''}
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-1 flex justify-between">
                    <span>{edu.startDate} – {edu.endDate || 'Present'}</span>
                    {edu.location && <span>{edu.location}</span>}
                  </div>
                  {edu.description && (
                    <p className="text-[11px] text-neutral-600 mt-1.5 pt-1.5 border-t border-neutral-200">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <section>
            <h2 className="text-xs font-bold text-neutral-900 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-[#B32635] rounded-sm" />
              <span>Key Projects</span>
            </h2>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id} className="bg-neutral-50 p-3 rounded-lg border border-neutral-200">
                  <div className="text-xs font-bold text-neutral-950 flex justify-between items-center">
                    <span>{proj.name}</span>
                    {proj.url && <ExternalLink className="w-3 h-3 text-[#B32635]" />}
                  </div>
                  {proj.technologies && (
                    <div className="text-[10px] font-mono font-medium text-neutral-600 mt-0.5">
                      {proj.technologies}
                    </div>
                  )}
                  <p className="text-[11.5px] text-neutral-700 mt-1.5 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xs font-bold text-neutral-900 uppercase tracking-widest mb-2.5 flex items-center gap-2">
            <span className="w-1.5 h-3 bg-[#B32635] rounded-sm" />
            <span>Skills &amp; Capabilities</span>
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill, idx) => (
              <span 
                key={idx}
                className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-neutral-100 text-neutral-800 border border-neutral-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Certifications & Additional */}
      {(certifications.length > 0 || achievements.length > 0 || languages.length > 0) && (
        <section className="pt-2 border-t border-neutral-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {certifications.length > 0 && (
              <div>
                <h3 className="font-bold text-neutral-900 mb-1.5 uppercase text-[11px] tracking-wider">
                  Certifications
                </h3>
                <div className="space-y-1">
                  {certifications.map((c) => (
                    <div key={c.id} className="text-neutral-700 text-[11.5px]">
                      <span className="font-semibold text-neutral-900">{c.name}</span> • {c.issuer} {c.date && `(${c.date})`}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {(achievements.length > 0 || languages.length > 0) && (
              <div>
                <h3 className="font-bold text-neutral-900 mb-1.5 uppercase text-[11px] tracking-wider">
                  Achievements &amp; Languages
                </h3>
                {achievements.length > 0 && (
                  <p className="text-neutral-700 text-[11.5px] mb-1">
                    <strong className="text-neutral-900 font-semibold">Honors: </strong> {achievements.join(' • ')}
                  </p>
                )}
                {languages.length > 0 && (
                  <p className="text-neutral-700 text-[11.5px]">
                    <strong className="text-neutral-900 font-semibold">Languages: </strong> {languages.join(', ')}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

/**
 * =========================================================================
 * TEMPLATE 3: MINIMAL RESUME
 * Ultra-clean, spacious, understated modern typography, balanced margins,
 * focus on clarity, content quality, and unembellished readability.
 * =========================================================================
 */
export const MinimalTemplate: React.FC<TemplateProps> = ({ data }) => {
  const { personalInfo, summary, education, experience, projects, skills, certifications, achievements, languages, extracurricular } = data;

  return (
    <div className="resume-document bg-white text-neutral-800 font-sans leading-relaxed p-8 sm:p-12 text-[12px] max-w-[794px] mx-auto min-h-[1123px] shadow-sm select-text">
      {/* Minimal Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-light text-neutral-900 tracking-tight">
          {personalInfo.fullName || 'Your Full Name'}
        </h1>
        {personalInfo.professionalTitle && (
          <p className="text-sm font-normal text-neutral-500 mt-1">
            {personalInfo.professionalTitle}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-xs text-neutral-500 border-t border-neutral-100 pt-3">
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.linkedin && <span>LinkedIn</span>}
          {personalInfo.github && <span>GitHub</span>}
          {personalInfo.portfolio && <span>Portfolio</span>}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-7">
          <p className="text-neutral-600 text-[12.5px] leading-relaxed max-w-2xl">
            {summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-7">
          <h2 className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-4">
            Experience
          </h2>
          <div className="space-y-5">
            {experience.map((exp) => (
              <div key={exp.id} className="space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <div className="font-medium text-neutral-900 text-sm">
                    {exp.jobTitle} <span className="text-neutral-400 font-normal">at</span> {exp.company}
                  </div>
                  <span className="text-xs text-neutral-400 font-mono">
                    {exp.startDate} – {exp.endDate || 'Present'}
                  </span>
                </div>
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <ul className="list-disc ml-4 space-y-1 text-neutral-600 text-[11.5px]">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-7">
          <h2 className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-4">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="space-y-0.5">
                <div className="flex justify-between items-baseline">
                  <div className="font-medium text-neutral-900 text-sm">
                    {edu.institution}
                  </div>
                  <span className="text-xs text-neutral-400 font-mono">
                    {edu.startDate} – {edu.endDate || 'Present'}
                  </span>
                </div>
                <div className="text-xs text-neutral-500">
                  {edu.degree} {edu.fieldOfStudy ? `• ${edu.fieldOfStudy}` : ''}
                </div>
                {edu.description && (
                  <p className="text-[11.5px] text-neutral-500 mt-1">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-7">
          <h2 className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-4">
            Projects
          </h2>
          <div className="space-y-4">
            {projects.map((proj) => (
              <div key={proj.id} className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <span className="font-medium text-neutral-900">{proj.name}</span>
                  {proj.technologies && (
                    <span className="text-[11px] text-neutral-400 font-mono">
                      {proj.technologies}
                    </span>
                  )}
                </div>
                <p className="text-[11.5px] text-neutral-600 leading-relaxed">
                  {proj.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-7">
          <h2 className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-3">
            Skills
          </h2>
          <p className="text-neutral-700 text-xs leading-loose">
            {skills.join('  /  ')}
          </p>
        </section>
      )}

      {/* Certifications & Notes */}
      {certifications.length > 0 && (
        <section className="mb-7">
          <h2 className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-3">
            Certifications
          </h2>
          <div className="space-y-1 text-xs text-neutral-600">
            {certifications.map((c) => (
              <div key={c.id}>
                <span className="text-neutral-900 font-medium">{c.name}</span> — {c.issuer} {c.date && `(${c.date})`}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Additional */}
      {(achievements.length > 0 || languages.length > 0 || extracurricular.length > 0) && (
        <section className="pt-2 border-t border-neutral-100">
          <h2 className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
            Additional
          </h2>
          {achievements.length > 0 && (
            <p className="text-[11.5px] text-neutral-600 mb-1">
              <span className="text-neutral-900 font-medium">Honors: </span> {achievements.join(' • ')}
            </p>
          )}
          {languages.length > 0 && (
            <p className="text-[11.5px] text-neutral-600 mb-1">
              <span className="text-neutral-900 font-medium">Languages: </span> {languages.join(', ')}
            </p>
          )}
          {extracurricular.length > 0 && (
            <p className="text-[11.5px] text-neutral-600">
              <span className="text-neutral-900 font-medium">Activities: </span> {extracurricular.join(' • ')}
            </p>
          )}
        </section>
      )}
    </div>
  );
};

export const ResumeTemplateRenderer: React.FC<{
  templateId: ResumeTemplateId;
  data: ResumeData;
}> = ({ templateId, data }) => {
  switch (templateId) {
    case 'classic':
      return <ClassicATSTemplate data={data} />;
    case 'modern':
      return <ModernProfessionalTemplate data={data} />;
    case 'minimal':
      return <MinimalTemplate data={data} />;
    default:
      return <ModernProfessionalTemplate data={data} />;
  }
};
