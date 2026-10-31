# PROJECT PLAN: SWARAJ KHADALKAR – PRODUCT MANAGEMENT PORTFOLIO

## 1. Executive Summary & Project Vision
This project delivers a premium, production-grade personal portfolio website for **Swaraj Khadalkar**, positioned as an **Aspiring Product Manager**.

- **Core Positioning**: "An engineer by education, an Analyst selected at Deloitte, a technology and business enthusiast, and an aspiring Product Manager."
- **Professional Philosophy**: "Building Products That Solve Real Problems."
- **Strategic Direction**: The website adopts the design ethos of a high-end product design studio combined with a modern tech-forward Product Manager showcase. It bridges engineering rigor, data analytics/BI acumen, business viability, and user-centric problem solving.
- **Key Milestones to Highlight**:
  - Selection at **Deloitte** for the **Analyst** role through campus placement (prominently featured as a selection milestone with subtle Deloitte green accents, without claiming employment commencement).
  - Software Developer Internship at **Street-Up** (building optical/dental CRM platforms).
  - Leadership in **Viaset (MIT AOE E-Cell CMO)** and **GeeksforGeeks Club**.
  - Rigorous verified projects: Pharmacy Chain BI Dashboard, Demand Forecasting & Stock Optimisation, Multi-Tenant Dental CRM & PRD, Hostel Life Manager, ScolioVis Deep Learning Cobb Angle Detection, and GenericMediCare.

---

## 2. Technical Stack & Architecture
- **Framework**: React 18+ with TypeScript (configured with Vite for rapid builds, modern ESM, and optimal bundle size).
- **Styling**: Tailwind CSS with custom design tokens (dark navy base, cyan and violet product gradients, Deloitte achievement lime accents, Space Grotesk / Inter / JetBrains Mono typography).
- **Animations & Micro-interactions**: Motion / Framer Motion for smooth viewport reveals, modal transitions, and interactive framework steppers.
- **Icons**: Lucide React.
- **Data Visualization**: Interactive lightweight SVG charts and metrics components mimicking real product telemetry and KPI counters.
- **Routing & State**: Clean component state and hash navigation (`#about`, `#deloitte`, `#framework`, `#projects`, `#experience`, `#leadership`, `#skills`, `#contact`) + interactive Project Detail Modal/Drawer view to avoid heavy multi-page routing while maintaining deep-linkability and instant response.
- **SEO & Accessibility**: Complete Open Graph metadata, semantic HTML5, ARIA labels, keyboard navigability, reduced-motion preferences, and optimized asset delivery.

---

## 3. Strict Guidelines & Privacy Enforcement
- **Privacy Rules (Zero-Tolerance Enforcement)**:
  - NO college email addresses.
  - NO CGPA (strictly omitted; e.g. 7.71 from academic records is excluded).
  - NO academic grades or percentage scores.
  - NO PRN or student identification numbers.
  - Public contact email ONLY: `kswaraj0045@gmail.com`.
- **Career Accuracy Rules**:
  - Deloitte: Display as "SELECTED AT DELOITTE – ANALYST (Campus Placement)". Must never claim employment commencement or invent start dates/salary.
  - Product Manager: Display as "Aspiring Product Manager", never claiming past professional PM employment.
  - Projects: Strict fidelity to inspected GitHub codebases and verified documentation; no fabricated outcomes, imaginary client counts, or false clinical trials.

---

## 4. Phase-Wise Development Breakdown

### Phase 0: Workspace Discovery, Asset Audit & Planning [IN PROGRESS -> COMPLETED]
- [x] Inspect root workspace and parent directories on local machine.
- [x] Identify installed environments (Node v22.15.0, npm 10.9.2, Python 3.10/3.12, PyMuPDF, pdfplumber).
- [x] Inspect real uploaded resume (`D:\IMP\resume.pdf`) and extract career context.
- [x] Audit all 6 local codebases and GitHub projects (`D:\Dashboard`, `D:\PMS`, `D:\CRMdental`, `D:\hostelManager`, `D:\Sco` / `D:\Scoliosis Final`, `D:\GenericMediCare` / `D:\MediCare-Ecommerce`, `D:\Projects\lt-code`, `D:\Internship_project\dental-clinical-intelligence-prd.html`).
- [x] Create comprehensive planning documents: `PROJECT_PLAN.md`, `DESIGN_SYSTEM.md`, `PROJECT_CONTENT.md`, `GITHUB_PROJECT_RESEARCH.md`, `DEVELOPMENT_PROGRESS.md`.

### Phase 1: Repository & Codebase Deep Dive [COMPLETED IN RESEARCH]
- [x] Analyze architecture, dependencies, schemas, and features of each project.
- [x] Document verified metrics, technical stacks, product problems solved, and live links.
- [x] Format structured project content for interactive presentation.

