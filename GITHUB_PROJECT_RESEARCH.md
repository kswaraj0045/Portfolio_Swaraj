# GITHUB & CODEBASE RESEARCH DOCUMENTATION

This document compiles the exhaustive code and architecture inspection performed across Swaraj Khadalkar's GitHub repositories and local project source directories.

---

## PROJECT 01: Pharmacy Chain – Business Intelligence Dashboard
- **Project Name**: Pharmacy Chain Management – Data Curation & Analytics BI Dashboard
- **GitHub Repository**: `https://github.com/kswaraj0045/pharmacyDashboard`
- **Local Source**: `D:\Dashboard`
- **Actual Purpose**: An end-to-end data curation and business intelligence solution designed for pharmacy retail chains. Ingests raw multi-store transaction data, cleans and standardizes discrepancies, structures facts and dimensions into a Star Schema, and delivers an interactive operational BI dashboard.
- **Technologies**:
  - Python 3.10+
  - Pandas, NumPy (Vectorized cleaning, outlier scoring via Z-Score/IQR, Star schema ETL)
  - Streamlit (Interactive dashboard framework with cached loading `@st.cache_data`)
  - Plotly Express & Plotly Graph Objects (Interactive multi-series charts)
- **Verified Features**:
  1. **Executive Sales Overview**: Real-time tracking of gross revenue, gross margin %, items per bill, and prescription-linked revenue share.
  2. **Inventory Health & Stockouts**: Days of Inventory (DOI), stockout frequency tracking across SKUs, and reorder velocity indicators.
  3. **Customer Purchasing & Refill Behavior**: Refill rate tracking (30/60/90 day cycles), repeat customer metrics, and basket composition.
  4. **Discount & Campaign Impact**: Average discount percentage monitoring, promo price elasticity, and margin erosion guards.
  5. **Compliance & Controlled Substances**: Monitoring prescription verification adherence, scheduled medicine logs, and doctor referral trends.
  6. **Interactive Controls & Data Export**: Dynamic sidebar filters (Date range, Geography/City, Category, Brand, Payment Mode, Status) with filtered CSV export.
- **Main Problem Addressed**: Retail pharmacy chains struggle with fragmented transactional data, high stockout risks on life-saving drugs, untracked margin leakages caused by uncontrolled discounting, and strict regulatory compliance requirements for prescription medicines.
- **Important Implementation Details**:
  - Validated against a verified 35,000-row transaction dataset (`cleaned_pharmacy_data.csv`).
  - Strict data profiling and data cleaning pipeline (`clean_data.py`, `cleaning_report.md`) handling city standardizations, duplicate resolution, date alignment, and zero-null enforcement on critical foreign keys.
