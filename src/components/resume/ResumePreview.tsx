import React, { useRef, useState } from 'react';
import { 
  Download, 
  Printer, 
  FileCheck, 
  Check, 
  Sparkles, 
  ZoomIn, 
  ZoomOut, 
  Maximize2,
  Sliders,
  Layers
} from 'lucide-react';
import { ResumeData, ResumeTemplateId, ResumeTemplateMeta } from '../../types/resume';
import { ResumeTemplateRenderer } from './ResumeTemplates';
import { downloadResumePDF, triggerNativePrint } from '../../utils/pdfGenerator';

interface ResumePreviewProps {
  data: ResumeData;
  activeTemplate: ResumeTemplateId;
  onSelectTemplate: (template: ResumeTemplateId) => void;
}

export const templateMetas: ResumeTemplateMeta[] = [
  {
    id: 'classic',
    name: 'Classic ATS',
    description: 'Traditional monochrome layout optimized for applicant tracking systems.',
    badge: 'High ATS Match',
    recommendedFor: 'Enterprise, Banking & Large Tech'
  },
  {
    id: 'modern',
    name: 'Modern Pro',
    description: 'Contemporary typography with subtle crimson accent rule and high visual impact.',
    badge: 'Popular',
    recommendedFor: 'Product, Tech & Startup Roles'
  },
  {
    id: 'minimal',
    name: 'Minimal Clean',
    description: 'Spacious layout with understated typography and generous white space.',
    badge: 'Minimalist',
    recommendedFor: 'Design, Consulting & General'
  }
];

export const ResumePreview: React.FC<ResumePreviewProps> = ({
  data,
  activeTemplate,
  onSelectTemplate
}) => {
  const printAreaRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<number>(0.85);

  const handleDownloadPDF = async () => {
    if (!printAreaRef.current) return;

    const baseName = data.personalInfo.fullName.trim() || 'My_Professional';
    const cleanFilename = `${baseName.replace(/[^a-zA-Z0-9]/g, '_')}_Resume.pdf`;

    await downloadResumePDF({
      element: printAreaRef.current,
      filename: cleanFilename,
      onStart: () => {
        setIsExporting(true);
        setExportSuccess(false);
      },
      onComplete: () => {
        setIsExporting(false);
        setExportSuccess(true);
        setTimeout(() => setExportSuccess(false), 4000);
      },
      onError: (err) => {
        setIsExporting(false);
        alert(`Could not export PDF automatically: ${err.message}. You can also use the "Print / Vector PDF" button.`);
      }
    });
  };

  return (
    <div className="space-y-4">
      {/* Top Controls: Template Switcher & Actions Bar */}
      <div className="bg-bg-card rounded-2xl border border-border-subtle p-3.5 sm:p-4 space-y-3.5">
        
        {/* Template Selector Pills */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-border-subtle/70">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-accent-primary" />
            <span className="text-xs font-mono font-bold text-text-primary uppercase tracking-wider">
              Template:
            </span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {templateMetas.map((tmpl) => (
              <button
                key={tmpl.id}
                onClick={() => onSelectTemplate(tmpl.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium shrink-0 transition-all cursor-pointer min-h-[36px] flex items-center gap-1.5 ${
                  activeTemplate === tmpl.id
                    ? 'bg-accent-primary text-white shadow-card-glow font-bold'
                    : 'bg-bg-main text-text-secondary hover:text-text-primary border border-border-subtle'
                }`}
              >
                <span>{tmpl.name}</span>
                {tmpl.badge && (
                  <span className={`px-1.5 py-0.2 rounded text-[9px] uppercase font-bold ${
                    activeTemplate === tmpl.id 
                      ? 'bg-black/30 text-white' 
                      : 'bg-accent-primary/10 text-accent-primary'
                  }`}>
                    {tmpl.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons: PDF Download + Native Print */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Zoom controls for desktop */}
          <div className="hidden md:flex items-center gap-1 text-xs font-mono text-text-muted">
            <span>Zoom:</span>
            <button
              onClick={() => setZoomLevel((prev) => Math.max(0.6, prev - 0.1))}
              className="p-1.5 rounded-lg bg-bg-main border border-border-subtle hover:text-white cursor-pointer"
              title="Zoom out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="w-12 text-center text-[11px] font-bold text-text-primary">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={() => setZoomLevel((prev) => Math.min(1.1, prev + 0.1))}
              className="p-1.5 rounded-lg bg-bg-main border border-border-subtle hover:text-white cursor-pointer"
              title="Zoom in"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoomLevel(0.85)}
              className="px-2 py-1 rounded-lg bg-bg-main border border-border-subtle hover:text-white text-[10px] cursor-pointer"
              title="Reset to 85%"
            >
              Fit
            </button>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {/* Native Browser Print (Vector Selectable PDF) */}
            <button
              onClick={triggerNativePrint}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-mono font-medium text-text-primary bg-bg-main hover:bg-bg-elevated border border-border-subtle hover:border-accent-primary/50 transition-all cursor-pointer min-h-[44px]"
              title="Print directly or save as native vector PDF via browser"
            >
              <Printer className="w-4 h-4 text-accent-primary" />
              <span>Print / Vector PDF</span>
            </button>

            {/* Direct PDF Download Button */}
            <button
              onClick={handleDownloadPDF}
              disabled={isExporting}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold text-white bg-accent-primary hover:bg-accent-hover transition-all shadow-card-glow cursor-pointer disabled:opacity-50 min-h-[44px]"
            >
              {isExporting ? (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  <span>Generating A4 PDF...</span>
                </>
              ) : exportSuccess ? (
                <>
                  <Check className="w-4 h-4 text-green-300" />
                  <span>PDF Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>

      {/* Live Preview Paper Container */}
      <div className="bg-bg-secondary/70 rounded-2xl sm:rounded-3xl border border-border-subtle p-3 sm:p-6 overflow-hidden flex flex-col items-center">
        
        {/* Paper Frame Indicator */}
        <div className="w-full flex items-center justify-between text-[11px] font-mono text-text-muted pb-3 mb-2 border-b border-border-subtle/50 px-1">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-accent-primary" />
            Standard A4 Sheet Format (210mm × 297mm)
          </span>
          <span className="hidden sm:inline">
            Template: <strong className="text-text-primary">{templateMetas.find(t => t.id === activeTemplate)?.name}</strong>
          </span>
        </div>

        {/* Scrollable preview wrapper for small screens */}
        <div className="w-full overflow-x-auto flex justify-center py-2">
          <div 
            style={{ 
              transform: `scale(${zoomLevel})`,
              transformOrigin: 'top center',
              transition: 'transform 0.2s ease-out'
            }}
            className="shrink-0 shadow-2xl transition-all"
          >
            {/* The Print Area targeted by jsPDF & window.print() */}
            <div 
              id="resume-print-area" 
              ref={printAreaRef}
              className="w-[794px] min-h-[1123px] bg-white text-neutral-900 rounded-sm shadow-xl"
            >
              <ResumeTemplateRenderer templateId={activeTemplate} data={data} />
            </div>
          </div>
        </div>

        {/* Mobile notice */}
        <div className="text-center pt-2 text-[11px] font-mono text-text-muted">
          💡 Tip: The downloaded PDF renders high-res at standard 210mm × 297mm A4 size.
        </div>

      </div>
    </div>
  );
};
