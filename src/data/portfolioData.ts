import { FrameworkStage, ExperienceItem, LeadershipItem, EducationItem, CertificationItem } from '../types';

export const personalInfo = {
  name: 'Swaraj Khadalkar',
  legalName: 'Khadalkar Swaraj Sanjay',
  role: 'Aspiring Product Manager',
  tagline: 'Building Products That Solve Real Problems.',
  subtitle: 'Aspiring Product Manager | Business Strategy | Data Analytics | Technology',
  identity: 'An engineer by education, an Analyst selected at Deloitte, a technology and business enthusiast, and an aspiring Product Manager.',
  introduction: "I'm Swaraj Khadalkar, a Computer Engineering student passionate about building products that solve meaningful problems. My interests lie at the intersection of technology, business, data and product management. I enjoy understanding problems, exploring user needs, analyzing information, developing practical solutions and collaborating with people to turn ideas into meaningful products. My long-term goal is to grow into a Product Manager who can connect business objectives, user needs and technical execution.",
  email: 'kswaraj0045@gmail.com',
  github: 'https://github.com/kswaraj0045',
  linkedin: 'https://linkedin.com/in/swaraj-khadalkar',
  location: 'Pune, Maharashtra, India',
  resumeUrl: '/resume.pdf',
  aboutHeadline: 'Technology Is My Foundation. Product Thinking Is My Direction.',
  aboutDescription: "I'm Swaraj Khadalkar, a final-year B.Tech Computer Engineering student at MIT Academy of Engineering, Pune. My long-term career goal is to become a Product Manager. I am interested in understanding customer problems, identifying opportunities, prioritizing requirements, collaborating with teams and using data to support better decisions. Through academic projects, software development exposure and startup-related activities, I have developed an interest in connecting technology with business requirements and user needs.",
};

export const aboutPillars = [
  {
    id: 'product-thinking',
    title: 'Product Thinking',
    subtitle: 'Understanding problems and identifying meaningful opportunities.',
    description: 'Transforming ambiguous user pain points into validated product requirements, feature roadmaps, and actionable PRDs.',
    skills: ['Problem Identification', 'Requirement Understanding', 'Feature Prioritization', 'User-Centric Thinking', 'Product Lifecycle Fundamentals'],
    color: 'accent-primary',
    gradient: 'from-accent-primary/20 to-accent-primary/5'
  },
  {
    id: 'business-data',
    title: 'Business & Data',
    subtitle: 'Using analytics and business understanding to support decisions.',
    description: 'Structuring metrics frameworks, Star Schemas, and BI dashboards to track North Star KPIs and eliminate guesswork.',
    skills: ['Data Analysis', 'Business Intelligence', 'KPI Understanding', 'Data-Driven Decision Making', 'Analytical Thinking'],
    color: 'accent-secondary',
    gradient: 'from-accent-secondary/20 to-accent-secondary/5'
  },
  {
    id: 'technology',
    title: 'Technology Foundation',
    subtitle: 'Understanding software systems and technical implementation.',
    description: 'Grounded in computer engineering fundamentals to bridge business requirements seamlessly with engineering teams.',
    skills: ['Software Architecture', 'Full-Stack Development', 'API Design', 'Cloud & Databases', 'Machine Learning Pipelines'],
    color: 'accent-primary',
    gradient: 'from-accent-primary/20 to-accent-primary/5'
  }
];

