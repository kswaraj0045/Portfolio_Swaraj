import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export interface PDFExportOptions {
  element: HTMLElement;
  filename: string;
  onStart?: () => void;
  onComplete?: () => void;
  onError?: (error: Error) => void;
}

/**
 * Generates and downloads an A4 formatted PDF from an HTML element.
 * Splits content into multiple pages automatically if height exceeds standard A4.
 */
export async function downloadResumePDF({
  element,
  filename,
  onStart,
  onComplete,
  onError
}: PDFExportOptions): Promise<void> {
  try {
    if (onStart) onStart();

    // Store original styles
    const originalWidth = element.style.width;
    const originalMaxWidth = element.style.maxWidth;

    // Standard A4 width in pixels at 96 DPI = 794px, height = 1123px
    // Render at fixed 794px width for precise A4 proportion
    element.style.width = '794px';
    element.style.maxWidth = '794px';

    // Wait a brief tick for layout settling and fonts
    await new Promise((resolve) => setTimeout(resolve, 150));

    // Render with html2canvas at scale 2 for crisp vector-like text fidelity
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      windowWidth: 794
    });

    // Restore original styles
    element.style.width = originalWidth;
    element.style.maxWidth = originalMaxWidth;

    const imgData = canvas.toDataURL('image/jpeg', 0.98);

    // Standard A4 dimensions in mm: 210 x 297
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true
    });

    const pdfWidth = 210;
    const pdfHeight = 297;
    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    // First page
    pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
    heightLeft -= pdfHeight;

    // Add extra pages if content overflows A4
    while (heightLeft > 5) { // 5mm tolerance
      position -= pdfHeight;
      pdf.addPage('a4', 'portrait');
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
      heightLeft -= pdfHeight;
    }

    // Clean filename
    const safeFilename = filename.endsWith('.pdf') ? filename : `${filename}.pdf`;
    pdf.save(safeFilename);

    if (onComplete) onComplete();
  } catch (err) {
    console.error('PDF Generation Error:', err);
    if (onError) onError(err instanceof Error ? err : new Error(String(err)));
  }
}

/**
 * Triggers native browser print dialog configured specifically for vector A4 PDF export.
 * This guarantees 100% selectable text, searchable strings, and native PDF vector rendering.
 */
export function triggerNativePrint(): void {
  window.print();
}