- **Live Demo / Screenshots**: Streamlit application structure with simulated interactive telemetry.
- **Portfolio Status**: **FEATURED (Priority #1 – Lead Product Analytics Showcase)**

---

## PROJECT 02: Demand Forecasting & Stock Optimisation
- **Project Name**: ML-Powered Demand Forecasting & Stock Optimisation Engine
- **Source Context**: Standalone documented analytical solution
- **Actual Purpose**: An automated inventory intelligence system that forecasts SKU-level demand using historical sales trends and external market factors, while calculating optimal safety stock levels to prevent stockouts and overstocks.
- **Technologies**:
  - Python, Pandas, NumPy
  - Scikit-learn (Time-series regression, trend analysis, demand forecasting models)
  - SQL (Inventory snapshot querying)
  - React & Recharts (Executive dashboard interface)
- **Verified Features**:
  1. **Demand Forecasting**: Machine learning predictions of future SKU demand incorporating historical sales patterns, seasonal fluctuations, and lead times.
  2. **Automated Stockout & Overstock Identification**: Algorithmic classification of inventory risks before stock depletion occurs.
  3. **Data-Driven Reorder Recommendations**: Automated calculation of economic order quantities (EOQ) and dynamic safety buffer thresholds.
  4. **Interactive Inventory Control Dashboard**: Visual summaries of working capital tied in excess stock versus high-velocity revenue generators.
- **Main Problem Addressed**: Traditional static reorder points lead to capital lockup in slow-moving items and costly stockouts in high-demand essential pharmaceuticals.
- **Important Implementation Details**:
  - Separately documented project from the Pharmacy BI dashboard.
  - Features dynamic reorder alerts based on standard deviation of lead-time demand.
- **Portfolio Status**: **FEATURED (Priority #2 – Machine Learning & Operational Decision Support)**

---

## PROJECT 03: Dental Practice Management System (PMS) & Dental CRM
- **Project Name**: Dental Practice Management System & Dental Clinical Intelligence SaaS
- **GitHub Repositories**:
  - MERN Repository: `https://github.com/kswaraj0045/PMS`
  - Live Deployed CRM: `https://dentaldashboard.street-up.in/`
- **Local Sources**:
  - `D:\PMS` (MERN stack with Node.js, Express, MongoDB, Mongoose, JWT)
  - `D:\CRMdental` (Production multi-tenant SaaS built with React 19, TypeScript, Vite, Supabase, PostgreSQL RLS, TanStack Table, Recharts, Framer Motion)
  - `D:\Internship_project\dental-clinical-intelligence-prd.html` (Complete 42KB PRD authored by Swaraj)
- **Actual Purpose**: A multi-tenant clinical software solution engineered to digitize dental clinic operations, streamline appointment scheduling, manage complete clinical patient histories, and provide diagnostic odontogram charting.
- **Technologies**:
  - React 19 / Next-generation React with TypeScript and Vite
  - Supabase Auth & PostgreSQL with Row-Level Security (RLS) for complete clinic-level tenant isolation
  - TanStack React Table, Recharts, Radix UI, Lucide Icons, Framer Motion
  - Node.js, Express, MongoDB in the PMS companion architecture
- **Verified Features**:
  1. **Multi-Tenant SaaS Architecture**: Strict tenant data isolation ensuring complete privacy between clinics.
  2. **Role-Based Access Control (RBAC)**: Distinct permissions for Clinic Administrators, Dentists, and Front-Desk Assistants.
  3. **Interactive Odontogram**: Interactive graphical dental arch for recording tooth conditions, restorations, extractions, and planned procedures.
  4. **Clinical Patient Profiles & History**: Comprehensive patient timelines, periodontal charting, and dental treatment plan tracking.
  5. **Appointment Scheduling & Calendar**: Real-time chair scheduling with practitioner conflict avoidance.
  6. **Executive Dashboards & Reports**: Clinic revenue summaries, patient throughput metrics, and treatment completion rates with pagination and search.
- **Main Problem Addressed**: Dental clinics face fragmented record-keeping across physical charts, schedule conflicts, and lack of digitized tooth-by-tooth treatment visualization.
- **Important Implementation Details**:
  - Verified comprehensive PRD (`dental-clinical-intelligence-prd.html`) outlining product vision, user workflows, and detailed module requirements.
  - Implements Supabase RLS policies ensuring non-admin users cannot access cross-tenant data.
- **Live Demo**: `https://dentaldashboard.street-up.in/`
- **Portfolio Status**: **FEATURED (Priority #3 – Flagship Multi-Tenant SaaS & PRD Showcase)**

---

## PROJECT 04: Hostel Life Manager
- **Project Name**: Hostel Life Manager – Collaborative Shared Living Platform
- **GitHub Repository**: `https://github.com/kswaraj0045/hostelManager`
- **Live Demo**: `https://hostel-manager-five.vercel.app`
- **Live Backend**: `https://hostelmanager-nlty.onrender.com`
- **Local Source**: `D:\hostelManager`
- **Actual Purpose**: A full-stack web application designed for university students living in shared hostels to eliminate friction around shared finances, chore delegation, meal schedules, and room coordination.
- **Technologies**:
  - Frontend: React 18, Vite, Tailwind CSS, React Router DOM, Axios, Lucide React, Recharts, Chart.js
  - Backend: Node.js, Express.js, MongoDB with Mongoose, Socket.IO, JWT, bcryptjs, node-cron
  - AI & Communications: Google Gemini API (`gemini-2.5-flash`), Twilio SMS, Nodemailer, Web Push API, Web Speech API
- **Verified Features**:
  1. **Group Expense Management & Splitting**: Split shared utility, grocery, and leisure bills with automated net balance calculation (who owes whom).
  2. **Chore Scheduling & Rotation**: Automated recurring chore assignments with status indicators.
  3. **Mess Menu & Meal Tracker**: Daily breakfast, lunch, and dinner schedule management.
  4. **Real-Time Group Chat**: Low-latency communication channel powered by Socket.IO.
  5. **AI Hostel Assistant**: Gemini API integration answering household questions, drafting roommate agreements, and generating meal suggestions.
  6. **Spending Analytics & Push Notifications**: Visual spending breakdowns and multi-channel alerts (Web Push, Email, SMS).
- **Main Problem Addressed**: Shared student living is plagued by informal expense disputes, forgotten bill dues, unequal chore distribution, and disorganized group chats.
- **Important Implementation Details**:
  - Complete full-stack deployment on Vercel (frontend) and Render (backend).
  - Robust cron jobs for recurring chores and automated reminders.
- **Portfolio Status**: **FEATURED (Priority #4 – End-to-End Consumer Product with AI & Real-Time Sync)**

---

## PROJECT 05: ScolioVis – Deep Learning Scoliosis Cobb Angle Assessment
- **Project Name**: ScolioVis – Automated Vertebral Landmark & Cobb Angle Detection
- **GitHub Repository**: `https://github.com/kswaraj0045/Scoliosis`
- **Local Sources**: `D:\Sco\scoliovis-main` and `D:\Scoliosis Final\Scoliosis Final`
- **Academic Context**: Guided by Dr. Vaishali Wangikar; Team Project; 15 Jan 2026 – 15 Apr 2026. Finalist at Avishkar 2025 (Maharashtra State Inter-University Research Convention, SPPU).
- **Actual Purpose**: An AI-assisted diagnostic clinical tool that analyzes anterior-posterior spine X-rays to detect vertebrae landmarks, calculate spinal curvature Cobb angles automatically, and assist radiologists in evaluating scoliosis severity.
- **Technologies**:
  - PyTorch & Torchvision (Keypoint R-CNN, YOLOv8 Pose, Residual-UNet)
  - Python, OpenCV, NumPy (Image preprocessing, contrast enhancement, geometric angle algorithms)
  - FastAPI backend for high-throughput inference serving
  - Next.js 14 / React frontend with TypeScript, Tailwind CSS, and Zustand state management
- **Verified Features**:
  1. **Vertebrae Landmark Localization**: Deep learning models detecting 4-corner keypoints across spinal vertebrae.
  2. **Automated Cobb Angle Calculation Engine**: Trigonometric algorithm identifying the most tilted superior and inferior end-vertebrae to compute Cobb angles with a target Mean Absolute Error (MAE) < 5°.
  3. **Multi-Model Comparative Analysis**: Interface allowing clinical researchers to toggle between Keypoint R-CNN, YOLOv8 Pose, VerteNet, and Residual-UNet.
  4. **Interactive 5-Stage Visualizer**: Step-by-step rendering of bounding boxes, keypoints, horizontal tilt lines, end vertebrae, and intersecting Cobb angle vectors (Proximal Thoracic, Main Thoracic, Lumbar).
- **Main Problem Addressed**: Manual radiographic Cobb angle measurement by orthopedic surgeons is time-consuming, prone to inter-observer variability of 5°–10°, and delays clinical triage.
- **Important Implementation Details**:
  - Backed by rigorous research paper and design documentation (`Major_Research_Paper.pdf`, `ScolioVis_System_Architecture.txt`).
- **Portfolio Status**: **FEATURED (Priority #5 – Deep Learning & HealthTech Product)**

---

## PROJECT 06: GenericMediCare – Generic Medicine Discovery & Mapping
- **Project Name**: GenericMediCare E-Commerce Platform
- **GitHub Repository**: `https://github.com/kswaraj0045/GenericMediCare`
- **Local Source**: `D:\MediCare-Ecommerce`
- **Actual Purpose**: A digital pharmacy e-commerce platform built to solve the high cost of healthcare by mapping branded medications to bio-equivalent, affordable generic alternatives using active pharmaceutical ingredient matching.
- **Technologies**:
  - Python, Django Web Framework
  - SQLite / PostgreSQL
  - Pillow (Prescription and image handling)
  - HTML5/Tailwind/CSS
- **Verified Features**:
  1. **Dynamic Alternative Mapping Engine**: Custom algorithm (`get_alternative_medicines`) querying medicines sharing identical active chemical ingredients but produced at significantly lower retail price points.
  2. **Role-Based Portals**: Distinct workflows for consumers and authorized pharmacy sellers.
  3. **Prescription Verification Gate**: Enforces mandatory prescription upload for regulated schedule drugs.
  4. **Category & Inventory Management**: Stock tracking, category indexing, and price transparency.
- **Main Problem Addressed**: Patients in developing markets overpay for branded drugs due to lack of visibility into identical generic chemical formulations.
- **Portfolio Status**: **FEATURED (Priority #6 – Product-Driven Solution for Healthcare Affordability)**

---

## PROJECT 07: AI & Automation Experiments (Local Codebases)
- **Project Name**: AI Experiments & Selenium Browser Automation
- **GitHub Repository**: `https://github.com/kswaraj0045/AI`
- **Local Sources**: `D:\Projects\lt-code`, `D:\chat.py`
- **Actual Purpose**: Technical exploratory tooling showcasing systems automation with Chrome DevTools Protocol and local LLM evaluation with PyTorch & Hugging Face Transformers.
- **Technologies**: Python 3.12, Selenium WebDriver, UV package manager, PyTorch, Hugging Face Transformers.
- **Verified Features**:
  - Full-screen live terminal UI (TUI) for automation status.
  - Background throttling defense handling asynchronous browser DOM states.
  - Local quantized causal language model persona inference.
- **Portfolio Status**: **FEATURED IN SKILLS & TECHNICAL FOUNDATIONS**