export const productThinkingFramework: FrameworkStage[] = [
  {
    id: 'understand',
    step: '01',
    title: 'UNDERSTAND',
    summary: 'Understand the problem and context',
    objective: 'Gain deep clarity on the underlying business friction, operational landscape, and market dynamics before proposing solutions.',
    activities: [
      'Investigate the operational context and existing manual workarounds',
      'Identify root causes versus surface-level symptoms',
      'Analyze business stakes, regulatory requirements, and risk factors',
      'Engage stakeholders to unearth unspoken constraints'
    ],
    deliverables: ['Problem Framing Canvas', 'Context & Constraints Brief'],
    exampleFromWork: 'In the Pharmacy BI Project, identified that inventory stockouts and unmonitored discount leakage were causing silent margin erosion of 4–6% across retail stores.'
  },
  {
    id: 'discover',
    step: '02',
    title: 'DISCOVER',
    summary: 'Explore user needs and opportunities',
    objective: 'Map end-to-end user workflows, identify pain points, and discover high-leverage intervention opportunities.',
    activities: [
      'Observe daily user routines and workflow hand-offs',
      'Map touchpoints across customer, operational, and clinical journeys',
      'Analyze transaction log drop-offs and behavioral patterns',
      'Synthesize findings into discrete user opportunity clusters'
    ],
    deliverables: ['User Journey Maps', 'Opportunity Backlog'],
    exampleFromWork: 'In Hostel Life Manager, observed roommates abandoning complex expense spreadsheets in favor of informal chats, resulting in forgotten debts and friction.'
  },
  {
    id: 'define',
    step: '03',
    title: 'DEFINE',
    summary: 'Articulate the problem and desired outcome',
    objective: 'Synthesize insights into crisp problem statements, unambiguous product requirements, and quantifiable success metrics.',
    activities: [
      'Author comprehensive Product Requirements Documents (PRDs)',
      'Establish North Star metrics and secondary guardrail KPIs',
      'Define modular boundaries and system integrations',
      'Write detailed user stories with strict acceptance criteria'
    ],
    deliverables: ['Product Requirements Document (PRD)', 'KPI Matrix'],
    exampleFromWork: 'Authored a comprehensive 7-module PRD for Dental Clinical Intelligence specifying adult/pediatric odontogram requirements and Supabase tenant isolation.'
  },
  {
    id: 'prioritize',
    step: '04',
    title: 'PRIORITIZE',
    summary: 'Evaluate requirements and possible solutions',
    objective: 'Apply disciplined trade-off analysis to determine what gets built first within engineering and resource constraints.',
    activities: [
      'Evaluate features using RICE and Value vs. Complexity scoring',
      'Differentiate core MVP must-haves from secondary enhancements',
      'Align sequencing with technical dependencies and risk reduction',
      'Manage scope boundaries to ensure timely launch predictability'
    ],
    deliverables: ['Prioritized Release Roadmap', 'MVP Scope Specification'],
    exampleFromWork: 'In GenericMediCare, prioritized active chemical ingredient matching before advanced checkout features to solve the core affordability value proposition first.'
  },
  {
    id: 'build',
    step: '05',
    title: 'BUILD',
    summary: 'Collaborate with technical teams',
    objective: 'Partner with engineering throughout delivery to maintain architectural integrity, resolve blockers, and preserve user experience.',
    activities: [
      'Translate functional specifications into clear engineering tasks',
      'Participate in architecture reviews and data schema design',
      'Conduct rapid iteration reviews during sprint development',
      'Verify technical feasibility and system performance under load'
    ],
    deliverables: ['Sprint Milestone Tracking', 'Technical Architecture Specs'],
    exampleFromWork: 'Collaborated with engineering at Street-Up to build modern CRM components and verified Supabase Row-Level Security for multi-tenant clinic data isolation.'
  },
  {
    id: 'measure',
    step: '06',
    title: 'MEASURE',
    summary: 'Use feedback and relevant metrics to evaluate outcomes',
    objective: 'Close the loop by continuously evaluating telemetry, analyzing metric adoption, and prioritizing iteration backlogs.',
    activities: [
      'Track real-world adoption, funnel completion, and latency KPIs',
      'Collect structured qualitative feedback from end users',
      'Conduct post-launch variance reviews against initial success criteria',
      'Feed learnings directly into subsequent product iteration cycles'
    ],
    deliverables: ['Telemetry & Health Dashboards', 'Product Iteration Backlog'],
    exampleFromWork: 'In ScolioVis, measured Cobb angle inference error rates across multiple architectures (Keypoint R-CNN, YOLOv8 Pose) to validate a clinically reliable MAE < 5°.'
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'deloitte-selection',
    company: 'Deloitte',
    role: 'Analyst',
    badge: 'SELECTED AT DELOITTE – ANALYST',
    period: 'Campus Placement Selection Milestone',
    location: 'India',
    type: 'milestone',
    description: 'Selected for the Analyst role at Deloitte through college campus placement. This selection milestone recognizes analytical capability, technical grounding, and problem-solving aptitude.',
    highlights: [
      'Earned selection for the Analyst profile through competitive on-campus evaluation.',
      'Demonstrated structured problem-solving, analytical thinking, and business communication skills.',
      'Positions foundation for bridging technology implementations with enterprise business value.'
    ],
    skills: ['Business Strategy', 'Data Analytics', 'Systems Thinking', 'Analytical Communication'],
    note: 'Selection milestone achieved through campus placement; not a claim of employment commencement.'
  },
  {
    id: 'street-up',
    company: 'Street-Up',
    role: 'Software Developer Intern',
    badge: 'Internship',
    location: 'Pune, India',
    type: 'internship',
    description: 'Currently contributing to the development of CRM software designed to serve optical store clients.',
    highlights: [
      'Contributing to client-facing CRM software features and operational workflows.',
      'Collaborating in an agile startup environment to deliver robust software solutions under sprint deadlines.',
      'Leveraging React, modern web development patterns, and teamwork to meet product goals.'
    ],
    skills: ['React', 'Vibe Coding', 'Teamwork', 'Agile Delivery', 'Frontend Architecture']
  }
];