### Phase 2: Design System Foundation & Component Preview
- [ ] Scaffold Vite + React + TypeScript project with Tailwind CSS configuration.
- [ ] Implement design tokens: Color palette (#090D18, #121A2B, #151F33, #38BDF8, #8B5CF6, #A3E635), typography scale, spacing, borders, glassmorphic card styles, buttons, badges.
- [ ] Build a Design System Preview showcasing:
  - Navbar with responsive drawer and active indicators.
  - Typography specimen (Space Grotesk, Inter, JetBrains Mono).
  - Buttons (Primary, Outline, Subtle, Icon buttons).
  - Badges (Deloitte Milestone Badge, Product Category Tags, Status Pills).
  - Metric / KPI Stat Cards.
  - Glassmorphic Cards.
- [ ] Verify visual consistency, contrast, and responsive behavior.

### Phase 3: Core Website Architecture & Navigation
- [ ] Implement persistent Navbar with sticky blur backdrop, logo badge, navigation links, and "Resume" CTA.
- [ ] Build Hero Section with:
  - Small technical label: "PRODUCT THINKER | TECHNOLOGY ENTHUSIAST".
  - Prominent achievement badge: "SELECTED AT DELOITTE – ANALYST".
  - Main headline: "Building Products That Solve Real Problems."
  - Subtitle: "Aspiring Product Manager | Business Strategy | Data Analytics | Technology".
  - Action buttons: "Explore My Work", "My Product Journey", "Download Resume".
  - Abstract product visual: Floating product dashboard, KPI counters, roadmap nodes, interactive data points.
- [ ] Build About Section with the three strategic pillars:
  - Product Thinking (Understanding problems, discovering opportunities).
  - Business & Data (Analytics, Star Schema, KPI evaluation).
  - Technology (System architecture, full-stack implementation).

### Phase 4: Product Thinking Framework & Deloitte Milestone Showcase
- [ ] Implement Deloitte Milestone Section:
  - Highlighting campus placement selection as Analyst with sleek dark green accents (#A3E635 / #22C55E).
  - Clear, authentic copy honoring guidelines.
- [ ] Implement interactive 6-stage "From Problems to Products" framework:
  - 01 – UNDERSTAND: Problem discovery & business context.
  - 02 – DISCOVER: User needs, stakeholder interviews & pain points.
  - 03 – DEFINE: Problem statements, success metrics & PRDs.
  - 04 – PRIORITIZE: Value vs. effort, roadmap planning & trade-offs.
  - 05 – BUILD: Cross-functional collaboration with engineering & design.
  - 06 – MEASURE: Post-launch analytics, KPI tracking & feedback iteration.
  - Responsive timeline: Animated horizontal on desktop, vertical on mobile.

### Phase 5: Verified Project Showcase & Detailed Modals
- [ ] Build Project Grid with filterable tabs (All, Product & BI, Full-Stack SaaS, AI & HealthTech).
- [ ] Create detailed cards for:
  - 1. Pharmacy Chain Business Intelligence Dashboard (Streamlit, Plotly, Pandas).
  - 2. Demand Forecasting & Stock Optimisation (ML Inventory Management, Scikit-learn, React).
  - 3. Dental Practice Management & Clinical Intelligence (Multi-Tenant SaaS, Supabase, Postgres, React 19).
  - 4. Hostel Life Manager (Full-Stack MERN + Gemini AI + Real-time Socket.io).
  - 5. ScolioVis: Deep Learning Scoliosis Cobb Angle Assessment (PyTorch, YOLOv8/Keypoint R-CNN, FastAPI).
  - 6. GenericMediCare: Generic Medicine Discovery & Mapping (Django, E-Commerce, Ingredient Matching).
- [ ] Implement Interactive Project Detail Modal with:
  - Project Overview, Problem Statement, Solution Architecture, Key Features, Tech Stack Badges, Product Relevance & Impact, and Live/Repo Links.

### Phase 6: Skills, Experience, Leadership & Education
- [ ] Skills Section grouped by:
  - Product Thinking & Strategy
  - Business Analytics & BI
  - Cross-Functional Collaboration
  - Technical Foundation (Languages, Frameworks, Databases, Tools)
- [ ] Experience Timeline:
  - Deloitte: Analyst (Campus Placement Selection Milestone).
  - Street-Up: Software Developer Intern (CRM solutions).
- [ ] Leadership & Extracurriculars:
  - Viaset (MIT AOE E-Cell): Core Member (CMO).
  - GeeksforGeeks Student Club: Member.
- [ ] Education Section:
  - MIT Academy of Engineering, Pune (B.Tech in Computer Engineering, 2023–2027).
  - Sarubai Mane Junior College (12th - MSBSHSE, 2022).
  - Vikas Bharati Highschool, Parbhani (10th - MSBSHSE, 2020).
  - Strictly no GPA or percentage scores.
- [ ] Certifications Grid:
  - TCS iON: Career Edge - Young Professionals.
  - Anthropic: Claude 101 & AI Fluency for Students.
  - AWS Academy: Cloud Foundations Training.

### Phase 7: Contact Section, Footer & Interactive Polish
- [ ] Contact Section:
  - Heading: "Let's Build Something Meaningful."
  - Description & contact info (`kswaraj0045@gmail.com`, GitHub, editable LinkedIn).
  - Functional contact form generating `mailto:kswaraj0045@gmail.com` with formatted subject and body.
- [ ] Footer:
  - Swaraj Khadalkar | Aspiring Product Manager.
  - "Curious by nature. Analytical by mindset. Product-driven by ambition."
  - Dynamic year, quick links, social connections.
- [ ] Resume Download integration:
  - Direct download linking to the actual resume asset.

### Phase 8: Comprehensive Quality Assurance & Production Verification
- [ ] Functional Testing: navigation, modals, links, mailto, responsive toggles.
- [ ] Visual & Layout Testing: mobile (375px/414px), tablet (768px), desktop (1280px+), zero horizontal overflow.
- [ ] Privacy Audit: Automated grep across entire codebase for prohibited terms (CGPA, grades, PRN, college email).
- [ ] Production Build: `npm run build` zero-error verification.
- [ ] Run website and launch browser preview for validation.

