import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  Github, 
  Award, 
  Layers, 
  TrendingUp, 
  ShieldCheck, 
  Activity, 
  Cpu, 
  FileText,
  Eye,
  CheckCircle2
} from 'lucide-react';

interface Props {
  onDismissPreview?: () => void;
}

export const DesignSystemPreview: React.FC<Props> = ({ onDismissPreview }) => {
  const [activeTab, setActiveTab] = useState<'tokens' | 'components' | 'cards'>('tokens');

  return (
    <div className="bg-bg-main text-text-primary p-6 md:p-12 min-h-screen border-b border-border-subtle relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border-subtle">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-accent-primary bg-accent-primary/10 border border-accent-primary/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PHASE 2 • DESIGN SYSTEM SPECIFICATION</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-heading text-text-primary tracking-tight">
              Design System & Component Preview
            </h1>
            <p className="text-text-secondary mt-1 text-sm md:text-base max-w-2xl">
              Verified tokens, atomic components, and layouts upholding the <span className="text-accent-primary font-medium">"Premium Dark Editorial Meets Futuristic Product Experience"</span> design direction.
            </p>
          </div>

          {onDismissPreview && (
            <button
              onClick={onDismissPreview}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-bg-main bg-accent-primary hover:bg-sky-400 transition-colors shadow-card-glow cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              <span>Switch to Full Website View</span>
            </button>
          )}
        </div>

        {/* Tab Controls */}
        <div className="flex gap-2 border-b border-border-subtle pb-4">
          {(['tokens', 'components', 'cards'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab
                  ? 'bg-accent-primary/15 text-accent-primary border border-accent-primary/30'
                  : 'text-text-secondary hover:text-text-primary hover:bg-bg-card'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Specimen
            </button>
          ))}
        </div>

        {/* Section 1: Design Tokens */}
        {activeTab === 'tokens' && (
          <div className="space-y-10">
            {/* Color Palette */}
            <div>
              <h2 className="text-xl font-heading font-semibold mb-4 text-text-primary flex items-center gap-2">
                <Layers className="w-5 h-5 text-accent-primary" />
                Color Palette & Surface Tiers
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
                {[
                  { name: 'Canvas Main', hex: '#090A0C', bg: 'bg-[#090A0C]', border: 'border-slate-800' },
                  { name: 'Secondary Canvas', hex: '#111317', bg: 'bg-[#111317]', border: 'border-slate-800' },
                  { name: 'Card Surface', hex: '#17191D', bg: 'bg-[#17191D]', border: 'border-slate-800' },
                  { name: 'Elevated Surface', hex: '#202329', bg: 'bg-[#202329]', border: 'border-slate-700' },
                  { name: 'Metallic Silver', hex: '#C5C8CE', bg: 'bg-[#C5C8CE]', text: 'text-slate-950' },
                  { name: 'Platinum White', hex: '#F5F5F5', bg: 'bg-[#F5F5F5]', text: 'text-slate-950' },
                  { name: 'Steel Gray', hex: '#A4A7AE', bg: 'bg-[#A4A7AE]', text: 'text-slate-950' },
                  { name: 'Crimson Red', hex: '#B32635', bg: 'bg-[#B32635]', text: 'text-white' },
                ].map((c) => (
                  <div key={c.hex} className="rounded-xl border border-border-subtle overflow-hidden bg-bg-card">
                    <div className={`h-16 w-full ${c.bg} ${c.border || ''} flex items-center justify-center`}>
                      <span className={`text-xs font-mono font-bold ${c.text || 'text-white'}`}>{c.hex}</span>
                    </div>
                    <div className="p-2.5 text-center">
                      <p className="text-xs font-medium text-text-primary">{c.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography Specimen */}
            <div className="p-6 rounded-2xl border border-border-subtle bg-bg-card/60 backdrop-blur-md space-y-6">
              <h2 className="text-xl font-heading font-semibold text-text-primary">
                Typography Scale & Font Families
              </h2>
              <div className="space-y-4 divide-y divide-border-subtle/50">
                <div className="pt-2">
                  <div className="text-xs font-mono text-accent-primary mb-1">Space Grotesk • Display Heading (Bold 700)</div>
                  <div className="text-3xl md:text-4xl font-heading font-bold text-text-primary">
                    Building Products That Solve Real Problems.
                  </div>
                </div>
                <div className="pt-4">
                  <div className="text-xs font-mono text-accent-secondary mb-1">Inter • Body & UI (Regular 400 & Medium 500)</div>
                  <p className="text-text-secondary text-base leading-relaxed">
                    An engineer by education, an Analyst selected at Deloitte, a technology and business enthusiast, and an aspiring Product Manager. Connecting technology with business needs and user problems.
                  </p>
                </div>
                <div className="pt-4">
                  <div className="text-xs font-mono text-accent-secondary mb-1">JetBrains Mono • Technical KPIs & Code Tags</div>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-text-primary">
                    <span className="px-2.5 py-1 rounded bg-bg-secondary border border-border-subtle">MAE &lt; 5.0°</span>
                    <span className="px-2.5 py-1 rounded bg-bg-secondary border border-border-subtle">35,000+ Transactions</span>
                    <span className="px-2.5 py-1 rounded bg-bg-secondary border border-border-subtle">PostgreSQL RLS</span>
                    <span className="px-2.5 py-1 rounded bg-accent-achievement/10 border border-accent-achievement/30 text-accent-achievement">
                      SELECTED AT DELOITTE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section 2: Atomic Components */}
        {activeTab === 'components' && (
          <div className="space-y-10">
            {/* Badges & Pills */}
            <div>
              <h2 className="text-xl font-heading font-semibold mb-4 text-text-primary">
                Badges, Indicators & Status Pills
              </h2>
              <div className="flex flex-wrap gap-3 items-center p-6 rounded-2xl border border-border-subtle bg-bg-card/60">
                {/* Deloitte Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-accent-achievement bg-accent-achievement/10 border border-accent-achievement/30 shadow-deloitte-glow">
                  <span className="w-2 h-2 rounded-full bg-accent-achievement animate-pulse" />
                  <span>SELECTED AT DELOITTE – ANALYST</span>
                </div>

                {/* Primary Category Pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-accent-primary bg-accent-primary/10 border border-accent-primary/30">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Product & Analytics</span>
                </div>

                {/* Secondary Pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-accent-secondary bg-accent-secondary/10 border border-accent-secondary/30">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>AI & Deep Learning</span>
                </div>

                {/* Status Pills */}
                <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                  ● Live Demo
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/25">
                  ● Production
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/25">
                  ● Research Prototype
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div>
              <h2 className="text-xl font-heading font-semibold mb-4 text-text-primary">
                Button System & Interactive Triggers
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl border border-border-subtle bg-bg-card/60">
                <button className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-accent-primary hover:bg-accent-hover transition-all shadow-card-glow cursor-pointer">
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-text-primary bg-bg-card border border-border-subtle hover:border-accent-primary hover:bg-bg-secondary transition-all cursor-pointer">
                  <FileText className="w-4 h-4 text-accent-primary" />
                  <span>Download Resume</span>
                </button>

                <button className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-accent-achievement bg-accent-achievement/10 border border-accent-achievement/30 hover:bg-accent-achievement/20 transition-all cursor-pointer">
                  <Award className="w-4 h-4" />
                  <span>Deloitte Milestone</span>
                </button>

                <button className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-text-secondary bg-bg-secondary border border-border-subtle hover:text-text-primary cursor-pointer">
                  <Github className="w-4 h-4" />
                  <span>View Codebase</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Section 3: Cards & Compositions */}
        {activeTab === 'cards' && (
          <div className="space-y-10">
            {/* Deloitte Achievement Showcase Card */}
            <div>
              <h2 className="text-xl font-heading font-semibold mb-4 text-text-primary flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-achievement" />
                Deloitte Achievement Card Specimen
              </h2>
              <div className="deloitte-card p-6 md:p-8 rounded-2xl relative overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-accent-achievement bg-accent-achievement/10 border border-accent-achievement/30">
                      <span className="w-2 h-2 rounded-full bg-accent-achievement" />
                      <span>CAREER SELECTION MILESTONE</span>
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-text-primary">
                      SELECTED AT DELOITTE
                    </h3>
                    <p className="text-accent-achievement font-mono text-sm font-medium">
                      Analyst | Campus Placement
                    </p>
                    <p className="text-text-secondary text-sm md:text-base max-w-2xl leading-relaxed">
                      Selected for the Analyst role at Deloitte through college campus placement. Recognizing structured analytical reasoning, engineering depth, and problem-solving capability.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="px-4 py-3 rounded-xl bg-bg-main/60 border border-border-subtle text-center">
                      <div className="text-xl font-bold text-accent-achievement font-mono">Analyst</div>
                      <div className="text-xs text-text-muted mt-0.5">Role Selected</div>
                    </div>
                    <div className="px-4 py-3 rounded-xl bg-bg-main/60 border border-border-subtle text-center">
                      <div className="text-xl font-bold text-text-primary font-mono">MIT AOE</div>
                      <div className="text-xs text-text-muted mt-0.5">Campus Placement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Metric KPI Cards */}
            <div>
              <h2 className="text-xl font-heading font-semibold mb-4 text-text-primary">
                Product Metric & Telemetry Cards
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Transactions Curated', val: '35,000+', sub: 'Star Schema Data Model', icon: TrendingUp, color: 'text-accent-primary' },
                  { label: 'Cobb Angle Accuracy', val: 'MAE < 5.0°', sub: 'Deep Learning Keypoints', icon: Activity, color: 'text-accent-secondary' },
                  { label: 'Tenant Isolation', val: '100% RLS', sub: 'Postgres Supabase Security', icon: ShieldCheck, color: 'text-accent-primary' },
                  { label: 'Sync Latency', val: '< 100ms', sub: 'Socket.IO Real-time Events', icon: Cpu, color: 'text-sky-400' },
                ].map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="glass-card p-5 rounded-2xl relative overflow-hidden group">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-text-muted uppercase tracking-wider">{stat.label}</span>
                        <Icon className={`w-4 h-4 ${stat.color}`} />
                      </div>
                      <div className="text-2xl font-bold font-mono text-text-primary">{stat.val}</div>
                      <div className="text-xs text-text-secondary mt-1 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>{stat.sub}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Project Card Specimen */}
            <div>
              <h2 className="text-xl font-heading font-semibold mb-4 text-text-primary">
                Interactive Project Card Specimen
              </h2>
              <div className="max-w-xl glass-card p-6 rounded-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-accent-primary bg-accent-primary/10 border border-accent-primary/20">
                    Product & Analytics
                  </span>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Verified Repository
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-bold font-heading text-text-primary">
                    Pharmacy Chain – Business Intelligence Dashboard
                  </h4>
                  <p className="text-text-secondary text-sm mt-1 leading-relaxed">
                    Multi-store commercial BI dashboard monitoring 35,000 transactions across inventory, revenue, and compliance.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border-subtle/50">
                  <div className="text-xs">
                    <span className="text-text-muted">KPI Focus:</span>
                    <span className="text-text-primary font-mono ml-1">Days of Inventory</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-text-muted">Volume:</span>
                    <span className="text-text-primary font-mono ml-1">35,000 Rows</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {['Python', 'Streamlit', 'Plotly', 'Pandas', 'Star Schema'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-xs font-mono bg-bg-secondary text-text-secondary border border-border-subtle">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="pt-2 flex items-center justify-between">
                  <button className="text-xs font-semibold text-accent-primary inline-flex items-center gap-1 hover:underline">
                    <span>Inspect Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a href="https://github.com/kswaraj0045/pharmacyDashboard" target="_blank" rel="noreferrer" className="text-text-muted hover:text-text-primary text-xs inline-flex items-center gap-1">
                    <Github className="w-3.5 h-3.5" />
                    <span>Repository</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