export const leadershipData: LeadershipItem[] = [
  {
    id: 'viaset-ecell',
    organization: 'Viaset – MIT AOE E-Cell',
    role: 'Core Member (CMO)',
    description: 'Served on the core leadership team of the Entrepreneurship Cell during early startup ideation and incubation phases.',
    impactPoints: [
      'Worked in a cross-functional team during startup ideation and market research phases.',
      'Assisted in project planning, requirement discussions, and milestone progress tracking.',
      'Coordinated startup workshops and founder connect sessions for campus student entrepreneurs.'
    ]
  },
  {
    id: 'gfg-club',
    organization: 'GeeksforGeeks Club – MIT AOE',
    role: 'Active Club Member',
    description: 'Active contributor to student technical community initiatives and peer learning programs.',
    impactPoints: [
      'Coordinated technical events, coding bootcamps, and developer workshops.',
      'Tracked tasks and schedules to ensure timely event execution.',
      'Communicated progress transparently and collaborated actively with team members.'
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    institution: 'MIT Academy of Engineering, Pune',
    degree: 'B.Tech – Computer Engineering',
    period: '2023 – 2027',
    location: 'Pune, Maharashtra, India',
    details: [
      'Focus: Computer Engineering, Data Analytics, Software Systems, Product Thinking',
      'Academic Finalist: Avishkar 2025 (Maharashtra State Inter-University Research Convention, SPPU)'
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    title: 'Career Edge – Young Professionals',
    issuer: 'TCS iON',
    badge: 'Professional Readiness'
  },
  {
    title: 'Claude 101 & AI Fluency for Students',
    issuer: 'Anthropic',
    badge: 'LLMs & AI Systems'
  },
  {
    title: 'Cloud Foundations Training Badge',
    issuer: 'AWS Academy',
    badge: 'Cloud Architecture'
  },
  {
    title: 'Cloud Architecting Training Badge',
    issuer: 'AWS Academy',
    badge: 'Distributed Systems'
  }
];

export const skillsCategories = [
  {
    category: 'Product Thinking & Strategy',
    description: 'Discovering needs, framing problems, and driving outcomes.',
    skills: [
      'Problem Identification',
      'Requirement Understanding',
      'Feature Prioritization',
      'User-Centric Thinking',
      'Product Lifecycle Fundamentals',
      'User Journey Mapping',
      'PRD Documentation',
      'Agile / Scrum Sprint Planning'
    ]
  },
  {
    category: 'Business & Analytics',
    description: 'Transforming telemetry into high-signal strategic decisions.',
    skills: [
      'Data Analysis',
      'Business Intelligence',
      'KPI Understanding',
      'Data-Driven Decision Making',
      'Analytical Thinking',
      'Star Schema Data Modeling',
      'Pandas & NumPy Analysis',
      'Power BI & Plotly Dashboards'
    ]
  },
  {
    category: 'Collaboration & Leadership',
    description: 'Aligning teams and communicating with clarity.',
    skills: [
      'Team Collaboration',
      'Clear Technical Communication',
      'Startup Ideation & Execution',
      'Planning and Execution',
      'Cross-Functional Collaboration',
      'Stakeholder Alignment',
      'JIRA Task Tracking',
      'Peer Mentorship'
    ]
  },
  {
    category: 'Technical Foundation',
    description: 'Hands-on engineering depth across web, data, and ML systems.',
    skills: [
      'Python',
      'SQL',
      'Core Java',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Supabase RLS',
      'AWS Cloud',
      'Docker',
      'Scikit-learn',
      'OpenCV',
      'PyTorch'
    ]
  }
];

