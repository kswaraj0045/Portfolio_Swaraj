import { ResumeData } from '../types/resume';

export const initialEmptyResumeData: ResumeData = {
  personalInfo: {
    fullName: '',
    professionalTitle: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    github: '',
    portfolio: ''
  },
  summary: '',
  education: [],
  experience: [],
  projects: [],
  skills: [],
  certifications: [],
  achievements: [],
  languages: [],
  extracurricular: []
};

export const sampleResumeData: ResumeData = {
  personalInfo: {
    fullName: 'Alex Vance',
    professionalTitle: 'Associate Product Manager & Tech Lead',
    email: 'alex.vance@example.com',
    phone: '+1 (555) 234-5678',
    location: 'San Francisco, CA',
    linkedin: 'https://linkedin.com/in/alexvance',
    github: 'https://github.com/alexvance',
    portfolio: 'https://alexvance.dev'
  },
  summary: 'Product-driven technologist with 3+ years combining full-stack engineering and product analytics. Proven track record leading cross-functional teams to build enterprise SaaS workflows, improving user onboarding retention by 28%, and translating complex technical requirements into user-friendly software solutions.',
  education: [
    {
      id: 'edu-1',
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science',
      fieldOfStudy: 'Computer Science & Economics',
      startDate: 'Aug 2020',
      endDate: 'May 2024',
      location: 'Berkeley, CA',
      description: 'Dean\'s Honor List (Top 5%). Capstone Project: Real-time Distributed Analytics Pipeline with sub-second latency.'
    }
  ],
  experience: [
    {
      id: 'exp-1',
      company: 'Apex Cloud Solutions',
      jobTitle: 'Associate Product Manager',
      employmentType: 'Full-time',
      startDate: 'Jun 2024',
      endDate: 'Present',
      location: 'San Francisco, CA',
      responsibilities: [
        'Authored 6 comprehensive Product Requirement Documents (PRDs) for cloud migration tooling used by 45+ enterprise accounts.',
        'Partnered with UX research and engineering to reduce customer deployment time from 14 days to 48 hours.',
        'Established quantitative telemetry dashboards in Mixpanel and SQL tracking daily active teams and funnel abandonment rates.'
      ]
    },
    {
      id: 'exp-2',
      company: 'NovaLabs Inc.',
      jobTitle: 'Software Engineering Intern',
      employmentType: 'Internship',
      startDate: 'May 2023',
      endDate: 'Aug 2023',
      location: 'Palo Alto, CA',
      responsibilities: [
        'Built full-stack React and Node.js microservices serving 120,000 monthly API calls.',
        'Implemented PostgreSQL row-level security and optimized SQL queries reducing P99 latency by 35%.',
        'Coordinated weekly sprint retrospectives and mentored 2 junior student apprentices.'
      ]
    }
  ],
  projects: [
    {
      id: 'proj-1',
      name: 'OmniMetrics – B2B Analytics Platform',
      description: 'Built a lightweight product analytics tool providing self-hosted telemetry, funnel conversion graphs, and cohort retention tables with end-to-end data encryption.',
      technologies: 'React, TypeScript, FastAPI, PostgreSQL, TailwindCSS',
      url: 'https://github.com/alexvance/omni-metrics'
    },
    {
      id: 'proj-2',
      name: 'SmartRoute – Transit Optimization System',
      description: 'Engineered an AI-powered municipal dispatch scheduling engine reducing transit fleet idle wait times across simulated peak commuter traffic hours.',
      technologies: 'Python, PyTorch, GeoJSON, Docker, Redis',
      url: 'https://github.com/alexvance/smart-route'
    }
  ],
  skills: [
    'Product Strategy & Roadmap Planning',
    'User Journey Mapping',
    'PRD Documentation',
    'A/B Testing & Funnel Telemetry',
    'SQL & Data Modeling',
    'React & TypeScript',
    'Python & REST APIs',
    'Agile / Scrum Sprint Leadership',
    'PostgreSQL & Cloud Infrastructure',
    'Cross-functional Alignment'
  ],
  certifications: [
    {
      id: 'cert-1',
      name: 'Certified Scrum Product Owner (CSPO)',
      issuer: 'Scrum Alliance',
      date: '2024',
      url: 'https://scrumalliance.org'
    },
    {
      id: 'cert-2',
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2023',
      url: 'https://aws.amazon.com/certification'
    }
  ],
  achievements: [
    '1st Place Winner – CalHacks 2023 out of 350+ collegiate teams for automated logistics dispatch solution.',
    'Authored tech blog on scalable state management with 40,000+ organic readers.'
  ],
  languages: [
    'English (Native)',
    'Spanish (Conversational)'
  ],
  extracurricular: [
    'Vice President of Tech Entrepreneurship Society: Organized 12 founder panels with venture capital partners.',
    'Volunteer Coding Instructor: Taught basic web programming to 60+ underprivileged middle school students.'
  ]
};
