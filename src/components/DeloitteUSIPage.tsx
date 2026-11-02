import React, { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ArrowLeft, 
  Building2, 
  ShieldCheck, 
  Globe2, 
  Laptop, 
  Brain, 
  Layers, 
  GraduationCap, 
  CheckCircle2, 
  Briefcase, 
  Award,
  Sparkles,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Workflow
} from 'lucide-react';

interface Props {
  onNavigateHome: () => void;
}

export const DeloitteUSIPage: React.FC<Props> = ({ onNavigateHome }) => {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#090A0C] text-[#F5F5F5] selection:bg-[#86BC25]/25 selection:text-[#86BC25] relative overflow-x-hidden">
      
      {/* Ambient background lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-[#86BC25]/6 rounded-full blur-[170px]" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#C5C8CE]/4 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-[#86BC25]/5 rounded-full blur-[180px]" />
        <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />
      </div>

      {/* Top Header Navigation */}
      <header className="sticky top-0 z-50 bg-[#090A0C]/85 backdrop-blur-md border-b border-[#343A42]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-sm font-mono text-[#C5C8CE] hover:text-white bg-[#17191D] border border-[#343A42] hover:border-[#86BC25]/60 hover:shadow-[0_0_15px_rgba(134,188,37,0.15)] transition-all cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#86BC25]" />
            <span>Return to Portfolio</span>
          </button>

          {/* Deloitte USI Brand Mark */}
          <div className="flex items-center gap-2">
            <span className="font-heading font-black text-lg sm:text-xl text-[#F5F5F5] tracking-tight">
              Deloitte<span className="text-[#86BC25] font-black">.</span>
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-[#86BC25]/15 text-[#86BC25] border border-[#86BC25]/30">
              US-India Offices
            </span>
          </div>

        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-24">
        
        {/* ========================================================= */}
        {/* HERO SECTION — DISCOVER DELOITTE USI */}
        {/* ========================================================= */}
        <section className="space-y-6 pt-4">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold text-[#86BC25] bg-[#202329] border border-[#86BC25]/35 shadow-[0_0_12px_rgba(134,188,37,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#86BC25] shadow-[0_0_8px_#86BC25] animate-pulse" />
              <span>GLOBAL PROFESSIONAL SERVICES &amp; CAPABILITY HUB</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight text-[#F5F5F5]">
              DISCOVER DELOITTE USI
            </h1>

            <p className="text-lg sm:text-xl text-[#C5C8CE] leading-relaxed font-light">
              Deloitte US-India Offices (Deloitte USI) operates as an integral global delivery and capability arm of Deloitte US, providing advanced technology, consulting, analytics, and business transformation solutions to Fortune 500 enterprises and global institutions.
            </p>
          </motion.div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: PERSONAL SELECTION SECTION — MY NEXT CHAPTER */}
        {/* ========================================================= */}
        <section className="relative">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-6 sm:p-10 md:p-12 rounded-3xl bg-gradient-to-b from-[#17191D] to-[#0D0F11] border border-[#86BC25]/40 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.85),0_0_30px_-5px_rgba(134,188,37,0.15)] relative overflow-hidden"
          >
            {/* Subtle green ambient inside */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_top_right,rgba(134,188,37,0.14),transparent_70%)] pointer-events-none" />

            <div className="space-y-8 relative z-10">
              
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-[#86BC25] bg-[#202329] border border-[#86BC25]/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>CAREER MILESTONE</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#F5F5F5] tracking-tight">
                  MY NEXT CHAPTER
                </h2>

                <p className="text-base sm:text-lg text-[#C5C8CE] leading-relaxed max-w-3xl">
                  &ldquo;Selected for the Incoming Analyst role at Deloitte USI through college campus placement. This milestone marks an important step in my professional journey, and I look forward to learning, growing and contributing.&rdquo;
                </p>
              </div>

              {/* Personal Selection Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 pt-2">
                
                {/* Organization */}
                <div className="p-4 rounded-xl bg-[#0D0F11] border border-[#343A42] hover:border-[#86BC25]/40 transition-colors">
                  <span className="text-[11px] font-mono text-[#858A93] uppercase tracking-wider block">Organization</span>
                  <span className="text-base font-heading font-bold text-[#F5F5F5] mt-1 block">Deloitte USI</span>
                  <span className="text-[11px] text-[#A4A7AE] mt-0.5 block">Deloitte US-India Offices</span>
                </div>

                {/* Position */}
                <div className="p-4 rounded-xl bg-[#0D0F11] border border-[#343A42] hover:border-[#86BC25]/40 transition-colors">
                  <span className="text-[11px] font-mono text-[#858A93] uppercase tracking-wider block">Position</span>
                  <span className="text-base font-heading font-bold text-[#F5F5F5] mt-1 block">Incoming Analyst</span>
                  <span className="text-[11px] text-[#A4A7AE] mt-0.5 block">Early Career Track</span>
                </div>

                {/* Selection Track */}
                <div className="p-4 rounded-xl bg-[#0D0F11] border border-[#343A42] hover:border-[#86BC25]/40 transition-colors">
                  <span className="text-[11px] font-mono text-[#858A93] uppercase tracking-wider block">Selection</span>
                  <span className="text-base font-heading font-bold text-[#F5F5F5] mt-1 block">Campus Placement</span>
                  <span className="text-[11px] text-[#A4A7AE] mt-0.5 block">On-Campus Evaluation</span>
                </div>

                {/* Institution */}
                <div className="p-4 rounded-xl bg-[#0D0F11] border border-[#343A42] hover:border-[#86BC25]/40 transition-colors sm:col-span-2 lg:col-span-1">
                  <span className="text-[11px] font-mono text-[#858A93] uppercase tracking-wider block">Institution</span>
                  <span className="text-base font-heading font-bold text-[#F5F5F5] mt-1 block">MIT Academy of Engineering</span>
                  <span className="text-[11px] text-[#A4A7AE] mt-0.5 block">Pune, India</span>
                </div>

                {/* Status */}
                <div className="p-4 rounded-xl bg-[#0D0F11] border border-[#86BC25]/40 shadow-[0_0_15px_rgba(134,188,37,0.1)] sm:col-span-2 lg:col-span-1">
                  <span className="text-[11px] font-mono text-[#86BC25] uppercase tracking-wider block">Status</span>
                  <span className="text-base font-heading font-bold text-[#F5F5F5] mt-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#86BC25] shadow-[0_0_8px_#86BC25] animate-pulse" />
                    Selected / Incoming
                  </span>
                  <span className="text-[11px] text-[#A4A7AE] mt-0.5 block">Pre-joining milestone</span>
                </div>

              </div>

              {/* Verification & Compliance Note */}
              <div className="pt-4 border-t border-[#343A42]/50 flex items-start sm:items-center gap-2 text-xs font-mono text-[#858A93]">
                <ShieldCheck className="w-4 h-4 text-[#86BC25] shrink-0 mt-0.5 sm:mt-0" />
                <span>Selection milestone verified via university campus placement. No employment commencement or unauthorized agency claimed.</span>
              </div>

            </div>
          </motion.div>
        </section>

        {/* ========================================================= */}
        {/* CLEAR ORGANIZATIONAL DISTINCTION — THREE DISTINCT ENTITIES */}
        {/* ========================================================= */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-mono font-semibold text-[#86BC25] uppercase tracking-wider">
              ORGANIZATIONAL STRUCTURE &amp; GOVERNANCE
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#F5F5F5]">
              Understanding Deloitte USI in the Global Network
            </h2>
            <p className="text-sm sm:text-base text-[#C5C8CE] max-w-3xl leading-relaxed">
              To ensure complete professional accuracy, Deloitte USI, Deloitte India, and Deloitte Global operate with distinct governance models, client mandates, and geographic scopes within the global Deloitte network:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Entity 1: Deloitte USI */}
            <div className="p-6 rounded-2xl bg-[#17191D] border-2 border-[#86BC25]/50 shadow-[0_4px_25px_-5px_rgba(134,188,37,0.15)] flex flex-col justify-between space-y-4 relative">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-[#86BC25]/20 text-[#86BC25] border border-[#86BC25]/50">
                    SELECTED ENTITY
                  </span>
                  <Globe2 className="w-5 h-5 text-[#86BC25]" />
                </div>
                <h3 className="text-xl font-bold font-heading text-[#F5F5F5]">
                  Deloitte USI (US-India Offices)
                </h3>
                <p className="text-xs text-[#86BC25] font-mono">
                  Offshore Delivery Arm of Deloitte US
                </p>
                <p className="text-sm text-[#C5C8CE] leading-relaxed">
                  Operates as part of Deloitte LLP (the US member firm). Located across major Indian tech hubs (Hyderabad, Bengaluru, Mumbai, Gurugram), Deloitte USI teams collaborate directly with US practitioners to deliver complex technology, consulting, analytics, and operational solutions for US and global multinational clients.
                </p>
              </div>
              <div className="pt-3 border-t border-[#343A42] text-xs font-mono text-[#858A93]">
                Mandate: Global &amp; US client engagement delivery
              </div>
            </div>

            {/* Entity 2: Deloitte India */}
            <div className="p-6 rounded-2xl bg-[#17191D] border border-[#343A42] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-[#202329] text-[#C5C8CE] border border-[#343A42]">
                    DOMESTIC FIRM
                  </span>
                  <Building2 className="w-5 h-5 text-[#A4A7AE]" />
                </div>
                <h3 className="text-xl font-bold font-heading text-[#F5F5F5]">
                  Deloitte India
                </h3>
                <p className="text-xs text-[#A4A7AE] font-mono">
                  Independent Indian Member Firm
                </p>
                <p className="text-sm text-[#C5C8CE] leading-relaxed">
                  An independent licensed member firm within the Deloitte Touche Tohmatsu Limited (DTTL) network dedicated primarily to providing audit, consulting, tax, and risk advisory services to corporate and public-sector clients within the domestic Indian market.
                </p>
              </div>
              <div className="pt-3 border-t border-[#343A42] text-xs font-mono text-[#858A93]">
                Mandate: Domestic Indian market client services
              </div>
            </div>

            {/* Entity 3: Deloitte Global (DTTL) */}
            <div className="p-6 rounded-2xl bg-[#17191D] border border-[#343A42] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-[#202329] text-[#C5C8CE] border border-[#343A42]">
                    GLOBAL UMBRELLA
                  </span>
                  <ShieldCheck className="w-5 h-5 text-[#A4A7AE]" />
                </div>
                <h3 className="text-xl font-bold font-heading text-[#F5F5F5]">
                  Deloitte Global (DTTL)
                </h3>
                <p className="text-xs text-[#A4A7AE] font-mono">
                  Coordinating Network Entity
                </p>
                <p className="text-sm text-[#C5C8CE] leading-relaxed">
                  Deloitte Touche Tohmatsu Limited is a UK private company limited by guarantee that acts as the coordinating umbrella across independent member firms worldwide. DTTL establishes global quality standards, brand governance, and strategic policies, but does not provide services to clients directly.
                </p>
              </div>
              <div className="pt-3 border-t border-[#343A42] text-xs font-mono text-[#858A93]">
                Mandate: Brand governance &amp; global standards
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* CORE CAPABILITIES: TECHNOLOGY, CONSULTING & ANALYTICS */}
        {/* ========================================================= */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-mono font-semibold text-[#86BC25] uppercase tracking-wider">
              CAPABILITY PORTFOLIO
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#F5F5F5]">
              Core Solution Capabilities at Deloitte USI
            </h2>
            <p className="text-sm sm:text-base text-[#C5C8CE] max-w-3xl leading-relaxed">
              Deloitte USI delivers multi-disciplinary advisory and technical execution across four core enterprise capability areas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Capability 1: Technology & Engineering */}
            <div className="p-6 rounded-2xl bg-[#17191D] border border-[#343A42] hover:border-[#86BC25]/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#202329] border border-[#343A42] flex items-center justify-center text-[#86BC25]">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#F5F5F5]">
                Technology &amp; Engineering
              </h3>
              <p className="text-sm text-[#C5C8CE] leading-relaxed">
                Modern enterprise cloud architecture (AWS, Azure, GCP), microservices, full-stack application development, ERP modernization (SAP, Oracle, Salesforce), DevOps, and agile software delivery.
              </p>
            </div>

            {/* Capability 2: Analytics & AI */}
            <div className="p-6 rounded-2xl bg-[#17191D] border border-[#343A42] hover:border-[#86BC25]/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#202329] border border-[#343A42] flex items-center justify-center text-[#86BC25]">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#F5F5F5]">
                Analytics, Data &amp; AI
              </h3>
              <p className="text-sm text-[#C5C8CE] leading-relaxed">
                Large-scale data engineering, advanced business intelligence, predictive modeling, machine learning pipelines, and enterprise generative AI solutions enabling data-driven executive decision-making.
              </p>
            </div>

            {/* Capability 3: Consulting & Business Transformation */}
            <div className="p-6 rounded-2xl bg-[#17191D] border border-[#343A42] hover:border-[#86BC25]/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#202329] border border-[#343A42] flex items-center justify-center text-[#86BC25]">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#F5F5F5]">
                Consulting &amp; Enterprise Transformation
              </h3>
              <p className="text-sm text-[#C5C8CE] leading-relaxed">
                Streamlining business operations, digital customer experience design, supply chain optimization, and enterprise technology strategy for global organizations navigating digital disruption.
              </p>
            </div>

            {/* Capability 4: Risk & Regulatory Advisory */}
            <div className="p-6 rounded-2xl bg-[#17191D] border border-[#343A42] hover:border-[#86BC25]/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#202329] border border-[#343A42] flex items-center justify-center text-[#86BC25]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#F5F5F5]">
                Risk, Cyber &amp; Regulatory Advisory
              </h3>
              <p className="text-sm text-[#C5C8CE] leading-relaxed">
                Cybersecurity posture assessment, data privacy compliance, cloud governance, internal controls, and enterprise regulatory risk frameworks across global financial, healthcare, and commercial sectors.
              </p>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* CAREER OPPORTUNITIES & THE ANALYST ROLE */}
        {/* ========================================================= */}
        <section className="p-6 sm:p-10 rounded-3xl bg-[#17191D] border border-[#343A42] space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-mono font-semibold text-[#86BC25] uppercase tracking-wider">
              CAREER TRACK
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#F5F5F5]">
              The Analyst Role at Deloitte USI
            </h2>
            <p className="text-sm sm:text-base text-[#C5C8CE] max-w-3xl leading-relaxed">
              The Analyst position represents Deloitte USI&apos;s premier foundational role for graduates entering professional consulting and technology services:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
            
            <div className="p-5 rounded-xl bg-[#0D0F11] border border-[#343A42]/60 space-y-2.5">
              <div className="flex items-center gap-2 text-[#86BC25] font-mono text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>CLIENT DELIVERY</span>
              </div>
              <p className="text-xs sm:text-sm text-[#C5C8CE] leading-relaxed">
                Collaborating within multidisciplinary teams on technical implementation, system requirements analysis, data synthesis, and testing.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0D0F11] border border-[#343A42]/60 space-y-2.5">
              <div className="flex items-center gap-2 text-[#86BC25] font-mono text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>STRUCTURED LEARNING</span>
              </div>
              <p className="text-xs sm:text-sm text-[#C5C8CE] leading-relaxed">
                Intensive continuous training programs, industry certifications in modern cloud and data architectures, and leadership mentorship.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0D0F11] border border-[#343A42]/60 space-y-2.5">
              <div className="flex items-center gap-2 text-[#86BC25] font-mono text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>GLOBAL COLLABORATION</span>
              </div>
              <p className="text-xs sm:text-sm text-[#C5C8CE] leading-relaxed">
                Direct partnership with US engagement managers and global domain leaders on transformative Fortune 500 client initiatives.
              </p>
            </div>

          </div>
        </section>

        {/* Bottom CTA to return */}
        <section className="text-center pt-4 pb-8 space-y-4">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold font-mono text-[#0D0F11] bg-[#86BC25] hover:bg-[#97D72B] shadow-[0_0_25px_rgba(134,188,37,0.35)] transition-all cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Portfolio Home</span>
          </button>
          <div className="text-xs font-mono text-[#858A93]">
            Swaraj Sanjay Khadalkar • Portfolio 2026
          </div>
        </section>

      </main>

    </div>
  );
};

