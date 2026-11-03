import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'pharmacy-dashboard',
    title: 'Pharmacy Chain – Business Intelligence Dashboard',
    shortTitle: 'Pharmacy Chain BI',
    category: 'Product & Analytics',
    tagline: 'Multi-store commercial BI dashboard monitoring 35,000 transactions across inventory, revenue, and compliance.',
    problem: 'Retail pharmacy chains struggle with decentralized transactional records, unexpected stockouts of essential medicines, invisible margin leakage from unmonitored discounting, and stringent prescription regulatory compliance.',
    solution: 'Designed and deployed an interactive Streamlit BI application backed by a curated Star Schema data model. Provides real-time visibility into sales health, inventory velocity, refill trends, and doctor referral compliance with multi-dimensional filtering.',
    metrics: [
      { label: 'Transactions Curated', value: '35,000+', detail: 'Zero duplicate records' },
      { label: 'Analytical Domains', value: '5 Modules', detail: 'Sales, Inventory, Customer, Promo, Compliance' },
      { label: 'Inventory Metric', value: 'DOI & Refills', detail: '30/60/90 day tracking' },
      { label: 'Data Quality', value: '100% Star Schema', detail: 'Strict FK integrity' },
    ],
    keyFeatures: [
      'Executive Sales KPIs: Real-time gross revenue, net margin %, average basket size, and prescription-linked revenue share.',
      'Inventory Health Engine: Days of Inventory (DOI), SKU stockout velocity, and lead-time safety buffer alerts.',
      'Customer Refill & Behavior: 30/60/90-day medication refill tracking, patient loyalty, and chronic therapy persistence.',
      'Discount & Promotion Elasticity: Average discount percentage tracking to protect gross margins from promotional leakage.',
      'Regulatory Compliance: Mandatory prescription matching, scheduled narcotics logs, and physician prescription audits.',
      'Interactive Filtering & Export: Multi-parameter sidebar filters (city, store, category, brand) with one-click filtered CSV exports.'
    ],
    techStack: ['Python', 'Pandas', 'NumPy', 'Streamlit', 'Plotly Express', 'Plotly Graph Objects', 'Star Schema ETL'],
    architectureHighlights: [
      'Engineered automated ETL pipeline (`clean_data.py`) with fuzzy city name mapping, duplicate deduplication, and IQR outlier scoring.',
      'Implemented FactSales and Dimension tables (Customer, Medicine, Shop, Prescription, Purchase, StockSnapshot).',
      'Leveraged Streamlit `@st.cache_data` caching for sub-second dashboard rendering over 35,000 records.'
    ],
    productRelevance: 'Demonstrates end-to-end data product management: converting complex, messy operational data into high-signal decision metrics that pharmacy executives can act on directly.',
    githubUrl: 'https://github.com/kswaraj0045/pharmacyDashboard',
    role: 'Product Analytics Lead & Data Engineer',
    status: 'Completed'
  },
  {
    id: 'demand-forecasting',
    title: 'Demand Forecasting & Stock Optimisation',
    shortTitle: 'Demand Forecasting',
    category: 'Product & Analytics',
    tagline: 'ML-powered inventory intelligence forecasting SKU sales and automating reorder triggers.',
    problem: 'Inflexible static reorder rules cause massive capital lockup in slow-moving pharmaceutical inventory while simultaneously generating revenue-destroying stockouts for fast-moving critical medications.',
    solution: 'Developed an algorithmic inventory management system that combines historical sales trend regression with dynamic safety stock calculations. Generates automated reorder recommendations and displays risk matrices on an interactive dashboard.',
    metrics: [
      { label: 'Stockout Risk Alert', value: 'Automated', detail: 'Pre-emptive alerts before depletion' },
      { label: 'Optimization Scope', value: 'Fast-Moving SKUs', detail: 'Dynamic buffer thresholds' },
      { label: 'Model Stack', value: 'Scikit-Learn', detail: 'Historical trend regression' },
      { label: 'Decision Tool', value: 'EOQ Engine', detail: 'Cost-minimized batch sizing' },
    ],
    keyFeatures: [
      'Time-Series Demand Prediction: Forecasts future SKU demand based on historical volume patterns and seasonality trends.',
      'Automated Stockout & Overstock Identification: Visual risk flags identifying overstocked capital and critical low-stock items.',
      'Dynamic Safety Stock & Reorder Points: Adjusts reorder thresholds automatically based on lead-time demand variability.',
      'Economic Order Quantity (EOQ): Recommends optimal batch order sizes to minimize holding versus procurement expenses.',
      'Executive Working Capital Dashboard: Interactive visual breakdown separating productive working capital from frozen surplus inventory.'
    ],
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'SQL', 'React', 'Recharts'],
    architectureHighlights: [
      'Built regression pipeline evaluating lead-time demand standard deviations to compute dynamic z-score buffers.',
      'Engineered clean SQL snapshot queries to track inventory turnover rates across multiple warehouse tiers.',
      'Delivered responsive dashboard visualization comparing projected demand against stock-on-hand.'
    ],
    productRelevance: 'Illustrates how machine learning models can be framed as operational decision products that solve specific business balance-sheet bottlenecks.',
    githubUrl: 'https://github.com/kswaraj0045/pharmacyDashboard',
    role: 'Product & ML Architect',
    status: 'Completed'
  },
  {
    id: 'dental-crm',
    title: 'Dental Practice Management System & Clinical Intelligence',
    shortTitle: 'Dental Clinical CRM',
    category: 'Full-Stack SaaS',
    tagline: 'Multi-tenant SaaS platform with interactive odontograms, clinical timelines, and multi-role RBAC.',
    problem: 'Independent dental practices suffer from disorganized physical patient records, fragmented appointment scheduling, lack of tooth-specific clinical tracking, and severe cross-tenant security concerns.',
    solution: 'Architected a comprehensive multi-tenant clinical SaaS featuring interactive graphical odontograms, role-based clinic access control, and complete patient clinical timelines. Complemented by an in-depth 42KB Product Requirements Document (PRD).',
    metrics: [
      { label: 'Tenant Isolation', value: '100% RLS', detail: 'PostgreSQL Row-Level Security' },
      { label: 'Live Deployment', value: 'Production', detail: 'Fast-loading Vite + React 19' },
      { label: 'Clinical Tracking', value: '32-Tooth Grid', detail: 'Interactive adult/pediatric odontogram' },
      { label: 'PRD Depth', value: '7 Core Modules', detail: 'Full product specification' },
    ],
    keyFeatures: [
      'Multi-Tenant Data Isolation: Strict clinic-level row isolation via PostgreSQL Row-Level Security (RLS) and Supabase Auth.',
      'Interactive Odontogram: Visual tooth-by-tooth charting recording restorations, extractions, caries, and planned clinical treatments.',
      'Role-Based Access Control (RBAC): Distinct permission hierarchies for Clinic Administrators, Dentists, and Front-Desk staff.',
      'Comprehensive Patient Profiles: Longitudinal medical history, periodontal assessment notes, and treatment plan milestones.',
      'Real-Time Appointment Scheduling: Interactive clinic calendar preventing double-booking and chair allocation conflicts.',
      'Executive Clinic Telemetry: Patient throughput statistics, revenue collection metrics, and procedure completion analytics.'
    ],
    techStack: ['React 19', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL RLS', 'Tailwind CSS', 'TanStack Table', 'Zustand', 'Node.js', 'Express', 'MongoDB'],
    architectureHighlights: [
      'Dual verified implementations: Companion MERN repository for local practice setups and modern Supabase cloud SaaS.',
      'Authored comprehensive Product Requirements Document (PRD) specifying personas, clinical user flows, and acceptance criteria.',
      'Optimized data queries with TanStack Table for instant search, multi-column sorting, and server-side pagination.'
    ],
    productRelevance: 'Demonstrates deep product management craft: authoring complete PRDs, designing clinical workflows around specialized practitioner needs, and enforcing enterprise data security.',
    githubUrl: 'https://github.com/kswaraj0045/PMS',
    liveUrl: 'https://dentaldashboard.street-up.in/',
    role: 'Lead Product Designer & Full-Stack Engineer',
    status: 'Live Demo'
  },
  {
    id: 'hostel-manager',
    title: 'Hostel Life Manager – Collaborative Shared Living Platform',
    shortTitle: 'Hostel Life Manager',
    category: 'Full-Stack SaaS',
    tagline: 'Collaborative MERN platform managing shared expenses, chore rotations, meal schedules, and AI assistance.',
    problem: 'Hostel and apartment roommates experience chronic social and financial friction over untracked shared expenses, missed utility bills, forgotten chores, and disorganized communication channels.',
    solution: 'Engineered an all-in-one shared living application featuring real-time group expense splitting, automated chore rotations, mess menu planning, Socket.IO group messaging, and an integrated Google Gemini AI roommate assistant.',
    metrics: [
      { label: 'Active Deployment', value: 'Vercel + Render', detail: 'Live web application' },
      { label: 'AI Integration', value: 'Gemini 2.5 Flash', detail: 'Real-time assistant' },
      { label: 'Sync Latency', value: '< 100ms', detail: 'Socket.IO live communication' },
      { label: 'Automation', value: 'Cron Triggers', detail: 'Scheduled notifications' },
    ],
    keyFeatures: [
      'Smart Expense Splitting: Track shared expenses, allocate proportional shares, and calculate simplified net balances.',
      'Automated Chore Rotation: Recurring chore distribution with turn reminders and completion verification.',
      'Mess Menu Tracker: Digital schedule for campus hostel dining menus with weekly rotation updates.',
      'Low-Latency Group Chat: In-app real-time messaging powered by Socket.IO with group channels.',
      'Google Gemini AI Assistant: In-app intelligent agent answering room queries, drafting roommate agreements, and meal ideas.',
      'Multi-Channel Notifications: Integrated Web Push, email alerts via Nodemailer, and SMS OTP via Twilio.'
    ],
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JWT', 'Google Gemini API', 'Twilio'],
    architectureHighlights: [
      'Deployed dual-tier cloud architecture with frontend hosted on Vercel and backend microservice on Render.',
      'Implemented real-time bidirectional messaging state using Socket.IO clients synchronized with MongoDB collections.',
      'Configured scheduled background crons (`node-cron`) for chore resets and bill due-date push notifications.'
    ],
    productRelevance: 'Exemplifies human-centered consumer product development: transforming daily interpersonal roommate frictions into streamlined, pleasant collaborative digital interactions.',
    githubUrl: 'https://github.com/kswaraj0045/hostelManager',
    liveUrl: 'https://hostel-manager-five.vercel.app',
    role: 'Full-Stack Product Developer',
    status: 'Live Demo'
  },
  {
    id: 'scoliovis',
    title: 'ScolioVis – Deep Learning Scoliosis Cobb Angle Assessment',
    shortTitle: 'ScolioVis AI',
    category: 'AI & Deep Learning',
    tagline: 'Computer vision diagnostic platform detecting vertebral landmarks and automating Cobb angle calculation.',
    problem: 'Manual radiographic measurement of spinal curvature (Cobb angle) by orthopedic surgeons is labor-intensive, slow, and suffers from significant intra- and inter-observer variability of 5° to 10°.',
    solution: 'Built a clinical diagnostic system using PyTorch and OpenCV that localizes vertebral landmarks on spinal X-rays, executes an automated geometric Cobb angle calculation engine (MAE < 5°), and enables multi-model comparative analysis.',
    metrics: [
      { label: 'Target Precision', value: 'MAE < 5°', detail: 'Mean Absolute Error' },
      { label: 'Award & Milestone', value: 'Avishkar 2025', detail: 'State Research Finalist' },
      { label: 'Visualization', value: '5-Stage Pipeline', detail: 'BBox to Cobb intersecting vectors' },
      { label: 'Model Support', value: '4 Architectures', detail: 'Keypoint R-CNN, YOLOv8, VerteNet, U-Net' },
    ],
    keyFeatures: [
      'Two-Stage Deep Learning Pipeline: Gross spine/torso localization combined with precise 4-corner vertebral landmark detection.',
      'Automated Geometric Cobb Angle Engine: Calculates vertebra tilt vectors, identifies superior/inferior end-vertebrae, and computes Cobb angle.',
      'Multi-Curve Measurement: Simultaneously outputs Proximal Thoracic (PT), Main Thoracic (MT), and Lumbar (TL/L) curvature degrees.',
      'Interactive 5-Stage Visualizer: Step-by-step progressive rendering of bounding boxes, vertebral keypoints, horizontal tilt lines, and Cobb vectors.',
      'Model Comparative Studio: Researchers can toggle between Keypoint R-CNN, YOLOv8 Pose, VerteNet, and Residual-UNet to compare inference.'
    ],
    techStack: ['PyTorch', 'Torchvision', 'Keypoint R-CNN', 'YOLOv8', 'FastAPI', 'OpenCV', 'Next.js 14', 'TypeScript', 'Zustand'],
    architectureHighlights: [
      'Under faculty mentorship of Dr. Vaishali Wangikar; selected as Finalist at Avishkar 2025 (State-Level Research Convention, SPPU).',
      'Developed mathematical vector projection algorithms determining intersection angles of perpendicular lines to end-vertebrae.',
      'Separated high-performance FastAPI Python inference backend from responsive Next.js/Tailwind clinician dashboard.'
    ],
    productRelevance: 'Demonstrates ability to navigate complex medical technology problems, translate clinical diagnostic protocols into software requirements, and design intuitive clinician-facing tools.',
    githubUrl: 'https://github.com/kswaraj0045/Scoliosis',
    role: 'Deep Learning & Systems Researcher',
    status: 'Research Prototype'
  },
  {
    id: 'genericmedicare',
    title: 'GenericMediCare – Generic Medicine Discovery & Mapping',
    shortTitle: 'GenericMediCare',
    category: 'Healthcare Systems',
    tagline: 'Healthcare e-commerce platform mapping branded drugs to affordable generic alternatives.',
    problem: 'Millions of patients in developing economies overspend on life-saving pharmaceuticals due to information asymmetry and lack of transparency regarding identical bio-equivalent generic formulations.',
    solution: 'Designed and developed a digital healthcare marketplace with an active ingredient alternative-mapping engine (`get_alternative_medicines`), role-based buyer/seller portals, and prescription verification gates.',
    metrics: [
      { label: 'Alternative Engine', value: 'Active Ingredient', detail: 'Automated formulation matching' },
      { label: 'Safety Layer', value: 'Rx Verification', detail: 'Mandatory prescription gating' },
      { label: 'User Roles', value: 'Multi-Portal', detail: 'Customer and licensed Seller portals' },
      { label: 'Architecture', value: 'Django ORM', detail: 'Relational catalog mapping' },
    ],
    keyFeatures: [
      'Active Pharmaceutical Ingredient (API) Matching: Automatically maps expensive branded medications to bio-equivalent generic alternatives.',
      'Price Transparency Comparison: Displays transparent price comparisons showing direct consumer savings per pack.',
      'Prescription Upload Gate: Requires verifiable prescription documentation before processing scheduled drug orders.',
      'Dual-Portal Architecture: Separate management views for pharmacy vendors (inventory, pricing) and consumers (search, cart).',
      'Categorized Therapeutic Indexing: Multi-category tagging across chronic conditions, antibiotics, and general wellness.'
    ],
    techStack: ['Python', 'Django', 'SQLite / PostgreSQL', 'Pillow', 'HTML5', 'Tailwind CSS'],
    architectureHighlights: [
      'Engineered Django ORM model relationships linking active pharmaceutical ingredients across multiple distinct manufacturer brands.',
      'Implemented secure media upload pipelines for patient prescription validation.',
      'Built modular seller dashboard for tracking catalog stock and updating pricing tiers.'
    ],
    productRelevance: 'Highlights product thinking focused on healthcare equity: solving economic market inefficiencies through smart data mapping and consumer-centric feature prioritization.',
    githubUrl: 'https://github.com/kswaraj0045/GenericMediCare',
    role: 'Product Designer & Backend Developer',
    status: 'Completed'
  }
];

